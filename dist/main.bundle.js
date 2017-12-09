webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"formControls\">\n  <form>\n    <div class=\"form-control\">\n      <label>Timer in seconds: </label>\n      <input [(ngModel)]=\"doTimer\" name=\"doTimer\" (keyup)=\"resetTimer();\" >\n    </div>\n  </form>\n</div>\n\n\n<div id=\"controls\">\n  <button *ngIf=\"!start_game\" class=\"btn btn-primary\" (click)=\"populateLife();\">Start Game</button>\n  <button *ngIf=\"start_game\" class=\"btn btn-primary\" (click)=\"killPopulateLife();\">Stop</button>\n  <button *ngIf=\"start_game\" class=\"btn btn-primary\" (click)=\"resetPopulateLife();\">Reset</button>\n</div>\n\n\n<div id=\"main-grid\"\n      *ngIf=\"gol_grid$ | async as mainGrid\">\n  <div id=\"rows\" *ngFor=\"let row of mainGrid; let y = index\">\n    <div \n      id=\"cols\" \n      *ngFor=\"let col of row; let x = index\" \n      [ngClass]=\"{'cell': true, 'cell-live': col}\"\n      >\n    </div>\n    <div class=\"clear-row\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#controls {\n  margin-bottom: 15px;\n  margin-top: 15px; }\n\n.cell {\n  float: left;\n  cursor: pointer;\n  width: 15px;\n  height: 15px;\n  background: white;\n  border: 0.001em solid #ddd; }\n\n.clear-row {\n  clear: both; }\n\n.cell-death {\n  background: #fff; }\n\n.cell-live {\n  background: #666; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_gameoflife_service__ = __webpack_require__("../../../../../src/app/services/gameoflife.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * SERVICES
 */

var AppComponent = (function () {
    function AppComponent(_gameoflifeService) {
        this._gameoflifeService = _gameoflifeService;
        this.start_game = false;
        /**
         * NgModels
         */
        this.doTimer = 600;
        /**
         * Request Store Game Of Life Data<Array<number>>
         */
        this.gol_grid$ = this._gameoflifeService.requestStore();
        this.createBoard();
    }
    /**
       * Create First Time Board/Grid, for the Game
       */
    AppComponent.prototype.createBoard = function () {
        this._gameoflifeService.requestTryCreateBoard();
    };
    AppComponent.prototype.populateLife = function () {
        this.start_game = true;
        /**
         * Creates a tic tac clock to populate life
         */
        this._gameoflifeService.requestPopulateLife(this.doTimer);
    };
    /**
     * Stop populate life in the game
     */
    AppComponent.prototype.killPopulateLife = function () {
        this.start_game = false;
        this._gameoflifeService.killPopulateLife();
    };
    /**
     * Restart the game
     */
    AppComponent.prototype.resetPopulateLife = function () {
        this.killPopulateLife();
        this.createBoard();
    };
    AppComponent.prototype.resetTimer = function () {
        if (this.start_game)
            this.populateLife();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_gameoflife_service__["a" /* GameOfLifeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_gameoflife_service__["a" /* GameOfLifeService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_app_reducers__ = __webpack_require__("../../../../../src/app/store/app.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_GameOfLife_effects__ = __webpack_require__("../../../../../src/app/store/GameOfLife.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_gameoflife_service__ = __webpack_require__("../../../../../src/app/services/gameoflife.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/**
 * NgRx Store / Actions / Effects
 */




/**
 * SERVICES
 */

/**
 * COMPONENTS
 */

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["c" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__store_app_reducers__["a" /* reducers */]),
            __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["c" /* EffectsModule */].forRoot([__WEBPACK_IMPORTED_MODULE_7__store_GameOfLife_effects__["a" /* GOLEffects */]]),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__services_gameoflife_service__["a" /* GameOfLifeService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/services/gameoflife.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameOfLifeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_GameOfLife_actions__ = __webpack_require__("../../../../../src/app/store/GameOfLife.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_interval__ = __webpack_require__("../../../../rxjs/add/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_interval__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * NGRX
 */


/**
 * RxJs
 */


var GameOfLifeService = (function () {
    function GameOfLifeService(_store) {
        this._store = _store;
    }
    /**
     * Request Game Of Life Store DATA
     * @return Observable<number[]>, Observable with GameOfLife Store Data
     */
    GameOfLifeService.prototype.requestStore = function () {
        return this._store.select('gameoflife');
    };
    /**
     * Executes Action `TryCreate_Board() => trigger @Effects`
     */
    GameOfLifeService.prototype.requestTryCreateBoard = function () {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__store_GameOfLife_actions__["d" /* TryCreate_Board */]());
    };
    /**
     * Request to Populate Life in the grid/matrix/board of the Game Of Life
     */
    GameOfLifeService.prototype.requestPopulateLife = function (utime) {
        var _this = this;
        this.populate =
            __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].interval(utime)
                .subscribe(function () { return _this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__store_GameOfLife_actions__["e" /* TryPopulate_Life */]()); });
    };
    /**
     * Kill the populateLife interval
     */
    GameOfLifeService.prototype.killPopulateLife = function () {
        this.populate.unsubscribe();
    };
    return GameOfLifeService;
}());
GameOfLifeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _a || Object])
], GameOfLifeService);

