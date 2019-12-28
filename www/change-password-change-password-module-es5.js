(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-password-change-password-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/change-password/change-password.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/change-password/change-password.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <ion-row class=\"ion-align-items-center sign-in-image\">\n      <ion-col size=\"12\">\n        <h1>Change Password\n          <hr>\n        </h1>\n      </ion-col>\n  \n      <ion-col size=\"12\">\n        <ion-img src=\"assets/images/logo.png\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col>\n          <ion-item-divider>\n            <ion-icon name=\"key\"></ion-icon>\n            <ion-input clearInput value=\"\" placeholder=\"Enter New Password\"></ion-input>\n          </ion-item-divider>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col>\n            <ion-item-divider>\n              <ion-icon name=\"key\"></ion-icon>\n              <ion-input clearInput value=\"\" placeholder=\"Confirm Password\"></ion-input>\n            </ion-item-divider>\n          </ion-col>\n        </ion-row>\n  <ion-row style=\"text-align: center;\">\n      <ion-col>\n        <ion-button color=\"danger\">\n          <ion-ripple-effect></ion-ripple-effect>Submit\n        </ion-button>\n      </ion-col>\n    </ion-row>  \n  \n  \n  </ion-content>"

/***/ }),

/***/ "./src/app/change-password/change-password.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/change-password/change-password.module.ts ***!
  \***********************************************************/
/*! exports provided: ChangePasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-password.page */ "./src/app/change-password/change-password.page.ts");







var routes = [
    {
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPage"]
    }
];
var ChangePasswordPageModule = /** @class */ (function () {
    function ChangePasswordPageModule() {
    }
    ChangePasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPage"]]
        })
    ], ChangePasswordPageModule);
    return ChangePasswordPageModule;
}());



/***/ }),

/***/ "./src/app/change-password/change-password.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/change-password/change-password.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-img {\n  height: 150px;\n}\n\n.sign-in-image {\n  height: 50%;\n  color: #004996;\n  text-align: center;\n}\n\nion-row {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbmdlLXBhc3N3b3JkL0Y6XFxQcm9qZWN0c1xcU3luY0FwcFRpY3Mvc3JjXFxhcHBcXGNoYW5nZS1wYXNzd29yZFxcY2hhbmdlLXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUE7RUFDQSxhQUFBO0FDR0EiLCJmaWxlIjoic3JjL2FwcC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbWd7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG59XHJcbi5zaWduLWluLWltYWdle1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBjb2xvcjojMDA0OTk2O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmlvbi1yb3d7XHJcbnBhZGRpbmc6IDEwcHg7XHJcbn1cclxuIiwiaW9uLWltZyB7XG4gIGhlaWdodDogMTUwcHg7XG59XG5cbi5zaWduLWluLWltYWdlIHtcbiAgaGVpZ2h0OiA1MCU7XG4gIGNvbG9yOiAjMDA0OTk2O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1yb3cge1xuICBwYWRkaW5nOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/change-password/change-password.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/change-password/change-password.page.ts ***!
  \*********************************************************/
/*! exports provided: ChangePasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function() { return ChangePasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChangePasswordPage = /** @class */ (function () {
    function ChangePasswordPage() {
    }
    ChangePasswordPage.prototype.ngOnInit = function () {
    };
    ChangePasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! raw-loader!./change-password.page.html */ "./node_modules/raw-loader/index.js!./src/app/change-password/change-password.page.html"),
            styles: [__webpack_require__(/*! ./change-password.page.scss */ "./src/app/change-password/change-password.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=change-password-change-password-module-es5.js.map