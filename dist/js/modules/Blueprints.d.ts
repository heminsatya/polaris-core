/**
 * Import the parent Class
 */
import { Defaults } from "./Defaults";
/**
 * @desc Used for loading component blueprints
 */
export declare class Blueprints extends Defaults {
    /**
     * @desc Constructor method
     */
    constructor();
    /**
     * @desc Appends backdrop blueprint if not exists
     *
     * @return {void}
     */
    backdropBlueprint(): void;
    /**
     * @desc Appends alert blueprint if not exists
     *
     * @return {void}
     */
    alertBlueprint(): void;
    /**
     * @desc Append modal blueprint if not exists
     *
     * @return {void}
     */
    modalBlueprint(): void;
}
