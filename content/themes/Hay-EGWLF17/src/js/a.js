/**
*
* a.js
*
*/

/* Calculate Browser Dimensions */
const calcBrowserSize = () => {
    const dimensions = {};
    const $docEl = document.documentElement;
    dimensions.width = 0;
    dimensions.height = 0;
    if ( typeof ( window.innerWidth ) === "number" ) {
        dimensions.width = window.innerWidth;
        dimensions.height = window.innerHeight;
    } else if ( $docEl && ( $docEl.clientWidth || $docEl.clientHeight ) ) {
        dimensions.width = document.documentElement.clientWidth;
        dimensions.height = document.documentElement.clientHeight;
    }
    return dimensions;
};

/* Scroll Tracker */
const scrollTracker = () => {
    const $docEl = document.documentElement;
    const scrollTop = ( window.pageYOffset !== undefined ) ?
        window.pageYOffset :
        ( $docEl || $docEl.body.parentNode || $docEl.body ).scrollTop;
    return scrollTop;
};

/* Stickey Nav Logic */
const stickyNavLogic = ( width, trigger = 40 ) => {
    const $logo = document.getElementById( "main-logo" );
    const $preComp = document.getElementById( "on-home" );
    if ( $preComp && width >= 700 ) {
        window.addEventListener( "scroll", () => {
            const scrollTop = scrollTracker();
            if ( scrollTop >= trigger ) {
                $logo.classList.remove( "pinned" );
            } else {
                $logo.classList.add( "pinned" );
            }
        }, false );
    }
};

/* Set Element Rotate */
const setElRotate = ( id ) => {
    const el = document.getElementById( id );
    el.addEventListener( "mouseover", () => {
        el.classList.add( "rotate" );
    } );
    el.addEventListener( "mouseout", () => {
        el.classList.remove( "rotate" );
    } );
};

/* Close Icon  */
const burgerLogic = () => {
    const $burger = document.getElementById( "open-close" );

    $burger.addEventListener( "mouseover", () => {
        document.querySelectorAll( " line.ham1, line.ham4 " ).classList.toggle('hide');
    } );
    // $hamBar4.classList.add('hide');
    // $hamBar2.setAttribute("transform", "(45,23.91,13.32)");
    // $hamBar3.setAttribute("transform", "(45,23.91,13.32)")
}

document.onreadystatechange = () => {
    if ( document.readyState === "complete" ) {
        // Sticky Nav Call
        const browserSize = calcBrowserSize( );
        stickyNavLogic( browserSize.width );

        // Set Logo Rotate
        setElRotate( "left-logo" );
        burgerLogic();
        
    }
};
