(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~details-details-module~transfer-transfer-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/consult/consult.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/consult/consult.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-row class=\"ion-justify-content-center\" *ngIf=\"mode == 'edit'\">\n  <h4>\n    Specialty Consult\n  </h4>\n  <hr>\n  <ion-col size=\"12\">\n    <ion-label>Consults</ion-label>\n    <ion-list>\n      <ion-item>\n        <ion-label>Cardiology</ion-label>\n        <ion-checkbox color=\"primary\"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label>Nephrology</ion-label>\n        <ion-checkbox color=\"primary\"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label>Neurology</ion-label>\n        <ion-checkbox color=\"primary\"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label>Neurosurgery</ion-label>\n        <ion-checkbox color=\"primary\"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label>GI</ion-label>\n        <ion-checkbox color=\"primary\"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label>Surgery</ion-label>\n        <ion-checkbox color=\"primary\"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label>ID</ion-label>\n        <ion-checkbox color=\"primary\"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label>Podiatry</ion-label>\n        <ion-checkbox color=\"primary\"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label>ENT</ion-label>\n        <ion-checkbox color=\"primary\"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label>Orthopedics</ion-label>\n        <ion-checkbox color=\"primary\"></ion-checkbox>\n      </ion-item>\n\n    </ion-list>\n  </ion-col>\n  <ion-col size=\"12\">\n    <ion-label>Preferred Consultant</ion-label>\n    <ion-item>\n      <ion-input clearInput placeholder=\"Preferred Consultant\"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col size=\"12\">\n    <ion-label>Additional Consults</ion-label>\n    <ion-item>\n      <ion-input clearInput placeholder=\"Additional Consults\"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col size=\"12\">\n    <ion-item>\n      <ion-label> Specialist consult required for transfer </ion-label>\n      <ion-checkbox color=\"primary\"></ion-checkbox>\n    </ion-item>\n\n  </ion-col>\n</ion-row>\n\n\n<div *ngIf=\"mode == 'view'\">\n    <ion-card>\n      <ion-card-header>      \n        <ion-card-title>Specialty Consult</ion-card-title>\n      </ion-card-header>  \n      <ion-card-content>\n       <ion-row>\n         <ion-col size=\"6\">Additional_Consults:</ion-col>\n         <ion-col size=\"6\">N/A</ion-col>\n       </ion-row>\n       <ion-row>\n        <ion-col size=\"6\">Consults:</ion-col>\n        <ion-col size=\"6\">N/A</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">Preferred_Consultant:</ion-col>\n        <ion-col size=\"6\">N/A</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">Specialist_Consult_required_for_transfer:</ion-col>\n        <ion-col size=\"6\">Yes</ion-col>\n      </ion-row>\n      </ion-card-content>\n    </ion-card>   \n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/dorders/dorders.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/dorders/dorders.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-row class=\"ion-justify-content-center\" *ngIf=\"mode == 'edit'\">\n    <h4>\n        Diagnostic Orders\n    </h4>\n    <hr>\n    <ion-col size=\"12\">\n      <ion-label>Blood Tests</ion-label>\n      <ion-item>          \n          <ion-input clearInput></ion-input>\n        </ion-item>\n  \n    </ion-col>\n    <ion-col size=\"12\">\n        <ion-label>Urine Tests</ion-label>\n        <ion-list>\n          <ion-item>\n            <ion-label>UA</ion-label>\n            <ion-checkbox color=\"primary\"></ion-checkbox>\n          </ion-item>\n          <ion-item>\n              <ion-label>U&S</ion-label>\n              <ion-checkbox color=\"primary\"></ion-checkbox>\n            </ion-item>\n        </ion-list>\n      </ion-col>\n    <ion-col size=\"12\">\n      <ion-label>Imaging/Tests</ion-label>\n      <ion-list>\n          <ion-item>\n            <ion-label>X-Rays</ion-label>\n            <ion-checkbox color=\"primary\"></ion-checkbox>\n          </ion-item>\n          <ion-item>\n              <ion-label>US</ion-label>\n              <ion-checkbox color=\"primary\"></ion-checkbox>\n            </ion-item>\n            <ion-item>\n                <ion-label>CT</ion-label>\n                <ion-checkbox color=\"primary\"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                  <ion-label>MRI</ion-label>\n                  <ion-checkbox color=\"primary\"></ion-checkbox>\n                </ion-item>\n                <ion-item>\n                    <ion-label>EKG</ion-label>\n                    <ion-checkbox color=\"primary\"></ion-checkbox>\n                  </ion-item>\n        </ion-list>\n    </ion-col>   \n    <ion-col size=\"12\">\n      <ion-label>Other Tests</ion-label>\n      <ion-item>\n        <ion-input clearInput></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  \n<div *ngIf=\"mode == 'view'\">\n    <ion-card>\n      <ion-card-header>      \n        <ion-card-title>Patient Information</ion-card-title>\n      </ion-card-header>  \n      <ion-card-content>\n       <ion-row>\n         <ion-col size=\"6\">Patient Name:</ion-col>\n         <ion-col size=\"6\">asd asd</ion-col>\n       </ion-row>\n       <ion-row>\n        <ion-col size=\"6\">Age:</ion-col>\n        <ion-col size=\"6\">10</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">Gender:</ion-col>\n        <ion-col size=\"6\">Male</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">Social Security #:</ion-col>\n        <ion-col size=\"6\">123123123</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">Patient Email Address:</ion-col>\n        <ion-col size=\"6\">user@gmail.com</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">Patient Cell Number:</ion-col>\n        <ion-col size=\"6\">(132) 132-1321</ion-col>\n      </ion-row>\n      </ion-card-content>\n    </ion-card>\n    \n    <ion-card>\n        <ion-card-header>      \n          <ion-card-title>Patient Status</ion-card-title>\n        </ion-card-header>  \n        <ion-card-content>\n         <ion-row>\n           <ion-col size=\"6\">Mode of Tranportation:</ion-col>\n           <ion-col size=\"6\">Ambulance</ion-col>\n         </ion-row>\n         <ion-row>\n          <ion-col size=\"6\">Bed Type:</ion-col>\n          <ion-col size=\"6\">Outpatient/ Observation 24H w/o Telemetry</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">Code Status:</ion-col>\n          <ion-col size=\"6\">Full Code</ion-col>\n        </ion-row>  \n        </ion-card-content>\n      </ion-card>\n  \n  \n      <ion-card>\n          <ion-card-header>      \n            <ion-card-title>Diagnostic Orders</ion-card-title>\n          </ion-card-header>  \n          <ion-card-content>\n           <ion-row>\n             <ion-col size=\"6\">Blood_Tests:</ion-col>\n             <ion-col size=\"6\"></ion-col>\n           </ion-row>\n           <ion-row>\n            <ion-col size=\"6\">Imaging_Tests:</ion-col>\n            <ion-col size=\"6\"></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\">Urine_Tests:</ion-col>\n            <ion-col size=\"6\"></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\">Social Security #:</ion-col>\n            <ion-col size=\"6\">123123123</ion-col>\n          </ion-row>    \n          </ion-card-content>\n        </ion-card>\n  \n  \n        <ion-card>\n            <ion-card-header>      \n              <ion-card-title>Patient Diagnostics</ion-card-title>\n            </ion-card-header>  \n            <ion-card-content>\n             <ion-row>\n               <ion-col size=\"6\">A01.0 :</ion-col>\n               <ion-col size=\"6\">Typhoid fever</ion-col>\n             </ion-row>           \n            </ion-card-content>\n          </ion-card>\n  \n  \n          <ion-card>\n              <ion-card-header>      \n                <ion-card-title>Admission Preferences</ion-card-title>\n              </ion-card-header>  \n              <ion-card-content>\n               <ion-row>\n                 <ion-col size=\"6\">Admitting Hospital:</ion-col>\n                 <ion-col size=\"6\">clinic</ion-col>\n               </ion-row>\n               <ion-row>\n                <ion-col size=\"6\">Admitting Group:</ion-col>\n                <ion-col size=\"6\">Corpus C. Hospitalist Grp</ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"6\">Admitting Physician:</ion-col>\n                <ion-col size=\"6\">Corpus Christi Hospitalist</ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"6\">Patient ETA:</ion-col>\n                <ion-col size=\"6\">1 Hour(s)</ion-col>\n              </ion-row>         \n              </ion-card-content>\n            </ion-card>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/general-info/general-info.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/general-info/general-info.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"user\" *ngIf=\"mode == 'edit'\">\n  <ion-row  class=\"ion-justify-content-center\">\n    \n    <h4>\n      Patient Transfer Form\n    </h4>\n    <hr>\n    <ion-col size=\"12\">\n      <ion-label>Patient Name</ion-label><span class=\"requriedStar\">**</span>\n      <ion-item>\n        <ion-input clearInput placeholder=\"First Name\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input clearInput placeholder=\"Last Name\"></ion-input>\n      </ion-item>\n\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-label>Date of Birth</ion-label><span class=\"requriedStar\">**</span>\n      <ion-item>\n          <ion-datetime placeholder=\"Select Date\"></ion-datetime>\n      </ion-item>    \n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-label>Social Security Number </ion-label>\n      <ion-item>\n        <ion-input clearInput placeholder=\"123-45-6789\" formControlName=\"name\" mask=\"000-00-0000\"></ion-input>\n      </ion-item>\n\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-label>Gender</ion-label><span class=\"requriedStar\">**</span>    \n        <ion-radio-group>                \n          <ion-item>\n              <ion-radio value=\"cord\"></ion-radio>\n              <ion-icon name=\"man\"></ion-icon>\n              <ion-label>\n                Male\n              </ion-label>\n          </ion-item>\n      \n          <ion-item>\n              <ion-radio value=\"duesenberg\"></ion-radio>\n              <ion-icon name=\"woman\"></ion-icon>\n              <ion-label>\n                Female\n              </ion-label>\n          \n          </ion-item>\n        </ion-radio-group>      \n\n    </ion-col>\n    <h4>\n      Patient Status\n    </h4>\n    <hr>\n    <ion-col size=\"12\">\n      <ion-label>Patient Email Address</ion-label><span class=\"requriedStar\">**</span>\n      <ion-item>\n        <ion-input clearInput placeholder=\"Username@domain.com\"></ion-input>\n      </ion-item>\n\n    </ion-col>\n    <ion-col size=\"12\">\n        <ion-label>Patient Cell Number</ion-label>\n        <ion-item>\n          <ion-input clearInput placeholder=\"eg: (000) 000-0000\" formControlName=\"country\" mask=\"(000) 000-0000\"></ion-input>\n        </ion-item>\n  \n      </ion-col>\n    <ion-col size=\"12\">\n      <ion-label>Code Status</ion-label><span class=\"requriedStar\">**</span>\n      <ion-item>          \n          <ion-select value=\"brown\" interface=\"action-sheet\">\n            <ion-select-option value=\"brown\">Brown</ion-select-option>\n            <ion-select-option value=\"blonde\">Blonde</ion-select-option>\n            <ion-select-option value=\"black\">Black</ion-select-option>\n            <ion-select-option value=\"red\">Red</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-label>Bed Type</ion-label><span class=\"requriedStar\">**</span>   \n          <ion-item>          \n              <ion-select value=\"brown\" interface=\"action-sheet\">\n                <ion-select-option value=\"brown\">Brown</ion-select-option>\n                <ion-select-option value=\"blonde\">Blonde</ion-select-option>\n                <ion-select-option value=\"black\">Black</ion-select-option>\n                <ion-select-option value=\"red\">Red</ion-select-option>\n              </ion-select>\n            </ion-item>      \n\n    </ion-col>\n    <h4>\n      Patient Diagnostics\n    </h4>\n    <hr>\n    <ion-col size=\"12\">\n      <ion-label>Search By ICD-9 Diagnostic Code Or Name</ion-label>\n      <ion-item>\n        <ion-input clearInput placeholder=\"First Name\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input clearInput placeholder=\"First Name\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input clearInput placeholder=\"First Name\"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-label>Other Diagnostics Info</ion-label>\n      <ion-item>\n        <ion-input clearInput></ion-input>\n      </ion-item>    \n    </ion-col>\n\n    <h4>\n      Admission Preferences\n    </h4>\n    <hr>\n    <ion-col size=\"12\">\n      <ion-label>Preferred Admitting Hospital</ion-label><span class=\"requriedStar\">**</span>\n      <ion-item>\n        <ion-input clearInput></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-label>Preferred Admitting Group</ion-label><span class=\"requriedStar\">**</span>\n      <ion-item>\n        <ion-input clearInput placeholder=\"First Name\"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-label>Preferred Admitting Physician</ion-label>     \n          <ion-item>          \n              <ion-select value=\"brown\" interface=\"action-sheet\" [disabled]=\"true\">\n                <ion-select-option value=\"brown\">Brown</ion-select-option>\n                <ion-select-option value=\"blonde\">Blonde</ion-select-option>\n                <ion-select-option value=\"black\">Black</ion-select-option>\n                <ion-select-option value=\"red\">Red</ion-select-option>\n              </ion-select>\n            </ion-item>      \n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-label>Doc to Doc</ion-label>\n      <ion-item>          \n          <ion-select value=\"brown\" interface=\"action-sheet\">\n            <ion-select-option value=\"brown\">Brown</ion-select-option>\n            <ion-select-option value=\"blonde\">Blonde</ion-select-option>\n            <ion-select-option value=\"black\">Black</ion-select-option>\n            <ion-select-option value=\"red\">Red</ion-select-option>\n          </ion-select>\n        </ion-item>  \n    </ion-col>\n\n    <ion-col size=\"12\">\n      <ion-label>Patient ETA *</ion-label>\n      <ion-item>          \n          <ion-select value=\"brown\" interface=\"action-sheet\">\n            <ion-select-option value=\"brown\">Brown</ion-select-option>\n            <ion-select-option value=\"blonde\">Blonde</ion-select-option>\n            <ion-select-option value=\"black\">Black</ion-select-option>\n            <ion-select-option value=\"red\">Red</ion-select-option>\n          </ion-select>\n        </ion-item>  \n    </ion-col>\n\n  </ion-row>\n</form>\n<div *ngIf=\"mode == 'view'\">\n  <ion-card>\n    <ion-card-header>      \n      <ion-card-title>Patient Information</ion-card-title>\n    </ion-card-header>  \n    <ion-card-content>\n     <ion-row>\n       <ion-col size=\"6\">Patient Name:</ion-col>\n       <ion-col size=\"6\">asd asd</ion-col>\n     </ion-row>\n     <ion-row>\n      <ion-col size=\"6\">Age:</ion-col>\n      <ion-col size=\"6\">10</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">Gender:</ion-col>\n      <ion-col size=\"6\">Male</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">Social Security #:</ion-col>\n      <ion-col size=\"6\">123123123</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">Patient Email Address:</ion-col>\n      <ion-col size=\"6\">user@gmail.com</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">Patient Cell Number:</ion-col>\n      <ion-col size=\"6\">(132) 132-1321</ion-col>\n    </ion-row>\n    </ion-card-content>\n  </ion-card>\n  \n  <ion-card>\n      <ion-card-header>      \n        <ion-card-title>Patient Status</ion-card-title>\n      </ion-card-header>  \n      <ion-card-content>\n       <ion-row>\n         <ion-col size=\"6\">Mode of Tranportation:</ion-col>\n         <ion-col size=\"6\">Ambulance</ion-col>\n       </ion-row>\n       <ion-row>\n        <ion-col size=\"6\">Bed Type:</ion-col>\n        <ion-col size=\"6\">Outpatient/ Observation 24H w/o Telemetry</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">Code Status:</ion-col>\n        <ion-col size=\"6\">Full Code</ion-col>\n      </ion-row>  \n      </ion-card-content>\n    </ion-card>\n\n\n    <ion-card>\n        <ion-card-header>      \n          <ion-card-title>Diagnostic Orders</ion-card-title>\n        </ion-card-header>  \n        <ion-card-content>\n         <ion-row>\n           <ion-col size=\"6\">Blood_Tests:</ion-col>\n           <ion-col size=\"6\"></ion-col>\n         </ion-row>\n         <ion-row>\n          <ion-col size=\"6\">Imaging_Tests:</ion-col>\n          <ion-col size=\"6\"></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">Urine_Tests:</ion-col>\n          <ion-col size=\"6\"></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">Social Security #:</ion-col>\n          <ion-col size=\"6\">123123123</ion-col>\n        </ion-row>    \n        </ion-card-content>\n      </ion-card>\n\n\n      <ion-card>\n          <ion-card-header>      \n            <ion-card-title>Patient Diagnostics</ion-card-title>\n          </ion-card-header>  \n          <ion-card-content>\n           <ion-row>\n             <ion-col size=\"6\">A01.0 :</ion-col>\n             <ion-col size=\"6\">Typhoid fever</ion-col>\n           </ion-row>           \n          </ion-card-content>\n        </ion-card>\n\n\n        <ion-card>\n            <ion-card-header>      \n              <ion-card-title>Admission Preferences</ion-card-title>\n            </ion-card-header>  \n            <ion-card-content>\n             <ion-row>\n               <ion-col size=\"6\">Admitting Hospital:</ion-col>\n               <ion-col size=\"6\">clinic</ion-col>\n             </ion-row>\n             <ion-row>\n              <ion-col size=\"6\">Admitting Group:</ion-col>\n              <ion-col size=\"6\">Corpus C. Hospitalist Grp</ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"6\">Admitting Physician:</ion-col>\n              <ion-col size=\"6\">Corpus Christi Hospitalist</ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"6\">Patient ETA:</ion-col>\n              <ion-col size=\"6\">1 Hour(s)</ion-col>\n            </ion-row>         \n            </ion-card-content>\n          </ion-card>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/history/history.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/history/history.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-row  class=\"ion-justify-content-center\" *ngIf=\"mode == 'edit'\">    \n    <h4>\n        Vital Signs\n      </h4>\n      <hr>\n      <ion-col size=\"12\">\n        <ion-label>Temperature (℉)</ion-label>\n        <ion-item>\n            <ion-input clearInput placeholder=\"Fahrenheit\"></ion-input>\n          </ion-item>\n    \n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-label>Glucose</ion-label>\n        <ion-item>\n            <ion-input clearInput placeholder=\"mg/dl\"></ion-input>\n          </ion-item>          \n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-label>Blood Pressure</ion-label>\n        <ion-item>\n          <ion-input clearInput placeholder=\"BPM\"></ion-input>\n        </ion-item>\n    \n      </ion-col> \n      <ion-col size=\"12\">\n          <ion-label>O2 Level</ion-label>\n          <ion-item>\n            <ion-input clearInput placeholder=\"%\"></ion-input>\n          </ion-item>\n      \n        </ion-col> \n        <ion-col size=\"12\">\n            <ion-label>Comorbidity</ion-label>\n            <ion-list>\n                <ion-item>\n                  <ion-label>HTN</ion-label>\n                  <ion-checkbox color=\"primary\"></ion-checkbox>\n                </ion-item>\n              \n                <ion-item>\n                  <ion-label>DM1</ion-label>\n                  <ion-checkbox color=\"primary\"></ion-checkbox>\n                </ion-item>\n              \n                <ion-item>\n                  <ion-label>DM2</ion-label>\n                  <ion-checkbox color=\"primary\"></ion-checkbox>\n                </ion-item>\n                <ion-item>\n                    <ion-label>COP</ion-label>\n                    <ion-checkbox color=\"primary\"></ion-checkbox>\n                  </ion-item>\n                  <ion-item>\n                      <ion-label>ESR</ion-label>\n                      <ion-checkbox color=\"primary\"></ion-checkbox>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>CHF</ion-label>\n                        <ion-checkbox color=\"primary\"></ion-checkbox>\n                      </ion-item>\n                      <ion-item>\n                          <ion-label>CAD</ion-label>\n                          <ion-checkbox color=\"primary\"></ion-checkbox>\n                        </ion-item>\n              </ion-list>    \n          </ion-col> \n          <ion-col size=\"12\">\n              <ion-label>Allergies</ion-label>\n              <ion-list>\n                  <ion-item>\n                    <ion-label>PCN</ion-label>\n                    <ion-checkbox color=\"primary\"></ion-checkbox>\n                  </ion-item>\n                \n                  <ion-item>\n                    <ion-label>Codein</ion-label>\n                    <ion-checkbox color=\"primary\"></ion-checkbox>\n                  </ion-item>\n                \n                  <ion-item>\n                    <ion-label>Iodine</ion-label>\n                    <ion-checkbox color=\"primary\"></ion-checkbox>\n                  </ion-item>                          \n                </ion-list>      \n            </ion-col>\n          <ion-col size=\"12\">\n              <ion-label>Other Allergies</ion-label>\n              <ion-item>\n                  <ion-textarea placeholder=\"Enter more information here...\"></ion-textarea>\n              </ion-item > \n            </ion-col> \n            <ion-col size=\"12\">\n                <ion-label>Brief Pertinent Medical Information</ion-label>\n                <ion-item>\n                    <ion-textarea placeholder=\"Enter more information here...\"></ion-textarea>\n                </ion-item > \n              </ion-col> \n    </ion-row>\n\n\n    \n<div *ngIf=\"mode == 'view'\">\n    <ion-card>\n      <ion-card-header>      \n        <ion-card-title>Medical History</ion-card-title>\n      </ion-card-header>  \n      <ion-card-content>\n       <ion-row>\n         <ion-col size=\"6\">Allergies:</ion-col>\n         <ion-col size=\"6\"></ion-col>\n       </ion-row>\n       <ion-row>\n        <ion-col size=\"6\">Blood_Pressure_Diastolic:</ion-col>\n        <ion-col size=\"6\"></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">Blood_Pressure_Systolic:</ion-col>\n        <ion-col size=\"6\"></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">Comorbidity:</ion-col>\n        <ion-col size=\"6\"></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">Glucose:</ion-col>\n        <ion-col size=\"6\"></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">O2_Level:</ion-col>\n        <ion-col size=\"6\"></ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col size=\"6\">Other_Allergies:</ion-col>\n          <ion-col size=\"6\"></ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col size=\"6\">Parient_Brief_Medical_Information:</ion-col>\n            <ion-col size=\"6\"></ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col size=\"6\">Pulse:</ion-col>\n              <ion-col size=\"6\"></ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"6\">Temperature:</ion-col>\n                <ion-col size=\"6\"></ion-col>\n              </ion-row>\n      </ion-card-content>\n    </ion-card>\n      \n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/insurance/insurance.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/insurance/insurance.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-row  class=\"ion-justify-content-center\" *ngIf=\"mode == 'edit'\">    \n<h4>\n    Insurance Information\n  </h4>\n  <hr>\n  <ion-col size=\"12\">\n    <ion-label>Insurance</ion-label>\n    <ion-item>          \n        <ion-select value=\"brown\" interface=\"action-sheet\">\n          <ion-select-option value=\"brown\">Brown</ion-select-option>\n          <ion-select-option value=\"blonde\">Blonde</ion-select-option>\n          <ion-select-option value=\"black\">Black</ion-select-option>\n          <ion-select-option value=\"red\">Red</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n  </ion-col>\n  <ion-col size=\"12\">\n    <ion-label>Card Holder's Name</ion-label>\n    <ion-item>\n        <ion-input clearInput placeholder=\"First Name\"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-input clearInput placeholder=\"Last Name\"></ion-input>\n        </ion-item> \n  </ion-col>\n  <ion-col size=\"12\">\n    <ion-label>Primary Card Holder's SSN</ion-label>\n    <ion-item>\n      <ion-input clearInput ></ion-input>\n    </ion-item>\n\n  </ion-col> \n  <ion-col size=\"12\">\n      <ion-label>Patient Member ID</ion-label>\n      <ion-item>\n        <ion-input clearInput ></ion-input>\n      </ion-item>\n  \n    </ion-col> \n    <ion-col size=\"12\">\n        <ion-label>Additional Insurance Info</ion-label>\n        <ion-item>\n          <ion-input clearInput ></ion-input>\n        </ion-item>    \n      </ion-col> \n</ion-row>\n\n    \n<div *ngIf=\"mode == 'view'\">\n    <ion-card>\n      <ion-card-header>      \n        <ion-card-title>Insurance Information</ion-card-title>\n      </ion-card-header>  \n      <ion-card-content>\n       <ion-row>\n         <ion-col size=\"6\">Additional_Insurance_Info:</ion-col>\n         <ion-col size=\"6\">asd asd</ion-col>\n       </ion-row>\n       <ion-row>\n        <ion-col size=\"6\">Insurance:</ion-col>\n        <ion-col size=\"6\">123123</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">Primary_Card_Holder_Name:</ion-col>\n        <ion-col size=\"6\">AAASS</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">Primary_Card_Holder_SSN:</ion-col>\n        <ion-col size=\"6\">123123123</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">Primary_Group_ID:</ion-col>\n        <ion-col size=\"6\">user@gmail.com</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">Primary_Member_ID:</ion-col>\n        <ion-col size=\"6\">(132) 132-1321</ion-col>\n      </ion-row>\n      </ion-card-content>\n    </ion-card>\n          \n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/morders/morders.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/morders/morders.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-row class=\"ion-justify-content-center\" *ngIf=\"mode == 'edit'\">\n  <h4>\n    Medication Orders\n  </h4>\n  <hr>\n  <ion-col size=\"12\">\n    <ion-label>Diet</ion-label>\n    <ion-item>          \n        <ion-select value=\"brown\" interface=\"action-sheet\">\n          <ion-select-option value=\"brown\">Brown</ion-select-option>\n          <ion-select-option value=\"blonde\">Blonde</ion-select-option>\n          <ion-select-option value=\"black\">Black</ion-select-option>\n          <ion-select-option value=\"red\">Red</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n  </ion-col>\n  <ion-col size=\"12\">\n    <ion-label>IV Fluids</ion-label>\n    <ion-item>          \n        <ion-select value=\"brown\" interface=\"action-sheet\">\n          <ion-select-option value=\"brown\">Brown</ion-select-option>\n          <ion-select-option value=\"blonde\">Blonde</ion-select-option>\n          <ion-select-option value=\"black\">Black</ion-select-option>\n          <ion-select-option value=\"red\">Red</ion-select-option>\n        </ion-select>\n      </ion-item>\n  </ion-col>\n  <ion-col size=\"12\">\n    <ion-label>Order Medications</ion-label>\n    <ion-list>\n      <ion-item>\n        <ion-label>Resume All Home Medications</ion-label>\n        <ion-checkbox color=\"primary\"></ion-checkbox>\n      </ion-item>\n    </ion-list>\n  </ion-col>\n  <ion-col size=\"12\">\n    <ion-label>PRN Meds</ion-label>\n\n  </ion-col>\n  <ion-col size=\"12\">\n    <ion-label>Other PRN Meds</ion-label>\n    <ion-item>\n      <ion-input clearInput></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col size=\"12\">\n    <ion-label>Other Scheduled Meds</ion-label>\n    <ion-item>\n      <ion-input clearInput></ion-input>\n    </ion-item>\n  </ion-col>\n</ion-row>\n\n\n<div *ngIf=\"mode == 'view'\">\n    <ion-card>\n      <ion-card-header>      \n        <ion-card-title>Medication Orders</ion-card-title>\n      </ion-card-header>  \n      <ion-card-content>\n       <ion-row>\n         <ion-col size=\"6\">Diet:</ion-col>\n         <ion-col size=\"6\">N/A</ion-col>\n       </ion-row>\n       <ion-row>\n        <ion-col size=\"6\">IV_Fluids:</ion-col>\n        <ion-col size=\"6\">N/A</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">Other_PRN_Meds:</ion-col>\n        <ion-col size=\"6\">N/A</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">Other_Scheduled_Meds:</ion-col>\n        <ion-col size=\"6\">N/A</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">PRN_Meds:</ion-col>\n        <ion-col size=\"6\">N/A</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">Resume_All_Home_Medications:</ion-col>\n        <ion-col size=\"6\">No</ion-col>\n      </ion-row>\n      </ion-card-content>\n    </ion-card>    \n  </div>"

/***/ }),

