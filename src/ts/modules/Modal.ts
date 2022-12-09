/**
 * Import the parent Class
 */
import {Alerts} from "./Alerts";


/**
 * @desc Used for setting modal
 */ 
export class Modal extends Alerts {

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
    public modal(title: string, body: string, footer: string = "", size:string = "xs", enter: string= "fadeIn", exit: string = "fadeOut", color: string = "", close: boolean = true, backdrop: boolean = true, duration: number = 500): void {

        // Check size
        let sizeCLass: string = "";
        if (this.polarisSizes.includes(size)) {
            sizeCLass = ` ${this.nameModal + this.modSep + size}`;
        }
        else if (size) {
            sizeCLass = ` ${size}`;
        } else {
            sizeCLass = ` ${this.nameWidth}-100`;
        }

        // Set the color class
        let colorClass: string = "";
        if (color === "light") {
            colorClass = ` ${this.nameModal + this.modSep + color}`;
        }

        // Check the closable
        let closeCode: string = "";
        if (close) {
            closeCode = `<div class="${this.nameModal + this.chiSep + this.nameClose} ${this.piClose}"></div>`;
        }

        // Check footer
        let footerCode: string = "";
        if (footer) {
            footerCode = `<footer class="${this.nameModal + this.chiSep + this.nameFooter}">${footer}</main>`;
        }
        
        // Produce the modal content
        let content  = `<div class="${this.nameModal + sizeCLass + colorClass} ${this.nameAnimation} scroll scroll-sm scroll-radius-sm" style="animation-name:${enter}; --animation-duration: ${duration}ms;">`;
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
        const parent: any = document.querySelector(`#${this.nameModal + '-' + this.nameBlueprint}`);

        // Find the backdrop
        const bdrop: any = document.querySelector(`.${this.nameBackdrop}`);

        // Create the node
        const element: any = document.createElement('div');

        // Append the node to the parent
        parent.appendChild(element);
        
        // Modify the node
        element.outerHTML = content;

        // Find the child node
        const child = parent.querySelector(`.${this.nameModal}`);

        // Hide the scrollbar
        let bodyElement: any = document.querySelector('body');
		bodyElement.style.paddingRight = this.scrollWidth() + "px";
		bodyElement.style.overflow = "hidden";

        // Show the backdrop
        if (backdrop) {
            this.animation(bdrop, this.fadeInAnimation);
        }

        // Show the parent
        this.animation(parent, this.fadeInAnimation);

        // Set animation exit on click
        if(child.querySelector(`.${this.nameModal + this.chiSep + this.nameClose}`)) {
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
    public setModal(parent:any, enter: string= "fadeIn", exit: string = "fadeOut", backdrop: boolean = true, duration: number = 500): void {
        // Find the parent
        let parentNode: any;
        if      (typeof(parent) === "string") parentNode = document.querySelector(parent);
        else if (typeof(parent) === "object") parentNode = parent;

        // Find the modal
        const modal: any = parentNode.querySelector(`.${this.nameModal}`);

        // Find the backdrop
        const bdrop: any = document.querySelector(`.${this.nameBackdrop}`);

        // Hide the scrollbar
        let bodyElement: any = document.querySelector('body');
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
        if(modal.querySelector(`.${this.nameModal + this.chiSep + this.nameClose}`)) {
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
