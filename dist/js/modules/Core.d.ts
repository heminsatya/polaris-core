/**
 * Import the parent Class
 */
import { Blueprints } from "./Blueprints";
/**
 * @desc Used for method chaining & initializing defaults & loading Blueprints
 */
export declare class Core extends Blueprints {
    /**
     * Properties
     */
    node: any;
    private mode;
    /**
     * @desc Constructor method
     */
    constructor(node?: any, mode?: any);
    /**
     * @desc Used for method chaining
     *
     * @return {any}
     */
    private chain;
    /**
     * @desc addEventListener shorthand
     *
     * @param {string}   e  -- The event name
     * @param {function} fn -- The callback function
     *
     * @return {Object}
     */
    event(e: string, fn: any): Object;
    /**
     * @desc innerHTML simplified
     *
     * @param {string} content - The optional content
     *
     * @return {void | object}
     */
    html(content?: string): void | object;
    /**
     * @desc The objects length
     *
     * @return {number}
     */
    length(): number;
    /**
     * Initializes the Polaris class
     *
     * @return {void}
     */
    init(): void;
}
