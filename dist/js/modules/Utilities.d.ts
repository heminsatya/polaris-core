/**
 * Import the parent Class
 */
import { Animations } from "./Animations";
/**
 * @desc Used for handling other Utilities
 */
export declare class Utilities extends Animations {
    /**
     * @desc Constructor method
     */
    constructor();
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
    alert(text: string, enter?: string, exit?: string, status?: string, color?: string, close?: boolean, duration?: number, delay?: number): void;
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
    /**
     * @desc Hadnles the dragable items on drag
     *
     * @param {HTMLElement} container -- The dragable container
     *
     * @return {Promise}
     */
    draggable(container: any): any;
    /**
     * @desc Handles closable message
     *
     * @param {HTMLElement} selector -- The message close selector
     *
     * @return {void}
     */
    message(selector: any): void;
    /**
     * @desc Handles clickable popups
     *
     * @param {HTMLElement} selector -- The popup selector
     *
     * @return {void}
     */
    popups(selector: any): void;
    /**
     * @desc Hadnles tabs
     *
     * @param {HTMLElement} selector -- The tab selector
     *
     * @return {Promise}
     */
    tab(selector: any): any;
}
