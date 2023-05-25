/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([
    ["/js/app"], {

        /***/
        "./Resources/js/app.js":
        /*!*****************************!*\
          !*** ./Resources/js/app.js ***!
          \*****************************/
        /***/
            ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

            eval("__webpack_require__(/*! ./bootstrap */ \"./Resources/js/bootstrap.js\");\n__webpack_require__(/*! ./myvue3 */ \"./Resources/js/myvue3.js\");\n__webpack_require__(/*! ./xot.js */ \"./Resources/js/xot.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZXNvdXJjZXMvanMvYXBwLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBQSxtQkFBTyxDQUFDLGdEQUFhLENBQUM7QUFFdEJBLG1CQUFPLENBQUMsMENBQVUsQ0FBQztBQUVuQkEsbUJBQU8sQ0FBQyx1Q0FBVSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL2pzL2FwcC5qcz9lZDhlIl0sInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJy4vYm9vdHN0cmFwJyk7XHJcblxyXG5yZXF1aXJlKCcuL215dnVlMycpO1xyXG5cclxucmVxdWlyZSgnLi94b3QuanMnKTsiXSwibmFtZXMiOlsicmVxdWlyZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Resources/js/app.js\n");

            /***/
        }),

        /***/
        "./Resources/js/bootstrap.js":
        /*!***********************************!*\
          !*** ./Resources/js/bootstrap.js ***!
          \***********************************/
        /***/
            ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

            eval("/* provided dependency */ var __webpack_provided_window_dot_jQuery = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\nwindow._ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n\n/**\r\n * We'll load the axios HTTP library which allows us to easily issue requests\r\n * to our Laravel back-end. This library automatically handles sending the\r\n * CSRF token as a header based on the value of the \"XSRF\" token cookie.\r\n */\n\ntry {\n  window.$ = __webpack_provided_window_dot_jQuery = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n  __webpack_require__(/*! bootstrap-italia */ \"./node_modules/bootstrap-italia/dist/bootstrap-italia.esm.js\");\n} catch (e) {\n  console.log(e);\n}\nwindow.axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\nwindow.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';\n\n/**\r\n * Echo exposes an expressive API for subscribing to channels and listening\r\n * for events that are broadcast by Laravel. Echo and event broadcasting\r\n * allows your team to easily build robust real-time web applications.\r\n */\n\n// import Echo from 'laravel-echo';\n\n// window.Pusher = require('pusher-js');\n\n// window.Echo = new Echo({\n//     broadcaster: 'pusher',\n//     key: process.env.MIX_PUSHER_APP_KEY,\n//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,\n//     forceTLS: true\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZXNvdXJjZXMvanMvYm9vdHN0cmFwLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQUEsTUFBTSxDQUFDQyxDQUFDLEdBQUdDLG1CQUFPLENBQUMsK0NBQVEsQ0FBQzs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJO0VBQ0FGLE1BQU0sQ0FBQ0csQ0FBQyxHQUFHSCxvQ0FBYSxHQUFHRSxtQkFBTyxDQUFDLG9EQUFRLENBQUM7RUFDNUNBLG1CQUFPLENBQUMsc0ZBQWtCLENBQUM7QUFDL0IsQ0FBQyxDQUFDLE9BQU9HLENBQUMsRUFBRTtFQUNSQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsQ0FBQyxDQUFDO0FBQ2xCO0FBRUFMLE1BQU0sQ0FBQ1EsS0FBSyxHQUFHTixtQkFBTyxDQUFDLDRDQUFPLENBQUM7QUFFL0JGLE1BQU0sQ0FBQ1EsS0FBSyxDQUFDQyxRQUFRLENBQUNDLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsZ0JBQWdCOztBQUUzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL1Jlc291cmNlcy9qcy9ib290c3RyYXAuanM/MzIxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xyXG5cclxuLyoqXHJcbiAqIFdlJ2xsIGxvYWQgdGhlIGF4aW9zIEhUVFAgbGlicmFyeSB3aGljaCBhbGxvd3MgdXMgdG8gZWFzaWx5IGlzc3VlIHJlcXVlc3RzXHJcbiAqIHRvIG91ciBMYXJhdmVsIGJhY2stZW5kLiBUaGlzIGxpYnJhcnkgYXV0b21hdGljYWxseSBoYW5kbGVzIHNlbmRpbmcgdGhlXHJcbiAqIENTUkYgdG9rZW4gYXMgYSBoZWFkZXIgYmFzZWQgb24gdGhlIHZhbHVlIG9mIHRoZSBcIlhTUkZcIiB0b2tlbiBjb29raWUuXHJcbiAqL1xyXG5cclxudHJ5IHtcclxuICAgIHdpbmRvdy4kID0gd2luZG93LmpRdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG4gICAgcmVxdWlyZSgnYm9vdHN0cmFwLWl0YWxpYScpO1xyXG59IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxufVxyXG5cclxud2luZG93LmF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcclxuXHJcbndpbmRvdy5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1SZXF1ZXN0ZWQtV2l0aCddID0gJ1hNTEh0dHBSZXF1ZXN0JztcclxuXHJcbi8qKlxyXG4gKiBFY2hvIGV4cG9zZXMgYW4gZXhwcmVzc2l2ZSBBUEkgZm9yIHN1YnNjcmliaW5nIHRvIGNoYW5uZWxzIGFuZCBsaXN0ZW5pbmdcclxuICogZm9yIGV2ZW50cyB0aGF0IGFyZSBicm9hZGNhc3QgYnkgTGFyYXZlbC4gRWNobyBhbmQgZXZlbnQgYnJvYWRjYXN0aW5nXHJcbiAqIGFsbG93cyB5b3VyIHRlYW0gdG8gZWFzaWx5IGJ1aWxkIHJvYnVzdCByZWFsLXRpbWUgd2ViIGFwcGxpY2F0aW9ucy5cclxuICovXHJcblxyXG4vLyBpbXBvcnQgRWNobyBmcm9tICdsYXJhdmVsLWVjaG8nO1xyXG5cclxuLy8gd2luZG93LlB1c2hlciA9IHJlcXVpcmUoJ3B1c2hlci1qcycpO1xyXG5cclxuLy8gd2luZG93LkVjaG8gPSBuZXcgRWNobyh7XHJcbi8vICAgICBicm9hZGNhc3RlcjogJ3B1c2hlcicsXHJcbi8vICAgICBrZXk6IHByb2Nlc3MuZW52Lk1JWF9QVVNIRVJfQVBQX0tFWSxcclxuLy8gICAgIGNsdXN0ZXI6IHByb2Nlc3MuZW52Lk1JWF9QVVNIRVJfQVBQX0NMVVNURVIsXHJcbi8vICAgICBmb3JjZVRMUzogdHJ1ZVxyXG4vLyB9KTsiXSwibmFtZXMiOlsid2luZG93IiwiXyIsInJlcXVpcmUiLCIkIiwialF1ZXJ5IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Resources/js/bootstrap.js\n");

            /***/
        }),

        /***/
        "./Resources/js/myvue3.js":
        /*!********************************!*\
          !*** ./Resources/js/myvue3.js ***!
          \********************************/
        /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\n//import Audiojs from '../../../../Modules/UI/Resources/js/components/audioplayer/Audiojs.vue';\n//import Videojs from '../../../../Modules/UI/Resources/js/components/videoplayer/Videojs.vue';\n//import ExampleComponent                     from '../../../../Modules/UI/Resources/js/components/ExampleComponent';\n//import Noui from '../../../../Modules/UI/Resources/js/components/slider/Noui.vue';\n\nvar app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)({\n  data: function data() {\n    return {\n      count: 0\n    };\n  }\n});\n\n//app.component('videoplayer-component', Videojs);\n//app.component('v-slider', Noui);\napp.mount('#app');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZXNvdXJjZXMvanMvbXl2dWUzLmpzLmpzIiwibWFwcGluZ3MiOiI7O0FBQWdDOztBQUVoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQyxHQUFHLEdBQUdELDhDQUFTLENBQUM7RUFDbEJFLElBQUksa0JBQUc7SUFDSCxPQUFPO01BQ0hDLEtBQUssRUFBRTtJQUNYLENBQUM7RUFDTDtBQUNKLENBQUMsQ0FBQzs7QUFHRjtBQUNBO0FBQ0FGLEdBQUcsQ0FBQ0csS0FBSyxDQUFDLE1BQU0sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL1Jlc291cmNlcy9qcy9teXZ1ZTMuanM/YWQ2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcHAgfSBmcm9tICd2dWUnO1xyXG5cclxuLy9pbXBvcnQgQXVkaW9qcyBmcm9tICcuLi8uLi8uLi8uLi9Nb2R1bGVzL1RoZW1lL1Jlc291cmNlcy9qcy9jb21wb25lbnRzL2F1ZGlvcGxheWVyL0F1ZGlvanMudnVlJztcclxuLy9pbXBvcnQgVmlkZW9qcyBmcm9tICcuLi8uLi8uLi8uLi9Nb2R1bGVzL1RoZW1lL1Jlc291cmNlcy9qcy9jb21wb25lbnRzL3ZpZGVvcGxheWVyL1ZpZGVvanMudnVlJztcclxuLy9pbXBvcnQgRXhhbXBsZUNvbXBvbmVudCAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL01vZHVsZXMvVGhlbWUvUmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRXhhbXBsZUNvbXBvbmVudCc7XHJcbi8vaW1wb3J0IE5vdWkgZnJvbSAnLi4vLi4vLi4vLi4vTW9kdWxlcy9UaGVtZS9SZXNvdXJjZXMvanMvY29tcG9uZW50cy9zbGlkZXIvTm91aS52dWUnO1xyXG5cclxuY29uc3QgYXBwID0gY3JlYXRlQXBwKHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY291bnQ6IDBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbi8vYXBwLmNvbXBvbmVudCgndmlkZW9wbGF5ZXItY29tcG9uZW50JywgVmlkZW9qcyk7XHJcbi8vYXBwLmNvbXBvbmVudCgndi1zbGlkZXInLCBOb3VpKTtcclxuYXBwLm1vdW50KCcjYXBwJyk7Il0sIm5hbWVzIjpbImNyZWF0ZUFwcCIsImFwcCIsImRhdGEiLCJjb3VudCIsIm1vdW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Resources/js/myvue3.js\n");

            /***/
        }),

        /***/
        "./Resources/js/xot.js":
        /*!*****************************!*\
          !*** ./Resources/js/xot.js ***!
          \*****************************/
        /***/
            (() => {

            eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsid2VicGFjazovLy8uL1Jlc291cmNlcy9qcy94b3QuanM/ODVlMiJdLCJzb3VyY2VzQ29udGVudCI6WyIiXSwibWFwcGluZ3MiOiIiLCJmaWxlIjoiLi9SZXNvdXJjZXMvanMveG90LmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Resources/js/xot.js\n");

            /***/
        }),

        /***/
        "./Resources/scss/app.scss":
        /*!*********************************!*\
          !*** ./Resources/scss/app.scss ***!
          \*********************************/
        /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZXNvdXJjZXMvc2Nzcy9hcHAuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvc2Nzcy9hcHAuc2Nzcz9mNjEyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Resources/scss/app.scss\n");

            /***/
        })

    },
    /******/
    __webpack_require__ => { // webpackRuntimeModules
        /******/
        var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
            /******/
            __webpack_require__.O(0, ["css/app", "/js/vendor"], () => (__webpack_exec__("./Resources/js/app.js"), __webpack_exec__("./Resources/scss/app.scss")));
        /******/
        var __webpack_exports__ = __webpack_require__.O();
        /******/
    }
]);