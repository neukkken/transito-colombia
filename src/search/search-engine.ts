import { INFRACTIONS_CATALOG } from '../data/infractions.js';
import {
  ActorType,
  InfractionCategory,
  TrafficInfraction,
  VehicleClass
} from '../types/infraction.js';

export interface SearchInfractionsFilter {
  /** Texto a buscar en código, descripción, resumen o etiquetas */
  query?: string;
  /** Categoría o lista de categorías (A, B, C, D, E, F, G, H, I, J) */
  category?: InfractionCategory | InfractionCategory[];
  /** Actor de la vía involucrado */
  actor?: ActorType;
  /** Clase de vehículo involucrado */
  vehicleClass?: VehicleClass;
  /** Filtrar únicamente las que causan inmovilización */
  onlyImmobilizing?: boolean;
  /** Filtrar únicamente las que conllevan suspensión de licencia */
  onlySuspension?: boolean;
  /** Filtrar únicamente las detectables por fotomulta / cámaras SAST */
  onlyPhotomultas?: boolean;
  /** Límite máximo en SMLDV */
  maxSmldv?: number;
  /** Límite mínimo en SMLDV */
  minSmldv?: number;
}

function normalizeSearchText(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

/**
 * Motor de búsqueda avanzada y filtrado de infracciones de tránsito en Colombia.
 */
export function searchInfractions(
  filter: SearchInfractionsFilter = {}
): TrafficInfraction[] {
  let results = [...INFRACTIONS_CATALOG];

  // 1. Filtro por categoría(s)
  if (filter.category) {
    const cats = Array.isArray(filter.category)
      ? filter.category
      : [filter.category];
    results = results.filter((inf) => cats.includes(inf.category));
  }

  // 2. Filtro por inmovilización
  if (filter.onlyImmobilizing !== undefined) {
    results = results.filter(
      (inf) => inf.immobilization === filter.onlyImmobilizing
    );
  }

  // 3. Filtro por suspensión de licencia
  if (filter.onlySuspension !== undefined) {
    results = results.filter(
      (inf) => inf.licenseSuspension === filter.onlySuspension
    );
  }

  // 4. Filtro por fotomulta
  if (filter.onlyPhotomultas !== undefined) {
    results = results.filter(
      (inf) => inf.isPhotomultasEligible === filter.onlyPhotomultas
    );
  }

  // 5. Filtro por actor
  if (filter.actor) {
    results = results.filter((inf) => inf.appliesTo.includes(filter.actor!));
  }

  // 6. Filtro por clase de vehículo
  if (filter.vehicleClass) {
    results = results.filter(
      (inf) =>
        inf.vehicleTypes.includes(filter.vehicleClass!) ||
        inf.vehicleTypes.includes('TODOS')
    );
  }

  // 7. Filtro por montos SMLDV
  if (filter.minSmldv !== undefined) {
    results = results.filter((inf) => inf.smldv >= filter.minSmldv!);
  }
  if (filter.maxSmldv !== undefined) {
    results = results.filter((inf) => inf.smldv <= filter.maxSmldv!);
  }

  // 8. Búsqueda por texto libre
  if (filter.query && filter.query.trim()) {
    const terms = normalizeSearchText(filter.query)
      .split(/\s+/)
      .filter((t) => t.length > 0);

    results = results.filter((inf) => {
      const codeNorm = normalizeSearchText(inf.code);
      const descNorm = normalizeSearchText(inf.description);
      const shortDescNorm = normalizeSearchText(inf.shortDescription);
      const tagsNorm = inf.tags.map(normalizeSearchText).join(' ');

      const combined = `${codeNorm} ${descNorm} ${shortDescNorm} ${tagsNorm}`;

      // Todos los términos de la consulta deben coincidir
      return terms.every((term) => combined.includes(term));
    });
  }

  return results;
}

export function getInfractionsByCategory(
  category: InfractionCategory
): TrafficInfraction[] {
  return INFRACTIONS_CATALOG.filter((inf) => inf.category === category);
}

export function getPhotomultasEligibleInfractions(): TrafficInfraction[] {
  return INFRACTIONS_CATALOG.filter((inf) => inf.isPhotomultasEligible);
}

export function getImmobilizingInfractions(): TrafficInfraction[] {
  return INFRACTIONS_CATALOG.filter((inf) => inf.immobilization);
}
