/**
 * Import the parent Class
 */
import { Draggable } from "./Draggable";
/**
 * @desc Used for handling components default behaviors
 */
export declare class Defaults extends Draggable {
    /**
     * @desc Constructor method
     */
    constructor();
    /**
     * @desc Document default classes
     *
     * @return {void}
     */
    docDefaults(): void;
    /**
     * @desc Handles void links
     *
     * @return {void}
     */
    linkDefaults(): void;
    /**
     * @desc Sets ripple animations if any available
     *
     * @return {void}
     */
    rippleDefaults(): void;
    /**
     * @desc Handles animation datasets if any available
     *
     * @return {void}
     */
    animationDefaults(): void;
    /**
     * @desc Handles closable messages
     *
     * @return {void}
     */
    messageDefaults(): void;
    /**
     * @desc Handles clickable popups
     *
     * @return {void}
     */
    popupDefaults(): void;
    /**
     * @desc Handles clickable and hoverable animated menu
     *
     * @return {void}
     */
    menuDefaults(): void;
    /**
     * @desc Handles auto draggable items
     *
     * @return {void}
     */
    draggableDefaults(): void;
}
