(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Polaris"] = factory();
	else
		root["Polaris"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/modules/Alerts.ts":
/*!**********************************!*\
  !*** ./src/ts/modules/Alerts.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Alerts": () => (/* binding */ Alerts)
/* harmony export */ });
/* harmony import */ var _Animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animations */ "./src/ts/modules/Animations.ts");
/**
 * Import the parent Class
 */

/**
 * @desc Used for setting alerts
 */
class Alerts extends _Animations__WEBPACK_IMPORTED_MODULE_0__.Animations {
    /**
     * @desc Constructor method
     */
    constructor() {
        // Inherit the parent class
        super();
    }
    // Set Alert
    /**
     * @desc Sets an alert to alert__container#alert-blueprint
     *
     * @param {string} text     -- Alert text
     * @param {string} enter    -- Alert animation enter
     * @param {string} exit     -- Alert animation exit
     * @param {string} status   -- Alert status: notice | warning | success
     * @param {string} color    -- Alert color:  light | dark
     * @param {boolean} close   -- Closable alert: true | false
     * @param {number} duration -- Alert animation duration: number in miliseconds
     * @param {number} delay    -- Alert animation delay: number in miliseconds
     *
     * @return {void}
     */
    alert(text, enter = "fadeIn", exit = "fadeOut", status = "", color = "", close = true, duration = 500, delay = 250) {
        // Set the status code
        let statusCode = "";
        let statusClass = "";
        if (status)
            statusClass = ` ${this.nameAlert + this.modSep + this.nameIcon}`;
        if (status === "notice") {
            statusCode = `<div class="${this.nameAlert + this.chiSep + this.nameIcon} ${this.piAlertCircle}"></div>`;
        }
        else if (status === "warning") {
            statusCode = `<div class="${this.nameAlert + this.chiSep + this.nameIcon} ${this.piAlertTri}"></div>`;
        }
        else if (status === "success") {
            statusCode = `<div class="${this.nameAlert + this.chiSep + this.nameIcon} ${this.piAlertTick}"></div>`;
        }
        // Set the color class
        let colorClass = "";
        if (color === "light") {
            colorClass = ` ${this.nameAlert + this.modSep + color}`;
        }
        // Check the closable
        let closeCode = "";
        let closeClass = "";
        if (close) {
            closeCode = `<div class="${this.nameAlert + this.chiSep + this.nameClose} ${this.piClose}"></div>`;
            closeClass = ` ${this.nameAlert + this.modSep + this.nameClose}`;
        }
        // Produce the alert content
        let content = `<div class="${this.nameAlert + colorClass + statusClass + closeClass} ${this.nameAnimation}" style="animation-name:${enter}; --animation-duration: ${duration}ms;">`;
        content += statusCode;
        content += `<div class="${this.nameAlert + this.chiSep + this.nameContent}">`;
        content += text;
        content += '</div>';
        content += closeCode;
        content += '</div>';
        // Create the parent
        const parent = document.querySelector(`#${this.nameAlert + '-' + this.nameBlueprint}`);
        // Create the node
        const element = document.createElement('div');
        // Modify the node
        element.classList.add(this.nameAlert + this.parSep + this.nameControl, this.nameAnimation);
        element.style.cssText = `--animation-duration: ${duration}ms; --animation-height: 4.5rem;`;
        element.innerHTML = content;
        // Append the node to the parent
        parent.appendChild(element);
        // Find the child node
        const child = element.querySelector(`.${this.nameAlert}`);
        // Set animation exit timeout
        let timeout = setTimeout(() => {
            this.animation(child, exit);
            timeout = setTimeout(() => {
                this.animation(element, this.hideYAnimation).then(() => {
                    element.remove();
                });
            }, delay);
        }, this.hideTimeout);
        // Set animation exit on click
        if (element.querySelector(`.${this.nameAlert + this.chiSep + this.nameClose}`)) {
            element.querySelector(`.${this.nameAlert + this.chiSep + this.nameClose}`).onclick = () => {
                clearTimeout(timeout);
                this.animation(child, exit);
                timeout = setTimeout(() => {
                    this.animation(element, this.hideYAnimation).then(() => {
                        element.remove();
                    });
                }, delay);
            };
        }
    }
}


/***/ }),

/***/ "./src/ts/modules/Animations.ts":
/*!**************************************!*\
  !*** ./src/ts/modules/Animations.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Animations": () => (/* binding */ Animations)
/* harmony export */ });
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Helpers */ "./src/ts/modules/Helpers.ts");
/**
 * Import the parent Class
 */

/**
 * @desc Used for setting & handling animations
 */
