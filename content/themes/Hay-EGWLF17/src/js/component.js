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
        if ( this.$hamMenu.classList.contains( "active" ) ) {
            this.removeActive();
        } else this.addActive();
    },
    addActive() {
        this.$hamMenu.classList.add( "active" );
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
        if ( this.$link.classList.contains( "active" ) ) {
            this.closeContact();
        } else this.openContact();
    },
    openContact() {
        this.$link.classList.add( "active" );
        this.$close.classList.add( "active" );
        this.$menu.classList.add( "active" );
    },
    closeContact() {
        this.$link.classList.remove( "active" );
        this.$close.classList.remove( "active" );
        this.$menu.classList.remove( "active" );
    },
};

/* burgerLogic INIT method */
burgerLogic.init = function burgerInit() {
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
            contactLogic.closeContact();
        }
    } );
};

/* contactLogic INIT method */
contactLogic.init = function contactInit() {
    this.$link.addEventListener( "click", ( e ) => {
        e.preventDefault();
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
* Toggle Root
*/
const toggleRootLoad = () => {
    const $root = document.getElementById( "root" );
    if ( $root.classList.contains( "load" ) ) {
        $root.classList.remove( "load" );
    } else $root.classList.add( "load" );
};

/*
* Toggle Expandables
*/
const toggleExpandables = () => {
    const $sections = document.getElementsByClassName( "section" );
    Array.prototype.forEach.call( $sections, ( $section ) => {
        $section.addEventListener( "click", () => {
            if ( $section.classList.contains( "expand" ) ) {
                $section.classList.remove( "expand" );
            } else $section.classList.add( "expand" );
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
        if ( $pageLink.classList.contains( "active" ) ) {
            $pageLink.classList.remove( "active" );
        } else $pageLink.classList.add( "active" );
    }
};

/*
* Toggle Popup Logic
*/
const togglePopup = {
    closePopup() {
        const $closeBttns = document.getElementsByClassName( "close-popup" );
        Array.prototype.forEach.call( $closeBttns, ( $close ) => {
            $close.addEventListener( "click", ( e ) => {
                e.preventDefault();
                const $popup = $close.closest( ".popup" );
                const $overlay = document.getElementById( "pop" );
                $popup.classList.remove( "toggle" );
                $overlay.classList.remove( "toggle" );
            } );
        } );
    },
    openPopup() {
        const $overlay = document.getElementById( "pop" );
        const $giftcardBttn = document.getElementById( "popup-giftcard-bttn" );
        const $giftcardContainer = document.getElementById( "popup-giftcard-container" );
        $giftcardBttn.addEventListener( "click", ( e ) => {
            e.preventDefault();
            $giftcardContainer.classList.add( "toggle" );
            $overlay.classList.add( "toggle" );
        } );
        const $newsletterBttn = document.getElementById( "popup-newsletter-bttn" );
        const $newsletterContainer = document.getElementById( "popup-newsletter-container" );
        $newsletterBttn.addEventListener( "click", ( e ) => {
            e.preventDefault();
            $newsletterContainer.classList.add( "toggle" );
            $overlay.classList.add( "toggle" );
        } );
    },
    init() {
        this.openPopup();
        this.closePopup();
    },
};

/*
* Set Hash Link
*/
const setHashLinks = () => {
    const $hashes = document.getElementsByClassName( "hash" );
    const $form = document.getElementById( "wpcf7-f199-o1" );
    if ( $form ) {
        const formTop = $form.getBoundingClientRect().top;
        Array.prototype.forEach.call( $hashes, ( $hash ) => {
            $hash.addEventListener( "click", ( e ) => {
                e.preventDefault();
                document.body.scrollTop = formTop;
                document.documentElement.scrollTop = formTop;
            } );
        } );
    }
};

/*
* Document.Ready
*/

document.onreadystatechange = () => {
    if ( document.readyState === "complete" ) {
        // Remove Root Load
        toggleRootLoad();

        // Set Menu Logic
        activeMenu();
        burgerLogic.init();
        contactLogic.init();

        // Set Compomet Logic
        toggleExpandables();
        setElRotate( "left-logo" );

        // Set Popup Logic
        togglePopup.init();

        // Set Hash Events
        setHashLinks();
    }
};
