const app = Vue.createApp({
    data() {
      return {
        friends: [
          {
            id: 'main',
            
          },
        
        ],
      };
    },
  });
  
  app.component('friend-contact', {
    template: `
    <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails()">
        {{ detailsAreVisible ? 'All' : 'All' }} developers
      </button>
      <ul v-if="detailsAreVisible">
        <li><strong>Belma Hot:</strong> {{ friend.text1 }}</li>
        <li><strong>Marko Popovic:</strong> {{ friend.text2 }}</li>
        <li><strong>Rejhan Bejtovic:</strong> {{ friend.text3 }}</li>
      </ul>
    </li>
    `,
    data() {
      return {
        detailsAreVisible: false,
        friend: {
          id: 'main',
          text1:  'Programer dobar u oblasti dizajna i programiranja, oblasti: html, css, java script, vue.js, php, c, c++, pohotoshop ... . Zaduzena za sam dizajn sajta. E-majl programera: belmahot122@gmail.com',
          text2:  'Programer dobar u skoro svim oblasti racunarstva programiranja, oblasti: html, css, java script, vue.js, php, c, c++, pohotoshop ... . Zaduzena za samu izradu sajta. E-mejl programera: popovicmarko350@gmail.com',
          text3:  'Programer dobar u oblasti dizajna i programiranja, oblasti: html, css, java script, vue.js, php, c, c++, pohotoshop ... . Zaduzena za samu izdradu sajta i pozivanje sajta sa bazom podataka. E-majl programera: rejhanbejtovic231@gmail.com',
        },
     
      };
    },
    
  
    methods: {
      toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible;
      },
    },
  });
  
  app.mount('#app');







