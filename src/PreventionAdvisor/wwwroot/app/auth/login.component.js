"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var auth_service_1 = require("./auth.service");
var user_1 = require("./user");
var LoginComponent = (function () {
    function LoginComponent(_authService) {
        this._authService = _authService;
        this.pageTitle = 'Login';
        this.user = new user_1.User();
    }
    LoginComponent.prototype.login = function () {
        this._authService.login(this.user).subscribe(function (data) { return console.log(data); });
    };
    LoginComponent.prototype.logout = function () {
        this._authService.logout().subscribe(function (data) { return console.log(data); });
    };
    LoginComponent.prototype.download = function () {
        this._authService.downloadReport().subscribe(function (data) { return console.log(data); });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/auth/login.component.html'
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map