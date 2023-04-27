import { LightningElement, track } from 'lwc';

export default class CalculoImc extends LightningElement {
    @track nome;
    @track peso;
    @track altura;
    @track imc;

    handleChangeNome(event) {
        this.nome = event.target.value;
    }

    handleChangePeso(event) {
        this.peso = event.target.value;
    }

    handleChangeAltura(event) {
        this.altura = event.target.value;
    }

    handleClick() {
        const alturaMetros = this.altura / 100;
        const imc = (this.peso / (alturaMetros * alturaMetros)).toFixed(2);
        this.imc = imc;
    }
}

