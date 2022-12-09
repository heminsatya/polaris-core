/**
 * Import the parent Class
 */
import { Animations } from "./Animations";
/**
 * @desc Used for setting alerts
 */
export class Alerts extends Animations {
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
//# sourceMappingURL=Alerts.js.map