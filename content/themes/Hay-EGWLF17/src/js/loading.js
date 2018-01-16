/**
*
* loading.js
*
* Handles AJAX page loading
*
*/

/*
* loadURL
*/
const ajaxReq = ( URL, callback ) => {
    const xmlHTTP = new XMLHttpRequest();
    xmlHTTP.onreadystatechange = () => {
        if ( xmlHTTP.readyState === XMLHttpRequest.DONE ) {
            if ( xmlHTTP.status >= 200 && xmlHTTP.status < 300 ) {
                callback( xmlHTTP.response );
            } else if ( xmlHTTP.status >= 400 && xmlHTTP.status < 500 ) {
                console.log( "error! request status", xmlHTTP.status, URL );
            } else {
                console.log( "something went wrong with your request: ", xmlHTTP.status );
            }
        }
    };
    xmlHTTP.open( "GET", URL, true );
    xmlHTTP.setRequestHeader( "Content-Type", "application/json" );
    xmlHTTP.send();
};

/*
* Load Components
*/
const mountComponents = ( data ) => {
    const $burger = document.getElementById( "ham-close" );
    const $foot = document.getElementById( "feet" );
    const dataToHTML = document.createElement( "html" );
    dataToHTML.innerHTML = data;
    const $newContent = dataToHTML.querySelector( "#load" );
    const $currContent = document.getElementById( "load" );
    $currContent.classList.toggle( "ajax" );
    $currContent.parentNode.insertBefore( $newContent, $foot );
    setTimeout( () => {
        $currContent.parentNode.removeChild( $currContent );
        $burger.click();
        console.log( "expects to close menu" );
    }, 500 );
};

/*
* setAjaxEvent
*/
const setAjaxEvents = () => {
    const $ajaxLoad = document.getElementsByClassName( "ajax-load" );
    Array.prototype.forEach.call( $ajaxLoad, ( $link ) => {
        $link.addEventListener( "click", ( e ) => {
            e.preventDefault();
            const URL = $link.getAttribute( "href" );
            const currentPage = window.location.href;
            if ( URL !== currentPage ) ajaxReq( URL, mountComponents );
        } );
    } );
};

// Set Event Logic
setAjaxEvents();
