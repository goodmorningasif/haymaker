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
// const ajaxReq = ( URL, callback ) => {
//     const xmlHTTP = new XMLHttpRequest();
//     const data = {};
//     xmlHTTP.onreadystatechange = () => {
//         if ( xmlHTTP.readyState === XMLHttpRequest.DONE ) {
//             data.status = xmlHTTP.status;
//             if ( xmlHTTP.status === 200 ) {
//                 data.resp = callback( xmlHTTP );
//             } else if ( xmlHTTP.status === 400 ) {
//                 data.error = "status 400";
//             } else {
//                 data.error = "something other than 200 was returned";
//             }
//         }
//     };

//     xmlHTTP.open( "GET", URL, true );
//     xmlHTTP.send();
//     return data;
// };

/*
* setAjaxEvent
*/
// const setAjaxEvents = () => {
//     const $ajaxLoad = document.getElementsByClassName( "ajax-load" );
//     const dev = window.location.origin.indexOf( "localhost" ) > 0;
//     const env = ( dev ) ? "/haymaker/" : "/";
//     const API = "wp-json/wp/v2/pages?slug=";
//     Array.prototype.forEach.call( $ajaxLoad, ( $link ) => {
//         $link.addEventListener( "click", ( e ) => {
//             e.preventDefault();
//             const slug = $link.getAttribute( "data-ajax" );
//             const URL = `${ window.location.origin }${ env }${ API }${ slug }`;
//             ajaxReq( URL, ( data ) => {
//                 console.log( "response", data, "url", URL );
//             } );
//         } );
//     } );
// };

/*
* Execute loading funcs
*/

// Set Event Logic
// setAjaxEvents();