/***/ "./src/app/shared/consult/consult.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/shared/consult/consult.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-row {\n  padding: 10px;\n}\n\nhr {\n  width: 100%;\n  background: #dedede;\n}\n\nion-datetime {\n  padding-left: 0px;\n}\n\nion-card {\n  border-top: 3px solid #333;\n  color: black;\n  background: -webkit-gradient(linear, left top, left bottom, from(#85b0fb), color-stop(0%, #3880ff9e), color-stop(0%, #007effd9), to(#fefefe));\n  background: linear-gradient(to bottom, #85b0fb 0%, #3880ff9e 0%, #007effd9 0%, #fefefe 100%);\n}\n\nion-card ion-card-header {\n  text-align: center;\n}\n\nion-card ion-row {\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbnN1bHQvRjpcXFByb2plY3RzXFxTeW5jQXBwVGljcy9zcmNcXGFwcFxcc2hhcmVkXFxjb25zdWx0XFxjb25zdWx0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29uc3VsdC9jb25zdWx0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FDQUo7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBREFDO0VBT0csMEJBQUE7RUFDQSxZQUFBO0VBQ0EsNklBQUE7RUFBQSw0RkFBQTtBQ0hKOztBRExJO0VBQ0ksa0JBQUE7QUNPUjs7QURMSTtFQUNJLFlBQUE7QUNPUiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb25zdWx0L2NvbnN1bHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLXJvd3tcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbmhye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGVkZWRlO1xyXG59XHJcbmlvbi1kYXRldGltZXtcclxuICAgIHBhZGRpbmctbGVmdDowcHg7XHJcbn1pb24tY2FyZHtcclxuICAgIGlvbi1jYXJkLWhlYWRlcntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBpb24tcm93e1xyXG4gICAgICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgfVxyXG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICMzMzM7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjODViMGZiIDAlLCAjMzg4MGZmOWUgMCUsICMwMDdlZmZkOSAwJSwgI2ZlZmVmZSAxMDAlKTtcclxufSIsImlvbi1yb3cge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5ociB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZGVkZWRlO1xufVxuXG5pb24tZGF0ZXRpbWUge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuaW9uLWNhcmQge1xuICBib3JkZXItdG9wOiAzcHggc29saWQgIzMzMztcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjODViMGZiIDAlLCAjMzg4MGZmOWUgMCUsICMwMDdlZmZkOSAwJSwgI2ZlZmVmZSAxMDAlKTtcbn1cbmlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jYXJkIGlvbi1yb3cge1xuICBwYWRkaW5nOiAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/consult/consult.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/consult/consult.component.ts ***!
  \*****************************************************/
