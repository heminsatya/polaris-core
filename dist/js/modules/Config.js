/**
 * @desc Used for the configuration of Polaris JS library
 */
export class Config {
    constructor() {
        this.modSep = "-"; // Modifier Separator
        this.chiSep = "--"; // Child Separator
        this.sibSep = "_"; // Sibling Separator
        this.parSep = "__"; // Parent Separator
        this.nameDoc = "doc"; // Name key for document component
        this.nameLight = "light"; // Name key for light color
        this.nameDark = "dark"; // Name key for dark color
        this.nameAnimation = "animation"; // Name key for animation component
        this.nameAnimated = "animated"; // Name key for animation-animated
        this.nameRipple = "ripple"; // Name key for ripple component
        this.nameAlert = "alert"; // Name key for alert component
        this.nameMessages = "msg"; // Name key for msg component
        this.nameBackdrop = "backdrop"; // Name key for backdrop component
        this.namePopup = "popup"; // Name key for popup component
        this.nameMenu = "menu"; // Name key for menu component
        this.nameModal = "modal"; // Name key for modal component
        this.nameBlueprint = "blueprint"; // Name key for component's blueprint
        this.nameContainer = "container"; // Name key for container
        this.nameControl = "control"; // Name key for control
        this.nameIcon = "icon"; // Name key for icon
        this.nameContent = "content"; // Name key for content
        this.nameClose = "close"; // Name key for close
        this.nameClick = "click"; // Name key for click
        this.nameActive = "active"; // Name key for active
        this.nameVoid = "void"; // Name key for active
        this.nameOpen = "open"; // Name key for open inffix
        this.nameHeader = "header"; // Name key for header
        this.nameBody = "body"; // Name key for body
        this.nameFooter = "footer"; // Name key for footer
        this.nameWidth = "w"; // Name key for css width classes
        this.nameHeight = "h"; // Name key for css height classes
        this.nameRadius = "round"; // Name key for border-radius & component roundness
        this.namePosition = "position"; // Name key for position classes
        this.nameDraggable = "draggable"; // Name key for draggable
        this.nameDragging = "dragging"; // 2nd name key for draggable-dragging
        this.nameSwapping = "swapping"; // 2nd name key for draggable-swapping
        this.nameDragAuto = "auto"; // 2nd name key for draggable__auto
        this.fadeInAnimation = "fadeIn"; // fadeIn animation
        this.fadeOutAnimation = "fadeOut"; // fadeOut animation
        this.hideYAnimation = "hideY"; // hideY animation
        this.rippleAnimation = "ripple"; // ripple animation
        this.rippleAutoAnimation = "rippleAuto"; // rippleAuto animation
        this.piAlertCircle = "pi-alert-circle"; // Polaris Icon: alert-circle
        this.piAlertTri = "pi-alert-triangle"; // Polaris Icon: alert-triangle
        this.piAlertTick = "pi-alert-tick"; // Polaris Icon: alert-tick
        this.piClose = "pi-close"; // Polaris Icon: close
        this.hideTimeout = 8000; // Default hide timeout (in miliseconds)
        this.alertPosition = "bottom"; // Alert default position
        this.polarisSizes = ['xs', 'sm', 'md', 'lg', 'xl']; // Polaris standard sizes
        this.phoneWidth = 0; // Smartphone min-width
        this.tabletWidth = 768; // Tablet min-width
        this.desktopWidth = 1280; // Desktop min-width
    }
}
//# sourceMappingURL=Config.js.map