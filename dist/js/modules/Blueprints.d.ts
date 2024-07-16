/**
 * Import the parent Class
 */
import { Components } from "./Components";
/**
 * @desc Used for loading component blueprints
 */
export declare class Blueprints extends Components {
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
