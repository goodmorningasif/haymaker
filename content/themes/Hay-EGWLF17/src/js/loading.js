// /**
// *
// * loading.js
// *
// * Handles AJAX page loading
// *
// */

// /*
// * Memory Object
// */
// const ajaxHistory = {
//     memory: {},
//     loadSite() {

//     }
// };

// /*
// * loadURL
// */
// const ajaxReq = ( LINK, callback ) => {
//     const xmlHTTP = new XMLHttpRequest();
//     xmlHTTP.onreadystatechange = () => {
//         if ( xmlHTTP.readyState === XMLHttpRequest.DONE ) {
//             if ( xmlHTTP.status >= 200 && xmlHTTP.status < 300 ) {
//                 callback( xmlHTTP.response, LINK );
//             } else if ( xmlHTTP.status >= 400 && xmlHTTP.status < 500 ) {
//                 console.warn( "error! request status", xmlHTTP.status, LINK );
//             } else {
//                 console.warn( "something went wrong with your request: ", xmlHTTP.status );
//             }
//         }
//     };
//     xmlHTTP.open( "GET", LINK, true );
//     xmlHTTP.setRequestHeader( "Content-Type", "application/json" );
//     xmlHTTP.send();
// };

// /*
// * Load Components
// */
// const mountComponents = ( resp, link ) => {
//     const createEl = ( content ) => {
//         const $el = document.createElement( "html" );
//         $el.innerHTML = content;
//         return $el.querySelector( "#load" );
//     };

//     const insertEl = ( $newEl ) => {
//         const $content = document.getElementById( "load" );
//         const $foot = document.getElementById( "feet" );
//         $content.classList.toggle( "ajax" );
//         $content.parentNode.insertBefore( $newEl, $foot );
//         return $content;
//     };

//     const removeEl = ( $oldEl ) => {
//         const $burger = document.getElementById( "ham-close" );
//         setTimeout( () => {
//             $oldEl.parentNode.removeChild( $oldEl );
//             $burger.click();
//         }, 500 );
//     };

//     const setURL = ( newLink ) => {
//         const state = {
//             title: null,
//             url: window.location.href,
//         };
//         window.history.pushState( state, "", newLink );
//     };

//     const $newContent = createEl( resp );
//     const $oldContent = insertEl( $newContent );
//     removeEl( $oldContent );
//     setURL( link );
// };

// /*
// * Set Ajax Event
// */
// const setAjaxEvents = () => {
//     const $ajaxLoad = document.getElementsByClassName( "ajax-load" );
//     Array.prototype.forEach.call( $ajaxLoad, ( $link ) => {
//         $link.addEventListener( "click", ( e ) => {
//             e.preventDefault();
//             const URL = $link.getAttribute( "href" );
//             const currentPage = window.location.href;
//             if ( URL !== currentPage ) ajaxReq( URL, mountComponents );
//         } );
//     } );
// };

// /*
// *  PopState Listener
// */
// const popStateMethods = () => {
//     const changeState = ( state ) => {
//         console.log( "state change", state );
//     };

//     window.addEventListener( "popstate", ( e ) => {
//         changeState( e.state.state );
//     } );

//     // changeState();
// };

// // Set Event Logic
// setAjaxEvents();
// popStateMethods();
