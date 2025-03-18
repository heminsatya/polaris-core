/**
 * Import the parent Class
 */
import { Animations } from "./Animations";
/**
 * @desc Used for handling Components (Utilities)
 */
export class Components extends Animations {
    /**
     * @desc Constructor method
     */
    constructor() {
        // Inherit the parent class
        super();
    }
    /**
     * @desc Hadnles tabs
     *
     * @param {HTMLElement} sel -- The tab selector
     *
     * @return {void}
     */
    range(sel) {
        // Check the selector
        const selector = this.query(sel);
        let progress, distort = 0;
        let thumbWidth;
        // Set thumbWidth
        if (selector.classList.contains(this.nameRange + this.modSep + "xs")) {
            thumbWidth = this.rangeWidthXS;
        }
        else if (selector.classList.contains(this.nameRange + this.modSep + "sm")) {
            thumbWidth = this.rangeWidthSM;
        }
        else if (selector.classList.contains(this.nameRange + this.modSep + "md")) {
            thumbWidth = this.rangeWidthMD;
        }
        else if (selector.classList.contains(this.nameRange + this.modSep + "lg")) {
            thumbWidth = this.rangeWidthLG;
        }
        else if (selector.classList.contains(this.nameRange + this.modSep + "xl")) {
            thumbWidth = this.rangeWidthXL;
        }
        else {
            thumbWidth = this.rangeWidthMD;
        }
        // Handle range on load
        progress = (Number(selector.value) - Number(selector.min)) / (Number(selector.max) - Number(selector.min)) * 100;
        distort = (50 - progress) * thumbWidth / 100;
        selector.style.setProperty("--range-progress", `calc(${progress}% + ${distort}rem)`);
        if (selector.parentElement.classList.contains(this.nameRange + this.parSep + this.nameControl)) {
            selector.parentElement.style.setProperty("--range-progress", `calc(${progress}% + ${distort}rem)`);
        }
        // Handle range on input
        selector.oninput = () => {
            progress = (Number(selector.value) - Number(selector.min)) / (Number(selector.max) - Number(selector.min)) * 100;
            distort = (50 - progress) * thumbWidth / 100;
            selector.style.setProperty("--range-progress", `calc(${progress}% + ${distort}rem)`);
            if (selector.parentElement.classList.contains(this.nameRange + this.parSep + this.nameControl)) {
                selector.parentElement.style.setProperty("--range-progress", `calc(${progress}% + ${distort}rem)`);
            }
        };
    }
    /**
     * @desc Hadnles chips
     *
     * @param {HTMLElement} sel -- The chip selector
     *
     * @return {void}
     */
    chip(sel) {
        // Check the selector
        const selector = this.query(sel);
        // Fetch chip elements
        let chipItems = selector.querySelector(`.${this.nameChip + this.chiSep + this.nameChipItems}`);
        let chipInput = selector.querySelector(`.${this.nameChip + this.chiSep + this.nameChipInput}`);
        let chipOutput = selector.querySelector(`.${this.nameChip + this.chiSep + this.nameChipOutput}`);
        let chipValues = [];
        // Check chip--items
        if (!chipItems) {
            this.prepend('div', selector, '', [this.nameChip + this.chiSep + this.nameChipItems]);
            chipItems = selector.querySelector(`.${this.nameChip + this.chiSep + this.nameChipItems}`);
        }
        // Check chip--input
        if (!chipInput) {
            this.append('input', selector, '', [this.nameChip + this.chiSep + this.nameChipInput], '', '', { "type": "text" });
            chipInput = selector.querySelector(`.${this.nameChip + this.chiSep + this.nameChipInput}`);
        }
        // Check chip--output
        if (!chipOutput) {
            this.append('input', selector, '', [this.nameChip + this.chiSep + this.nameChipOutput], '', '', { "type": "hidden" });
            chipOutput = selector.querySelector(`.${this.nameChip + this.chiSep + this.nameChipOutput}`);
        }
        // Check chip--output value
        if (chipOutput.value.trim()) {
            chipValues = chipOutput.value.split(',');
            chipItems.innerHTML = "";
            chipValues.forEach((chipValue) => {
                this.append('div', chipItems, `<span class="${this.nameChip + this.chiSep + this.nameChipText}">${chipValue}</span><span class="${this.nameChip + this.chiSep + this.nameChipClose} ${this.piClose}"></span>`, [this.nameChip + this.chiSep + this.nameChipItem]);
            });
        }
        // Handle chip--close on click
        const chipClose = () => {
            const items = chipItems.querySelectorAll(`.${this.nameChip + this.chiSep + this.nameChipClose}`);
            items.forEach((item) => {
                item.onclick = () => {
                    // Find value
                    const value = item.parentElement.querySelector(`.${this.nameChip + this.chiSep + this.nameChipText}`).innerHTML;
                    // Update chipValues
                    chipValues.splice(chipValues.indexOf(value), 1);
                    // Update chipOutput
                    chipOutput.value = chipValues.toString();
                    // Remove item
                    this.remove(item.parentElement);
                };
            });
        };
        // Call chipClose onload
        chipClose();
        // Handle chip--input on enter
        chipInput.onkeydown = (event) => {
            if (event.keyCode === 13) {
                // Prevent default behavior
                event.preventDefault();
                let value = chipInput.value.trim();
                // Prevent repetitive value insertion
                if (!chipValues.includes(value) && value && !value.includes(",")) {
                    // Update chip values
                    chipValues.push(value);
                    // Update chip--output
                    chipOutput.value = chipValues.toString();
                    // Append chip--item
                    this.append('div', chipItems, `<span class="${this.nameChip + this.chiSep + this.nameChipText}">${value}</span><span class="${this.nameChip + this.chiSep + this.nameChipClose} ${this.piClose}"></span>`, [this.nameChip + this.chiSep + this.nameChipItem]);
                    // Empty chip--input
                    chipInput.value = "";
                    // chipClose recursion
                    chipClose();
                }
                // Check autocomplete
                if (selector.querySelector(`.${this.nameAuto}`)) {
                    chipInput.blur();
                    this.auto(selector.querySelector(`.${this.nameAuto}`));
                    chipInput.focus();
                }
            }
        };
    }
    /**
     * @desc Hadnles autocomplete
     *
     * @param {HTMLElement} sel -- The autocomplete selector
     *
     * @return {void}
     */
    auto(sel) {
        // Check the selector
        const selector = this.query(sel);
        // Fetch elements
        let autoInput = selector.querySelector(`.${this.nameAuto + this.chiSep + this.nameAutoInput}`);
        let autoOutput = selector.querySelector(`.${this.nameAuto + this.chiSep + this.nameAutoOutput}`);
        let autoItems;
        // Check auto--input data-items
        if (!autoInput.hasAttribute("data-items")) {
            autoInput.setAttribute("data-items", "");
        }
        // Check auto--input
        if (!autoInput) {
            this.prepend('input', selector, '', [this.nameAuto + this.chiSep + this.nameAutoInput]);
            autoInput = selector.querySelector(`.${this.nameAuto + this.chiSep + this.nameAutoInput}`);
        }
        // Check auto--input data-sort
        if (!autoInput.hasAttribute("data-sort")) {
            autoInput.setAttribute("data-sort", true);
        }
        // Check auto--input autocomplete
        if (!autoInput.hasAttribute("autocomplete")) {
            autoInput.setAttribute("autocomplete", "off");
        }
        // Check auto--output
        if (!autoOutput) {
            this.append('ul', selector, '', [this.nameAuto + this.chiSep + this.nameAutoOutput]);
            autoOutput = selector.querySelector(`.${this.nameAuto + this.chiSep + this.nameAutoOutput}`);
        }
        // Set auto--output items
        autoItems = autoInput.dataset.items.split(',');
        // Sort auto--output items
        if (autoInput.dataset.sort === "true") {
            autoItems.sort();
        }
        // Update auto--output items
        autoOutput.innerHTML = "";
        for (let item of autoItems) {
            this.append('li', autoOutput, item);
        }
        // Handle auto--input data-default focus in
        if (autoInput.dataset.default === "true") {
            autoInput.onfocus = () => {
                if (!autoInput.value) {
                    autoOutput.classList.add(this.nameAuto + this.chiSep + this.nameAutoOpen);
                }
            };
        }
        // Item select function
        const itemSelect = (item) => {
            // Set auto--input value
            autoInput.value = item.innerHTML;
            autoInput.focus();
            // Hide auto--output
            autoOutput.classList.remove(this.nameAuto + this.chiSep + this.nameAutoOpen);
        };
        // Handle items on click
        autoOutput.querySelectorAll("li").forEach((item) => {
            item.onclick = () => {
                itemSelect(item);
            };
        });
        // Handle auto--input input
        autoInput.oninput = () => {
            // Check the input
            if (autoInput.value) {
                autoOutput.classList.add(this.nameAuto + this.chiSep + this.nameAutoOpen);
            }
            else {
                autoOutput.classList.add(this.nameAuto + this.chiSep + this.nameAutoOpen);
                if (autoInput.dataset.default === "true") {
                    autoOutput.classList.add(this.nameAuto + this.chiSep + this.nameAutoOpen);
                }
                else {
                    autoOutput.classList.remove(this.nameAuto + this.chiSep + this.nameAutoOpen);
                }
            }
            // Filter the items
            let newItems = [];
            for (let item of autoItems) {
                if (item.substr(0, autoInput.value.length).toUpperCase() == autoInput.value.toUpperCase()) {
                    newItems.push(item);
                }
            }
            autoOutput.innerHTML = "";
            for (let item of newItems) {
                this.append('li', autoOutput, item);
            }
            // Handle new items on click
            autoOutput.querySelectorAll("li").forEach((item) => {
                item.onclick = () => {
                    itemSelect(item);
                };
            });
        };
        // Handle auto--input focus out
        autoInput.onblur = () => {
            autoOutput.classList.remove(this.nameAuto + this.chiSep + this.nameAutoOpen);
        };
    }
    // Set Alert
    /**
     * @desc Sets an alert to alert__container#alert-blueprint
     *
     * @param {string} text     -- Alert text
     * @param {string} enter    -- Alert animation enter
     * @param {string} exit     -- Alert animation exit
     * @param {string} status   -- Alert status: notice | warning | success
     * @param {string} color    -- Alert color:  light | dark
     * @param {boolean} close   -- Closable alert: true | false
     * @param {number} duration -- Alert animation duration: number in miliseconds
     * @param {number} delay    -- Alert animation delay: number in miliseconds
     *
     * @return {void}
     */
    alert(text, enter = "fadeIn", exit = "fadeOut", status = "", color = "", close = true, duration = 500, delay = 250) {
        // Set the status code
        let statusCode = "";
        let statusClass = "";
        if (status)
            statusClass = ` ${this.nameAlert + this.modSep + this.nameIcon}`;
        if (status === "notice") {
            statusCode = `<div class="${this.nameAlert + this.chiSep + this.nameIcon} ${this.piAlertCircle}"></div>`;
        }
        else if (status === "warning") {
            statusCode = `<div class="${this.nameAlert + this.chiSep + this.nameIcon} ${this.piAlertTri}"></div>`;
        }
        else if (status === "success") {
            statusCode = `<div class="${this.nameAlert + this.chiSep + this.nameIcon} ${this.piAlertTick}"></div>`;
        }
        // Set the color class
        let colorClass = "";
        if (color === "light") {
            colorClass = ` ${this.nameAlert + this.modSep + color}`;
        }
        // Check the closable
        let closeCode = "";
        let closeClass = "";
        if (close) {
            closeCode = `<div class="${this.nameAlert + this.chiSep + this.nameClose} ${this.piClose}"></div>`;
            closeClass = ` ${this.nameAlert + this.modSep + this.nameClose}`;
        }
        // Produce the alert content
        let content = `<div class="${this.nameAlert + colorClass + statusClass + closeClass} ${this.nameAnimation}" style="animation-name:${enter}; --animation-duration: ${duration}ms;">`;
        content += statusCode;
        content += `<div class="${this.nameAlert + this.chiSep + this.nameContent}">`;
        content += text;
        content += '</div>';
        content += closeCode;
        content += '</div>';
        // Create the parent
        const parent = document.querySelector(`#${this.nameAlert + '-' + this.nameBlueprint}`);
        // Create the node
        const element = document.createElement('div');
        // Modify the node
        element.classList.add(this.nameAlert + this.parSep + this.nameControl, this.nameAnimation);
        element.style.cssText = `--animation-duration: ${duration}ms; --animation-height: 4.5rem;`;
        element.innerHTML = content;
        // Append the node to the parent
        parent.appendChild(element);
        // Find the child node
        const child = element.querySelector(`.${this.nameAlert}`);
        // Set animation exit timeout
        let timeout = setTimeout(() => {
            this.animation(child, exit);
            timeout = setTimeout(() => {
                this.animation(element, this.hideYAnimation).then(() => {
                    element.remove();
                });
            }, delay);
        }, this.hideTimeout);
        // Set animation exit on click
        if (element.querySelector(`.${this.nameAlert + this.chiSep + this.nameClose}`)) {
            element.querySelector(`.${this.nameAlert + this.chiSep + this.nameClose}`).onclick = () => {
                clearTimeout(timeout);
                this.animation(child, exit);
                timeout = setTimeout(() => {
                    this.animation(element, this.hideYAnimation).then(() => {
                        element.remove();
                    });
                }, delay);
            };
        }
    }
    /**
     * @desc Sets modal to modal__container#modal-blueprint
     *
     * @param {string} title     -- Modal title
     * @param {string} body      -- Modal body
     * @param {string} footer    -- Modal footer
     * @param {string} size      -- Modal size (xs, sm, md, lg, xl)
     * @param {string} enter     -- Modal animation enter
     * @param {string} exit      -- Modal animation exit
     * @param {string} color     -- Modal color:  light | dark
     * @param {boolean} close    -- Closable modal: true | false
     * @param {boolean} backdrop -- Has backdrop: true | false
     * @param {number} duration  -- Modal animation duration: number in miliseconds
     *
     * @return {void}
     */
    modal(title, body, footer = "", size = "xs", enter = "fadeIn", exit = "fadeOut", color = "", close = true, backdrop = true, duration = 500) {
        // Check size
        let sizeCLass = "";
        if (this.polarisSizes.includes(size)) {
            sizeCLass = ` ${this.nameModal + this.modSep + size}`;
        }
        else if (size) {
            sizeCLass = ` ${size}`;
        }
        else {
            sizeCLass = ` ${this.nameWidth}-100`;
        }
        // Set the color class
        let colorClass = "";
        if (color === "light") {
            colorClass = ` ${this.nameModal + this.modSep + color}`;
        }
        // Check the closable
        let closeCode = "";
        if (close) {
            closeCode = `<div class="${this.nameModal + this.chiSep + this.nameClose} ${this.piClose}"></div>`;
        }
        // Check footer
        let footerCode = "";
        if (footer) {
            footerCode = `<footer class="${this.nameModal + this.chiSep + this.nameFooter}">${footer}</main>`;
        }
        // Produce the modal content
        let content = `<div class="${this.nameModal + sizeCLass + colorClass} ${this.nameAnimation} scroll scroll-sm scroll-radius-sm" style="animation-name:${enter}; --animation-duration: ${duration}ms;">`;
        content += closeCode;
        content += `<header class="${this.nameModal + this.chiSep + this.nameHeader}">`;
        content += `<h1>${title}</h1>`;
        content += '</header>';
        content += `<main class="${this.nameModal + this.chiSep + this.nameBody}">`;
        content += body;
        content += '</main>';
        content += footerCode;
        content += '</div>';
        // Find the parent
        const parent = document.querySelector(`#${this.nameModal + '-' + this.nameBlueprint}`);
        // Find the backdrop
        const bdrop = document.querySelector(`.${this.nameBackdrop}`);
        // Create the node
        const element = document.createElement('div');
        // Append the node to the parent
        parent.appendChild(element);
        // Modify the node
        element.outerHTML = content;
        // Find the child node
        const child = parent.querySelector(`.${this.nameModal}`);
        // Hide the scrollbar
        let bodyElement = document.querySelector('body');
        bodyElement.style.paddingRight = this.scrollWidth() + "px";
        bodyElement.style.overflow = "hidden";
        // Show the backdrop
        if (backdrop) {
            this.animation(bdrop, this.fadeInAnimation);
        }
        // Show the parent
        this.animation(parent, this.fadeInAnimation);
        // Set animation exit on click
        if (child.querySelector(`.${this.nameModal + this.chiSep + this.nameClose}`)) {
            child.querySelector(`.${this.nameModal + this.chiSep + this.nameClose}`).onclick = () => {
                // Hide the backdrop
                if (backdrop) {
                    this.animation(bdrop, this.fadeOutAnimation);
                }
                // Show the scrollbar
                setTimeout(() => {
                    bodyElement.style.paddingRight = "";
                    bodyElement.style.overflow = "";
                }, duration / 2);
                // Hide the child
                this.animation(child, exit).then(() => {
                    // Remove the child
                    child.remove();
                    // Hide the parent
                    this.animation(parent, this.fadeOutAnimation);
                });
            };
        }
    }
    /**
     * @desc Sets custom modal to custom modal__container
     *
     * @param {HTMLElement} cont      -- Modal container selector
     * @param {string}      enter     -- Modal animation enter
     * @param {string}      exit      -- Modal animation exit
     * @param {boolean}     backdrop  -- Has backdrop: true | false
     * @param {number}      duration  -- Modal animation duration: number in miliseconds
     *
     * @return {void}
     */
    setModal(cont, enter = "fadeIn", exit = "fadeOut", backdrop = true, duration = 500) {
        // Find the container selector
        const container = this.query(cont);
        // Find the modal selector
        const selector = container.querySelector(`.${this.nameModal}`);
        // Find the backdrop
        const bdrop = document.querySelector(`.${this.nameBackdrop}`);
        // Hide the scrollbar
        let bodyElement = document.querySelector('body');
        bodyElement.style.paddingRight = this.scrollWidth() + "px";
        bodyElement.style.overflow = "hidden";
        // Show the backdrop
        if (backdrop) {
            this.animation(bdrop, this.fadeInAnimation);
        }
        // Show the container
        this.animation(container, this.fadeInAnimation);
        // Show the modal
        this.animation(selector, enter);
        // Set animation exit on click
        if (selector.querySelector(`.${this.nameModal + this.chiSep + this.nameClose}`)) {
            selector.querySelector(`.${this.nameModal + this.chiSep + this.nameClose}`).onclick = () => {
                // Hide the backdrop
                if (backdrop) {
                    this.animation(bdrop, this.fadeOutAnimation);
                }
                // Show the scrollbar
                setTimeout(() => {
                    bodyElement.style.paddingRight = "";
                    bodyElement.style.overflow = "";
                }, duration / 2);
                // Hide the modal
                this.animation(selector, exit).then(() => {
                    // Hide the container
                    this.animation(container, this.fadeOutAnimation);
                });
            };
        }
    }
    /**
     * @desc Hadnles the dragable items on drag
     *
     * @param {HTMLElement} sel -- The dragable selector
     *
     * @return {Promise}
     */
    drag(sel) {
        // Check the selector
        const selector = this.query(sel);
        // Animation promise
        const promise = new Promise((resolve, reject) => {
            const draggables = Array.from(selector.children);
            // Items
            let counter = 1;
            draggables.forEach((draggable) => {
                // Check the data-order
                if (!draggable.dataset.order) {
                    draggable.dataset.order = counter;
                }
                // Drag start
                draggable.ondragstart = (e) => {
                    if (e.target === draggable) {
                        draggable.classList.add(this.nameDrag + this.chiSep + this.nameDragging);
                    }
                };
                // Drag enter
                draggable.ondragenter = (e) => {
                    if (e.target === draggable) {
                        const dragging = selector.querySelector(`.${this.nameDrag + this.chiSep + this.nameDragging}`);
                        if (draggable != dragging && dragging) {
                            if (dragging.parentNode === draggable.parentNode) {
                                const draggingOrder = dragging.dataset.order;
                                const draggableOrder = draggable.dataset.order;
                                // Swap orders
                                dragging.dataset.order = draggableOrder;
                                draggable.dataset.order = draggingOrder;
                                // Swap items
                                this.swap(dragging, draggable);
                                // Swaping
                                draggable.classList.add(this.nameDrag + this.chiSep + this.nameSwapping);
                                dragging.classList.add(this.nameDrag + this.chiSep + this.nameSwapping);
                            }
                        }
                    }
                };
                // Drag leave
                draggable.ondragleave = (e) => {
                    if (e.target === draggable) {
                        const dragging = selector.querySelector(`.${this.nameDrag + this.chiSep + this.nameDragging}`);
                        if (draggable != dragging && dragging) {
                            if (dragging.parentNode === draggable.parentNode) {
                                // Swaping
                                draggable.classList.remove(this.nameDrag + this.chiSep + this.nameSwapping);
                                dragging.classList.remove(this.nameDrag + this.chiSep + this.nameSwapping);
                            }
                        }
                    }
                };
                // Drag over
                draggable.ondragover = (e) => {
                    const dragging = selector.querySelector(`.${this.nameDrag + this.chiSep + this.nameDragging}`);
                    if (dragging) {
                        if (dragging.parentNode === draggable.parentNode) {
                            e.preventDefault();
                        }
                    }
                };
                // Drag end
                draggable.ondragend = (e) => {
                    if (e.target === draggable) {
                        // Swaping
                        const swaping = selector.querySelector(`.${this.nameDrag + this.modSep + this.nameSwapping}`);
                        if (swaping)
                            swaping.classList.remove(this.nameDrag + this.modSep + this.nameSwapping);
                        const dragging = selector.querySelector(`.${this.nameDrag + this.chiSep + this.nameDragging}`);
                        if (dragging)
                            dragging.classList.remove(this.nameDrag + this.modSep + this.nameSwapping);
                        draggable.classList.remove(this.nameDrag + this.chiSep + this.nameDragging);
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
    /**
     * @desc Handles closable message
     *
     * @param {HTMLElement} sel -- The message close selector
     *
     * @return {void}
     */
    message(sel) {
        // Check the selector
        const selector = this.query(sel);
        // Message on close
        selector.onclick = () => {
            let parent = selector.parentElement.parentElement;
            this.animation(parent, this.hideYAnimation).then(() => {
                parent.remove();
            });
        };
    }
    /**
     * @desc Handles clickable popups
     *
     * @param {HTMLElement} sel -- The popup selector
     *
     * @return {void}
     */
    popups(sel) {
        // Check the selector
        const selector = this.query(sel);
        // Check clickable
        if (selector.querySelector(`.${this.namePopup + this.modSep + this.nameClick}`)) {
            selector.onclick = (i) => {
                // Popup component
                let popup = selector.querySelector(`.${this.namePopup + this.modSep + this.nameClick}`);
                // Ignore the click for component and its children(:not(.popup--close))
                let ignoreClick = false;
                selector.querySelectorAll(`.${this.namePopup} *:not(.${this.namePopup + this.chiSep + this.nameClose})`).forEach((j) => {
                    if (i.target == j) {
                        ignoreClick = true;
                    }
                });
                // Check ignore click
                if (ignoreClick || i.target == popup)
                    return;
                // Remove open class (hide popup)
                if (selector.querySelector(`.${this.namePopup + this.modSep + this.nameOpen}`)) {
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
    }
    /**
     * @desc Hadnles tabs
     *
     * @param {HTMLElement} sel -- The tab selector
     *
     * @return {Promise}
     */
    tab(sel) {
        // Check the selector
        const selector = this.query(sel);
        // Draggable promise
        const promise = new Promise((resolve, reject) => {
            // Fetch elements
            const links = selector.querySelectorAll(`.${this.nameTab + this.chiSep + this.nameTabLink}`);
            let active = selector.querySelector(`.${this.nameTab + this.chiSep + this.nameActive}`);
            let open = selector.querySelector(`.${this.nameTab + this.chiSep + this.nameOpen}`);
            let dataTab;
            // Handle click links
            links.forEach((link) => {
                link.onclick = () => {
                    // Check current tab
                    if (link !== active) {
                        dataTab = link.dataset.tab;
                        // Handle active
                        if (active)
                            active.classList.remove(`${this.nameTab + this.chiSep + this.nameActive}`);
                        active = link;
                        active.classList.add(`${this.nameTab + this.chiSep + this.nameActive}`);
                        // Handle open
                        if (open)
                            open.classList.remove(`${this.nameTab + this.chiSep + this.nameOpen}`);
                        open = selector.querySelector(`.${this.nameTab + this.chiSep + this.nameTabContent}[data-tab="${dataTab}"]`);
                        if (open)
                            open.classList.add(`${this.nameTab + this.chiSep + this.nameOpen}`);
                    }
                    // Promise on resolve
                    resolve('Tab opened!');
                    // Promise on reject
                    reject('Tab crashed!');
                };
            });
        });
        // Return the promise
        return promise;
    }
    /**
     * @desc Hadnles tabs
     *
     * @param {HTMLElement} sel -- The accordion selector
     *
     * @return {void}
     */
    accord(sel) {
        // Check the selector
        const selector = this.query(sel);
        // Fetch elements
        const unique = Boolean(selector.classList.contains(`${this.nameAccord + this.modSep + this.nameAccordUnique}`));
        const links = selector.querySelectorAll(`.${this.nameAccord + this.chiSep + this.nameAccordLink}`);
        let item, content, maxHeight;
        // Handle links
        links.forEach((link) => {
            // Set items default max-height
            item = link.parentElement;
            content = link.nextElementSibling;
            if (item.classList.contains(`${this.nameAccord + this.chiSep + this.nameActive}`)) {
                maxHeight = content.scrollHeight + "px";
                content.style.maxHeight = maxHeight;
            }
            else {
                content.style.maxHeight = "0";
            }
            // Handle links on click
            link.onclick = () => {
                item = link.parentElement;
                content = link.nextElementSibling;
                maxHeight = content.scrollHeight + "px";
                // Set item max-height
                if (item.classList.contains(`${this.nameAccord + this.chiSep + this.nameActive}`)) {
                    content.style.maxHeight = "0";
                }
                else {
                    content.style.maxHeight = maxHeight;
                }
                // Toggle active class
                item.classList.toggle(`${this.nameAccord + this.chiSep + this.nameActive}`);
                // Check unique
                if (unique) {
                    const actives = selector.querySelectorAll(`.${this.nameAccord + this.chiSep + this.nameActive}`);
                    actives.forEach((active) => {
                        // Inactive the active items (except for the current item)
                        if (active !== item) {
                            active.classList.remove(`${this.nameAccord + this.chiSep + this.nameActive}`);
                            active.querySelector(`.${this.nameAccord + this.chiSep + this.nameAccordLink}`).nextElementSibling.style.maxHeight = "0";
                        }
                    });
                }
            };
        });
    }
    /**
     * @desc Hadnles tabs
     *
     * @param {HTMLElement} sel -- The counter selector
     * @param {function}    cf  -- The callback function for the last count
     *
     * @return {void|boolean}
     */
    counter(sel, cf = () => { }) {
        // Check the selector
        const selector = this.query(sel);
        // Check the counting
        if (selector.classList.contains(`${this.nameCounter + this.modSep + this.nameCounterCounting}`))
            return false;
        // Fetch datasets
        const start = Number(selector.dataset.start);
        const stop = Number(selector.dataset.stop);
        const step = Number(selector.dataset.step);
        const count = Math.abs(stop - start) / step;
        const delay = Number(selector.dataset.delay);
        const speed = Number(selector.dataset.speed);
        const float = Boolean(selector.dataset.float);
        let precision;
        selector.dataset.precision ? precision = Number(selector.dataset.precision) : precision = 1;
        const pow = Math.pow(10, precision);
        console.log(precision);
        // Start counting
        let ii = start;
        this.loop(() => {
            // Set the counting
            if (ii == start) {
                selector.classList.add(`${this.nameCounter + this.modSep + this.nameCounterCounting}`);
            }
            // Unset the counting
            else if (ii == stop) {
                selector.classList.remove(`${this.nameCounter + this.modSep + this.nameCounterCounting}`);
            }
            // Set the counter
            if (float) {
                selector.innerHTML = Math.round(ii * pow) / pow;
            }
            else {
                selector.innerHTML = ii;
            }
            // Set the stepper
            (stop > start) ? ii += step : ii -= step;
        }, speed, delay, count, cf);
    }
}
//# sourceMappingURL=Components.js.map