/*! exports provided: ConsultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultComponent", function() { return ConsultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConsultComponent = /** @class */ (function () {
    function ConsultComponent() {
        this.mode = 'view';
    }
    ConsultComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mode'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ConsultComponent.prototype, "mode", void 0);
    ConsultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-consult',
            template: __webpack_require__(/*! raw-loader!./consult.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/consult/consult.component.html"),
            styles: [__webpack_require__(/*! ./consult.component.scss */ "./src/app/shared/consult/consult.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConsultComponent);
    return ConsultComponent;
}());



/***/ }),

/***/ "./src/app/shared/dorders/dorders.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/shared/dorders/dorders.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-row {\n  padding: 10px;\n}\n\nhr {\n  width: 100%;\n  background: #dedede;\n}\n\nion-datetime {\n  padding-left: 0px;\n}\n\nion-card {\n  border-top: 3px solid #333;\n  color: black;\n  background: -webkit-gradient(linear, left top, left bottom, from(#85b0fb), color-stop(0%, #3880ff9e), color-stop(0%, #007effd9), to(#fefefe));\n  background: linear-gradient(to bottom, #85b0fb 0%, #3880ff9e 0%, #007effd9 0%, #fefefe 100%);\n}\n\nion-card ion-card-header {\n  text-align: center;\n}\n\nion-card ion-row {\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RvcmRlcnMvRjpcXFByb2plY3RzXFxTeW5jQXBwVGljcy9zcmNcXGFwcFxcc2hhcmVkXFxkb3JkZXJzXFxkb3JkZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvZG9yZGVycy9kb3JkZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FDQUo7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBRENBO0VBT0ksMEJBQUE7RUFDQSxZQUFBO0VBQ0EsNklBQUE7RUFBQSw0RkFBQTtBQ0pKOztBREpJO0VBQ0ksa0JBQUE7QUNNUjs7QURKSTtFQUNJLFlBQUE7QUNNUiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kb3JkZXJzL2RvcmRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLXJvd3tcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbmhye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGVkZWRlO1xyXG59XHJcbmlvbi1kYXRldGltZXtcclxuICAgIHBhZGRpbmctbGVmdDowcHg7XHJcbn1cclxuaW9uLWNhcmR7XHJcbiAgICBpb24tY2FyZC1oZWFkZXJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgaW9uLXJvd3tcclxuICAgICAgICBwYWRkaW5nOjBweDtcclxuICAgIH1cclxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjMzMzO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzg1YjBmYiAwJSwgIzM4ODBmZjllIDAlLCAjMDA3ZWZmZDkgMCUsICNmZWZlZmUgMTAwJSk7XHJcbn0iLCJpb24tcm93IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaHIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2RlZGVkZTtcbn1cblxuaW9uLWRhdGV0aW1lIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICMzMzM7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzg1YjBmYiAwJSwgIzM4ODBmZjllIDAlLCAjMDA3ZWZmZDkgMCUsICNmZWZlZmUgMTAwJSk7XG59XG5pb24tY2FyZCBpb24tY2FyZC1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY2FyZCBpb24tcm93IHtcbiAgcGFkZGluZzogMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/dorders/dorders.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/dorders/dorders.component.ts ***!
  \*****************************************************/
