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

/***/ "./src/ts/modules/Animations.ts":
/*!**************************************!*\
  !*** ./src/ts/modules/Animations.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Animations: () => (/* binding */ Animations)
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
     * @desc For navigation active class (for page scroll)
     *
     * @param {string | object} navigators -- The navigators selector name (object)
     * @param {string | object} navigateds -- The navigateds selector name (object)
     * @param {string}          active     -- The navigator active class
     * @param {number}          tolerance  -- The scroll tolerance
     *
     * @return {void | boolean}
     */
    navigated(navigators, navigateds, active = 'active', tolerance = 0) {
        // Check the navigator selectors
        if (this.exist(navigators)['status']) {
            if (typeof (navigators) === "string") {
                navigators = document.querySelectorAll(navigators);
            }
            else if (typeof (navigator) === "object") {
                navigators = navigators;
            }
        }
        else {
            throw this.exist(navigators)['message'];
        }
        // Check the navigated selectors
        if (this.exist(navigateds)['status']) {
            if (typeof (navigateds) === "string") {
                navigateds = document.querySelectorAll(navigateds);
            }
            else if (typeof (navigateds) === "object") {
                navigateds = navigateds;
            }
        }
        else {
            throw this.exist(navigateds)['message'];
        }
        // Handle navigators active class
        navigateds.forEach((node) => {
            const scroll = window.scrollY;
            const height = node.offsetHeight;
            const offset = node.getBoundingClientRect().top + window.scrollY - tolerance; // node.offsetTop - tolerance;
            const id = node.getAttribute("id");
            // Set the active class
            if (scroll >= offset && scroll < offset + height) {
                navigators.forEach((link) => {
                    (link.getAttribute("href") == '#' + id) ? link.classList.add(active) : link.classList.remove(active);
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
/* harmony export */   Blueprints: () => (/* binding */ Blueprints)
/* harmony export */ });
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components */ "./src/ts/modules/Components.ts");
/**
 * Import the parent Class
 */

/**
 * @desc Used for loading component blueprints
 */
class Blueprints extends _Components__WEBPACK_IMPORTED_MODULE_0__.Components {
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

/***/ "./src/ts/modules/Components.ts":
/*!**************************************!*\
  !*** ./src/ts/modules/Components.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Components: () => (/* binding */ Components)
/* harmony export */ });
/* harmony import */ var _Animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animations */ "./src/ts/modules/Animations.ts");
/**
 * Import the parent Class
 */

/**
 * @desc Used for handling Components (Utilities)
 */
