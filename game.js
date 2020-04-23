



/////////CARDS////////
function createCard(){
    return class{
        constructor(title, number, image=""){
            this.title = title
            this.number= number
            this.image=image
          
        }
    }
    }
    
    const Card= createCard();
    
    const CARDS=[{
        title: "Princess",
        number: "8",
        numInDeck:"1"
    },{
        title: "Countess",
        number: "7",
        numInDeck:"1"
    },
    {
        title: "King",
        number: "6",
        numInDeck:"1"
    },
    {
        title: "Prince",
        number: "5",
        numInDeck:"2"
    },
    {
        title: "Handmaid",
        number: "4",
        numInDeck:"2"
    },
    {
        title: "Baron",
        number: "3",
        numInDeck:"2"
    },
    {
        title: "Priest",
        number: "2",
        numInDeck:"2"
    },
    {
        title: "Guard",
        number: "1",
        numInDeck:"5"
    }
    ]
    


    ////////Players//////



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


    /////GAME

function createGame(){
    return class{
        construtor(...players){
            this.players=[]
            this.turn=0
            this.over= false
            this.deck=[]
            this.removedCard=nil
            this.victoryCount=0
        }
        startGame(){
    
        }
        populateDeck(){
            console.log(CARDS)
            for(const c of CARDS){
               let number = c.numInDeck
                let card= new Card(c.title, c.number)
                console.log(card)
                for(let i=0; i<number; i++){
                   
                   deck().push(card)
                }
            }
            console.log(this.deck)
        }
        deal(deck, players){
    
        }
        get deck(){
            return this.deck
        }
    }
    }
    const Game= createGame()
   
   
    ////////main
   let g= new Game()
   g.populateDeck()



