@valueOf
class Index {

    constructor (name, age) {
        this.name = name
        this.age = age
    }

    toString () {
        return `${this.name} is ${this.age}!`
    }

}

function valueOf(target) {
    let vo = () => Math.round(Math.random() * 1000)
    target.prototype.valueOf = vo 
}

var index = new Index('yiifee', 24);
alert(index)
alert(+index)