class Animations extends _Helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers {
    /**
     * @desc Constructor method
     */
    constructor() {
        // Inherit the parent class
        super();
    }
    /**
     * @desc Sets and returns a new animation Promise
     *
     * @param {any}     selector  -- The selector name (object)
     * @param {string}  animation -- The animation name
     * @param {boolean} clear     -- For clearing the animation after it has been ended
     *
     * @return {any}
     */
    animation(selector, animation = "", clear = false) {
        let node = null;
        // Check the selectors
        if (this.exist(selector)['status']) {
            if (typeof (selector) === "string") {
                node = document.querySelector(selector);
            }
            else if (typeof (selector) === "object") {
                node = selector;
            }
        }
        else {
            throw this.exist(selector)['message'];
        }
        // Check animation
        if (animation == "") {
            // Unset the animation
            // node.removeAttribute('data-animation');
            node.style.removeProperty('animation-name');
            // Exit the method
            return false;
        }
        // // Check current animation
        // if (this.getStyle(selector, 'animation-name') == animation) {
        //     // TODO
        // }
        // // Wait for all animations to be finished
        // Promise.all(
        //     node.getAnimations({ subtree: false })
        //     .map((animation:any) => animation.finished)
        // ).then(() => {
        //     // TODO
        // });
        // Animation promise
        const promise = new Promise((resolve, reject) => {
            // Check datasets and set variables
            this.datasets(node);
            // Set the new animation
            // node.setAttribute("data-animation", animation);
            node.style.setProperty('animation-name', animation);
            // Animation resolve callback
            function animationEnd(event) {
                event.stopPropagation();
                // Check animation clearance
                if (clear) {
                    // node.removeAttribute('data-animation');
                    node.style.removeProperty('animation-name');
                }
                // Promise on resolve
                resolve('Animation ended!');
                // Promise on reject
                reject('Animation crashed!');
            }
            // Animation end listener
            node.addEventListener('animationend', animationEnd, { once: true });
        });
        // Return the promise
        return promise;
    }
    /**
     * @desc Checks animation datasets and sets relevant variables
     *
     * @param {object} selector -- The selector object
     *
     * @return {void}
     */
    datasets(selector) {
        // data-animation
        if (selector.dataset.animation) {
            selector.style.setProperty('animation-name', selector.dataset.animation);
        }
        // data-duration
        if (selector.dataset.duration) {
            selector.style.setProperty('--animation-duration', selector.dataset.duration);
        }
        // data-delay
        if (selector.dataset.delay) {
            selector.style.setProperty('--animation-delay', selector.dataset.delay);
        }
        // data-count
        if (selector.dataset.count) {
            selector.style.setProperty('--animation-count', selector.dataset.count);
        }
        // data-function
        if (selector.dataset.function) {
            selector.style.setProperty('--animation-function', selector.dataset.function);
        }
        // data-state
        if (selector.dataset.state) {
            selector.style.setProperty('--animation-state', selector.dataset.state);
        }
        // data-position
        if (selector.dataset.position) {
            selector.style.setProperty('--animation-position', selector.dataset.position);
        }
        // data-scale
        if (selector.dataset.scale) {
            selector.style.setProperty('--animation-scale', selector.dataset.scale);
        }
        // data-perspective
        if (selector.dataset.perspective) {
            selector.style.setProperty('--animation-perspective', selector.dataset.perspective);
        }
        // data-degree
        if (selector.dataset.degree) {
            selector.style.setProperty('--animation-degree', selector.dataset.degree);
        }
        // data-height
        if (selector.dataset.height) {
            selector.style.setProperty('--animation-height', selector.dataset.height);
        }
        // data-width
        if (selector.dataset.width) {
            selector.style.setProperty('--animation-width', selector.dataset.width);
        }
        // data-brightness
        if (selector.dataset.brightness) {
            selector.style.setProperty('--animation-brightness', selector.dataset.brightness);
        }
        // data-dimension
        if (selector.dataset.dimension) {
            selector.style.setProperty('--animation-dimension', selector.dataset.dimension);
        }
    }
    /**
     * @desc Makes selectors animated
     *
     * @param {string | object} selector -- The selector name (object)
     * @param {string}          mod      -- The scroll mod
     *
     * @return {void}
     */
    animated(selector, mod = 'bottom') {
        let nodes = null;
        // Check the selectors
        if (this.exist(selector)['status']) {
            if (typeof (selector) === "string") {
                nodes = document.querySelectorAll(selector);
            }
            else if (typeof (selector) === "object") {
                nodes = selector;
            }
        }
        else {
            throw this.exist(selector)['message'];
        }
        nodes.forEach((node) => {
            let tolerance = node.dataset.tolerance;
            let animationEnter = node.dataset.enter;
            let animationExit = node.dataset.exit;
            // Check data-tolerance
            if (!tolerance) {
                tolerance = 0;
            }
            // Check data-enter
            if (!animationEnter) {
                animationEnter = 'fadeIn';
            }
            // Check data-exit
            if (!animationExit) {
                animationExit = 'fadeOut';
            }
            // Check element visibility
            if (this.visible(node, mod, tolerance)) {
                // Animation enter
                this.animation(node, animationEnter);
            }
            else {
                // Animation exit
                this.animation(node, animationExit);
            }
        });
    }
    /**
     * @desc Loops an animation
     *
     * @param {string | object} selector -- The selector name (object)
     * @param {number}          duration -- The loop duration (in miliseconds)
     * @param {number}          count    -- The loop count
     *
     * @return {void | boolean}
     */
    animating(selector, duration = 1000, count = Infinity) {
        let node = null;
        // Check the selectors
        if (this.exist(selector)['status']) {
            if (typeof (selector) === "string") {
                node = document.querySelector(selector);
            }
            else if (typeof (selector) === "object") {
                node = selector;
            }
        }
        else {
            throw this.exist(selector)['message'];
        }
        // Check element visibility
        if (this.visible(node, "both", 0)) {
            this.loop(() => {
                let animation = node.getAttribute('data-animation');
                // node.removeAttribute('data-animation');
                node.style.removeProperty('animation-name');
                node.offsetTop;
                // node.setAttribute('data-animation', animation);
                node.style.setProperty('animation-name', animation);
            }, duration, count - 1);
        }
    }
    /**
     * @desc For navigation active class on page scroll
     *
     * @param {string | object} selector  -- The selector name (object)
     * @param {string | object} navigator -- The navigator selector name (object)
     * @param {string}          active    -- The navigator active class
     * @param {number}          tolerance -- The scroll tolerance
     *
     * @return {void | boolean}
     */
    navigated(selector, navigator, active = 'active', tolerance = 0) {
        let selectors = null;
        let navigators = null;
        // Check the selectors
        if (this.exist(selector)['status']) {
            if (typeof (selector) === "string") {
                selectors = document.querySelectorAll(selector);
            }
            else if (typeof (selector) === "object") {
                selectors = selector;
            }
        }
        else {
            throw this.exist(selector)['message'];
        }
        // Check the navigators
        if (this.exist(navigator)['status']) {
            if (typeof (navigator) === "string") {
                navigators = document.querySelectorAll(navigator);
            }
            else if (typeof (navigator) === "object") {
                navigators = navigator;
            }
        }
        else {
            throw this.exist(navigator)['message'];
        }
        // Navigation links
        selectors.forEach((node) => {
            let top = window.scrollY;
            let height = node.offsetHeight;
            let offset = node.offsetTop - tolerance;
            let id = node.getAttribute("id");
            // Set the active class
            if (top >= offset && top < offset + height) {
                navigators.forEach((link) => {
                    link.classList.remove(active);
                    document.querySelector(`${navigator}[href*=${id}`).classList.add(active);
                });
            }
        });
    }
}


/***/ }),

/***/ "./src/ts/modules/Blueprints.ts":
/*!**************************************!*\
  !*** ./src/ts/modules/Blueprints.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Blueprints": () => (/* binding */ Blueprints)
/* harmony export */ });
/* harmony import */ var _Defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Defaults */ "./src/ts/modules/Defaults.ts");
/**
 * Import the parent Class
 */

/**
 * @desc Used for loading component blueprints
 */
class Blueprints extends _Defaults__WEBPACK_IMPORTED_MODULE_0__.Defaults {
    /**
     * @desc Constructor method
     */
    constructor() {
        // Inherit the parent class
        super();
    }
    /**
     * @desc Appends backdrop blueprint if not exists
     *
     * @return {void}
     */
    backdropBlueprint() {
        // Check backdrop blueprint
        if (!document.querySelector(`#${this.nameBackdrop + '-' + this.nameBlueprint}`)) {
            // Append backdrop blueprint
            this.append("div", "body", "", [this.nameBackdrop, this.nameAnimation, this.nameAnimation + this.modSep + this.nameAnimated], this.nameBackdrop + this.modSep + this.nameBlueprint);
        }
    }
    /**
     * @desc Appends alert blueprint if not exists
     *
     * @return {void}
     */
    alertBlueprint() {
        // Check alert blueprint
        if (!document.querySelector(`#${this.nameAlert + '-' + this.nameBlueprint}`)) {
            // Append alert blueprint
            this.append("div", "body", "", [this.nameAlert + this.parSep + this.nameContainer, this.nameAlert + this.parSep + this.nameContainer + this.modSep + this.alertPosition], this.nameAlert + this.modSep + this.nameBlueprint);
        }
    }
    /**
     * @desc Append modal blueprint if not exists
     *
     * @return {void}
     */
    modalBlueprint() {
        // Check modal blueprint
        if (!document.querySelector(`#${this.nameModal + '-' + this.nameBlueprint}`)) {
            // Append modal blueprint
            this.append("div", "body", "", [this.nameModal + this.parSep + this.nameContainer, this.nameAnimation, this.nameAnimation + this.modSep + this.nameAnimated], this.nameModal + this.modSep + this.nameBlueprint);
        }
    }
}


