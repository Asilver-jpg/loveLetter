

function createPlayer(){
return class{
    constructor(name){
        this.name=name
        this.hand=[]
        this.tokensOfAffection=0;
        this.in= true;
    }
}

}

const Player = createPlayer()