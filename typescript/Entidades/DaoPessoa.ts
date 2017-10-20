import { Pessoa } from './Pessoa'; 
import { daointerface } from './daoInterface'; 
export class PessoaDao implements daointerface{

    nomeTable: string = 'tb_pessoa';
    Insert(object: any): boolean {
       console.log('Inserir Pessoa dao');
       return true;
    }
    Atualizar(object: any): boolean {
        console.log('Atualizar Pessoa dao ');
        return true;
    }
    Remover(id: number) {
        console.log('Deletar Pessoa dao');
        return new Pessoa('','');
    }
    select(id: number) :Pessoa{
        console.log('Localizar 1 Pessoa dao');
        return new Pessoa('','');
    }
    selecionarTodos(): [any] {
        console.log('Localizar Todos  Pessoa dao');
        return [new Pessoa('','')];
    }
    
}