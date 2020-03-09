const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    START:  Symbol("start"),
    NUMBER: Symbol("number"),
    COLOR: Symbol( "color"),
    HELL: Symbol("hell"),
    HEAVEN: Symbol("heaven"),
    SECRET: Symbol("secret")
});
module.exports = class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                if(sInput.toLowerCase().match("hello")){
                sReply = "Welcome to the stranger house of woods. Do you want to come in? Yes or No ?";
                this.stateCur = GameState.START;
                }
                else{
                    sReply = "Write hello to start the game";
                }
                break;
            case GameState.START:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "You walk into the house and see a lovely kitchen. On the table there were 3 wine glass. Which one will you choose 1,2,3 ?";
                    this.stateCur = GameState.NUMBER;
                }else if(sInput.toLowerCase().match("no")){
                    sReply ="End of game?";   
                }
                else{
                sReply = "Please select yes or no."
                }
                break;
            case GameState.NUMBER:
                if(sInput.toLowerCase().match("1")){
                    sReply = "Well done you select the glass number 1. Tell me the color the that wine Red,Green,Blue?"
                    this.stateCur = GameState.COLOR
                }
                else if(sInput.toLowerCase().match("2")){
                    sReply = "Well done you select the glass number 2. Tell me the color the that wine Red,Green,Blue?";
                    this.stateCur = GameState.COLOR;
                }
                else if(sInput.toLowerCase().match("3")){
                    sReply = "Well done you select the glass number 3. Tell me the color the that wine Red,Green,Blue?";
                    this.stateCur = GameState.COLOR;
                }
                else{
                    sReply ="Select 1 or 2 or 3.";
                }
                break;
            case GameState.COLOR:
                if(sInput.toLowerCase().match("red")){
                    sReply = "Did you just select the Red color wine??. You just opened the door of Hell. Do you wanna know why it happened?.";
                    this.stateCur = GameState.HELL;

                }
                else if(sInput.toLowerCase().match("green")){
                    sReply = "Did you just select the Green color wine??. You will find a path to Heaven. Do you Wanna go on?";
                    this.stateCur = GameState.HEAVEN;
                }
                else if(sInput.toLowerCase().match("blue")){
                    sReply = "Did you just select the Blue color wine??. You have a secret love. Don't waste your time just go and tell her. Fight for your love";
                    this.stateCur = GameState.SECRET;
                }
                else{
                    sReply = "Choose your right.";
                }
                break;
            case GameState.HELL:
                if(sInput.toLowerCase().match("why")){
                    sReply = "You killed someone and burn the body so that no one will know about your mistakes. Your soul is dark. You will spend your life in the hell.";
                }else{
                    sReply = "End of game";
                    this.stateCur = GameState.HEAVEN;
                }
                break;
             case GameState.HEAVEN:
                if(sInput.toLowerCase().match("go")){
                    sReply = "You have done so much good things in your life. Now its my turn to give you a peaceful life. Enjoy the life of heaven";
                }else{
                    sReply = "End of game";
                    this.stateCur = GameState.HEAVEN;
                }
                break;
             case GameState.SECRET:
                if(sInput.toLowerCase().match("fight")){
                    sReply = "You will marry the girl you love and can spend your life with her and a dreaming days. Follow the circle of life. Be happy.";
                }else{
                    sReply = "End of game";
                    this.stateCur = GameState.HEAVEN;
                }
                break;
        }
        return([sReply]);
    }
}