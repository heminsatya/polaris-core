/**
 * Import the parent Class
 */ 
import {Blueprints} from "./Blueprints";


/**
 * @desc Used for handling components default behaviors
 */ 
export class Defaults extends Blueprints {

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

                // Alternatively prevent default behavior
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
     * @desc Handles range sliders automatically
     * 
     * @return {void}
     */
    public rangeDefaults(): void {
        if (document.querySelectorAll(`.${this.nameRange}`).length) {
            document.querySelectorAll(`.${this.nameRange}`).forEach((elem: any) => {
                // Handle range on load & input
                this.range(elem);
            });
        }
    }


    /**
     * @desc Handles chips automatically
     * 
     * @return {void}
     */
    public chipDefaults(): void {
        if (document.querySelectorAll(`.${this.nameChip}`).length) {
            document.querySelectorAll(`.${this.nameChip}`).forEach((elem: any) => {
                // Handle chips on load & enter & remove
                this.chip(elem);
            });
        }
    }


    /**
     * @desc Handles autocomplete automatically
     * 
     * @return {void}
     */
    public autoDefaults(): void {
        if (document.querySelectorAll(`.${this.nameAuto}`).length) {
            document.querySelectorAll(`.${this.nameAuto}`).forEach((elem: any) => {
                // Handle autocomplete on load & input
                this.auto(elem);
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
                this.message(elem);
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
                this.popups(elem);
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
    public dragDefaults(): void {
        if (document.querySelectorAll(`.${this.nameDrag + this.modSep + this.nameDragAuto}`).length) {
            document.querySelectorAll(`.${this.nameDrag + this.modSep + this.nameDragAuto}`).forEach((elem: any) => {
                // Set CSS properties and variables
                this.drag(elem);
            });
        }
    }
    

    /**
     * @desc Handles tabs automatically
     * 
     * @return {void}
     */
    public tabDefaults(): void {
        if (document.querySelectorAll(`.${this.nameTab + this.modSep + this.nameTabAuto}`).length) {
            document.querySelectorAll(`.${this.nameTab + this.modSep + this.nameTabAuto}`).forEach((elem: any) => {
                // Fetch elements
                let active = elem.querySelector(`.${this.nameTab + this.chiSep + this.nameActive}`);
                let open   = elem.querySelector(`.${this.nameTab + this.chiSep + this.nameOpen}`);
                let dataTab;
                let hash;

                // Handle open content
                if (active && !open) {
                    dataTab = active.dataset.tab;
                    open 	= elem.querySelector(`.${this.nameTab + this.chiSep + this.nameTabContent}[data-tab="${dataTab}"]`);

                    if (open) open.classList.add(`${this.nameTab + this.chiSep + this.nameOpen}`);
                }

                // Handle URL hash
                hash = this.hash();
                if (hash) {
                    hash = this.replace(hash, "#", "");
                    if (hash) {
                        if (active && active.dataset.tab !== hash) active.classList.remove(`${this.nameTab + this.chiSep + this.nameActive}`);
                        active = elem.querySelector(`.${this.nameTab + this.chiSep + this.nameTabLink}[data-tab="${hash}"]`);
                        if (active) active.classList.add(`${this.nameTab + this.chiSep + this.nameActive}`);
                        
                        if (open && open.dataset.tab !== hash) open.classList.remove(`${this.nameTab + this.chiSep + this.nameOpen}`);
                        open = elem.querySelector(`.${this.nameTab + this.chiSep + this.nameTabContent}[data-tab="${hash}"]`);
                        if(open) open.classList.add(`${this.nameTab + this.chiSep + this.nameOpen}`);
                    }
                }

                // Handle tab links click
                this.tab(elem);
            });
        }
    }


    /**
     * @desc Handles accordions automatically
     * 
     * @return {void}
     */
    public accordDefaults(): void {
        if (document.querySelectorAll(`.${this.nameAccord}`).length) {
            document.querySelectorAll(`.${this.nameAccord}`).forEach((elem: any) => {
                // Handle accordion links click
                this.accord(elem);
            });
        }
    }


    /**
     * @desc Handles counters automatically
     * 
     * @return {void}
     */
    public counterDefaults(): void {
        if (document.querySelectorAll(`.${this.nameCounter + this.modSep + this.nameCounterAuto}`).length) {
            document.querySelectorAll(`.${this.nameCounter + this.modSep + this.nameCounterAuto}`).forEach((elem: any) => {
                // Handle counter on load
                this.counter(elem);
            });
        }
    }

}