/***/ }),

/***/ "./src/ts/modules/Config.ts":
/*!**********************************!*\
  !*** ./src/ts/modules/Config.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Config": () => (/* binding */ Config)
/* harmony export */ });
/**
 * @desc Used for the configuration of Polaris JS library
 */
class Config {
    constructor() {
        this.modSep = "-"; // Modifier Separator
        this.chiSep = "--"; // Child Separator
        this.sibSep = "_"; // Sibling Separator
        this.parSep = "__"; // Parent Separator
        this.nameDoc = "doc"; // Name key for document component
        this.nameLight = "light"; // Name key for light color
        this.nameDark = "dark"; // Name key for dark color
        this.nameAnimation = "animation"; // Name key for animation component
        this.nameAnimated = "animated"; // Name key for animation-animated
        this.nameRipple = "ripple"; // Name key for ripple component
        this.nameAlert = "alert"; // Name key for alert component
        this.nameMessages = "msg"; // Name key for msg component
        this.nameBackdrop = "backdrop"; // Name key for backdrop component
        this.namePopup = "popup"; // Name key for popup component
        this.nameMenu = "menu"; // Name key for menu component
        this.nameModal = "modal"; // Name key for modal component
        this.nameBlueprint = "blueprint"; // Name key for component's blueprint
        this.nameContainer = "container"; // Name key for container
        this.nameControl = "control"; // Name key for control
        this.nameIcon = "icon"; // Name key for icon
        this.nameContent = "content"; // Name key for content
        this.nameClose = "close"; // Name key for close
        this.nameClick = "click"; // Name key for click
        this.nameActive = "active"; // Name key for active
        this.nameVoid = "void"; // Name key for active
        this.nameOpen = "open"; // Name key for open inffix
        this.nameHeader = "header"; // Name key for header
        this.nameBody = "body"; // Name key for body
        this.nameFooter = "footer"; // Name key for footer
        this.nameWidth = "w"; // Name key for css width classes
        this.nameHeight = "h"; // Name key for css height classes
        this.nameRadius = "round"; // Name key for border-radius & component roundness
        this.namePosition = "position"; // Name key for position classes
        this.fadeInAnimation = "fadeIn"; // fadeIn animation
        this.fadeOutAnimation = "fadeOut"; // fadeOut animation
        this.hideYAnimation = "hideY"; // hideY animation
        this.rippleAnimation = "ripple"; // ripple animation
        this.rippleAutoAnimation = "rippleAuto"; // rippleAuto animation
        this.piAlertCircle = "pi-alert-circle"; // Polaris Icon: alert-circle
        this.piAlertTri = "pi-alert-triangle"; // Polaris Icon: alert-triangle
        this.piAlertTick = "pi-alert-tick"; // Polaris Icon: alert-tick
        this.piClose = "pi-close"; // Polaris Icon: close
        this.hideTimeout = 8000; // Default hide timeout (in miliseconds)
        this.alertPosition = "bottom"; // Alert default position
        this.polarisSizes = ['xs', 'sm', 'md', 'lg', 'xl']; // Polaris standard sizes
        this.phoneWidth = 0; // Smartphone min-width
        this.tabletWidth = 768; // Tablet min-width
        this.desktopWidth = 1280; // Desktop min-width
    }
}


/***/ }),

/***/ "./src/ts/modules/Core.ts":
/*!********************************!*\
  !*** ./src/ts/modules/Core.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Core": () => (/* binding */ Core)
/* harmony export */ });
/* harmony import */ var _Blueprints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blueprints */ "./src/ts/modules/Blueprints.ts");
/**
 * Import the parent Class
 */

/**
 * @desc Used for method chaining & initializing defaults & loading Blueprints
 */
class Core extends _Blueprints__WEBPACK_IMPORTED_MODULE_0__.Blueprints {
    /**
     * @desc Constructor method
     */
    constructor(node = null, mode = null) {
        // Inherit the parent class
        super();
        // Initialize properties
        this.node = node;
        this.mode = mode;
        // Check the selector
        if (node && typeof (node) === "string") {
            // Array node
            if (mode === "all") {
                this.node = document.querySelectorAll(node);
            }
            // Single node
            else {
                this.node = document.querySelector(node);
            }
            // Chain the node
            this.chain();
            return this;
        }
    }
    /**
     * @desc Used for method chaining
     *
     * @return {any}
     */
    chain() {
        return this.node;
    }
    /**
     * @desc addEventListener shorthand
     *
     * @param {string}   e  -- The event name
     * @param {function} fn -- The callback function
     *
     * @return {Object}
     */
    event(e, fn) {
        // Check the selector
        if (typeof (this.node) === "object") {
            // Prepare the result
            this.node = this.node.addEventListener(e, () => fn());
            // Chain the result
            return this.chain();
        }
        else {
            throw `The method "event()" is only available if a selector passed into the class "Polaris".`;
        }
    }
    /**
     * @desc innerHTML simplified
     *
     * @param {string} content - The optional content
     *
     * @return {void | object}
     */
    html(content = "") {
        // Check the selector
        if (typeof (this.node) === "object") {
            // Prepare the result
            if (content) {
                this.node.innerHTML = content;
            }
            else {
                this.node = this.node.innerHTML;
            }
            // Chain the result
            return this.chain();
        }
        else {
            throw `The method "html()" is only available if a selector passed into the class "Polaris".`;
        }
    }
    /**
     * @desc The objects length
     *
     * @return {number}
     */
    length() {
        // Check the selector
        if (typeof (this.node) === "object") {
            // Prepare the result
            this.node = this.node.length;
            // Chain the result
            return this.chain();
        }
        else {
            throw `The method "length()" is only available if a selector passed into the class "Polaris".`;
        }
    }
    /**
     * Initializes the Polaris class
     *
     * @return {void}
     */
    init() {
        /**
         *  Load Defaults
         */
        /**
         *  Document default classes
         */
        this.docDefaults();
        /**
         *  Void links
         */
        this.linkDefaults();
        /**
         *  Ripple animations
         */
        this.rippleDefaults();
        /**
         *  Animation datasets
         */
        this.animationDefaults();
        /**
         *  Closable messages
         */
        this.messageDefaults();
        /**
         *  Clickable & animated popups
         */
        this.popupDefaults();
        /**
         *  Clickable & animated menus
         */
        this.menuDefaults();
        /**
         *  Load Blueprints
         */
        /**
         *  Backdrop blueprint
         */
        this.backdropBlueprint();
        /**
         *  Alert blueprint
         */
        this.alertBlueprint();
        /**
         *  Modal blueprint
         */
        this.modalBlueprint();
    }
}


