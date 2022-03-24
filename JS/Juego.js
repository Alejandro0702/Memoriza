
class Juego{
    
    state_memorizar = new State();
    state_responder = new State();
    state_perder = new State();
    state = new State();
    state = state_perder();

    constructor(){
        this.state_memorizar = new State_Memorizar(this);
        this.state_responder = new State_Responder(this);
        this.state_perder = new State(this);
    }

}
