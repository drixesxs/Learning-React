const dog = {
    name: 'lucy',
    legs: 4,
    color: 'brown',
    age: 3,
    bark: function(){
        return 'woof woof'
    },
    breed: 'austracian',
    getDoginfo: function(){
        return `${this.name} is an ${this.breed} dog, she is ${this.color} has ${this.legs} legs and is ${this.age} years old `
        this.bark()
    }
}



console.log(dog.getDoginfo())