/***/ }),

/***/ "./src/ts/modules/Defaults.ts":
/*!************************************!*\
  !*** ./src/ts/modules/Defaults.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Defaults": () => (/* binding */ Defaults)
/* harmony export */ });
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ "./src/ts/modules/Modal.ts");
/**
 * Import the parent Class
 */

/**
 * @desc Used for handling components default behaviors
 */
class Defaults extends _Modal__WEBPACK_IMPORTED_MODULE_0__.Modal {
    /**
     * @desc Constructor method
     */
    constructor() {
        // Inherit the parent class
        super();
    }
    /**
     * @desc Document default classes
     *
     * @return {void}
     */
    docDefaults() {
        let doc = document.querySelector('body');
        // Check the document class 
        if (!doc.classList.contains(`${this.nameDoc}`)) {
            doc.classList.add(`${this.nameDoc}`);
        }
        // Check the document color
        if (!doc.classList.contains(`${this.nameDoc + this.modSep + this.nameLight}`) &&
            !doc.classList.contains(`${this.nameDoc + this.modSep + this.nameDark}`)) {
            // Color scheme
            let scheme;
            // Dark mode
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                scheme = this.nameDark;
            }
            // Light mode
            else {
                scheme = this.nameLight;
            }
            // Set color scheme
            doc.classList.add(`${this.nameDoc + this.modSep + scheme}`);
            // Watch for changes
            window.matchMedia('(prefers-color-scheme: dark)').onchange = (event => {
                // Remove old scheme
                this.removeClass(`.${this.nameDoc}`, `${this.nameDoc + this.modSep + scheme}`);
                // Find new scheme
                scheme = event.matches ? this.nameDark : this.nameLight;
                // Set new color scheme
                doc.classList.add(`${this.nameDoc + this.modSep + scheme}`);
            });
        }
    }
    /**
     * @desc Handles void links
     *
     * @return {void}
     */
    linkDefaults() {
        if (document.querySelectorAll(`.${this.nameVoid}`).length) {
            document.querySelectorAll(`.${this.nameVoid}`).forEach((elem) => {
                // Check element href
                if (elem.getAttribute('href') === "#") {
                    elem.setAttribute('href', 'javascript:void(0)');
                }
                // Prevent default behavior
                // elem.onclick = () => {
                //     return false;
                // };
            });
        }
    }
    /**
     * @desc Sets ripple animations if any available
     *
     * @return {void}
     */
    rippleDefaults() {
        /**
         *  Ripple animations
         */
        if (document.querySelectorAll(`.${this.nameRipple}`).length) {
            // ripple
            document.querySelectorAll(`.${this.nameRipple}[data-animation=${this.rippleAnimation}]`).forEach((elem) => {
                elem.onclick = (event) => {
                    let x = event.clientX, y = event.clientY;
                    const REC = elem.getBoundingClientRect(), DIM = Math.sqrt(Math.pow(REC.width, 2) + Math.pow(REC.height, 2));
                    // Unset the previous ripple animation
                    elem.removeAttribute('data-animation');
                    elem.offsetTop;
                    // Set the new ripple animation
                    elem.setAttribute('data-animation', this.rippleAnimation);
                    elem.style.setProperty('--animation-dimension', DIM + 'px');
                    elem.style.setProperty('--animation-left', x - REC.left + 'px');
                    elem.style.setProperty('--animation-top', y - REC.top + 'px');
                    // Set datasets and variables
                    this.datasets(elem);
                };
            });
            // rippleAuto
            document.querySelectorAll(`.${this.nameRipple}[data-animation=${this.rippleAutoAnimation}]`).forEach((elem) => {
                // Set datasets and variables
                this.datasets(elem);
            });
        }
    }
    /**
     * @desc Handles animation datasets if any available
     *
     * @return {void}
     */
    animationDefaults() {
        if (document.querySelectorAll(`.${this.nameAnimation}`).length) {
            document.querySelectorAll(`.${this.nameAnimation}`).forEach((elem) => {
                // Set CSS properties and variables
                this.datasets(elem);
            });
        }
    }
    /**
     * @desc Handles closable messages
     *
     * @return {void}
     */
    messageDefaults() {
        if (document.querySelectorAll(`.${this.nameMessages + this.chiSep + this.nameClose}`).length) {
            document.querySelectorAll(`.${this.nameMessages + this.chiSep + this.nameClose}`).forEach((elem) => {
                elem.onclick = () => {
                    let parent = elem.parentElement.parentElement;
                    this.animation(parent, this.hideYAnimation).then(() => {
                        parent.remove();
                    });
                };
            });
        }
    }
    /**
     * @desc Handles clickable popups
     *
     * @return {void}
     */
    popupDefaults() {
        if (document.querySelectorAll(`.${this.namePopup + this.parSep + this.nameControl}`).length) {
            document.querySelectorAll(`.${this.namePopup + this.parSep + this.nameControl}`).forEach((elem) => {
                // Check clickable
                if (elem.querySelector(`.${this.namePopup + this.modSep + this.nameClick}`)) {
                    elem.onclick = (i) => {
                        // Popup component
                        let popup = elem.querySelector(`.${this.namePopup + this.modSep + this.nameClick}`);
                        // Ignore the click for component and its children(:not(.popup--close))
                        let ignoreClick = false;
                        elem.querySelectorAll(`.${this.namePopup} *:not(.${this.namePopup + this.chiSep + this.nameClose})`).forEach((j) => {
                            if (i.target == j) {
                                ignoreClick = true;
                            }
                        });
                        // Check ignore click
                        if (ignoreClick || i.target == popup)
                            return;
                        // Remove open class (hide popup)
                        if (elem.querySelector(`.${this.namePopup + this.modSep + this.nameOpen}`)) {
                            popup.classList.remove(`${this.namePopup + this.modSep + this.nameOpen}`);
                        }
                        // Add open class (show popup)
                        else {
                            popup.classList.add(`${this.namePopup + this.modSep + this.nameOpen}`);
                        }
                        // Prevent default behavior
                        return false;
                    };
                }
            });
        }
    }
    /**
     * @desc Handles clickable and hoverable animated menu
     *
     * @return {void}
     */
    menuDefaults() {
        // Clickable submenu
        if (document.querySelectorAll(`.${this.nameMenu + this.chiSep + this.nameClick}`).length) {
            document.querySelectorAll(`.${this.nameMenu + this.chiSep + this.nameClick}`).forEach((elem) => {
                elem.querySelector(`.${this.nameMenu + this.chiSep + this.nameClick} a`).onclick = () => {
                    // Submenu
                    let submenu = elem.querySelector(`.${this.nameMenu + this.chiSep + this.nameClick} ul`);
                    // Check animated submenu
                    if (submenu.classList.contains(`${this.nameAnimation}`)) {
                        let animationIn, animationOut;
                        // Menu is open
                        if (submenu.classList.contains(`${this.nameMenu + this.chiSep + this.nameOpen}`)) {
                            animationIn = "fadeOut";
                            animationOut = "fadeIn";
                            // Check data-exit
                            if (submenu.getAttribute("data-exit"))
                                animationIn = submenu.getAttribute("data-exit");
                            // Check data-enter
                            if (submenu.getAttribute("data-enter"))
                                animationOut = submenu.getAttribute("data-enter");
                        }
                        // Menu is closed
                        else {
                            animationIn = "fadeIn";
                            animationOut = "fadeOut";
                            // Check data-enter
                            if (submenu.getAttribute("data-enter"))
                                animationIn = submenu.getAttribute("data-enter");
                            // Check data-exit
                            if (submenu.getAttribute("data-exit"))
                                animationOut = submenu.getAttribute("data-exit");
                        }
                        // Check data-animation
                        if (this.getStyle(submenu, 'animation-name') !== 'none') {
                            if (this.getStyle(submenu, 'animation-name') == animationIn) {
                                this.animation(submenu, animationOut);
                            }
                            else if (this.getStyle(submenu, 'animation-name') == animationOut) {
                                this.animation(submenu, animationIn);
                            }
                        }
                        else {
                            this.animation(submenu, animationIn);
                        }
                    }
                    // Remove open class (hide menu)
                    else if (submenu.classList.contains(`${this.nameMenu + this.chiSep + this.nameOpen}`)) {
                        submenu.classList.remove(`${this.nameMenu + this.chiSep + this.nameOpen}`);
                    }
                    // Add open class (show menu)
                    else {
                        submenu.classList.add(`${this.nameMenu + this.chiSep + this.nameOpen}`);
                    }
                    // Prevent default behavior
                    return false;
                };
            });
        }
        // Hoverable animated submenu
        if (document.querySelectorAll(`.${this.nameMenu} li:not(.${this.nameMenu + this.chiSep + this.nameClick})`).length) {
            document.querySelectorAll(`.${this.nameMenu} li:not(.${this.nameMenu + this.chiSep + this.nameClick})`).forEach((elem) => {
                // Submenu
                let submenu = elem.querySelector(`.${this.nameMenu} li ul.${this.nameAnimation}`);
                if (submenu) {
                    let animationIn, animationOut;
                    // Menu is open
                    if (submenu.classList.contains(`${this.nameMenu + this.chiSep + this.nameOpen}`)) {
                        animationIn = "fadeOut";
                        animationOut = "fadeIn";
                        // Check data-exit
                        if (submenu.getAttribute("data-exit"))
                            animationIn = submenu.getAttribute("data-exit");
                        // Check data-enter
                        if (submenu.getAttribute("data-enter"))
                            animationOut = submenu.getAttribute("data-enter");
                    }
                    // Menu is closed
                    else {
                        animationIn = "fadeIn";
                        animationOut = "fadeOut";
                        // Check data-enter
                        if (submenu.getAttribute("data-enter"))
                            animationIn = submenu.getAttribute("data-enter");
                        // Check data-exit
                        if (submenu.getAttribute("data-exit"))
                            animationOut = submenu.getAttribute("data-exit");
                    }
                    // Mouse over
                    elem.onmouseover = () => {
                        // Show submenu
                        this.animation(submenu, animationIn).then();
                    };
                    // Mouse out
                    elem.onmouseout = () => {
                        // Hide submenu
                        this.animation(submenu, animationOut);
                    };
                }
            });
        }
    }
}


