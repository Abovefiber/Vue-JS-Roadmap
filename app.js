const app = Vue.createApp({
    data(){
        return {
            name: 'Andrei Sibucao',
            age: 21,
            age_in_five: 21 + 5,
            favoriteNumber: Math.random(0, 1),
            image: 'drei.jpg'
        };
    }
});

app.mount('#assignment');