# transito-colombia

Libreria tecnica en TypeScript con el catalogo completo y la logica juridica del Codigo Nacional de Transito de Colombia. Integra las disposiciones de la Ley 769 de 2002, Ley 1383 de 2010, Resolucion 3027 de 2010 del Ministerio de Transporte, Ley 1696 de 2013, Ley 1843 de 2017, Ley 2161 de 2021, Ley 2251 de 2022 ("Ley Julian Esteban") y la jurisprudencia constitucional vinculante (Sentencias C-038 de 2020 y C-321 de 2022).

Disenada para sistemas de gestion de flotas, plataformas de transporte, sistemas de auditoria contravencional, aplicaciones ciudadanas de consulta de comparendos y pasarelas de liquidacion de multas.

---

## Tabla de Contenidos

1. Instalacion y Requisitos
2. Marco Normativo y Fuentes Oficiales
3. Catalogo de Infracciones (131 Codigos Oficiales)
4. Matriz Sancionatoria de Alcoholemia (Ley 1696 de 2013)
5. Liquidacion Financiera y Descuentos
6. Calendario de Dias Habiles y Terminos Legales (Debido Proceso)
7. Validadores Normativos (Placas, Licencias y Codigos)
8. Auditoria Juridica de Fotomultas (SAST)
9. Limites de Velocidad (Ley 2251 de 2022)
10. Modelos de Dominio para Aplicaciones (Vehiculos, Conductores y Comparendos)
11. Ejemplos de Uso
12. Pruebas Unitarias
13. Licencia

---

## 1. Instalacion y Requisitos

Requiere Node.js 18.0.0 o superior. Compatible con proyectos en TypeScript y JavaScript (ESM y CommonJS).

```bash
npm install transito-colombia
```

Para entornos TypeScript, las definiciones de tipos estan incluidas en el paquete sin necesidad de instalar `@types` adicionales.

---

## 2. Marco Normativo y Fuentes Oficiales

La libreria codifica la normatividad de transito colombiana vigente:

* **Ley 769 de 2002**: Codigo Nacional de Transito Terrestre. Base estructural de las normas de circulacion, licencias, vehiculos y procedimiento contravencional.
* **Ley 1383 de 2010**: Reforma sustancial que actualizo las cuantias y la clasificacion de faltas.
* **Resolucion 3027 de 2010 del Ministerio de Transporte**: Manual oficial de infracciones que adopto la codificacion alfanumerica de la A a la J.
* **Ley 1696 de 2013**: Regimen sancionatorio especial para conduccion bajo el influjo del alcohol u otras sustancias psicoactivas.
* **Ley 1843 de 2017**: Regulacion de los Sistemas Automaticos, Semiautomaticos y otros Medios Tecnologicos para la Deteccion de Infracciones (SAST / fotomultas).
* **Ley 2161 de 2021**: Medidas sobre el SOAT, renovacion de licencias de conduccion y deberes de custodia del propietario vehicular.
* **Ley 2251 de 2022 (Ley Julian Esteban)**: Nuevos limites de velocidad en zonas urbanas (maximo 50 km/h) y zonas escolares/residenciales (maximo 30 km/h).
* **Sentencia C-038 de 2020 (Corte Constitucional)**: Declaro inexequible la responsabilidad solidaria automatica del propietario para fotomultas que impliquen conductas activas de conduccion (velocidad, semaforo, pico y placa), obligando al Estado a identificar al conductor infractor.
* **Sentencia C-321 de 2022 (Corte Constitucional)**: Establecio la validez de la responsabilidad del propietario exclusivamente respecto al porte y vigencia del SOAT y de la Revision Tecnico-Mecanica (RTM).

---

## 3. Catalogo de Infracciones (131 Codigos Oficiales)

El catalogo incluye la totalidad de las 131 infracciones oficiales clasificadas de la A a la J. Cada infraccion contiene:

* Codigo normalizado (ejemplo: "C02") y formato reglamentario (ejemplo: "C.02").
* Categoria legal y base de calculo en SMLDV y UVT.
* Descripcion literal oficial y descripcion corta para interfaces de usuario.
* Tipificacion de inmovilizacion: INMEDIATA, PREVENTIVA_60_MIN, EN_AUSENCIA_DE_CONDUCTOR, SOLO_MOTOCICLETAS o NINGUNA.
* Suspension de licencia de conduccion: meses de sancion o causales de cancelacion.
* Actores obligados: CONDUCTOR, PROPIETARIO, PEATON, PASAJERO, EMPRESA, CENTRO_ENSENANZA, PARQUEADERO.
* Clases de vehiculos a los que aplica.
* Elegibilidad para deteccion electronica (SAST / fotomulta).
* Permisibilidad de descuento con curso pedagogico en Centro Integral de Atencion (CIA).
* Etiquetas clave para busqueda difusa.

### Resumen de Grupos

| Grupo | Descripcion del Actor o Conducta | Cuantia Base | Total Codigos |
|---|---|---|---|
| Grupo A | Conductores de vehiculos no automotores o de traccion animal | 4 SMLDV | 12 (A01 - A12) |
| Grupo B | Conductores y propietarios de vehiculos automotores (Faltas leves) | 8 SMLDV | 23 (B01 - B23) |
| Grupo C | Conductores y propietarios de vehiculos automotores (Faltas medias) | 15 SMLDV | 40 (C01 - C40) |
| Grupo D | Conductores y propietarios de vehiculos automotores (Faltas graves) | 30 SMLDV | 17 (D01 - D17) |
| Grupo E | Conductores y propietarios de vehiculos automotores (Muy graves) | 45 SMLDV | 4 (E01 - E04) |
| Grupo F | Infracciones cometidas por peatones | 1 SMLDV | 12 (F01 - F12) |
| Grupo G | Infracciones sancionadas con comparendo educativo | Formativo | 2 (G01 - G02) |
| Grupo H | Infracciones sancionadas con amonestacion y curso pedagogico | Amonestacion (5 SMLDV si incumple) | 13 (H01 - H13) |
| Grupo I | Infracciones con sanciones pecuniarias especiales | 10 a 30 SMLDV | 2 (I01 - I02) |
| Grupo J | Infracciones ambientales, administrativas, empresas y patios | Variable (hasta 1000 SMMLV) | 6 (J01 - J06) |

### Infracciones de Alta Frecuencia

* **B01**: Conducir sin portar la licencia de conduccion (permite hasta 60 minutos para subsanar antes del traslado a patios).
* **B02**: Conducir con la licencia de conduccion vencida.
* **C02**: Estacionar en sitios prohibidos (genera inmovilizacion con grua en ausencia del conductor).
* **C14**: Transitar por sitios restringidos o en horas prohibidas (Pico y Placa). Apta para fotomulta.
* **C24**: Conducir motocicleta sin observar normas de casco reglamentario o chaleco reflectivo visible de 18:00 a 06:00 horas.
* **C29**: Conducir a velocidad superior a la maxima permitida. Apta para fotomulta.
* **C35**: No realizar la revision tecnico-mecanica y de emisiones contaminantes en los plazos fijados. Apta para fotomulta y con responsabilidad directa del propietario.
* **C38**: Usar telefonos o dispositivos de comunicacion mientras se conduce sin accesorios de manos libres.
* **D01**: Guiar un vehiculo sin haber obtenido jamas la licencia de conduccion.
* **D02**: Conducir sin portar el SOAT vigente. Apta para fotomulta e inmovilizacion inmediata.
* **D04**: No detenerse ante una luz roja o amarilla de semaforo, o senal de PARE. Apta para fotomulta.
* **D12**: Conducir un vehiculo destinado a un servicio diferente al autorizado (transporte informal / pirateria).

---

## 4. Matriz Sancionatoria de Alcoholemia (Ley 1696 de 2013)

La Ley 1696 de 2013 modifico el articulo 152 de la Ley 769 de 2002, estableciendo sanciones progresivas e ineludibles segun el grado de embriaguez y la reincidencia:

| Grado de Alcoholemia | Rango mg Etanol / 100 ml Sangre | Reincidencia | Sancion SMLDV | Sancion Licencia | Inmovilizacion Patios | Acciones Comunitarias |
|---|---|---|---|---|---|---|
| Menor a Grado 0 | Menos de 20 | Cualquiera | 0 | Ninguna | 0 dias | 0 horas |
| Grado Cero | 20 a 39 | 1ra vez | 90 SMLDV | Suspension 1 ano | 1 dia habil | 20 horas |
| Grado Cero | 20 a 39 | 2da vez | 135 SMLDV | Suspension 1 ano | 1 dia habil | 20 horas |
| Grado Cero | 20 a 39 | 3ra vez o mas | 180 SMLDV | Suspension 3 anos | 3 dias habiles | 30 horas |
| Primer Grado | 40 a 99 | 1ra vez | 180 SMLDV | Suspension 3 anos | 3 dias habiles | 30 horas |
| Primer Grado | 40 a 99 | 2da vez | 270 SMLDV | Suspension 6 anos | 5 dias habiles | 50 horas |
| Primer Grado | 40 a 99 | 3ra vez o mas | 360 SMLDV | Cancelacion definitiva | 10 dias habiles | 60 horas |
| Segundo Grado | 100 a 149 | 1ra vez | 360 SMLDV | Suspension 5 anos | 6 dias habiles | 40 horas |
| Segundo Grado | 100 a 149 | 2da vez | 540 SMLDV | Suspension 10 anos | 10 dias habiles | 60 horas |
| Segundo Grado | 100 a 149 | 3ra vez o mas | 720 SMLDV | Cancelacion definitiva | 20 dias habiles | 80 horas |
| Tercer Grado | 150 en adelante | 1ra vez | 720 SMLDV | Suspension 10 anos | 10 dias habiles | 50 horas |
| Tercer Grado | 150 en adelante | 2da vez | 1080 SMLDV | Cancelacion definitiva | 20 dias habiles | 80 horas |
| Tercer Grado | 150 en adelante | 3ra vez o mas | 1440 SMLDV | Cancelacion definitiva | 20 dias habiles | 90 horas |
| Negativa a la prueba | Renuencia / Fuga | Primera vez | 1440 SMLDV | Cancelacion definitiva | 20 dias habiles | 50 horas |

---

## 5. Liquidacion Financiera y Descuentos

### Formula de Liquidacion

La cuantias se determinan multiplicando el numero de SMLDV asignados por el valor diario del salario minimo legal del ano respectivo, redondeado a la centena mas cercana conforme a la practica administrativa de los organismos de transito:

$$\text{Valor Base} = \text{RedondeoCentena}(\text{SMLDV} \times \text{Valor Diario SMMLV})$$

### Historico de Tarifas

La libreria almacena los parametros de SMMLV, SMLDV, UVT y tasa de usura moratoria mensual para los anos 2020 a 2026:

* **2020**: SMMLV $877.803 COP | SMLDV $29.260 COP | UVT $35.607 COP
* **2021**: SMMLV $908.526 COP | SMLDV $30.284 COP | UVT $36.308 COP
* **2022**: SMMLV $1.000.000 COP | SMLDV $33.333 COP | UVT $38.004 COP
* **2023**: SMMLV $1.160.000 COP | SMLDV $38.667 COP | UVT $42.412 COP
* **2024**: SMMLV $1.300.000 COP | SMLDV $43.333 COP | UVT $47.065 COP
* **2025**: SMMLV $1.423.500 COP | SMLDV $47.450 COP | UVT $49.799 COP
* **2026**: SMMLV $1.750.905 COP (Decreto 159 de 2026) | SMLDV $58.364 COP | UVT $52.800 COP

### Plazos de Descuento y Cursos Pedagogicos

* **Comparendo en via publica (Agente presencial)**:
  * **50% de descuento**: Dentro de los primeros 5 dias habiles siguientes a la imposicion, realizando el curso vial en un CIA.
  * **25% de descuento**: Entre el dia habil 6 y el dia habil 20 siguientes, realizando el curso vial.
  * **100% tarifa plena**: Del dia habil 21 al 30.
  * **Intereses moratorios**: A partir del dia habil 31 (calculados con la tasa de usura de la Superintendencia Financiera).
