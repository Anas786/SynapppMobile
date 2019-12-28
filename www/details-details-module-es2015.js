(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/details/details.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/details/details.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n        <ion-toolbar color=\"primary\">\n          <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n          <ion-title>Details</ion-title>\n        </ion-toolbar>\n      </ion-header>\n      \n      <ion-content>\n        <ion-segment color=\"secondary\" scrollable (ionChange)=\"segmentChanged($event)\">\n          <ion-segment-button [checked]=\"tab == 'home'\" value=\"home\">\n            <ion-icon name=\"person\"></ion-icon>\n            <ion-label>General Info</ion-label>\n          </ion-segment-button>\n          <ion-segment-button [checked]=\"tab == 'insurance'\" value=\"insurance\">\n            <ion-icon name=\"medical\"></ion-icon>\n            <ion-label>Insurance</ion-label>\n          </ion-segment-button>\n          <ion-segment-button [checked]=\"tab == 'history'\" value=\"history\">\n            <ion-icon name=\"clipboard\"></ion-icon>\n            <ion-label>Medical History</ion-label>\n          </ion-segment-button>\n          <ion-segment-button [checked]=\"tab == 'morders'\" value=\"morders\">\n            <ion-icon name=\"medkit\"></ion-icon>\n            <ion-label>Medication Orders</ion-label>\n          </ion-segment-button>\n          <ion-segment-button [checked]=\"tab == 'dorders'\" value=\"dorders\">\n            <ion-icon name=\"male\"></ion-icon>\n            <ion-label>Diagnostic Orders</ion-label>\n          </ion-segment-button>\n          <ion-segment-button [checked]=\"tab == 'consult'\" value=\"consult\">\n            <ion-icon name=\"male\"></ion-icon>\n            <ion-label>Specialty Consult</ion-label>\n          </ion-segment-button>\n          <ion-segment-button [checked]=\"tab == 'referredBy'\" value=\"referredBy\">\n              <ion-icon name=\"male\"></ion-icon>\n              <ion-label>Referred By</ion-label>\n            </ion-segment-button>\n        </ion-segment>\n        \n        <div *ngIf=\"tab == 'home'\">\n          <app-general-info [mode]=\"mode\"></app-general-info>  \n        </div>\n        <div *ngIf=\"tab == 'insurance'\">\n            <app-insurance [mode]=\"mode\"></app-insurance>  \n        </div>\n        <div *ngIf=\"tab == 'history'\">\n            <app-history [mode]=\"mode\"></app-history>  \n        </div>\n        <div *ngIf=\"tab == 'morders'\">\n            <app-morders [mode]=\"mode\"></app-morders>  \n        </div>\n        <div *ngIf=\"tab == 'dorders'\">\n            <app-dorders [mode]=\"mode\"></app-dorders>  \n        </div>\n        <div *ngIf=\"tab == 'consult'\">\n            <app-consult [mode]=\"mode\"></app-consult>  \n        </div>\n        <div *ngIf=\"tab == 'referredBy' && mode == 'view'\">\n            <ion-card>\n                <ion-card-header>      \n                  <ion-card-title>Referring Physician Info</ion-card-title>\n                </ion-card-header>  \n                <ion-card-content>\n                 <ion-row>\n                   <ion-col size=\"6\">Name:</ion-col>\n                   <ion-col size=\"6\">clinician clinic</ion-col>\n                 </ion-row>\n                 <ion-row>\n                  <ion-col size=\"6\">Cell:</ion-col>\n                  <ion-col size=\"6\">1111111111</ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col size=\"6\">Email:</ion-col>\n                  <ion-col size=\"6\">aamirsaggi@gmail.com</ion-col>\n                </ion-row>             \n                </ion-card-content>\n              </ion-card>   \n              <ion-card>\n                  <ion-card-header>      \n                    <ion-card-title>Referring Facility Info</ion-card-title>\n                  </ion-card-header>  \n                  <ion-card-content>\n                   <ion-row>\n                     <ion-col size=\"6\">Name:</ion-col>\n                     <ion-col size=\"6\">clinic</ion-col>\n                   </ion-row>\n                   <ion-row>\n                    <ion-col size=\"6\">Address:</ion-col>\n                    <ion-col size=\"6\">test</ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col size=\"6\">Cell:</ion-col>\n                    <ion-col size=\"6\">1111111111</ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col size=\"6\">Email:</ion-col>\n                    <ion-col size=\"6\">aamirsaggi@gmail.com</ion-col>\n                  </ion-row>\n                  </ion-card-content>\n                </ion-card>   \n        </div>\n      </ion-content>"

/***/ }),

/***/ "./src/app/details/details.module.ts":
/*!*******************************************!*\
  !*** ./src/app/details/details.module.ts ***!
  \*******************************************/
/*! exports provided: DetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function() { return DetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details.page */ "./src/app/details/details.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








const routes = [
    {
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]
    }
];
let DetailsPageModule = class DetailsPageModule {
};
DetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]]
    })
], DetailsPageModule);



/***/ }),

