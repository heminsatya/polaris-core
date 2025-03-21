/**
 * Import the parent Class
 */
import { Config } from "./Config";
/**
 * @desc Polaris JS helper methods
 */
export class Helpers extends Config {
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
                // Invoke the function
                fn();
                // Last loop
                if (i == count - 1) {
                    // Clear the interval
                    clearInterval(interval);
                    // Invoke the callback
                    cf();
                    // Terminate the loop
                    return false;
                }
                // Update the conter
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
//# sourceMappingURL=Helpers.js.map