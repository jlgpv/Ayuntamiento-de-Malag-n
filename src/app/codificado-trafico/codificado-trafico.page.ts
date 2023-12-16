import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavController, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-codificado-trafico',
  templateUrl: './codificado-trafico.page.html',
  styleUrls: ['./codificado-trafico.page.scss'],
})
export class CodificadoTraficoPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content!: IonContent;
  scrollContainer!: HTMLElement;
  additionalHighlights: { paragraph: string, index: number }[] = [];
  text: string = '';
  currentIndex: number = 0;
  currentSearchIndex = 0;
  similarWordsCount: number = 0;
  index: number = 0;  // Agrega esta línea
  searchTerm: string = '';
  searchResults: number[] = [];
  searchExpanded: boolean = false;
  searchIndex: number = 0;
  matchesCount: number = 0;
  totalSearchResults: number = 0;
  words: string[] = [];
  noResults: boolean = false;
  filteredItems: any[] = []; 
onScrollEnd() {
  // Asegúrate de tener resultados de búsqueda y un índice válido
  if (this.searchResults && this.searchResults.length > 0 && this.currentSearchIndex >= 0) {
    const resultIndex = this.searchResults[this.currentSearchIndex];

    // Obtén la posición del elemento que coincide con la búsqueda
    const element = document.getElementById(`result-${resultIndex}`);
    if (element) {
      const elementPosition = element.offsetTop;

      // Desplázate hasta la posición del elemento
      this.content.scrollToPoint(0, elementPosition, 500); // Ajusta la duración del desplazamiento según sea necesario
    }
  }
}


  highlightText(text: string): { text: string, isMatch: boolean, location?: string } {
    const searchTerm = this.searchTerm.toLowerCase();
    const lowerCaseText = text.toLowerCase();
    const startIndex = lowerCaseText.indexOf(searchTerm);
  
    if (startIndex !== -1) {
      const matchedText = text.substr(startIndex, searchTerm.length);
      const highlightedText = `<span class="highlight">${matchedText}</span>`;
      const updatedText = text.replace(new RegExp(searchTerm, 'i'), highlightedText);
      return { text: updatedText, isMatch: true, location: 'some-location' }; // Asigna una ubicación
    } else {
      return { text, isMatch: false };
    }
  }  

  previousWord(): void {
    if (this.additionalHighlights.length > 0) {
      this.currentIndex = (this.currentIndex - 1 + this.additionalHighlights.length) % this.additionalHighlights.length;
      this.showHighlightedWord(this.currentIndex);
    }
  }

  nextWord(): void {
    if (this.additionalHighlights.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.additionalHighlights.length;
      this.showHighlightedWord(this.currentIndex);
    }
  }

  private showHighlightedWord(index: number): void {
    const highlightedWord = this.additionalHighlights[index];
    if (highlightedWord) {
      const element = document.getElementById(`item-${highlightedWord.index}`);
      if (element) {
        this.content.scrollToPoint(0, element.offsetTop, 500);
        setTimeout(() => this.highlightSearchResults(), 500);        
      }
    }
  }

  searchLocations: number[] = [];

  items = [
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

constructor(private navCtrl: NavController, private elementRef: ElementRef) {}

ngOnInit() {
  this.filteredItems = [...this.items]; // Inicializa filteredItems aquí
  // Puedes realizar acciones adicionales en la inicialización del componente si es necesario.
}

async ngAfterViewInit() {
  this.scrollContainer = await this.content.getScrollElement();
}

expandSearchbar(): void {
  this.searchExpanded = !this.searchExpanded;
}

clearSearch(): void {
  this.searchTerm = '';
  this.resetSearch();
}

resetSearch(): void {
  this.searchResults = [];
  this.currentIndex = 0;
  this.matchesCount = 0;
  this.totalSearchResults = 0;
  this.noResults = false;
}

calculateSearchLocations(): void {
  this.searchLocations = this.searchResults.map(resultIndex => {
    const element = document.getElementById(`result-${resultIndex}`);
    return element ? element.offsetTop : 0;
  });
}

searchItems(event: any): void {
  const searchTerm = event.target.value.toLowerCase().trim();

  if (searchTerm === '') {
    this.currentSearchIndex = 0;
    this.scrollToSearchResult();
    this.calculateSearchLocations(); // Agrega esta línea
    this.matchesCount = 0;
    this.totalSearchResults = 0;
    this.noResults = false;
  } else {
    const searchTermRegex = new RegExp(`(${searchTerm.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'gi');
    const pageText = this.items.reduce((text, item) => {
      text += `${item.title} ${item.chapter} ${item.section} ${item.article} ${item.paragraphs.join(' ')}`;

      if (item.tableheader) {
        text += `${item.tableheader} `;
      }
      if (item.table) {
        if (Array.isArray(item.table)) {
          text += item.table.map(row => Object.values(row).join(' ')).join(' ');
        }
      }
      return text;
    }, '');

    const matches = [...pageText.matchAll(searchTermRegex)];

    if (matches.length > 0) {
      this.totalSearchResults = matches.length;
      this.matchesCount = 1; // Restablece las coincidencias a 1 cuando se inicia una nueva búsqueda
      this.searchResults = matches.map(match => match.index as number);
    } else {
      this.noResults = true;
      this.totalSearchResults = 0;
    }
  }

  this.currentSearchIndex = 0;
  this.scrollToSearchResult();
}

private resetSearchContent(): void {
  this.searchResults.forEach(resultIndex => {
    const resultElement = document.getElementById(`item-${resultIndex}`);
    if (resultElement) {
      // Eliminar el resaltado existente
      this.removeHighlights(resultElement);

      // Restablecer el contenido original
      resultElement.innerHTML = this.getHighlightedText(this.items[resultIndex], this.searchTerm);
    }
  });
}

private removeHighlights(element: HTMLElement): void {
  const highlightedElements = element.querySelectorAll('.highlighted');

  // Iterar sobre los elementos resaltados y quitar la clase de resaltado
  highlightedElements.forEach(highlightedElement => {
    highlightedElement.classList.remove('highlighted');
  });
}

nextSearchResult(): void {
  if (this.totalSearchResults > 0) {
    this.currentSearchIndex = (this.currentSearchIndex + 1) % this.totalSearchResults;
    this.scrollToSearchResult();
  }
}

previousSearchResult(): void {
  if (this.totalSearchResults > 0) {
    this.currentSearchIndex = (this.currentSearchIndex - 1 + this.totalSearchResults) % this.totalSearchResults;
    this.scrollToSearchResult();
  }
}

scrollToSearchResult() {
  if (this.totalSearchResults > 0 && this.currentSearchIndex >= 0 && this.currentSearchIndex < this.totalSearchResults) {
    const resultIndex = this.searchResults[this.currentSearchIndex];
    const element = document.getElementById(`item-${resultIndex}`);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      this.highlightSearchResults();
    }
  }
}

private scrollToLocation(index: number): void {
  const resultIndex = this.searchResults[index];
  const element = document.getElementById(`item-${resultIndex}`);

  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    this.highlightSearchResults();
  } else {
    console.error('Element not found for index:', resultIndex);
  }
}

getHighlightedText(item: any, searchTerm: string): string {
  // Ejemplo simplificado (puedes mejorar esto según tus necesidades):
  const regex = new RegExp(`(${searchTerm.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'gi');
  const propertiesToSearch = ['title', 'chapter', 'section', 'article', 'tableheader'];

  const highlightedContent = propertiesToSearch.reduce((text, prop) => {
    const propValue = item[prop];
    if (propValue) {
      const highlightedText = propValue.replace(regex, '<span class="highlight">$1</span>');
      text += highlightedText + ' ';
    }
    return text;
  }, '');

  return highlightedContent;
}

scrollIntoView(element: HTMLElement | null): void {
  if (element) {
    console.log('Element to scroll to:', element);
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

private highlightSearchResults(): void {
  console.log('Highlighting search results');
  const searchTermRegex = new RegExp(`(${this.searchTerm})`, 'gi');

  this.searchResults.forEach(resultIndex => {
    const resultElement = document.getElementById(`item-${resultIndex}`);
    if (resultElement) {
      this.highlightTextNodes(resultElement, searchTermRegex);
    }
  });
}

onArrowUpClick(): void {
  this.previousSearchResult();
}

onArrowDownClick(): void {
  this.nextSearchResult();
}

private highlightTextNodes(element: HTMLElement, searchTermRegex: RegExp): void {
  element.childNodes.forEach(node => {
    if (node.nodeType === 3) { // Text node
      const originalText = node.nodeValue!;
      const highlightedText = originalText.replace(searchTermRegex, (match) => `<span class="highlighted">${match}</span>`);
      const span = document.createElement('span');
      span.innerHTML = highlightedText;
      node.replaceWith(span);
    } else if (node.nodeType === 1) { // Element node
      this.highlightTextNodes(node as HTMLElement, searchTermRegex);
    }
  });
}

toggleSearchbar(): void {
  this.searchExpanded = !this.searchExpanded;
}

goBack() {
  this.navCtrl.back();
}
}