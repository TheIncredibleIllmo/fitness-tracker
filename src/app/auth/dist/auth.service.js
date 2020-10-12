"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthService = void 0;
var rxjs_1 = require("rxjs");
var core_1 = require("@angular/core");
var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        this.authChange = new rxjs_1.Subject();
    }
    AuthService.prototype.registerUser = function (authData) {
        this.setUserInLocalStorage({
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        });
        this.authSuccessfully();
    };
    AuthService.prototype.login = function (authData) {
        this.setUserInLocalStorage({
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        });
        this.authSuccessfully();
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
        this.authChange.next(false);
        this.router.navigate(['/login']);
    };
    AuthService.prototype.getUser = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        return __assign({}, user);
    };
    AuthService.prototype.isAuth = function () {
        var user = this.getUser();
        return Object.keys(user).length !== 0 && user !== null;
    };
    AuthService.prototype.authSuccessfully = function () {
        this.authChange.next(true);
        this.router.navigate(['/training']);
    };
    AuthService.prototype.setUserInLocalStorage = function (user) {
        if (!user)
            return;
        localStorage.setItem('user', JSON.stringify(user));
    };
    AuthService = __decorate([
        core_1.Injectable()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
