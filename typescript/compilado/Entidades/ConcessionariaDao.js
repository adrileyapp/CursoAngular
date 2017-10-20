"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = require("./Concessionaria");
var ConcessionariaDao = /** @class */ (function () {
    function ConcessionariaDao() {
        this.nomeTable = 'tb_Concessionaria';
    }
    ConcessionariaDao.prototype.Insert = function (object) {
        console.log('Inserir');
        return true;
    };
    ConcessionariaDao.prototype.Atualizar = function (object) {
        console.log('Atualizar');
        return true;
    };
    ConcessionariaDao.prototype.Remover = function (id) {
        console.log('Deletar');
        return null;
    };
    ConcessionariaDao.prototype.select = function (id) {
        console.log('Localizar 1');
        return new Concessionaria_1.Concessionaria('', []);
    };
    ConcessionariaDao.prototype.selecionarTodos = function () {
        console.log('Localizar Todos ');
        return [new Concessionaria_1.Concessionaria('', [])];
    };
    return ConcessionariaDao;
}());
exports.ConcessionariaDao = ConcessionariaDao;
