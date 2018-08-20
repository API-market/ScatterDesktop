import {Blockchains} from './Blockchains';
import IdGenerator from '../util/IdGenerator';

export default class Token {
    constructor(_name = '', _address = '0xasdf', blockchain = Blockchains.EOS){
        this.id = IdGenerator.numeric(12);
        this.name = _name;
        this.address = _address;
        this.blockchain = blockchain;
    }

    static placeholder(){ return new Token(); }

    static fromJson(json){
        const p = Object.assign(Token.placeholder(), json);
        return p;
    }
}
