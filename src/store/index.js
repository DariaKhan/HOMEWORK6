import { createStore } from 'vuex';

export default createStore({
  state: {
    projectDescription: {
    title: 'Минималистичные спальни',
    description: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке.В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...».',
    images: ['5-car1.png', '5-car1.png', '5-car1.png']
    }
  },
  getters: {
    projectDescription: state => state.projectDescription
  }
});
