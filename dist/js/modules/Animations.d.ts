/**
 * Import the parent Class
 */
import { Helpers } from "./Helpers";
/**
 * @desc Used for setting & handling animations
 */
export declare class Animations extends Helpers {
    /**
     * @desc Constructor method
     */
    constructor();
    /**
     * @desc Sets and returns a new animation Promise
     *
     * @param {any}     selector  -- The selector name (object)
     * @param {string}  animation -- The animation name
     * @param {boolean} clear     -- For clearing the animation after it has been ended
     *
     * @return {any}
     */
    animation(selector: any, animation?: string, clear?: boolean): any;
    /**
     * @desc Checks animation datasets and sets relevant variables
     *
     * @param {object} selector -- The selector object
     *
     * @return {void}
     */
    datasets(selector: any): void;
    /**
     * @desc Makes selectors animated
     *
     * @param {string | object} selector -- The selector name (object)
     * @param {string}          mod      -- The scroll mod
     *
     * @return {void}
     */
    animated(selector: string | object, mod?: string): void | boolean;
    /**
     * @desc Loops an animation
     *
     * @param {string | object} selector -- The selector name (object)
     * @param {number}          duration -- The loop duration (in miliseconds)
     * @param {number}          count    -- The loop count
     *
     * @return {void | boolean}
     */
    animating(selector: string | object, duration?: number, count?: number): void | boolean;
    /**
     * @desc For navigation active class on page scroll
     *
     * @param {string | object} selector  -- The selector name (object)
     * @param {string | object} navigator -- The navigator selector name (object)
     * @param {string}          active    -- The navigator active class
     * @param {number}          tolerance -- The scroll tolerance
     *
     * @return {void | boolean}
     */
    navigated(selector: string | object, navigator: string | object, active?: string, tolerance?: number): void | boolean;
}
