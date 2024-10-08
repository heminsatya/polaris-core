/**
 * Import the parent Class
 */
import { Blueprints } from "./Blueprints";
/**
 * @desc Used for handling components default behaviors
 */
export declare class Defaults extends Blueprints {
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
     * @desc Handles range sliders automatically
     *
     * @return {void}
     */
    rangeDefaults(): void;
    /**
     * @desc Handles chips automatically
     *
     * @return {void}
     */
    chipDefaults(): void;
    /**
     * @desc Handles autocomplete automatically
     *
     * @return {void}
     */
    autoDefaults(): void;
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
    dragDefaults(): void;
    /**
     * @desc Handles tabs automatically
     *
     * @return {void}
     */
    tabDefaults(): void;
    /**
     * @desc Handles accordions automatically
     *
     * @return {void}
     */
    accordDefaults(): void;
    /**
     * @desc Handles counters automatically
     *
     * @return {void}
     */
    counterDefaults(): void;
}
