"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTable = 'tb_pessoa';
    }
    Dao.prototype.Insert = function (object) {
        console.log('Inserir Generico');
        return true;
    };
    Dao.prototype.Atualizar = function (object) {
        console.log('Atualizar Generico ');
        return true;
    };
    Dao.prototype.Remover = function (id) {
        console.log('Deletar Generico');
        return Object();
    };
    Dao.prototype.select = function (id) {
        console.log('LocalizarGenerico');
        return Object();
    };
    Dao.prototype.selecionarTodos = function () {
        console.log('Localizar Generico');
        return [Object()];
    };
    return Dao;
}());
exports.Dao = Dao;
