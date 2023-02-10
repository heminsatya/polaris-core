/**
 * Import the parent Class
 */
import { Modal } from "./Modal";
/**
 * @desc Used for handling draggable items
 */
export declare class Draggable extends Modal {
    /**
     * @desc Constructor method
     */
    constructor();
    /**
     * @desc Hadnles the dragable items on drag
     *
     * @param {HTMLElement} container -- The dragable container
     *
     * @return {Promise}
     */
    draggable(container: any): any;
}
