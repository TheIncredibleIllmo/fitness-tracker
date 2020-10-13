"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var animations_1 = require("@angular/platform-browser/animations");
var flex_layout_1 = require("@angular/flex-layout");
var app_routing_module_1 = require("./app-routing.module");
var material_module_1 = require("./material.module");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var app_component_1 = require("./app.component");
var signup_component_1 = require("./auth/signup/signup.component");
var login_component_1 = require("./auth/login/login.component");
var training_component_1 = require("./training/training.component");
var current_training_component_1 = require("./training/current-training/current-training.component");
var new_training_component_1 = require("./training/new-training/new-training.component");
var past_trainings_component_1 = require("./training/past-trainings/past-trainings.component");
var welcome_component_1 = require("./welcome/welcome.component");
var header_component_1 = require("./navigation/header/header.component");
var sidenav_list_component_1 = require("./navigation/sidenav-list/sidenav-list.component");
var stop_training_component_1 = require("./training/stop-training/stop-training.component");
var auth_service_1 = require("./auth/auth.service");
var training_service_1 = require("./training/training.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                signup_component_1.SignupComponent,
                login_component_1.LoginComponent,
                training_component_1.TrainingComponent,
                current_training_component_1.CurrentTrainingComponent,
                new_training_component_1.NewTrainingComponent,
                past_trainings_component_1.PastTrainingsComponent,
                welcome_component_1.WelcomeComponent,
                header_component_1.HeaderComponent,
                sidenav_list_component_1.SidenavListComponent,
                stop_training_component_1.StopTrainingComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                material_module_1.MaterialModule,
                app_routing_module_1.AppRoutingModule,
                flex_layout_1.FlexLayoutModule,
                forms_1.FormsModule,
                forms_2.ReactiveFormsModule,
            ],
            providers: [auth_service_1.AuthService, training_service_1.TrainingService],
            bootstrap: [app_component_1.AppComponent],
            entryComponents: [stop_training_component_1.StopTrainingComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
