/**
 * Import the parent Class
 */
import { Animations } from "./Animations";
/**
 * @desc Used for handling Components (Utilities)
 */
export declare class Components extends Animations {
    /**
     * @desc Constructor method
     */
    constructor();
    /**
     * @desc Hadnles tabs
     *
     * @param {HTMLElement} sel -- The tab selector
     *
     * @return {void}
     */
    range(sel: any): void;
    /**
     * @desc Hadnles chips
     *
     * @param {HTMLElement} sel -- The chip selector
     *
     * @return {void}
     */
    chip(sel: any): void;
    /**
     * @desc Hadnles autocomplete
     *
     * @param {HTMLElement} sel -- The autocomplete selector
     *
     * @return {void}
     */
    auto(sel: any): void;
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
     * @param {HTMLElement} cont      -- Modal container selector
     * @param {string}      enter     -- Modal animation enter
     * @param {string}      exit      -- Modal animation exit
     * @param {boolean}     backdrop  -- Has backdrop: true | false
     * @param {number}      duration  -- Modal animation duration: number in miliseconds
     *
     * @return {void}
     */
    setModal(cont: any, enter?: string, exit?: string, backdrop?: boolean, duration?: number): void;
    /**
     * @desc Hadnles the dragable items on drag
     *
     * @param {HTMLElement} sel -- The dragable selector
     *
     * @return {Promise}
     */
    drag(sel: any): any;
    /**
     * @desc Handles closable message
     *
     * @param {HTMLElement} sel -- The message close selector
     *
     * @return {void}
     */
    message(sel: any): void;
    /**
     * @desc Handles clickable popups
     *
     * @param {HTMLElement} sel -- The popup selector
     *
     * @return {void}
     */
    popups(sel: any): void;
    /**
     * @desc Hadnles tabs
     *
     * @param {HTMLElement} sel -- The tab selector
     *
     * @return {Promise}
     */
    tab(sel: any): any;
    /**
     * @desc Hadnles tabs
     *
     * @param {HTMLElement} sel -- The accordion selector
     *
     * @return {void}
     */
    accord(sel: any): void;
    /**
     * @desc Hadnles tabs
     *
     * @param {HTMLElement} sel -- The counter selector
     * @param {function}    cf  -- The callback function for the last count
     *
     * @return {void|boolean}
     */
    counter(sel: any, cf?: Function): void | boolean;
}