* **Comparendo por medios tecnologicos (Fotomulta)**:
  * **Notificacion**: La entidad debe enviar la citacion dentro de los 3 dias habiles siguientes a la validacion.
  * **50% de descuento**: Dentro de los 11 dias habiles siguientes al recibo de la notificacion personal o por aviso, realizando el curso vial.
  * **25% de descuento**: Entre el dia habil 12 y el dia habil 26 siguientes, realizando el curso vial.
  * **100% tarifa plena**: A partir del dia habil 27.

---

## 6. Calendario de Dias Habiles y Terminos Legales (Debido Proceso)

### Computo de Festivos (Ley Emiliani 51 de 1983)

El calculador implementa el algoritmo ecclesiastico de Pascua para calcular los 18 festivos anuales de Colombia:

* **Festivos fijos**: 1 de enero, 1 de mayo, 20 de julio, 7 de agosto, 8 de diciembre y 25 de diciembre.
* **Festivos trasladados al siguiente lunes**: Reyes Magos, San Jose, San Pedro y San Pablo, Asuncion de la Virgen, Dia de la Raza, Todos los Santos e Independencia de Cartagena.
* **Festivos moviles basados en Pascua**: Jueves Santo, Viernes Santo, Ascension del Senor (+43 dias), Corpus Christi (+64 dias) y Sagrado Corazon de Jesus (+71 dias).

### Terminos de Caducidad y Prescripcion

* **Caducidad (Articulo 161 Ley 769 / Ley 1843)**: La accion por contravencion caduca si transcurre un (1) ano desde la comision de la infraccion sin que el organismo de transito haya celebrado audiencia publica y expedido resolucion sancionatoria en firme.
* **Prescripcion (Articulo 159 Ley 769)**: La obligacion de pago prescribe en tres (3) anos contados a partir de la fecha de ocurrencia del hecho. Si la autoridad notifica mandamiento de pago dentro del proceso de cobro coactivo, el termino se interrumpe por una sola vez y corre por tres (3) anos adicionales.

---

## 7. Validadores Normativos

### Placas Vehiculares (`validatePlate`)

Valida, normaliza y desglosa los tipos de placa segun resoluciones del Ministerio de Transporte:

* **Automovil particular o publico**: 3 letras y 3 numeros (`ABC123` / `ABC-123`).
* **Motocicleta moderna**: 3 letras, 2 numeros y 1 letra (`ABC12D` / `ABC-12D`).
* **Motocicleta tradicional**: 2 letras y 3 numeros (`AB123`) o 3 letras y 2 numeros (`ABC12`).
* **Remolques y semirremolques**: 1 letra (R o S) y 5 numeros (`R12345` / `S12345`).
* **Cuerpo diplomatico**: 2 letras (CD, CC, MI, OI, AT) y 4 numeros (`CD1234`).
* **Extraccion para Pico y Placa**: Extrae el digito exacto de restriccion (el ultimo digito numerico para carros y motos).

### Jerarquia de Licencias de Conduccion (`canDriverOperateVehicle`)

Aplica la regla de subsumpcion legal de categorias (Art. 19 y 131 Ley 769):

* `C3` autoriza: C3, C2, C1, B3, B2 y B1.
* `C2` autoriza: C2, C1, B2 y B1.
* `C1` autoriza: C1 y B1.
* `B3` autoriza: B3, B2 y B1.
* `B2` autoriza: B2 y B1.
* `B1` autoriza: B1.
* `A2` autoriza: A2 y A1.
* `A1` autoriza: A1.

Una licencia de servicio particular (B1, B2, B3) nunca habilita para conducir vehiculos de servicio publico (C1, C2, C3).

### Vigencia Legal de Licencias por Edad (`calculateLicenseValidity`)

Calcula la fecha de renovacion conforme a la Ley 2161 de 2021:

* **Servicio Particular (A1, A2, B1, B2, B3)**:
  * Menores de 60 anos: vigencia de 10 anos.
  * De 60 a 79 anos: vigencia de 5 anos.
  * Mayores de 80 anos: vigencia de 1 ano.