/*! exports provided: DordersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DordersComponent", function() { return DordersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DordersComponent = /** @class */ (function () {
    function DordersComponent() {
        this.mode = 'view';
    }
    DordersComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mode'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DordersComponent.prototype, "mode", void 0);
    DordersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dorders',
            template: __webpack_require__(/*! raw-loader!./dorders.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/dorders/dorders.component.html"),
            styles: [__webpack_require__(/*! ./dorders.component.scss */ "./src/app/shared/dorders/dorders.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DordersComponent);
    return DordersComponent;
}());



/***/ }),

/***/ "./src/app/shared/general-info/general-info.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/shared/general-info/general-info.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-row {\n  padding: 10px;\n}\n\nhr {\n  width: 100%;\n  background: #dedede;\n}\n\nion-datetime {\n  padding-left: 0px;\n}\n\nion-card {\n  border-top: 3px solid #333;\n  color: black;\n  background: -webkit-gradient(linear, left top, left bottom, from(#85b0fb), color-stop(0%, #3880ff9e), color-stop(0%, #007effd9), to(#fefefe));\n  background: linear-gradient(to bottom, #85b0fb 0%, #3880ff9e 0%, #007effd9 0%, #fefefe 100%);\n}\n\nion-card ion-card-header {\n  text-align: center;\n}\n\nion-card ion-row {\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2dlbmVyYWwtaW5mby9GOlxcUHJvamVjdHNcXFN5bmNBcHBUaWNzL3NyY1xcYXBwXFxzaGFyZWRcXGdlbmVyYWwtaW5mb1xcZ2VuZXJhbC1pbmZvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvZ2VuZXJhbC1pbmZvL2dlbmVyYWwtaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURDQTtFQU9JLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLDZJQUFBO0VBQUEsNEZBQUE7QUNKSjs7QURKSTtFQUNJLGtCQUFBO0FDTVI7O0FESkk7RUFDSSxZQUFBO0FDTVIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZ2VuZXJhbC1pbmZvL2dlbmVyYWwtaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tcm93e1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuaHJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNkZWRlZGU7XHJcbn1cclxuaW9uLWRhdGV0aW1le1xyXG4gICAgcGFkZGluZy1sZWZ0OjBweDtcclxufVxyXG5pb24tY2FyZHtcclxuICAgIGlvbi1jYXJkLWhlYWRlcntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBpb24tcm93e1xyXG4gICAgICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgfVxyXG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICMzMzM7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjODViMGZiIDAlLCAjMzg4MGZmOWUgMCUsICMwMDdlZmZkOSAwJSwgI2ZlZmVmZSAxMDAlKTtcclxufSIsImlvbi1yb3cge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5ociB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZGVkZWRlO1xufVxuXG5pb24tZGF0ZXRpbWUge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuaW9uLWNhcmQge1xuICBib3JkZXItdG9wOiAzcHggc29saWQgIzMzMztcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjODViMGZiIDAlLCAjMzg4MGZmOWUgMCUsICMwMDdlZmZkOSAwJSwgI2ZlZmVmZSAxMDAlKTtcbn1cbmlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jYXJkIGlvbi1yb3cge1xuICBwYWRkaW5nOiAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/general-info/general-info.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/general-info/general-info.component.ts ***!
  \***************************************************************/
