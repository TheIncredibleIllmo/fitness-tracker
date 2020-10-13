"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.TrainingService = void 0;
var core_1 = require("@angular/core");
var TrainingService = /** @class */ (function () {
    function TrainingService() {
        this.availableExercises = [
            { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
            { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
            { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
            { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 },
        ];
    }
    TrainingService.prototype.getTranings = function () {
        return __spreadArrays(this.availableExercises);
    };
    TrainingService = __decorate([
        core_1.Injectable()
    ], TrainingService);
    return TrainingService;
}());
exports.TrainingService = TrainingService;
