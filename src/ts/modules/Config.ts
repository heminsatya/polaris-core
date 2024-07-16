/**
 * @desc Used for the configuration of Polaris JS library
 */
export class Config {
    public modSep:               string = "-";                                  // Modifier Separator
    public chiSep:               string = "--";                                 // Child Separator
    public sibSep:               string = "_";                                  // Sibling Separator
    public parSep:               string = "__";                                 // Parent Separator

    public nameDoc:              string = "doc";                                // Name key for document component
    public nameLight:            string = "light";                              // Name key for light color
    public nameDark:             string = "dark";                               // Name key for dark color

    public nameBlueprint:        string = "blueprint";                          // Name key for component's blueprint
    public nameContainer:        string = "container";                          // Name key for container
    public nameControl:          string = "control";                            // Name key for control
    public nameIcon:             string = "icon";                               // Name key for icon
    public nameContent:          string = "content";                            // Name key for content
    public nameClose:            string = "close";                              // Name key for close
    public nameClick:            string = "click";                              // Name key for click
    public nameActive:           string = "active";                             // Name key for active
    public nameVoid:             string = "void";                               // Name key for void
    public nameOpen:             string = "open";                               // Name key for open inffix
    public nameHeader:           string = "header";                             // Name key for header
    public nameBody:             string = "body";                               // Name key for body
    public nameFooter:           string = "footer";                             // Name key for footer
    public nameWidth:            string = "w";                                  // Name key for css width classes
    public nameHeight:           string = "h";                                  // Name key for css height classes
    public nameRadius:           string = "round";                              // Name key for border-radius & component roundness
    public namePosition:         string = "position";                           // Name key for position classes

    public nameAnimation:        string = "animation";                          // Name key for animation component
    public nameAnimated:         string = "animated";                           // Name key for animation-animated
    public nameRipple:           string = "ripple";                             // Name key for ripple component

    public nameRange:            string = "range";                              // Name key for range
    public nameChip:             string = "chip";                               // Name key for chip
    public nameChipItems:        string = "items";                              // 2nd name key for chip--items
    public nameChipItem:         string = "item";                               // 2nd name key for chip--item
    public nameChipText:         string = "text";                               // 2nd name key for chip--text
    public nameChipClose:        string = "close";                              // 2nd name key for chip--close
    public nameChipInput:        string = "input";                              // 2nd name key for chip--input
    public nameChipOutput:       string = "output";                             // 2nd name key for chip--output
    public nameAuto:             string = "auto";                               // Name key for auto
    public nameAutoInput:        string = "input";                              // 2nd name key for auto--input
    public nameAutoOutput:       string = "output";                             // 2nd name key for auto--output
    public nameAutoOpen:         string = "open";                               // 2nd name key for auto--open

    public nameAlert:            string = "alert";                              // Name key for alert component
    public nameMessages:         string = "msg";                                // Name key for msg component
    public nameBackdrop:         string = "backdrop";                           // Name key for backdrop component
    public namePopup:            string = "popup";                              // Name key for popup component
    public nameMenu:             string = "menu";                               // Name key for menu component
    public nameModal:            string = "modal";                              // Name key for modal component
    public nameDrag:             string = "drag";                               // Name key for drag
    public nameDragging:         string = "dragging";                           // 2nd name key for drag--dragging
    public nameSwapping:         string = "swapping";                           // 2nd name key for drag--swapping
    public nameDragAuto:         string = "auto";                               // 2nd name key for drag-auto
    public nameTab:              string = "tab";                                // Name key for tab
    public nameTabAuto:          string = "auto";                               // 2nd name key for tab-auto
    public nameTabLink:          string = "link";                               // 2nd name key for tab--link
    public nameTabContent:       string = "content";                            // 2nd name key for tab--content
    public nameAccord:           string = "accord";                             // Name key for accordion
    public nameAccordUnique:     string = "unique";                             // 2nd name key for accord-unique
    public nameAccordLink:       string = "link";                               // 2nd name key for accord--link
    public nameCounter:          string = "counter";                            // Name key for counter
    public nameCounterAuto:      string = "auto";                               // 2nd name key for counter-auto
    public nameCounterCounting:  string = "counting";                           // 2nd name key for counter-counting
    
    public piAlertCircle:        string = "pi-alert-circle";                    // Polaris Icon: alert-circle
    public piAlertTri:           string = "pi-alert-triangle";                  // Polaris Icon: alert-triangle
    public piAlertTick:          string = "pi-alert-tick";                      // Polaris Icon: alert-tick
    public piClose:              string = "pi-close";                           // Polaris Icon: close
    
    public fadeInAnimation:      string = "fadeIn";                             // fadeIn animation
    public fadeOutAnimation:     string = "fadeOut";                            // fadeOut animation
    public hideYAnimation:       string = "hideY";                              // hideY animation
    public rippleAnimation:      string = "ripple";                             // ripple animation
    public rippleAutoAnimation:  string = "rippleAuto";                         // rippleAuto animation
    
    public hideTimeout:          number = 8000;                                 // Default hide timeout (in miliseconds)
    public alertPosition:        string = "bottom";                             // Alert default position

    public polarisSizes:         any    = ['xs', 'sm', 'md', 'lg', 'xl'];       // Polaris standard sizes

    public phoneWidth:           number = 0;                                    // Smartphone min-width
    public tabletWidth:          number = 768;                                  // Tablet min-width
    public desktopWidth:         number = 1280;                                 // Desktop min-width

    public rangeWidthXS:         number = 1;                                    // XS range slider thumb width (rem)
    public rangeWidthSM:         number = 1.25;                                 // SM range slider thumb width (rem)
    public rangeWidthMD:         number = 1.5;                                  // MD range slider thumb width (rem)
    public rangeWidthLG:         number = 1.75;                                 // LG range slider thumb width (rem)
    public rangeWidthXL:         number = 2;                                    // XL range slider thumb width (rem)
    
    public hasBackdropBlueprint: boolean = true;                                // Backdrop blueprint status
    public hasAlertBlueprint:    boolean = true;                                // Alert blueprint status
    public hasModalBlueprint:    boolean = true;                                // Modal blueprint status

    public hasDocDefaults:       boolean = true;                                // Document default classes status
    public hasLinkDefaults:      boolean = true;                                // Void links defaults status
    public hasRippleDefaults:    boolean = true;                                // Ripple default animations status
    public hasAnimationDefaults: boolean = true;                                // Animation default datasets status
    public hasRangeDefaults:     boolean = true;                                // Range slider default status
    public hasChipDefaults:      boolean = true;                                // Chips default status
    public hasAutoDefaults:      boolean = true;                                // Autocomplete default status
    public hasMessageDefaults:   boolean = true;                                // Closable messages defaults status
    public hasPopupDefaults:     boolean = true;                                // Clickable & animated popups defaults status
    public hasMenuDefaults:      boolean = true;                                // Clickable & animated menus defaults status
    public hasDragDefaults:      boolean = true;                                // Auto drag items status
    public hasTabDefaults:       boolean = true;                                // Tabs defaults status
    public hasAccordDefaults:    boolean = true;                                // Accordions defaults status
    public hasCounterDefaults:   boolean = true;                                // Counters defaults status
}