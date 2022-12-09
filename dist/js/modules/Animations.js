/**
 * Import the parent Class
 */
import { Helpers } from "./Helpers";
/**
 * @desc Used for setting & handling animations
 */
export class Animations extends Helpers {
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
        if (this.check(selector)['status']) {
            if (typeof (selector) === "string") {
                node = document.querySelector(selector);
            }
            else if (typeof (selector) === "object") {
                node = selector;
            }
        }
        else {
            throw this.check(selector)['message'];
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
        if (this.check(selector)['status']) {
            if (typeof (selector) === "string") {
                nodes = document.querySelectorAll(selector);
            }
            else if (typeof (selector) === "object") {
                nodes = selector;
            }
        }
        else {
            throw this.check(selector)['message'];
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
        if (this.check(selector)['status']) {
            if (typeof (selector) === "string") {
                node = document.querySelector(selector);
            }
            else if (typeof (selector) === "object") {
                node = selector;
            }
        }
        else {
            throw this.check(selector)['message'];
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
        if (this.check(selector)['status']) {
            if (typeof (selector) === "string") {
                selectors = document.querySelectorAll(selector);
            }
            else if (typeof (selector) === "object") {
                selectors = selector;
            }
        }
        else {
            throw this.check(selector)['message'];
        }
        // Check the navigators
        if (this.check(navigator)['status']) {
            if (typeof (navigator) === "string") {
                navigators = document.querySelectorAll(navigator);
            }
            else if (typeof (navigator) === "object") {
                navigators = navigator;
            }
        }
        else {
            throw this.check(navigator)['message'];
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
//# sourceMappingURL=Animations.js.map