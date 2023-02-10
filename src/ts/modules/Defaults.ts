/**
 * Import the parent Class
 */ 
import {Draggable} from "./Draggable";


/**
 * @desc Used for handling components default behaviors
 */ 
export class Defaults extends Draggable {

    /**
     * @desc Constructor method
     */
    constructor() {
        // Inherit the parent class
        super();
    }


    /**
     * @desc Document default classes
     * 
     * @return {void}
     */
    public docDefaults(): void {
        let doc:any = document.querySelector('body');

        // Check the document class 
        if (!doc.classList.contains(`${this.nameDoc}`)) {
            doc.classList.add(`${this.nameDoc}`);
        }

        // Check the document color
        if (!doc.classList.contains(`${this.nameDoc + this.modSep + this.nameLight}`) && 
            !doc.classList.contains(`${this.nameDoc + this.modSep + this.nameDark}`)) {
            // Color scheme
            let scheme: string;

            // Dark mode
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                scheme = this.nameDark;
            }
            // Light mode
            else {
                scheme = this.nameLight;
            }

            // Set color scheme
            doc.classList.add(`${this.nameDoc + this.modSep + scheme}`);
            
            // Watch for changes
            window.matchMedia('(prefers-color-scheme: dark)').onchange = (event => {
                // Remove old scheme
                this.removeClass(`.${this.nameDoc}`, `${this.nameDoc + this.modSep + scheme}`);

                // Find new scheme
                scheme = event.matches ? this.nameDark : this.nameLight;

                // Set new color scheme
                doc.classList.add(`${this.nameDoc + this.modSep + scheme}`);
            });
        }
    }


    /**
     * @desc Handles void links
     * 
     * @return {void}
     */
    public linkDefaults(): void {
        if (document.querySelectorAll(`.${this.nameVoid}`).length) {
            document.querySelectorAll(`.${this.nameVoid}`).forEach((elem: any) => {
                // Check element href
                if (elem.getAttribute('href') === "#") {
                    elem.setAttribute('href', 'javascript:void(0)');
                }

                // Prevent default behavior
                // elem.onclick = () => {
                //     return false;
                // };
            });
        }
    }
    

    /**
     * @desc Sets ripple animations if any available
     * 
     * @return {void}
     */
    public rippleDefaults(): void {
        /**
         *  Ripple animations
         */
        if (document.querySelectorAll(`.${this.nameRipple}`).length) {
            // ripple
            document.querySelectorAll(`.${this.nameRipple}[data-animation=${this.rippleAnimation}]`).forEach((elem: any) => {
                elem.onclick = (event:any) => {
                    let x = event.clientX, y = event.clientY;
                    const REC = elem.getBoundingClientRect(), DIM = Math.sqrt(Math.pow(REC.width, 2) + Math.pow(REC.height, 2));
                    
                    // Unset the previous ripple animation
                    elem.removeAttribute('data-animation');

                    elem.offsetTop;
                    
                    // Set the new ripple animation
                    elem.setAttribute('data-animation', this.rippleAnimation);
                    
                    elem.style.setProperty('--animation-dimension', DIM + 'px');
                    elem.style.setProperty('--animation-left', x - REC.left + 'px');
                    elem.style.setProperty('--animation-top', y - REC.top + 'px');
                    
                    // Set datasets and variables
                    this.datasets(elem);
                };
            });
            
            // rippleAuto
            document.querySelectorAll(`.${this.nameRipple}[data-animation=${this.rippleAutoAnimation}]`).forEach((elem: any) => {
                // Set datasets and variables
                this.datasets(elem);
            });
        }
    }
    

    /**
     * @desc Handles animation datasets if any available
     * 
     * @return {void}
     */
    public animationDefaults(): void {
        if (document.querySelectorAll(`.${this.nameAnimation}`).length) {
            document.querySelectorAll(`.${this.nameAnimation}`).forEach((elem: any) => {
                // Set CSS properties and variables
                this.datasets(elem);
            });
        }
    }
    

    /**
     * @desc Handles closable messages
     * 
     * @return {void}
     */
    public messageDefaults(): void {
        if (document.querySelectorAll(`.${this.nameMessages + this.chiSep + this.nameClose}`).length) {
            document.querySelectorAll(`.${this.nameMessages + this.chiSep + this.nameClose}`).forEach((elem: any) => {
                elem.onclick = () => {
                    let parent = elem.parentElement.parentElement;

                    this.animation(parent, this.hideYAnimation).then(() => {
                        parent.remove();
                    });
                };
            });
        }
    }
    

    /**
     * @desc Handles clickable popups
     * 
     * @return {void}
     */
    public popupDefaults(): void {
        if (document.querySelectorAll(`.${this.namePopup + this.parSep + this.nameControl}`).length) {
            document.querySelectorAll(`.${this.namePopup + this.parSep + this.nameControl}`).forEach((elem: any) => {
                // Check clickable
                if (elem.querySelector(`.${this.namePopup + this.modSep + this.nameClick}`)) {
                    elem.onclick = (i:any) => {
                        // Popup component
                        let popup = elem.querySelector(`.${this.namePopup + this.modSep + this.nameClick}`);
    
                        // Ignore the click for component and its children(:not(.popup--close))
                        let ignoreClick = false
                        elem.querySelectorAll(`.${this.namePopup} *:not(.${this.namePopup + this.chiSep + this.nameClose})`).forEach((j: any) => {
                            if (i.target == j) {
                                ignoreClick = true;
                            }
                        });
    
                        // Check ignore click
                        if (ignoreClick || i.target == popup) return;
    
                        // Remove open class (hide popup)
                        if (elem.querySelector(`.${this.namePopup + this.modSep + this.nameOpen}`)) {
                            popup.classList.remove(`${this.namePopup + this.modSep + this.nameOpen}`);
                        }
                        // Add open class (show popup)
                        else {
                            popup.classList.add(`${this.namePopup + this.modSep + this.nameOpen}`);
                        }

                        // Prevent default behavior
                        return false;
                    };
                }
            });
        }
    }
    

    /**
     * @desc Handles clickable and hoverable animated menu
     * 
     * @return {void}
     */
    public menuDefaults(): void {
        // Clickable submenu
        if (document.querySelectorAll(`.${this.nameMenu + this.chiSep + this.nameClick}`).length) {
            document.querySelectorAll(`.${this.nameMenu + this.chiSep + this.nameClick}`).forEach((elem: any) => {
                elem.querySelector(`.${this.nameMenu + this.chiSep + this.nameClick} a`).onclick = () => {
                    // Submenu
                    let submenu = elem.querySelector(`.${this.nameMenu + this.chiSep + this.nameClick} ul`);

                    // Check animated submenu
                    if (submenu.classList.contains(`${this.nameAnimation}`)) {
                        let animationIn: string, animationOut: string;

                        // Menu is open
                        if (submenu.classList.contains(`${this.nameMenu + this.chiSep + this.nameOpen}`)) {
                            animationIn  = "fadeOut";
                            animationOut = "fadeIn";

                            // Check data-exit
                            if (submenu.getAttribute("data-exit")) animationIn = submenu.getAttribute("data-exit");
    
                            // Check data-enter
                            if (submenu.getAttribute("data-enter")) animationOut = submenu.getAttribute("data-enter");
                        }
                        // Menu is closed
                        else {
                            animationIn  = "fadeIn";
                            animationOut = "fadeOut";

                            // Check data-enter
                            if (submenu.getAttribute("data-enter")) animationIn = submenu.getAttribute("data-enter");
    
                            // Check data-exit
                            if (submenu.getAttribute("data-exit")) animationOut = submenu.getAttribute("data-exit");
                        }
                        
                        // Check data-animation
                        if (this.getStyle(submenu, 'animation-name') !== 'none') {
                            if (this.getStyle(submenu, 'animation-name') == animationIn) {
                                this.animation(submenu, animationOut);
                            }
                            else if (this.getStyle(submenu, 'animation-name') == animationOut) {
                                this.animation(submenu, animationIn);
                            }
                        } else {
                            this.animation(submenu, animationIn);
                        }
                    }
                    // Remove open class (hide menu)
                    else if (submenu.classList.contains(`${this.nameMenu + this.chiSep + this.nameOpen}`)) {
                        submenu.classList.remove(`${this.nameMenu + this.chiSep + this.nameOpen}`);
                    }
                    // Add open class (show menu)
                    else {
                        submenu.classList.add(`${this.nameMenu + this.chiSep + this.nameOpen}`);
                    }

                    // Prevent default behavior
                    return false;
                };
            });
        }

        // Hoverable animated submenu
        if (document.querySelectorAll(`.${this.nameMenu} li:not(.${this.nameMenu + this.chiSep + this.nameClick})`).length) {
            document.querySelectorAll(`.${this.nameMenu} li:not(.${this.nameMenu + this.chiSep + this.nameClick})`).forEach((elem: any) => {
                // Submenu
                let submenu = elem.querySelector(`.${this.nameMenu} li ul.${this.nameAnimation}`);
                if (submenu) {
                    let animationIn: string, animationOut: string;

                    // Menu is open
                    if (submenu.classList.contains(`${this.nameMenu + this.chiSep + this.nameOpen}`)) {
                        animationIn  = "fadeOut";
                        animationOut = "fadeIn";

                        // Check data-exit
                        if (submenu.getAttribute("data-exit")) animationIn = submenu.getAttribute("data-exit");

                        // Check data-enter
                        if (submenu.getAttribute("data-enter")) animationOut = submenu.getAttribute("data-enter");
                    }
                    // Menu is closed
                    else {
                        animationIn  = "fadeIn";
                        animationOut = "fadeOut";

                        // Check data-enter
                        if (submenu.getAttribute("data-enter")) animationIn = submenu.getAttribute("data-enter");

                        // Check data-exit
                        if (submenu.getAttribute("data-exit")) animationOut = submenu.getAttribute("data-exit");
                    }
    
                    // Mouse over
                    elem.onmouseover = () => {
                        // Show submenu
                        this.animation(submenu, animationIn).then();
                    };
    
                    // Mouse out
                    elem.onmouseout = () => {
                        // Hide submenu
                        this.animation(submenu, animationOut);
                    };
                }
            });
        }
    }
    

    /**
     * @desc Handles auto draggable items
     * 
     * @return {void}
     */
    public draggableDefaults(): void {
        if (document.querySelectorAll(`.${this.nameDraggable + this.parSep + this.nameDragAuto}`).length) {
            document.querySelectorAll(`.${this.nameDraggable + this.parSep + this.nameDragAuto}`).forEach((elem: any) => {
                // Set CSS properties and variables
                this.draggable(elem);
            });
        }
    }

}
