class Sentence{
    constructor(subject, object, verb){
        this.subject = subject
        this.object = object
        this.verb = verb

        if(!this.subject)
            throw new Error('where is the subject?')
    }

    toString(){
        let st= ''
        st+= this.subject + ' '
        if(this.verb)
            st+= this.verb + ' '
        if(this.object)
            st+= this.object
        console.log(st)
    }
}

class SentenceBuilder {
    setSubject(subject){
        this.subject = subject
        return this
    }
    setVerb(verb){
        this.verb = verb
        return this
    }
    setObject(object){
        this.object = object
        return this
    }
    build(){
        return new Sentence(this.subject, this.object, this.verb)
    }
}

const b = new SentenceBuilder()

const s = b.setSubject("Rama")
            .setVerb('killed')
            .setObject('snake')
            .build()
s.toString()

const b1 = new SentenceBuilder()
const s1 = b1.setSubject("I")
            .setVerb('left')
            .build()
s1.toString()