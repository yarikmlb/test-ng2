"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var _1 = require("./square/");
var AppComponent = (function () {
    function AppComponent() {
        this.list = [];
        this.value = '';
        this.count = 0;
        this.result = [];
        this.gameOver = false;
        this.circleWin = false;
        this.crossWin = false;
        this.draw = false;
        this.generateGame(9);
    }
    AppComponent.prototype.generateGame = function (count) {
        for (var i = 0; i < count; i++) {
            this.list.push(this.createSquare());
        }
    };
    AppComponent.prototype.createSquare = function () {
        return { value: '' };
    };
    AppComponent.prototype.changeValue = function (square) {
        if (this.count % 2 === 0 && square.value === '' && this.result.length < 9) {
            square.value = 1;
            this.count += 1;
            this.result.push(square);
        }
        else if (this.count % 2 !== 0 && square.value === '' && this.result.length < 9) {
            square.value = 0;
            this.count += 1;
            this.result.push(square);
            console.log(this.result);
        }
        this.findResult(this.list);
    };
    AppComponent.prototype.findResult = function (array) {
        if (this.checkCross(array)) {
            this.gameOver = true;
            this.crossWin = true;
            this.circleWin = false;
        }
        else if (this.checkCircle(array)) {
            this.gameOver = true;
            this.circleWin = true;
            this.crossWin = false;
        }
        else if (!this.checkCircle(array) && !this.checkCross(array) && this.result.length === 8) {
            this.gameOver = true;
            this.crossWin = false;
            this.circleWin = false;
            this.draw = true;
        }
    };
    AppComponent.prototype.checkCross = function (array) {
        return (array[0].value === array[1].value && array[1].value === array[2].value && array[2].value === 1 ||
            array[0].value === array[3].value && array[3].value === array[6].value && array[6].value === 1 ||
            array[0].value === array[4].value && array[4].value === array[8].value && array[8].value === 1 ||
            array[1].value === array[4].value && array[4].value === array[7].value && array[7].value === 1 ||
            array[2].value === array[5].value && array[5].value === array[8].value && array[8].value === 1 ||
            array[3].value === array[4].value && array[4].value === array[5].value && array[5].value === 1 ||
            array[6].value === array[7].value && array[7].value === array[8].value && array[8].value === 1 ||
            array[6].value === array[4].value && array[4].value === array[2].value && array[2].value === 1);
    };
    AppComponent.prototype.checkCircle = function (array) {
        return (array[0].value === array[1].value && array[1].value === array[2].value && array[2].value === 0 ||
            array[0].value === array[3].value && array[3].value === array[6].value && array[6].value === 0 ||
            array[0].value === array[4].value && array[4].value === array[8].value && array[8].value === 0 ||
            array[1].value === array[4].value && array[4].value === array[7].value && array[7].value === 0 ||
            array[2].value === array[5].value && array[5].value === array[8].value && array[8].value === 0 ||
            array[3].value === array[4].value && array[4].value === array[5].value && array[5].value === 0 ||
            array[6].value === array[7].value && array[7].value === array[8].value && array[8].value === 0 ||
            array[6].value === array[4].value && array[4].value === array[2].value && array[2].value === 0);
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css'],
            directives: [_1.SquareComponent]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map