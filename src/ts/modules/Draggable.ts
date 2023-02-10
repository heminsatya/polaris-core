/**
 * Import the parent Class
 */
import {Modal} from "./Modal";


/**
 * @desc Used for handling draggable items
 */ 
export class Draggable extends Modal {

    /**
     * @desc Constructor method
     */
    constructor() {
        // Inherit the parent class
        super();
    }


    /**
     * @desc Hadnles the dragable items on drag
     * 
     * @param {HTMLElement} container -- The dragable container
     * 
     * @return {Promise}
     */
    public draggable(container:any):any {
        let selector: any = null;

        // Check the container
        if (this.exist(container)['status']) {
            if (typeof(container) === "string") {
                selector = document.querySelector(container);
    
            } else if (typeof(container) === "object") {
                selector = container;
            }
        }
        else {
            throw this.exist(container)['message'];
        }

        // Animation promise
        const promise = new Promise((resolve, reject) => {
            const draggables:any = Array.from(selector.children);

            // Items
            let counter = 1;
            draggables.forEach((draggable: any) => {
                // Check the data-order
                if (!draggable.dataset.order) {
                    draggable.dataset.order = counter;
                }
    
                // Drag start
                draggable.ondragstart = (e: Event) => {
                    if (e.target === draggable) {
                        draggable.classList.add(this.nameDraggable + this.modSep + this.nameDragging);
                    }
                };
        
                // Drag enter
                draggable.ondragenter = (e: Event) => {
                    if (e.target === draggable) {
                        const dragging = selector.querySelector(`.${this.nameDraggable + this.modSep + this.nameDragging}`);
    
                        if (draggable != dragging && dragging) {
                            if (dragging.parentNode === draggable.parentNode) {
                                const draggingOrder  = dragging.dataset.order;
                                const draggableOrder = draggable.dataset.order;
                                
                                // Swap orders
                                dragging.dataset.order  = draggableOrder;
                                draggable.dataset.order = draggingOrder;
                
                                // Swap items
                                this.swap(dragging, draggable);
    
                                // Swaping
                                draggable.classList.add(this.nameDraggable + this.modSep + this.nameSwapping);
                                dragging.classList.add(this.nameDraggable + this.modSep + this.nameSwapping);
                            }
                        }
                    }
                };
        
                // Drag leave
                draggable.ondragleave = (e: Event) => {
                    if (e.target === draggable) {
                        const dragging = selector.querySelector(`.${this.nameDraggable + this.modSep + this.nameDragging}`);
    
                        if (draggable != dragging && dragging) {
                            if (dragging.parentNode === draggable.parentNode) {
                                // Swaping
                                draggable.classList.remove(this.nameDraggable + this.modSep + this.nameSwapping);
                                dragging.classList.remove(this.nameDraggable + this.modSep + this.nameSwapping);
                            }
                        }
                    }
                };
        
                // Drag over
                draggable.ondragover = (e: Event) => {
                    const dragging = selector.querySelector(`.${this.nameDraggable + this.modSep + this.nameDragging}`);
    
                    if (dragging) {
                        if (dragging.parentNode === draggable.parentNode) {
                            e.preventDefault();
                        }
                    }
                };
        
                // Drag end
                draggable.ondragend = (e: Event) => {
                    if (e.target === draggable) {
                        // Swaping
                        const swaping = selector.querySelector(`.${this.nameDraggable + this.modSep + this.nameSwapping}`);
                        if (swaping) swaping.classList.remove(this.nameDraggable + this.modSep + this.nameSwapping);
    
                        const dragging = selector.querySelector(`.${this.nameDraggable + this.modSep + this.nameDragging}`);
                        if (dragging) dragging.classList.remove(this.nameDraggable + this.modSep + this.nameSwapping);

                        draggable.classList.remove(this.nameDraggable + this.modSep + this.nameDragging);
                    }

                    // Promise on resolve
                    resolve('Dragabble ended!');
        
                    // Promise on reject
                    reject('Dragabble crashed!');
                };
        
                // Increase counter
                counter++;
            });

        });

        // Return the promise
        return promise;
    }

}
