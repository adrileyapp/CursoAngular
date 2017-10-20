export interface daointerface<T>{
    nomeTable : string;
    Insert(object :T)    : boolean; 
    Atualizar(object : T) : boolean;     
    Remover(id :number)     :T; 
    select (id:number) : T;
    selecionarTodos():[T];
    
    
}