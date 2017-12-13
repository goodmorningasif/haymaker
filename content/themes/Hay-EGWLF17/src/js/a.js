/**
*
* a.js
*
*/

/* Calculate Browser Dimensions */
// const calcBrowserSize = () => {
//     const dimensions = {};
//     const $docEl = document.documentElement;
//     dimensions.width = 0;
//     dimensions.height = 0;
//     if ( typeof ( window.innerWidth ) === "number" ) {
//         dimensions.width = window.innerWidth;
//         dimensions.height = window.innerHeight;
//     } else if ( $docEl && ( $docEl.clientWidth || $docEl.clientHeight ) ) {
//         dimensions.width = document.documentElement.clientWidth;
//         dimensions.height = document.documentElement.clientHeight;
//     }
//     return dimensions;
// };

/* Scroll Tracker */
// const scrollTracker = () => {
//     const $docEl = document.documentElement;
//     const scrollTop = ( window.pageYOffset !== undefined ) ?
//         window.pageYOffset :
//         ( $docEl || $docEl.body.parentNode || $docEl.body ).scrollTop;
//     return scrollTop;
// };

// /* Stickey Nav Logic */
// const stickyNavLogic = ( width, trigger = 40 ) => {
//     const $logo = document.getElementById( "main-logo" );
//     const $preComp = document.getElementById( "on-home" );
//     if ( $preComp && width >= 700 ) {
//         window.addEventListener( "scroll", () => {
//             const scrollTop = scrollTracker();
//             if ( scrollTop >= trigger ) {
//                 $logo.classList.remove( "pinned" );
//             } else {
//                 $logo.classList.add( "pinned" );
//             }
//         }, false );
//     }
// };

/* Set Element Rotate */
const setElRotate = ( id ) => {
    const el = document.getElementById( id );
    el.addEventListener( "mouseenter", () => {
        el.classList.add( "rotate" );
    } );
    el.addEventListener( "mouseleave", () => {
        el.classList.remove( "rotate" );
    } );
};

/* Burger Logic  */
const burgerLogic = () => {
    const $hamMenu = document.getElementById( "ham-menu" );
    const $burger = document.getElementById( "ham-close" );
    const $ham1 = document.getElementById( "ham1" );
    const $ham2 = document.getElementById( "ham2" );
    const $ham3 = document.getElementById( "ham3" );
    const $ham4 = document.getElementById( "ham4" );

    const toggleHams = () => {
        $ham1.classList.toggle( "hide" );
        $ham4.classList.toggle( "hide" );
    };

    const closeHams = () => {
        toggleHams();
        $ham2.setAttribute( "transform", "rotate(45,23.91,23.91)" );
        $ham3.setAttribute( "transform", "rotate(-45,23.91,23.91)" );
    };

    const openHams = () => {
        toggleHams();
        $ham2.setAttribute( "transform", "" );
        $ham3.setAttribute( "transform", "" );
    };

    $burger.addEventListener( "click", ( e ) => {
        e.preventDefault();
        $hamMenu.classList.toggle( "active" );
        if ( !$hamMenu.classList.contains( "active" ) ) {
            openHams();
        } else {
            closeHams();
        }
    } );
};

/* Contact Logic */
const contactLogic = () => {
    const $link = document.getElementById( "contact-link" );
    const $close = document.getElementById( "contact-close" );
    const $menu = document.getElementById( "contact-menu" );

    const toggleContact = () => {
        $link.classList.toggle( "active" );
        $close.classList.toggle( "active" );
        $menu.classList.toggle( "active" );
    };

    $link.addEventListener( "click", ( e ) => {
        e.preventDefault();
        toggleContact();
    } );

    $close.addEventListener( "click", ( e ) => {
        e.preventDefault();
        toggleContact();
    } );
};

/*  Team Bios Logic */
const teamBiosLogic = () => {
    const $team = document.getElementsByClassName( "team-member" );
    Array.prototype.forEach.call( $team, ( $employee ) => {
        $employee.addEventListener( "click", ( e ) => {
            e.preventDefault();
            $employee.classList.toggle( "active" );
        } );
    } );
};

/*  Toggle Root */
const toggleRootLoad = () => {
    const $root = document.getElementById( "root" );
    $root.classList.toggle( "load" );
};

/* Toggle Expandables */
const toggleExpandables = () => {
    const $sections = document.getElementsByClassName( "section" );
    Array.prototype.forEach.call( $sections, ( $section ) => {
        $section.addEventListener( "click", () => {
            $section.classList.toggle( "expand" );
        } );
    } );
};

/* Load Component By ID */
const loadCompByID = () => {
    const URL = window.location.pathname;
    const hasHash = URL.indexOf( "#" );
    if ( hasHash > 0 ) {
        const [ , hash ] = URL.split( "#" );
        const $el = document.getElementById( hash );
        $el.classList.toggle( "active" );
    }
};

/* Active Menu */
const activeMenu = () => {
    const URL = window.location.pathname;
    const split = URL.split( "/" );
    const page = split[ split.length - 2 ].toLowerCase();
    const $pageLink = document.getElementById( `pg-${ page }` );
    if ( $pageLink ) {
        $pageLink.classList.toggle( "active" );
    }
};

document.onreadystatechange = () => {
    if ( document.readyState === "complete" ) {
        // Remove Root Load
        toggleRootLoad();

        // Sticky Nav Call
        // const browserSize = calcBrowserSize( );
        // stickyNavLogic( browserSize.width );

        // Set Logo Rotate
        setElRotate( "left-logo" );

        // Set Navigation Logic
        burgerLogic();
        contactLogic();

        // Set Team Bios Logic
        teamBiosLogic();

        // Set Expandables Logic
        toggleExpandables();

        // Set Loading Logic
        loadCompByID();

        // Set Menu Logic
        activeMenu();
    }
};
