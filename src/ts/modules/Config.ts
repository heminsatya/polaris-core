/**
 * @desc Used for the configuration of Polaris JS library
 */
export class Config {
    public modSep:              string = "-";                                   // Modifier Separator
    public chiSep:              string = "--";                                  // Child Separator
    public sibSep:              string = "_";                                   // Sibling Separator
    public parSep:              string = "__";                                  // Parent Separator

    public nameDoc:             string = "doc";                                 // Name key for document component
    public nameLight:           string = "light";                               // Name key for light color
    public nameDark:            string = "dark";                                // Name key for dark color
    public nameAnimation:       string = "animation";                           // Name key for animation component
    public nameAnimated:        string = "animated";                            // Name key for animation-animated
    public nameRipple:          string = "ripple";                              // Name key for ripple component
    public nameAlert:           string = "alert";                               // Name key for alert component
    public nameMessages:        string = "msg";                                 // Name key for msg component
    public nameBackdrop:        string = "backdrop";                            // Name key for backdrop component
    public namePopup:           string = "popup";                               // Name key for popup component
    public nameMenu:            string = "menu";                                // Name key for menu component
    public nameModal:           string = "modal";                               // Name key for modal component

    public nameBlueprint:       string = "blueprint";                           // Name key for component's blueprint
    public nameContainer:       string = "container";                           // Name key for container
    public nameControl:         string = "control";                             // Name key for control
    public nameIcon:            string = "icon";                                // Name key for icon
    public nameContent:         string = "content";                             // Name key for content
    public nameClose:           string = "close";                               // Name key for close
    public nameClick:           string = "click";                               // Name key for click
    public nameActive:          string = "active";                              // Name key for active
    public nameVoid:            string = "void";                                // Name key for active
    public nameOpen:            string = "open";                                // Name key for open inffix
    public nameHeader:          string = "header";                              // Name key for header
    public nameBody:            string = "body";                                // Name key for body
    public nameFooter:          string = "footer";                              // Name key for footer
    public nameWidth:           string = "w";                                   // Name key for css width classes
    public nameHeight:          string = "h";                                   // Name key for css height classes
    public nameRadius:          string = "round";                               // Name key for border-radius & component roundness
    public namePosition:        string = "position";                            // Name key for position classes

    public nameDraggable:       string ="draggable";                            // Name key for draggable
    public nameDragging:        string ="dragging";                             // 2nd name key for draggable-dragging
    public nameSwapping:        string ="swapping";                             // 2nd name key for draggable-swapping
    public nameDragAuto:        string ="auto";                                 // 2nd name key for draggable__auto
    
    public fadeInAnimation:     string = "fadeIn";                              // fadeIn animation
    public fadeOutAnimation:    string = "fadeOut";                             // fadeOut animation
    public hideYAnimation:      string = "hideY";                               // hideY animation
    public rippleAnimation:     string = "ripple";                              // ripple animation
    public rippleAutoAnimation: string = "rippleAuto";                          // rippleAuto animation
    
    public piAlertCircle:       string = "pi-alert-circle";                     // Polaris Icon: alert-circle
    public piAlertTri:          string = "pi-alert-triangle";                   // Polaris Icon: alert-triangle
    public piAlertTick:         string = "pi-alert-tick";                       // Polaris Icon: alert-tick
    public piClose:             string = "pi-close";                            // Polaris Icon: close
    
    public hideTimeout:         number = 8000;                                  // Default hide timeout (in miliseconds)
    public alertPosition:       string = "bottom";                              // Alert default position

    public polarisSizes:        any    = ['xs', 'sm', 'md', 'lg', 'xl'];        // Polaris standard sizes

    public phoneWidth:          number = 0;                                     // Smartphone min-width
    public tabletWidth:         number = 768;                                   // Tablet min-width
    public desktopWidth:        number = 1280;                                  // Desktop min-width
}