(()=>{"use strict";var e=document.querySelector(".profile-info__edit-button"),t=document.querySelector(".profile__add-button"),r=document.querySelector(".popup_type_edit-button"),n=document.querySelector(".popup_type_add-photo"),o=r.querySelector(".form"),i=o.querySelector(".form__item_info_name"),u=o.querySelector(".form__item_info_job"),c=n.querySelector(".form"),l=document.querySelector(".elements");const a={formSelector:".form",inputSelector:".form__item",submitButtonSelector:".form__button-submit",inactiveButtonClass:"form__button-submit_error",inputErrorClass:"form__item_type_line-error",errorClass:"form__item-error_active"};function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==s(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===s(o)?o:String(o)),n)}var o}var p=function(){function e(t){var r=t.data,n=t.templateSelector,o=t.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=r.name,this._link=r.link,this._templateSelector=n,this._handleCardClick=o}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_handleLikeCard",value:function(){this._likeBtn.classList.toggle("element-container__like-btn_active")}},{key:"_handleRemoveCard",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var e=this;this._likeBtn.addEventListener("click",(function(){e._handleLikeCard()})),this._deleteBtn.addEventListener("click",(function(){e._handleRemoveCard()})),this._cardImg.addEventListener("click",(function(){e._handleCardClick()}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._likeBtn=this._element.querySelector(".element-container__like-btn"),this._deleteBtn=this._element.querySelector(".element__delete-btn"),this._cardImg=this._element.querySelector(".element__mask"),this._cardText=this._element.querySelector(".element-container__name"),this._setEventListeners(),this._cardText.textContent=this._name,this._cardImg.src=this._link,this._cardImg.alt=this._name,this._element}}])&&f(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,b(n.key),n)}}function d(e,t,r){return(t=b(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e){var t=function(e,t){if("object"!==y(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===y(t)?t:String(t)}var v=function(){function e(t,r){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),d(this,"_showInputError",(function(e,t){n._errorElement=n._form.querySelector(".".concat(e.id,"-error")),e.classList.add(n._inputErrorClass),n._errorElement.textContent=t,n._errorElement.classList.add(n._errorClass)})),d(this,"_hideInputError",(function(e){n._errorElement=n._form.querySelector(".".concat(e.id,"-error")),e.classList.remove(n._inputErrorClass),n._errorElement.classList.remove(n._errorClass),n._errorElement.textContent=""})),d(this,"_checkValidity",(function(e){e.validity.valid?n._hideInputError(e):n._showInputError(e,e.validationMessage)})),d(this,"_hasInvalidInput",(function(){return n._inputList.some((function(e){return!e.validity.valid}))})),d(this,"_switchButtonPosition",(function(){n._hasInvalidInput()?(n._buttonElement.classList.add(n._inactiveButtonClass),n._buttonElement.setAttribute("disabled","true")):(n._buttonElement.classList.remove(n._inactiveButtonClass),n._buttonElement.removeAttribute("disabled"))})),d(this,"_setInputListeners",(function(){n._switchButtonPosition(),n._inputList.forEach((function(e){e.addEventListener("input",(function(){n._checkValidity(e),n._switchButtonPosition(n._inputList,n._buttonForm)}))}))})),d(this,"enableValidation",(function(){n._setInputListeners()})),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._form=r,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._buttonElement=this._form.querySelector(this._submitButtonSelector)}var t,r;return t=e,(r=[{key:"resetValidaition",value:function(){var e=this;this._switchButtonPosition(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&m(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==_(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===_(o)?o:String(o)),n)}var o}var S=function(){function e(t,r){var n=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=n,this._container=r}var t,r;return t=e,(r=[{key:"renderItems",value:function(e){var t=this;this._initialArray=e,this._initialArray.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&h(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==g(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===g(o)?o:String(o)),n)}var o}var E=function(){function e(t){var r=t.popupSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(r),this._handleEscClose=this._handleEscClose.bind(this)}var t,r;return t=e,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target===t.currentTarget||t.target.classList.contains("popup__close"))&&e.close()}))}}])&&w(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function j(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==k(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==k(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===k(o)?o:String(o)),n)}var o}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=C(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},P.apply(this,arguments)}function C(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}function L(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(n);if(o){var r=I(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return L(this,e)});function u(e){var t,r=e.popupSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,{popupSelector:r}))._popupImage=t._popup.querySelector(".popup__open-photo"),t._popupDescription=t._popup.querySelector(".popup__open-caption"),t}return t=u,(r=[{key:"open",value:function(e){this._popupImage.src=e.link,this._popupDescription.textContent=e.name,this._popupImage.alt=e.name,P(I(u.prototype),"open",this).call(this)}}])&&j(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(E);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function B(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==T(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==T(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===T(o)?o:String(o)),n)}var o}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=R(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},x.apply(this,arguments)}function R(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}function V(e,t){return V=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},V(e,t)}function A(e,t){if(t&&("object"===T(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&V(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(n);if(o){var r=D(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return A(this,e)});function u(e){var t,r=e.popupSelector,n=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,{popupSelector:r}))._handleFormSubmit=n,t._form=t._popup.querySelector(".form"),t._inputList=t._form.querySelectorAll(".form__item"),t}return t=u,(r=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())})),x(D(u.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){x(D(u.prototype),"close",this).call(this),this._form.reset()}}])&&B(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(E);function U(e){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(e)}function z(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==U(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==U(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===U(o)?o:String(o)),n)}var o}var M=function(){function e(t){var r=t.nameSelector,n=t.infoSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(r),this._info=document.querySelector(n)}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{firstname:this._name.textContent,career:this._info.textContent}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.firstname,this._info.textContent=e.career}}])&&z(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),N=function(e){return new p({data:e,templateSelector:"#element-template",handleCardClick:function(){G.open(e)}}).generateCard()};e.addEventListener("click",(function(){J.open();var e=H.getUserInfo();i.value=e.firstname,u.value=e.career})),t.addEventListener("click",(function(){W.resetValidaition(),K.open()}));var G=new q({popupSelector:".popup_type_open-photo"});G.setEventListeners();var H=new M({nameSelector:".profile-info__name",infoSelector:".profile-info__description"}),J=new F({popupSelector:".popup_type_edit-button",handleFormSubmit:function(e){H.setUserInfo(e),J.close()}});J.setEventListeners();var K=new F({popupSelector:".popup_type_add-photo",handleFormSubmit:function(e){l.prepend(N(e)),K.close()}});K.setEventListeners();var Q=new S({renderer:function(e){Q.addItem(N(e))}},l);Q.renderItems([{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}]),new v(a,o).enableValidation(),new v(a,c).enableValidation();var W=new v(a,c)})();