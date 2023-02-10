/**
 * Import the parent Class
 */
import { Blueprints } from "./Blueprints";
/**
 * @desc Used for method chaining & initializing defaults & loading Blueprints
 */
export class Core extends Blueprints {
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
         *  Auto draggable items
         */
        this.draggableDefaults();
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
//# sourceMappingURL=Core.js.map