/***/ "./src/app/details/details.page.scss":
/*!*******************************************!*\
  !*** ./src/app/details/details.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-segment-button ion-label {\n  font-size: 10px;\n  margin: 0px;\n}\n\nion-segment {\n  background: #3880ff;\n  padding-left: 18%;\n}\n\n.header-md:after {\n  background-image: none;\n}\n\nion-segment-button {\n  color: white !important;\n}\n\n.sc-ion-segment-md-h.ion-color.sc-ion-segment-md-s > .segment-button-checked {\n  --indicator-color-checked: yellow;\n}\n\nion-row {\n  padding: 10px;\n  color: black;\n}\n\nhr {\n  width: 100%;\n  background: #dedede;\n}\n\nion-datetime {\n  padding-left: 0px;\n}\n\nion-card {\n  border-top: 3px solid #333;\n  color: black;\n  background: -webkit-gradient(linear, left top, left bottom, from(#85b0fb), color-stop(0%, #3880ff9e), color-stop(0%, #007effd9), to(#fefefe));\n  background: linear-gradient(to bottom, #85b0fb 0%, #3880ff9e 0%, #007effd9 0%, #fefefe 100%);\n}\n\nion-card ion-card-header {\n  text-align: center;\n}\n\nion-card ion-row {\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy9GOlxcUHJvamVjdHNcXFN5bmNBcHBUaWNzL3NyY1xcYXBwXFxkZXRhaWxzXFxkZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGV0YWlscy9kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDQ0o7O0FEQ0E7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQUE7RUFDSSxzQkFBQTtBQ0dKOztBRERBO0VBQ0ksdUJBQUE7QUNJSjs7QURGQTtFQUNJLGlDQUFBO0FDS0o7O0FESEE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQ01KOztBREhBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FDTUo7O0FESkE7RUFDSSxpQkFBQTtBQ09KOztBREpBO0VBT0ksMEJBQUE7RUFDQSxZQUFBO0VBQ0EsNklBQUE7RUFBQSw0RkFBQTtBQ0NKOztBRFRJO0VBQ0ksa0JBQUE7QUNXUjs7QURUSTtFQUNJLFlBQUE7QUNXUiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMvZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VnbWVudC1idXR0b24gaW9uLWxhYmVse1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuaW9uLXNlZ21lbnR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzg4MGZmO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxOCU7XHJcbn1cclxuLmhlYWRlci1tZDphZnRlcntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuaW9uLXNlZ21lbnQtYnV0dG9ue1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNjLWlvbi1zZWdtZW50LW1kLWguaW9uLWNvbG9yLnNjLWlvbi1zZWdtZW50LW1kLXMgPiAuc2VnbWVudC1idXR0b24tY2hlY2tlZHtcclxuICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IHllbGxvdztcclxufVxyXG5pb24tcm93e1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuaHJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNkZWRlZGU7XHJcbn1cclxuaW9uLWRhdGV0aW1le1xyXG4gICAgcGFkZGluZy1sZWZ0OjBweDtcclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgICBpb24tY2FyZC1oZWFkZXJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgaW9uLXJvd3tcclxuICAgICAgICBwYWRkaW5nOjBweDtcclxuICAgIH1cclxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjMzMzO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzg1YjBmYiAwJSwgIzM4ODBmZjllIDAlLCAjMDA3ZWZmZDkgMCUsICNmZWZlZmUgMTAwJSk7XHJcbn0iLCJpb24tc2VnbWVudC1idXR0b24gaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuaW9uLXNlZ21lbnQge1xuICBiYWNrZ3JvdW5kOiAjMzg4MGZmO1xuICBwYWRkaW5nLWxlZnQ6IDE4JTtcbn1cblxuLmhlYWRlci1tZDphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uc2MtaW9uLXNlZ21lbnQtbWQtaC5pb24tY29sb3Iuc2MtaW9uLXNlZ21lbnQtbWQtcyA+IC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogeWVsbG93O1xufVxuXG5pb24tcm93IHtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5ociB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZGVkZWRlO1xufVxuXG5pb24tZGF0ZXRpbWUge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuaW9uLWNhcmQge1xuICBib3JkZXItdG9wOiAzcHggc29saWQgIzMzMztcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjODViMGZiIDAlLCAjMzg4MGZmOWUgMCUsICMwMDdlZmZkOSAwJSwgI2ZlZmVmZSAxMDAlKTtcbn1cbmlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jYXJkIGlvbi1yb3cge1xuICBwYWRkaW5nOiAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/details/details.page.ts":
/*!*****************************************!*\
  !*** ./src/app/details/details.page.ts ***!
  \*****************************************/
/*! exports provided: DetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPage", function() { return DetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DetailsPage = class DetailsPage {
    constructor() {
        this.tab = "home";
        this.mode = 'view';
    }
    ngOnInit() {
    }
    segmentChanged(params) {
        this.tab = params.detail.value;
    }
};
DetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details',
        template: __webpack_require__(/*! raw-loader!./details.page.html */ "./node_modules/raw-loader/index.js!./src/app/details/details.page.html"),
        styles: [__webpack_require__(/*! ./details.page.scss */ "./src/app/details/details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DetailsPage);



/***/ })

}]);
//# sourceMappingURL=details-details-module-es2015.js.map