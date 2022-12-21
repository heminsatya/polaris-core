/**
 * Import the parent Class
 */
import { Config } from "./Config";
/**
 * @desc Polaris JS helper methods
 */
export declare class Helpers extends Config {
    /**
     * @desc Constructor method
     */
    constructor();
    /**
     * @desc Checks a selector for type & existence
     *
     * @param {string | HTMLElement} selector -- The selector name (object)
     *
     * @return {object}
     */
    exist(selector?: any): any;
    /**
     * @desc Produces the querySelector object
     *
     * @param {string} selector -- The selector name
     *
     * @return {object}
     */
    selector(selector: string): any;
    /**
     * @desc Produces the querySelectorAll object
     *
     * @param {string} selector -- The selector name
     *
     * @return {object}
     */
    selectors(selector: string): any;
    /**
     * @desc Checks if an element is visible on the screen
     *
     * @param {string | object} selector  -- The selector name (object)
     * @param {string}          from      -- Visible from (top, bottom, or both)
     * @param {number}          tolerance -- The scroll tolerance
     *
     * @return {boolean}
     */
    visible(selector: any, from?: string, tolerance?: number): boolean;
    /**
     * @desc Prepends an HTML element to a parent element
     *
     * @param {string}          selector  -- The selector name
     * @param {string | object} parent    -- The selector's parent name (object)
     * @param {string}          content   -- The selector's content
     * @param {object}          classList -- The selector's class list ['class-1', 'class-2', ...]
     * @param {string}          id        -- The selector's id name
     * @param {string}          style     -- The selector's inline CSS styles
     * @param {object}          attrs     -- The selector's attributes
     *
     * @return {HTMLElement | boolean}
     */
    prepend(selector: string, parent: any, content: string, classList?: string[], id?: string, style?: string, attrs?: any): HTMLElement | boolean;
    /**
     * @desc Appends an HTML element to a parent element
     *
     * @param {string}          selector  -- The selector name
     * @param {string | object} parent    -- The selector's parent name (object)
     * @param {string}          content   -- The selector's content
     * @param {object}          classList -- The selector's class list ['class-1', 'class-2', ...]
     * @param {string}          id        -- The selector's id name
     * @param {string}          style     -- The selector's inline CSS styles
     * @param {object}          attrs     -- The selector's attributes
     *
     * @return {HTMLElement | boolean}
     */
    append(selector: string, parent: any, content: string, classList?: string[], id?: string, style?: string, attrs?: any): HTMLElement | boolean;
    /**
     * @desc Removes an HTML element from the DOM
     *
     * @param {string | object} selector -- The selector name (object)
     *
     * @return {void | boolean}
     */
    remove(selector: any): void | boolean;
    /**
     * @desc For writing the whole document
     *
     * @param {string} content -- The document content
     *
     * @return {void}
     */
    write(content?: string): void;
    /**
     * @desc Loops a function for a couple of times
     *
     * @param {function} fn    -- The function that needed to be looped
     * @param {number}   delay -- The time delay for each iteration
     * @param {number}   count -- The loop count
     *
     * @return {void}
     */
    loop(fn: any, delay?: number, count?: number): void;
    /**
     * @desc Excecutes a function after document fully loaded
     *
     * @param {function} fn -- The callback function
     *
     * @return {void}
     */
    loaded(fn: any): void;
    /**
     * @desc For escaping Regular Expression search characters
     *
     * @param {string} str -- The string to format
     *
     * @return {string}
     */
    escape(str: string): string;
    /**
     * @desc For replacing character(s) in a string
     *
     * @param {string} str     -- The string to format
     * @param {string} find    -- The character(s) to find
     * @param {string} replace -- The character(s) to replace
     *
     * @return {string}
     */
    replace(str: string, find: string, replace: string): string;
    /**
     * @desc For removeing character(s) in a string before some character(s)
     *
     * @param {string}  str    -- The string to format
     * @param {string}  find   -- The character(s) to find
     * @param {boolean} strict -- Remove the character itself?
     *
     * @return {string | undefined}
     */
    removeBefore: (str: string, find: string, strict?: boolean) => string | undefined;
    /**
     * @desc For removeing character(s) in a string after some character(s)
     *
     * @param {string}  str    -- The string to format
     * @param {string}  find   -- The character(s) to find
     * @param {boolean} strict -- Remove the character itself?
     *
     * @return {string}
     */
    removeAfter: (str: string, find: string, strict?: boolean) => string;
    /**
     * @desc For redirecting http URLs
     *
     * @param {string} url -- The URL to redirect
     *
     * @return {void}
     */
    redirect(url?: string): void;
    /**
     * @desc Finds page relative href
     *
     * @return {string}
     */
    href(): string;
    /**
     * @desc Calculates the scrollbar width
     *
     * @return {number}
     */
    scrollWidth(): number;
    /**
     * @desc Checks a file for existence
     *
     * @param {string} file -- The absolute file path
     *
     * @return {boolean}
     */
    fileExist(file: string): boolean;
    /**
     * @desc Reads and returns a file content as a promise in JSON format
     *
     * @param {string} file -- The absolute file path
     *
     * @return {object|boolean}
     */
    json(file: string, strict?: boolean): object | boolean;
    /**
     * @desc Reads and returns a file content as a promise in plain text
     *
     * @param {string} file -- The absolute file path
     *
     * @return {object|boolean}
     */
    text(file: string, strict?: boolean): object | boolean;
    /**
     * @desc Creates a promise to copy a text to clipboard and returns the result
     *
     * @param {string} text -- The text to copy
     *
     * @return {void|boolean}
     */
    copy(text: string): void | boolean;
    /**
     * @desc Adds a class to a selector
     *
     * @param {string|object} selector -- The selector name (object)
     * @param {string} cls             -- The class name
     *
     * @return {void}
     */
    addClass(selector: any, cls: string): void;
    /**
     * @desc Removes a class to a selector
     *
     * @param {string | object} selector -- The selector name (object)
     * @param {string} cls               -- The class name
     *
     * @return {void}
     */
    removeClass(selector: any, cls: string): void;
    /**
     * @desc Toggles an old class with a new class for a selector
     *
     * @param {string|object} selector -- The selector name (object)
     * @param {string}        oldCls   -- The old class name
     * @param {string}        newCls   -- The new class name
     *
     * @return {void}
     */
    toggleClass(selector: any, oldCls: string, newCls: string): void;
    /**
     * @desc Adds a class list(array) to a selector
     *
     * @param {string|object} selector -- The selector name (object)
     * @param {string[]} classList     -- The class list (array)
     *
     * @return {void}
     */
    addClasses(selector: any, classList: string[]): void;
    /**
     * @desc Converts and returns a string into uppercase, taking into account the current locale
     *
     * @param {string} text -- The text to excecute
     *
     * @return {string}
     */
    upper(text: string): string;
    /**
     * @desc Converts and returns a string into lowercase, taking into account the current locale
     *
     * @param {string} text -- The text to excecute
     *
     * @return {string}
     */
    lower(text: string): string;
    /**
     * @desc Returns the computed style for an element
     *
     * @param {string | HTMLElement} selector -- The node seclector
     *
     * @return {string}
     */
    getStyle(selector: any, property: string): string | undefined;
    /**
     * @desc Checks if the browser is fullscreen
     *
     * @return {boolean}
     */
    isFullscreen(): boolean;
    /**
     * @desc Request an element to be fullscreen
     *
     * @var {any} method -- The request method
     *
     * @return {void}
     */
    fullscreen(elem: any): void;
    /**
     * @desc Exits browser fullscreen
     *
     * @var {any} elem -- The document object
     *
     * @return {void}
     */
    exitFullscreen(): void;
}
