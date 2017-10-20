"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = require("./Pessoa");
var PessoaDao = /** @class */ (function () {
    function PessoaDao() {
        this.nomeTable = 'tb_pessoa';
    }
    PessoaDao.prototype.Insert = function (object) {
        console.log('Inserir Pessoa dao');
        return true;
    };
    PessoaDao.prototype.Atualizar = function (object) {
        console.log('Atualizar Pessoa dao ');
        return true;
    };
    PessoaDao.prototype.Remover = function (id) {
        console.log('Deletar Pessoa dao');
        return new Pessoa_1.Pessoa('', '');
    };
    PessoaDao.prototype.select = function (id) {
        console.log('Localizar 1 Pessoa dao');
        return new Pessoa_1.Pessoa('', '');
    };
    PessoaDao.prototype.selecionarTodos = function () {
        console.log('Localizar Todos  Pessoa dao');
        return [new Pessoa_1.Pessoa('', '')];
    };
    return PessoaDao;
}());
exports.PessoaDao = PessoaDao;
