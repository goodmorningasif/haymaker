/**
*
* A is for Airplane
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

/* Stickey Nav */
const stickyNavLogic = ( width ) => {
    const $logo = document.getElementById( "main-logo" );
    const hasPreComponent = document.getElementById( "on-home" );
    if ( hasPreComponent && width >= 700 ) {
        $logo.className += " pinned";
        window.addEventListener( "scroll", () => {
            console.log( "scrolling" );
        }, false );
    }
};

document.onreadystatechange = () => {
    if ( document.readyState === "complete" ) {
        const browserSize = calcBrowserSize( );
        stickyNavLogic( browserSize.width );
    }
};
