import { daointerface } from './daoInterface';
export  class Dao<T> implements daointerface<T>
{
 nomeTable: string = 'tb_pessoa';
    Insert(object: T): boolean {
       console.log('Inserir Generico');
       return true;
    }
    Atualizar(object: T): boolean {
        console.log('Atualizar Generico ');
        return true;
    }
    Remover(id: number) {
        console.log('Deletar Generico');
        return Object();
    }
    select(id: number) :T{
        console.log('LocalizarGenerico');
       return Object();
    }
    selecionarTodos(): [T] {
        console.log('Localizar Generico');
        return [Object()];
    }
    
}