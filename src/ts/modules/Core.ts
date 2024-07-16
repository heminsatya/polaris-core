/**
 * Import the parent Class
 */ 
import {Defaults} from "./Defaults";


/**
 * @desc Used for method chaining & initializing defaults & loading Blueprints
 */ 
export class Core extends Defaults {

    /**
     * Properties
     */
    public  node: any;
	private mode: any;


    /**
     * @desc Constructor method
     */
    constructor(node: any = null, mode: any = null) {
        // Inherit the parent class
        super();

        // Initialize properties
        this.node = node;
        this.mode = mode;

        // Check the selector
        if (node && typeof(node) === "string") {
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
    private chain(): any {
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
	public event(e:string, fn: any): Object {
        // Check the selector
        if (typeof(this.node) === "object") {
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
	public html(content: string = ""): void | object {
        // Check the selector
        if (typeof(this.node) === "object") {
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
	public length(): number {
        // Check the selector
        if (typeof(this.node) === "object") {
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
    init(): void {
        /**
         *  Load Blueprints
         */
        /**
         *  Backdrop blueprint
         */
        if (this.hasBackdropBlueprint) this.backdropBlueprint();

        
        /**
         *  Alert blueprint
         */
        if (this.hasAlertBlueprint) this.alertBlueprint();


        /**
         *  Modal blueprint
         */
        if (this.hasModalBlueprint) this.modalBlueprint();


        /**
         *  Load Defaults
         */
        /**
         *  Document default classes
         */
        if (this.hasDocDefaults) this.docDefaults();


        /**
         *  Void links defaults
         */
        if (this.hasLinkDefaults) this.linkDefaults();


        /**
         *  Ripple default animations
         */
        if (this.hasRippleDefaults) this.rippleDefaults();


        /**
         *  Animation default datasets
         */
        if (this.hasAnimationDefaults) this.animationDefaults();


        /**
         *  Range slider defaults
         */
        if (this.hasRangeDefaults) this.rangeDefaults();


        /**
         *  Chips defaults
         */
        if (this.hasChipDefaults) this.chipDefaults();


        /**
         *  Autocomplete defaults
         */
        if (this.hasAutoDefaults) this.autoDefaults();
        

        /**
         *  Closable messages defaults
         */
        if (this.hasMessageDefaults) this.messageDefaults();
        

        /**
         *  Clickable & animated popups defaults
         */
        if (this.hasPopupDefaults) this.popupDefaults();

        
        /**
         *  Clickable & animated menus defaults
         */
        if (this.hasMenuDefaults) this.menuDefaults();


        /**
         *  Auto draggable items
         */
        if (this.hasDragDefaults) this.dragDefaults();


        /**
         *  Tabs defaults
         */
        if (this.hasTabDefaults) this.tabDefaults();


        /**
         *  Accordions defaults
         */
        if (this.hasAccordDefaults) this.accordDefaults();


        /**
         *  Counters defaults
         */
        if (this.hasCounterDefaults) this.counterDefaults();
    }
}
