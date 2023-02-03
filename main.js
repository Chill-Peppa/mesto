(()=>{"use strict";var e={formSelector:".form",inputSelector:".form__item",submitButtonSelector:".form__button-submit",inactiveButtonClass:"form__button-submit_error",inputErrorClass:"form__item_type_line-error",errorClass:"form__item-error_active"};function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var r=function(){function e(t){var n=t.data,r=t.userId,o=t.templateSelector,i=t.handleCardClick,u=t.handleCardRemove,c=t.handleCardLike,a=t.handleCardDislike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n.name,this._link=n.link,this._ownerId=n.owner._id,this._cardId=n._id,this._likesArray=n.likes,this._userId=r,this._templateSelector=o,this._handleCardClick=i,this._handleCardRemove=u,this._handleCardLike=c,this._handleCardDislike=a}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_checkButtonDelete",value:function(){this._ownerId!==this._userId&&this._deleteBtn.classList.add("element__delete-btn_disabled")}},{key:"_setEventListeners",value:function(){var e=this;this._likeBtn.addEventListener("click",(function(){e._checkButtonLike()})),this._deleteBtn.addEventListener("click",(function(){e._handleCardRemove(e._cardId)})),this._cardImg.addEventListener("click",(function(){e._handleCardClick()}))}},{key:"removeCard",value:function(){this._element.remove()}},{key:"_checkButtonLike",value:function(){this._likeBtn.classList.contains("element-container__like-btn_active")?this._handleCardDislike(this._cardId):this._handleCardLike(this._cardId)}},{key:"likeCounter",value:function(e){this._likeBtn.classList.toggle("element-container__like-btn_active"),this._likesLength.textContent=e.length}},{key:"_checkUserLike",value:function(){var e=this;this._likesArray.some((function(t){return t._id===e._userId}))?this._likeBtn.classList.add("element-container__like-btn_active"):this._likeBtn.classList.remove("element-container__like-btn_active")}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._likeBtn=this._element.querySelector(".element-container__like-btn"),this._deleteBtn=this._element.querySelector(".element__delete-btn"),this._cardImg=this._element.querySelector(".element__mask"),this._cardText=this._element.querySelector(".element-container__name"),this._likesLength=this._element.querySelector(".element-container__span"),this._setEventListeners(),this._checkButtonDelete(),this._checkUserLike(),this._likesLength.textContent=this._likesArray.length,this._cardText.textContent=this._name,this._cardImg.src=this._link,this._cardImg.alt=this._name,this._element}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,c(r.key),r)}}function u(e,t,n){return(t=c(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===o(t)?t:String(t)}var a=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,"_showInputError",(function(e,t){r._errorElement=r._form.querySelector(".".concat(e.id,"-error")),e.classList.add(r._inputErrorClass),r._errorElement.textContent=t,r._errorElement.classList.add(r._errorClass)})),u(this,"_hideInputError",(function(e){r._errorElement=r._form.querySelector(".".concat(e.id,"-error")),e.classList.remove(r._inputErrorClass),r._errorElement.classList.remove(r._errorClass),r._errorElement.textContent=""})),u(this,"_checkValidity",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),u(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),u(this,"_switchButtonPosition",(function(){r._hasInvalidInput()?(r._buttonElement.classList.add(r._inactiveButtonClass),r._buttonElement.setAttribute("disabled","true")):(r._buttonElement.classList.remove(r._inactiveButtonClass),r._buttonElement.removeAttribute("disabled"))})),u(this,"_setInputListeners",(function(){r._switchButtonPosition(),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkValidity(e),r._switchButtonPosition(r._inputList,r._buttonForm)}))}))})),u(this,"enableValidation",(function(){r._setInputListeners()})),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._form=n,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._buttonElement=this._form.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"resetValidaition",value:function(){var e=this;this._switchButtonPosition(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}var f=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;this._initialArray=e,this._initialArray.forEach((function(e){t._renderer(e)}))}},{key:"addItemAppend",value:function(e){this._container.append(e)}},{key:"prependItem",value:function(e){this._container.prepend(e)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==p(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===p(o)?o:String(o)),r)}var o}var h=function(){function e(t){var n=t.popupSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(n),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target===t.currentTarget||t.target.classList.contains("popup__close"))&&e.close()}))}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==d(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=v(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},_.apply(this,arguments)}function v(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function S(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function u(e){var t,n=e.popupSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,{popupSelector:n}))._popupImage=t._popup.querySelector(".popup__open-photo"),t._popupDescription=t._popup.querySelector(".popup__open-caption"),t}return t=u,(n=[{key:"open",value:function(e){this._popupImage.src=e.link,this._popupDescription.textContent=e.name,this._popupImage.alt=e.name,_(g(u.prototype),"open",this).call(this)}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(h);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==w(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=j(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},C.apply(this,arguments)}function j(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}function P(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function u(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,{popupSelector:n}))._handleFormSubmit=r,t._form=t._popup.querySelector(".form"),t._inputList=t._form.querySelectorAll(".form__item"),t._button=t._popup.querySelector(".form__button-submit"),t._buttonText=t._button.textContent,t}return t=u,n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"renderLoading",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранение...";this._button.textContent=e?t:this._buttonText}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())})),C(L(u.prototype),"setEventListeners",this).call(this)}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"close",value:function(){C(L(u.prototype),"close",this).call(this),this._form.reset()}}],n&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(h);function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==q(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===q(o)?o:String(o)),r)}var o}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=A(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},R.apply(this,arguments)}function A(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=V(e)););return e}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},x(e,t)}function D(e,t){if(t&&("object"===q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function V(e){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},V(e)}var U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=V(r);if(o){var n=V(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return D(this,e)});function u(){return T(this,u),i.apply(this,arguments)}return t=u,(n=[{key:"setCallback",value:function(e){this._handleFunctionDelete=e}},{key:"setEventListeners",value:function(){var e=this;this._confirmDeleteButton=this._popup.querySelector(".form__button-submit_confirm"),this._confirmDeleteButton.addEventListener("click",(function(){e._handleFunctionDelete()})),R(V(u.prototype),"setEventListeners",this).call(this)}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(h);function F(e){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(e)}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==F(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==F(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===F(o)?o:String(o)),r)}var o}var J=function(){function e(t){var n=t.nameSelector,r=t.infoSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._info=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._info.textContent}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._info.textContent=e.about,this._avatar.src=e.avatar}}])&&N(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function H(e){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(e)}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==H(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==H(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===H(o)?o:String(o)),r)}var o}var z,$=function(){function e(t){var n=t.url,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=n,this._headers=r}var t,n;return t=e,(n=[{key:"_returnResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"_request",value:function(e,t){return fetch(e,t).then(this._returnResponse)}},{key:"getUserInfo",value:function(){return this._request("".concat(this._url,"/users/me"),{headers:this._headers})}},{key:"getAllCards",value:function(){return this._request("".concat(this._url,"/cards"),{headers:this._headers})}},{key:"updateUserInfo",value:function(e){return this._request("".concat(this._url,"/users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify(e)})}},{key:"postCard",value:function(e){return this._request("".concat(this._url,"/cards"),{headers:this._headers,method:"POST",body:JSON.stringify(e)})}},{key:"sendUserAvatar",value:function(e){return this._request("".concat(this._url,"/users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify(e)})}},{key:"deleteCard",value:function(e){return this._request("".concat(this._url,"/cards/").concat(e),{headers:this._headers,method:"DELETE"})}},{key:"likeCard",value:function(e){return this._request("".concat(this._url,"/cards/").concat(e,"/likes "),{headers:this._headers,method:"PUT"})}},{key:"dislikeCard",value:function(e){return this._request("".concat(this._url,"/cards/").concat(e,"/likes "),{headers:this._headers,method:"DELETE"})}}])&&M(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),G=document.querySelector(".profile-info__edit-button"),K=document.querySelector(".profile__add-button"),Q=document.querySelector(".profile__avatar-button"),W=document.querySelector(".popup_type_edit-button"),X=document.querySelector(".popup_type_add-photo"),Y=document.querySelector(".popup_type_edit-avatar"),Z=W.querySelector(".form"),ee=X.querySelector(".form"),te=Y.querySelector(".form"),ne=document.querySelector(".elements");function re(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var oe=function(e){var t=new r({data:e,userId:z,templateSelector:"#element-template",handleCardClick:function(){ae.open(e)},handleCardRemove:function(e){le.open(),le.setCallback((function(){ie.deleteCard(e).then((function(){t.removeCard(),le.close()})).catch((function(e){console.error("Ошибка: ".concat(e))}))}))},handleCardLike:function(e){ie.likeCard(e).then((function(e){t.likeCounter(e.likes)})).catch((function(e){console.error("Ошибка: ".concat(e))}))},handleCardDislike:function(e){ie.dislikeCard(e).then((function(e){t.likeCounter(e.likes)})).catch((function(e){console.error("Ошибка: ".concat(e))}))}});return t.generateCard()};G.addEventListener("click",(function(){fe.open(),ye.resetValidaition();var e=se.getUserInfo();fe.setInputValues(e)})),K.addEventListener("click",(function(){he.resetValidaition(),ce.open()})),Q.addEventListener("click",(function(){de.resetValidaition(),pe.open()}));var ie=new $({url:"https://mesto.nomoreparties.co/v1/cohort-58",headers:{"Content-Type":"application/json",authorization:"fa0e36d5-ce77-4b43-9654-baaa45f07f34"}}),ue=new f({renderer:function(e){ue.addItemAppend(oe(e))}},ne);Promise.all([ie.getAllCards(),ie.getUserInfo()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return re(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?re(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];z=i._id,ue.renderItems(o),se.setUserInfo(i),console.log(o),console.log(i)})).catch((function(e){console.error("Ошибка: ".concat(e))}));var ce=new I({popupSelector:".popup_type_add-photo",handleFormSubmit:function(e){ce.renderLoading(!0),ie.postCard(e).then((function(e){ue.prependItem(oe(e)),ce.close()})).catch((function(e){console.error("Ошибка: ".concat(e))})).finally((function(){ce.renderLoading(!1)}))}});ce.setEventListeners();var ae=new k({popupSelector:".popup_type_open-photo"});ae.setEventListeners();var le=new U({popupSelector:".popup_type_delete"});le.setEventListeners();var se=new J({nameSelector:".profile-info__name",infoSelector:".profile-info__description",avatarSelector:".profile__avatar"}),fe=new I({popupSelector:".popup_type_edit-button",handleFormSubmit:function(e){fe.renderLoading(!0),ie.updateUserInfo(e).then((function(e){se.setUserInfo(e),fe.close()})).catch((function(e){console.error("Ошибка: ".concat(e))})).finally((function(){fe.renderLoading(!1)}))}});fe.setEventListeners();var pe=new I({popupSelector:".popup_type_edit-avatar",handleFormSubmit:function(e){pe.renderLoading(!0),ie.sendUserAvatar(e).then((function(e){se.setUserInfo(e),pe.close()})).catch((function(e){console.error("Ошибка: ".concat(e))})).finally((function(){pe.renderLoading(!1)}))}});pe.setEventListeners();var ye=new a(e,Z);ye.enableValidation();var he=new a(e,ee);he.enableValidation();var de=new a(e,te);de.enableValidation()})();