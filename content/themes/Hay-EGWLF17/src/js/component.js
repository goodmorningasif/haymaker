/**
*
* component.js
*
* Handles component logic on document load
*
*/

/*
* Toggle Logo Index
*/
const logoIndexComp = {
    $main: document.getElementById( "main-logo" ),
    open() {
        return this.$main.classList.add( "menu-up" );
    },

    close() {
        return this.$main.classList.remove( "menu-up" );
    },

    contains() {
        return this.$main.classList.contains( "menu-up" );
    },

    toggle() {
        if ( this.contains() ) this.close();
        else this.open();
    },
};
/*
* Set Element Rotate
*/
const setElRotate = ( id ) => {
    const el = document.getElementById( id );
    el.addEventListener( "mouseenter", () => {
        el.classList.add( "rotate" );
    } );
    el.addEventListener( "mouseleave", () => {
        el.classList.remove( "rotate" );
    } );
};

/*
* Burger Logic
*/
const burgerLogic = {
    $hamMenu: document.getElementById( "ham-menu" ),
    $burger: document.getElementById( "ham-close" ),
    $ham1: document.getElementById( "ham1" ),
    $ham2: document.getElementById( "ham2" ),
    $ham3: document.getElementById( "ham3" ),
    $ham4: document.getElementById( "ham4" ),

    toggleActive() {
        this.$hamMenu.classList.toggle( "active" );
    },

    removeActive() {
        this.$hamMenu.classList.remove( "active" );
    },

    closeHams() {
        this.$ham1.classList.add( "hide" );
        this.$ham4.classList.add( "hide" );
        this.$ham2.setAttribute( "transform", "rotate(45,23.91,23.91)" );
        this.$ham3.setAttribute( "transform", "rotate(-45,23.91,23.91)" );
    },

    openHams() {
        this.$ham1.classList.remove( "hide" );
        this.$ham4.classList.remove( "hide" );
        this.$ham2.setAttribute( "transform", "" );
        this.$ham3.setAttribute( "transform", "" );
    },

    closeContact() {
        const $link = document.getElementById( "contact-link" );
        const $close = document.getElementById( "contact-close" );
        const $menu = document.getElementById( "contact-menu" );
        $link.classList.remove( "active" );
        $close.classList.remove( "active" );
        $menu.classList.remove( "active" );
    },
};

/*
* Contact Logic
*/
const contactLogic = {
    $link: document.getElementById( "contact-link" ),
    $close: document.getElementById( "contact-close" ),
    $menu: document.getElementById( "contact-menu" ),

    toggleContact() {
        this.$link.classList.toggle( "active" );
        this.$close.classList.toggle( "active" );
        this.$menu.classList.toggle( "active" );
    },
};

/* burgerLogic INIT method */
burgerLogic.init = () => {
    this.$burger.addEventListener( "click", ( e ) => {
        e.preventDefault();
        this.toggleActive();
        if ( !this.$hamMenu.classList.contains( "active" ) ) {
            this.openHams();
            setTimeout( () => {
                logoIndexComp.close();
            }, 500 );
        } else {
            this.closeHams();
            logoIndexComp.open();
            // this.closeContact();
            contactLogic.toggleContact();
        }
    } );
};

/* contactLogic INIT method */
contactLogic.init = () => {
    this.$link.addEventListener( "click", ( e ) => {
        e.preventDefault();
        // this.closeHamburger();
        burgerLogic.removeActive();
        burgerLogic.openHams();
        this.toggleContact();
        logoIndexComp.open();
    } );

    this.$close.addEventListener( "click", ( e ) => {
        e.preventDefault();
        this.toggleContact();
        setTimeout( () => {
            logoIndexComp.close();
        }, 500 );
    } );
};

/*
* Team Bios Logic
*/
const teamBiosLogic = () => {
    const $toggleEl = document.getElementsByClassName( "toggle" );

    Array.prototype.forEach.call( $toggleEl, ( $button ) => {
        $button.addEventListener( "click", ( e ) => {
            e.preventDefault();
            const $parentEl = $button.closest( ".team-member" );
            $parentEl.classList.toggle( "active" );
        } );
    } );
};

/*
* Toggle Root
*/
const toggleRootLoad = () => {
    const $root = document.getElementById( "root" );
    $root.classList.toggle( "load" );
};

/*
* Toggle Expandables
*/
const toggleExpandables = () => {
    const $sections = document.getElementsByClassName( "section" );
    Array.prototype.forEach.call( $sections, ( $section ) => {
        $section.addEventListener( "click", () => {
            $section.classList.toggle( "expand" );
        } );
    } );
};

/*
* Load Component By ID
*/
const loadCompByID = () => {
    const URL = window.location.href;
    const hasHash = URL.indexOf( "#" );
    if ( hasHash > 0 ) {
        const [ , hash ] = URL.split( "#" );
        const $el = document.getElementById( hash );
        $el.classList.toggle( "active" );
    }
};

/*
* injectCompUrl
*/
const injectCompURL = () => {
    const $linkInput = document.getElementsByClassName( "link-url-input" );
    const URL = ( window.location.href.indexOf( "#" ) > 0 ) ?
        window.location.href.substring( 0, window.location.href.indexOf( "#" ) ) :
        window.location.href;
    Array.prototype.forEach.call( $linkInput, ( $input ) => {
        const $thisInput = $input;
        const $parentEl = $input.closest( ".team-member" );
        $thisInput.value = `${ URL }#${ $parentEl.id }`;
    } );
};

/*
* copyToClipboard
*/
const copyToClipboard = () => {
    const $linkBttns = document.getElementsByClassName( "copy-to-clipboard" );
    Array.prototype.forEach.call( $linkBttns, ( $bttn ) => {
        $bttn.addEventListener( "click", ( e ) => {
            e.preventDefault();
            const $siblings = $bttn.parentNode.childNodes;
            Array.prototype.forEach.call( $siblings, ( $sibling ) => {
                const $thisList = $sibling.classList;
                const $input = $sibling;
                if ( $thisList && $thisList[ 0 ] === "link-url-input" ) {
                    $input.select();
                    document.execCommand( "copy" );
                }
            } );
        } );
    } );
};

/*
* Active Menu
*/
const activeMenu = () => {
    const URL = window.location.pathname;
    const split = URL.split( "/" );
    const page = split[ split.length - 2 ].toLowerCase();
    const $pageLink = document.getElementById( `pg-${ page }` );
    if ( $pageLink ) {
        $pageLink.classList.toggle( "active" );
    }
};

/*
* Document.Ready
*/

document.onreadystatechange = () => {
    if ( document.readyState === "complete" ) {
        // Remove Root Load
        toggleRootLoad();

        // Set Loading Logic
        loadCompByID();

        // Set Menu Logic
        activeMenu();
        burgerLogic.init();
        contactLogic.init();

        // Set Compomet Logic
        teamBiosLogic();
        toggleExpandables();
        setElRotate( "left-logo" );
        injectCompURL();
        copyToClipboard();
    }
};
