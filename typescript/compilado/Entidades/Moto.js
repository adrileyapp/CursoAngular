"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Veiculo_1 = require("./Veiculo");
var Motos = /** @class */ (function (_super) {
    __extends(Motos, _super);
    function Motos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Motos.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 20;
    };
    return Motos;
}(Veiculo_1.Veiculo));
exports.Motos = Motos;
