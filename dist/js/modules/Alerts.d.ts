/**
 * Import the parent Class
 */
import { Animations } from "./Animations";
/**
 * @desc Used for setting alerts
 */
export declare class Alerts extends Animations {
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
}