/***/ }),

/***/ "./src/ts/modules/Helpers.ts":
/*!***********************************!*\
  !*** ./src/ts/modules/Helpers.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Helpers": () => (/* binding */ Helpers)
/* harmony export */ });
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Config */ "./src/ts/modules/Config.ts");
/**
 * Import the parent Class
 */

/**
 * @desc Polaris JS helper methods
 */
class Helpers extends _Config__WEBPACK_IMPORTED_MODULE_0__.Config {
    /**
     * @desc Constructor method
     */
    constructor() {
        // Inherit the parent class
        super();
        /**
         * @desc For removeing character(s) in a string before some character(s)
         *
         * @param {string}  str    -- The string to format
         * @param {string}  find   -- The character(s) to find
         * @param {boolean} strict -- Remove the character itself?
         *
         * @return {string | undefined}
         */
        this.removeBefore = (str, find, strict = false) => {
            if (strict) {
                return str.split(find).pop();
            }
            else {
                return find + str.split(find).pop();
            }
        };
        /**
         * @desc For removeing character(s) in a string after some character(s)
         *
         * @param {string}  str    -- The string to format
         * @param {string}  find   -- The character(s) to find
         * @param {boolean} strict -- Remove the character itself?
         *
         * @return {string}
         */
        this.removeAfter = (str, find, strict = false) => {
            if (strict) {
                return str.split(find)[0];
            }
            else {
                return str.split(find)[0] + find;
            }
        };
    }
    /**
     * @desc Checks a selector for type & existence
     *
     * @param {string | HTMLElement} selector -- The selector name (object)
     *
     * @return {object}
     */
    exist(selector = null) {
        // Default variables
        let result = {};
        // Set the default result response
        result = {
            status: true,
            message: `Passed!`
        };
        // Empty or null selector
        if (!selector) {
            result = {
                status: false,
                message: `The "selector" parameter cannot be empty or null.`
            };
        }
        // String type
        else if (typeof (selector) === "string") {
            if (document.querySelectorAll(selector).length == 0) {
                result = {
                    status: false,
                    message: `The selector "${selector}" not exists on the window object!`
                };
            }
        }
        // Object type
        else if (typeof (selector) === "object") {
            if (selector.length == 0) {
                result = {
                    status: false,
                    message: `The selector object not exists on the window object!`
                };
            }
        }
        // Return the result
        return result;
    }
    /**
     * @desc Produces the querySelector object
     *
     * @param {string} selector -- The selector name
     *
     * @return {object}
     */
    selector(selector) {
        // Check selector
        if (typeof (selector) !== "string") {
            throw `The selector must be of type "string".`;
        }
        else if (this.exist(selector)['status']) {
            // Return the result
            return document.querySelector(selector);
        }
        else {
            throw this.exist(selector)['message'];
        }
    }
    /**
     * @desc Produces the querySelectorAll object
     *
     * @param {string} selector -- The selector name
     *
     * @return {object}
     */
    selectors(selector) {
        // Check selector
        if (typeof (selector) !== "string") {
            throw `The selector must be of type "string".`;
        }
        else if (this.exist(selector)['status']) {
            // Return the result
            return document.querySelectorAll(selector);
        }
        else {
            throw this.exist(selector)['message'];
        }
    }
    /**
     * @desc Checks if an element is visible on the screen
     *
     * @param {string | object} selector  -- The selector name (object)
     * @param {string}          from      -- Visible from (top, bottom, or both)
     * @param {number}          tolerance -- The scroll tolerance
     *
     * @return {boolean}
     */
    visible(selector, from = 'both', tolerance = 0) {
        let result = false;
        let rect = null;
        let windowHeight = window.innerHeight;
        let viewHeight = Math.max(document.documentElement.clientHeight, windowHeight);
        // Check the selector
        if (this.exist(selector)['status']) {
            if (typeof (selector) === "string") {
                rect = document.querySelector(selector);
                rect = rect.getBoundingClientRect();
            }
            else if (typeof (selector) === "object") {
                rect = selector.getBoundingClientRect();
            }
        }
        else {
            throw this.exist(selector)['message'];
        }
        // Scroll top & bottom
        if (from == 'both') {
            result = rect.bottom >= tolerance && rect.top < viewHeight - tolerance;
        }
        // Scroll top
        else if (from == 'top') {
            result = rect.top < viewHeight - tolerance;
        }
        // Scroll bottom
        else if (from == 'bottom') {
            result = rect.bottom >= tolerance;
        }
        // Return result
        return result;
    }
    /**
     * @desc Prepends an HTML element to a parent element
     *
     * @param {string}          selector  -- The selector name
     * @param {string | object} parent    -- The selector's parent name (object)
     * @param {string}          content   -- The selector's content
     * @param {object}          classList -- The selector's class list ['class-1', 'class-2', ...]
     * @param {string}          id        -- The selector's id name
     * @param {string}          style     -- The selector's inline CSS styles
     * @param {object}          attrs     -- The selector's attributes
     *
     * @return {HTMLElement | boolean}
     */
    prepend(selector, parent, content, classList = [], id = "", style = "", attrs = {}) {
        let parentNode = null;
        // Check the selector
        if (typeof (selector) !== "string") {
            throw `The selector must be of type "string".`;
        }
        // Check the parent
        if (this.exist(parent)['status']) {
            if (typeof (parent) === "string") {
                parentNode = document.querySelector(parent);
            }
            else if (typeof (parent) === "object") {
                parentNode = parent;
            }
        }
        else {
            throw this.exist(parent)['message'];
        }
        // Create the node
        const node = document.createElement(selector);
        // Add class list
        classList.forEach((cls) => {
            node.classList.add(cls);
        });
        // Add id
        if (id) {
            node.setAttribute("id", id);
        }
        // Add style
        if (style) {
            node.style.cssText = style;
        }
        // Add attributes
        if (attrs) {
            for (let attr in attrs) {
                node.setAttribute(attr, attrs[attr]);
            }
        }
        // Prepend the node
        node.innerHTML = content;
        parentNode.insertBefore(node, parentNode.firstChild);
        // Return the node
        return node;
    }
    /**
     * @desc Appends an HTML element to a parent element
     *
     * @param {string}          selector  -- The selector name
     * @param {string | object} parent    -- The selector's parent name (object)
     * @param {string}          content   -- The selector's content
     * @param {object}          classList -- The selector's class list ['class-1', 'class-2', ...]
     * @param {string}          id        -- The selector's id name
     * @param {string}          style     -- The selector's inline CSS styles
     * @param {object}          attrs     -- The selector's attributes
     *
     * @return {HTMLElement | boolean}
     */
    append(selector, parent, content, classList = [], id = "", style = "", attrs = {}) {
        let parentNode = null;
        // Check the selector
        if (typeof (selector) !== "string") {
            throw `The selector must be of type "string".`;
        }
        // Check the parent
        if (this.exist(parent)['status']) {
            if (typeof (parent) === "string") {
                parentNode = document.querySelector(parent);
            }
            else if (typeof (parent) === "object") {
                parentNode = parent;
            }
        }
        else {
            throw this.exist(parent)['message'];
        }
        // Create the node
        const node = document.createElement(selector);
        // Add class list
        classList.forEach((cls) => {
            node.classList.add(cls);
        });
        // Add id
        if (id) {
            node.setAttribute("id", id);
        }
        // Add style
        if (style) {
            node.style.cssText = style;
        }
        // Add attributes
        if (attrs) {
            for (let attr in attrs) {
                node.setAttribute(attr, attrs[attr]);
            }
        }
        // Append the node
        node.innerHTML = content;
        parentNode.appendChild(node);
        // Return the node
        return node;
    }
    /**
     * @desc Removes an HTML element from the DOM
     *
     * @param {string | object} selector -- The selector name (object)
     *
     * @return {void | boolean}
     */
    remove(selector) {
        let node = null;
        // Check the selectors
        if (this.exist(selector)['status']) {
            if (typeof (selector) === "string") {
                node = document.querySelector(selector);
            }
            else if (typeof (selector) === "object") {
                node = selector;
            }
        }
        else {
            throw this.exist(selector)['message'];
        }
        // Remove the node
        node.remove();
    }
    /**
     * @desc For writing the whole document
     *
     * @param {string} content -- The document content
     *
     * @return {void}
     */
    write(content = "") {
        javascript: document.open('text/html');
        document.write(content);
        document.close();
    }
    /**
     * @desc Loops a function for a couple of times
     *
     * @param {function} fn    -- The function that needed to be looped
     * @param {number}   delay -- The time delay for each iteration
     * @param {number}   count -- The loop count
     *
     * @return {void}
     */
    loop(fn, delay = 1000, count = Infinity) {
        let i = 0;
        let interval = setInterval(() => {
            // Exit the loop
            if (i == count || count <= 0) {
                clearInterval(interval);
                return false;
            }
            // Invoke the function
            fn();
            i++;
        }, delay);
    }
    /**
     * @desc Excecutes a function after document fully loaded
     *
     * @param {function} fn -- The callback function
     *
     * @return {void}
     */
    loaded(fn) {
        return document.addEventListener('DOMContentLoaded', () => {
            fn();
        });
    }
    /**
     * @desc For escaping Regular Expression search characters
     *
     * @param {string} str -- The string to format
     *
     * @return {string}
     */
    escape(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    }
    /**
     * @desc For replacing character(s) in a string
     *
     * @param {string} str     -- The string to format
     * @param {string} find    -- The character(s) to find
     * @param {string} replace -- The character(s) to replace
     *
     * @return {string}
     */
    replace(str, find, replace) {
        return str.replace(new RegExp(this.escape(find), 'g'), replace);
    }
    /**
     * @desc For redirecting http URLs
     *
     * @param {string} url -- The URL to redirect
     *
     * @return {void}
     */
    redirect(url = "/") {
        window.location.href = url;
    }
    /**
     * @desc Finds page relative href
     *
     * @return {string}
     */
    href() {
        return this.replace(window.location.href, window.location.origin, "");
    }
    /**
     * @desc Calculates the scrollbar width
     *
     * @return {number}
     */
    scrollWidth() {
        return window.innerWidth - document.documentElement.clientWidth;
    }
    /**
     * @desc Checks a file for existence
     *
     * @param {string} file -- The absolute file path
     *
     * @return {boolean}
     */
    fileExist(file) {
        // Create a new XML HTTP Request
        let xhr = new XMLHttpRequest();
        // Request the file
        xhr.open('HEAD', file, false);
        xhr.send();
        // File not found
        if (xhr.status == "404") {
            return false;
        }
        // File found
        else {
            return true;
        }
    }
    /**
     * @desc Reads and returns a file content as a promise in JSON format
     *
     * @param {string} file -- The absolute file path
     *
     * @return {object|boolean}
     */
    json(file, strict = false) {
        // Check strict mod
        if (strict) {
            // Check file existence
            if (!this.fileExist(file)) {
                return false;
            }
        }
        // Create a new promise
        const promise = new Promise((resolve, reject) => {
            let final = null;
            // Fetch file
            fetch(file)
                .then(response => response.json())
                .then(result => {
                final = result;
            })
                .then(() => {
                // Resolve the promise
                resolve(final);
            });
        });
        // Return the promise
        return promise;
    }
    /**
     * @desc Reads and returns a file content as a promise in plain text
     *
     * @param {string} file -- The absolute file path
     *
     * @return {object|boolean}
     */
    text(file, strict = false) {
        // Check strict mod
        if (strict) {
            // Check file existence
            if (!this.fileExist(file)) {
                return false;
            }
        }
        // Create a new promise
        const promise = new Promise((resolve, reject) => {
            let final = null;
            // Fetch file
            fetch(file)
                .then(response => response.text())
                .then(result => {
                final = result;
            })
                .then(() => {
                // Resolve the promise
                resolve(final);
            });
        });
        // Return the promise
        return promise;
    }
    /**
     * @desc Creates a promise to copy a text to clipboard and returns the result
     *
     * @param {string} text -- The text to copy
     *
     * @return {void|boolean}
     */
    copy(text) {
        // Create a new promise
        const promise = new Promise((resolve, reject) => {
            let result = null;
            navigator.clipboard.writeText(text)
                .then(() => result = true, err => {
                console.error('Copy Error: ', err);
                result = false;
            })
                .then(() => {
                // Resolve the promise
                resolve(result);
            });
        });
        // Return the promise
        return promise;
    }
    /**
     * @desc Adds a class to a selector
     *
     * @param {string|object} selector -- The selector name (object)
     * @param {string} cls             -- The class name
     *
     * @return {void}
     */
    addClass(selector, cls) {
        let node = null;
        // Check the selector
        if (this.exist(selector)['status']) {
            if (typeof (selector) === "string") {
                node = document.querySelector(selector);
            }
            else if (typeof (selector) === "object") {
                node = selector;
            }
        }
        else {
            throw this.exist(selector)['message'];
        }
        // Add the class
        if (!node.classList.contains(cls)) {
            node.classList.add(cls);
        }
    }
    /**
     * @desc Removes a class to a selector
     *
     * @param {string | object} selector -- The selector name (object)
     * @param {string} cls               -- The class name
     *
     * @return {void}
     */
    removeClass(selector, cls) {
        let node = null;
        // Check the selector
        if (this.exist(selector)['status']) {
            if (typeof (selector) === "string") {
                node = document.querySelector(selector);
            }
            else if (typeof (selector) === "object") {
                node = selector;
            }
        }
        else {
            throw this.exist(selector)['message'];
        }
        // Remove the class
        if (node.classList.contains(cls)) {
            node.classList.remove(cls);
        }
    }
    /**
     * @desc Toggles an old class with a new class for a selector
     *
     * @param {string|object} selector -- The selector name (object)
     * @param {string}        oldCls   -- The old class name
     * @param {string}        newCls   -- The new class name
     *
     * @return {void}
     */
    toggleClass(selector, oldCls, newCls) {
        let node = null;
        // Check the selector
        if (this.exist(selector)['status']) {
            if (typeof (selector) === "string") {
                node = document.querySelector(selector);
            }
            else if (typeof (selector) === "object") {
                node = selector;
            }
        }
        else {
            throw this.exist(selector)['message'];
        }
        // Remove the old class
        if (node.classList.contains(oldCls)) {
            node.classList.remove(oldCls);
        }
        // Add the new class
        if (!node.classList.contains(newCls)) {
            node.classList.add(newCls);
        }
    }
    /**
     * @desc Adds a class list(array) to a selector
     *
     * @param {string|object} selector -- The selector name (object)
     * @param {string[]} classList     -- The class list (array)
     *
     * @return {void}
     */
    addClasses(selector, classList) {
        let node = null;
        // Check the selector
        if (this.exist(selector)['status']) {
            if (typeof (selector) === "string") {
                node = document.querySelector(selector);
            }
            else if (typeof (selector) === "object") {
                node = selector;
            }
        }
        else {
            throw this.exist(selector)['message'];
        }
        // Loop classes
        classList.forEach((cls) => {
            // Add the class
            if (!node.classList.contains(cls)) {
                node.classList.add(cls);
            }
        });
    }
    /**
     * @desc Converts and returns a string into uppercase, taking into account the current locale
     *
     * @param {string} text -- The text to excecute
     *
     * @return {string}
     */
    upper(text) {
        return text.toLocaleUpperCase();
    }
    /**
     * @desc Converts and returns a string into lowercase, taking into account the current locale
     *
     * @param {string} text -- The text to excecute
     *
     * @return {string}
     */
    lower(text) {
        return text.toLocaleLowerCase();
    }
    /**
     * @desc Returns the computed style for an element
     *
     * @param {string | HTMLElement} selector -- The node seclector
     *
     * @return {string}
     */
    getStyle(selector, property) {
        let node, result;
        // String type
        if (typeof (selector) == "string") {
            node = document.querySelectorAll(selector);
        }
        else {
            node = selector;
        }
        // Property exists
        const view = (node.ownerDocument || document).defaultView;
        if (view && view.getComputedStyle) {
            result = view.getComputedStyle(node, null).getPropertyValue(property);
        }
        // Property not exists
        else {
            result == undefined;
        }
        // Return result
        return result;
    }
    /**
     * @desc Checks if the browser is fullscreen
     *
     * @return {boolean}
     */
    isFullscreen() {
        if (window.innerWidth == screen.width && window.innerHeight == screen.height) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * @desc Request an element to be fullscreen
     *
     * @var {any} method -- The request method
     *
     * @return {void}
     */
    fullscreen(elem) {
        if (!this.isFullscreen()) {
            const method = elem.requestFullScreen || elem.webkitRequestFullScreen || elem.mozRequestFullScreen || elem.msRequestFullScreen;
            return method.call(elem);
        }
    }
    /**
     * @desc Exits browser fullscreen
     *
     * @var {any} elem -- The document object
     *
     * @return {void}
     */
    exitFullscreen() {
        const elem = document;
        if (this.isFullscreen()) {
            return elem.exitFullscreen() || elem.webkitExitFullscreen() || elem.mozCancelFullScreen() || elem.msExitFullscreen();
        }
    }
}


/***/ }),