var _a;
//# sourceMappingURL=gameoflife.service.js.map

/***/ }),

/***/ "../../../../../src/app/store/GameOfLife.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TRY_CREATE_BOARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TRY_POPULATE_LIFE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return POPULATE_LIFE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TryCreate_Board; });
/* unused harmony export Populate_Life */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TryPopulate_Life; });
//Define List of Actions
var TRY_CREATE_BOARD = 'TRY_CREATE_BOARD';
var TRY_POPULATE_LIFE = 'TRY_POPULATE_LIFE';
var POPULATE_LIFE = 'POPULATE_LIFE';
var TryCreate_Board = (function () {
    function TryCreate_Board() {
        this.type = TRY_CREATE_BOARD;
    }
    return TryCreate_Board;
}());

var Populate_Life = (function () {
    function Populate_Life(payload) {
        this.payload = payload;
        this.type = POPULATE_LIFE;
    }
    return Populate_Life;
}());

var TryPopulate_Life = (function () {
    function TryPopulate_Life() {
        this.type = TRY_POPULATE_LIFE;
    }
    return TryPopulate_Life;
}());

//# sourceMappingURL=GameOfLife.actions.js.map

/***/ }),

/***/ "../../../../../src/app/store/GameOfLife.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GOLEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_first__ = __webpack_require__("../../../../rxjs/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_shareReplay__ = __webpack_require__("../../../../rxjs/add/operator/shareReplay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_shareReplay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_shareReplay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__GameOfLife_actions__ = __webpack_require__("../../../../../src/app/store/GameOfLife.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//RxJs







//NgRx Store


var GOLEffects = (function () {
    function GOLEffects(actions$, _httpClnt) {
        var _this = this;
        this.actions$ = actions$;
        this._httpClnt = _httpClnt;
        // private readonly GAME_OF_LIFE = 'http://localhost/gameoflife/gameoflife.php';
        // private readonly POPULATE_GOL = 'http://localhost/gameoflife/populate.php';
        this.GAME_OF_LIFE = 'http://www.yobsled.com/cnb/gameoflife/gameoflife.php';
        this.POPULATE_GOL = 'http://www.yobsled.com/cnb/gameoflife/populate.php';
        //REQUEST TO THE BACK END SERVER THE BOARD/GRID
        this.createBoard = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_10__GameOfLife_actions__["b" /* TRY_CREATE_BOARD */])
            .map(function (action) {
            return;
        })
            .switchMap(function () {
            /**
             * Request Board/grid, FIRST TIME
             */
            return _this._httpClnt.post(_this.GAME_OF_LIFE, '', { observe: 'body', responseType: 'json' })
                .shareReplay()
                .take(1);
        }).mergeMap(function (payload) {
            return [
                {
                    type: __WEBPACK_IMPORTED_MODULE_10__GameOfLife_actions__["a" /* POPULATE_LIFE */],
                    payload: payload
                }
            ];
        });
        //REQUEST TO THE BACK END SERVER THE BOARD/GRID
        this.populateLife = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_10__GameOfLife_actions__["c" /* TRY_POPULATE_LIFE */])
            .map(function (action) {
            return;
        })
            .switchMap(function () {
            /**
             * Request Board/grid, FIRST TIME
             */
            return _this._httpClnt.post(_this.POPULATE_GOL, '', { observe: 'body', responseType: 'json' })
                .shareReplay()
                .take(1);
        }).mergeMap(function (payload) {
            return [
                {
                    type: __WEBPACK_IMPORTED_MODULE_10__GameOfLife_actions__["a" /* POPULATE_LIFE */],
                    payload: payload
                }
            ];
        });
    }
    return GOLEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_9__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], GOLEffects.prototype, "createBoard", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_9__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], GOLEffects.prototype, "populateLife", void 0);
GOLEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__ngrx_effects__["a" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object])
], GOLEffects);

var _a, _b;
//# sourceMappingURL=GameOfLife.effects.js.map

/***/ }),

/***/ "../../../../../src/app/store/GameOfLife.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = GameOfLifeReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GameOfLife_actions__ = __webpack_require__("../../../../../src/app/store/GameOfLife.actions.ts");

var initialLoginState = [];
/**
 * Login reducer for LoginStore
 *
 * @since 1.0.0
 *
 * @param state
 * @param action
 */
function GameOfLifeReducer(state, action) {
    if (state === void 0) { state = initialLoginState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__GameOfLife_actions__["a" /* POPULATE_LIFE */]:
            return action.payload;
        default:
            return state;
    }
}
//# sourceMappingURL=GameOfLife.reducers.js.map

/***/ }),

/***/ "../../../../../src/app/store/app.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GameOfLife_reducers__ = __webpack_require__("../../../../../src/app/store/GameOfLife.reducers.ts");

/**
 * Define the Reducers for the @NgRx store (set in app.module.ts)
 */
var reducers = {
    gameoflife: __WEBPACK_IMPORTED_MODULE_0__GameOfLife_reducers__["a" /* GameOfLifeReducer */]
};
//# sourceMappingURL=app.reducers.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map