class Components extends _Animations__WEBPACK_IMPORTED_MODULE_0__.Animations {
    /**
     * @desc Constructor method
     */
    constructor() {
        // Inherit the parent class
        super();
    }
    /**
     * @desc Hadnles tabs
     *
     * @param {HTMLElement} sel -- The tab selector
     *
     * @return {void}
     */
    range(sel) {
        // Check the selector
        const selector = this.query(sel);
        let progress, distort = 0;
        let thumbWidth;
        // Set thumbWidth
        if (selector.classList.contains(this.nameRange + this.modSep + "xs")) {
            thumbWidth = this.rangeWidthXS;
        }
        else if (selector.classList.contains(this.nameRange + this.modSep + "sm")) {
            thumbWidth = this.rangeWidthSM;
        }
        else if (selector.classList.contains(this.nameRange + this.modSep + "md")) {
            thumbWidth = this.rangeWidthMD;
        }
        else if (selector.classList.contains(this.nameRange + this.modSep + "lg")) {
            thumbWidth = this.rangeWidthLG;
        }
        else if (selector.classList.contains(this.nameRange + this.modSep + "xl")) {
            thumbWidth = this.rangeWidthXL;
        }
        else {
            thumbWidth = this.rangeWidthMD;
        }
        // Handle range on load
        progress = (Number(selector.value) - Number(selector.min)) / (Number(selector.max) - Number(selector.min)) * 100;
        distort = (50 - progress) * thumbWidth / 100;
        selector.style.setProperty("--range-progress", `calc(${progress}% + ${distort}rem)`);
        if (selector.parentElement.classList.contains(this.nameRange + this.parSep + this.nameControl)) {
            selector.parentElement.style.setProperty("--range-progress", `calc(${progress}% + ${distort}rem)`);
        }
        // Handle range on input
        selector.oninput = () => {
            progress = (Number(selector.value) - Number(selector.min)) / (Number(selector.max) - Number(selector.min)) * 100;
            distort = (50 - progress) * thumbWidth / 100;
            selector.style.setProperty("--range-progress", `calc(${progress}% + ${distort}rem)`);
            if (selector.parentElement.classList.contains(this.nameRange + this.parSep + this.nameControl)) {
                selector.parentElement.style.setProperty("--range-progress", `calc(${progress}% + ${distort}rem)`);
            }
        };
    }
    /**
     * @desc Hadnles chips
     *
     * @param {HTMLElement} sel -- The chip selector
     *
     * @return {void}
     */
    chip(sel) {
        // Check the selector
        const selector = this.query(sel);
        // Fetch chip elements
        let chipItems = selector.querySelector(`.${this.nameChip + this.chiSep + this.nameChipItems}`);
        let chipInput = selector.querySelector(`.${this.nameChip + this.chiSep + this.nameChipInput}`);
        let chipOutput = selector.querySelector(`.${this.nameChip + this.chiSep + this.nameChipOutput}`);
        let chipValues = [];
        // Check chip--items
        if (!chipItems) {
            this.prepend('div', selector, '', [this.nameChip + this.chiSep + this.nameChipItems]);
            chipItems = selector.querySelector(`.${this.nameChip + this.chiSep + this.nameChipItems}`);
        }
        // Check chip--input
        if (!chipInput) {
            this.append('input', selector, '', [this.nameChip + this.chiSep + this.nameChipInput], '', '', { "type": "text" });
            chipInput = selector.querySelector(`.${this.nameChip + this.chiSep + this.nameChipInput}`);
        }
        // Check chip--output
        if (!chipOutput) {
            this.append('input', selector, '', [this.nameChip + this.chiSep + this.nameChipOutput], '', '', { "type": "hidden" });
            chipOutput = selector.querySelector(`.${this.nameChip + this.chiSep + this.nameChipOutput}`);
        }
        // Check chip--output value
        if (chipOutput.value.trim()) {
            chipValues = chipOutput.value.split(',');
            chipItems.innerHTML = "";
            chipValues.forEach((chipValue) => {
                this.append('div', chipItems, `<span class="${this.nameChip + this.chiSep + this.nameChipText}">${chipValue}</span><span class="${this.nameChip + this.chiSep + this.nameChipClose} ${this.piClose}"></span>`, [this.nameChip + this.chiSep + this.nameChipItem]);
            });
        }
        // Handle chip--close on click
        const chipClose = () => {
            const items = chipItems.querySelectorAll(`.${this.nameChip + this.chiSep + this.nameChipClose}`);
            items.forEach((item) => {
                item.onclick = () => {
                    // Find value
                    const value = item.parentElement.querySelector(`.${this.nameChip + this.chiSep + this.nameChipText}`).innerHTML;
                    // Update chipValues
                    chipValues.splice(chipValues.indexOf(value), 1);
                    // Update chipOutput
                    chipOutput.value = chipValues.toString();
                    // Remove item
                    this.remove(item.parentElement);
                };
            });
        };
        // Call chipClose onload
        chipClose();
        // Handle chip--input on enter
        chipInput.onkeydown = (event) => {
            if (event.keyCode === 13) {
                // Prevent default behavior
                event.preventDefault();
                let value = chipInput.value.trim();
                // Prevent repetitive value insertion
                if (!chipValues.includes(value) && value && !value.includes(",")) {
                    // Update chip values
                    chipValues.push(value);
                    // Update chip--output
                    chipOutput.value = chipValues.toString();
                    // Append chip--item
                    this.append('div', chipItems, `<span class="${this.nameChip + this.chiSep + this.nameChipText}">${value}</span><span class="${this.nameChip + this.chiSep + this.nameChipClose} ${this.piClose}"></span>`, [this.nameChip + this.chiSep + this.nameChipItem]);
                    // Empty chip--input
                    chipInput.value = "";
                    // chipClose recursion
                    chipClose();
                }
                // Check autocomplete
                if (selector.querySelector(`.${this.nameAuto}`)) {
                    chipInput.blur();
                    this.auto(selector.querySelector(`.${this.nameAuto}`));
                    chipInput.focus();
                }
            }
        };
    }
    /**
     * @desc Hadnles autocomplete
     *
     * @param {HTMLElement} sel -- The autocomplete selector
     *
     * @return {void}
     */
    auto(sel) {
        // Check the selector
        const selector = this.query(sel);
        // Fetch elements
        let autoInput = selector.querySelector(`.${this.nameAuto + this.chiSep + this.nameAutoInput}`);
        let autoOutput = selector.querySelector(`.${this.nameAuto + this.chiSep + this.nameAutoOutput}`);
        let autoItems;
        // Check auto--input data-items
        if (!autoInput.hasAttribute("data-items")) {
            autoInput.setAttribute("data-items", "");
        }
        // Check auto--input
        if (!autoInput) {
            this.prepend('input', selector, '', [this.nameAuto + this.chiSep + this.nameAutoInput]);
            autoInput = selector.querySelector(`.${this.nameAuto + this.chiSep + this.nameAutoInput}`);
        }
        // Check auto--input data-sort
        if (!autoInput.hasAttribute("data-sort")) {
            autoInput.setAttribute("data-sort", true);
        }
        // Check auto--input autocomplete
        if (!autoInput.hasAttribute("autocomplete")) {
            autoInput.setAttribute("autocomplete", "off");
        }
        // Check auto--output
        if (!autoOutput) {
            this.append('ul', selector, '', [this.nameAuto + this.chiSep + this.nameAutoOutput]);
            autoOutput = selector.querySelector(`.${this.nameAuto + this.chiSep + this.nameAutoOutput}`);
        }
        // Set auto--output items
        autoItems = autoInput.dataset.items.split(',');
        // Sort auto--output items
        if (autoInput.dataset.sort === "true") {
            autoItems.sort();
        }
        // Update auto--output items
        autoOutput.innerHTML = "";
        for (let item of autoItems) {
            this.append('li', autoOutput, item);
        }
        // Handle auto--input data-default focus in
        if (autoInput.dataset.default === "true") {
            autoInput.onfocus = () => {
                if (!autoInput.value) {
                    autoOutput.classList.add(this.nameAuto + this.chiSep + this.nameAutoOpen);
                }
            };
        }
        // Item select function
        const itemSelect = (item) => {
            // Set auto--input value
            autoInput.value = item.innerHTML;
            autoInput.focus();
            // Hide auto--output
            autoOutput.classList.remove(this.nameAuto + this.chiSep + this.nameAutoOpen);
        };
        // Handle items on click
        autoOutput.querySelectorAll("li").forEach((item) => {
            item.onclick = () => {
                itemSelect(item);
            };
        });
        // Handle auto--input input
        autoInput.oninput = () => {
            // Check the input
            if (autoInput.value) {
                autoOutput.classList.add(this.nameAuto + this.chiSep + this.nameAutoOpen);
            }
            else {
                autoOutput.classList.add(this.nameAuto + this.chiSep + this.nameAutoOpen);
                if (autoInput.dataset.default === "true") {
                    autoOutput.classList.add(this.nameAuto + this.chiSep + this.nameAutoOpen);
                }
                else {
                    autoOutput.classList.remove(this.nameAuto + this.chiSep + this.nameAutoOpen);
                }
            }
            // Filter the items
            let newItems = [];
            for (let item of autoItems) {
                if (item.substr(0, autoInput.value.length).toUpperCase() == autoInput.value.toUpperCase()) {
                    newItems.push(item);
                }
            }
            autoOutput.innerHTML = "";
            for (let item of newItems) {
                this.append('li', autoOutput, item);
            }
            // Handle new items on click
            autoOutput.querySelectorAll("li").forEach((item) => {
                item.onclick = () => {
                    itemSelect(item);
                };
            });
        };
        // Handle auto--input focus out
        autoInput.onblur = () => {
            autoOutput.classList.remove(this.nameAuto + this.chiSep + this.nameAutoOpen);
        };
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
     * @param {HTMLElement} cont      -- Modal container selector
     * @param {string}      enter     -- Modal animation enter
     * @param {string}      exit      -- Modal animation exit
     * @param {boolean}     backdrop  -- Has backdrop: true | false
     * @param {number}      duration  -- Modal animation duration: number in miliseconds
     *
     * @return {void}
     */
    setModal(cont, enter = "fadeIn", exit = "fadeOut", backdrop = true, duration = 500) {
        // Find the container selector
        const container = this.query(cont);
        // Find the modal selector
        const selector = container.querySelector(`.${this.nameModal}`);
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
        // Show the container
        this.animation(container, this.fadeInAnimation);
        // Show the modal
        this.animation(selector, enter);
        // Set animation exit on click
        if (selector.querySelector(`.${this.nameModal + this.chiSep + this.nameClose}`)) {
            selector.querySelector(`.${this.nameModal + this.chiSep + this.nameClose}`).onclick = () => {
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
                this.animation(selector, exit).then(() => {
                    // Hide the container
                    this.animation(container, this.fadeOutAnimation);
                });
            };
        }
    }
    /**
     * @desc Hadnles the dragable items on drag
     *
     * @param {HTMLElement} sel -- The dragable selector
     *
     * @return {Promise}
     */
    drag(sel) {
        // Check the selector
        const selector = this.query(sel);
        // Animation promise
        const promise = new Promise((resolve, reject) => {
            const draggables = Array.from(selector.children);
            // Items
            let counter = 1;
            draggables.forEach((draggable) => {
                // Check the data-order
                if (!draggable.dataset.order) {
                    draggable.dataset.order = counter;
                }
                // Drag start
                draggable.ondragstart = (e) => {
                    if (e.target === draggable) {
                        draggable.classList.add(this.nameDrag + this.chiSep + this.nameDragging);
                    }
                };
                // Drag enter
                draggable.ondragenter = (e) => {
                    if (e.target === draggable) {
                        const dragging = selector.querySelector(`.${this.nameDrag + this.chiSep + this.nameDragging}`);
                        if (draggable != dragging && dragging) {
                            if (dragging.parentNode === draggable.parentNode) {
                                const draggingOrder = dragging.dataset.order;
                                const draggableOrder = draggable.dataset.order;
                                // Swap orders
                                dragging.dataset.order = draggableOrder;
                                draggable.dataset.order = draggingOrder;
                                // Swap items
                                this.swap(dragging, draggable);
                                // Swaping
                                draggable.classList.add(this.nameDrag + this.chiSep + this.nameSwapping);
                                dragging.classList.add(this.nameDrag + this.chiSep + this.nameSwapping);
                            }
                        }
                    }
                };
                // Drag leave
                draggable.ondragleave = (e) => {
                    if (e.target === draggable) {
                        const dragging = selector.querySelector(`.${this.nameDrag + this.chiSep + this.nameDragging}`);
                        if (draggable != dragging && dragging) {
                            if (dragging.parentNode === draggable.parentNode) {
                                // Swaping
                                draggable.classList.remove(this.nameDrag + this.chiSep + this.nameSwapping);
                                dragging.classList.remove(this.nameDrag + this.chiSep + this.nameSwapping);
                            }
                        }
                    }
                };
                // Drag over
                draggable.ondragover = (e) => {
                    const dragging = selector.querySelector(`.${this.nameDrag + this.chiSep + this.nameDragging}`);
                    if (dragging) {
                        if (dragging.parentNode === draggable.parentNode) {
                            e.preventDefault();
                        }
                    }
                };
                // Drag end
                draggable.ondragend = (e) => {
                    if (e.target === draggable) {
                        // Swaping
                        const swaping = selector.querySelector(`.${this.nameDrag + this.modSep + this.nameSwapping}`);
                        if (swaping)
                            swaping.classList.remove(this.nameDrag + this.modSep + this.nameSwapping);
                        const dragging = selector.querySelector(`.${this.nameDrag + this.chiSep + this.nameDragging}`);
                        if (dragging)
                            dragging.classList.remove(this.nameDrag + this.modSep + this.nameSwapping);
                        draggable.classList.remove(this.nameDrag + this.chiSep + this.nameDragging);
                    }
                    // Promise on resolve
                    resolve('Dragabble ended!');
                    // Promise on reject
                    reject('Dragabble crashed!');
                };
                // Increase counter
                counter++;
            });
        });
        // Return the promise
        return promise;
    }
    /**
     * @desc Handles closable message
     *
     * @param {HTMLElement} sel -- The message close selector
     *
     * @return {void}
     */
    message(sel) {
        // Check the selector
        const selector = this.query(sel);
        // Message on close
        selector.onclick = () => {
            let parent = selector.parentElement.parentElement;
            this.animation(parent, this.hideYAnimation).then(() => {
                parent.remove();
            });
        };
    }
    /**
     * @desc Handles clickable popups
     *
     * @param {HTMLElement} sel -- The popup selector
     *
     * @return {void}
     */
    popups(sel) {
        // Check the selector
        const selector = this.query(sel);
        // Check clickable
        if (selector.querySelector(`.${this.namePopup + this.modSep + this.nameClick}`)) {
            selector.onclick = (i) => {
                // Popup component
                let popup = selector.querySelector(`.${this.namePopup + this.modSep + this.nameClick}`);
                // Ignore the click for component and its children(:not(.popup--close))
                let ignoreClick = false;
                selector.querySelectorAll(`.${this.namePopup} *:not(.${this.namePopup + this.chiSep + this.nameClose})`).forEach((j) => {
                    if (i.target == j) {
                        ignoreClick = true;
                    }
                });
                // Check ignore click
                if (ignoreClick || i.target == popup)
                    return;
                // Remove open class (hide popup)
                if (selector.querySelector(`.${this.namePopup + this.modSep + this.nameOpen}`)) {
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
    }
    /**
     * @desc Hadnles tabs
     *
     * @param {HTMLElement} sel -- The tab selector
     *
     * @return {Promise}
     */
    tab(sel) {
        // Check the selector
        const selector = this.query(sel);
        // Draggable promise
        const promise = new Promise((resolve, reject) => {
            // Fetch elements
            const links = selector.querySelectorAll(`.${this.nameTab + this.chiSep + this.nameTabLink}`);
            let active = selector.querySelector(`.${this.nameTab + this.chiSep + this.nameActive}`);
            let open = selector.querySelector(`.${this.nameTab + this.chiSep + this.nameOpen}`);
            let dataTab;
            // Handle click links
            links.forEach((link) => {
                link.onclick = () => {
                    // Check current tab
                    if (link !== active) {
                        dataTab = link.dataset.tab;
                        // Handle active
                        if (active)
                            active.classList.remove(`${this.nameTab + this.chiSep + this.nameActive}`);
                        active = link;
                        active.classList.add(`${this.nameTab + this.chiSep + this.nameActive}`);
                        // Handle open
                        if (open)
                            open.classList.remove(`${this.nameTab + this.chiSep + this.nameOpen}`);
                        open = selector.querySelector(`.${this.nameTab + this.chiSep + this.nameTabContent}[data-tab="${dataTab}"]`);
                        if (open)
                            open.classList.add(`${this.nameTab + this.chiSep + this.nameOpen}`);
                    }
                    // Promise on resolve
                    resolve('Tab opened!');
                    // Promise on reject
                    reject('Tab crashed!');
                };
            });
        });
        // Return the promise
        return promise;
    }
    /**
     * @desc Hadnles tabs
     *
     * @param {HTMLElement} sel -- The accordion selector
     *
     * @return {void}
     */
    accord(sel) {
        // Check the selector
        const selector = this.query(sel);
        // Fetch elements
        const unique = Boolean(selector.classList.contains(`${this.nameAccord + this.modSep + this.nameAccordUnique}`));
        const links = selector.querySelectorAll(`.${this.nameAccord + this.chiSep + this.nameAccordLink}`);
        let item, content, maxHeight;
        // Handle links
        links.forEach((link) => {
            // Set items default max-height
            item = link.parentElement;
            content = link.nextElementSibling;
            if (item.classList.contains(`${this.nameAccord + this.chiSep + this.nameActive}`)) {
                maxHeight = content.scrollHeight + "px";
                content.style.maxHeight = maxHeight;
            }
            else {
                content.style.maxHeight = "0";
            }
            // Handle links on click
            link.onclick = () => {
                item = link.parentElement;
                content = link.nextElementSibling;
                maxHeight = content.scrollHeight + "px";
                // Set item max-height
                if (item.classList.contains(`${this.nameAccord + this.chiSep + this.nameActive}`)) {
                    content.style.maxHeight = "0";
                }
                else {
                    content.style.maxHeight = maxHeight;
                }
                // Toggle active class
                item.classList.toggle(`${this.nameAccord + this.chiSep + this.nameActive}`);
                // Check unique
                if (unique) {
                    const actives = selector.querySelectorAll(`.${this.nameAccord + this.chiSep + this.nameActive}`);
                    actives.forEach((active) => {
                        // Inactive the active items (except for the current item)
                        if (active !== item) {
                            active.classList.remove(`${this.nameAccord + this.chiSep + this.nameActive}`);
                            active.querySelector(`.${this.nameAccord + this.chiSep + this.nameAccordLink}`).nextElementSibling.style.maxHeight = "0";
                        }
                    });
                }
            };
        });
    }
    /**
     * @desc Hadnles tabs
     *
     * @param {HTMLElement} sel -- The counter selector
     * @param {function}    cf  -- The callback function for the last count
     *
     * @return {void|boolean}
     */
    counter(sel, cf = () => { }) {
        // Check the selector
        const selector = this.query(sel);
        // Check the counting
        if (selector.classList.contains(`${this.nameCounter + this.modSep + this.nameCounterCounting}`))
            return false;
        // Fetch datasets
        const start = Number(selector.dataset.start);
        const stop = Number(selector.dataset.stop);
        const step = Number(selector.dataset.step);
        const count = Math.abs(stop - start) / step;
        const delay = Number(selector.dataset.delay);
        const speed = Number(selector.dataset.speed);
        // Start counting
        let ii = start;
        this.loop(() => {
            // Set the counting
            if (ii == start) {
                selector.classList.add(`${this.nameCounter + this.modSep + this.nameCounterCounting}`);
            }
            // Unset the counting
            else if (ii == stop) {
                selector.classList.remove(`${this.nameCounter + this.modSep + this.nameCounterCounting}`);
            }
            // Set the counter
            selector.innerHTML = ii;
            // Set the stepper
            (stop > start) ? ii += step : ii -= step;
        }, speed, delay, count, cf);
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
/* harmony export */   Config: () => (/* binding */ Config)
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
        this.nameBlueprint = "blueprint"; // Name key for component's blueprint
        this.nameContainer = "container"; // Name key for container
        this.nameControl = "control"; // Name key for control
        this.nameIcon = "icon"; // Name key for icon
        this.nameContent = "content"; // Name key for content
        this.nameClose = "close"; // Name key for close
        this.nameClick = "click"; // Name key for click
        this.nameActive = "active"; // Name key for active
        this.nameVoid = "void"; // Name key for void
        this.nameOpen = "open"; // Name key for open inffix
        this.nameHeader = "header"; // Name key for header
        this.nameBody = "body"; // Name key for body
        this.nameFooter = "footer"; // Name key for footer
        this.nameWidth = "w"; // Name key for css width classes
        this.nameHeight = "h"; // Name key for css height classes
        this.nameRadius = "round"; // Name key for border-radius & component roundness
        this.namePosition = "position"; // Name key for position classes
        this.nameAnimation = "animation"; // Name key for animation component
        this.nameAnimated = "animated"; // Name key for animation-animated
        this.nameRipple = "ripple"; // Name key for ripple component
        this.nameRange = "range"; // Name key for range
        this.nameChip = "chip"; // Name key for chip
        this.nameChipItems = "items"; // 2nd name key for chip--items
        this.nameChipItem = "item"; // 2nd name key for chip--item
        this.nameChipText = "text"; // 2nd name key for chip--text
        this.nameChipClose = "close"; // 2nd name key for chip--close
        this.nameChipInput = "input"; // 2nd name key for chip--input
        this.nameChipOutput = "output"; // 2nd name key for chip--output
        this.nameAuto = "auto"; // Name key for auto
        this.nameAutoInput = "input"; // 2nd name key for auto--input
        this.nameAutoOutput = "output"; // 2nd name key for auto--output
        this.nameAutoOpen = "open"; // 2nd name key for auto--open
        this.nameAlert = "alert"; // Name key for alert component
        this.nameMessages = "msg"; // Name key for msg component
        this.nameBackdrop = "backdrop"; // Name key for backdrop component
        this.namePopup = "popup"; // Name key for popup component
        this.nameMenu = "menu"; // Name key for menu component
        this.nameModal = "modal"; // Name key for modal component
        this.nameDrag = "drag"; // Name key for drag
        this.nameDragging = "dragging"; // 2nd name key for drag--dragging
        this.nameSwapping = "swapping"; // 2nd name key for drag--swapping
        this.nameDragAuto = "auto"; // 2nd name key for drag-auto
        this.nameTab = "tab"; // Name key for tab
        this.nameTabAuto = "auto"; // 2nd name key for tab-auto
        this.nameTabLink = "link"; // 2nd name key for tab--link
        this.nameTabContent = "content"; // 2nd name key for tab--content
        this.nameAccord = "accord"; // Name key for accordion
        this.nameAccordUnique = "unique"; // 2nd name key for accord-unique
        this.nameAccordLink = "link"; // 2nd name key for accord--link
        this.nameCounter = "counter"; // Name key for counter
        this.nameCounterAuto = "auto"; // 2nd name key for counter-auto
        this.nameCounterCounting = "counting"; // 2nd name key for counter-counting
        this.piAlertCircle = "pi-alert-circle"; // Polaris Icon: alert-circle
        this.piAlertTri = "pi-alert-triangle"; // Polaris Icon: alert-triangle
        this.piAlertTick = "pi-alert-tick"; // Polaris Icon: alert-tick
        this.piClose = "pi-close"; // Polaris Icon: close
        this.fadeInAnimation = "fadeIn"; // fadeIn animation
        this.fadeOutAnimation = "fadeOut"; // fadeOut animation
        this.hideYAnimation = "hideY"; // hideY animation
        this.rippleAnimation = "ripple"; // ripple animation
        this.rippleAutoAnimation = "rippleAuto"; // rippleAuto animation
        this.hideTimeout = 8000; // Default hide timeout (in miliseconds)
        this.alertPosition = "bottom"; // Alert default position
        this.polarisSizes = ['xs', 'sm', 'md', 'lg', 'xl']; // Polaris standard sizes
        this.phoneWidth = 0; // Smartphone min-width
        this.tabletWidth = 768; // Tablet min-width
        this.desktopWidth = 1280; // Desktop min-width
        this.rangeWidthXS = 1; // XS range slider thumb width (rem)
        this.rangeWidthSM = 1.25; // SM range slider thumb width (rem)
        this.rangeWidthMD = 1.5; // MD range slider thumb width (rem)
        this.rangeWidthLG = 1.75; // LG range slider thumb width (rem)
        this.rangeWidthXL = 2; // XL range slider thumb width (rem)
        this.hasBackdropBlueprint = true; // Backdrop blueprint status
        this.hasAlertBlueprint = true; // Alert blueprint status
        this.hasModalBlueprint = true; // Modal blueprint status
        this.hasDocDefaults = true; // Document default classes status
        this.hasLinkDefaults = true; // Void links defaults status
        this.hasRippleDefaults = true; // Ripple default animations status
        this.hasAnimationDefaults = true; // Animation default datasets status
        this.hasRangeDefaults = true; // Range slider default status
        this.hasChipDefaults = true; // Chips default status
        this.hasAutoDefaults = true; // Autocomplete default status
        this.hasMessageDefaults = true; // Closable messages defaults status
        this.hasPopupDefaults = true; // Clickable & animated popups defaults status
        this.hasMenuDefaults = true; // Clickable & animated menus defaults status
        this.hasDragDefaults = true; // Auto drag items status
        this.hasTabDefaults = true; // Tabs defaults status
        this.hasAccordDefaults = true; // Accordions defaults status
        this.hasCounterDefaults = true; // Counters defaults status
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
/* harmony export */   Core: () => (/* binding */ Core)
/* harmony export */ });
/* harmony import */ var _Defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Defaults */ "./src/ts/modules/Defaults.ts");
/**
 * Import the parent Class
 */

/**
 * @desc Used for method chaining & initializing defaults & loading Blueprints
 */
class Core extends _Defaults__WEBPACK_IMPORTED_MODULE_0__.Defaults {
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
         *  Load Blueprints
         */
        /**
         *  Backdrop blueprint
         */
        if (this.hasBackdropBlueprint)
            this.backdropBlueprint();
        /**
         *  Alert blueprint
         */
        if (this.hasAlertBlueprint)
            this.alertBlueprint();
        /**
         *  Modal blueprint
         */
        if (this.hasModalBlueprint)
            this.modalBlueprint();
        /**
         *  Load Defaults
         */
        /**
         *  Document default classes
         */
        if (this.hasDocDefaults)
            this.docDefaults();
        /**
         *  Void links defaults
         */
        if (this.hasLinkDefaults)
            this.linkDefaults();
        /**
         *  Ripple default animations
         */
        if (this.hasRippleDefaults)
            this.rippleDefaults();
        /**
         *  Animation default datasets
         */
        if (this.hasAnimationDefaults)
            this.animationDefaults();
        /**
         *  Range slider defaults
         */
        if (this.hasRangeDefaults)
            this.rangeDefaults();
        /**
         *  Chips defaults
         */
        if (this.hasChipDefaults)
            this.chipDefaults();
        /**
         *  Autocomplete defaults
         */
        if (this.hasAutoDefaults)
            this.autoDefaults();
        /**
         *  Closable messages defaults
         */
        if (this.hasMessageDefaults)
            this.messageDefaults();
        /**
         *  Clickable & animated popups defaults
         */
        if (this.hasPopupDefaults)
            this.popupDefaults();
        /**
         *  Clickable & animated menus defaults
         */
        if (this.hasMenuDefaults)
            this.menuDefaults();
        /**
         *  Auto draggable items
         */
        if (this.hasDragDefaults)
            this.dragDefaults();
        /**
         *  Tabs defaults
         */
        if (this.hasTabDefaults)
            this.tabDefaults();
        /**
         *  Accordions defaults
         */
        if (this.hasAccordDefaults)
            this.accordDefaults();
        /**
         *  Counters defaults
         */
        if (this.hasCounterDefaults)
            this.counterDefaults();
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
/* harmony export */   Defaults: () => (/* binding */ Defaults)
/* harmony export */ });
/* harmony import */ var _Blueprints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blueprints */ "./src/ts/modules/Blueprints.ts");
/**
 * Import the parent Class
 */

/**
 * @desc Used for handling components default behaviors
 */
class Defaults extends _Blueprints__WEBPACK_IMPORTED_MODULE_0__.Blueprints {
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
                // Alternatively prevent default behavior
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
     * @desc Handles range sliders automatically
     *
     * @return {void}
     */
    rangeDefaults() {
        if (document.querySelectorAll(`.${this.nameRange}`).length) {
            document.querySelectorAll(`.${this.nameRange}`).forEach((elem) => {
                // Handle range on load & input
                this.range(elem);
            });
        }
    }
    /**
     * @desc Handles chips automatically
     *
     * @return {void}
     */
    chipDefaults() {
        if (document.querySelectorAll(`.${this.nameChip}`).length) {
            document.querySelectorAll(`.${this.nameChip}`).forEach((elem) => {
                // Handle chips on load & enter & remove
                this.chip(elem);
            });
        }
    }
    /**
     * @desc Handles autocomplete automatically
     *
     * @return {void}
     */
    autoDefaults() {
        if (document.querySelectorAll(`.${this.nameAuto}`).length) {
            document.querySelectorAll(`.${this.nameAuto}`).forEach((elem) => {
                // Handle autocomplete on load & input
                this.auto(elem);
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
                this.message(elem);
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
                this.popups(elem);
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
    /**
     * @desc Handles auto draggable items
     *
     * @return {void}
     */
    dragDefaults() {
        if (document.querySelectorAll(`.${this.nameDrag + this.modSep + this.nameDragAuto}`).length) {
            document.querySelectorAll(`.${this.nameDrag + this.modSep + this.nameDragAuto}`).forEach((elem) => {
                // Set CSS properties and variables
                this.drag(elem);
            });
        }
    }
    /**
     * @desc Handles tabs automatically
     *
     * @return {void}
     */
    tabDefaults() {
        if (document.querySelectorAll(`.${this.nameTab + this.modSep + this.nameTabAuto}`).length) {
            document.querySelectorAll(`.${this.nameTab + this.modSep + this.nameTabAuto}`).forEach((elem) => {
                // Fetch elements
                let active = elem.querySelector(`.${this.nameTab + this.chiSep + this.nameActive}`);
                let open = elem.querySelector(`.${this.nameTab + this.chiSep + this.nameOpen}`);
                let dataTab;
                let hash;
                // Handle open content
                if (active && !open) {
                    dataTab = active.dataset.tab;
                    open = elem.querySelector(`.${this.nameTab + this.chiSep + this.nameTabContent}[data-tab="${dataTab}"]`);
                    if (open)
                        open.classList.add(`${this.nameTab + this.chiSep + this.nameOpen}`);
                }
                // Handle URL hash
                hash = this.hash();
                if (hash) {
                    hash = this.replace(hash, "#", "");
                    if (hash) {
                        if (active && active.dataset.tab !== hash)
                            active.classList.remove(`${this.nameTab + this.chiSep + this.nameActive}`);
                        active = elem.querySelector(`.${this.nameTab + this.chiSep + this.nameTabLink}[data-tab="${hash}"]`);
                        if (active)
                            active.classList.add(`${this.nameTab + this.chiSep + this.nameActive}`);
                        if (open && open.dataset.tab !== hash)
                            open.classList.remove(`${this.nameTab + this.chiSep + this.nameOpen}`);
                        open = elem.querySelector(`.${this.nameTab + this.chiSep + this.nameTabContent}[data-tab="${hash}"]`);
                        if (open)
                            open.classList.add(`${this.nameTab + this.chiSep + this.nameOpen}`);
                    }
                }
                // Handle tab links click
                this.tab(elem);
            });
        }
    }
    /**
     * @desc Handles accordions automatically
     *
     * @return {void}
     */
    accordDefaults() {
        if (document.querySelectorAll(`.${this.nameAccord}`).length) {
            document.querySelectorAll(`.${this.nameAccord}`).forEach((elem) => {
                // Handle accordion links click
                this.accord(elem);
            });
        }
    }
    /**
     * @desc Handles counters automatically
     *
     * @return {void}
     */
    counterDefaults() {
        if (document.querySelectorAll(`.${this.nameCounter + this.modSep + this.nameCounterAuto}`).length) {
            document.querySelectorAll(`.${this.nameCounter + this.modSep + this.nameCounterAuto}`).forEach((elem) => {
                // Handle counter on load
                this.counter(elem);
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
/* harmony export */   Helpers: () => (/* binding */ Helpers)
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
     * @desc Returns the equivalent HTMLElement of a selector
     *
     * @param {string | HTMLElement} selector -- The selector name (object)
     *
     * @return {HTMLElement}
     */
    query(selector = null) {
        // Check the selector
        if (this.exist(selector)['status']) {
            if (typeof (selector) === "string") {
                return document.querySelector(selector);
            }
            else if (typeof (selector) === "object") {
                return selector;
            }
        }
        else {
            throw this.exist(selector)['message'];
        }
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
     * @param {string}          content   -- The selector's content | value
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
        try {
            node.innerHTML = content;
        }
        catch (error) {
            node.value = content;
        }
        parentNode.insertBefore(node, parentNode.firstChild);
        // Return the node
        return node;
    }
    /**
     * @desc Appends an HTML element to a parent element
     *
     * @param {string}          selector  -- The selector name
     * @param {string | object} parent    -- The selector's parent name (object)
     * @param {string}          content   -- The selector's content | value
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
        try {
            node.innerHTML = content;
        }
        catch (error) {
            node.value = content;
        }
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
     * @param {number}   speed -- The time speed for each iteration
     * @param {number}   delay -- The time delay for loop
     * @param {number}   count -- The loop count
     * @param {function} cf    -- The callback function for the last loop
     *
     * @return {void}
     */
    loop(fn, speed = 1000, delay = 0, count = Infinity, cf = () => { }) {
        setTimeout(() => {
            // Function initial invoke
            fn();
            // Start looping
            let i = 0;
            let interval = setInterval(() => {
                // Last loop
                if (i == count || count <= 0) {
                    // Terminate the loop
                    return false;
                }
                // One before the last loop
                if (i == count - 1) {
                    // Invoke callback
                    cf();
                    // Clear the interval
                    clearInterval(interval);
                }
                // Invoke the function
                fn();
                i++;
            }, speed);
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
     * @desc Finds URL hash
     *
     * @return {string}
     */
    hash() {
        return window.location.hash;
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
    /**
     * @desc Calls a function on class change for an elemnent
     *
     * @param {any}      elem -- The element to listen
     * @param {Function} fn   -- The callback function
     *
     * @var {object} listener -- The event listener
     *
     * @return {void}
     */
    onClassChange(elem, fn) {
        const listener = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    fn(mutation.target);
                }
            });
        });
        listener.observe(elem, { attributes: true });
        return listener.disconnect;
    }
    /**
     * @desc For swaping two nodes from the same flow
     *
     * @param {HTMLElement} nodeA -- The first node
     * @param {HTMLElement} nodeB -- The second node
     *
     * @var {HTMLElement} siblingA -- The sibling of first node
     *
     * @return {void}
     */
    swap(nodeA, nodeB) {
        // Find the next sibling of nodeA
        const siblingA = (nodeA.nextSibling === nodeB) ? nodeA : nodeA.nextSibling;
        // Move nodeA before the nodeB
        nodeB.parentNode.insertBefore(nodeA, nodeB);
        // Move nodeB before the next sibling of nodeA
        nodeA.parentNode.insertBefore(nodeB, siblingA);
    }
    ;
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
 * Polaris Framework v1.0.1
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