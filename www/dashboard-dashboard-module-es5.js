(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Dashboard</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row style=\"text-align: center;\" *ngFor=\"let data of resp\">\n    <ion-col>\n      <ion-item-sliding>\n        <ion-item-options side=\"start\">\n          <ion-item-option (click)=\"favorite(item)\"><ion-icon slot=\"icon-only\" name=\"create\"></ion-icon></ion-item-option>          \n        </ion-item-options>\n\n        <ion-item lines=\"none\">\n           \n          <ion-thumbnail slot=\"start\">           \n            <img src=\"assets/images/initiated_admission.png\" *ngIf=\"data.status == 'Initiated'\">\n            <img src=\"assets/images/accepted_admission.png\" *ngIf=\"data.status == 'Accepted'\">\n            <img src=\"assets/images/patient_arrived.png\" *ngIf=\"data.status == 'Patient Arrived'\">\n            <img src=\"assets/images/patient_discharged.png\" *ngIf=\"data.status == 'Discharged'\">\n            <p>{{data?.status}}</p>\n          </ion-thumbnail>\n          <ion-label color=\"primary\">              \n            <p>\n                {{data?.transactionNumber}}\n            </p>\n            <p>\n                {{data?.firstName}}\n            </p>\n            <p>\n                {{data?.lastName}}\n            </p>\n            <p>\n                {{data?.gender}}\n            </p>\n\n          </ion-label>\n\n        </ion-item>\n\n        <ion-item-options side=\"end\">\n            <ion-item-option [routerLink]=\"['/details']\">                \n                <ion-icon slot=\"icon-only\" name=\"eye\" ></ion-icon>\n              </ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-col>\n  </ion-row>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button [routerLink]=\"['/transfer']\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/dashboard/dashboard.page.ts");







var routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]
    }
];
var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.page.scss":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-thumbnail {\n  width: 60px;\n  text-align: center;\n  height: 60px;\n}\nion-thumbnail p {\n  margin: 0px;\n  font-size: 9px;\n}\nion-row {\n  padding: 10px;\n  background: #f4f4f4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0Y6XFxQcm9qZWN0c1xcU3luY0FwcFRpY3Mvc3JjXFxhcHBcXGRhc2hib2FyZFxcZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0o7QURBSTtFQUNJLFdBQUE7RUFFQSxjQUFBO0FDQ1I7QURFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGh1bWJuYWlse1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBwe1xyXG4gICAgICAgIG1hcmdpbjogMHB4OyAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICB9XHJcbn1cclxuaW9uLXJvd3tcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xyXG59XHJcbiIsImlvbi10aHVtYm5haWwge1xuICB3aWR0aDogNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDYwcHg7XG59XG5pb24tdGh1bWJuYWlsIHAge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiA5cHg7XG59XG5cbmlvbi1yb3cge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.page.ts":
/*!*********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.ts ***!
  \*********************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardPage = /** @class */ (function () {
    function DashboardPage() {
        this.resp = [];
    }
    DashboardPage.prototype.ngOnInit = function () {
        this.resp.push({
            status: "Initiated",
            transactionNumber: "08032019-01",
            firstName: "Adam",
            lastName: "Micheal",
            gender: "Male"
        }, {
            status: "Patient Arrived",
            transactionNumber: "08032019-01",
            firstName: "Bosh",
            lastName: "David",
            gender: "Male"
        }, {
            status: "Discharged",
            transactionNumber: "08032019-01",
            firstName: "Deny",
            lastName: "Qube",
            gender: "Female"
        }, {
            status: "Accepted",
            transactionNumber: "08032019-01",
            firstName: "Adam",
            lastName: "Mune",
            gender: "Male"
        });
    };
    DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.page.html"),
            styles: [__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/dashboard/dashboard.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardPage);
    return DashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map