/**
 * Import the parent Class
 */
import { Defaults } from "./Defaults";
/**
 * @desc Used for loading component blueprints
 */
export class Blueprints extends Defaults {
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
//# sourceMappingURL=Blueprints.js.map