import { TrafficInfraction } from "../types/infraction.js";

/**
 * Catálogo maestro completo de infracciones del Código Nacional de Tránsito de Colombia.
 * Fuente oficial: Ley 769 de 2002, Ley 1383 de 2010, Resolución 3027 de 2010 (Mintransporte).
 * Actualizado con Ley 1696 de 2013, Ley 2161 de 2021 y Ley 2251 de 2022.
 * Total: 131 infracciones oficiales codificadas (Grupos A, B, C, D, E, F, G, H, I, J).
 */
export const INFRACTIONS_CATALOG: readonly TrafficInfraction[] = [
  {
    "code": "A01",
    "rawCode": "A.01",
    "category": "A",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "No transitar por la derecha de la vía.",
    "shortDescription": "No transitar por la derecha de la vía en vehículo no automotor.",
    "smldv": 4,
    "smldvType": "EXACT",
    "uvtDefault": 3.47,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR"
    ],
    "vehicleTypes": [
      "BICICLETA",
      "TRACCION_ANIMAL"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "ciclista",
      "no automotor",
      "bicicleta",
      "a01",
      "grupo a",
      "carril derecho"
    ]
  },
  {
    "code": "A02",
    "rawCode": "A.02",
    "category": "A",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Agarrarse de otro vehículo en movimiento.",
    "shortDescription": "Sujetarse de otro vehículo en movimiento.",
    "smldv": 4,
    "smldvType": "EXACT",
    "uvtDefault": 3.47,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR"
    ],
    "vehicleTypes": [
      "BICICLETA",
      "TRACCION_ANIMAL"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "bicicleta",
      "remolque",
      "a02",
      "agarre",
      "grupo a",
      "peligro"
    ]
  },
  {
    "code": "A03",
    "rawCode": "A.03",
    "category": "A",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Transportar personas o cosas que disminuyan su visibilidad e incomoden la conducción.",
    "shortDescription": "Transportar personas o carga que reduzcan visibilidad o maniobrabilidad.",
    "smldv": 4,
    "smldvType": "EXACT",
    "uvtDefault": 3.47,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR"
    ],
    "vehicleTypes": [
      "BICICLETA",
      "TRACCION_ANIMAL"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "a03",
      "bicicleta",
      "grupo a",
      "visibilidad",
      "carga"
    ]
  },
  {
    "code": "A04",
    "rawCode": "A.04",
    "category": "A",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Transitar por andenes, aceras, puentes o demás lugares de uso exclusivo para el tránsito de peatones.",
    "shortDescription": "Transitar sobre andenes, aceras, puentes o zonas peatonales.",
    "smldv": 4,
    "smldvType": "EXACT",
    "uvtDefault": 3.47,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR"
    ],
    "vehicleTypes": [
      "BICICLETA",
      "TRACCION_ANIMAL"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "zona peatonal",
      "ciclista",
      "anden",
      "a04",
      "grupo a",
      "acera"
    ]
  },
  {
    "code": "A05",
    "rawCode": "A.05",
    "category": "A",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "No respetar las señales de tránsito.",
    "shortDescription": "No respetar las señales de tránsito en vehículo no automotor.",
    "smldv": 4,
    "smldvType": "EXACT",
    "uvtDefault": 3.47,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR"
    ],
    "vehicleTypes": [
      "BICICLETA",
      "TRACCION_ANIMAL"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "ciclista",
      "pare",
      "semaforo",
      "senales",
      "grupo a",
      "a05"
    ]
  },
  {
    "code": "A06",
    "rawCode": "A.06",
    "category": "A",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Transitar sin los dispositivos luminosos requeridos.",
    "shortDescription": "Transitar sin dispositivos luminosos delanteros o traseros requeridos.",
    "smldv": 4,
    "smldvType": "EXACT",
    "uvtDefault": 3.47,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR"
    ],
    "vehicleTypes": [
      "BICICLETA",
      "TRACCION_ANIMAL"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "ciclista",
      "a06",
      "reflectivo",
      "grupo a",
      "luces",
      "noche"
    ]
  },
  {
    "code": "A07",
    "rawCode": "A.07",
    "category": "A",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Transitar sin dispositivos que permitan la parada inmediata o con ellos, pero en estado defectuoso.",
    "shortDescription": "Transitar sin sistema de frenos o detención inmediata.",
    "smldv": 4,
    "smldvType": "EXACT",
    "uvtDefault": 3.47,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR"
    ],
    "vehicleTypes": [
      "BICICLETA",
      "TRACCION_ANIMAL"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "detencion",
      "a07",
      "bicicleta",
      "mecanica",
      "grupo a",
      "frenos"
    ]
  },
  {
    "code": "A08",
    "rawCode": "A.08",
    "category": "A",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Transitar por zonas prohibidas o, por aquellas vías en donde las autoridades competentes lo prohíban o, conducir por vías diferentes a aquellas especialmente diseñadas para ello cuando las hubiere.",
    "shortDescription": "Transitar por zonas o vías prohibidas para este tipo de vehículo.",
    "smldv": 4,
    "smldvType": "EXACT",
    "uvtDefault": 3.47,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR"
    ],
    "vehicleTypes": [
      "BICICLETA",
      "TRACCION_ANIMAL"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "prohibido",
      "grupo a",
      "a08",
      "ciclovia",
      "autopista"
    ]
  },
  {
    "code": "A09",
    "rawCode": "A.09",
    "category": "A",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Adelantar entre dos (2) vehículos automotores que estén en sus respectivos carriles.",
    "shortDescription": "Adelantar entre dos vehículos en movimiento.",
    "smldv": 4,
    "smldvType": "EXACT",
    "uvtDefault": 3.47,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR"
    ],
    "vehicleTypes": [
      "BICICLETA",
      "TRACCION_ANIMAL"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "bicicleta",
      "carriles",
      "a09",
      "adelantar",
      "zig-zag",
      "grupo a"
    ]
  },
  {
    "code": "A10",
    "rawCode": "A.10",
    "category": "A",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Conducir por la vía férrea o por zonas de protección y seguridad.",
    "shortDescription": "Circular sobre la vía férrea o zonas de protección del ferrocarril.",
    "smldv": 4,
    "smldvType": "EXACT",
    "uvtDefault": 3.47,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR"
    ],
    "vehicleTypes": [
      "BICICLETA",
      "TRACCION_ANIMAL"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "carrilera",
      "ferrocarril",
      "grupo a",
      "tren",
      "a10"
    ]
  },
  {
    "code": "A11",
    "rawCode": "A.11",
    "category": "A",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Transitar por zonas restringidas o por vías de alta velocidad como autopistas y arterias, en este caso el vehículo no automotor será inmovilizado.",
    "shortDescription": "Transitar por vías de alta velocidad o autopistas restringidas.",
    "smldv": 4,
    "smldvType": "EXACT",
    "uvtDefault": 3.47,
    "immobilization": true,
    "immobilizationType": "IMMEDIATE",
    "immobilizationDetails": "Inmovilización inmediata y traslado a patios oficiales según lo dispuesto en el Código Nacional de Tránsito.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR"
    ],
    "vehicleTypes": [
      "BICICLETA",
      "TRACCION_ANIMAL"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "restringida",
      "grupo a",
      "a11",
      "via rapida",
      "autopista"
    ]
  },
  {
    "code": "A12",
    "rawCode": "A.12",
    "category": "A",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Prestar servicio público con este tipo de vehículos. Además, el vehículo será inmovilizado por primera vez, por el término de cinco días, por segunda vez veinte días y por tercera vez cuarenta días. B. Infracciones en las que incurre el conductor y/o propietario de un vehículo automotor que dan lugar a la imposición de ocho (8) salarios mínimos legales diarios vigentes:",
    "shortDescription": "Prestar servicio público no autorizado en vehículos no automotores.",
    "smldv": 4,
    "smldvType": "EXACT",
    "uvtDefault": 3.47,
    "immobilization": true,
    "immobilizationType": "IMMEDIATE",
    "immobilizationDetails": "Inmovilización inmediata y traslado a patios oficiales según lo dispuesto en el Código Nacional de Tránsito.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR"
    ],
    "vehicleTypes": [
      "BICICLETA",
      "TRACCION_ANIMAL"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "servicio publico",
      "mototaxi",
      "a12",
      "bicitaxi",
      "transporte ilegal",
      "grupo a"
    ]
  },
  {
    "code": "B01",
    "rawCode": "B.01",
    "category": "B",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Conducir un vehículo sin llevar consigo la licencia de conducción.",
    "shortDescription": "Conducir sin llevar consigo la licencia de conducción.",
    "smldv": 8,
    "smldvType": "EXACT",
    "uvtDefault": 6.94,
    "immobilization": true,
    "immobilizationType": "PREVENTATIVE_60_MIN",
    "immobilizationDetails": "Inmovilización preventiva hasta por 60 minutos para subsanar la falta (llevar la licencia física o consultar el RUNT digital). Si no se subsana, traslado a patios.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "b01",
      "licencia de conduccion",
      "grupo b",
      "pase",
      "documentos",
      "no portar"
    ]
  },
  {
    "code": "B02",
    "rawCode": "B.02",
    "category": "B",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Conducir un vehículo con la licencia de conducción vencida, de acuerdo a los siguientes casos: a) El conductor de servicio público que no refrende su licencia de conducción cada tres (3) años; b) El conductor de servicio público mayor de sesenta años (60) que no refrende su licencia de conducción anualmente; c) El conductor de servicio diferente al público que a partir de los sesenta y cinco (65) años de edad, no refrende su licencia de conducción cada tres (3) años; d) El conductor de servicio diferente al público, que no refrende su licencia de conducción cada cinco (5) años.",
    "shortDescription": "Conducir con la licencia de conducción vencida.",
    "smldv": 8,
    "smldvType": "EXACT",
    "uvtDefault": 6.94,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "grupo b",
      "pase vencido",
      "renovacion",
      "documentos",
      "b02",
      "licencia vencida"
    ]
  },
  {
    "code": "B03",
    "rawCode": "B.03",
    "category": "B",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Conducir un vehículo sin placas, no portarlas en el extremo delantero o trasero, portarlas con obstáculos o en condiciones que dificulten su plena identificación, portar en el lugar destinado a las placas, distintivos similares a estas o que la imiten, o que correspondan a placas de otros países o, sin el permiso vigente expedido por autoridad de tránsito. Realizar cambio en las características que identifican un vehículo automotor. Cambiar, modificar o adulterar los números de identificación del motor, chasis o serie de un vehículo.",
    "shortDescription": "Conducir sin placas o no llevarlas en el sitio correspondiente.",
    "smldv": 8,
    "smldvType": "EXACT",
    "uvtDefault": 6.94,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "grupo b",
      "sin placa",
      "placas",
      "placa delantera",
      "b03",
      "placa trasera"
    ]
  },
  {
    "code": "B04",
    "rawCode": "B.04",
    "category": "B",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Conducir un vehículo con placas adulteradas, retocadas o alteradas.",
    "shortDescription": "Conducir con placas adulteradas, retocadas o modificadas.",
    "smldv": 8,
    "smldvType": "EXACT",
    "uvtDefault": 6.94,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "grupo b",
      "placa adulterada",
      "placa retocada",
      "placas",
      "b04"
    ]
  },
  {
    "code": "B05",
    "rawCode": "B.05",
    "category": "B",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Conducir un vehículo con una sola placa, o sin el permiso vigente expedido por autoridad de tránsito,",
    "shortDescription": "Conducir con una sola placa o con permiso de tránsito expirado.",
    "smldv": 8,
    "smldvType": "EXACT",
    "uvtDefault": 6.94,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "grupo b",
      "permiso transito",
      "b05",
      "una placa",
      "placas"
    ]
  },
  {
    "code": "B06",
    "rawCode": "B.06",
    "category": "B",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Conducir un vehículo con placas falsas. En los casos B1, B2, B3, B4, B5 y B6 los vehículos serán inmovilizados.",
    "shortDescription": "Conducir con placas falsas.",
    "smldv": 8,
    "smldvType": "EXACT",
    "uvtDefault": 6.94,
    "immobilization": true,
    "immobilizationType": "IMMEDIATE",
    "immobilizationDetails": "Inmovilización inmediata y traslado a patios oficiales según lo dispuesto en el Código Nacional de Tránsito.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "grupo b",
      "inmovilizacion",
      "delito",
      "b06",
      "placas",
      "placas falsas"
    ]
  },
  {
    "code": "B07",
    "rawCode": "B.07",
    "category": "B",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "No informar a la autoridad de tránsito competente el cambio de motor o color de un vehículo. En ambos casos, el vehículo será inmovilizado.",
    "shortDescription": "No informar el cambio de motor, color u otras características técnicas.",
    "smldv": 8,
    "smldvType": "EXACT",
    "uvtDefault": 6.94,
    "immobilization": true,
    "immobilizationType": "IMMEDIATE",
    "immobilizationDetails": "Inmovilización inmediata y traslado a patios oficiales según lo dispuesto en el Código Nacional de Tránsito.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "grupo b",
      "color",
      "caracteristicas",
      "runt",
      "b07",
      "cambio de motor"
    ]
  },
  {
    "code": "B08",
    "rawCode": "B.08",
    "category": "B",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "No pagar el peaje en los sitios establecidos.",
    "shortDescription": "Evadir el pago de peaje en casetas o estaciones autorizadas.",
    "smldv": 8,
    "smldvType": "EXACT",
    "uvtDefault": 6.94,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "grupo b",
      "caseta peaje",
      "evadir peaje",
      "peaje",
      "b08"
    ]
  },
  {
    "code": "B09",
    "rawCode": "B.09",
    "category": "B",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Utilizar equipos de sonido a volúmenes que incomoden a los pasajeros de un vehículo de servicio público.",
    "shortDescription": "Utilizar equipos de sonido a volumen excesivo en servicio público.",
    "smldv": 8,
    "smldvType": "EXACT",
    "uvtDefault": 6.94,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "servicio publico",
      "grupo b",
      "radio",
      "b09",
      "volumen",
      "musica"
    ]
  },
  {
    "code": "B10",
    "rawCode": "B.10",
    "category": "B",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Conducir un vehículo con vidrios polarizados, entintados u oscurecidos, sin portar el permiso respectivo, de acuerdo a la reglamentación existente sobre la materia o, no llevar el vehículo de servicio público colectivo urbano todos los vidrios transparentes.",
    "shortDescription": "Conducir con vidrios polarizados o entintados sin autorización legal.",
    "smldv": 8,
    "smldvType": "EXACT",
    "uvtDefault": 6.94,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "grupo b",
      "b10",
      "vidrios oscuros",
      "entintado",
      "polarizado",
      "permiso"
    ]
  },
  {
    "code": "B11",
    "rawCode": "B.11",
    "category": "B",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Conducir un vehículo con propaganda, publicidad o adhesivos en sus vidrios que obstaculicen la visibilidad.",
    "shortDescription": "Conducir con adhesivos o publicidad que obstruyan la visibilidad.",
    "smldv": 8,
    "smldvType": "EXACT",
    "uvtDefault": 6.94,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "grupo b",
      "adhesivo",
      "publicidad",
      "visibilidad",
      "b11",
      "calcomania"
    ]
  },
  {
    "code": "B12",
    "rawCode": "B.12",
    "category": "B",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "No respetar las normas establecidas por la autoridad competente para el tránsito de cortejos fúnebres.",
    "shortDescription": "No respetar disposiciones de tránsito en marchas cívicas o desfiles.",
    "smldv": 8,
    "smldvType": "EXACT",
    "uvtDefault": 6.94,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "grupo b",
      "tropas",
      "desfile",
      "marcha",
      "b12"
    ]
  },
  {
    "code": "B13",
    "rawCode": "B.13",
    "category": "B",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "No respetar las formaciones de tropas, la marcha de desfiles, procesiones, entierros, filas estudiantiles y las manifestaciones públicas y actividades deportivas, debidamente autorizadas por las autoridades de tránsito.",
    "shortDescription": "Interrumpir u obstaculizar formaciones de tropas, desfiles o cortejos fúnebres.",
    "smldv": 8,
    "smldvType": "EXACT",
    "uvtDefault": 6.94,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "grupo b",
      "cortejo funebre",
      "desfile",
      "b13",
      "formaciones"
    ]
  },
  {
    "code": "B14",
    "rawCode": "B.14",
    "category": "B",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Remolcar otro vehículo violando lo dispuesto por este código, así: a) Remolcar un vehículo con otro vehículo en zona urbana en circunstancia diferente a despejar la vía; b) Remolcar un vehículo con otro vehículo en zonas rurales sin cumplir con las siguientes condiciones: 1. Cuando el vehículo es halado por medio de cable, la distancia entre los dos (2) vehículos debe estar entre tres (3) y cuatro (4) metros. 2. Los vehículos de más de cinco (5) toneladas no podrán ser remolcados sino mediante una barra o un dispositivo especial; c) Remolcar un vehículo en horas de la noche, excepto con grúas; d) No portar el vehículo remolcado una señal de alerta reflectiva en la parte posterior o las luces intermitentes encendidas; e) Remolcar más de un vehículo a la vez.",
    "shortDescription": "Remolcar otro automotor incumpliendo las condiciones de seguridad.",
    "smldv": 8,
    "smldvType": "EXACT",
    "uvtDefault": 6.94,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "grupo b",
      "cuerda",
      "remolcar",
      "grua",
      "b14",
      "varada"
    ]
  },
  {
    "code": "B15",
    "rawCode": "B.15",
    "category": "B",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Conducir un vehículo de servicio público que no lleve el aviso de tarifas oficiales en condiciones de fácil lectura para los pasajeros o poseer este aviso deteriorado o adulterado.",
    "shortDescription": "Conducir vehículo de servicio público sin exhibir tabla de tarifas oficiales.",
    "smldv": 8,
    "smldvType": "EXACT",
    "uvtDefault": 6.94,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "BUS",
      "BUSETA",
      "MICROBUS",
      "AUTOMOVIL"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "servicio publico",
      "grupo b",
      "taxi",
      "tarifa",
      "b15",
      "tabla de precios"
    ]
  },
  {
    "code": "B16",
    "rawCode": "B.16",
    "category": "B",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Permitir que en un vehículo de servicio público para transporte de pasajeros se lleven animales u objetos que incomoden a los pasajeros. No llevar el equipaje de los pasajeros en la bodega, baúl o parrilla.",
    "shortDescription": "Llevar pasajeros de pie en servicio público no habilitado para ello.",
    "smldv": 8,
    "smldvType": "EXACT",
    "uvtDefault": 6.94,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "BUS",
      "BUSETA",
      "MICROBUS",
      "AUTOMOVIL"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "servicio publico",
      "grupo b",
      "pasajeros de pie",
      "bus",
      "b16",
      "sobrecupo"
    ]
  },
  {
    "code": "B17",
    "rawCode": "B.17",
    "category": "B",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Abandonar un vehículo de servicio público con pasajeros.",
    "shortDescription": "Abandonar el vehículo de servicio público con usuarios a bordo.",
    "smldv": 8,
    "smldvType": "EXACT",
    "uvtDefault": 6.94,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "BUS",
      "BUSETA",
      "MICROBUS",
      "AUTOMOVIL"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "grupo b",
      "servicio publico",
      "abandonar vehiculo",
      "pasajeros",
      "b17"
    ]
  },
  {
    "code": "B18",
    "rawCode": "B.18",
    "category": "B",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "No transitar por el carril derecho el vehículo de transporte público individual, cuando transita sin pasajeros indicando la disponibilidad para prestar el servicio, mediante luz especial o la señal luminosa de estar libre;",
    "shortDescription": "No circular por el carril derecho en vehículo de transporte público o carga.",
    "smldv": 8,
    "smldvType": "EXACT",
    "uvtDefault": 6.94,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "BUS",
      "BUSETA",
      "MICROBUS",
      "AUTOMOVIL"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "grupo b",
      "bus",
      "b18",
      "transporte publico",
      "carril derecho",
      "camion"
    ]
  },
  {
    "code": "B19",
    "rawCode": "B.19",
    "category": "B",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Realizar el cargue o descargue de un vehículo en sitios y horas prohibidas por las autoridades competentes, de acuerdo con lo establecido en las normas correspondientes.",
    "shortDescription": "Efectuar labores de cargue y descargue en horarios o sitios no permitidos.",
    "smldv": 8,
    "smldvType": "EXACT",
    "uvtDefault": 6.94,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "CAMION",
      "TRACTOCAMION",
      "VOLQUETA"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "grupo b",
      "cargue y descargue",
      "mercancia",
      "b19",
      "camion",
      "horarios"
    ]
  },
  {
    "code": "B20",
    "rawCode": "B.20",
    "category": "B",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Transportar carne, pescado o alimentos fácilmente corruptibles, en vehículos que no cumplan las condiciones fijadas por el Ministerio de Transporte.",
    "shortDescription": "Transportar carne, pescado o alimentos perecederos sin refrigeración adecuada.",
    "smldv": 8,
    "smldvType": "EXACT",
    "uvtDefault": 6.94,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "grupo b",
      "carne",
      "refrigeracion",
      "b20",
      "pescado",
      "alimentos",
      "salud"
    ]
  },
  {
    "code": "B21",
    "rawCode": "B.21",
    "category": "B",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Lavar vehículos en vía pública, en ríos, en canales y en quebradas.",
    "shortDescription": "Lavar automotores en vías públicas, ríos, quebradas o canales.",
    "smldv": 8,
    "smldvType": "EXACT",
    "uvtDefault": 6.94,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "grupo b",
      "medio ambiente",
      "rio",
      "lavar carro",
      "b21",
      "quebrada",
      "espacio publico"
    ]
  },
  {
    "code": "B22",
    "rawCode": "B.22",
    "category": "B",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Llevar niños menores de diez (10) años en el asiento delantero.",
    "shortDescription": "Transportar niños menores de 10 años en el asiento delantero.",
    "smldv": 8,
    "smldvType": "EXACT",
    "uvtDefault": 6.94,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "AUTOMOVIL",
      "CAMIONETA",
      "CAMPERO"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "grupo b",
      "ninos",
      "asiento delantero",
      "silla infantil",
      "b22",
      "seguridad"
    ]
  },
  {
    "code": "B23",
    "rawCode": "B.23",
    "category": "B",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Utilizar radios, equipos de sonido o de amplificación a volúmenes que superen los decibeles máximos establecidos por las autoridades ambientales. De igual forma utilizar pantallas, proyectores de imagen o similares en la parte delantera de los vehículos, mientras esté en movimiento.C. Infracciones en las que incurre el conductor y/o propietario de un vehículo automotor que dan lugar a la imposición de quince (15) salarios mínimos legales diarios vigentes:",
    "shortDescription": "Reproducir sonido a volumen superior a los límites máximos permitidos.",
    "smldv": 8,
    "smldvType": "EXACT",
    "uvtDefault": 6.94,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "musica alta",
      "grupo b",
      "ruido",
      "sonido",
      "b23",
      "decibeles"
    ]
  },
  {
    "code": "C01",
    "rawCode": "C.01",
    "category": "C",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Presentar licencia de conducción adulterada o ajena, lo cual dará lugar a la inmovilización del vehículo.",
    "shortDescription": "Presentar licencia de conducción ajena o con indicios de adulteración.",
    "smldv": 15,
    "smldvType": "EXACT",
    "uvtDefault": 13.02,
    "immobilization": true,
    "immobilizationType": "IMMEDIATE",
    "immobilizationDetails": "Inmovilización inmediata y traslado a patios oficiales según lo dispuesto en el Código Nacional de Tránsito.",
    "licenseSuspension": true,
    "licenseSuspensionDetails": "Imposibilidad de tramitar licencia o suspensión por fraude a la autoridad de tránsito.",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "c01",
      "pase falso",
      "licencia falsa",
      "suplantacion",
      "grupo c",
      "licencia ajena"
    ]
  },
  {
    "code": "C02",
    "rawCode": "C.02",
    "category": "C",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Estacionar un vehículo en los siguientes sitios prohibidos: a) Sobre andenes, zonas verdes o sobre espacio público destinado para peatones, recreación o conservación; b) En vías arterias, autopistas, zonas de seguridad, o dentro de un cruce; c) En vías principales y colectoras en las cuales expresamente se indique la prohibición o la restricción en relación con horarios o tipos de vehículos; d) En puentes, viaductos, túneles, pasos bajos, estructuras elevadas o en cualquiera de los accesos a estos; e) En zonas expresamente destinadas para estacionamiento o parada de cierto tipo de vehículos, incluyendo las paradas de vehículos de servicio público, o para limitados físicos; f) En carriles dedicados al transporte masivo sin autorización; g) A una distancia mayor de treinta (30) centímetros de la acera o mayor a cinco (5) metros de la intersección; h) En doble fila de vehículos estacionados, o frente a hidrantes y entradas de garajes; i) En curvas; j) Donde interfiera con la salida de vehículos estacionados; k) Donde las autoridades de tránsito lo prohíban; l) En zona de seguridad y de protección de la vía férrea, en la vía principal, vías secundarias, apartaderos, estaciones y anexidades férreas; m) En los lugares de comercio u obras de construcción de los perímetros urbanos con el objeto de cargar o descargar, fuera de las zonas y horarios determinados para tal fin.",
    "shortDescription": "Estacionar el vehículo en sitios prohibidos (andenes, ochavas, paraderos, etc.).",
    "smldv": 15,
    "smldvType": "EXACT",
    "uvtDefault": 13.02,
    "immobilization": true,
    "immobilizationType": "ABSENCE_OF_DRIVER",
    "immobilizationDetails": "Inmovilización con grúa y traslado a patios cuando el conductor no se encuentre en el lugar para retirar el vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": true,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "mal parqueado",
      "fotomulta",
      "parqueo",
      "grua",
      "estacionamiento prohibido",
      "c02",
      "grupo c"
    ]
  },
  {
    "code": "C03",
    "rawCode": "C.03",
    "category": "C",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Bloquear una calzada o intersección con un vehículo, salvo cuando el bloqueo obedezca a la ocurrencia de un accidente de tránsito.",
    "shortDescription": "Bloquear intersecciones viales o calzadas.",
    "smldv": 15,
    "smldvType": "EXACT",
    "uvtDefault": 13.02,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "interseccion",
      "bloqueo calzada",
      "trancón",
      "grupo c",
      "congestion",
      "c03"
    ]
  },
  {
    "code": "C04",
    "rawCode": "C.04",
    "category": "C",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Estacionar un vehículo sin tomar las siguientes precauciones: a) En vías urbanas donde está permitido el estacionamiento, no realizarse lo más cercano posible al andén o al límite lateral de la calzada, esto es no menos de treinta (30) centímetros del andén y a una distancia mínima de cinco (5) metros de intersección; b) En autopistas y zonas rurales, estacionarse dentro de la vía cuando se cuenta con espacios para estacionar por fuera de esta; c) No colocar las señales reflectivas de peligro si es de día o las luces de estacionamiento y señales luminosas de peligro si es de noche; d) En caso de reparaciones en vía pública, en los perímetros rurales, no colocar las señales de peligro a distancia entre cincuenta (50) y cien (100) metros adelante y atrás del vehículo; e) En las zonas de estacionamiento prohibido, permanecer por un tiempo superior a 30 minutos, tiempo necesario para su remolque.",
    "shortDescription": "Estacionar sin activar frenos de seguridad o sin cuñas en pendiente.",
    "smldv": 15,
    "smldvType": "EXACT",
    "uvtDefault": 13.02,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "cunas",
      "c04",
      "estacionar en bajada",
      "grupo c",
      "pendiente",
      "freno de mano"
    ]
  },
  {
    "code": "C05",
    "rawCode": "C.05",
    "category": "C",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "No reducir la velocidad a treinta (30) kilómetros por hora en los siguientes casos: a) En lugares de concentración de personas y en zonas residenciales; b) En las zonas escolares en los horarios y días de funcionamiento de la institución educativa; c) Cuando se reduzcan las condiciones de visibilidad; d) Cuando las señales de tránsito así lo ordenen; e) En proximidad a una intersección; f) Cuando transite por cruces de hospitales o terminales de pasajeros.",
    "shortDescription": "No reducir la velocidad a 30 km/h en zonas escolares o residenciales.",
    "smldv": 15,
    "smldvType": "EXACT",
    "uvtDefault": 13.02,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "c05",
      "30 km/h",
      "colegio",
      "zona escolar",
      "grupo c",
      "velocidad",
      "zona residencial"
    ]
  },
  {
    "code": "C06",
    "rawCode": "C.06",
    "category": "C",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "No utilizar el cinturón de seguridad por parte de los ocupantes del vehículo y los cinturones de seguridad en los asientos traseros en los vehículos fabricados a partir del año 2004.",
    "shortDescription": "No hacer uso del cinturón de seguridad los ocupantes del vehículo.",
    "smldv": 15,
    "smldvType": "EXACT",
    "uvtDefault": 13.02,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "c06",
      "pasajeros",
      "seguridad vial",
      "grupo c",
      "cinturon de seguridad"
    ]
  },
  {
    "code": "C07",
    "rawCode": "C.07",
    "category": "C",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Dejar de señalizar: a) Con las luces direccionales la maniobra de giro o de cambio de carril; b) Mediante señales manuales, solo en caso de emergencia, y ante la imposibilidad de utilizar las señales direccionales, para cruzar a la izquierda o cambio de carril, para lo cual sacará el brazo izquierdo y lo extenderá horizontalmente; c) Mediante señales manuales, solo en caso de emergencia, y ante la imposibilidad de utilizar las señales direccionales para indicar cruce a la derecha, cambio de carril, para lo cual sacará el brazo izquierdo formando escuadra con la mano hacia arriba; d) Mediante señales manuales, solo en caso de emergencia, y ante la imposibilidad de utilizar las señales direccionales para indicar reducción de velocidad o detención del vehículo, para lo cual sacará el brazo izquierdo formando escuadra con la mano hacia abajo; e) En carreteras o vías rápidas, la indicación intermitente de la señal direccional por lo menos con sesenta (60) metros de antelación al giro, y en zonas urbanas, por lo menos con treinta (30) metros de antelación; f) Mediante señales manuales al peatón que tiene preferencia al paso de la vía, una vez detenido el vehículo y siempre y cuando esté cruzando por una zona demarcada en vías de baja velocidad.",
    "shortDescription": "No utilizar luces direccionales o señales manuales antes de virar.",
    "smldv": 15,
    "smldvType": "EXACT",
    "uvtDefault": 13.02,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "direccionales",
      "c07",
      "grupo c",
      "maniobra",
      "luces de giro",
      "senalizar"
    ]
  },
  {
    "code": "C08",
    "rawCode": "C.08",
    "category": "C",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Transitar sin los dispositivos luminosos requeridos; no llevar los vehículos de servicio público y oficial, un aviso visible tanto en el interior como en el exterior en el que se señale el número telefónico del centro de llamadas contratado por la Superintendencia de Puertos y Transporte o los vehículos de servicio público no llevar además marcado en los costados y en el techo el número de la placa o los demás elementos determinados en este código.",
    "shortDescription": "Transitar sin dispositivos luminosos encendidos en horas nocturnas o túneles.",
    "smldv": 15,
    "smldvType": "EXACT",
    "uvtDefault": 13.02,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "c08",
      "tunel",
      "luces apagadas",
      "grupo c",
      "farolas",
      "noche"
    ]
  },
  {
    "code": "C09",
    "rawCode": "C.09",
    "category": "C",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "No respetar las señales de detención en el cruce de una línea férrea a una distancia mínima de cinco (5) metros de la vía férrea o conducir por la vía férrea o por las zonas de protección y seguridad de ella.",
    "shortDescription": "No detener la marcha ante una señal ferroviaria o cruce a nivel.",
    "smldv": 15,
    "smldvType": "EXACT",
    "uvtDefault": 13.02,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "pare tren",
      "cruce de tren",
      "ferrocarril",
      "grupo c",
      "c09"
    ]
  },
  {
    "code": "C10",
    "rawCode": "C.10",
    "category": "C",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Conducir un vehículo con una o varias puertas abiertas.",
    "shortDescription": "Conducir un vehículo con una o más puertas abiertas.",
    "smldv": 15,
    "smldvType": "EXACT",
    "uvtDefault": 13.02,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "puertas abiertas",
      "pasajeros",
      "c10",
      "grupo c",
      "peligro"
    ]
  },
  {
    "code": "C11",
    "rawCode": "C.11",
    "category": "C",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "No portar como mínimo el siguiente equipo de prevención y seguridad: a) Un gato con capacidad para elevar el vehículo; b) Una cruceta; c) Dos señales de carretera en forma de triángulo en material reflectivo y provistas de soportes para ser colocadas en forma vertical o lámparas de señal de luz amarilla intermitentes o de destello; d) Un botiquín de primeros auxilios; e) Un extintor; f) Dos tacos para bloquear el vehículo; g) Caja de herramienta básica que como mínimo deberá contener: Alicate, destornilladores, llave de expansión y llaves fijas; h) Llanta de repuesto; i) Linterna.",
    "shortDescription": "No portar el equipo de prevención y seguridad vial reglamentario (carretera).",
    "smldv": 15,
    "smldvType": "EXACT",
    "uvtDefault": 13.02,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "kit de carretera",
      "extintor",
      "botiquin",
      "triangulos",
      "grupo c",
      "gato",
      "c11"
    ]
  },
  {
    "code": "C12",
    "rawCode": "C.12",
    "category": "C",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Proveer de combustible un vehículo automotor con el motor encendido, con pasajeros a bordo cuando el vehículo es de servicio público de radio de acción nacional, transporte especial y escolar o proveer de combustible un vehículo de radio de acción metropolitano, distrital o municipal mientras que estén prestando el servicio.",
    "shortDescription": "Tanquetear combustible con el motor en funcionamiento.",
    "smldv": 15,
    "smldvType": "EXACT",
    "uvtDefault": 13.02,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "motor encendido",
      "c12",
      "grupo c",
      "estacion de servicio",
      "gasolina",
      "tanquear"
    ]
  },
  {
    "code": "C13",
    "rawCode": "C.13",
    "category": "C",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Conducir un vehículo automotor sin las adaptaciones pertinentes, cuando el conductor padece de limitación física.",
    "shortDescription": "Conducir vehículo sin las adaptaciones mecánicas para discapacidad requeridas.",
    "smldv": 15,
    "smldvType": "EXACT",
    "uvtDefault": 13.02,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "adaptacion mecanica",
      "grupo c",
      "discapacidad",
      "mandos",
      "c13"
    ]
  },
  {
    "code": "C14",
    "rawCode": "C.14",
    "category": "C",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Transitar por los siguientes sitios restringidos o en horas prohibidas por la autoridad competente. Además, el vehículo será inmovilizado: a) Por la zona de seguridad y protección de la vía férrea; b) Por los andenes o aceras o puentes de uso exclusivo para los peatones; c) Las motocicletas y los motociclos, por las ciclorrutas o ciclovías; d) Sobre las aceras y zonas de seguridad, salvo en el caso de entrada a garajes o sitios de estacionamiento; e) Durante los días y horas prohibidas por la autoridad competente.",
    "shortDescription": "Transitar por sitios o en horarios restringidos (Pico y Placa).",
    "smldv": 15,
    "smldvType": "EXACT",
    "uvtDefault": 13.02,
    "immobilization": true,
    "immobilizationType": "IMMEDIATE",
    "immobilizationDetails": "Inmovilización inmediata y traslado a patios oficiales según lo dispuesto en el Código Nacional de Tránsito.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": true,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "restriccion vehicular",
      "c14",
      "fotomulta",
      "pico y placa",
      "horario restringido",
      "grupo c"
    ]
  },
  {
    "code": "C15",
    "rawCode": "C.15",
    "category": "C",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Conducir un vehículo, particular o de servicio público, excediendo la capacidad autorizada en la licencia de tránsito o tarjeta de operación.",
    "shortDescription": "Conducir transportando más pasajeros de los autorizados por tarjeta de operación.",
    "smldv": 15,
    "smldvType": "EXACT",
    "uvtDefault": 13.02,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "BUS",
      "BUSETA",
      "MICROBUS",
      "AUTOMOVIL"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "capacidad",
      "grupo c",
      "c15",
      "tarjeta de operacion",
      "sobrecupo"
    ]
  },
  {
    "code": "C16",
    "rawCode": "C.16",
    "category": "C",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Conducir un vehículo escolar sin el permiso respectivo o los distintivos reglamentarios, esto es, no llevar los colores verde y/o blanco distribuidos a lo largo y ancho de la carrocería, en la parte posterior de la carrocería del vehículo franjas alternas de diez (10) centímetros de ancho en colores amarillo y negro, con inclinación de 45 grados y una altura mínima de 60 centímetros; en la parte superior trasera y delantera de la carrocería en caracteres destacados, de altura mínima de 10 centímetros, no llevar la leyenda \"ESCOLAR\", además el vehículo será inmovilizado.",
    "shortDescription": "Conducir transporte escolar sin permisos o distintivos reglamentarios.",
    "smldv": 15,
    "smldvType": "EXACT",
    "uvtDefault": 13.02,
    "immobilization": true,
    "immobilizationType": "IMMEDIATE",
    "immobilizationDetails": "Inmovilización inmediata y traslado a patios oficiales según lo dispuesto en el Código Nacional de Tránsito.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TRANSPORTE_ESCOLAR",
      "MICROBUS",
      "BUSETA"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "ruta escolar",
      "ninos",
      "transporte escolar",
      "colegio",
      "c16",
      "grupo c"
    ]
  },
  {
    "code": "C17",
    "rawCode": "C.17",
    "category": "C",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Circular con combinaciones de vehículos de dos (2) o más unidades remolcadas, sin autorización especial de autoridad competente.",
    "shortDescription": "Circular con articulaciones o remolques no homologados por el ministerio.",
    "smldv": 15,
    "smldvType": "EXACT",
    "uvtDefault": 13.02,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "CAMION",
      "TRACTOCAMION",
      "REMOLQUE",
      "SEMIRREMOLQUE"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "tractomula",
      "c17",
      "grupo c",
      "remolques",
      "combinacion de vehiculos"
    ]
  },
  {
    "code": "C18",
    "rawCode": "C.18",
    "category": "C",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Conducir un vehículo autorizado para prestar servicio público con el taxímetro dañado, con los sellos rotos o etiquetas adhesivas con calibración vencida o adulteradas o cuando se carezca de él, o cuando aún teniéndolo, no cumpla con las normas mínimas de calidad y seguridad exigidas por la autoridad competente o este no esté en funcionamiento, además el vehículo será inmovilizado.",
    "shortDescription": "Operar transporte escolar para fines comerciales no permitidos.",
    "smldv": 15,
    "smldvType": "EXACT",
    "uvtDefault": 13.02,
    "immobilization": true,
    "immobilizationType": "IMMEDIATE",
    "immobilizationDetails": "Inmovilización inmediata y traslado a patios oficiales según lo dispuesto en el Código Nacional de Tránsito.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "BUS",
      "BUSETA",
      "MICROBUS",
      "AUTOMOVIL"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "c18",
      "transporte especial",
      "grupo c",
      "ruta escolar ilegal",
      "uso indebido"
    ]
  },
  {
    "code": "C19",
    "rawCode": "C.19",
    "category": "C",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Dejar o recoger pasajeros en sitios distintos de los demarcados por las autoridades, al costado derecho de la vía, salvo en paraderos especiales de vías troncales que sean diseñadas y operadas con destinación exclusiva al transporte público masivo.",
    "shortDescription": "Recoger o dejar pasajeros fuera de los paraderos o zonas señalizadas.",
    "smldv": 15,
    "smldvType": "EXACT",
    "uvtDefault": 13.02,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "BUS",
      "BUSETA",
      "MICROBUS",
      "AUTOMOVIL"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "taxi",
      "dejar pasajeros",
      "bus",
      "paradero",
      "grupo c",
      "recoger pasajeros",
      "c19"
    ]
  },
  {
    "code": "C20",
    "rawCode": "C.20",
    "category": "C",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Conducir un vehículo de carga en que se transporten materiales de construcción o a granel sin las medidas de protección, higiene y seguridad ordenadas; que no esté debidamente empacada, rotulada, embalada y cubierta conforme a la normatividad técnica nacional cuando esta aplique, de acuerdo con las exigencias propias de su naturaleza, de manera que cumpla con las medidas de seguridad vial y la normatividad ambiental. Además el vehículo será inmovilizado.",
    "shortDescription": "Transportar escombros o materiales de construcción sin carpa protectora.",
    "smldv": 15,
    "smldvType": "EXACT",
    "uvtDefault": 13.02,
    "immobilization": true,
    "immobilizationType": "IMMEDIATE",
    "immobilizationDetails": "Inmovilización inmediata y traslado a patios oficiales según lo dispuesto en el Código Nacional de Tránsito.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "CAMION",
      "TRACTOCAMION",
      "VOLQUETA"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "carpa",
      "materiales",
      "escombros",
      "arena",
      "grupo c",
      "c20",
      "volqueta"
    ]
  },
  {
    "code": "C21",
    "rawCode": "C.21",
    "category": "C",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "No asegurar la carga para evitar que se caigan en la vía las cosas transportadas. Además, se inmovilizará el vehículo hasta tanto se remedie la situación.",
    "shortDescription": "No afianzar debidamente la carga transportada con riesgo de caída a la calzada.",
    "smldv": 15,
    "smldvType": "EXACT",
    "uvtDefault": 13.02,
    "immobilization": true,
    "immobilizationType": "IMMEDIATE",
    "immobilizationDetails": "Inmovilización inmediata y traslado a patios oficiales según lo dispuesto en el Código Nacional de Tránsito.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "CAMION",
      "TRACTOCAMION",
      "VOLQUETA"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "caida de carga",
      "asegurar carga",
      "grupo c",
      "c21",
      "camion"
    ]
  },
  {
    "code": "C22",
    "rawCode": "C.22",
    "category": "C",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Transportar carga de dimensiones superiores a las autorizadas sin cumplir con los requisitos exigidos. Además, el vehículo será inmovilizado hasta que se remedie dicha situación.",
    "shortDescription": "Transportar carga que supere dimensiones reglamentarias sin autorización.",
    "smldv": 15,
    "smldvType": "EXACT",
    "uvtDefault": 13.02,
    "immobilization": true,
    "immobilizationType": "IMMEDIATE",
    "immobilizationDetails": "Inmovilización inmediata y traslado a patios oficiales según lo dispuesto en el Código Nacional de Tránsito.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "CAMION",
      "TRACTOCAMION",
      "VOLQUETA"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "c22",
      "permiso especial",
      "carga extradimensionada",
      "grupo c",
      "dimensiones"
    ]
  },
  {
    "code": "C23",
    "rawCode": "C.23",
    "category": "C",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Impartir en vías públicas al público enseñanza práctica para conducir, sin estar autorizado para ello.",
    "shortDescription": "Impartir clases de conducción en vías públicas sin autorización del CEA.",
    "smldv": 15,
    "smldvType": "EXACT",
    "uvtDefault": 13.02,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "escuela de conduccion",
      "ensenanza vial",
      "clase en calle",
      "c23",
      "grupo c"
    ]
  },
  {
    "code": "C24",
    "rawCode": "C.24",
    "category": "C",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Conducir motocicleta sin observar las siguientes normas: a) Transitar ocupando un carril, observando lo dispuesto en los artículos 60 y 68 del presente Código, así: 1. Ocupar el carril dentro de las líneas de demarcación, y atravesarlos solamente para efectuar maniobras de adelantamiento o de cruce. 2. En una vía de sentido único de tránsito, con velocidad reglamentada para sus carriles, los vehículos utilizarán el carril de acuerdo con su velocidad de marcha. 3. En una vía de sentido único de tránsito, donde los carriles no tengan reglamentada su velocidad, los vehículos transitarán por el carril derecho y los demás carriles se emplearán para maniobras de adelantamiento. 4. En una vía de doble sentido de tránsito con dos (2) carriles, el vehículo deberá transitar por el carril de su derecha y utilizar con precaución el carril de su izquierda para maniobras de adelantamiento y respetar siempre la señalización respectiva. 5. En una vía de doble sentido de tránsito con tres (3) carriles los vehículos deberán transitar por los carriles extremos que queden a su derecha; el carril central sólo se utilizará en el sentido que señale la autoridad competente. 6. En una vía de doble sentido de tránsito con cuatro (4) carriles, los carriles exteriores se utilizarán para el tránsito ordinario de vehículos, y los interiores, para maniobras de adelantamiento o para circular a mayores velocidades dentro de los límites establecidos. 7. Transitar en motocicletas y motociclos por las ciclorrutas o ciclovías. Además el vehículo será inmovilizado; b) Podrán llevar un acompañante en su vehículo, el cual también deberá utilizar casco y la prenda reflectiva exigida para el conductor; c) Deberán usar de acuerdo con lo estipulado para vehículos automotores, las luces direccionales. De igual forma utilizar, en todo momento, los espejos retrovisores; d) Todo el tiempo que transiten por las vías de uso público, deberán hacerlo con las luces delanteras y traseras encendidas; e) Los conductores y los acompañantes cuando hubieren, deberán utilizar casco de seguridad y en él, conforme a la reglamentación que expida el Ministerio de Transporte, el número de la placa del vehículo en que se transite, con excepción de los pertenecientes a la fuerza pública, que se identificarán con el número interno asignado por la respectiva institución. La no utilización del casco de seguridad cuando corresponda dará lugar a la inmovilización del vehículo; f) No se podrán transportar objetos que disminuyan la visibilidad, que incomoden al conductor o acompañante o que ofrezcan peligro para los demás usuarios de las vías; g) Los conductores de estos tipos de vehículos y sus acompañantes deben vestir chalecos o chaquetas reflectivas de identificación que deben ser visibles cuando se conduzca entre las 18:00 y las 6:00 horas del día siguiente, y siempre que la visibilidad sea escasa; h) No deben sujetarse de otro vehículo o viajar cerca de otro carruaje de mayor tamaño que lo oculte de la vista de los conductores que transiten en sentido contrario; i) No deben transitar sobre las aceras, lugares destinados al tránsito de peatones y por aquellas vías en donde las autoridades competentes lo prohíban. Deben conducir en las vías públicas permitidas o, donde existan, en aquellas especialmente diseñadas para ello; j) Deben respetar las señales, normas de tránsito y límites de velocidad; k) No deben adelantar a otros vehículos por la derecha o entre vehículos que transiten por sus respectivos carriles. Siempre utilizarán el carril libre a la izquierda del vehículo a sobrepasar; l) Deben usar las señales manuales detalladas en este código.",
    "shortDescription": "Conducir motocicleta sin casco reglamentario, chaleco reflectivo o normas técnicas.",
    "smldv": 15,
    "smldvType": "EXACT",
    "uvtDefault": 13.02,
    "immobilization": true,
    "immobilizationType": "IMMEDIATE",
    "immobilizationDetails": "Inmovilización inmediata y traslado a patios oficiales según lo dispuesto en el Código Nacional de Tránsito.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "MOTOCICLETA"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "chaleco reflectivo",
      "motocicleta",
      "grupo c",
      "placa en casco",
      "casco",
      "moto",
      "c24"
    ]
  },
  {
    "code": "C25",
    "rawCode": "C.25",
    "category": "C",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Transitar sin atender alguna de las siguientes reglas: a) Cuando hubiere más de un carril, por el carril izquierdo de la vía a velocidad que entorpezca el tránsito de los demás vehículos; b) En una vía de sentido único de tránsito, con velocidad reglamentada para sus carriles, los vehículos utilizarán el carril de acuerdo con su velocidad de marcha; c) En una vía de sentido único de tránsito, donde los carriles no tengan reglamentada su velocidad, los vehículos transitarán por el carril derecho y los demás carriles se emplearán para maniobras de adelantamiento; d) En una vía de doble sentido de tránsito con dos (2) carriles. El vehículo deberá transitar por el carril de su derecha y utilizar con precaución el carril de su izquierda para maniobras de adelantamiento y respetar siempre la señalización respectiva; e) En una vía de doble sentido de tránsito con tres (3) carriles. Los vehículos deberán transitar por los carriles extremos que queden a su derecha; el carril central sólo se utilizará en el sentido que señale la autoridad competente; f) En una vía de doble sentido de tránsito con cuatro (4) carriles. Los carriles exteriores se utilizarán para el tránsito ordinario de vehículos, y los interiores, para maniobras de adelantamiento o para circular a mayores velocidades dentro de los límites establecidos.",
    "shortDescription": "No transitar por el carril correspondiente en vías de múltiples calzadas.",
    "smldv": 15,
    "smldvType": "EXACT",
    "uvtDefault": 13.02,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "cambio indebido de carril",
      "carril",
      "grupo c",
      "c25",
      "autopista"
    ]
  },
  {
    "code": "C26",
    "rawCode": "C.26",
    "category": "C",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Transitar en vehículos de 3.5 o más toneladas por el carril izquierdo de la vía cuando hubiere más de un carril.",
    "shortDescription": "Circular camiones o vehículos pesados por el carril izquierdo.",
    "smldv": 15,
    "smldvType": "EXACT",
    "uvtDefault": 13.02,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "CAMION",
      "TRACTOCAMION",
      "VOLQUETA"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "camion carril izquierdo",
      "c26",
      "carril izquierdo",
      "grupo c",
      "vehiculo pesado"
    ]
  },
  {
    "code": "C27",
    "rawCode": "C.27",
    "category": "C",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Conducir un vehículo cuya carga o pasajeros obstruyan la visibilidad del conductor hacia el frente, atrás o costados, o impidan el control sobre el sistema de dirección, frenos o seguridad. Además el vehículo será inmovilizado.",
    "shortDescription": "Transportar pasajeros o carga que impidan la visibilidad del conductor.",
    "smldv": 15,
    "smldvType": "EXACT",
    "uvtDefault": 13.02,
    "immobilization": true,
    "immobilizationType": "PREVENTATIVE_60_MIN",
    "immobilizationDetails": "Inmovilización preventiva para subsanar la causa técnica o de visibilidad.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "visibilidad obstruida",
      "pasajeros",
      "grupo c",
      "c27",
      "carga alta"
    ]
  },
  {
    "code": "C28",
    "rawCode": "C.28",
    "category": "C",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Hacer uso de sirenas, luces intermitentes, o de alta intensidad y aparatos similares los cuales están reservados a los vehículos de bomberos, ambulancias, recolectores de basura, socorro, emergencia, fuerzas militares, policía y autoridades de tránsito y transporte; el uso de cornetas en el perímetro urbano; el uso e instalación, en cualquier vehículo destinado a la circulación en vías públicas, de toda clase de dispositivos o accesorios diseñados para producir ruido, tales como válvulas, resonadores y pitos adaptados a los sistemas de bajo y de frenos de aire; el uso de resonadores en el escape de gases de cualquier fuente móvil y la circulación de vehículos que no cuenten con sistema de silenciador en correcto estado de funcionamiento.",
    "shortDescription": "Usar indebidamente sirenas, luces de emergencia o estroboscópicas.",
    "smldv": 15,
    "smldvType": "EXACT",
    "uvtDefault": 13.02,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "sirena",
      "estroboscopicas",
      "luces rojas",
      "grupo c",
      "c28",
      "luces azules",
      "licuadora"
    ]
  },
  {
    "code": "C29",
    "rawCode": "C.29",
    "category": "C",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Conducir un vehículo a velocidad superior a la máxima permitida, la cual deberá estar señalizada en forma sectorizada, no obstante esta no podrá ser superior a: a) En vías urbanas del Distrito o Municipio respectivo a una velocidad superior a los 80 kilómetros por hora; b) En las vías urbanas, los vehículos de servicio público, de carga y de transporte escolar, a una velocidad superior a sesenta (60) kilómetros por hora; c) En las carreteras nacionales y departamentales las velocidades autorizadas, en ningún caso podrá sobrepasar los 120 kilómetros por hora; d) En las carreteras nacionales y departamentales para el servicio público, de carga y de transporte escolar, el límite de velocidad en ningún caso podrá exceder los ochenta (80) kilómetros por hora.",
    "shortDescription": "Exceder los límites de velocidad permitidos en la vía.",
    "smldv": 15,
    "smldvType": "EXACT",
    "uvtDefault": 13.02,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": true,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "camara",
      "radar",
      "fotomulta",
      "c29",
      "limite de velocidad",
      "grupo c",
      "exceso de velocidad"
    ]
  },
  {
    "code": "C30",
    "rawCode": "C.30",
    "category": "C",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "No atender una señal de ceda el paso.",
    "shortDescription": "No respetar la señal de prelación Ceda el Paso.",
    "smldv": 15,
    "smldvType": "EXACT",
    "uvtDefault": 13.02,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "c30",
      "interseccion",
      "prelacion",
      "ceda el paso",
      "grupo c"
    ]
  },
  {
    "code": "C31",
    "rawCode": "C.31",
    "category": "C",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "No acatar las señales de tránsito o requerimientos impartidos por los agentes de tránsito.",
    "shortDescription": "Desobedecer señales de tránsito o instrucciones de agentes viales.",
    "smldv": 15,
    "smldvType": "EXACT",
    "uvtDefault": 13.02,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "policia de transito",
      "desacato",
      "grupo c",
      "desobedecer agente",
      "c31"
    ]
  },
  {
    "code": "C32",
    "rawCode": "C.32",
    "category": "C",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "No respetar el paso de peatones que cruzan una vía en sitio permitido para ellos, o no darles la prelación en las franjas para ello establecidas.",
    "shortDescription": "No ceder el paso a peatones en cruces señalizados o pasos de cebra.",
    "smldv": 15,
    "smldvType": "EXACT",
    "uvtDefault": 13.02,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "cebra",
      "peaton",
      "c32",
      "paso peatonal",
      "grupo c",
      "prelacion peaton"
    ]
  },
  {
    "code": "C33",
    "rawCode": "C.33",
    "category": "C",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Poner un vehículo en marcha sin las precauciones para evitar choques.",
    "shortDescription": "Iniciar marcha abruptamente sin cerciorarse de la seguridad del entorno.",
    "smldv": 15,
    "smldvType": "EXACT",
    "uvtDefault": 13.02,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "arrancar sin mirar",
      "maniobra imprudente",
      "grupo c",
      "c33"
    ]
  },
  {
    "code": "C34",
    "rawCode": "C.34",
    "category": "C",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Reparar un vehículo en las vías públicas, parque o acera, o hacerlo en caso de emergencia, sin atender el procedimiento señalado en este código. O Reparar vehículos automotores en la zona de seguridad y protección de la vía férrea, en los patios de maniobras de las estaciones, los apartaderos y demás anexidades ferroviarias.",
    "shortDescription": "Reparar vehículos en vía pública o andenes sin causa de fuerza mayor.",
    "smldv": 15,
    "smldvType": "EXACT",
    "uvtDefault": 13.02,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "reparar en via publica",
      "taller en calle",
      "mecanica",
      "grupo c",
      "c34"
    ]
  },
  {
    "code": "C35",
    "rawCode": "C.35",
    "category": "C",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "No realizar la revisión tecnicomecánica y de emisiones contaminantes en los siguientes plazos o cuando aún portando los certificados correspondientes no cuenta con las siguientes condiciones tecnicomecánicas y de emisiones contaminantes, además el vehículo será inmovilizado: a) Plazos: 1. Todos los vehículos, incluidas las motocicletas anualmente. 2. Los vehículos particulares durante sus primeros seis (6) años contados a partir de la fecha de su matrícula, cada dos (2) años, excepto las motocicletas. 3. La primera revisión tecnicomecánica para vehículos nuevos, se realizará a los dos años, incluyendo las motocicletas; b) Condiciones tecnicomecánicas y de emisiones contaminantes: 1. Adecuado estado de la carrocería. 2. Niveles de emisión de gases y elementos contaminantes acordes con la legislación vigente sobre la materia. 3. El buen funcionamiento del sistema mecánico. 4. Funcionamiento adecuado del sistema eléctrico y del conjunto óptico. 5. Eficiencia del sistema de combustión interno. 6. Elementos de seguridad. 7. Buen estado del sistema de frenos constatando, especialmente, en el caso en que este opere con aire, que no emita señales acústicas por encima de los niveles permitidos. 8. Las llantas del vehículo. 9. Del funcionamiento de los sistemas y elementos de emergencia. 10. Del buen funcionamiento de los dispositivos utilizados para el cobro en la prestación del servicio público.",
    "shortDescription": "No realizar o tener vencida la Revisión Técnico-Mecánica y de Emisiones.",
    "smldv": 15,
    "smldvType": "EXACT",
    "uvtDefault": 13.02,
    "immobilization": true,
    "immobilizationType": "IMMEDIATE",
    "immobilizationDetails": "Inmovilización inmediata y traslado a patios oficiales según lo dispuesto en el Código Nacional de Tránsito.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "PROPIETARIO",
      "CONDUCTOR"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": true,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "fotomulta",
      "vencida",
      "gases",
      "c35",
      "tecnomecanica",
      "grupo c",
      "revision tecnico mecanica",
      "cda"
    ]
  },
  {
    "code": "C36",
    "rawCode": "C.36",
    "category": "C",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Transportar carga en contenedores sin los dispositivos especiales de sujeción. El vehículo será inmovilizado.",
    "shortDescription": "Transportar contenedores sin seguros twist-locks adecuados.",
    "smldv": 15,
    "smldvType": "EXACT",
    "uvtDefault": 13.02,
    "immobilization": true,
    "immobilizationType": "IMMEDIATE",
    "immobilizationDetails": "Inmovilización inmediata y traslado a patios oficiales según lo dispuesto en el Código Nacional de Tránsito.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "CAMION",
      "TRACTOCAMION",
      "VOLQUETA"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "tractocamion",
      "puerto",
      "twist-locks",
      "grupo c",
      "contenedor",
      "c36"
    ]
  },
  {
    "code": "C37",
    "rawCode": "C.37",
    "category": "C",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Transportar pasajeros en el platón de una camioneta picó o en la plataforma de un vehículo de carga, trátese de furgón o plataforma de estacas.",
    "shortDescription": "Transportar personas en el platón de camionetas o vehículos descubiertos.",
    "smldv": 15,
    "smldvType": "EXACT",
    "uvtDefault": 13.02,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "camioneta",
      "pasajeros en platon",
      "grupo c",
      "c37",
      "volqueta"
    ]
  },
  {
    "code": "C38",
    "rawCode": "C.38",
    "category": "C",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Usar sistemas móviles de comunicación o teléfonos instalados en los vehículos al momento de conducir, exceptuando si estos son utilizados con accesorios o equipos auxiliares que permitan tener las manos libres.",
    "shortDescription": "Usar dispositivos móviles o teléfonos al conducir sin sistema de manos libres.",
    "smldv": 15,
    "smldvType": "EXACT",
    "uvtDefault": 13.02,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "c38",
      "distraccion",
      "whatsapp",
      "telefono",
      "celular",
      "grupo c",
      "manos libres"
    ]
  },
  {
    "code": "C39",
    "rawCode": "C.39",
    "category": "C",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Vulnerar las siguientes reglas de estacionamiento contenidas en el artículo 77 de este Código. En autopistas y zonas rurales, los vehículos podrán estacionarse únicamente por fuera de la vía colocando en el día señales reflectivas de peligro, y en la noche, luces de estacionamiento y señales luminosas de peligro.",
    "shortDescription": "Incumplir reglas específicas de estacionamiento en vías públicas.",
    "smldv": 15,
    "smldvType": "EXACT",
    "uvtDefault": 13.02,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "bahia",
      "c39",
      "zona de estacionamiento",
      "grupo c",
      "parqueo indebido"
    ]
  },
  {
    "code": "C40",
    "rawCode": "C.40",
    "category": "C",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Los conductores con movilidad normal que estacionen sus vehículos en lugares públicos de estacionamiento, específicamente demarcados con el símbolo internacional de accesibilidad para los automotores que transporten o sean conducidos por personas con movilidad reducida o vehículos para centros de educación especial o de rehabilitación, incurrirán en sanción de multa de quince (15) salarios mínimos legales diarios vigentes.D. Infracciones en las que incurre el conductor y/o propietario de un vehículo automotor que dan lugar a la imposición de treinta (30) salarios mínimos legales diarios vigentes:",
    "shortDescription": "Estacionar indebidamente en bahías reservadas para personas con movilidad reducida.",
    "smldv": 15,
    "smldvType": "EXACT",
    "uvtDefault": 13.02,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "simbolo accesibilidad",
      "movilidad reducida",
      "c40",
      "grupo c",
      "parqueadero discapacitados"
    ]
  },
  {
    "code": "D01",
    "rawCode": "D.01",
    "category": "D",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Guiar un vehículo sin haber obtenido la licencia de conducción correspondiente. Además, el vehículo será inmovilizado en el lugar de los hechos, hasta que este sea retirado por una persona autorizada por el infractor con licencia de conducción.",
    "shortDescription": "Conducir sin haber obtenido jamás licencia de conducción.",
    "smldv": 30,
    "smldvType": "EXACT",
    "uvtDefault": 26.04,
    "immobilization": true,
    "immobilizationType": "IMMEDIATE",
    "immobilizationDetails": "Inmovilización inmediata y traslado a patios oficiales según lo dispuesto en el Código Nacional de Tránsito.",
    "licenseSuspension": true,
    "licenseSuspensionDetails": "Imposibilidad de tramitar licencia o suspensión por fraude a la autoridad de tránsito.",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "inmovilizacion",
      "sin pase",
      "nunca expedida",
      "grupo d",
      "d01",
      "sin licencia"
    ]
  },
  {
    "code": "D02",
    "rawCode": "D.02",
    "category": "D",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Conducir sin portar el Seguro Obligatorio de Accidentes de Tránsito ordenado por la ley. Además, el vehículo será inmovilizado.",
    "shortDescription": "Conducir sin portar el SOAT vigente.",
    "smldv": 30,
    "smldvType": "EXACT",
    "uvtDefault": 26.04,
    "immobilization": true,
    "immobilizationType": "IMMEDIATE",
    "immobilizationDetails": "Inmovilización inmediata y traslado a patios oficiales según lo dispuesto en el Código Nacional de Tránsito.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "PROPIETARIO",
      "CONDUCTOR"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": true,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "d02",
      "soat",
      "fotomulta",
      "soat vencido",
      "seguro obligatorio",
      "sin soat",
      "grupo d"
    ]
  },
  {
    "code": "D03",
    "rawCode": "D.03",
    "category": "D",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Transitar en sentido contrario al estipulado para la vía, calzada o carril. En el caso de motocicletas se procederá a su inmovilización hasta tanto no se pague el valor de la multa o la autoridad competente decida sobre su imposición en los términos de los artículos 135 y 136 del Código Nacional de Tránsito.",
    "shortDescription": "Transitar en contravía o sentido contrario al establecido para la vía.",
    "smldv": 30,
    "smldvType": "EXACT",
    "uvtDefault": 26.04,
    "immobilization": true,
    "immobilizationType": "MOTORCYCLES_ONLY",
    "immobilizationDetails": "En el caso de motocicletas se inmoviliza obligatoriamente. Para automóviles aplica comparendo sin inmovilización a menos que haya concurrencia.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "d03",
      "contravia",
      "grupo d",
      "sentido contrario",
      "via contraria"
    ]
  },
  {
    "code": "D04",
    "rawCode": "D.04",
    "category": "D",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "No detenerse ante una luz roja o amarilla de semáforo, una señal de \"PARE\" o un semáforo intermitente en rojo. En el caso de motocicletas se procederá a su inmovilización hasta tanto no se pague el valor de la multa o la autoridad competente decida sobre su imposición en los términos de los artículos 135 y 136 del Código Nacional de Tránsito.",
    "shortDescription": "Pasarse el semáforo en luz roja o amarilla, o señal de PARE.",
    "smldv": 30,
    "smldvType": "EXACT",
    "uvtDefault": 26.04,
    "immobilization": true,
    "immobilizationType": "MOTORCYCLES_ONLY",
    "immobilizationDetails": "En el caso de motocicletas se inmoviliza obligatoriamente. Para automóviles aplica comparendo sin inmovilización a menos que haya concurrencia.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": true,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "pare",
      "luz roja",
      "luz amarilla",
      "fotomulta",
      "d04",
      "semaforo en rojo",
      "grupo d"
    ]
  },
  {
    "code": "D05",
    "rawCode": "D.05",
    "category": "D",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Conducir un vehículo sobre aceras, plazas, vías peatonales, separadores, bermas, demarcaciones de canalización, zonas verdes o vías especiales para vehículos no motorizados. En el caso de motocicletas se procederá a su inmovilización hasta tanto no se pague el valor de la multa o la autoridad competente decida sobre su imposición en los términos de los artículos 135 y 136 del Código Nacional de Tránsito.",
    "shortDescription": "Conducir sobre aceras, plazas, separadores, bermas o vías peatonales.",
    "smldv": 30,
    "smldvType": "EXACT",
    "uvtDefault": 26.04,
    "immobilization": true,
    "immobilizationType": "MOTORCYCLES_ONLY",
    "immobilizationDetails": "En el caso de motocicletas se inmoviliza obligatoriamente. Para automóviles aplica comparendo sin inmovilización a menos que haya concurrencia.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "d05",
      "conducir en anden",
      "peatonal",
      "grupo d",
      "ciclorruta",
      "separador"
    ]
  },
  {
    "code": "D06",
    "rawCode": "D.06",
    "category": "D",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Adelantar a otro vehículo en berma, túnel, puente, curva, pasos a nivel y cruces no regulados o al aproximarse a la cima de una cuesta o donde la señal de tránsito correspondiente lo indique. En el caso de motocicletas se procederá a su inmovilización hasta tanto no se pague el valor de la multa o la autoridad competente decida sobre su imposición en los términos de los artículos 135 y 136 del Código Nacional de Tránsito.",
    "shortDescription": "Adelantar en curvas, túneles, puentes o zonas no habilitadas.",
    "smldv": 30,
    "smldvType": "EXACT",
    "uvtDefault": 26.04,
    "immobilization": true,
    "immobilizationType": "MOTORCYCLES_ONLY",
    "immobilizationDetails": "En el caso de motocicletas se inmoviliza obligatoriamente. Para automóviles aplica comparendo sin inmovilización a menos que haya concurrencia.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "adelantar en curva",
      "prohibido adelantar",
      "adelantar en puente",
      "tunel",
      "grupo d",
      "d06"
    ]
  },
  {
    "code": "D07",
    "rawCode": "D.07",
    "category": "D",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Conducir realizando maniobras altamente peligrosas, siempre y cuando la maniobra viole las normas de tránsito que pongan en peligro a las personas o las cosas y que constituyan conductas dolosas o altamente imprudentes. En el caso de motocicletas se procederá a su inmovilización hasta tanto no se pague el valor de la multa o la autoridad competente decida sobre su imposición en los términos de los artículos 135 y 136 del Código Nacional de Tránsito.",
    "shortDescription": "Conducir efectuando maniobras peligrosas o de alto riesgo.",
    "smldv": 30,
    "smldvType": "EXACT",
    "uvtDefault": 26.04,
    "immobilization": true,
    "immobilizationType": "MOTORCYCLES_ONLY",
    "immobilizationDetails": "En el caso de motocicletas se inmoviliza obligatoriamente. Para automóviles aplica comparendo sin inmovilización a menos que haya concurrencia.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "d07",
      "carreras ilegales",
      "piques",
      "acrobacias",
      "grupo d",
      "maniobras peligrosas"
    ]
  },
  {
    "code": "D08",
    "rawCode": "D.08",
    "category": "D",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Conducir un vehículo sin luces o sin los dispositivos luminosos de posición, direccionales o de freno, o con alguna de ellas dañada, en las horas o circunstancias señaladas a continuación, además, el vehículo será inmovilizado, cuando no le funcionen dos (2) o más de estas luces. a) No tener encendidas las luces exteriores a partir de las dieciocho (18) horas hasta las seis (6) horas del día siguiente, y cuando las condiciones de visibilidad sean adversas o en los horarios de excepción que fijen las autoridades de tránsito; b) No tener encendidas dentro del perímetro urbano la luz media, y hacer uso de luces exploradoras sin estar orientadas sólo hacia la superficie de la vía, cuando estas estén colocadas por debajo de las defensas del vehículo o cuando se trate de unidades integradas por el fabricante en el conjunto de luces frontales del vehículo; c) Usar la luz plena o alta, fuera del perímetro urbano, cuando se aproxime un vehículo en sentido contrario o cuando la autoridad lo indique mediante la señal de tránsito correspondiente, o cuando la luz plena alcance un vehículo que transite adelante y pueda perturbar su conducción; d) No utilizar las señales direccionales de su vehículo para dar un giro o para cambiar de carril. En caso de emergencia, y ante la imposibilidad de utilizar las señales direccionales no utilizar señales manuales; e) No utilizar la señal luminosa intermitente que corresponda, al detener su vehículo en la vía pública, no orillarse al lado derecho de la vía y efectuar maniobras que pongan en peligro a las personas o a otros vehículos.",
    "shortDescription": "Conducir sin luces direccionales, de posición o de freno reglamentarias.",
    "smldv": 30,
    "smldvType": "EXACT",
    "uvtDefault": 26.04,
    "immobilization": true,
    "immobilizationType": "IMMEDIATE",
    "immobilizationDetails": "Inmovilización inmediata y traslado a patios oficiales según lo dispuesto en el Código Nacional de Tránsito.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "d08",
      "sin luces",
      "direccionales",
      "grupo d",
      "stop",
      "noche",
      "luces danadas"
    ]
  },
  {
    "code": "D09",
    "rawCode": "D.09",
    "category": "D",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "No permitir el paso de los vehículos de emergencia, esto es, ambulancias, vehículos de cuerpo de bomberos, vehículos de socorro o emergencia y de la policía o ejército. El conductor debe orillarse al costado derecho de la calzada o carril y detener el movimiento del vehículo, cuando anuncien su presencia por medio de luces, sirenas, campanas o cualquier señal óptica o audible.",
    "shortDescription": "No ceder el paso ante vehículos de emergencia (ambulancia, bomberos, policía).",
    "smldv": 30,
    "smldvType": "EXACT",
    "uvtDefault": 26.04,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "bomberos",
      "vehiculo de emergencia",
      "patrulla",
      "d09",
      "ambulancia",
      "grupo d"
    ]
  },
  {
    "code": "D10",
    "rawCode": "D.10",
    "category": "D",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Conducir un vehículo para transporte escolar con exceso de velocidad. En las vías urbanas, la velocidad no podrá ser superior a sesenta (60) kilómetros por hora y siempre y cuando se encuentre debidamente señalizada. En las carreteras nacionales y departamentales en ningún caso la velocidad podrá ser superior a ochenta (80) kilómetros por hora y siempre y cuando se encuentre debidamente señalizada.",
    "shortDescription": "Exceder límites de velocidad en transporte escolar.",
    "smldv": 30,
    "smldvType": "EXACT",
    "uvtDefault": 26.04,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TRANSPORTE_ESCOLAR",
      "MICROBUS",
      "BUSETA"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "ruta escolar rapida",
      "transporte escolar velocidad",
      "d10",
      "grupo d",
      "velocidad ninos"
    ]
  },
  {
    "code": "D11",
    "rawCode": "D.11",
    "category": "D",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Permitir el servicio público de pasajeros que no tenga la salida de emergencia en cada uno de sus costados adicionalmente a las puertas de ascenso de pasajeros. En este caso, la multa se impondrá solidariamente a la empresa a la cual esté afiliado y al propietario. Si se tratare de vehículo particular, se impondrá la sanción solidariamente al propietario.",
    "shortDescription": "Prestar servicio de pasajeros sin las salidas de emergencia obligatorias.",
    "smldv": 30,
    "smldvType": "EXACT",
    "uvtDefault": 26.04,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "BUS",
      "BUSETA",
      "MICROBUS",
      "AUTOMOVIL"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "servicio publico",
      "d11",
      "bus",
      "grupo d",
      "seguridad pasajeros",
      "salida de emergencia"
    ]
  },
  {
    "code": "D12",
    "rawCode": "D.12",
    "category": "D",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Conducir un vehículo que, sin la debida autorización, se destine a un servicio diferente de aquel para el cual tiene licencia de tránsito. Además, el vehículo será inmovilizado por primera vez, por el término de cinco días, por segunda vez veinte días y por tercera vez cuarenta días.",
    "shortDescription": "Prestar servicio público no autorizado (transporte ilegal / piratería).",
    "smldv": 30,
    "smldvType": "EXACT",
    "uvtDefault": 26.04,
    "immobilization": true,
    "immobilizationType": "IMMEDIATE",
    "immobilizationDetails": "Inmovilización inmediata y traslado a patios oficiales según lo dispuesto en el Código Nacional de Tránsito.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "servicio no autorizado",
      "d12",
      "pirata",
      "transporte ilegal",
      "grupo d",
      "plataformas",
      "uber",
      "in Drive"
    ]
  },
  {
    "code": "D13",
    "rawCode": "D.13",
    "category": "D",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "En caso de transportar carga con peso superior al autorizado el vehículo será inmovilizado y el exceso deberá ser transbordado.",
    "shortDescription": "Transportar carga excediendo el peso bruto vehicular permitido en báscula.",
    "smldv": 30,
    "smldvType": "EXACT",
    "uvtDefault": 26.04,
    "immobilization": true,
    "immobilizationType": "CONDITIONAL",
    "immobilizationDetails": "Inmovilización del vehículo hasta tanto se realice el trasbordo del sobrepeso de la carga.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "CAMION",
      "TRACTOCAMION",
      "VOLQUETA"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "sobrecarga",
      "grupo d",
      "sobrepeso",
      "d13",
      "camion",
      "bascula"
    ]
  },
  {
    "code": "D14",
    "rawCode": "D.14",
    "category": "D",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Las autoridades de tránsito ordenarán la inmovilización inmediata de los vehículos que usen para su movilización combustibles no regulados como, gas propano u otros que pongan en peligro la vida de los usuarios o de los peatones.",
    "shortDescription": "Infracción grave de transporte que ordene inmovilización inmediata de oficio.",
    "smldv": 30,
    "smldvType": "EXACT",
    "uvtDefault": 26.04,
    "immobilization": true,
    "immobilizationType": "IMMEDIATE",
    "immobilizationDetails": "Inmovilización inmediata y traslado a patios oficiales según lo dispuesto en el Código Nacional de Tránsito.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "transporte",
      "d14",
      "grupo d",
      "orden de autoridad",
      "inmovilizacion inmediata"
    ]
  },
  {
    "code": "D15",
    "rawCode": "D.15",
    "category": "D",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Cambio del recorrido o trazado de la ruta para vehículo de servicio de transporte público de pasajeros, autorizado por el organismo de tránsito correspondiente. En este caso, la multa se impondrá solidariamente a la empresa a la cual esté afiliado el vehículo y al propietario. Además el vehículo será inmovilizado, salvo casos de fuerza mayor que sean debidamente autorizados por el agente de tránsito.",
    "shortDescription": "Modificar unilateralmente la ruta oficial autorizada en servicio público.",
    "smldv": 30,
    "smldvType": "EXACT",
    "uvtDefault": 26.04,
    "immobilization": true,
    "immobilizationType": "IMMEDIATE",
    "immobilizationDetails": "Inmovilización inmediata y traslado a patios oficiales según lo dispuesto en el Código Nacional de Tránsito.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "BUS",
      "BUSETA",
      "MICROBUS",
      "AUTOMOVIL"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "servicio publico",
      "d15",
      "cambio de ruta",
      "grupo d",
      "desvio ruta"
    ]
  },
  {
    "code": "D16",
    "rawCode": "D.16",
    "category": "D",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Arrojar residuos sólidos al espacio público desde un vehículo automotor o de tracción animal o humana, estacionado o en movimiento.",
    "shortDescription": "Arrojar basura, desechos o escombros desde el automotor al espacio público.",
    "smldv": 30,
    "smldvType": "EXACT",
    "uvtDefault": 26.04,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "arrojar basura",
      "escombros",
      "contaminacion",
      "grupo d",
      "comparendo ambiental",
      "d16"
    ]
  },
  {
    "code": "D17",
    "rawCode": "D.17",
    "category": "D",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Cuando se detecte o advierta una infracción a las normas de emisión contaminantes o de generación de ruido por vehículos automotores. E. Infracciones en las que incurre el conductor y/o propietario de un vehículo automotor que dan lugar a la imposición de cuarenta y cinco (45) salarios mínimos legales diarios vigentes:",
    "shortDescription": "Circular superando los límites máximos permisibles de emisión de gases o humo.",
    "smldv": 30,
    "smldvType": "EXACT",
    "uvtDefault": 26.04,
    "immobilization": true,
    "immobilizationType": "PREVENTATIVE_60_MIN",
    "immobilizationDetails": "Inmovilización preventiva para subsanar la causa técnica o de visibilidad.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "d17",
      "grupo d",
      "emision de gases",
      "chimenea",
      "contaminacion ambiental",
      "humo negro"
    ]
  },
  {
    "code": "E01",
    "rawCode": "E.01",
    "category": "E",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Proveer combustible a vehículos de servicio público con pasajeros a bordo.",
    "shortDescription": "Suministrar combustible a vehículos de servicio público con pasajeros a bordo.",
    "smldv": 45,
    "smldvType": "EXACT",
    "uvtDefault": 39.06,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "BUS",
      "BUSETA",
      "MICROBUS",
      "AUTOMOVIL"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "grupo e",
      "gasolina pasajeros",
      "e01",
      "combustible bus",
      "tanquear con pasajeros"
    ]
  },
  {
    "code": "E02",
    "rawCode": "E.02",
    "category": "E",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Negarse a prestar el servicio público sin causa justificada, siempre que dicha negativa cause alteración del orden público.",
    "shortDescription": "Negarse injustificadamente a prestar el servicio público de transporte.",
    "smldv": 45,
    "smldvType": "EXACT",
    "uvtDefault": 39.06,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "BUS",
      "BUSETA",
      "MICROBUS",
      "AUTOMOVIL"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "grupo e",
      "negar servicio",
      "e02",
      "taxi no me lleva",
      "rechazar carrera"
    ]
  },
  {
    "code": "E03",
    "rawCode": "E.03",
    "category": "E",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Conducir en estado de embriaguez o bajo los efectos de sustancias alucinógenas, se atenderá a lo establecido en el artículo 152 de este código. Si se trata de conductores de vehículos de servicio público, de transporte escolar o de instructor de conducción, la multa pecuniaria y el período de suspensión de la licencia se duplicarán. En todos los casos de embriaguez el vehículo será inmovilizado y el estado de embriaguez o alcoholemia se establecerá mediante una prueba que no cause lesión, la cual será determinada por el Instituto de Medicina Legal y Ciencias Forenses.",
    "shortDescription": "Conducir en estado de embriaguez o bajo el influjo de sustancias alucinógenas.",
    "smldv": 45,
    "smldvType": "EXACT",
    "uvtDefault": 39.06,
    "immobilization": true,
    "immobilizationType": "IMMEDIATE",
    "immobilizationDetails": "Inmovilización inmediata y traslado a patios oficiales según lo dispuesto en el Código Nacional de Tránsito.",
    "licenseSuspension": true,
    "licenseSuspensionDetails": "Suspensión de 1 a 10 años o cancelación definitiva según el grado de embriaguez y reincidencia conforme a la Ley 1696 de 2013.",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": true,
    "courseDiscountAllowed": false,
    "tags": [
      "grupo e",
      "alcoholemia",
      "embriaguez",
      "ley 1696",
      "e03",
      "drogas",
      "alcohol"
    ]
  },
  {
    "code": "E04",
    "rawCode": "E.04",
    "category": "E",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Transportar en el mismo vehículo y al mismo tiempo personas y sustancias peligrosas como explosivos, tóxicos, radiactivos, combustibles no autorizados, etc. En estos casos se suspenderá la licencia por un (1) año y por dos (2) años cada vez que reincida. El vehículo será inmovilizado por un (1) año cada vez.F. Infracciones en que incurren los peatones y que dan lugar a la imposición de un (1) salario mínimo legal diario vigente:",
    "shortDescription": "Transportar personas y sustancias explosivas o inflamables simultáneamente.",
    "smldv": 45,
    "smldvType": "EXACT",
    "uvtDefault": 39.06,
    "immobilization": true,
    "immobilizationType": "IMMEDIATE",
    "immobilizationDetails": "Inmovilización inmediata y traslado a patios oficiales según lo dispuesto en el Código Nacional de Tránsito.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "grupo e",
      "sustancias peligrosas",
      "pasajeros y quimicos",
      "explosivos",
      "e04"
    ]
  },
  {
    "code": "F01",
    "rawCode": "F.01",
    "category": "F",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Invadir la zona destinada al tránsito de vehículos, transitar en esta en patines, monopatines, patinetas o similares.",
    "shortDescription": "Invadir calzadas o transitar en monopatines/patines en zonas de vehículos.",
    "smldv": 1,
    "smldvType": "EXACT",
    "uvtDefault": 0.87,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "PEATON"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "patines",
      "grupo f",
      "peaton en calzada",
      "f01",
      "monopatin",
      "patineta"
    ]
  },
  {
    "code": "F02",
    "rawCode": "F.02",
    "category": "F",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Llevar, sin las debidas precauciones, elementos que puedan obstaculizar o afectar el tránsito.",
    "shortDescription": "Portar elementos que comprometan la seguridad de peatones o conductores.",
    "smldv": 1,
    "smldvType": "EXACT",
    "uvtDefault": 0.87,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "PEATON"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "grupo f",
      "f02",
      "estorbo",
      "peaton bultos",
      "carga peaton"
    ]
  },
  {
    "code": "F03",
    "rawCode": "F.03",
    "category": "F",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Cruzar por sitios no permitidos o transitar sobre el guardavías del ferrocarril.",
    "shortDescription": "Cruzar la vía por lugares no habilitados o sobre vallas protectoras.",
    "smldv": 1,
    "smldvType": "EXACT",
    "uvtDefault": 0.87,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "PEATON"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "grupo f",
      "cruzar por sitio prohibido",
      "peaton imprudente",
      "f03",
      "guardavias"
    ]
  },
  {
    "code": "F04",
    "rawCode": "F.04",
    "category": "F",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Colocarse delante o detrás de un vehículo que tenga el motor encendido.",
    "shortDescription": "Ubicarse delante o detrás de vehículos en marcha o encendidos.",
    "smldv": 1,
    "smldvType": "EXACT",
    "uvtDefault": 0.87,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "PEATON"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "f04",
      "punto ciego peaton",
      "pararse detras de carro",
      "grupo f"
    ]
  },
  {
    "code": "F05",
    "rawCode": "F.05",
    "category": "F",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Remolcarse de vehículos en movimiento.",
    "shortDescription": "Remolcarse de vehículos en marcha siendo peatón o patinador.",
    "smldv": 1,
    "smldvType": "EXACT",
    "uvtDefault": 0.87,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "PEATON"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "f05",
      "colgarse de carro",
      "remolcarse peaton",
      "grupo f"
    ]
  },
  {
    "code": "F06",
    "rawCode": "F.06",
    "category": "F",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Actuar de manera que ponga en peligro su integridad física.",
    "shortDescription": "Comportamientos peatonales que pongan en peligro la propia integridad física.",
    "smldv": 1,
    "smldvType": "EXACT",
    "uvtDefault": 0.87,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "PEATON"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "temeridad",
      "grupo f",
      "f06",
      "peaton peligro"
    ]
  },
  {
    "code": "F07",
    "rawCode": "F.07",
    "category": "F",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Cruzar la vía atravesando el tráfico vehicular en lugares en donde existen pasos peatonales.",
    "shortDescription": "Cruzar calzadas vehiculares existiendo puentes o túneles peatonales.",
    "smldv": 1,
    "smldvType": "EXACT",
    "uvtDefault": 0.87,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "PEATON"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "grupo f",
      "cruzar debajo del puente",
      "f07",
      "no usar puente peatonal"
    ]
  },
  {
    "code": "F08",
    "rawCode": "F.08",
    "category": "F",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Ocupar la zona de seguridad y protección de la vía férrea, la cual se establece a una distancia no menor de doce (12) metros a lado y lado del eje de la vía férrea.",
    "shortDescription": "Invadir o permanecer en la zona férrea o sus corredores de seguridad.",
    "smldv": 1,
    "smldvType": "EXACT",
    "uvtDefault": 0.87,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "PEATON"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "caminar por carrilera",
      "tren peaton",
      "grupo f",
      "f08"
    ]
  },
  {
    "code": "F09",
    "rawCode": "F.09",
    "category": "F",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Subirse o bajarse de los vehículos, estando estos en movimiento, cualquiera que sea la operación o maniobra que estén realizando.",
    "shortDescription": "Subir o descender de automotores cuando estos se encuentren en movimiento.",
    "smldv": 1,
    "smldvType": "EXACT",
    "uvtDefault": 0.87,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "PEATON"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "saltar de bus en movimiento",
      "bajarse en marcha",
      "f09",
      "grupo f"
    ]
  },
  {
    "code": "F10",
    "rawCode": "F.10",
    "category": "F",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Transitar por los túneles, puentes y viaductos de las vías férreas.",
    "shortDescription": "Caminar por túneles o puentes vehiculares sin acera para peatones.",
    "smldv": 1,
    "smldvType": "EXACT",
    "uvtDefault": 0.87,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "PEATON"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "f10",
      "caminar por viaducto",
      "peaton en tunel",
      "grupo f"
    ]
  },
  {
    "code": "F11",
    "rawCode": "F.11",
    "category": "F",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "En relación con el STTMP, estos no deben ocupar la zona de seguridad y corredores de tránsito de los vehículos del STTMP, fuera de los lugares expresamente autorizados y habilitados para ello.",
    "shortDescription": "Invadir carriles o plataformas exclusivas de sistemas de transporte masivo.",
    "smldv": 1,
    "smldvType": "EXACT",
    "uvtDefault": 0.87,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "PEATON"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "mio",
      "grupo f",
      "metroplus",
      "carril exclusivo",
      "f11",
      "invadir transmilenio"
    ]
  },
  {
    "code": "F12",
    "rawCode": "F.12",
    "category": "F",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Dentro del perímetro urbano, el cruce debe hacerse sólo por las zonas autorizadas, como los puentes peatonales, los pasos peatonales y las bocacalles.G. Las siguientes infracciones serán sancionadas con la imposición de un comparendo educativo:",
    "shortDescription": "Cruzar fuera de las cebras o intersecciones en perímetro urbano.",
    "smldv": 1,
    "smldvType": "EXACT",
    "uvtDefault": 0.87,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "PEATON"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "peaton esquina",
      "cruzar fuera de cebra",
      "grupo f",
      "f12"
    ]
  },
  {
    "code": "G01",
    "rawCode": "G.01",
    "category": "G",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "El pasajero que sea sorprendido fumando en un vehículo de servicio público, será obligado a abandonar el automotor y deberá asistir a un curso de seguridad vial.",
    "shortDescription": "Fumar dentro de vehículos de servicio público de pasajeros.",
    "smldv": 0,
    "smldvType": "PEDAGOGICAL",
    "uvtDefault": 0,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "PASAJERO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": true,
    "courseDiscountAllowed": true,
    "tags": [
      "servicio publico",
      "fumar en bus",
      "cigarrillo",
      "grupo g",
      "curso educativo",
      "g01"
    ]
  },
  {
    "code": "G02",
    "rawCode": "G.02",
    "category": "G",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Los peatones y ciclistas que no cumplan con las disposiciones de este Código, serán amonestados por la autoridad de tránsito competente y deberán asistir a un curso formativo dictado por las autoridades de tránsito.H. Las siguientes infracciones en que incurran el conductor, el pasajero o el peatón serán sancionadas con amonestación, esto es la obligación de asistir a un curso de educación vial, so pena de ser sancionado con una multa equivalente a cinco (5) salarios:",
    "shortDescription": "Desacato de normas de tránsito por peatones y ciclistas.",
    "smldv": 0,
    "smldvType": "PEDAGOGICAL",
    "uvtDefault": 0,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "PEATON",
      "CONDUCTOR"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": true,
    "courseDiscountAllowed": true,
    "tags": [
      "educativo",
      "normas viales",
      "grupo g",
      "g02",
      "ciclista peaton desacato"
    ]
  },
  {
    "code": "H01",
    "rawCode": "H.01",
    "category": "H",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Circular portando defensas rígidas diferentes de las instaladas originalmente por el fabricante. Además el vehículo será inmovilizado preventivamente hasta que sean retiradas.",
    "shortDescription": "Circular con defensas rígidas, mataburros o aditamentos no homologados.",
    "smldv": 5,
    "smldvType": "PEDAGOGICAL",
    "uvtDefault": 4.34,
    "immobilization": true,
    "immobilizationType": "IMMEDIATE",
    "immobilizationDetails": "Inmovilización inmediata y traslado a patios oficiales según lo dispuesto en el Código Nacional de Tránsito.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": true,
    "courseDiscountAllowed": true,
    "tags": [
      "modificacion peligrosa",
      "mataburros",
      "grupo h",
      "defensas rigidas",
      "h01"
    ]
  },
  {
    "code": "H02",
    "rawCode": "H.02",
    "category": "H",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "El conductor que no porte la licencia de tránsito, además el vehículo será inmovilizado.",
    "shortDescription": "Conducir sin portar la Licencia de Tránsito (tarjeta de propiedad).",
    "smldv": 5,
    "smldvType": "PEDAGOGICAL",
    "uvtDefault": 4.34,
    "immobilization": true,
    "immobilizationType": "IMMEDIATE",
    "immobilizationDetails": "Inmovilización inmediata y traslado a patios oficiales según lo dispuesto en el Código Nacional de Tránsito.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": true,
    "courseDiscountAllowed": true,
    "tags": [
      "h02",
      "grupo h",
      "tarjeta de propiedad",
      "licencia de transito",
      "documento vehiculo"
    ]
  },
  {
    "code": "H03",
    "rawCode": "H.03",
    "category": "H",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "El conductor, pasajero o peatón, que obstaculice, perjudique o ponga en riesgo a las demás personas o que no cumpla las normas y señales de tránsito que le sean aplicables o no obedezca las indicaciones que les den las autoridades de tránsito.",
    "shortDescription": "Obstaculizar o alterar la seguridad y fluidez del tráfico vehicular.",
    "smldv": 5,
    "smldvType": "PEDAGOGICAL",
    "uvtDefault": 4.34,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": true,
    "courseDiscountAllowed": true,
    "tags": [
      "h03",
      "amonestacion",
      "grupo h",
      "trancar la via",
      "obstruir trafico"
    ]
  },
  {
    "code": "H04",
    "rawCode": "H.04",
    "category": "H",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "El conductor que no respete los derechos e integridad de los peatones.",
    "shortDescription": "No respetar los derechos o la integridad física de los peatones.",
    "smldv": 5,
    "smldvType": "PEDAGOGICAL",
    "uvtDefault": 4.34,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": true,
    "courseDiscountAllowed": true,
    "tags": [
      "derecho peaton",
      "h04",
      "irrespeto a peaton",
      "grupo h"
    ]
  },
  {
    "code": "H05",
    "rawCode": "H.05",
    "category": "H",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "El conductor que no respete la prelación de paso en intersecciones o giros o según la clasificación de las vías.",
    "shortDescription": "No ceder el paso en glorietas o intersecciones con prelación establecida.",
    "smldv": 5,
    "smldvType": "PEDAGOGICAL",
    "uvtDefault": 4.34,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": true,
    "courseDiscountAllowed": true,
    "tags": [
      "grupo h",
      "h05",
      "ceda paso",
      "prelacion glorieta"
    ]
  },
  {
    "code": "H06",
    "rawCode": "H.06",
    "category": "H",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "El conductor que no tome las medidas necesarias para evitar el movimiento de vehículo estacionado. En vehículo de tracción animal no bloquear las ruedas para evitar su movimiento.",
    "shortDescription": "No adoptar medidas preventivas ante derrames de líquidos o fallas.",
    "smldv": 5,
    "smldvType": "PEDAGOGICAL",
    "uvtDefault": 4.34,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": true,
    "courseDiscountAllowed": true,
    "tags": [
      "grupo h",
      "fuga de aceite",
      "derrame combustible",
      "h06"
    ]
  },
  {
    "code": "H07",
    "rawCode": "H.07",
    "category": "H",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "El conductor que lleve pasajeros en la parte exterior del vehículo, fuera de la cabina o en los estribos de los mismos. Además el vehículo será inmovilizado preventivamente hasta que se subsane dicha situación.",
    "shortDescription": "Llevar usuarios o pasajeros en estribos o parte exterior de la carrocería.",
    "smldv": 5,
    "smldvType": "PEDAGOGICAL",
    "uvtDefault": 4.34,
    "immobilization": true,
    "immobilizationType": "IMMEDIATE",
    "immobilizationDetails": "Inmovilización inmediata y traslado a patios oficiales según lo dispuesto en el Código Nacional de Tránsito.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": true,
    "courseDiscountAllowed": true,
    "tags": [
      "grupo h",
      "h07",
      "puerta abierta",
      "colgados",
      "pasajeros en estribos"
    ]
  },
  {
    "code": "H08",
    "rawCode": "H.08",
    "category": "H",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "El conductor que porte luces exploradoras en la parte posterior del vehículo. Además el vehículo será inmovilizado preventivamente hasta que sean retiradas.",
    "shortDescription": "Instalar luces exploradoras orientadas hacia la parte posterior del vehículo.",
    "smldv": 5,
    "smldvType": "PEDAGOGICAL",
    "uvtDefault": 4.34,
    "immobilization": true,
    "immobilizationType": "IMMEDIATE",
    "immobilizationDetails": "Inmovilización inmediata y traslado a patios oficiales según lo dispuesto en el Código Nacional de Tránsito.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": true,
    "courseDiscountAllowed": true,
    "tags": [
      "luces exploradoras atras",
      "cegamiento",
      "h08",
      "grupo h"
    ]
  },
  {
    "code": "H09",
    "rawCode": "H.09",
    "category": "H",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "El pasajero que profiera expresiones injuriosas o groseras, promueva riñas o cause cualquier molestia a los demás pasajeros, además la orden de abandonar el vehículo, sin perjuicio de las sanciones a que haya lugar.",
    "shortDescription": "Agredir verbalmente o proferir injurias entre pasajeros o hacia el conductor.",
    "smldv": 5,
    "smldvType": "PEDAGOGICAL",
    "uvtDefault": 4.34,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "PASAJERO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": true,
    "courseDiscountAllowed": true,
    "tags": [
      "h09",
      "grupo h",
      "agresion verbal pasajero",
      "groserias",
      "insultos"
    ]
  },
  {
    "code": "H10",
    "rawCode": "H.10",
    "category": "H",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Los conductores de vehículos no automotores que incurran en las siguientes infracciones:a) Transitar a una distancia mayor de un (1) metro de la acera u orilla o utilizar las vías exclusivas para servicio público colectivo;b) Cuando transiten en grupo, y no lo hagan uno detrás de otro;c) No respetar las señales, normas de tránsito y límites de velocidad;d) Adelantar a otros vehículos por la derecha o no utilizar el carril libre a la izquierda del vehículo a sobrepasar;e) No usar las señales manuales detalladas en el artículo 69 de este código;f) Cuando circulen en horas nocturnas, no llevar dispositivos en la parte delantera que proyecten luz blanca, y en la parte trasera que reflecte luz roja;g) No utilizar el casco de seguridad cuando corresponda dará lugar a la inmovilización del vehículo;h) Llevar acompañante, excepto mediante el uso de dispositivos diseñados especialmente para ello, o transportar objetos que disminuyan la visibilidad o que los incomoden en la conducción;i) No vestir chalecos o chaquetas reflectivas de identificación, los conductores de estos tipos de vehículos y sus acompañantes entre las 18:00 y las 6:00 horas del día siguiente, y siempre que la visibilidad sea escasa;j) No respetar las indicaciones del agente de tránsito.",
    "shortDescription": "Infracciones de conductores de vehículos no automotores o de tracción animal.",
    "smldv": 5,
    "smldvType": "PEDAGOGICAL",
    "uvtDefault": 4.34,
    "immobilization": true,
    "immobilizationType": "IMMEDIATE",
    "immobilizationDetails": "Inmovilización inmediata y traslado a patios oficiales según lo dispuesto en el Código Nacional de Tránsito.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": true,
    "courseDiscountAllowed": true,
    "tags": [
      "h10",
      "traccion animal infracciones",
      "carretas",
      "grupo h"
    ]
  },
  {
    "code": "H11",
    "rawCode": "H.11",
    "category": "H",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Viajar los menores de dos (2) años solos en el asiento posterior sin hacer uso de una silla que garantice su seguridad y que permita su fijación a él, siempre y cuando el menor viaje únicamente en compañía del conductor.",
    "shortDescription": "Transportar niños menores de 2 años en el asiento posterior sin acompañante.",
    "smldv": 5,
    "smldvType": "PEDAGOGICAL",
    "uvtDefault": 4.34,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "AUTOMOVIL",
      "CAMIONETA",
      "CAMPERO"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": true,
    "courseDiscountAllowed": true,
    "tags": [
      "grupo h",
      "bebe sin silla",
      "h11",
      "menor de 2 anos solo"
    ]
  },
  {
    "code": "H12",
    "rawCode": "H.12",
    "category": "H",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Transitar en vehículos de alto tonelaje por las vías de sitios que estén declarados o se declaren como monumentos de conservación histórica.",
    "shortDescription": "Transitar carga pesada por calles residenciales o sectores históricos.",
    "smldv": 5,
    "smldvType": "PEDAGOGICAL",
    "uvtDefault": 4.34,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": true,
    "courseDiscountAllowed": true,
    "tags": [
      "zona residencial pesado",
      "h12",
      "grupo h",
      "camion centro historico"
    ]
  },
  {
    "code": "H13",
    "rawCode": "H.13",
    "category": "H",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Las demás conductas que constituyan infracción a las normas de tránsito y que no se encuentren descritas en este acto administrativo.I. Infracciones de tránsito que dan lugar a la imposición de sanciones pecuniarias de diferente monto:",
    "shortDescription": "Otras infracciones residuales a las normas de tránsito contempladas por ley.",
    "smldv": 5,
    "smldvType": "PEDAGOGICAL",
    "uvtDefault": 4.34,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": true,
    "courseDiscountAllowed": true,
    "tags": [
      "otras infracciones",
      "h13",
      "amonestacion general",
      "grupo h"
    ]
  },
  {
    "code": "I01",
    "rawCode": "I.01",
    "category": "I",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "El conductor que sea sorprendido fumando mientras conduce, dará lugar a la imposición de diez (10) salarios mínimos legales diarios vigentes. Si se tratare de un conductor de servicio público, además deberá asistir a un curso de seguridad vial.",
    "shortDescription": "Fumar mientras se conduce un automotor.",
    "smldv": 10,
    "smldvType": "EXACT",
    "uvtDefault": 8.68,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "grupo i",
      "cigarrillo conductor",
      "fumar manejando",
      "i01",
      "distraccion"
    ]
  },
  {
    "code": "I02",
    "rawCode": "I.02",
    "category": "I",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Quien incumpla la obligación consagrada en el artículo 21 de este código, y se le compruebe que en caso de un accidente la deficiencia de carácter orgánico o funcional fue su causa, el conductor se hará acreedor a una multa de hasta cien (100) salarios mínimos diarios legales vigentes y a la suspensión de la licencia de conducción hasta por cinco (5) años.J. Otras infracciones de competencia de las autoridades de tránsito.",
    "shortDescription": "Empresas que incumplan controles de alcoholimetría a conductores.",
    "smldv": 30,
    "smldvType": "EXACT",
    "uvtDefault": 26.04,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": true,
    "licenseSuspensionDetails": "Suspensión de la habilitación de la empresa o licencias involucradas según procedimiento administrativo.",
    "appliesTo": [
      "EMPRESA"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": true,
    "tags": [
      "i02",
      "grupo i",
      "control de alcohol empresa",
      "prueba alcoholemia choferes"
    ]
  },
  {
    "code": "J01",
    "rawCode": "J.01",
    "category": "J",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "El particular u organismo estatal que dañe, retire o modifique las señales u otros elementos reguladores o indicadores del tráfico en las ciudades, será sancionado con multa equivalente a tres (3) salarios mínimos legales mensuales vigentes.",
    "shortDescription": "Dañar, destruir o alterar señales o dispositivos de control de tránsito.",
    "smldv": 5,
    "smldvType": "VARIABLE",
    "uvtDefault": 4.34,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": false,
    "tags": [
      "j01",
      "danar senal",
      "robar senal",
      "grafiti senal",
      "grupo j"
    ]
  },
  {
    "code": "J02",
    "rawCode": "J.02",
    "category": "J",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "En caso de inmovilización de vehículos de servicio público, el incumplimiento del compromiso suscrito por el propietario o infractor de subsanar la falta en un plazo no mayor a cinco (5) días, dará lugar a una multa de veinte (20) salarios mínimos legales mensuales vigentes a cargo del propietario.",
    "shortDescription": "No retirar el automotor inmovilizado de patios oficiales oportunamente.",
    "smldv": 0,
    "smldvType": "VARIABLE",
    "uvtDefault": 0,
    "immobilization": true,
    "immobilizationType": "IMMEDIATE",
    "immobilizationDetails": "Inmovilización inmediata y traslado a patios oficiales según lo dispuesto en el Código Nacional de Tránsito.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CONDUCTOR",
      "PROPIETARIO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": false,
    "tags": [
      "abandono",
      "carro abandonado patios",
      "subasta patios",
      "j02",
      "grupo j"
    ]
  },
  {
    "code": "J03",
    "rawCode": "J.03",
    "category": "J",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Serán sancionados con multa equivalente a mil (1.000) salarios mínimos legales diarios vigentes por cada unidad y a la cancelación de su registro, las ensambladoras o fabricantes de vehículos, carrocerías, remolques, semirremolques y similares, que los vendan sin el respectivo mecanismo de identificación.",
    "shortDescription": "Empresas de transporte que incurran en desacatos de seguridad operativa.",
    "smldv": 30000,
    "smldvType": "MONTHLY_SALARY",
    "uvtDefault": 26040,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "EMPRESA"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": false,
    "tags": [
      "j03",
      "grupo j",
      "1000 salarios",
      "sancion empresa transporte"
    ]
  },
  {
    "code": "J04",
    "rawCode": "J.04",
    "category": "J",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "Será sancionado con multa equivalente a cien (100) salarios mínimos legales diarios vigentes el propietario de expendio que provea de combustible a un vehículo automotor de servicio público con el motor encendido y pasajeros a bordo.",
    "shortDescription": "Centros de enseñanza o diagnóstico (CEA/CDA) que incumplan reglamentación.",
    "smldv": 3000,
    "smldvType": "MONTHLY_SALARY",
    "uvtDefault": 2604,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "CENTRO_ENSENANZA"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": false,
    "tags": [
      "irregularidades",
      "cda infractor",
      "j04",
      "academia conduccion",
      "grupo j"
    ]
  },
  {
    "code": "J05",
    "rawCode": "J.05",
    "category": "J",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "El propietario o administrador del parqueadero autorizado para materializar la inmovilización de un vehículo, que permita la salida de un vehículo inmovilizado por infracción a las normas de tránsito, sin orden de la autoridad competente, incurrirá en multa de cincuenta (50) salarios mínimos legales mensuales vigentes. Si se tratare de parqueadero autorizado no oficial, incurrirá además en suspensión o cancelación de la autorización del patio, parqueadero autorizado de acuerdo con la gravedad de la falta.",
    "shortDescription": "Parqueaderos autorizados que cobren tarifas por encima de lo estipulado.",
    "smldv": 3000,
    "smldvType": "MONTHLY_SALARY",
    "uvtDefault": 2604,
    "immobilization": true,
    "immobilizationType": "IMMEDIATE",
    "immobilizationDetails": "Inmovilización del automotor conforme al Código Nacional de Tránsito.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "PARQUEADERO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": false,
    "tags": [
      "grupo j",
      "tarifa parqueadero",
      "cobro excesivo parqueadero",
      "j05"
    ]
  },
  {
    "code": "J06",
    "rawCode": "J.06",
    "category": "J",
    "legalBasis": "Ley 769 de 2002, modificado por Ley 1383 de 2010 y Resolución 3027 de 2010 (Art. 1)",
    "description": "El propietario o administrador del parqueadero autorizado que no entregue los elementos contenidos en el vehículo y relacionados en el inventario, así como las condiciones del estado exterior descritas a su recibo, será sancionado con una multa de veinte (20) salarios mínimos legales mensuales vigentes y adicionalmente, deberá responder por los elementos extraviados, dañados o averiados del vehículo.",
    "shortDescription": "Parqueaderos que no respondan por pérdidas o averías de vehículos en custodia.",
    "smldv": 600,
    "smldvType": "MONTHLY_SALARY",
    "uvtDefault": 520.8,
    "immobilization": false,
    "immobilizationType": "NONE",
    "immobilizationDetails": "No contempla inmovilización obligatoria del vehículo.",
    "licenseSuspension": false,
    "licenseSuspensionDetails": "No contempla suspensión directa de licencia (salvo reincidencia en 6 meses según Art. 124 Ley 769).",
    "appliesTo": [
      "PARQUEADERO"
    ],
    "vehicleTypes": [
      "TODOS"
    ],
    "isPhotomultasEligible": false,
    "requiresCourse": false,
    "courseDiscountAllowed": false,
    "tags": [
      "j06",
      "dano en parqueadero",
      "grupo j",
      "custodia",
      "robo en patios"
    ]
  }
] as unknown as readonly TrafficInfraction[];

/**
 * Diccionario indexado por código normalizado (ej. "C02", "D04", "A01") para búsquedas O(1).
 */
export const INFRACTIONS_BY_CODE: Readonly<Record<string, TrafficInfraction>> = Object.freeze(
  INFRACTIONS_CATALOG.reduce<Record<string, TrafficInfraction>>((acc, inf) => {
    acc[inf.code] = inf;
    return acc;
  }, {})
);