* **Servicio Publico (C1, C2, C3)**:
  * Menores de 60 anos: vigencia de 3 anos.
  * Mayores de 60 anos: vigencia de 1 ano.

---

## 8. Auditoria Juridica de Fotomultas (SAST)

La funcion `auditPhotomultaNotice` examina la viabilidad de defensa o impugnacion constitucional de comparendos electronicos:

1. **Sentencia C-038 de 2020**: Si la infraccion corresponde a una conducta activa (C29 exceso de velocidad, D04 semaforo en rojo, C14 pico y placa) y el comparendo fue emitido al propietario sin individualizar e identificar con prueba fehaciente al conductor, se genera causal de nulidad por violacion al debido proceso y al principio de responsabilidad personal.
2. **Sentencia C-321 de 2022**: El propietario mantiene responsabilidad solidaria objetiva exclusivamente para las faltas de no portar SOAT vigente (D02) y no realizar la revision tecnico-mecanica (C35).
3. **Termino de envio (Art. 8 Ley 1843 de 2017)**: La orden de comparendo debe enviarse por correo fisico o electronico dentro de los 3 dias habiles siguientes a la validacion. Envios posteriores constituyen causal de indebida notificacion.

---

## 9. Limites de Velocidad (Ley 2251 de 2022 - Ley Julian Esteban)

Configuracion legal segun el tipo de zona y actor vial:

* **Zonas urbanas**: Limite maximo general de 50 km/h para todo tipo de automotores. Ninguna autoridad local puede aumentarlo por encima de 50 km/h.
* **Zonas escolares y residenciales**: Limite estricto de 30 km/h.
* **Carreteras nacionales en calzada sencilla**: 90 km/h para vehiculos particulares; 80 km/h para transporte publico y de carga.
* **Carreteras nacionales en doble calzada**: Hasta 120 km/h para vehiculos particulares; 80 km/h para transporte publico y de carga.
* **Tipificacion contravencional**: Exceso general aplica infraccion **C29** (15 SMLDV). Exceso cometido en vehiculo de transporte escolar tipifica infraccion **D10** (30 SMLDV).

---

## 10. Modelos de Dominio para Aplicaciones

* **`VehicleRecord`**: Control de placa, clase, servicio, fechas de expiracion de SOAT y Revision Tecnico-Mecanica, alertas de vencimiento proximo (30 dias) y verificacion de inmovilizacion en patios.
* **`DriverUser`**: Registro de usuario conductor, numero de identificacion, historico de licencias activas, estado de suspension y contador de infracciones.
* **`Comparendo`**: Entidad de seguimiento de ciclo de vida del comparendo, montos liquidados, aplicacion de pagos, registro de cursos CIA, solicitudes de audiencia y transicion de estados (`DESCUENTO_50_VIGENTE`, `DESCUENTO_25_VIGENTE`, `COBRO_PLENO`, `CADUCADO`, `PRESCRITO`, `PAGADO_DESCUENTO_50`, `PAGADO_TOTAL`).

---

## 11. Ejemplos de Uso

### Ejemplo 1: Consulta de infraccion y liquidacion con descuento

```typescript
import { getInfractionOrThrow, calculateFine } from 'transito-colombia';

// 1. Obtener infraccion C02 (Parqueo prohibido)
const infraccion = getInfractionOrThrow('C02');
console.log(infraccion.code); // "C02"
console.log(infraccion.smldv); // 15
console.log(infraccion.immobilization); // true

// 2. Liquidar valor para el ano 2024 con pago dentro de los primeros 5 dias habiles y curso CIA
const multa = calculateFine('C02', {
  year: 2024,
  detectionType: 'AGENTE_EN_VIA',
  notificationDate: '2024-10-01',
  paymentDate: '2024-10-03',
  hasCourseCertificate: true
});

console.log(multa.baseAmountCop);   // 650000 COP
console.log(multa.effectiveDiscount); // 50
console.log(multa.totalToPayCop);   // 325000 COP
```

### Ejemplo 2: Evaluacion de alcoholemia

