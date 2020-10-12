"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SidenavListComponent = void 0;
var core_1 = require("@angular/core");
var SidenavListComponent = /** @class */ (function () {
    function SidenavListComponent(authService) {
        this.authService = authService;
        this.sidenavClosed = new core_1.EventEmitter();
        this.isAuth = false;
    }
    SidenavListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authSubscription = this.authService.authChange.subscribe(function (authStatus) {
            _this.isAuth = authStatus;
        });
    };
    SidenavListComponent.prototype.ngOnDestroy = function () {
        this.authSubscription.unsubscribe();
    };
    SidenavListComponent.prototype.closeSidenav = function () {
        this.sidenavClosed.emit();
    };
    SidenavListComponent.prototype.logout = function () {
        this.closeSidenav();
        this.authService.logout();
    };
    __decorate([
        core_1.Output()
    ], SidenavListComponent.prototype, "sidenavClosed");
    SidenavListComponent = __decorate([
        core_1.Component({
            selector: 'app-sidenav-list',
            templateUrl: './sidenav-list.component.html',
            styleUrls: ['./sidenav-list.component.css']
        })
    ], SidenavListComponent);
    return SidenavListComponent;
}());
exports.SidenavListComponent = SidenavListComponent;
