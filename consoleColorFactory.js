class ColorConsole {
    constructor(color){
        this.color = color
    }
    logs(){
        console.log(`I'm a ${this.color} console`)
    }
}

class RedConsole extends ColorConsole {
    constructor(){
        super('red')
    }
}

class BlueConsole extends ColorConsole {
    constructor(){
        super('blue')
    }
}

class GreenConsole extends ColorConsole {
    constructor(){
        super('green')
    }
}

class ColorFactory {
    static create(type) {
        const colorMap = {
            'red': new RedConsole(),
            'blue': new BlueConsole(),
            'green': new GreenConsole()
        }
        return colorMap[type]
    }
}


const f = ColorFactory.create('red')
f.logs()