/*! exports provided: GeneralInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralInfoComponent", function() { return GeneralInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var GeneralInfoComponent = /** @class */ (function () {
    function GeneralInfoComponent() {
        this.mode = 'view';
        this.user = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    GeneralInfoComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mode'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GeneralInfoComponent.prototype, "mode", void 0);
    GeneralInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-general-info',
            template: __webpack_require__(/*! raw-loader!./general-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/general-info/general-info.component.html"),
            styles: [__webpack_require__(/*! ./general-info.component.scss */ "./src/app/shared/general-info/general-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GeneralInfoComponent);
    return GeneralInfoComponent;
}());



/***/ }),

/***/ "./src/app/shared/history/history.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/shared/history/history.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-row {\n  padding: 10px;\n}\n\nhr {\n  width: 100%;\n  background: #dedede;\n}\n\nion-datetime {\n  padding-left: 0px;\n}\n\nion-card {\n  border-top: 3px solid #333;\n  color: black;\n  background: -webkit-gradient(linear, left top, left bottom, from(#85b0fb), color-stop(0%, #3880ff9e), color-stop(0%, #007effd9), to(#fefefe));\n  background: linear-gradient(to bottom, #85b0fb 0%, #3880ff9e 0%, #007effd9 0%, #fefefe 100%);\n}\n\nion-card ion-card-header {\n  text-align: center;\n}\n\nion-card ion-row {\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hpc3RvcnkvRjpcXFByb2plY3RzXFxTeW5jQXBwVGljcy9zcmNcXGFwcFxcc2hhcmVkXFxoaXN0b3J5XFxoaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FDQUo7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBRENBO0VBT0ksMEJBQUE7RUFDQSxZQUFBO0VBQ0EsNklBQUE7RUFBQSw0RkFBQTtBQ0pKOztBREpJO0VBQ0ksa0JBQUE7QUNNUjs7QURKSTtFQUNJLFlBQUE7QUNNUiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oaXN0b3J5L2hpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLXJvd3tcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbmhye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGVkZWRlO1xyXG59XHJcbmlvbi1kYXRldGltZXtcclxuICAgIHBhZGRpbmctbGVmdDowcHg7XHJcbn1cclxuaW9uLWNhcmR7XHJcbiAgICBpb24tY2FyZC1oZWFkZXJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgaW9uLXJvd3tcclxuICAgICAgICBwYWRkaW5nOjBweDtcclxuICAgIH1cclxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjMzMzO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzg1YjBmYiAwJSwgIzM4ODBmZjllIDAlLCAjMDA3ZWZmZDkgMCUsICNmZWZlZmUgMTAwJSk7XHJcbn0iLCJpb24tcm93IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaHIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2RlZGVkZTtcbn1cblxuaW9uLWRhdGV0aW1lIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICMzMzM7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzg1YjBmYiAwJSwgIzM4ODBmZjllIDAlLCAjMDA3ZWZmZDkgMCUsICNmZWZlZmUgMTAwJSk7XG59XG5pb24tY2FyZCBpb24tY2FyZC1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY2FyZCBpb24tcm93IHtcbiAgcGFkZGluZzogMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/history/history.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/history/history.component.ts ***!
  \*****************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HistoryComponent = /** @class */ (function () {
    function HistoryComponent() {
        this.mode = 'view';
    }
    HistoryComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mode'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HistoryComponent.prototype, "mode", void 0);
    HistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! raw-loader!./history.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/history/history.component.html"),
            styles: [__webpack_require__(/*! ./history.component.scss */ "./src/app/shared/history/history.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/shared/insurance/insurance.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/shared/insurance/insurance.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-row {\n  padding: 10px;\n}\n\nhr {\n  width: 100%;\n  background: #dedede;\n}\n\nion-datetime {\n  padding-left: 0px;\n}\n\nion-card {\n  border-top: 3px solid #333;\n  color: black;\n  background: -webkit-gradient(linear, left top, left bottom, from(#85b0fb), color-stop(0%, #3880ff9e), color-stop(0%, #007effd9), to(#fefefe));\n  background: linear-gradient(to bottom, #85b0fb 0%, #3880ff9e 0%, #007effd9 0%, #fefefe 100%);\n}\n\nion-card ion-card-header {\n  text-align: center;\n}\n\nion-card ion-row {\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2luc3VyYW5jZS9GOlxcUHJvamVjdHNcXFN5bmNBcHBUaWNzL3NyY1xcYXBwXFxzaGFyZWRcXGluc3VyYW5jZVxcaW5zdXJhbmNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvaW5zdXJhbmNlL2luc3VyYW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURDQTtFQU9JLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLDZJQUFBO0VBQUEsNEZBQUE7QUNKSjs7QURKSTtFQUNJLGtCQUFBO0FDTVI7O0FESkk7RUFDSSxZQUFBO0FDTVIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvaW5zdXJhbmNlL2luc3VyYW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tcm93e1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuaHJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNkZWRlZGU7XHJcbn1cclxuaW9uLWRhdGV0aW1le1xyXG4gICAgcGFkZGluZy1sZWZ0OjBweDtcclxufVxyXG5pb24tY2FyZHtcclxuICAgIGlvbi1jYXJkLWhlYWRlcntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBpb24tcm93e1xyXG4gICAgICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgfVxyXG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICMzMzM7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjODViMGZiIDAlLCAjMzg4MGZmOWUgMCUsICMwMDdlZmZkOSAwJSwgI2ZlZmVmZSAxMDAlKTtcclxufSIsImlvbi1yb3cge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5ociB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZGVkZWRlO1xufVxuXG5pb24tZGF0ZXRpbWUge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuaW9uLWNhcmQge1xuICBib3JkZXItdG9wOiAzcHggc29saWQgIzMzMztcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjODViMGZiIDAlLCAjMzg4MGZmOWUgMCUsICMwMDdlZmZkOSAwJSwgI2ZlZmVmZSAxMDAlKTtcbn1cbmlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jYXJkIGlvbi1yb3cge1xuICBwYWRkaW5nOiAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/insurance/insurance.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/insurance/insurance.component.ts ***!
  \*********************************************************/
/*! exports provided: InsuranceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsuranceComponent", function() { return InsuranceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InsuranceComponent = /** @class */ (function () {
    function InsuranceComponent() {
        this.mode = 'view';
    }
    InsuranceComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mode'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InsuranceComponent.prototype, "mode", void 0);
    InsuranceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-insurance',
            template: __webpack_require__(/*! raw-loader!./insurance.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/insurance/insurance.component.html"),
            styles: [__webpack_require__(/*! ./insurance.component.scss */ "./src/app/shared/insurance/insurance.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InsuranceComponent);
    return InsuranceComponent;
}());



/***/ }),

/***/ "./src/app/shared/morders/morders.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/shared/morders/morders.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-row {\n  padding: 10px;\n}\n\nhr {\n  width: 100%;\n  background: #dedede;\n}\n\nion-datetime {\n  padding-left: 0px;\n}\n\nion-card {\n  border-top: 3px solid #333;\n  color: black;\n  background: -webkit-gradient(linear, left top, left bottom, from(#85b0fb), color-stop(0%, #3880ff9e), color-stop(0%, #007effd9), to(#fefefe));\n  background: linear-gradient(to bottom, #85b0fb 0%, #3880ff9e 0%, #007effd9 0%, #fefefe 100%);\n}\n\nion-card ion-card-header {\n  text-align: center;\n}\n\nion-card ion-row {\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vcmRlcnMvRjpcXFByb2plY3RzXFxTeW5jQXBwVGljcy9zcmNcXGFwcFxcc2hhcmVkXFxtb3JkZXJzXFxtb3JkZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvbW9yZGVycy9tb3JkZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FDQUo7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBRENBO0VBT0ksMEJBQUE7RUFDQSxZQUFBO0VBQ0EsNklBQUE7RUFBQSw0RkFBQTtBQ0pKOztBREpJO0VBQ0ksa0JBQUE7QUNNUjs7QURKSTtFQUNJLFlBQUE7QUNNUiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb3JkZXJzL21vcmRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLXJvd3tcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbmhye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGVkZWRlO1xyXG59XHJcbmlvbi1kYXRldGltZXtcclxuICAgIHBhZGRpbmctbGVmdDowcHg7XHJcbn1cclxuaW9uLWNhcmR7XHJcbiAgICBpb24tY2FyZC1oZWFkZXJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgaW9uLXJvd3tcclxuICAgICAgICBwYWRkaW5nOjBweDtcclxuICAgIH1cclxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjMzMzO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzg1YjBmYiAwJSwgIzM4ODBmZjllIDAlLCAjMDA3ZWZmZDkgMCUsICNmZWZlZmUgMTAwJSk7XHJcbn0iLCJpb24tcm93IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaHIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2RlZGVkZTtcbn1cblxuaW9uLWRhdGV0aW1lIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICMzMzM7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzg1YjBmYiAwJSwgIzM4ODBmZjllIDAlLCAjMDA3ZWZmZDkgMCUsICNmZWZlZmUgMTAwJSk7XG59XG5pb24tY2FyZCBpb24tY2FyZC1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY2FyZCBpb24tcm93IHtcbiAgcGFkZGluZzogMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/morders/morders.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/morders/morders.component.ts ***!
  \*****************************************************/
/*! exports provided: MordersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MordersComponent", function() { return MordersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MordersComponent = /** @class */ (function () {
    function MordersComponent() {
        this.mode = 'view';
    }
    MordersComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mode'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MordersComponent.prototype, "mode", void 0);
    MordersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-morders',
            template: __webpack_require__(/*! raw-loader!./morders.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/morders/morders.component.html"),
            styles: [__webpack_require__(/*! ./morders.component.scss */ "./src/app/shared/morders/morders.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MordersComponent);
    return MordersComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _consult_consult_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./consult/consult.component */ "./src/app/shared/consult/consult.component.ts");
/* harmony import */ var _dorders_dorders_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dorders/dorders.component */ "./src/app/shared/dorders/dorders.component.ts");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./history/history.component */ "./src/app/shared/history/history.component.ts");
/* harmony import */ var _insurance_insurance_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./insurance/insurance.component */ "./src/app/shared/insurance/insurance.component.ts");
/* harmony import */ var _morders_morders_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./morders/morders.component */ "./src/app/shared/morders/morders.component.ts");
/* harmony import */ var _general_info_general_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./general-info/general-info.component */ "./src/app/shared/general-info/general-info.component.ts");
/* harmony import */ var ngx_mask_ionic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-mask-ionic */ "./node_modules/ngx-mask-ionic/fesm5/ngx-mask-ionic.js");












var components = [
    _consult_consult_component__WEBPACK_IMPORTED_MODULE_5__["ConsultComponent"],
    _dorders_dorders_component__WEBPACK_IMPORTED_MODULE_6__["DordersComponent"],
    _history_history_component__WEBPACK_IMPORTED_MODULE_7__["HistoryComponent"],
    _insurance_insurance_component__WEBPACK_IMPORTED_MODULE_8__["InsuranceComponent"],
    _morders_morders_component__WEBPACK_IMPORTED_MODULE_9__["MordersComponent"],
    _general_info_general_info_component__WEBPACK_IMPORTED_MODULE_10__["GeneralInfoComponent"],
];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_mask_ionic__WEBPACK_IMPORTED_MODULE_11__["NgxMaskIonicModule"],
            ],
            declarations: components,
            exports: components,
            providers: [],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~details-details-module~transfer-transfer-module-es5.js.map