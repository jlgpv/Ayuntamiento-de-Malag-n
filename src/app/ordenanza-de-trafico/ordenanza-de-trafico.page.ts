import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ordenanza-de-trafico',
  templateUrl: './ordenanza-de-trafico.page.html',
  styleUrls: ['./ordenanza-de-trafico.page.scss'],
})
export class OrdenanzaDeTraficoPage {
  items = [
    {
      title: 'ORDENANZA MUNICIPAL DE TRÁFICO',
      chapter: 'TÍTULO PRELIMINAR: DEL OBJETO Y ÁMBITO DE APLICACIÓN.',
      section: '',
      article: 'Artículo 1. Competencia.',
      paragraphs: ['La presente ordenanza se dicta en ejercicio de las competencias atribuidas a los municipios en materia de ordenación del tráfico de personas y vehículos en las vías urbanas por la Ley Reguladora de las Bases del Régimen Local y la Ley sobre Tráfico, Circulación de Vehículos a Motor y Seguridad Vial, en la versión dada por la Ley 6/2014, de 7 de abril, por la que se modifica el texto articulado de la Ley sobre Tráfico, Circulación de Vehículos a Motor y Seguridad Vial, aprobado por el Real Decreto Legislativo 339/1990, de 2 de marzo.'],
      tableheader: '',
      table: ''
    },
    {
      title: '',
      chapter: '',
      section: '',
      article: 'Artículo 2. Objeto.',
      paragraphs: ['Es objeto de la presente ordenanza la regulación de los usos de las vías urbanas y travesías de acuerdo con las fórmulas de cooperación o delegación con otras Administraciones, haciendo compatible la equitativa distribución de los aparcamientos entre todos los usuarios con la necesaria fluidez del tráfico rodado y con el uso peatonal de las calles, así como el establecimiento de medidas de estacionamiento limitado, prestando especial atención a las necesidades de las personas con discapacidad que tienen reducida su movilidad y que utilizan vehículos, todo ello con el fin de favorecer su integración social.'],
      tableheader: '',
      table: ''
    },
    {
      title: '',
      chapter: '',
      section: '',
      article: 'Artículo 3. Ámbito de aplicación.',
      paragraphs: ['Los preceptos de esta ordenanza serán de aplicación en las vías del término municipal y obligarán a los titulares de las mismas y a sus usuarios. Se entenderá por usuario de la vía a peatones, conductores, ciclistas y cualquier otra persona que realice sobre la vía o utilice la misma para el desarrollo de actividades de naturaleza diversa, que precisarán para su ejercicio la licencia municipal.',],
      tableheader: '',
      table: ''
    },
    {
    title: 'TÍTULO PRIMERO: DE LA CIRCULACIÓN URBANA.',
    chapter: 'Capítulo I: Normas generales.',
    section: '',
    article: 'Artículo 4',
    paragraphs: ['1. Los usuarios de las vías están obligados a comportarse de manera que no entorpezcan indebidamente la circulación ni causen peligro, perjuicios o molestias innecesarias a las personas o daños a los bienes.',
      '2. Se prohibe llevar abiertas las puertas del vehículo, abrirlas antes de su completa inmovilización y abrirlas o apearse del mismo sin haberse cerciorado previamente de que ello no implica peligro o entorpecimiento a otros usuarios, especialmente cuando se refiere a conductores de bicicletas.',
      '3. Las bicicletas estarán dotadas de los elementos reflectantes debidamente homologados que reglamentariamente se determinen y que deberán poseer estos vehículos de acuerdo a dicha normativa. Cuando sea obligatorio el uso de alumbrado, los conductores de bicicletas además llevarán colocada alguna prenda reflectante si circulan por vía interurbana.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 5.',
    paragraphs: ['1. La realización de obras, instalaciones, colocación de contenedores, mobiliario urbano o cualquier otro elemento u objeto de forma permanente o provisional en las vías objeto de esta ordenanza necesitará la previa licencia municipal y se regirán por lo dispuesto en esta norma y en las leyes de aplicación general. Las mismas normas serán aplicables a la interrupción de las obras, en razón de las circunstancias o características especiales del tráfico que podrá llevarse a efecto a petición de la Autoridad municipal.',
      '2. En el caso de realización de obras en las vías, se deberá comunicar con anterioridad a su inicio al organismo autónomo Jefatura Central de Tráfico o, en su caso, a la autoridad autonómica o local responsable de la gestión y regulación del tráfico que, sin perjuicio de las facultades del órgano competente para la ejecución de las obras, dictará las instrucciones que resulten procedentes en relación a la regulación, gestión y control del tráfico, teniendo en cuenta el calendario de restricciones a la circulación y las que se deriven de otras autorizaciones a la misma.',
      '3. No podrán circular por las vías objeto de esta ordenanza los vehículos con niveles de emisión de ruido superiores a los reglamentariamente establecidos; así como tampoco emitiendo gases o humos en valores superiores a los límites establecidos y en los supuestos de haber sido objeto de una reforma de importancia no autorizada. Todos los conductores de vehículos quedan obligados a colaborar en las pruebas reglamentarias de detección que permitan comprobar las posibles deficiencias indicadas.',
      '4. Se podrá restringir la circulación a determinados vehículos en vías urbanas por motivos medioambientales.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 6.',
    paragraphs: ['Se prohibe arrojar, depositar o abandonar sobre la vía objetos que puedan entorpecer la libre circulación, parada o estacionamiento, hacerlo peligroso o deteriorar aquella o sus instalaciones, o producir en la misma o en sus inmediaciones efectos que modifiquen las condiciones apropiadas para circular, parar o estacionar.'],
    tableheader: '',
    table: '' 
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 7',
    paragraphs: ['El límite máximo de velocidad de marcha autorizado en las vías del casco urbano reguladas por la presente ordenanza es de 40 Km./hora sin perjuicio de que la Autoridad municipal, vistas sus características peculiares, pueda establecer en ciertas vías límites inferiores o superiores.',
      '1. Los lugares con prohibiciones u obligaciones específicas de velocidad serán señalizados con carácter permanente, o temporal en su caso. En defecto de señalización específica, se cumplirá la genérica establecida para cada vía.',
      '2. Se podrá circular por debajo de los límites mínimos de velocidad en los casos de los ciclos, vehículos de tracción animal, transportes y vehículos especiales, oc uando las circunstancias de tráfico impidan el mantenimiento de una velocidad superior a la mínima sin riesgo para la circulación, así como en los supuestos de protección o acompañamiento a otros vehículos, en las condiciones que reglamentariamente se establezcan.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 8.',
    paragraphs: ['Los conductores de vehículos deberán ajustarse en el desarrollo de la conducción a las normas establecidas en la Ley sobre Tráfico, Circulación de Vehículos a Motor y Seguridad Vial y su Reglamento.',
      '1. Queda prohibido conducir todo tipo de vehículos utilizando cascos o auriculares conectados a aparatos receptores o reproductores de sonido, excepto durante la realización de las pruebas de aptitud en circuito abierto para la obtención de permiso de conducción en las condiciones que se determinen reglamentariamente. Se prohíbe la utilización durante la conducción de dispositivos de telefonía móvil y cualquier otro medio o sistema de comunicación, excepto cuando el desarrollo de la comunicación tenga lugar sin emplear las manos ni usar cascos, auriculares o instrumentos similares. Quedan exentos de dicha prohibición los agentes de la autoridad en el ejercicio de las funciones que tengan encomendadas. Reglamentariamente se podrán establecer otras excepciones a las prohibiciones previstas en los párrafos anteriores.',
      '2. Los conductores y ocupantes de los vehículos están obligados a utilizar el cinturón de seguridad, cascos y demás elementos de protección y dispositivos de seguridad en las condiciones y con las excepciones que, en su caso, se determinen reglamentariamente.',
      '3. Los conductores profesionales cuando presten servicio público a terceros no se considerarán responsables del incumplimiento de esta norma por parte de los ocupantes del vehículo.',
      '4. Los conductores y, en su caso, los ocupantes de bicicletas y ciclos en general estarán obligados a utilizar el casco de protección en las vías urbanas, interurbanas y travesías, en los supuestos y con las condiciones que reglamentariamente se determinen, siendo obligatorio su uso por los menores de dieciséis años, y también por quienes circulen en vías interurbanas.',
      '5. Queda prohibido circular con menores de doce años situados en los asientos delanteros del vehículo salvo que utilicen dispositivos homologados al efecto. Asimismo, queda prohibido circular con menores de doce años como pasajeros de ciclomotores o motocicletas con o sin sidecar, por cualquier clase de vía. Excepcionalmente se permite esta circulación a partir de los siete años, siempre que los conductores sean los padres o las madres, tutores o persona mayor de edad autorizada por ello, utilicen casco homologado y se cumplan las condiciones específicas de seguridad establecidas reglamentariamente',
      '6. Se prohíbe instalar o llevar en los vehículos inhibidores de radares o cinemómetros o cualesquiera otros instrumentos encaminados a eludir o a interferir en el correcto funcionamiento de los sistemas de vigilancia del tráfico, así como emitir o hacer señales con dicha finalidad. Asimismo, se prohíbe utilizar mecanismos de detección de radares o cinemómetros.',
      '7. Quedan excluidos de esta prohibición los mecanismos de aviso que informan de la posición de los sistemas de vigilancia del tráfico.',
      '8. Se prohíbe el transporte de toda clase de residuos o de materias cuya naturaleza u olor puedan molestar o comprometer a la salubridad, si no se realiza en vehículos herméticamente cerrados e impermeables, y en horarios autorizados.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: 'Capítulo II: De la señalización.',
    section: '',
    article: 'Artículo 9.',
    paragraphs: ['1. La señalización de las vías urbanas corresponde, con carácter exclusivo, a la Autoridad municipal. La Alcaldía o el/la Concejal Delegado/a, ordenará la colocación, retirada y sustitución de las señales que en cada caso proceda.',
      '2. Todos los usuarios de las vías objeto de esta ordenanza están obligados a obedecer las señales de la circulación que establezcan una obligación o una prohibición y a adaptar su comportamiento al mensaje del resto de las señales reglamentarias que se encuentren en las vías por las que circulan. A estos efectos, cuando la señal imponga una obligación de detención, no podrá reanudar su marcha el conductor del vehículo así detenido hasta haber cumplido la finalidad que la señal establece.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 10.',
    paragraphs: ['No se podrá instalar en la vía ningún tipo de señalización sin la previa autorización municipal. La licencia determinará la ubicación, modelo y dimensiones de las señales a implantar. El Ayuntamiento procederá a la retirada inmediata de toda aquella señalización que no esté debidamente autorizada o no cumpla las normas en vigor y esto tanto en lo concerniente a las señales no reglamentarias como si es incorrecta la forma, colocación o diseño de la señal'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: 'Capítulo III: De la parada y estacionamiento.',
    section: 'Sección 1ª. De la parada.',
    article: 'Artículo 11.',
    paragraphs: ['Se entiende por parada toda inmovilización de un vehículo durante un tiempo inferior a dos minutos, sin que el conductor pueda abandonarlo. No se considerará parada la detención accidental o momentánea por necesidad de la circulación.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 12.',
    paragraphs: ['1. La parada y estacionamiento deberán efectuarse de tal manera que el vehículo no obstaculice la circulación ni constituya un riesgo para el resto de los usuarios de la vía, cuidando especialmente la colocación del mismo y el evitar que pueda ponerse en movimiento en ausencia del conductor, de acuerdo con las normas que reglamentariamente se establezcan.',
      '2. En todo caso, la parada tendrá que hacerse arrimando el coche a la acera de la derecha según el sentido de la marcha, aunque en vías de un solo sentido de circulación también se podrá hacer a la izquierda. Los pasajeros tendrán que bajar por el lado correspondiente a la acera. La persona conductora, si tiene que bajar, podrá hacerlo por el otro lado, siempre que previamente se asegure que puede efectuarlo sin ningún tipo de peligro.',
      '3. En vías urbanas, se permitirá la parada o estacionamiento de las grúas de auxilio en carretera por el tiempo indispensable para efectuar la retirada de los vehículos averiados o accidentados, siempre que no se cree un nuevo peligro, ni se cause obstáculo a la circulación.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 13.',
    paragraphs: ['En todas las zonas y vías públicas, la parada se efectuará en los puntos donde no se obstaculice la circulación ni tampoco se origine peligro para otros usuarios. Se exceptúan los casos en que los pasajeros sean personas enfermas o impedidas, o se trate de servicios públicos de urgencia o de camiones del servicio de limpieza o recogida de basuras. En las calles urbanizadas sin acera, se dejará una distancia mínima de un metro desde la fachada más próxima.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 14.',
    paragraphs: ['Los auto-taxi y vehículos de gran turismo pararán en la forma y lugares que se determinen o se señalicen al respecto.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 15.',
    paragraphs: ['Los autobuses únicamente podrán dejar y tomar viajeros en las paradas expresamente determinadas o señalizadas por la Autoridad Municipal.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 16.',
    paragraphs: ['La Autoridad municipal podrá fijar paradas en los centros docentes que tengan servicio de transporte escolar, quedando prohibida la recogida de alumnos fuera de dichas paradas.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 17.',
    paragraphs: ['Se prohíben las paradas en los casos y lugares siguientes:',
      'a) En los lugares prohibidos reglamentariamente o señalizados por discos o pintura',
      'b) Cuando produzcan obstrucción o perturbación grave en la circulación de vehículos o peatones.',
      'c) En doble fila, salvo que aún quede libre un carril en calles de sentido único de circulación y dos en calles en dos sentidos, siempre que el tráfico no sea muy intenso y no haya espacio libre en una distancia de cuarenta metros.',
      'd) Sobre los refugios, isletas, medianas, zonas de protección y demás elementos canalizadores de tráfico.',
      'e) Cuando se obstaculice la utilización normal del paso de entrada y salida de vehículos y personas. Así como cuando se encuentre señalizado el acceso de vehículos con el correspondiente vado.',
      'f) Zonas señalizadas para su uso exclusivo de minusválidos, sobre las aceras, paseos y demás zonas destinadas al paso de peatones.',
      'g) A menos de 5 metros de una esquina, cruce o bifurcación salvo que la parada se pueda realizar en chaflanes o fuera de estos sin constituir obstáculo o causar peligro para la circulación.',
      'h) En los lugares donde la detención impida la visión de señales de tráfico a los conductores a los que éstas vayan dirigidas.',
      'i) En la proximidad de curvas o cambios de rasantes cuando la visibilidad sea insuficiente para que los demás vehículos los puedan rebasar sin peligro al que esté detenido.',
      'j) En las paradas debidamente señalizadas para vehículos de servicio público, organismos oficiales y servicios de urgencia.',
      'k) En los rebajes de la acera para el paso de personas de movilidad reducida.',
      'l) En los pasos o carriles reservados exclusivamente para el uso de ciclistas.',
      'm) En las vías públicas declaradas de atención preferente por bando de Alcaldía, salvo que la parada se pueda realizar en los chaflanes.'],
    tableheader: '',  
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: 'Sección 2ª. Del estacionamiento',
    article: 'Artículo 18.',
    paragraphs: ['Se entiende por estacionamiento toda inmovilización de un vehículo cuya duración exceda de dos minutos, siempre que no esté motivada por imperativo de la circulación o por el cumplimiento de cualquier registro reglamentario.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 19.',
    paragraphs: ['El estacionamiento deberá efectuarse de tal manera que el vehículo no obstaculice la circulación ni constituya un riesgo para el resto de los usuarios de la vía cuidando especialmente la colocación del mismo situándolo lo más cerca posible del borde de la calzada, según el sentido de la marcha, evitando que pueda ponerse en movimiento en ausencia del conductor. A tal objeto los conductores tendrán que tomar las precauciones adecuadas y suficientes y serán responsables de las infracciones que se puedan llegar a producir como consecuencia de un cambio de situación del vehículo al ponerse en marcha espontáneamente o por la acción de terceros, salvo que en este último caso haya existido violencia manifiesta. El estacionamiento se efectuará de forma que permita a los demás usuarios la mejor utilización del restante espacio libre.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 20.',
    paragraphs: ['Los vehículos se podrán estacionar en fila, en batería y en semibatería.',
      'Se denomina estacionamiento en fila, aquél en que los vehículos están situados unos detrás de otros y de forma paralela al bordillo de la acera.',
      'Se denomina estacionamiento en batería, aquél en que los vehículos están situados unos al costado de otros y de forma perpendicular al bordillo de la acera.',
      'Se denomina estacionamiento en semibatería, aquél en que los vehículos están situados unos al costado de otros y oblicuamente al bordillo de la acera.',
      'Como norma general el estacionamiento se hará siempre en fila. La excepción a esta norma se tendrá que señalizar expresamente. En los estacionamientos con señalización en el pavimento, los vehículos se colocarán dentro del perímetro marcado.'],
    tableheader: '',  
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 21.',
    paragraphs: ['En las vías de doble sentido de la circulación, el estacionamiento cuando no estuviera prohibido, se efectuará en el lado derecho del sentido de la marcha. En las vías de un solo sentido de circulación y siempre que no exista señal en contrario el estacionamiento se efectuará en ambos lados de la calzada siempre que se deje una anchura para la circulación no inferior a tres metros.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 22.',
    paragraphs: ['Las personas conductoras deberán estacionar los vehículos tan cerca del bordillo como sea posible, dejando un espacio no superior a 20 centímetros entre el bordillo de la acera y la superficie exterior de las ruedas del vehículo para poder permitir la limpieza de esta parte de la calzada.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 23.',
    paragraphs: ['No se podrá estacionar en las vías públicas los remolques separados del vehículo a motor.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 24.',
    paragraphs: ['La Autoridad municipal podrá fijar zonas en la vía pública para estacionamiento o para utilización como terminales de línea de autobuses, de no existir estación de autobuses.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 25.',
    paragraphs: ['El Ayuntamiento podrá establecer medidas de estacionamiento limitado, con el fin de garantizar la rotación de los aparcamientos.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 26.',
    paragraphs: ['La Autoridad municipal podrá establecer y señalizar zonas para la realización de las operaciones de carga y descarga. En tal supuesto queda prohibido efectuar dichas operaciones dentro de un radio de acción de 50 metros cuadrados a partir de la zona reservada. Podrán hacer uso de las reservas de estacionamiento para carga y descarga cualquier vehículo que esté realizando operaciones de carga y descarga mientras duren las operaciones y sin superar el tiempo máximo de 15 minutos, excepto casos justificados en que se ajustará el tiempo al estrictamente necesario.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 27.',
    paragraphs: ['Las motocicletas o ciclomotores de dos ruedas no podrán ser estacionados, en aceras, andenes y paseos.',
      '1. El estacionamiento en la calzada se hará en semibatería ocupando una anchura máxima de un metro y medio.',
      '2. Cuando se estacione una motocicleta o ciclomotor entre otros vehículos, se hará de tal manera que no impida el acceso a los mismos ni obstaculice las maniobras de estacionamiento.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 28.',
    paragraphs: ['Queda prohibido el estacionamiento en los casos y lugares siguientes:',
      'a) En los lugares donde lo prohíban las señales correspondientes.',
      'b) Donde esté prohibida la parada.',
      'c) En un mismo lugar de la vía pública durante más de 48 horas consecutivas. A los efectos expresados sólo se computarán los días hábiles.',
      'd) En doble fila en cualquier supuesto.',
      'e) En las zonas señalizadas como reserva de carga y descarga de mercancías.',
      'f) En las zonas reservadas para el estacionamiento de vehículo de servicio público, organismos oficiales, delegaciones diplomáticas y servicios de urgencia o policía.',
      'g) Delante de los accesos de edificios destinados a espectáculos o actos públicos, en las horas de celebración de los mismos ya que con ello se resta facilidad a la salida masiva de personas en caso de emergencias.',
      'h) Cuando el vehículo estacionado deje para la circulación rodada una anchura inferior a la de un carril de 3 metros.',
      'i) En las calles de doble sentido de circulación en las cuales la anchura de la calzada sólo permita el paso de dos columnas de vehículos.',
      'j) Cuando se obstaculice la utilización normal del paso a inmuebles por vehículos o personas.',
      'k) Cuando se obstaculice la utilización normal de los pasos rebajados para personas de movilidad reducida.',
      'l) En condiciones que dificulten la salida de otros vehículos estacionados reglamentariamente.',
      'm) En los vados, total o parcialmente.',
      'n) En los lugares reservados exclusivamente para parada de vehículos.',
      'o) En los lugares señalizados temporalmente por obras, actos públicos o manifestaciones deportivas.',
      'p) En los lugares autorizados por la Autoridad municipal como de estacionamiento con limitación horaria cuando colocando el distintivo que lo autoriza se mantenga estacionado el vehículo en exceso sobre el tiempo máximo permitido.',
      'q) Delante de los lugares reservados para contenedores del servicio municipal de limpieza.',
      'r) Sobre las aceras, paseos y demás zonas destinadas al paso de peatones.',
      's) En zonas señalizadas para uso exclusivo de personas de movilidad reducida (minusválidos).'],
    tableheader: '',
    table: ''
  },
  {
    title: 'TÍTULO SEGUNDO: DE LAS ACTIVIDADES EN VÍA PÚBLICA.',
    chapter: 'Capítulo I: Carga y Descarga.',
    section: '',
    article: 'Artículo 29.',
    paragraphs: ['Las labores de carga y descarga se realizarán en vehículos dedicados al transporte de mercancías y vehículos comerciales, dentro de las zonas reservadas a tal efecto, durante el horario establecido y reflejado en las señalizaciones correspondientes.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 30.',
    paragraphs: ['La carga y descarga de mercancías se realizará:',
      'a) Preferentemente en el interior de los locales comerciales e industriales, siempre que reúnan las condiciones adecuadas, cuando las características de acceso de los viales lo permita.',
      'b) En las zonas reservadas para este fin, dentro del horario reflejado en la señalización correspondiente.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 31.',
    paragraphs: ['Las mercancías, los materiales o las cosas que sean objeto de la carga y descarga no se dejarán en la vía pública, sino que se trasladarán directamente del inmueble al vehículo o viceversa, salvo en casos excepcionales que deberán ser expresamente autorizados y contar con la preceptiva licencia para la ocupación de la vía pública, atendiendo en todo caso a las condiciones que determina la presente ordenanza sobre realización y balizamiento de obras en vía pública.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 32.',
    paragraphs: ['Las operaciones de carga y descarga tendrán que realizarse con las debidas precauciones para evitar ruidos innecesarios y con la obligación de dejar limpia la vía pública.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 33.',
    paragraphs: ['Las mercancías se cargarán y descargarán por el lado del vehículo más cercano a la acera, utilizando los medios necesarios y personal suficiente para agilizar la operación, procurando no dificultar la circulación, tanto de peatones como de vehículos.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 34.',
    paragraphs: ['No podrán permanecer estacionados, en las zonas habilitadas para carga y descarga, aquellos vehículos que no sean comerciales o de transporte de mercancías.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 35.',
    paragraphs: ['Las operaciones deberán efectuarse con personal suficiente para terminarlas lo más rápidamente posible, siendo el límite de tiempo autorizado para cada operación con carácter general, de 15 minutos.',
      'Excepcionalmente se podrá autorizar un período mayor de tiempo previa solicitud debidamente justificada y para una operación en concreto.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 36.',
    paragraphs: ['Para facilitar el control del tiempo máximo en la realización de cada operación de carga y descarga que se establezca en el artículo anterior, será obligatoria la exhibición de la hora de inicio de la operación, que se colocara en el parabrisas de tal forma que quede totalmente visible.',
     'Transcurrido el tiempo autorizado de 15 minutos, no podrá encontrarse estacionado en zona de carga y descarga ningún vehículo cerrado sin conductor, que no realice operaciones propias del aparcamiento. Se considerará, a todos los efectos, como no autorizado, pudiendo incluso ser retirado por grúa, con independencia de las sanciones que corresponda.'],
    tableheader: '',
    table: ''
  },
  {
    title: 'TÍTULO TERCERO: DE LAS LICENCIAS PARA ENTRADA Y SALIDA DE VEHÍCULOS (VADOS).',
    chapter: '',
    section: '',
    article: 'Artículo 37.',
    paragraphs: ['Está sujeto a la licencia municipal el acceso de vehículos al interior de inmuebles cuando sea necesario cruzar aceras u otros bienes de dominio y uso público o que suponga un uso privativo o una especial restricción del uso que corresponda a todos los ciudadanos respecto a todos los bienes o impida el estacionamiento o parada de otros vehículos en el frente por el que se realice el acceso.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 38.',
    paragraphs: ['La licencia de entrada de vehículos será concedida por la Alcaldía o Concejal-Delegado correspondiente.',
      'La solicitud de licencia de entrada de vehículos podrá ser solicitada por los propietarios y los poseedores legítimos de los inmuebles a los que se haya de permitir el acceso, así como los promotores o contratistas en el supuesto de obras.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 39. Señalización',
    paragraphs: ['1. Instalación en la puerta, fachada o construcción de un disco de prohibición de estacionamiento ajustado al modelo oficial que será facilitado por el Excmo. Ayuntamiento previo abono de las tasas correspondiente en las que constará el número de identificación otorgado por el Ayuntamiento.',
      '2. Quedará prohibido la instalación de señalización de vado que no se ajuste al modelo oficial, que será facilitado por el Ayuntamiento.',
      '3. No se permitirá en ningún caso colocar rampas ocupando la calzada. En el supuesto de que el interesado necesite realizar alguna obra de adaptación del vado deberá pedir el correspondiente permiso de obra.',
      '4. En los casos en los que se necesite una franja amarilla de longitud correspondiente a la del ancho de la entrada pintada en el bordillo de enfrente para poder realizar correctamente la maniobra, se necesitará la correspondiente autorización municipal.',
      '5. Queda prohibido realizar señalización en la vía pública sin la correspondiente autorización municipal.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 40.',
    paragraphs: ['Los desperfectos ocasionados en aceras con motivo del uso especial que comporta la entrada y salida de vehículos con ocasión del vado concedido, será responsabilidad de los titulares, quienes vendrán obligados a su reparación a requerimiento de la autoridad competente y dentro del plazo que al efecto se otorgue y cuyo incumplimiento dará lugar a la ejecución forzosa en los términos regulados en la Ley de Procedimiento Administrativo.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 41.',
    paragraphs: ['El Ayuntamiento podrá suspender por razones de tráfico, obras en vía pública u otras circunstancias extraordinarias los efectos de la licencia con carácter temporal.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 42.',
    paragraphs: ['Las licencias podrán ser revocadas por el órgano que las dictó en los siguientes casos:',
      'a) Por ser destinadas a fines distintos para los que fueron otorgadas.',
      'b) Por haber desaparecido las causas o circunstancias que dieron lugar a su otorgamiento.',
      'c) Por no abonar el precio público anual correspondiente.',
      'd) Por carecer de la señalización adecuada.',
      'e) Por causas motivadas relativas al tráfico o circunstancias de la vía pública.',
      '1. La revocación dará lugar a la obligación del titular de retirar la señalización, reparar el bordillo de la acera a su estado inicial y entregar la placa identificativa en el Ayuntamiento.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 43.',
    paragraphs: ['Cuando se solicite la baja o anulación de la licencia de entrada de vehículos que se venía disfrutando por dejar de usar el local como aparcamiento, se deberá suprimir toda la señalización indicativa de la existencia de la entrada, reparación del bordillo de la acera al estado inicial y entrega de la placa en los Servicios Municipales correspondientes. Previa comprobación del cumplimiento de estos requisitos por los Servicios Municipales correspondientes, se procederá a la concesión de la baja solicitada.'],
    tableheader: '',
    table: ''
  },
  {
    title: 'TÍTULO CUARTO: DE LAS MEDIDAS CAUTELARES',
    chapter: 'Capítulo I: Inmovilización del vehículo.',
    section: '',
    article: 'Artículo 44. Medidas provisionales.',
    paragraphs: [
      '1. El órgano competente que haya ordenado la incoación del procedimiento sancionador podrá adoptar mediante acuerdo motivado, en cualquier momento de la instrucción del procedimiento sancionador, las medidas provisionales que aseguren la eficacia de la resolución final que pudiera recaer en el procedimiento sancionador',
      '2. Los Agentes de la autoridad encargados de la vigilancia del tráfico como consecuencia de presuntas infracciones a lo dispuesto en esta ordenanza únicamente podrán adoptar la inmovilización del vehículo en los supuestos previstos en el artículo 45.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 45. Inmovilización del vehículo.',
    paragraphs: ['1. Se podrá proceder a la inmovilización del vehículo cuando:',
      'a) El vehículo carezca de autorización administrativa para circular, bien por no haberla obtenido o porque haya sido objeto de anulación, declarada su pérdida de vigencia.',
      'b) El vehículo presente deficiencias que constituyan un riesgo especialmente grave para la seguridad vial. ',
      'c) El conductor o el pasajero no hagan uso del casco de protección, en los casos en que fuera obligatorio.',
      'd) Tenga lugar la negativa a efectuar las pruebas a que se refiere el artículo 12.2 y 3 o éstas arrojen un resultado positivo.',
      'e) El vehículo carezca de seguro obligatorio.',
      'f) Se observa un exceso en los tiempos de conducción o una minoración en los tiempos de descanso que sean superiores al 50 por ciento de los tiempos establecidos reglamentariamente, salvo que el conductor sea sustituido por otro.',
      'g) Se produzca una ocupación excesiva del vehículo que suponga aumentar en un 50 por ciento el número de plazas autorizadas, excluida la del conductor.',
      'h) El vehículo supere los niveles de gases, humos y ruidos permitidos reglamentariamente según el tipo de vehículo.',
      'i) Existan indicios racionales que pongan de manifiesto la posible manipulación de los instrumentos de control.',
      'j) Se detecte que el vehículo está dotado de mecanismos o sistemas encaminados a eludir la vigilancia de los Agentes de Tráfico y de los medios de control a través de captación de imágenes.',
      'La inmovilización se levantará en el momento en que cese la causa que la motivó.',
      'En los supuestos previstos en el apartado 1, párrafos h), i) y j). La inmovilización sólo se levantará en el supuesto de que, trasladado el vehículo a un taller designado por el Agente de la autoridad, se certifique por aquél la desaparición del sistema o manipulación detectada o ya no se superen los niveles permitidos.',
      '2. En el supuesto recogido en el apartado 1, párrafo e), se estará a lo dispuesto en el texto refundido de la Ley sobre Responsabilidad Civil y Seguro en la Circulación Vial, aprobado por Real Decreto Legislativo 8/2004, de 29 de octubre.',
      '3. La inmovilización del vehículo se producirá en el lugar señalado por los Agentes de la autoridad. A estos efectos, el Agente podrá indicar al conductor del vehículo que continué circulando hasta el lugar designado.',
      '4. Los gastos que se originen como consecuencia de la inmovilización del vehículo serán por cuenta del conductor habitual o del arrendatario y, a falta de estos, del titular. Los gastos deberán ser abonados como requisito previo a levantar la medida de inmovilización, sin perjuicio del correspondiente derecho de defensa y de la posibilidad de repercutirlos sobre la persona responsable que haya dado lugar a que la Administración adopte dicha medida. En los supuestos previstos en el apartado 1, párrafos h), i) y j), los gastos de la inspección correrán por cuenta del denunciado, si se acredita la infracción.',
      '5. Si el vehículo inmovilizado fuese utilizado en régimen de arrendamiento, la inmovilización del vehículo se sustituirá por la prohibición de uso del vehículo por el infractor.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: 'Capítulo II: Retirada de vehículos de la vía pública y depósito.',
    section: '',
    article: 'Artículo 46.',
    paragraphs: ['1. La Policía Local podrá ordenar la retirada de un vehículo de la vía pública y su traslado al depósito municipal de vehículos, cuando se encuentre en algunas de las siguientes circunstancias:',
    'a) Siempre que constituya peligro, cause graves perturbaciones a la circulación de vehículos o peatones o deteriore algún servicio o patrimonio público.',
    'b) En caso de accidente que impida continuar su marcha.',
    'c) Cuando, procediendo legalmente la inmovilización del vehículo, no hubiere lugar adecuado para practicar sin obstaculizar la circulación de vehículos o personas.',
    'd) Cuando, inmovilizado un vehículo de acuerdo con lo dispuesto en el artículo 45, no cesasen las causas que motivaron la inmovilización.',
    'e) Cuando un vehículo permanezca estacionado en lugares habilitados por la Autoridad municipal como zonas de aparcamiento reservado para el uso de personas con discapacidad sin colocar el dispositivo que lo autoriza.',
    'f) Cuando un vehículo permanezca estacionado en los carriles o partes de las vías reservados exclusivamente para la circulación o para el servicio de determinados usuarios y en las zonas reservadas a la carga y descarga.',
    'g) En cualquier otro supuesto previsto en la Ley o en esta ordenanza.',
    '2. Salvo en los casos de sustracción u otras formas de utilización del vehículo en contra de la voluntad de su titular, debidamente justificadas, los gastos que se originen como consecuencia de la retirada a la que se refiere el apartado anterior, serán por cuenta del titular, del arrendatario o del conductor habitual, según el caso, que deberá abonarlos como requisito previo a la devolución del vehículo, sin perjuicio del derecho de recurso que le asiste y de la posibilidad de repercutirlos sobre el responsable del accidente, del abandono del vehículo o de la infracción que haya dado lugar a la retirada.',
    '3. La Administración deberá comunicar la retirada y depósito del vehículo al titular.',
    '4. Las bicicletas solo podrán ser retiradas y llevadas al correspondiente depósito si están abandonadas o si, estando amarradas, dificultan la circulación de vehículos o personas o dañan el mobiliario urbano.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 47.',
    paragraphs: ['Se considerará que un vehículo se encuentra estacionado originando una situación de peligro para el resto de peatones y conductores cuando se efectúe:',
      '1) En las curvas o cambios de rasantes.',
      '2) En las intersecciones de las calles y sus proximidades, produciendo una disminución de la visibilidad.',
      '3) En los lugares en los que se impida la visibilidad de las señales de circulación.',
      '4) De manera que sobresalga el vértice de la esquina de la acera, obligando al resto de conductores a variar su trayectoria, o dificultando el giro de los vehículos.',
      '5) Cuando se obstaculice la salida de emergencia de los locales destinados a espectáculos públicos y entretenimiento durante las horas de apertura de los mismos.',
      '6) En plena calzada.',
      '7) En las medianas, separadores, isletas u otros elementos de canalización del tráfico',
      '8) En zonas del pavimento señalizadas con franjas blancas.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 48.',
    paragraphs: ['Se entenderá que el vehículo se encuentra estacionado en lugar que perturba la circulación de peatones y vehículos en los siguientes casos:',
    '1) Cuando esté prohibida la parada.',
    '2) Cuando no permita el paso de otros vehículos.',
    '3) Cuando obstaculice la salida o acceso a un inmueble a través del vado.',
    '4) Cuando se impida la incorporación a la circulación de otro vehículo correctamente estacionado.',
    '5) Cuando se encuentre estacionado en doble fila sin conductor.',
    '6) Cuando invada carriles o parte de las vías reservadas exclusivamente para la circulación o para el servicio de los demás usuarios.',
    '7) Cuando se encuentre estacionado en los pasos de peatones y en los pasos para ciclistas o en sus proximidades.',
    '8) Cuando se encuentre estacionado en la acera, en islas peatonales y demás zonas reservadas a los peatones.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 49.',
    paragraphs: ['El estacionamiento obstaculizara el funcionamiento de un servicio público cuando tenga lugar.',
      '1) En las paradas reservadas a los vehículos de transporte público.',
      '2) En los carriles reservados a la circulación de vehículos de transporte público.',
      '3) En las zonas reservadas para la colocación de contenedores de residuos sólidos urbanos u otro tipo de mobiliario urbano.',
      '4) En las salidas reservadas a servicios de urgencia y seguridad.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 50.',
    paragraphs: ['Se entenderá que el estacionamiento original pérdida o deterioro del patrimonio público cuando se efectúe en jardines, setos, zonas arboladas, fuentes y otras partes de la vía destinadas al ornato y decoro de la ciudad.'],
    tableheader: '', 
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 51. Tratamiento residual del vehículo.',
    paragraphs: ['1. La Administración competente en materia de gestión del tráfico podrá ordenar el traslado del vehículo a un centro autorizado de tratamiento de vehículos para su posterior destrucción y descontaminación:',
      'a) Cuando hayan transcurrido más de dos meses desde que el vehículo fuera inmovilizado o retirado de la vía pública y depositado por la Administración y su titular no hubiera formulado alegaciones.',
      'b) Cuando permanezca estacionado por un período superior a un mes en el mismo lugar y presente desperfectos que hagan imposible su desplazamiento por sus propios medios o le falten placas de matrícula.',
      'c) Cuando recogido un vehículo como consecuencia de avería o accidente del mismo en un recinto privado su titular no lo hubiese retirado en el plazo de dos meses.',
      'Con anterioridad a la orden de traslado del vehículo, la Administración requerirá al titular del mismo advirtiéndole que, de no proceder a su retirada en el plazo de un mes, se procederá a su traslado al centro autorizado de tratamiento.',
      '2. En el supuesto previsto en el apartado 1, párrafo c), el propietario o responsable del lugar o recinto deberá solicitar de la Jefatura Provincial de Tráfico autorización para el tratamiento residual del vehículo. A estos efectos deberá aportar la documentación que acredite haber solicitado al titular del vehículo la retirada de su recinto.',
      '3. En aquellos casos en que se estime conveniente, la Jefatura Provincial de Tráfico, los órganos competentes de las Comunidades Autónomas con competencias en materia de tráfico y el Alcalde o autoridad correspondiente por delegación, podrán acordar la sustitución de la destrucción del vehículo por su adjudicación a los servicios de vigilancia y control de tráfico, respectivamente en cada ámbito.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 52.',
    paragraphs: ['Podrán, asimismo, ser retirados de la vía pública aquellos vehículos que ocupen o invadan zonas especialmente reservadas por la Autoridad municipal, de modo eventual o permanente, a la ocupación por otros usuarios o realización de determinadas actividades. Ello se producirá cuando tenga lugar:',
      '1) En zona de carga y descarga.',
      '2) En zona de paso de minusválidos.',
      '3) En zona de aparcamiento especial para automóviles de minusválidos.',
      '4) En zona de parada ambulancias.',
      '5) En zonas de parada de bus.',
      '6) En zonas de parada vehículos oficiales.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 53.',
    paragraphs: ['1. La Autoridad municipal podrá retirar, aún cuando se encuentren correctamente estacionados, los vehículos de la vía pública en las situaciones siguientes:',
      'A) Cuando estén aparcados en lugares en los que esté previsto la realización de un acto público debidamente autorizado y señalizado con antelación.',
      'B) Cuando estén estacionados en zonas donde se prevea la realización de labores de limpieza, reparación o señalización de la vía pública y esté señalizado con antelación.',
      'C) En casos de emergencia',
      '2. El Ayuntamiento deberá advertir con la antelación suficiente las referidas circunstancias mediante la colocación de los avisos necesarios.',
      '3. Una vez retirados, los vehículos serán conducidos al lugar de depósito autorizado.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 54.',
    paragraphs: ['Salvo las excepciones legalmente previstas, los gastos que se originen como consecuencia de la retirada del vehículo y su estancia en el depósito municipal serán por cuenta del titular, que tendrá que pagarlos o garantizar el pago como requisito previo a la devolución del vehículo, sin perjuicio del derecho de interposición de recurso que le asiste. Por otro lado, la retirada del vehículo sólo podrá hacerla el titular o persona autorizada.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 55.',
    paragraphs: ['La retirada del vehículo se suspenderá inmediatamente, si el conductor comparece antes que la grúa haya iniciado su marcha con el vehículo enganchado o cargado y toma las medidas necesarias para hacer cesar la situación irregular en la que se encontraba y abona la tasa de grúa que corresponda. La tasa se devengará y nacerá la obligación de contribuir cuando se inicie la prestación del servicio. Se entenderá iniciado el servicio cuando el camión-grúa engancha al vehículo.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 56.',
    paragraphs: ['Serán retirados inmediatamente de la vía pública por la Autoridad municipal todos aquellos objetos que se encuentren en la misma y no haya persona alguna que se haga responsable de los mismos, los cuales serán trasladados al depósito municipal.',
      'De igual forma se actuará en el caso de que el objeto entorpezca el tráfico de peatones o de vehículos, así como si su propietario se negara a retirarlo de inmediato.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 57.',
    paragraphs: ['No serán devueltos a su propietario ninguno de los vehículos que hubieran sido objeto de recogida, mientras no se haya hecho efectivo el importe de las tasas correspondientes, cuyo pago, no excluye de las sanciones o multas que fuesen procedentes por infracción de normas de circulación o policía urbana.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 58.',
    paragraphs: ['La salida de toda clase de vehículos ingresados en el depósito, deberá ser autorizada por quien dispuso su ingreso o persona habilitada para ello, y únicamente podrán ser entregados a sus titulares o personas autorizadas, las cuales harán efectivo, en dicho momento el importe de la liquidación.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: 'Capítulo III: De los excesos de ruido en vehículos a motor.',
    section: '',
    article: 'Artículo 59.',
    paragraphs: ['Todo vehículo de tracción mecánica deberá tener su motor en buenas condiciones de funcionamiento, así como la transmisión, carrocería y demás órganos del mismo que produzcan ruidos y vibraciones y especialmente el dispositivo silenciador de los gases de escape, con el fin de que el nivel sonoro emitido por el vehículo al circular o no con el motor en marcha, no exceda de los límites que establece la presente ordenanza.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 60.',
    paragraphs: ['1. Se prohíbe la circulación de vehículos a motor con el llamado “escape libre”, o con los silenciadores no eficaces, incompletos, inadecuados, deteriorados y/o con tubos resonadores.',
      '2. Igualmente, se prohíbe la circulación de dicha clase de vehículos cuando, por exceso de carga, produzcan ruidos superiores a los fijados por esta ordenanza.',
      '3. Del mismo modo, se prohíbe forzar las marchas de los vehículos a motor produciendo ruidos molestos, como aceleraciones innecesarias, forzar el motor en pendientes y actuaciones similares.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 61.',
    paragraphs: ['Queda prohibido el uso de bocinas, o cualquier otra señal acústica, dentro del casco urbano, incluso en el supuesto de cualquier dificultad o imposibilidad de tránsito que se produzca en la calzada de las vías públicas. Sólo será justificable la utilización instantánea de avisadores acústicos en casos excepcionales de peligro inmediato que no pueda evitarse por otros sistemas, o bien cuando se trate de servicios públicos de urgencia (Policía contra incendios y Asistencia Sanitaria) o de servicios privados para el auxilio urgente de personal.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 62.',
    paragraphs: ['1. Los límites máximos admisibles para los ruidos emitidos por los distintos vehículos a motor en circulación, no excederán en más de 5 dBA de los establecidos por los reglamentos números 41 y 51 anejos al Acuerdo de Ginebra de 20 de marzo de 1958, para homologación de vehículos nuevos y Decretos que los desarrollan (B.O.E. 18-05-82 y 22-06-83) y por el Decreto de 25 de mayo de 1972, sobre homologación de vehículos en lo que se refiere al ruido y que vienen recogidos en la tabla del anexo III.',
      '2. En los casos en que se afecte notoriamente a la tranquilidad de la población, se podrán señalizar zonas o vías en las que algunas clases de vehículos a motor no puedan circular a determinadas horas de la noche.',
      '3. Se prohíbe producir ruidos innecesarios debidos al mal uso o conducción violenta del vehículo, aunque estén dentro de los límites máximos admisibles.',
      '4. Las medidas de ruido de los vehículos se realizarán con un sonómetro en perfecto estado de calibración, a 1,5 metros de la fuente emisora del ruido y a 1,2 metros del suelo. El micrófono será protegido del viento por pantallas de cubrimiento.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 63.',
    paragraphs: ['1. A los efectos de comprobación de los ruidos emitidos por los vehículos a motor, los propietarios, titulares o usuarios de los mismos deberán facilitar las mediciones oportunas a los Técnicos correspondientes, las cuales se efectuarán conforme a las normas establecidas en el artículo 60 de esta ordenanza.',
      '2. Los Agentes de la Policía Local detendrán a todo vehículo que, a su juicio, rebase los límites sonoros autorizados y actuarán del siguiente modo:',
      'a) Practicarán en el acto de una inspección del vehículo que registre un nivel de evaluación superior al permitido y podrán proceder a la inmovilización inmediata del mismo, trasladándolo al parque o depósito municipal correspondiente.',
      'b) Una vez allí, estará a disposición del titular o propietario para que se persone con un mecánico autorizado, que, a su costa, pueda en dicho lugar practicar la reparación o acoplamiento anotados y si así fuese, pondrá aquél a disposición de su titular o propietario, que lo podrá retirar una vez firmada la oportuna acta de entrega.',
      'd) Si, transcurrido el plazo correspondiente, el vehículo no fuese reparado y, en su caso, retirado una vez efectuada la reparación o acoplamiento citados, se actuará con el vehículo conforme a lo que determina la legislación vigente.',
      '3. Independientemente de las actuaciones señaladas en el apartado anterior, la Policía Local formulará la oportuna denuncia al propietario o usuario del vehículo que se tramitará de acuerdo con lo establecido en la legislación sancionadora vigente, a fin de que se le pueda imponer al mismo la sanción que, en su caso, corresponda de las contempladas en el anexo I.'
    ],
    tableheader: '',
    table: ''
  },
  {
    title: 'TÍTULO QUINTO: DE LA RESPONSABILIDAD.',
    chapter: '',
    section: '',
    article: 'Artículo 64. Personas responsables.',
    paragraphs: ['1. La responsabilidad por las infracciones a lo dispuesto en la Ley 18/2009 y ordenanza municipal de tráfico recaerá directamente en el autor del hecho en que consista la infracción. No obstante:',
      'a) El conductor de una motocicleta, de un ciclomotor, de un vehículo de tres o cuatro ruedas no carrozados o de cualquier otro vehículo para el que se exija el uso de casco por conductor y pasajero será responsable por la no utilización del casco de protección por el pasajero, así como por transportar pasajeros que no cuenten con la edad mínima exigida.',
      'Asimismo, el conductor del vehículo será responsable por la no utilización de los sistemas de retención infantil, con la excepción prevista en el artículo 8.3 cuando se trate de conductores profesionales.',
      'b) Cuando la autoría de los hechos cometidos corresponda a un menor de dieciocho años, responderán solidariamente con el de sus padres, tutores, acogedores y guardadores legales o de hecho, por este orden, en razón al incumplimiento de la obligación impuesta a éstos que conlleva un deber de prevenir la infracción administrativa que se impute a los menores.',
      'La responsabilidad solidaria quedará referida estrictamente a la pecuniaria derivada de la multa impuesta.',
      'c) En los supuestos en que no tenga lugar la detención del vehículo y éste tuviese designado un conductor habitual, la responsabilidad por la infracción recaerá en éste, salvo en el supuesto de que acreditase que era otro el conductor o la sustracción del vehículo.',
      'd) En los supuestos en los que no tenga lugar la detención del vehículo y éste no tuviese designado un conductor habitual, será responsable el conductor identificado por el titular o el arrendatario a largo plazo, de acuerdo con las obligaciones impuestas en el artículo 9 bis de la Ley 18/2009. ',
      'e) En las empresas de arrendamiento de vehículos a corto plazo será responsable el arrendatario del vehículo. En caso de que éste manifestara no ser el conductor, o fuese persona jurídica, le corresponderán las obligaciones que para el titular establece el artículo 9 bis de la Ley 18/2009. La misma responsabilidad alcanzará a los talleres mecánicos o establecimientos de compraventa de vehículos por las infracciones cometidas con los vehículos mientras se encuentren allí depositados.',
      'f) El titular, o el arrendatario a largo plazo, en el supuesto de que constase en el Registro de Vehículos, será en todo caso responsable de las infracciones relativas a la documentación del vehículo, a los reconocimientos periódicos y a su estado de conservación, cuando las deficiencias afecten a las condiciones de seguridad del vehículo.',
      'g) El titular o el arrendatario, en el supuesto en que constase en el Registro de Vehículos, será responsable de las infracciones por estacionamiento, salvo en los supuestos en que el vehículo tuviese designado un conductor habitual o se indique un conductor responsable del hecho.',
      '2. Lo dispuesto en el presente artículo se entenderá a los únicos efectos la determinación de la responsabilidad en el ámbito administrativo, por las infracciones tipificadas en la Ley 18/2009 y ordenanza municipal de tráfico.'],
    table: ''
  },
  {
    title: 'TÍTULO SEXTO: DEL PROCEDIMIENTO SANCIONADOR.',
    chapter: '',
    section: '',
    article: 'Artículo 65.',
    paragraphs: ['Será competencia de la Alcaldía-Presidencia y por su delegación del Concejal/a en quien pudiera delegar, la imposición de las sanciones por infracción a los preceptos contenidos en la presente ordenanza.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 66.',
    paragraphs: ['Las denuncias de los Agentes de la Policía Local, cuando ejerzan funciones de vigilancia y control de circulación vial, tendrán valor probatorio, sin perjuicio del deber de aquéllos de aportar todas las pruebas que sean posibles sobre los hechos de la denuncia y sin perjuicio, asimismo, de las pruebas que en su defensa puedan aportar o designar los denunciados. Asimismo, cualquier persona podrá formular denuncia de las infracciones a los preceptos de la presente ordenanza que pudiera observar.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 67.',
    paragraphs: ['1. Incoación.',
      'a) El procedimiento sancionador se incoará de oficio por la Autoridad competente que tenga noticia de los hechos que puedan constituir infracciones tipificadas en esta ordenanza, por iniciativa propia o mediante denuncia de los Agentes encargados del servicio de vigilancia de tráfico y control de la seguridad vial o de cualquier persona que tenga conocimiento de los hechos.',
      'b) No obstante, la denuncia formulada por los Agentes de la autoridad encargados del servicio de vigilancia del tráfico y notificada en el acto al denunciado, constituye el acto de iniciación del procedimiento sancionador, a todos los efectos.',
      '2. Denuncias.',
      'a) Los Agentes de la Autoridad encargados de la vigilancia del tráfico deberán denunciar las infracciones que observen cuando ejerzan funciones de vigilancia y control de la seguridad vial.',
      'b) En las denuncias por hechos de circulación deberá constar, en todo caso:',
      '- La identificación del vehículo con el que se hubiese contenido la supuesta infracción.',
      '- La identidad del denunciado, si fuere conocida.',
      '- Una descripción sucinta del hecho, con expresión del lugar o tramo, fecha y hora.',
      '- El nombre y domicilio del denunciante o, si fuera un Agente de la Autoridad, su número de identificación profesional.',
      '3. En las denuncias que los Agentes de la Autoridad notifiquen en el acto al denunciado deberá constar, además, a efectos de lo dispuesto en el artículo 73.2 de la Ley 18/2009:',
      'a) La infracción presuntamente cometida, la sanción que pudiera corresponder y el número de puntos cuya pérdida lleve aparejada la infracción, conforme a lo dispuesto en la Ley y ordenanza municipal anexos I y II.',
      'b) El órgano competente para imponer la sanción y la norma que le atribuye tal competencia.',
      'c) Si el denunciado procede al abono de la sanción en el acto deberá señalarse, además, la cantidad abonada y las consecuencias derivadas del pago de la sanción previstas en el artículo 80 de la Ley 18/2009.',
      'd) En el caso de que no se proceda al abono en el acto de la sanción, deberá indicarse que dicha denuncia inicia el procedimiento sancionador y que dispone de un plazo de veinte días naturales para efectuar el pago, con la reducción y las consecuencias establecidas en el artículo 80, o para formular alegaciones y proponer las pruebas que estime conveniente. En este caso, se indicarán los lugares, oficinas o dependencias donde puede presentarlas.',
      'e) Si en el plazo señalado en el párrafo anterior no se hubiesen formulado alegaciones o no se hubiese abonado la multa, se indicará que el procedimiento se tendrá por concluido el día siguiente de la finalización de dicho plazo, conforme se establece en el artículo 81.5 de la Ley 18/2009.',
      'f) El domicilio que, en su caso, indique el interesado a efecto de notificaciones. Este domicilio no se tendrá en cuenta si el denunciado tuviese asignada una dirección electrónica vial, ello sin perjuicio de lo previsto en el artículo 28.4 de la Ley 11/2007, de 22 de junio.',
      '4. En las denuncias por hechos ajenos a la circulación se especificarán todos los datos necesarios para su descripción.',
      '5. Valor probatorio de las denuncias de los Agentes de la Autoridad.',
      'Las denuncias formuladas por los Agentes de la Autoridad encargados de la vigilancia del tráfico darán fe, salvo prueba en contrario, de los hechos denunciados y de la entidad de quienes los hubieran cometido, así como, en su caso, de la notificación de la denuncia, sin perjuicio del deber de aquéllos de aportar todos los elementos probatorios que sean posibles sobre el hecho denunciado.',
      '6. Notificación de la denuncia.',
      '6.1. Las denuncias se notificarán en el acto denunciado.',
      '6.2. No obstante, la notificación podrá efectuarse en un momento posterior siempre que se dé alguna de las siguientes circunstancias:',
      'a) Que la denuncia se formule en circunstancias en que la detención del vehículo pueda originar un riesgo para la circulación. En este caso, el Agente deberá indicar los motivos concretos que la impiden.',
      'b) Que la denuncia se formule estando el vehículo estacionado, cuando el conductor no esté presente.',
      'c) Que la autoridad sancionadora haya tenido conocimiento de los hechos a través de medios de captación y reproducción de imágenes que permitan la identificación del vehículo.',
      'd) Que el agente denunciante se encuentre realizando labores de vigilancia y control de tráfico y carezca de medios para proceder a la persecución del vehículo.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 68.',
    paragraphs: ['En las denuncias de carácter obligatorio, el agente denunciante extenderá la denuncia por triplicado, entregando un ejemplar al presunto infractor, remitiendo otro ejemplar el órgano instructor del expediente y conservando el tercero en su poder.',
      'El boletín de denuncia será firmado por el agente denunciante y el denunciado, sin que la firma de este último suponga aceptación de los hechos que se le imputan.',
      'En el supuesto de que el denunciado se negase a firmar, el agente denunciante hará constar esta circunstancia en el boletín de denuncia. Será causa legal que justifique la notificación de la denuncia en momento posterior, el hecho de formularse la misma en momentos de gran intensidad de circulación o concurriendo factores meteorológicos adversos, obras u otras circunstancias en que la detención del vehículo también pueda originar un riesgo concreto.',
      'Asimismo, la notificación de la denuncia podrá efectuarse en un momento posterior cuando la autoridad haya tenido conocimiento de los hechos a través de medios de captación y reproducción de imágenes que permitan la identificación del vehículo.',
      'Procederá también la notificación de la denuncia en momento posterior a su formulación en los casos de vehículos estacionados cuando el conductor no esté presente.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 69.',
    paragraphs: ['Las denuncias de carácter voluntario podrán formularse ante el Agente de la Policía Local encargado de la vigilancia o regulación del tráfico que se encuentre más próximo al lugar de los hechos.',
      'Cuando la denuncia se formulase ante los Agentes de la Policía Local, éstos extenderán el correspondiente boletín de denuncia en el que harán constar si pudieron comprobar personalmente la presunta infracción denunciada, así como si pudieron notificarla.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 70.',
    paragraphs: ['Recibida la denuncia en el Ayuntamiento, el órgano instructor examinará y comprobará el cumplimiento de los requisitos legales establecidos, impulsando, en su caso, su ulterior tramitación.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 71.',
    paragraphs: ['Como norma general, las denuncias formuladas por los Agentes de la Policía Local, se notificarán en el acto a los denunciados, haciendo constar en las mismas los datos a que se refiere el artículo 67 de la presente ordenanza y el derecho que asiste al denunciado de formular, en el plazo de quince días, las alegaciones que considere oportunas en su defensa. Por razones justificadas, que deberán constar en el propio boletín de denuncia podrán notificarse las mismas con posterioridad.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 72.',
    paragraphs: ['A efecto de notificaciones, se considerará domicilio del conductor y del titular del vehículo aquel que expresamente hubieren indicado y, en su defecto, en el que figure en el correspondiente Registro de conductores e infractores y de propietarios de vehículos respectivamente. Las notificaciones de las denuncias que no se entreguen en el acto se cursarán al domicilio requerido en el párrafo anterior, con sujeción a lo establecido en la Ley de Régimen Jurídico de las Administraciones Públicas y del Procedimiento Administrativo Común.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 73.',
    paragraphs: ['Los expedientes sancionadores serán instruidos por los órganos competentes del Ayuntamiento, quienes dispondrán la notificación de las denuncias si no lo hubiera hecho el agente denunciante, concediendo un plazo de quince días al presunto infractor para que formule alegaciones y proponga las prácticas de las pruebas de las que intente valerse. De las alegaciones del denunciado se dará traslado al denunciante para que emita informe en el plazo de quince días, salvo que no se aporten datos nuevos o distintos de los inicialmente constatados por el denunciante.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 74.',
    paragraphs: ['Cuando fuera preciso para la averiguación y calificación de los hechos, o para la de terminación de las posibles responsabilidades, el instructor acordará la apertura de un período de prueba por un plazo no inferior a diez días ni superior a treinta.',
    'Sólo podrán rechazarse, mediante resolución motivada, las pruebas propuestas por los interesados que resulten improcedentes. Si a petición del interesado deben practicarse pruebas que impliquen gastos que no deba soportar la Administración, ésta podría exigir el anticipo de los mismos a reserva de la liquidación definitiva que se llevará a efecto una vez practicada la prueba, uniendo los comprobantes que acrediten la realidad y cuantía de los gastos efectuados.',
    'Concluida la instrucción del expediente y formulada propuesta de resolución por el instructor, se dará traslado de la misma al interesado, quien, de un plazo no inferior a diez días ni superior a quince y con vista del expediente si así lo desea, podrá alegar lo que estime pertinente y presentar los documentos que estime oportunos.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 75.',
    paragraphs: ['La resolución del expediente deberá ser dictada en el plazo de un año contado desde que se inició el procedimiento y decidirá todas las cuestiones planteadas por los interesados y aquellas otras derivadas del procedimiento.',
      'La resolución no podrá tener en cuenta hechos distintos de los determinados en la fase de instrucción del procedimiento, sin perjuicio de la diferente valoración jurídica.',
      'Si no hubiera recaído resolución sancionadora trascurrido un año desde la iniciación del procedimiento a que se refiere el párrafo primero del presente articulo, se producirá la caducidad del procedimiento y se procederá al archivo de las actuaciones, a solicitud del interesado o de oficio por el órgano competente para dictar la resolución, excepto en los casos en que el procedimiento se hubiera paralizado por causa imputable a los interesados o se hubiera suspendido por las actuaciones judicialesa que se refiere el artículo 2 apartado 1 del Reglamento de Procedimiento Sancionador en Materia de Tráfico, Circulación de Vehículos a Motor y Seguridad Vial.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 76.',
    paragraphs: ['En el supuesto de que exista delegación de competencias, contra las resoluciones del Concejal/a Delegado/a, podrá interponerse recurso de alzada en el plazo de un mes, ante el Alcalde-Presidente. Las resoluciones que pongan fin a la vía administrativa serán recurribles en la Jurisdicción Contencioso-Administrativa.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 77.',
    paragraphs: ['El plazo de prescripción de las infracciones previstas en esta Ley será el de tres meses para las infracciones leves, seis meses para las infracciones graves y muy graves.',
      'El plazo de prescripción se cuenta a partir del día en que los hechos se hubieren cometido. La prescripción se interrumpe por cualquier actuación administrativa de la que tenga conocimiento el denunciado o esté encaminada a averiguar su identidad o domicilio y se practiquen con proyección externa a la dependencia en que se origine.',
      'También se interrumpe la prescripción por la notificación efectuada de acuerdo con lo establecido en el artículo 78 de la Ley. La prescripción se reanuda si el procedimiento se paraliza durante más de un mes por causa no imputable al denunciado.',
      'Si no hubiere recaído resolución sancionadora transcurrido un año desde la iniciación del procedimiento, se producirá la caducidad de éste y se procederá al archivo de las actuaciones, a solicitud de cualquier interesado o de oficio por el órgano competente para dictar la resolución. Cuando la paralización del procedimiento se hubiere producido a causa del conocimiento de los hechos por la Jurisdicción Penal y cuando hubiere intervenido otra autoridad competente para imponer la sanción de multa y que haya de trasladar el expediente para substanciar la suspensión de la autorización administrativa para conducir a la Administración General del Estado, el plazo de caducidad se suspenderá y reanudará, por el tiempo que reste hasta un año, una vez haya adquirido firmeza la resolución judicial o administrativa correspondiente.',
      'El plazo de prescripción de las sanciones será de un año, computado desde el día siguiente a aquél en que se adquiera firmeza la resolución por la que se imponga la correspondiente sanción.',
      'Interrumpirá la prescripción la iniciación, con conocimiento del interesado, del procedimiento de ejecución, volviendo a transcurrir el plazo si aquél está paralizado durante más de un mes por causa no imputable al infractor.'],
    tableheader: '', 
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 78.',
    paragraphs: ['Las infracciones que pudieran cometerse contra lo dispuesto en la presente ordenanza serán sancionadas con multa, cuya cuantía figura en el cuadro del anexo I que se acompaña a este texto.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 79.',
    paragraphs: ['Sobre el pago de las multas (excepto el servicio de grúa), se establece que el plazo para el pago del abono de una sanción con la reducción del 50% sobre la cuantía correspondiente que se haya consignado correctamente en el boletín de denuncia por el Agente o, en su defecto, en la notificación posterior de dicha denuncia por el instructor del expediente, será de quince días desde la notificación.'],
    tableheader: '',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Artículo 80.',
    paragraphs: ['Las multas deberán hacerse efectivas a los órganos de recaudación de la Administración gestora, directamente o a través de entidades bancarias o de crédito, concertadas dentro de los quince días hábiles siguientes a la fecha en que sean definitivas en la vía administrativa voluntaria. Transcurrido dicho plazo sin haberse efectuado el ingreso su exacción se llevará a cabo por el procedimiento de apremio, siendo título ejecutivo suficiente la certificación de descubierto expedido por el órgano competente del Ayuntamiento.'],
    tableheader: '',
    table: ''
  },
  {
    title: 'ANEXO I',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Usuarios:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'OMT', col2: '4', col3: '1', col4: '', col5: 'L', col6: 'Comportarse de forma que entorpezca indebidamente la circulación.', col7: '48' },
      { col1: 'OMT', col2: '4', col3: '2', col4: '', col5: 'L', col6: 'Llevar abiertas las puertas del vehículo que implique riesgo.', col7: '48' },
      { col1: 'OMT', col2: '4', col3: '3', col4: '', col5: 'L', col6: 'Las bicicletas estarán dotadas de los elementos reflectantes debidamente homologados.', col7: '48' },
    ]},
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Conductores:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '3', col3: '1', col4: 'A', col5: 'G', col6: 'Conducir sin la diligencia, precaución y no distracción necesarias para evitar todo daño propio o ajeno.', col7: '200' },
      { col1: 'RGC', col2: '3', col3: '1', col4: 'B', col5: 'MG', col6: 'Conducir de forma temeraria. (Describir con detalle la conducta merecedora del calificativo de temeraria)', col7: '500' },
      { col1: 'RGC', col2: '3', col3: '1', col4: 'C', col5: 'G', col6: 'Conducir de modo negligente. (Detallar de modo sucinto y claro, la conducta y el riesgo que implica)', col7: '200' },
    ]},
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Obras y actividades prohibidas:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'OMT', col2: '5', col3: '1', col4: '', col5: 'MG', col6: 'Realizar obras en la vía sin autorización y sin comunicación a la autoridad responsable o sin observar las instrucciones dadas por ésta.', col7: '500' },
      { col1: 'OMT', col2: '5', col3: '2', col4: '', col5: 'G', col6: 'Realizar instalaciones en la vía sin previa autorización.', col7: '200' },
      { col1: 'OMT', col2: '5', col3: '3', col4: '', col5: 'L', col6: 'Emitir ruidos en la vía rebasando los límites reglamentarios.', col7: '60' },
      { col1: 'OMT', col2: '5', col3: '2', col4: '', col5: 'L', col6: 'Emitir gases en la vía, rebasando los límites reglamentarios.', col7: '48' },
      { col1: 'OMT', col2: '6', col3: '', col4: '', col5: 'L', col6: 'Arrojar, depositar o abandonar sobre la vía objetos o materias que puedan entorpecer la circulación.', col7: '48' },

    ]},
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Señalización de obstáculos y peligros:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '5', col3: '1', col4: '', col5: 'L', col6: 'No hacer desaparecer lo antes posible un obstáculo o peligro en la vía por quien lo ha creado. (Deberá indicarse el obstáculo o peligro)', col7: '80' },
      { col1: 'RGC', col2: '5', col3: '3', col4: '', col5: 'L', col6: 'No señalizar de forma, eficaz un obstáculo o peligro en la vía por quien lo ha creado. (Indicar señalización empleada)', col7: '80' },
      { col1: 'RGC', col2: '5', col3: '5', col4: '', col5: 'L', col6: 'Incumplir las órdenes o instrucciones de los agentes en las actuaciones de emergencia en orden a producir la menor afección a tráfico.', col7: '80' },
      { col1: 'RGC', col2: '5', col3: '6', col4: '', col5: 'L', col6: 'Detener, parar o estacionar los vehículos destinados a actuaciones de emergencia creando un nuevo peligro u obstáculo a la circulación. (Deberá especificarse el peligro u obstáculo)', col7: '80' },
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Prevención de incendios:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '6', col3: '1', col4: 'A', col5: 'G', col6: 'Arrojar a la vía o en sus inmediaciones objetos que puedan producir incendios. (Deberá detallarse el objeto arrojado)', col7: '200' },
      { col1: 'RGC', col2: '6', col3: '1', col4: 'B', col5: 'G', col6: 'Arrojar en la vía o en sus inmediaciones objetos que puedan producir accidentes de circulación. (Deberá detallarse el peligro creado)', col7: '200' },
      
    ]},
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Transporte de personas:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '9', col3: '1', col4: '', col5: 'L', col6: 'Transportar en el vehículo reseñado un número superior al de plazas autorizadas, sin superar el 50% más, excluido el conductor.', col7: '80' },
      { col1: 'RGC', col2: '9', col3: '3', col4: '', col5: 'G', col6: 'Conducir un vehículo ocupado por un número de personas que exceda del 50% del número de plazas autorizadas excluido el conductor.', col7: '200' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Emplazamiento y acondicionamiento de las personas:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '10', col3: '1', col4: '', col5: 'L', col6: 'Transportar personas en un vehículo en emplazamiento distinto al destinado y acondicionado para ellas.', col7: '80' },
      { col1: 'RGC', col2: '10', col3: '2', col4: '', col5: 'L', col6: 'Viajar personas en un vehículo destinado a transporte de mercancías o cosas en el lugar reservado a la carga.', col7: '80' },
      { col1: 'RGC', col2: '10', col3: '3', col4: '', col5: 'L', col6: 'No llevar instalada la protección reglamentaria de la carga en el vehículo reseñado.', col7: '200' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Normas relativas a ciclos, ciclomotores y motocicletas:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '12', col3: '1', col4: '', col5: 'L', col6: 'Circular dos personas o más en un ciclo construido para una sola. (Se exceptúa cuando el conductor sea mayor de edad y el transportado un menor de siete años y lo haga en un asiento adicional y homologado)', col7: '80' },
      { col1: 'RGC', col2: '12', col3: '2', col4: 'A', col5: 'L', col6: 'Circular con un pasajero, en un ciclomotor o motocicleta cuando no esté previsto en la licencia o permiso de circulación. (Excepto el ocupante del sidecar en las motocicletas que dispongan de él)', col7: '80' },
      { col1: 'RGC', col2: '12', col3: '2', col4: 'B', col5: 'L', col6: 'Circular con mayor de 12 años, en ciclomotor o motocicleta sin cumplir las condiciones reglamentarias. (deberá indicarse las condiciones incumplidas)', col7: '80' },
      { col1: 'RGC', col2: '12', col3: '3', col4: 'A', col5: 'G', col6: 'Circular con mayor de 7 años, en ciclomotores o motocicleta sin cumplir las condiciones reglamentarias. (deberá indicarse las condiciones incumplidas)', col7: '200' },
      { col1: 'RGC', col2: '12', col3: '3', col4: 'B', col5: 'G', col6: 'Circular con un menor de 7 años, en ciclomotor o motocicleta.', col7: '200' },
      { col1: 'RGC', col2: '12', col3: '4', col4: 'A', col5: 'L', col6: 'Arrastrar las motocicletas, los vehículos de tres ruedas, los ciclomotores, ciclos y bicicletas un remolque o semirremolque superando el 50% de la masa en vacío del vehículo tractor.', col7: '80' },
      { col1: 'RGC', col2: '12', col3: '4', col4: 'B', col5: 'L', col6: 'Arrastrar las motocicletas, vehículos de tres ruedas, los ciclomotores, ciclos y bicicletas un remolque o semirremolque, sin cumplir las condiciones reglamentarias. (deberá especificar las condiciones incumplidas)', col7: '80' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Otras obligaciones del conductor:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '18', col3: '1', col4: 'A', col5: 'L', col6: 'Conducir un vehículo sin mantener su propia libertad de movimientos. (especificar circunstancias)', col7: '80' },
      { col1: 'RGC', col2: '18', col3: '1', col4: 'B', col5: 'L', col6: 'Conducir un vehículo sin mantener el campo de visión necesario. (especificar obstáculos de visión)', col7: '80' },
      { col1: 'RGC', col2: '18', col3: '1', col4: 'C', col5: 'L', col6: 'Conducir un vehículo sin mantener la atención permanente a la conducción.', col7: '80' },
      { col1: 'RGC', col2: '18', col3: '1', col4: 'D', col5: 'L', col6: 'Conducir un vehículo sin cuidar de la adecuada colocación de los objetos o animales transportados.', col7: '80' },
      { col1: 'RGC', col2: '18', col3: '1', col4: 'E', col5: 'L', col6: 'Conducir un vehículo mantener la posición adecuada y que la mantengan el resto de los pasajeros. (concretar hechos)', col7: '80' },
      { col1: 'RGC', col2: '18', col3: '1', col4: 'F', col5: 'G', col6: 'Circular con un vehículo utilizando el conductor dispositivos visuales incompatibles con la atención permanente a la circulación. (deberá especificarse el dispositivo utilizado)', col7: '200' },
      { col1: 'RGC', col2: '18', col3: '2', col4: 'A', col5: 'G', col6: 'Conducir utilizando cascos o auriculares conectados a aparatos receptores o reproductores de sonido', col7: '200' },
      { col1: 'RGC', col2: '18', col3: '2', col4: 'B', col5: 'G', col6: 'Conducir utilizando manualmente el teléfono móvil o cualquier otro dispositivo. (deberá especificarse el dispositivo utilizado)', col7: '200' },
      { col1: 'OMT', col2: '8', col3: '1', col4: '', col5: 'G', col6: 'Conducir usando cascos o auriculares conectados a aparato receptor o reproductor de sonido.', col7: '200' },
      { col1: 'OMT', col2: '8', col3: '1', col4: '', col5: 'G', col6: 'Conducir un vehículo utilizando un teléfono móvil empleando las manos, cascos, auriculares o instrumento similar.', col7: '200' },
      { col1: 'OMT', col2: '8', col3: '2', col4: '', col5: 'G', col6: 'Circular sin utilizar el cinturón de seguridad, cascos y demás elementos de protección y dispositivos de seguridad.', col7: '200' },
      { col1: 'OMT', col2: '8', col3: '4', col4: '', col5: 'G', col6: 'Circular sin utilizar los cascos de protección en vías urbanas, interurbanas y travesías los ocupantes de bicicletas y ciclos en general.', col7: '200' },
      { col1: 'OMT', col2: '8', col3: '5', col4: '', col5: 'G', col6: 'Circular con menores de doce años situados en los asientos delanteros del vehículo salvo que utilicen dispositivos homologados al efecto, o como pasajeros de ciclomotores o motocicletas con o sin sidecar, por cualquier clase de vía.', col7: '200' },
      { col1: 'OMT', col2: '8', col3: '6', col4: '', col5: 'MG', col6: 'Instalar o llevar en los vehículos inhibidores de radares o cinemómetros u otros instrumentos para eludir o interferir en el correcto funcionamiento de los sistemas de vigilancia del tráfico, así como mecanismos de detección de radares o cinemómetro.', col7: '6000' },
      { col1: 'OMT', col2: '8', col3: '7', col4: '', col5: 'L', col6: 'Hacer o emitir señales a otros conductores con la finalidad de eludir la vigilancia de los agentes de tráfico.', col7: '80' },
      { col1: 'OMT', col2: '60', col3: '3', col4: '', col5: 'L', col6: 'Forzar las marchas del vehículo a motor produciendo ruidos molestos, así como aceleraciones innecesarias.', col7: '60' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Visibilidad en el vehículo',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '19', col3: '1', col4: 'A', col5: 'G', col6: 'Conducir un vehículo cuya superficie acristalada no permita a su conductor la visibilidad diáfana de la vía por la colocación de láminas, adhesivos, cortinillas u otros elementos no autorizados.', col7: '200' },
      { col1: 'RGC', col2: '19', col3: '1', col4: 'B', col5: 'G', col6: 'Utilizar láminas adhesivas o cortinillas sin llevar dos espejos retrovisores exteriores.', col7: '200' },
      { col1: 'RGC', col2: '19', col3: '2', col4: '', col5: 'G', col6: 'Utilizar vidrios tintados o coloreados no homologados.', col7: '200' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Bebidas alcohólicas, sustancias estupefacientes y similares (Baremo general):',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '20', col3: '1', col4: 'A', col5: 'MG', col6: 'Conducir el vehículo o bicicleta reseñado con una tasa de alcohol superior a 0,25 hasta 0,50 mg en litro de aire espirado. (Se indicará los resultados de la primera y segunda prueba, tomando el valor más pequeño) (aplicación de márgenes de error)', col7: '500' },
      { col1: 'RGC', col2: '20', col3: '1', col4: 'B', col5: 'MG', col6: 'Conducir el vehículo o bicicleta reseñado con una tasa de alcohol superior a 0,50 miligramos en litro de aire espirado. (Se indicará los resultados de la primera y segunda prueba, tomando el valor más pequeño) (aplicación de márgenes de error)', col7: '500' },
      { col1: 'RGC', col2: '27', col3: '1', col4: 'A', col5: 'MG', col6: 'Conducir un vehículo bajo los efectos de estupefacientes, psicotrópicos, estimulantes y otras sustancias análogas.', col7: '500' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: ['Supuestos especiales de conducción bajo la influencia de bebidas alcohólicas:',
    'Cuando se trate de vehículos destinados al transporte de mercancías con un peso máximo autorizado a 3.500 Kilogramos, vehículos destinados al transporte de viajeros de más de nueve plazas, o de servicio público, al escolar o de menores, al de mercancías especiales o de servicio de urgencia o transportes especiales y conductores de cualquier vehículo durante los dos años siguientes a la obtención del permiso o licencia que les habilita para conducir, los baremos a aplicar serán los siguientes:'],
    tableheader: '',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '20', col3: '2', col4: 'A', col5: 'MG', col6: 'Conducir un vehículo un conductor profesional con una tasa superior a 0,15 hasta 0,30 miligramos en litro de aire espirado. (Se indicará los resultados de la primera y segunda prueba, tomando el valor más pequeño) (aplicación de márgenes de error)', col7: '500' },
      { col1: 'RGC', col2: '20', col3: '2', col4: 'B', col5: 'MG', col6: 'Conducir un vehículo un conductor profesional con una tasa superior a 0,30 miligramos en litro de aire espirado. (Se indicará los resultados de la primera y segunda prueba, tomando el valor más pequeño) (aplicación de márgenes de error)', col7: '500' },
      { col1: 'RGC', col2: '20', col3: '3', col4: 'A', col5: 'MG', col6: 'Conducir un vehículo un conductor novel con una tasa superior a 0,15 hasta 0,30 miligramos en litro de aire espirado. (Se indicará los resultados de la primera y segunda prueba, tomando el valor más pequeño) (aplicación de márgenes error). Es conductor novel hasta los dos años siguientes a la obtención del permiso que le habilita la licencia sólo computa para los vehículos para los que sea suficiente dicha licencia.', col7: '500' },
      { col1: 'RGC', col2: '20', col3: '3', col4: 'B', col5: 'MG', col6: 'Conducir un vehículo un conductor novel con una tasa superior a 0,30 miligramos en litro de aire espirado. (Se indicará los resultados de la primera y segunda prueba, tomando el valor más pequeño) (aplicación de márgenes de error)', col7: '500' },
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Sentido de la circulación:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '29', col3: '1', col4: 'A', col5: 'G', col6: 'Circular por las vías de doble sentido de circulación sin arrimarse lo más cerca posible al borde derecho de la calzada, para mantener la separación lateral suficiente.', col7: '200' },
      { col1: 'RGC', col2: '29', col3: '1', col4: 'B', col5: 'G', col6: 'Circular por las vías sin dejar libre la mitad de la calzada en cambio de rasante o curvas de visibilidad reducida.', col7: '200' },
      { col1: 'RGC', col2: '29', col3: '2', col4: '', col5: 'MG', col6: 'Circular por la izquierda en vías de doble sentido de circulación en sentido contrario al establecido.', col7: '500' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Utilización del arcén:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '30', col3: '1', col4: '', col5: 'G', col6: 'Circular por el arcén no existiendo razones de emergencia.', col7: '200' },
      { col1: 'RGC', col2: '36', col3: '2', col4: '', col5: 'G', col6: 'No circular por el arcén transitable de su derecha el conductor de un vehículo obligado a utilizarlo (Vehículos de tracción animal, vehículos especiales de MMA > de 3.500 kg, vehículos de personas de movilidad reducida, vehículos de seguimiento de ciclistas) (ciclos y ciclomotores en circunstancias excepcionales podrán circular en columnas de dos vehículos)', col7: '200' },
      { col1: 'RGC', col2: '36', col3: '2', col4: '', col5: 'G', col6: 'Adelantar el conductor de cualquiera de los vehículos obligados a circular por el arcén, excepto las bicicletas, cuando la maniobra exceda de 15 segundos o el recorrido supere los 200 metros. (Vehículos de tracción animal, vehículos especiales de MMA > de 3.500 kg, vehículos de personas de movilidad reducida, vehículo de seguimiento de ciclistas) (excepto ciclos)', col7: '200' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Ordenación especial:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '37', col3: '1', col4: 'A', col5: 'MG', col6: 'Circular por una vía contraviniendo la orden especial determinada por la Autoridad competente, por razones de fluidez o seguridad del tráfico.', col7: '500' },
      { col1: 'RGC', col2: '37', col3: '1', col4: 'B', col5: 'G', col6: 'Circular por una vía cerrada al tráfico o por uno de sus tramos, vulnerando la prohibición total o parcial de acceso al mismo por parte de la autoridad competente, por razones de fluidez o seguridad de circulación. (especificar vulneración)', col7: '200' },
      { col1: 'RGC', col2: '37', col3: '1', col4: 'C', col5: 'MG', col6: 'Circular en sentido contrario a lo ordenado por la autoridad competente por razones de fluidez o seguridad del tráfico.', col7: '500' },
      { col1: 'RGC', col2: '37', col3: '2', col4: '', col5: 'L', col6: 'Circular por una vía contraviniendo la restricción o limitación a la circulación a determinados vehículos.', col7: '80' },
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Refugios, isletas o dispositivos de guía:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '43', col3: '1', col4: '', col5: 'MG', col6: 'Circular en sentido contrario al estipulado en la vía de doble sentido de circulación, donde existe una isleta, un refugio o un dispositivo de guía.', col7: '500' },
      { col1: 'RGC', col2: '43', col3: '2', col4: 'A', col5: 'MG', col6: 'Circular por una plaza, glorieta o encuentro de vías en sentido contrario al estipulado.', col7: '500' },
      { col1: 'RGC', col2: '43', col3: '2', col4: 'B', col5: 'MG', col6: 'Circular por una glorieta en sentido al estipulado.', col7: '500' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Moderación de velocidad:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '46', col3: '1', col4: 'A', col5: 'G', col6: 'Circular sin moderar la velocidad o, sin detenerlo cuando lo exigen las circunstancias. (Indicarse las circunstancias distinguiendo si pudiere constituir circulación temeraria)', col7: '200' }
      ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Velocidades prevalentes:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '52', col3: '2', col4: '', col5: 'G', col6: 'No llevar visible señal de limitación de velocidad V-4, los vehículos obligados.', col7: '200' },
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Límites de velocidad:',
    table: ''
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: '',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '53', col3: '1', col4: 'A', col5: 'G', col6: 'Reducir considerablemente la velocidad sin advertirlo previamente.', col7: '200' },
      { col1: 'RGC', col2: '53', col3: '1', col4: 'B', col5: 'G', col6: 'Reducir bruscamente la velocidad con riesgo de colisión para los vehículos que le siguen.', col7: '200' },
      { col1: 'RGC', col2: '54', col3: '1', col4: 'A', col5: 'G', col6: 'Circular detrás de otro vehículo sin dejar espacio libre que le permita detenerse sin colisionar, en caso de frenada brusca del que le precede. (con excepciones de conductores de bicicleta que circulen en grupo)', col7: '200' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Competiciones:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '55', col3: '1', col4: 'A', col5: 'MG', col6: 'Celebrar una prueba deportiva sin autorización.', col7: '500' },
      { col1: 'RGC', col2: '55', col3: '1', col4: 'B', col5: 'MG', col6: 'Realizar una marcha ciclista u otro evento similar, sin autorización.', col7: '500' },
      { col1: 'RGC', col2: '55', col3: '1', col4: 'C', col5: 'MG', col6: 'Celebrar marchas ciclistas, pruebas deportivas u otros eventos entre vehículos incumpliendo las condiciones de la autorización otorgada, no constitutiva de un riesgo o peligro que determinen su suspensión.', col7: '500' },
      { col1: 'RGC', col2: '55', col3: '2', col4: 'A', col5: 'MG', col6: 'Entablar competición de velocidad entre vehículos en vía pública o de uso público, no acotada para ello por la autoridad competente.', col7: '500' },
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Normas generales de prioridad:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '56', col3: '2', col4: 'A', col5: 'G', col6: 'No ceder el paso en una intersección debidamente señalizada obligando al conductor de otro vehículo que circula con prioridad a frenar o maniobrar bruscamente. (la señalización podrá ser una orden del agente de la autoridad, señal semafórica, de ceda el paso, stop, o cualquier otra que establezca la prioridad) (se utilizará este artículo cuando de la falta de observancia de la prioridad hubiere otros usuarios afectados)', col7: '200' },
      { col1: 'RGC', col2: '57', col3: '1', col4: '', col5: 'G', col6: 'No ceder el paso en una intersección a los vehículos que se aproximen por su derecha obligando al conductor a maniobrar o frenar bruscamente.', col7: '200' },
      { col1: 'RGC', col2: '57', col3: '1', col4: 'A', col5: 'G', col6: 'No ceder el paso a los vehículos que circulen por una vía pavimentada.', col7: '200' },
      { col1: 'RGC', col2: '57', col3: '1', col4: 'B', col5: 'G', col6: 'No ceder el paso a un vehículo que circula por raíles.', col7: '200' },
      { col1: 'RGC', col2: '57', col3: '1', col4: 'C', col5: 'G', col6: 'Acceder a una glorieta sin ceder el paso a unos vehículos que circulan por la misma.', col7: '200' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Normas sobre pasos estrechos, intersecciones y tramos de gran pendiente:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '59', col3: '1', col4: 'A', col5: 'G', col6: 'Penetrar con el vehículo reseñado en una intersección, quedando detenido de forma que impide la circulación transversal.', col7: '200' },
      { col1: 'RGC', col2: '59', col3: '1', col4: 'B', col5: 'G', col6: 'Penetrar con el vehículo reseñado en un paso de peatones, quedando detenido de forma que impide la circulación trasversal por el mismo de los peatones.', col7: '200' },
      { col1: 'RGC', col2: '59', col3: '1', col4: 'C', col5: 'G', col6: 'Penetrar con el vehículo reseñado en un paso de ciclistas, quedando detenido de forma que impide la circulación por el mismo.', col7: '200' },
      { col1: 'RGC', col2: '59', col3: '2', col4: '', col5: 'G', col6: 'No salir de una intersección regulada por semáforos obstaculizando la circulación, pudiendo hacerlo.', col7: '200' },
      { col1: 'RGC', col2: '60', col3: '1', col4: '', col5: 'G', col6: 'No respetar la prioridad de paso de otro vehículo que ha entrado primero en un tramo estrecho no señalizado al efecto.', col7: '200' },
      { col1: 'RGC', col2: '60', col3: '2', col4: '', col5: 'G', col6: 'Circular con el vehículo reseñado por sitio distinto al señalado al efecto a una vía donde se están realizando obras.', col7: '200' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Normas sobre conductores, peatones, ciclistas y animales:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '64', col3: '', col4: '', col5: 'G', col6: 'No respetar de los vehículos por parte de los peatones o animales, cuando cortan sus trayectorias.', col7: '200' },
      { col1: 'RGC', col2: '64', col3: 'A', col4: '', col5: 'G', col6: 'No respetar la prioridad de los ciclistas en carril bici, paso para ciclistas o arcén.', col7: '200' },
      { col1: 'RGC', col2: '64', col3: 'B', col4: '', col5: 'G', col6: 'No respetar la prioridad a ciclistas por vehículos a motor que gire para entrar en otra vía.', col7: '200' },
      { col1: 'RGC', col2: '64', col3: 'C', col4: '', col5: 'G', col6: 'No respetar la prioridad de los ciclistas que circulan en grupo y el primero ha entrado en el cruce o glorieta.', col7: '200' },
      { col1: 'RGC', col2: '64', col3: '2', col4: '', col5: 'G', col6: 'No respetar la prioridad de paso para ciclistas con riesgo para estos. (Se trata de cualquiera de los anteriores casos con riesgo para los ciclistas)', col7: '200' },
      { col1: 'RGC', col2: '65', col3: '1', col4: '1', col5: 'G', col6: 'No respetar el peatón la prioridad del vehículo. (Especificar la prioridad infringida)', col7: '200' },
      { col1: 'RGC', col2: '65', col3: '1', col4: '2', col5: 'G', col6: 'No respetar la prioridad de paso de los peatones, con riesgo para éstos. (Especificar el riesgo)', col7: '200' },
      { col1: 'RGC', col2: '65', col3: '1', col4: '', col5: 'G', col6: 'No respetar la prioridad de paso de los peatones y zonas peatonales. (sólo para supuestos en los que el agente perciba ausencia de riesgo inmediato para peatones)', col7: '200' },
      { col1: 'RGC', col2: '65', col3: '3', col4: 'A', col5: 'G', col6: 'No ceder el paso a peatones que suban o bajen del transporte colectivo entre el vehículo y la zona peatonal.', col7: '200' },
      { col1: 'RGC', col2: '65', col3: '3', col4: 'B', col5: 'G', col6: 'Circular con un vehículo sin ceder el paso a una tropa en formación, fila escolar o comitiva organizada.', col7: '200' },
      { col1: 'RGC', col2: '65', col3: '3', col4: 'B1', col5: 'G', col6: 'No respetar el paso de filas escolares.', col7: '200' },
      { col1: 'RGC', col2: '66', col3: '1', col4: '1', col5: 'G', col6: 'No respetar, el conductor de animales, la prioridad del paso del vehículo. (Especificar la prioridad infringida)', col7: '200' },
      { col1: 'RGC', col2: '66', col3: '1', col4: '2', col5: 'G', col6: 'No respetar, el conductor del vehículo, la prioridad de paso de los animales. (Especificar la prioridad infringida)', col7: '200' }      
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Vehículos en servicio de emergencias:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '67', col3: '1', col4: '1', col5: 'G', col6: 'No respetar la prioridad de paso de los vehículos en servicio de urgencia.', col7: '200' },
      { col1: 'RGC', col2: '68', col3: '1', col4: 'A', col5: 'G', col6: 'Conducir un vehículo prioritario, en servicio urgente, poniendo en peligro a los demás usuarios de la vía. (deberá indicarse sucintamente la maniobra realizada y el peligro creado)', col7: '200' },
      { col1: 'RGC', col2: '68', col3: '1', col4: 'B', col5: 'G', col6: 'No respetar el conductor de un vehículo prioritario las ordenes y señales de los agentes. (especificar la orden)', col7: '200' },
      { col1: 'RGC', col2: '68', col3: '2', col4: 'A', col5: 'G', col6: 'Circular un vehículo prioritario en servicio urgente, sin hacer uso de las señales reglamentarias.', col7: '200' },
      { col1: 'RGC', col2: '68', col3: '2', col4: 'B', col5: 'G', col6: 'Conducir un vehículo prioritario utilizando señales acústicas especiales de manera innecesarias bastando el uso aislado de una señal luminosa.', col7: '200' },
      { col1: 'RGC', col2: '69', col3: '', col4: 'A', col5: 'G', col6: 'No facilitar el paso a un vehículo prioritario que circula en servicio de urgencias, despúes de percibir las señales que anuncian su proximidad.', col7: '200' },
      { col1: 'RGC', col2: '69', col3: '', col4: 'B', col5: 'B', col6: 'No detenerse ante la manifiesta presencia del vehículo policial con la emisión de luces amarillas intermitente o destellantes', col7: '200' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Vehículos y transportes especiales:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '71', col3: '2', col4: 'A', col5: 'G', col6: 'No utilizar la señal luminosa los vehículos obligados a ello.', col7: '200' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Incorporación de vehículos a la circulación:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '72', col3: '1', col4: 'A', col5: 'G', col6: 'Incorporarse a la circulación sin ceder el paso a otro vehículo.', col7: '200' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Cambios de sentido:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '78', col3: '1', col4: 'A', col5: 'G', col6: 'Efectuar el cambio de sentido de la marcha en lugar inadecuado. (indicar las circunstancias concurrentes)', col7: '200' },
      { col1: 'RGC', col2: '78', col3: '1', col4: 'B', col5: 'G', col6: 'Efectuar el cambio de sentido de la marcha sin interceptar la vía el menor tiempo posible.', col7: '200' },
      { col1: 'RGC', col2: '78', col3: '1', col4: 'C', col5: 'G', col6: 'Efectuar el cambio de sentido de la marcha sin advertir a otros usuarios dicha maniobra.', col7: '200' },
      { col1: 'RGC', col2: '78', col3: '1', col4: 'D', col5: 'G', col6: 'Impedir continuar la marcha a los vehículos que circulan por detrás para efectuar un cambio de sentido de marcha pudiendo salir por su lado derecho.', col7: '200' },
      { col1: 'RGC', col2: '79', col3: '1', col4: '1A', col5: 'G', col6: 'Efectuar un cambio de sentido en lugar prohibido. (Deberá concretarse la maniobra)', col7: '200' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Marcha hacia atrás:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '80', col3: '1', col4: 'A', col5: 'G', col6: 'Circular hacia atrás pudiendo evitarlo con otra maniobra.', col7: '200' },
      { col1: 'RGC', col2: '80', col3: '1', col4: 'B', col5: 'MG', col6: 'Circular en sentido contrario al estipulado marcha atrás en un tramo largo de la vía. (Aplicable en recorridos extensos que excedan los normales de marcha atrás no prohibida)', col7: '500' },
      { col1: 'RGC', col2: '80', col3: '2', col4: 'A', col5: 'G', col6: 'Circular hacia atrás en un recorrido superior a 15 metros para efectuar la maniobra de la que es complementaria. (Indicar maniobra irregular realizada)', col7: '200' },
      { col1: 'RGC', col2: '80', col3: '2', col4: 'B', col5: 'G', col6: 'Circular hacia atrás en un recorrido superior a 15 metros o hacerlo invadiendo un cruce de vías para efectuar la maniobra de la que es complementaria. (Indicar maniobra realizada)', col7: '200' },
      { col1: 'RGC', col2: '81', col3: '1', col4: 'A', col5: 'G', col6: 'No efectuar lentamente la maniobra de marcha atrás.', col7: '200' },
      { col1: 'RGC', col2: '81', col3: '1', col4: 'B', col5: 'G', col6: 'Efectuar la maniobra de marcha atrás sin cerciorarse de que no va a constituir peligro', col7: '200' },
      { col1: 'RGC', col2: '81', col3: '1', col4: 'C', col5: 'G', col6: 'Efectuar la maniobra de marcha atrás sin advertirlo con las señales preceptivas.', col7: '200' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Sentido del adelantamiento:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '82', col3: '1', col4: '', col5: 'G', col6: 'Efectuar adelantamiento por la derecha. (Deben observarse las excepciones al adelantamiento por la derecha)', col7: '200' },
      { col1: 'RGC', col2: '82', col3: '2', col4: 'B', col5: 'G', col6: 'Adelantar por la derecha sin que el vehículo adelantado esté indicando su propósito de desplazamiento a la izquierda.', col7: '200' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Normas generales del adelantamiento:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '84', col3: '1', col4: 'A', col5: 'G', col6: 'Efectuar un adelantamiento, que requiere un desplazamiento lateral, sin advertirlo con las señales preceptivas con la suficiente antelación.', col7: '200' },
      { col1: 'RGC', col2: '84', col3: '1', col4: 'B', col5: 'G', col6: 'Efectuar un adelantamiento con peligro para quienes circulan en sentido contrario obligándoles a maniobrar bruscamente.', col7: '200' },
      { col1: 'RGC', col2: '84', col3: '1', col4: 'C', col5: 'G', col6: 'Efectuar un adelantamiento entorpeciendo a los que circulan en sentido contrario.', col7: '200' },
      { col1: 'RGC', col2: '84', col3: '1', col4: 'D', col5: 'G', col6: 'Adelantar a varios vehículos no existiendo espacio entre ellos que le permita, si fuese necesario, desviarse hacia el lado derecho sin peligro.', col7: '200' },
      { col1: 'RGC', col2: '84', col3: '2', col4: 'A', col5: 'G', col6: 'Adelantar a un vehículo que se ha desplazado lateralmente para adelantar a otro invadiendo para ello la parte de la calzada reservada a la circulación en sentido contrario.', col7: '200' },
      { col1: 'RGC', col2: '84', col3: '3', col4: 'A', col5: 'G', col6: 'Adelantar cuando otro conductor que le sigue ha iniciado la maniobra de adelantamiento.', col7: '200' },
      { col1: 'RGC', col2: '84', col3: '3', col4: 'B', col5: 'G', col6: 'Adelantar sin disponer de espacio suficiente para reintegrarse a su derecha.', col7: '200' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Ejecución del adelantamiento:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '85', col3: '1', col4: 'A', col5: 'G', col6: 'Adelantar sin llevar durante la ejecución de la maniobra una velocidad notoriamente superior a la del vehículo adelantado.', col7: '200' },
      { col1: 'RGC', col2: '85', col3: '1', col4: 'B', col5: 'G', col6: 'Adelantar a otro vehículo sin dejar entre ambos una separación lateral suficiente para realizarlo con seguridad.', col7: '200' },
      { col1: 'RGC', col2: '85', col3: '2', col4: 'A', col5: 'G', col6: 'No volver a su carril una vez iniciada la maniobra de adelantamiento al observar circunstancias que pudieran hacer difícil su finalización sin provocar riesgos. (Indiquqe las circunstancias)', col7: '200' },
      { col1: 'RGC', col2: '85', col3: '2', col4: 'B', col5: 'G', col6: 'No volver a su carril, tras finalizar la maniobra de adelantamiento, lo antes posible, de modo no gradual o sin advertirlo. (Indicar el incumplimiento)', col7: '200' },
      { col1: 'RGC', col2: '85', col3: '3', col4: 'B', col5: 'G', col6: 'Volver a su carril, tras finalizar la maniobra de adelantamiento, sin advertirlo mediante la señalización.', col7: '200' },

    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Vehículo adelantado:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '86', col3: '1', col4: '1A', col5: 'G', col6: 'No ceñirse al borde derecho de la calzada al ser advertido por el conductor que le sigue del propósito de adelantar a su vehículo.', col7: '200' },
      { col1: 'RGC', col2: '86', col3: '2', col4: '1A', col5: 'G', col6: 'Aumentar la velocidad cuando va a ser adelantado.', col7: '200' },
      { col1: 'RGC', col2: '86', col3: '2', col4: '1B', col5: 'G', col6: 'Efectuar maniobras que impiden o dificultan el adelantamiento, cuando va a ser adelantado.', col7: '200' },
      { col1: 'RGC', col2: '86', col3: '2', col4: '2A', col5: 'G', col6: 'No disminuir la velocidad cuando va a ser adelantado, una vez iniciado el adelantamiento, al producirse una situación de peligro.', col7: '200' },
      { col1: 'RGC', col2: '86', col3: '3', col4: '1A', col5: 'G', col6: 'No facilitar el adelantamiento el conductor del vehículo reseñado cuando las circunstancias no permitan ser adelantados con facilidad y sin peligro. (Indicar circunstancias concurrentes)', col7: '200' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Prohibición del adelantamiento:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '87', col3: '1A', col4: '3', col5: 'G', col6: 'Adelantar en lugares de visibilidad insuficiente invadiendo el sentido contrario.', col7: '200' },
      { col1: 'RGC', col2: '87', col3: '1B', col4: '1', col5: 'G', col6: 'Adelantar en paso de peatones señalizado. (No se aplicará si se hace a una velocidad que permita detenerse a tiempo evitando el atropello)', col7: '200' },
      { col1: 'RGC', col2: '87', col3: '1B', col4: '3', col5: 'G', col6: 'Adelantar en un paso a nivel o en sus proximidades.', col7: '200' },
      { col1: 'RGC', col2: '87', col3: '1B', col4: '2', col5: 'G', col6: 'Adelantar en intersección con vías para ciclistas.', col7: '200' },
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Adelantamiento vehículos inmovilizados:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '88', col3: '1', col4: 'A', col5: 'G', col6: 'Rebasar a un vehículo inmovilizado por causas ajenas a las necesidades del tráfico, ocupando la parte de la calzada reservada al sentido contrario, en tramo en que está prohobido, ocasionando peligro.', col7: '200' },
      { col1: 'RGC', col2: '88', col3: '1', col4: 'B', col5: 'G', col6: 'Rebasar a bicicletas, ciclos y ciclomotores, peatones, animales y vehículos de tracción animal ocupando parte de la calzada reservada al sentido contrario, en el tramo en que el está prohibido adelantar ocasionando riesgo para ellos o para la circulación.', col7: '200' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Prohibición de paradas:',
    table: [
      { col1: 'OMT', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'OMT', col2: '12', col3: '1', col4: '', col5: 'L', col6: 'Parar el vehículo en vía urbana de doble sentido separado del borde derecho de la acera.', col7: '' },
      { col1: 'OMT', col2: '12', col3: '2', col4: '', col5: 'L', col6: 'Parar el vehículo sin cerciorarse que los pasajeros bajan por el lado correspondiente a la acera.', col7: '30' },
      { col1: 'OMT', col2: '13', col3: '1', col4: '2A', col5: 'L', col6: 'Parar el vehículo en una calle urbanizada sin acera sin dejar una distancia mínima de un metro desde la fachada más próxima.', col7: '48' },
      { col1: 'OMT', col2: '15', col3: '1', col4: '', col5: 'G', col6: 'Dejar o tomar viajeros en autobuses fuera de las paradas exdpresamente determinadas o señalizadas por la autoridad municipal.', col7: '200' },
      { col1: 'OMT', col2: '16', col3: '1', col4: '', col5: 'G', col6: 'Recoger o bajar alumnos en vehículos de transporte escolar fuera de las paradas autorizadas en el itinerario por la autoridad municipal.', col7: '200' },
      { col1: 'OMT', col2: '17', col3: 'A', col4: '', col5: 'L', col6: 'Parar el vehículo en lugar prohibido señalizado como tal.', col7: '50' },
      { col1: 'OMT', col2: '17', col3: 'B', col4: '', col5: 'G', col6: 'Parar el vehículo obstaculizando o perturbando gravemente la circulación de vehículos o peatones.', col7: '200' },
      { col1: 'OMT', col2: '17', col3: 'C', col4: '', col5: 'L', col6: 'Parar el vehículo en doble fila.', col7: '48' },
      { col1: 'OMT', col2: '17', col3: 'D', col4: '', col5: 'L', col6: 'Parar el vehículo sobre refugios, isletas, medianas, zonas de protección y demás elementos catalizadores del tráfico.', col7: '60' },
      { col1: 'OMT', col2: '17', col3: 'E', col4: '', col5: 'L', col6: 'Parar el vehículo obstaculizando la utilización normal del paso de entrada de vehículos y personas.', col7: '60' },
      { col1: 'OMT', col2: '17', col3: 'E', col4: '', col5: 'L', col6: 'Parar el vehículo obstaculizando un acceso de vehículos señalizado con el correspondiente vado.', col7: '60' },
      { col1: 'OMT', col2: '17', col3: 'F', col4: '', col5: 'L', col6: 'Parar el vehículo en zona señalizada para uso exclusivo de minusválidos.', col7: '60' },
      { col1: 'OMT', col2: '17', col3: 'F', col4: '', col5: 'G', col6: 'Parar el vehículo sobre la acera.', col7: '200' },
      { col1: 'OMT', col2: '17', col3: 'F', col4: '', col5: 'G', col6: 'Parar el vehículo sobre zona peatonal o paseo.', col7: '200' },
      { col1: 'OMT', col2: '17', col3: 'F', col4: '', col5: 'G', col6: 'Parar el vehículo sobre un paso de peatones.', col7: '200' },
      { col1: 'OMT', col2: '17', col3: 'G', col4: '', col5: 'L', col6: 'Parar el vehículo a menos de 5 metros de una esquina, cruce o bifurcación fuera de los casos permitidos reglamentariamente.', col7: '60' },
      { col1: 'OMT', col2: '17', col3: 'H', col4: '', col5: 'L', col6: 'Parar el vehículo en un lugar que impida la visión de las señales de tráfico a los demás conductores.', col7: '70' },
      { col1: 'OMT', col2: '17', col3: 'I', col4: '', col5: 'G', col6: 'Parar el vehículo en las proximidades de una curva o cambio de rasante con visibilidad insuficiente.', col7: '200' },
      { col1: 'OMT', col2: '17', col3: 'J', col4: '', col5: 'L', col6: 'Parar el vehículo en lugar señalizado para vehículos de servicio público.', col7: '60' },
      { col1: 'OMT', col2: '17', col3: 'J', col4: '', col5: 'L', col6: 'Parar el vehículo en lugar señalizado para vehículos de organismos oficiales.', col7: '60' },
      { col1: 'OMT', col2: '17', col3: 'J', col4: '', col5: 'L', col6: 'Parar el vehículo en lugar señalizado para vehículos de servicios de urgencia.', col7: '60' },
      { col1: 'OMT', col2: '17', col3: 'K', col4: '', col5: 'G', col6: 'Parar el vehículo en un rebaje de la acera para el paso de personas de movilidad reducida.', col7: '200' },
      { col1: 'OMT', col2: '17', col3: 'L', col4: '', col5: 'L', col6: 'Parar el vehículo en un paso o carril reservado exclusivamente para el uso de ciclistas.', col7: '24' },
      { col1: 'OMT', col2: '17', col3: 'M', col4: '', col5: 'G', col6: 'parar el vehículo en vía pública declarada de atención preferente por la autoridad competente.', col7: '200' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Prohibiciones de estacionamiento:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'OMT', col2: '19', col3: '1', col4: '', col5: 'G', col6: 'Estacionar obstaculizando gravemente la circulación.', col7: '200' },
      { col1: 'OMT', col2: '19', col3: '1', col4: '', col5: 'G', col6: 'Estacionar constituyendo un riesgo para los demás usuarios.', col7: '200' },
      { col1: 'OMT', col2: '19', col3: '1', col4: '', col5: 'G', col6: 'Estacionar el vehículo ausentándose del mismo sin tomar las medidas reglamentarias que eviten que se ponga en movimiento.', col7: '200' },
      { col1: 'OMT', col2: '19', col3: '1', col4: '', col5: 'G', col6: 'Estacionar el vehículo de forma que no permite la mejor utilización del restante espacio disponible.', col7: '200' },
      { col1: 'OMT', col2: '20', col3: '1', col4: '', col5: 'G', col6: 'Estacionar el vehículo en batería o semibatería, no existiendo señalización que lo permita.', col7: '200' },
      { col1: 'OMT', col2: '20', col3: '1', col4: '', col5: 'L', col6: 'Estacionar el vehículo fuera del perímetro marcado en el pavimento para la colocación del mismo.', col7: '60' },
      { col1: 'OMT', col2: '23', col3: '1', col4: '', col5: 'L', col6: 'Estacionar en la vía pública un remolque separado del vehículo a motor.', col7: '60' },
      { col1: 'OMT', col2: '26', col3: '1', col4: '', col5: 'G', col6: 'Hacer uso de una zona de reserva de estacionamiento por obra para carga y descarga sin autorización municipal. (Sólo aplicab le a las edificaciones de nueva planta)', col7: '200' },
      { col1: 'OMT', col2: '27', col3: '1', col4: '', col5: 'G', col6: 'Estacionar una motocicleta o ciclomotor sobre la acera.', col7: '200' },
      { col1: 'OMT', col2: '27', col3: '1', col4: '', col5: 'G', col6: 'Estacionar una motocicleta o ciclomotor sobre un andén.', col7: '200' },
      { col1: 'OMT', col2: '27', col3: '1', col4: '', col5: 'G', col6: 'Estacionar una motocicleta o ciclomotor sobre un paseo.', col7: '200' },
      { col1: 'OMT', col2: '27', col3: '1', col4: '1', col5: 'L', col6: 'Estacionar una motocicleta o ciclomotor de una manera antirreglamentaria ocupando una anchura máxima de un metro y medio. (Como norma general los vehículos de dos ruedas se estacionan en semibatería)', col7: '60' },
      { col1: 'OMT', col2: '27', col3: '2', col4: '', col5: 'G', col6: 'Estacionar una motocicleta o ciclomotor entre otros vehículos impidiendo el acceso a los mismos o a las maniobras de estacionamiento.', col7: '200' },
      { col1: 'OMT', col2: '28', col3: 'A', col4: '', col5: 'L', col6: 'No obedecer una señal de prohibido estacionar.', col7: '50' },
      { col1: 'OMT', col2: '28', col3: 'B', col4: '', col5: 'L', col6: 'Estacionar donde este prohibida la parada.', col7: '50' },
      { col1: 'OMT', col2: '28', col3: 'C', col4: '', col5: 'L', col6: 'Estacionar en un mismo lugar de la vía pública durante más de 48 horas consecutivas.', col7: '80' },
      { col1: 'OMT', col2: '28', col3: 'D', col4: '', col5: 'G', col6: 'Estacionar en doble fila en cualquier supuesto.', col7: '200' },
      { col1: 'OMT', col2: '28', col3: 'E', col4: '', col5: 'G', col6: 'Estacionar en las zonas señalizadas como reserva de carga y descarga de mercancías.', col7: '200' },
      { col1: 'OMT', col2: '28', col3: 'F', col4: '', col5: 'G', col6: 'Estacionar en las zonas reservadas para el estacionamiento de vehículo de servicio público, organismos oficiales, delegaciones diplomáticas y servicios de urgencia o policía.', col7: '200' },
      { col1: 'OMT', col2: '28', col3: 'G', col4: '', col5: 'G', col6: 'Estacionar delante de los accesos de edificios destinados a espectáculos o actos públicos, en las horas de celebración de los mismos.', col7: '200' },
      { col1: 'OMT', col2: '28', col3: 'H', col4: '', col5: 'G', col6: 'Estacionar ocupando la calzada en una anchura superior a 3 metros.', col7: '200' },
      { col1: 'OMT', col2: '28', col3: 'I', col4: '', col5: 'G', col6: 'Estacionar en calles de doble sentido de circulación impidiendo el tráfico rodado.', col7: '200' },
      { col1: 'OMT', col2: '28', col3: 'J', col4: '', col5: 'L', col6: 'Estacionar obstaculizando el paso a inmuebles por vehículos o personas.', col7: '' },
      { col1: 'OMT', col2: '28', col3: 'K', col4: '', col5: 'G', col6: 'Estacionar obstaculizando los pasos rebajados para personas de movilidad reducida.', col7: '200' },
      { col1: 'OMT', col2: '28', col3: 'L', col4: '', col5: 'L', col6: 'Estacionar obstaculizando la salida de otros vehículos estacionados reglamentariamente.', col7: '80' },
      { col1: 'OMT', col2: '28', col3: 'M', col4: '', col5: 'L', col6: 'Estacionar en los vados total o parcialmente.', col7: '70' },
      { col1: 'OMT', col2: '28', col3: 'N', col4: '', col5: 'L', col6: 'Estacionar en lugares reservados exclusivamente para parada de vehículos.', col7: '80' },
      { col1: 'OMT', col2: '28', col3: 'O', col4: '', col5: 'L', col6: 'Estacionar en lugares señalizados temporalmente por obras, actos públicos o manifestaciones deportivas.', col7: '80' },
      { col1: 'OMT', col2: '28', col3: 'P', col4: '', col5: 'G', col6: 'Estacionar en lugares autorizados para personal municipal siempre que haya distintivo que lo prohíba.', col7: '200' },
      { col1: 'OMT', col2: '28', col3: 'Q', col4: '', col5: 'L', col6: 'Estacionar delante de contenedores.', col7: '80' },
      { col1: 'OMT', col2: '28', col3: 'R', col4: '', col5: 'G', col6: 'Estacionar sobre aceras, paseos y demás zonas destinadas al paso de peatones.', col7: '200' },
      { col1: 'OMT', col2: '28', col3: 'S', col4: '', col5: 'G', col6: 'Estacionar en zonas señalizadas para uso exclusivo de personas con movilidad reducida.', col7: '200' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Carga y descarga:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'OMT', col2: '29', col3: '1', col4: '', col5: 'L', col6: 'Colocar en la vía pública mercancía, objeto o cosa procedente de una carga y descarga sin estar autorizado.', col7: '80' },
      { col1: 'OMT', col2: '30', col3: 'B', col4: '', col5: 'L', col6: 'Realizar operaciones de carga y descarga en zona no habilitada y fuera de horario establecido.', col7: '80' },
      { col1: 'OMT', col2: '32', col3: '1', col4: '', col5: 'L', col6: 'No dejar limpia la vía pública tras realizar operaciones de carga y descarga o no evitar ruidos innecesarios.', col7: '80' },
      { col1: 'OMT', col2: '33', col3: '1', col4: '', col5: 'L', col6: 'Cargar o descargar mercancía por el lado del vehículo más alejado de la acera.', col7: '80' },
      { col1: 'OMT', col2: '33', col3: '1', col4: '', col5: 'G', col6: 'Cargar o descargar mercancía dificultando la circulación de peatones o vehículos.', col7: '200' },
      { col1: 'OMT', col2: '34', col3: '1', col4: '', col5: 'L', col6: 'Estacionar en zona habilitada para carga y descarga, vehículos que no sean comerciales o de transporte de mercancías.', col7: '80' },
      { col1: 'OMT', col2: '35', col3: '1', col4: '1A', col5: 'L', col6: 'Estacionar en zona señalizada para carga y descarga, sobrepasando el tiempo máximo permitido sin autorización de 15 minutos.', col7: '80' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Normas de alumbrado:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '98', col3: '1', col4: 'A', col5: 'G', col6: 'Circular con el vehículo reseñado, entre el ocaso y la salida del sol emitiendo luz un solo proyector del mismo.', col7: '200' },
      { col1: 'RGC', col2: '99', col3: '1', col4: '1A', col5: 'G', col6: 'Circular con el vehículo reseñado sin ningún tipo de alumbrado en situación de falta o disminución de visibilidad. (Deberá concretarse la infracción. No aplicable a destellos no reglamentarios, ni a carencia de luz de placa de matrícula, ni a utilización inadecuada del alumbrado antiniebla)', col7: '200' },
      { col1: 'RGC', col2: '101', col3: '1', col4: '3C', col5: 'G', col6: 'Circular con el vehículo reseñado por una vía suficientemente iluminada sin llevar encendido el alumbrado de corto alcance entre el ocaso y la salida del sol.', col7: '200' },
      { col1: 'RGC', col2: '101', col3: '3', col4: '1A', col5: 'G', col6: 'Circular con el alumbrado de corto alcance o de cruce produciéndose deslumbramiento.', col7: '200' },
      { col1: 'RGC', col2: '103', col3: '1', col4: 'A', col5: 'G', col6: 'No llevar iluminada la placa posterior de matrícula siendo obligatoria la utilización del alumbrado.', col7: '200' },
      { col1: 'RGC', col2: '103', col3: '1', col4: 'B', col5: 'G', col6: 'No llevar iluminada las placas o distintivos de los que reglamentariamente hayan de estar dotados siendo obligatoria la utilización de alumbrado.', col7: '200' },
      { col1: 'RGC', col2: '104', col3: '1', col4: '2A', col5: 'G', col6: 'Circular durante el día con una motocicleta sin llevar encendido el alumbrado reglamentario.', col7: '200' },
      { col1: 'OMT', col2: '4', col3: '3', col4: '', col5: 'L', col6: 'Conducir una bicicleta sin alumbrado en los casos que es obligatorio, o sin llevar colocada ninguna prenda reflectante homologados.', col7: '36' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Deslumbramiento:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '100', col3: '4', col4: '1A', col5: 'G', col6: 'Utilizar la luz de largo alcance o carretera o corto alcance, en forma de destellos para fines distintos a los previstos reglamentariamente.', col7: '200' },
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Supuestos especiales de alumbrado:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '106', col3: '2', col4: 'A', col5: 'G', col6: 'No utilizar la luz delantera de niebla ni la de corto o largo alcance existiendo condiciones que disminuyen sensiblemente la visibilidad. (Indicar condiciones existentes)', col7: '200' },
      { col1: 'RGC', col2: '106', col3: '2', col4: 'B', col5: 'L', col6: 'Utilizar la luz delantera de niebla sin existir causa que lo justifique.', col7: '80' },
      { col1: 'RGC', col2: '106', col3: '2', col4: 'C', col5: 'L', col6: 'Utilizar la luz posterior de niebla sin existir condiciones meteorológicas o ambientales especialmente favorables.', col7: '80' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Advertencias de los conductores:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '109', col3: '1', col4: 'B', col5: 'L', col6: 'Mantener la señal óptica en un desplazamiento lateral, después de finalizada la maniobra.', col7: '100' },
      { col1: 'RGC', col2: '109', col3: '2', col4: 'C2', col5: 'G', col6: 'No utilizar la señal de emergencia para señalizar la presencia de un vehículo inmovilizado en lugares o circunstancias que disminuyan sensiblemente la visibilidad.', col7: '200' },
      { col1: 'RGC', col2: '109', col3: '2', col4: 'C3', col5: 'G', col6: 'No señalizar con el indicador luminoso de dirección correspondiente la intención de realizar una parada o estacionamiento.', col7: '200' },
      { col1: 'RGC', col2: '110', col3: '1', col4: '', col5: 'L', col6: 'Usar las señales acústicas de manera inmotivada o exagerada.', col7: '80' },
      { col1: 'RGC', col2: '113', col3: '1', col4: '', col5: 'G', col6: 'No advertir la presencia del vehículo destinado a obras o agrícola con la señal luminosa V2 o mediante la utilización del alumbrado específicamente determinado para tal vehículo.', col7: '200' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Puertas:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'OMT', col2: '4', col3: '2', col4: '', col5: 'L', col6: 'Llevar abiertas las puertas del vehículo.', col7: '30' },
      { col1: 'OMT', col2: '4', col3: '2', col4: '', col5: 'L', col6: 'Abrir las puertas antes de la completa inmovilización del vehículo.', col7: '30' },
      { col1: 'OMT', col2: '4', col3: '2', col4: '', col5: 'L', col6: 'Abrir las puertas o apearse del vehículo sin haberse cerciorado previamente de que ello no implica peligro o entorpecimiento para otros usuarios.', col7: '60' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Cinturones de seguridad.',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '117', col3: '1', col4: '1A', col5: 'G', col6: 'No utilizar el conductor del vehículo el cinturón de seguridad u otro sistema de retención homologado estando obligado a ello.', col7: '200' },
      { col1: 'RGC', col2: '117', col3: '1', col4: '1B', col5: 'G', col6: 'No utilizar un pasajero del vehículo, mayor de 12 años y con altura superior a 135cm, el cinturón de seguridad estando obligado a ello. (Se aplicará al resto de los ocupantes del vehículo)', col7: '200' },
      { col1: 'RGC', col2: '117', col3: '2', col4: 'A1', col5: 'G', col6: 'Circular un menor de 12 años y de menos de 135 cm. de altura en el asiento delantero, sin utilizar ningún dispositivo de sujeción homologado distinto del cinturón de seguridad.', col7: '200' },
      { col1: 'RGC', col2: '117', col3: '2', col4: 'B1', col5: 'G', col6: 'Circular en el asiento trasero del vehículo con un pasajero que no alcanza los 135 cm., sin utilizar un dispositivo de retención homologado adaptado a su talla y peso, debidamente abrochado.', col7: '200' },
      { col1: 'RGC', col2: '117', col3: '2', col4: 'B2', col5: 'G', col6: 'Circular en los asientos traseros del vehículo con un pasajero con altura comprendida entre 135 y 150 cm sin utilizar un dispositivo de retención homologado adaptado a su talla y peso o el cinturón de seguridad.', col7: '200' },
      { col1: 'RGC', col2: '117', col3: '2', col4: 'C', col5: 'G', col6: 'Colocar en el vehículo un dispositivo de retención infantil orientado hacia atrás, encontrándose activado el airbag frontal.', col7: '200' },
      { col1: 'RGC', col2: '117', col3: '3', col4: '', col5: 'G', col6: 'Circular un pasajero mayor de tres años y menos de 135 cm de altura, sin que utilice el cinturón de seguridad o un dispositivo adaptado a su talla y peso, cuando el vehículo tenga más de nueve plazas incluido el conductor.', col7: '200' },
      { col1: 'RGC', col2: '117', col3: '4', col4: 'A1', col5: 'G', col6: 'Circular un menor de 3 años en un turismo, que carece de dispositivos de seguridad adaptados a su talla y peso.', col7: '200' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Cascos y otros elementos de circulación:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '118', col3: '1', col4: 'A1', col5: 'G', col6: 'No utilizar el conductor el casco de protección homologado o no usarlo adecuadamente.', col7: '200' },
      { col1: 'RGC', col2: '118', col3: '1', col4: 'B2', col5: 'G', col6: 'No utilizar el casco de protección homologado o no usarlo adecuadamente el acompañante. (Se denunciará al conductor haciéndose constar los datos del acompañante)', col7: '200' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Tiempos de conducción y descansos:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '120', col3: '1', col4: 'A', col5: 'MG', col6: 'Conducir el vehículo reseñado con un exceso de más del 50% en los tiempos de conducción establecidos en la legislación de transporte terrestre. (No aplicable a vehículos no obligados a utilizar tacógrafos)', col7: '500' },
      { col1: 'RGC', col2: '120', col3: '1', col4: 'B', col5: 'MG', col6: 'Conducir el vehículo reseñado con una minoración de las del 50% en los tiempos de descanso establecidos en la legislación de transporte terrestre. (No aplicable a vehículos no obligados a utilizar tacógrafos)', col7: '500' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Circulación por zonas peatonales:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '121', col3: '1', col4: '', col5: 'L', col6: 'Transitar un peatón por la calzada existiendo acerado o zona habilitada.', col7: '80' },
      { col1: 'RGC', col2: '121', col3: '5', col4: '', col5: 'G', col6: 'Circular con el vehículo por acera o zona peatonal.', col7: '200' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Norma especial circulación de animales:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '127', col3: '2', col4: '', col5: 'L', col6: 'Dejar animales sin custodia en la vía o sus inmediaciones cuando exista posibilidad de que estos la invadan. (Deberá indicarse de que animal se trata)', col7: '80' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Obligación de auxilio:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '129', col3: '2', col4: 'B3', col5: 'G', col6: 'Estar implicado en un accidente de tráfico y no facilitar su identidad a la autoridad o sus agentes.', col7: '200' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Inmovilización del vehículo:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '130', col3: '1', col4: 'A', col5: 'L', col6: 'No señalizar eficazmente el vehículo o la carga que por accidente, obstaculice la vía.', col7: '80' },
      { col1: 'RGC', col2: '130', col3: '2', col4: 'B', col5: 'L', col6: 'No tomar las medidas oportunas para la retirada, en el menor tiempo posible del vehículo o la carga, que por avería haya quedado obstaculizando la vía.', col7: '80' },
      { col1: 'RGC', col2: '130', col3: '5', col4: '', col5: 'L', col6: 'Remolcar un vehículo averiado por otro no destinado a ese fin. (No aplicable en situaciones excepcionales y hasta el lugar más próximo)', col7: '80' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Señales de los agentes:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '143', col3: '2', col4: 'A', col5: 'G', col6: 'No respetar las señales de los agentes que regulan la circulación. (Deberá describirse sucintamente la señal desobedecida)', col7: '200' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Señales de balizamiento:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '144', col3: '2', col4: 'A', col5: 'G', col6: 'No respetar la prohibición de paso establecida mediante señal de balizamiento. (Deberá indicarse el tipo de señal no respetada)', col7: '200' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Señales de restricción de paso:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '154', col3: '', col4: '', col5: 'L', col6: 'No obedecer una señal de prohibición o restricción. (Deberá indicarse la señal desobedecida)', col7: '80' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Marcas blancas longitudinales:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '167', col3: '', col4: 'A', col5: 'G', col6: 'No respetar una marca longitudinal continua. (Deberá indicarse la marca)', col7: '200' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Marcas blancas transversales:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '168', col3: '', col4: 'A', col5: 'L', col6: 'No respetar una marca vial transversal continua. (Deberá indicarse la marca)', col7: '80' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Marcas horizontales de circulación:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '169', col3: 'B', col4: '', col5: 'G', col6: 'No detenerse en el lugar prescrito por la señal horizontal de STOP sobre la calzada.', col7: '200' },
      { col1: 'RGC', col2: '169', col3: 'D', col4: '', col5: 'G', col6: 'No obedecer la obligación impuesta por una flecha de selección de carriles que imponen una dirección a seguir.', col7: '200' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Otras marcas e inscripciones de color blanco:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'RGC', col2: '170', col3: 'C', col4: '1', col5: 'G', col6: 'Circular por un carril o zona de la vía reservada para determinados vehículos señalizada como tal.', col7: '200' },
      { col1: 'RGC', col2: '170', col3: '4', col4: 'G', col5: 'L', col6: 'Entrar en zona excluida de la circulación (cebreado) enmarcado por una línea contínua, sin causa que lo justifique.', col7: '80' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Señalización:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'OMT', col2: '9', col3: '2', col4: '', col5: 'L', col6: 'No obedecer señal de obligación.', col7: '50' },
      { col1: 'OMT', col2: '9', col3: '2', col4: '', col5: 'L', col6: 'No obedecer señal de prohibición.', col7: '50' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Instalación de señalización:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'OMT', col2: '10', col3: '1', col4: '', col5: 'G', col6: 'Instalar en la vía señalización sin autorización.', col7: '200' },
      { col1: 'OMT', col2: '10', col3: '1', col4: '', col5: 'G', col6: 'Utilizar señales en las vías objeto de la Ley, que incumplen las especificaciones reglamentarias.', col7: '200' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Retirada, sustitución y alteración de señales:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'OMT', col2: '9', col3: '1', col4: '', col5: 'G', col6: 'Retirar señalización de la vía sin autorización.', col7: '200' },
      { col1: 'OMT', col2: '9', col3: '1', col4: '', col5: 'G', col6: 'Modificar señalización de la vía sin autorización.', col7: '200' },
      { col1: 'RGC', col2: '142', col3: 'B', col4: '2', col5: 'G', col6: 'Colocar sobre las señales de carácter permanente u ocasional, marcas, placas, carteles, u otros objetos que induzcan a confusión, reduzcan su visibilidad o su eficacia, deslumbren o distraigan la atención de los usuarios de las vías.', col7: '3000' },
      { col1: 'OMT', col2: '39', col3: '2', col4: '1A', col5: 'L', col6: 'Instalar en la puerta, fachada o construcción, un disco de prohibición de estacionamiento no ajustado al modelo oficial facilitado por el Ayuntamiento.', col7: '60' },
      { col1: 'OMT', col2: '39', col3: '4', col4: '2A', col5: 'L', col6: 'Realizar señalización horizontal (pintar bordillo o calzada) en la vía pública sin autorización del Ayuntamiento.', col7: '60' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Personas responsables:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'LSV', col2: '72', col3: '3', col4: '1', col5: 'MG', col6: 'No identificar al conductor responsable de la infracción, el titular del vehículo debidamente requerido para ello.', col7: '500' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Retirada y traslado de vehículos al depósito:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'OMT', col2: '55', col3: '1', col4: 'L', col5: '', col6: 'Cuando se acuda a realizar el servicio e iniciados los trabajos necesarios para el traslado del vehículo, no se pueda consumar este por la presencia del propietario.', col7: '50' },
      { col1: 'OMT', col2: '55', col3: '1', col4: 'L', col5: '', col6: 'Cuando se realice el servicio completo.', col7: '80' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Inmovilización de vehículos:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'OMT', col2: '45', col3: '4', col4: '', col5: '', col6: 'Por cada vehículo inmovilizado.', col7: '50' }
    ]
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: 'Depósito de vehículos a partir de 24 horas:',
    table: [
      { col1: '', col2: 'Art.', col3: 'Apar.', col4: 'Opc.', col5: 'Inf.', col6: 'Hecho denunciado', col7: 'Euros' },
      { col1: 'OMT', col2: '54', col3: '1', col4: '', col5: '', col6: 'Por depósito de vehículos al día.', col7: '10/día' }
    ]
  },
  {
    title: 'ANEXO II',
    chapter: '',
    section: 'Infracciones que llevan aparejada la pérdida de puntos.',
    article: '',
    paragraphs: [''],
    tableheader: 'El titular de un permiso o licencia de conducción que sea sancionado en firme en vía administrativa por la comisión de alguna de las infracciones que a continuación se relacionan perderá el número de puntos que, para cada una de ellas, se señalan a continuación:',
    table: [
      { col1:'', col2:'Puntos'},
      { col1:'1. Conducir con una tasa de alcohol superior a la reglamentariamente establecida.', col2:'6'},
      { col1:'Valores mg./L. aire espirado, más de 0,50 (profesionales y titulares de permisos de conducción con menos de dos años de antigüedad más de 0,15 hasta 0,30 mg./L.)', col2:'6'},
      { col1:'Valores mg./L. aire espirado, superior a 0,25 hasta 0,50 (profesionales y titulares de permisos de conducción con menos de dos años de antigüedad más de 0,15 hasta 0,30 mg./L.)', col2:'4'},
      { col1:'2. Conducir bajo los efectos de estupefacientes, psicotrópicos, estimulantes y otras sustancias de efectos análogos.', col2:'6'},
      { col1:'3. Incumplir la obligación de someterse a las pruebas de detección del grado de alcoholemia, de estupefacientes, psicotrópicos, estimulantes y otras sustancias de efectos análogos.', col2:'6'},
      { col1:'4. Conducir de forma temeraria, circular en sentido contrario al establecido o participar en carrera o competiciones no autorizadas.', col2:'6'},
      { col1:'5. Conducir vehículos que tengan instalados mecanismos o sistemas encaminados a inhibir la vigilancia del tráfico, o que lleven instrumentos con la misma intención, así como de inhibición de sistemas de detección de radar.', col2:'6'},
      { col1:'6. El exceso en más del 50 por ciento en los tiempos de conducción o la maniobra en más del 50 por ciento en los tiempos de descanso establecidos en la legislación sobre transporte terrestre.', col2:'6'},
      { col1:'7. La participación o colaboración necesaria de los conductores en la colocación o puesta en funcionamiento de elementos que alteren el normal funcionamiento del uso del tacógrafo o del limitador de velocidad.', col2:'6'},
      { col1:'8. Conducir un vehículo con un permiso o licencia que no le habilite para ello.', col2:'4'},
      { col1:'9. Arrojar a la vía o en sus inmediaciones objetos que puedan producir incendios, accidentes de circulación u obstaculización la libre circulación.', col2:'4'},
      { col1:'10. Incumplir las disposiciones legales sobre prioridad de paso y la obligación de detenerse en la señal de stop, ceda el paso y en los semáforos con luz roja encendida.', col2:'4'},
      { col1:'11. Incumplir las disposiciones legales sobre adelantamiento poniendo en peligro o entorpeciendo a quienes circulen en sentido contrario y adelantar en lugares o circunstancias de visibilidad reducida.', col2:'4'},
      { col1:'12. Adelantar poniendo en peligro o entorpeciendo a ciclistas.', col2:'4'},
      { col1:'13. Efectuar el cambio de sentido incumpliendo las disposiciones recogidas en esta Ley y en los términos establecidos reglamentariamente.', col2:'3'},
      { col1:'14. Realizar la maniobra de marcha atrás en autopistas y autovías.', col2:'4'},
      { col1:'15. No respetar las señales de los Agentes que regulan la circulación.', col2:'4'},
      { col1:'16. No mantener la distancia de seguridad con el vehículo que le precede.', col2:'4'},
      { col1:'17. Conducir utilizando cascos, auriculares u otros dispositivos que disminuyan la atención a la conducción o utilizar manualmente dispositivos de telefonía móvil, navegadores y cualquier otro sistema de comunicación. Conforme a los avances de la tecnología, se podrán precisar reglamentariamente los dispositivos incluidos en este apartado.', col2:'3'},
      { col1:'18. No hacer uso del cinturón de seguridad, sistemas de retención infantil, casco y demás elementos de protección.', col2:'3 (*4)'},
      { col1: '* FUERA DE ORDENANZA (LTSV) * Utilizar, sujetando con la mano, dispositivos de telefonía móvil mientras se conduce.', col2: '6'}
    ],
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: '',
    paragraphs: ['La detracción de puntos por exceso de velocidad se producirá de acuerdo con lo establecido en el artículo 7 del Anexo I del cuadro de sanciones de la ordenanza de tráfico.',
      'La pérdida de puntos únicamente se producirá cuando el hecho del que se deriva la detracción de puntos se produce con ocasión de la conducción de un vehículo para el que se exija autorización administrativa para conducir.',
      'El crédito de puntos es único para todas las autorizaciones administrativas de las que sea titular el conductor.'
    ],
    tableheader: '',
    table: '',
  },
  {
    title: 'ANEXO III',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: '',
    table: [
      { col1: '', col2: 'Decibelios'},
      { col1: '1. Tractores Agrícolas.', col2: ''},
      { col1: '1.1. Potencia hasta 200 CV (D/N).', col2: '91 dBA'},
      { col1: '1.2. Con potencias de más de 200 CV (D/N).', col2: '91 dBA'},
      { col1: '2. Ciclomotores y vehículos automóviles de cilindrada no superior a 50 cm^3.', col2: ''},
      { col1: '2.1. De dos ruedas.', col2: '82 dBA'},
      { col1: '2.2. De tres ruedas.', col2: '84 dBA'},
      { col1: '3. Motocicletas.', col2: ''},
      { col1: '3.1. Cilindrada superior a 50 cm^3 hasta 80 cm^3.', col2: '80 dBA'},
      { col1: '3.2. Cilindrada superior a 80 cm^3 hasta 125 cm^3.', col2: '82 dBA'},
      { col1: '3.3. Cilindrada superior a 125 cm^3 hasta 350 cm^3.', col2: '85 dBA'},
      { col1: '3.4. Cilindrada superior a 350 cm^3 hasta 500 cm^3.', col2: '87 dBA'},
      { col1: '3.5. Cilindrada superior a 500 cm^3.', col2: '88 dBA'},
      { col1: '4. Vehículos de 3 ruedas.', col2: ''},
      { col1: '4.1. Motocarros de más de 50 cc.', col2: '87 dBA'},
      { col1: '5. Vehículos de 4 ruedas.', col2: ''},
      { col1: '5.1. Vehículos destinados al transporte de personas que tengan hasta 9 plazas, incluida la del conductor.', col2: '82 dBA'},
      { col1: '5.2. Vehículos destinados al transporte de personas que tengan hasta 9 plazas, incluida la del conductor, con un peso máximo autorizado inferior a 3,5 Tm.', col2: '83 dBA'},
      { col1: '5.3. Vehículos destinados al transporte de mercancías con peso máximo inferior a 3,5 Tm.', col2: '88 dBA'},
      { col1: '5.4. Vehículos destinados al transporte de personas que tengan más de 9 plazas, incluida la del conductor, con un peso máximo autorizado a 3,5 Tm. y hasta 5 Tm.', col2: '84 dBA'},
      { col1: '5.5. Vehículos destinados al transporte de mercancías con peso máximo autorizado superior a 3,5 Tm. y hasta 12 Tm.', col2: '88 dBA'},
      { col1: '5.6. Vehículos destinados al transporte de personas que tengan más de 9 plazas, incluida la del conductor, con un peso máximo autorizado superior a 5 Tm.', col2: '87 dBA'}
    ],
  },
  {
    title: 'ANEXO IV',
    chapter: '',
    section: '',
    article: '',
    paragraphs: [''],
    tableheader: '',
    table: '',
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Disposición derogatoria.',
    paragraphs: ['Queda derogada la Ordenanza Fiscal Reguladora de Tráfico del Ayuntamiento de Malagón (ordenanza de tráfico anterior).'],
    tableheader: '',
    table: '',
  },
  {
    title: '',
    chapter: '',
    section: '',
    article: 'Disposición final.',
    paragraphs: ['Esta Ordenanza entrará en vigor una vez se efectue la publicación del texto íntegro de la misma en el Boletín oficial de la Provincia, continuando su vigencia hasta que se acuerde su modificación o derogación.',
      'Contra el presente acuerdo se podrá interponer por los interesados recurso contencioso-administrativo, ante la Sala de lo Contencioso-Administrativo del Tribunal Superior de Justicia de la Comunidad Autónoma de Castilla-La Mancha, en el plazo de dos meses contados a partir del día siguiente al de la publicación de este anuncio, de conformidad con el artículo 46 de la Ley 29/1998, de 13 de julio, Reguladora de la Jurisdicción Contencioso-Administrativa.'],
    tableheader: '',
    table: '',
  },
  ];

  filteredItems: any[] = [];
  searchTerm: string = '';

  constructor(private navCtrl: NavController) {
    this.filteredItems = [...this.items];
  }

  

  highlightText(text: string): string {
    if (!this.searchTerm) {
      return text;
    }
  
    const regex = new RegExp(this.escapeRegExp(this.searchTerm), 'gi');
    return text.replace(regex, '<span class="highlight">$&</span>');
  }
  

  escapeRegExp(term: string): string {
    return term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.filteredItems = [...this.items];
  }

  searchItems(event: any): void {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm === '') {
      this.filteredItems = [...this.items];
    } else {
      this.filteredItems = this.items.filter(item => {
        const titleMatch = item.article.toLowerCase().includes(searchTerm);
        const paragraphsMatch = Array.isArray(item.paragraphs) && item.paragraphs.some(paragraph => paragraph.toLowerCase().includes(searchTerm));
        const tableMatch = Array.isArray(item.table) && item.table.some(table => {
          return Object.values(table).some(value => String(value).toLowerCase().includes(searchTerm));
      });

        
        return titleMatch || paragraphsMatch || tableMatch;
      });
    }
  }
  

  goBack() {
    this.navCtrl.back();
  }
}





