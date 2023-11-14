import FilmeRepositorioInterface from "./filme_repositorio_interface";

export default class ListaFilme{
    //Construtor
    constructor(
        readonly filmeRepositorio:FilmeRepositorioInterface
    ){}
    //executar
    public async executar(){
        return this.filmeRepositorio.listar()
    }
}