/***/ "./src/ts/modules/Modal.ts":
/*!*********************************!*\
  !*** ./src/ts/modules/Modal.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modal": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var _Alerts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alerts */ "./src/ts/modules/Alerts.ts");
/**
 * Import the parent Class
 */

/**
 * @desc Used for setting modal
 */
class Modal extends _Alerts__WEBPACK_IMPORTED_MODULE_0__.Alerts {
    /**
     * @desc Constructor method
     */
    constructor() {
        // Inherit the parent class
        super();
    }
    /**
     * @desc Sets modal to modal__container#modal-blueprint
     *
     * @param {string} title     -- Modal title
     * @param {string} body      -- Modal body
     * @param {string} footer    -- Modal footer
     * @param {string} size      -- Modal size (xs, sm, md, lg, xl)
     * @param {string} enter     -- Modal animation enter
     * @param {string} exit      -- Modal animation exit
     * @param {string} color     -- Modal color:  light | dark
     * @param {boolean} close    -- Closable modal: true | false
     * @param {boolean} backdrop -- Has backdrop: true | false
     * @param {number} duration  -- Modal animation duration: number in miliseconds
     *
     * @return {void}
     */
    modal(title, body, footer = "", size = "xs", enter = "fadeIn", exit = "fadeOut", color = "", close = true, backdrop = true, duration = 500) {
        // Check size
        let sizeCLass = "";
        if (this.polarisSizes.includes(size)) {
            sizeCLass = ` ${this.nameModal + this.modSep + size}`;
        }
        else if (size) {
            sizeCLass = ` ${size}`;
        }
        else {
            sizeCLass = ` ${this.nameWidth}-100`;
        }
        // Set the color class
        let colorClass = "";
        if (color === "light") {
            colorClass = ` ${this.nameModal + this.modSep + color}`;
        }
        // Check the closable
        let closeCode = "";
        if (close) {
            closeCode = `<div class="${this.nameModal + this.chiSep + this.nameClose} ${this.piClose}"></div>`;
        }
        // Check footer
        let footerCode = "";
        if (footer) {
            footerCode = `<footer class="${this.nameModal + this.chiSep + this.nameFooter}">${footer}</main>`;
        }
        // Produce the modal content
        let content = `<div class="${this.nameModal + sizeCLass + colorClass} ${this.nameAnimation} scroll scroll-sm scroll-radius-sm" style="animation-name:${enter}; --animation-duration: ${duration}ms;">`;
        content += closeCode;
        content += `<header class="${this.nameModal + this.chiSep + this.nameHeader}">`;
        content += `<h1>${title}</h1>`;
        content += '</header>';
        content += `<main class="${this.nameModal + this.chiSep + this.nameBody}">`;
        content += body;
        content += '</main>';
        content += footerCode;
        content += '</div>';
        // Find the parent
        const parent = document.querySelector(`#${this.nameModal + '-' + this.nameBlueprint}`);
        // Find the backdrop
        const bdrop = document.querySelector(`.${this.nameBackdrop}`);
        // Create the node
        const element = document.createElement('div');
        // Append the node to the parent
        parent.appendChild(element);
        // Modify the node
        element.outerHTML = content;
        // Find the child node
        const child = parent.querySelector(`.${this.nameModal}`);
        // Hide the scrollbar
        let bodyElement = document.querySelector('body');
        bodyElement.style.paddingRight = this.scrollWidth() + "px";
        bodyElement.style.overflow = "hidden";
        // Show the backdrop
        if (backdrop) {
            this.animation(bdrop, this.fadeInAnimation);
        }
        // Show the parent
        this.animation(parent, this.fadeInAnimation);
        // Set animation exit on click
        if (child.querySelector(`.${this.nameModal + this.chiSep + this.nameClose}`)) {
            child.querySelector(`.${this.nameModal + this.chiSep + this.nameClose}`).onclick = () => {
                // Hide the backdrop
                if (backdrop) {
                    this.animation(bdrop, this.fadeOutAnimation);
                }
                // Show the scrollbar
                setTimeout(() => {
                    bodyElement.style.paddingRight = "";
                    bodyElement.style.overflow = "";
                }, duration / 2);
                // Hide the child
                this.animation(child, exit).then(() => {
                    // Remove the child
                    child.remove();
                    // Hide the parent
                    this.animation(parent, this.fadeOutAnimation);
                });
            };
        }
    }
    /**
     * @desc Sets custom modal to custom modal__container
     *
     * @param {string|object} parent -- Modal container selector or object
     * @param {string} enter         -- Modal animation enter
     * @param {string} exit          -- Modal animation exit
     * @param {boolean} backdrop     -- Has backdrop: true | false
     * @param {number} duration      -- Modal animation duration: number in miliseconds
     *
     * @return {void}
     */
    setModal(parent, enter = "fadeIn", exit = "fadeOut", backdrop = true, duration = 500) {
        // Find the parent
        let parentNode;
        if (typeof (parent) === "string")
            parentNode = document.querySelector(parent);
        else if (typeof (parent) === "object")
            parentNode = parent;
        // Find the modal
        const modal = parentNode.querySelector(`.${this.nameModal}`);
        // Find the backdrop
        const bdrop = document.querySelector(`.${this.nameBackdrop}`);
        // Hide the scrollbar
        let bodyElement = document.querySelector('body');
        bodyElement.style.paddingRight = this.scrollWidth() + "px";
        bodyElement.style.overflow = "hidden";
        // Show the backdrop
        if (backdrop) {
            this.animation(bdrop, this.fadeInAnimation);
        }
        // Show the parent
        this.animation(parentNode, this.fadeInAnimation);
        // Show the modal
        this.animation(modal, enter);
        // Set animation exit on click
        if (modal.querySelector(`.${this.nameModal + this.chiSep + this.nameClose}`)) {
            modal.querySelector(`.${this.nameModal + this.chiSep + this.nameClose}`).onclick = () => {
                // Hide the backdrop
                if (backdrop) {
                    this.animation(bdrop, this.fadeOutAnimation);
                }
                // Show the scrollbar
                setTimeout(() => {
                    bodyElement.style.paddingRight = "";
                    bodyElement.style.overflow = "";
                }, duration / 2);
                // Hide the modal
                this.animation(modal, exit).then(() => {
                    // Hide the parent
                    this.animation(parentNode, this.fadeOutAnimation);
                });
            };
        }
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/ts/polaris.ts ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_Core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Core */ "./src/ts/modules/Core.ts");
/**
 * Polaris Framework v0.9.8 Beta
 * MIT License github.com/heminsatya/polaris-core | © 2022 polarisui.com
**/
/**
 * Import the Core Class
 */

/**
 * Polaris object
 */
const Polaris = _modules_Core__WEBPACK_IMPORTED_MODULE_0__.Core;
/**
 * Export default
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Polaris);

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=polaris.js.map