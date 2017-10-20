import { Veiculo } from './Veiculo';
export class Motos extends Veiculo {
    public acelerar(): void {
        this.velocidade = this.velocidade + 20
    }
}
