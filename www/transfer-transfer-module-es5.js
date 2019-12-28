(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transfer-transfer-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/transfer/transfer.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/transfer/transfer.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Transfer Form</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-segment color=\"secondary\" scrollable (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button [checked]=\"tab == 'home'\" value=\"home\">\n      <ion-icon name=\"person\"></ion-icon>\n      <ion-label>General Info</ion-label>\n    </ion-segment-button>\n    <ion-segment-button [checked]=\"tab == 'insurance'\" value=\"insurance\">\n      <ion-icon name=\"medical\"></ion-icon>\n      <ion-label>Insurance</ion-label>\n    </ion-segment-button>\n    <ion-segment-button [checked]=\"tab == 'history'\" value=\"history\">\n      <ion-icon name=\"clipboard\"></ion-icon>\n      <ion-label>Medical History</ion-label>\n    </ion-segment-button>\n    <ion-segment-button [checked]=\"tab == 'morders'\" value=\"morders\">\n      <ion-icon name=\"medkit\"></ion-icon>\n      <ion-label>Medication Orders</ion-label>\n    </ion-segment-button>\n    <ion-segment-button [checked]=\"tab == 'dorders'\" value=\"dorders\">\n      <ion-icon name=\"male\"></ion-icon>\n      <ion-label>Diagnostic Orders</ion-label>\n    </ion-segment-button>\n    <ion-segment-button [checked]=\"tab == 'consult'\" value=\"consult\">\n      <ion-icon name=\"male\"></ion-icon>\n      <ion-label>Specialty Consult</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n \n  <div *ngIf=\"tab == 'home'\">\n    <app-general-info [mode]=\"'edit'\"></app-general-info>  \n  </div>\n  <div *ngIf=\"tab == 'insurance'\">\n      <app-insurance [mode]=\"'edit'\"></app-insurance>  \n  </div>\n  <div *ngIf=\"tab == 'history'\">\n      <app-history [mode]=\"'edit'\"></app-history>  \n  </div>\n  <div *ngIf=\"tab == 'morders'\">\n      <app-morders [mode]=\"'edit'\"></app-morders>  \n  </div>\n  <div *ngIf=\"tab == 'dorders'\">\n      <app-dorders [mode]=\"'edit'\"></app-dorders>  \n  </div>\n  <div *ngIf=\"tab == 'consult'\">\n      <app-consult [mode]=\"'edit'\"></app-consult>  \n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/transfer/transfer.module.ts":
/*!*********************************************!*\
  !*** ./src/app/transfer/transfer.module.ts ***!
  \*********************************************/
/*! exports provided: TransferPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferPageModule", function() { return TransferPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _transfer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transfer.page */ "./src/app/transfer/transfer.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








var routes = [
    {
        path: '',
        component: _transfer_page__WEBPACK_IMPORTED_MODULE_6__["TransferPage"]
    }
];
var TransferPageModule = /** @class */ (function () {
    function TransferPageModule() {
    }
    TransferPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_transfer_page__WEBPACK_IMPORTED_MODULE_6__["TransferPage"]]
        })
    ], TransferPageModule);
    return TransferPageModule;
}());



/***/ }),

/***/ "./src/app/transfer/transfer.page.scss":
/*!*********************************************!*\
  !*** ./src/app/transfer/transfer.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-segment-button ion-label {\n  font-size: 10px;\n  margin: 0px;\n}\n\nion-segment {\n  background: #3880ff;\n  padding-left: 18%;\n}\n\n.header-md:after {\n  background-image: none;\n}\n\nion-segment-button {\n  color: white !important;\n}\n\n.sc-ion-segment-md-h.ion-color.sc-ion-segment-md-s > .segment-button-checked {\n  --indicator-color-checked: yellow;\n}\n\nion-row {\n  padding: 10px;\n  color: black;\n}\n\nhr {\n  width: 100%;\n  background: #dedede;\n}\n\nion-datetime {\n  padding-left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbnNmZXIvRjpcXFByb2plY3RzXFxTeW5jQXBwVGljcy9zcmNcXGFwcFxcdHJhbnNmZXJcXHRyYW5zZmVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdHJhbnNmZXIvdHJhbnNmZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUNDSjs7QURDQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURBQTtFQUNJLHNCQUFBO0FDR0o7O0FEREE7RUFDSSx1QkFBQTtBQ0lKOztBREZBO0VBQ0ksaUNBQUE7QUNLSjs7QURIQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FDTUo7O0FESEE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUNNSjs7QURKQTtFQUNJLGlCQUFBO0FDT0oiLCJmaWxlIjoic3JjL2FwcC90cmFuc2Zlci90cmFuc2Zlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VnbWVudC1idXR0b24gaW9uLWxhYmVse1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuaW9uLXNlZ21lbnR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzg4MGZmO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxOCU7XHJcbn1cclxuLmhlYWRlci1tZDphZnRlcntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuaW9uLXNlZ21lbnQtYnV0dG9ue1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNjLWlvbi1zZWdtZW50LW1kLWguaW9uLWNvbG9yLnNjLWlvbi1zZWdtZW50LW1kLXMgPiAuc2VnbWVudC1idXR0b24tY2hlY2tlZHtcclxuICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IHllbGxvdztcclxufVxyXG5pb24tcm93e1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuaHJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNkZWRlZGU7XHJcbn1cclxuaW9uLWRhdGV0aW1le1xyXG4gICAgcGFkZGluZy1sZWZ0OjBweDtcclxufSIsImlvbi1zZWdtZW50LWJ1dHRvbiBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5pb24tc2VnbWVudCB7XG4gIGJhY2tncm91bmQ6ICMzODgwZmY7XG4gIHBhZGRpbmctbGVmdDogMTglO1xufVxuXG4uaGVhZGVyLW1kOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5zYy1pb24tc2VnbWVudC1tZC1oLmlvbi1jb2xvci5zYy1pb24tc2VnbWVudC1tZC1zID4gLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiB5ZWxsb3c7XG59XG5cbmlvbi1yb3cge1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmhyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNkZWRlZGU7XG59XG5cbmlvbi1kYXRldGltZSB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/transfer/transfer.page.ts":
/*!*******************************************!*\
  !*** ./src/app/transfer/transfer.page.ts ***!
  \*******************************************/
/*! exports provided: TransferPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferPage", function() { return TransferPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TransferPage = /** @class */ (function () {
    function TransferPage() {
        this.tab = "home";
    }
    TransferPage.prototype.ngOnInit = function () {
    };
    TransferPage.prototype.segmentChanged = function (params) {
        this.tab = params.detail.value;
    };
    TransferPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transfer',
            template: __webpack_require__(/*! raw-loader!./transfer.page.html */ "./node_modules/raw-loader/index.js!./src/app/transfer/transfer.page.html"),
            styles: [__webpack_require__(/*! ./transfer.page.scss */ "./src/app/transfer/transfer.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TransferPage);
    return TransferPage;
}());



/***/ })

}]);
//# sourceMappingURL=transfer-transfer-module-es5.js.map