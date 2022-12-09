/**
 * Import the parent Class
 */
import { Alerts } from "./Alerts";
/**
 * @desc Used for setting modal
 */
export declare class Modal extends Alerts {
    /**
     * @desc Constructor method
     */
    constructor();
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
    modal(title: string, body: string, footer?: string, size?: string, enter?: string, exit?: string, color?: string, close?: boolean, backdrop?: boolean, duration?: number): void;
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
    setModal(parent: any, enter?: string, exit?: string, backdrop?: boolean, duration?: number): void;
}
