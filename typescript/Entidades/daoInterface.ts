export interface daointerface{
    nomeTable : string;
    Insert(object : any)    : boolean; 
    Atualizar(object : any) : boolean;     
    Remover(id :number)     : any; 
    select (id:number) : any;
    selecionarTodos():[any];
    
    
}