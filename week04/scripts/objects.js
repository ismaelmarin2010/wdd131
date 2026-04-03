let person = {
    name: "Antonia Francesca",
    age: 30,
    profession: "Software Engineer",
    hobbies: ["reading", "playing guitar", "hiking"],
    address: {
        street: "123 Camino Real",
        city: "Santa Rosa",
        country: "Honduras"
    },
    isEmployed: true,
    greet: function () {
        console.log(`Hello, my name is ${this.name}.`);
    }
};

console.log(person['isEmployed']);   // bracket notation
console.log(person.hobbies[0]);   // dot notation
console.log(person.age);   // dot notation
console.log(person['address'].city);   // combined notation