```typescript
import { evaluateAlcoholSanction } from 'transito-colombia';

// Conductor con 75 mg etanol / 100 ml de sangre (Primer Grado) por segunda vez
const resultado = evaluateAlcoholSanction({
  mgPer100ml: 75,
  reincidenceCount: 1,
  year: 2024
});

console.log(resultado.grade); // "UNO"
console.log(resultado.sanction?.smldv); // 270 SMLDV
console.log(resultado.fineAmountCop); // 11700000 COP
console.log(resultado.sanction?.licenseSuspensionYears); // 6 anos
console.log(resultado.sanction?.immobilizationDays); // 5 dias habiles
console.log(resultado.sanction?.communityServiceHours); // 50 horas
```

### Ejemplo 3: Validacion de placa y control de Pico y Placa

```typescript
import { validatePlate, isRestrictedByPicoYPlaca } from 'transito-colombia';

const placa = validatePlate('ABC-12D');
console.log(placa.isValid); // true
console.log(placa.normalizedPlate); // "ABC12D"
console.log(placa.lastDigit); // 2

// Verificar restriccion de circulacion para digitos pares [0, 2, 4, 6, 8]
const restringido = isRestrictedByPicoYPlaca(placa.normalizedPlate, [0, 2, 4, 6, 8]);
console.log(restringido); // true
```

### Ejemplo 4: Verificacion de autorizacion de conductor sobre vehiculo

```typescript
import { createDriverRecord, checkDriverAuthorizationForVehicle } from 'transito-colombia';

const conductor = createDriverRecord({
  documentType: 'CC',
  documentNumber: '1020304050',
  fullName: 'Juan Perez',
  licenses: [
    {
      category: 'B1',
      expeditionDate: '2020-05-10',
      expirationDate: '2030-05-10',
      status: 'ACTIVA'
    }
  ]
});

// Puede conducir automovil particular
const authAuto = checkDriverAuthorizationForVehicle(conductor, 'AUTOMOVIL', 'PARTICULAR');
console.log(authAuto.authorized); // true

// No puede conducir camion particular con licencia B1
const authCamion = checkDriverAuthorizationForVehicle(conductor, 'CAMION', 'PARTICULAR');
console.log(authCamion.authorized); // false

// No puede conducir taxi de servicio publico con licencia B1
const authTaxi = checkDriverAuthorizationForVehicle(conductor, 'AUTOMOVIL', 'PUBLICO');
console.log(authTaxi.authorized); // false (requiere C1)
```

### Ejemplo 5: Auditoria de fotomulta por exceso de velocidad

```typescript
import { auditPhotomultaNotice } from 'transito-colombia';

// Camara detecta presunto exceso de velocidad a vehiculo de servicio particular
const auditoria = auditPhotomultaNotice('C29', {
  driverWasIdentified: false,
  businessDaysToSendNotification: 6,
  cameraIsApprovedByANSV: true
});

console.log(auditoria.isPotentiallyAppeallable); // true
console.log(auditoria.groundsForAppeal);
// 1. Falta de plena identificacion del conductor infractor (Sentencia C-038 de 2020).
// 2. Notificacion extemporanea (enviada a los 6 dias habiles, limite de 3 dias segun Art. 8 Ley 1843).
```

### Ejemplo 6: Control de reincidencia (Articulo 124 Ley 769)

```typescript
import { checkReincidence } from 'transito-colombia';

const historialInfracciones = [
  { code: 'C02', date: '2024-03-01' }
];

// Nueva infraccion ocurrida dentro de los 6 meses siguientes
const reincidencia = checkReincidence(historialInfracciones, '2024-05-15');
console.log(reincidencia.hasReincidence); // true
console.log(reincidencia.requiresLicenseSuspension); // true
console.log(reincidencia.suspensionMonths); // 6 meses
```

---

## 12. Pruebas Unitarias

La libreria cuenta con una suite completa de 39 pruebas automatizadas implementadas sobre Vitest:

```bash
npm test
```

Para ejecutar la verificacion de tipos con TypeScript:

```bash
npm run typecheck
```

Para generar la compilacion dual (ESM y CommonJS) con declaration maps:

```bash
npm run build
```

---

## 13. Licencia

Licencia MIT. Consulte el archivo LICENSE para mas detalles.
