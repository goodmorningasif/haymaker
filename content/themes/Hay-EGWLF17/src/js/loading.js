/**
*
* loading.js
*
* Handles AJAX page loading
*
*/

/*
* Memory Object
*
* Saves data from AJAX calls to an object
* for easy search by KEY method
*
*/
const ajaxHistory = {
    memory: {},
    length: 0,
    add( data, url ) {
        this.memory[ url ] = { page_data: data };
        this.length += 1;
        return this.length;
    },
    init() {
        const thisPageURL = window.location.href;
        if ( !this.memory[ thisPageURL ] ) {
            const content = document.getElementById( "load" );
            this.add( content.outerHTML, thisPageURL );
        }
        return thisPageURL;
    },
};

/*
* AJAX Function
*
* Pure JavaScript AJAX method, no JQuery
*/
const ajaxReq = ( options ) => {
    const xmlHTTP = new XMLHttpRequest();
    xmlHTTP.onreadystatechange = () => {
        if ( xmlHTTP.readyState === XMLHttpRequest.DONE ) {
            if ( xmlHTTP.status >= 200 && xmlHTTP.status < 300 ) {
                options.callback( xmlHTTP.response, options.LINK );
            } else if ( xmlHTTP.status >= 400 && xmlHTTP.status < 500 ) {
                // console.warn( "error! request status", xmlHTTP.status, LINK );
            } else {
                // console.warn( "something went wrong with your request: ", xmlHTTP.status );
            }
        }
    };
    xmlHTTP.open( "GET", options.LINK, true );
    xmlHTTP.setRequestHeader( "Content-Type", "application/json" );
    xmlHTTP.send();
    return true;
};

/*
* Set Nav Classes
*
* Sets the classes that trigger animations and
* effects for navigation elements
*/
const setNavClasses = ( link ) => {
    const $listLinks = document.getElementsByClassName( "list-link" );
    Array.prototype.forEach.call( $listLinks, ( $link ) => {
        $link.classList.remove( "active" );
    } );

    const $menuLink = document.getElementsByClassName( "meny-link" );
    Array.prototype.forEach.call( $menuLink, ( $link ) => {
        const $children = $link.children;
        $children[ 0 ].classList.remove( "active" );
    } );

    const $getAjaxLinks = document.getElementsByClassName( "ajax-load" );
    Array.prototype.forEach.call( $getAjaxLinks, ( $link ) => {
        const linkURL = $link.getAttribute( "href" );
        const isMenuPage = linkURL.indexOf( "/menu/" );
        if ( isMenuPage < 0 && linkURL === link ) {
            $link.closest( ".list-link" ).classList.add( "active" );
        } else if ( isMenuPage > 0 && linkURL === link ) {
            const $foodLink = document.getElementById( "pg-food" );
            $foodLink.classList.add( "active" );
            $link.closest( ".link" ).classList.add( "active" );
        }
    } );
};

/*
* Mount Components
*
* Primary AJAX data processing and insertin pipeline
*/
const mountComponents = ( options ) => {
    // resp, link, popState = false, callback
    options.popState = options.popState || false; 
    console.log( "mounting Components" );
    // saves input to memory object and returns original object
    const saveToMemory = ( $el ) => {
        ajaxHistory.add( $el.outerHTML, link );
        return $el;
    };

    // empties old classes, adds new page classes frrom <Body>
    const resetBodyClasses = () => {
        const cls = document.body.classList;
        const newCls = document.getElementById( "body_classes" ).classList;
        document.body.classList.remove( ...cls );
        document.body.classList.add( ...newCls );
        return newCls;
    };

    // turns the AJAX string response into an html element
    // and returns only the #load ID
    const createEl = ( content ) => {
        const $el = document.createElement( "html" );
        $el.innerHTML = content;
        return saveToMemory( $el.querySelector( "#load" ) );
    };

    // inserts the new element into the page between the current
    // element and the footer
    const insertEl = ( $newEl ) => {
        const $content = document.getElementById( "load" );
        const $foot = document.getElementById( "feet" );
        $content.classList.toggle( "mount" );
        $newEl.classList.toggle( "mount" );
        $content.parentNode.insertBefore( $newEl, $foot );
        setTimeout( () => {
            $newEl.classList.toggle( "mount" );
        }, 400 );
        return $content;
    };

    // removes the old element from the page and if the
    // nav menu is open, simulates a click event
    const removeEl = ( $oldEl ) => {
        const $burgerBttn = document.getElementById( "ham-close" );
        const menuIsActive = document.getElementById( "ham-menu" ).classList.contains( "active" );
        setTimeout( () => {
            $oldEl.parentNode.removeChild( $oldEl );
            if ( menuIsActive ) $burgerBttn.click();
            resetBodyClasses();
        }, 250 );
    };

    // Sets the history for the browser
    const setURL = ( newLink ) => {
        const state = {
            title: null,
            url: window.location.href,
        };
        window.history.pushState( state, "", newLink );
        return state;
    };

    // executes the pipeline
    const $newContent = createEl( resp );
    const $oldContent = insertEl( $newContent );
    removeEl( $oldContent );
    setNavClasses( link );
    if ( !popState ) setURL( link );
    console.log( "pre-check for callback", callback );
    if ( callback ) console.log( "this is the callback", callback );
};

/*
* Set Ajax Event
*
* Sets the onClick events for all anchors with
* the class name ajax-load
*/
const setAjaxEvents = () => {
    console.log( "Ajax Events Set !" );
    const $ajaxLoad = document.getElementsByClassName( "ajax-load" );
    Array.prototype.forEach.call( $ajaxLoad, ( $link ) => {
        $link.addEventListener( "click", ( e ) => {
            e.preventDefault();
            const URL = $link.getAttribute( "href" );
            const currentPage = window.location.href;
            const hasURL = Object.prototype.hasOwnProperty.call( ajaxHistory.memory, URL );
            // const isMenuPage = URL.indexOf( "/menu/" );
            if ( URL !== currentPage ) {
                if ( !hasURL ) ajaxReq( URL, mountComponents );
                else {
                    mountComponents(
                        ajaxHistory.memory[ URL ].page_data,
                        URL,
                    );
                }
            }
        } );
    } );
};

/*
*  PopState Listener
*/
const popStateMethods = () => {
    const changeState = ( state ) => {
        const hasURL = Object.prototype.hasOwnProperty.call( ajaxHistory.memory, state.url );
        const thisURLObj = ajaxHistory.memory[ state.url ];
        if ( hasURL ) {
            mountComponents( thisURLObj.page_data, state.url, true );
        }
        else  {
            ajaxReq( { 
                LINK: state.url, 
                callback: mountComponents 
            } );
        }
    };

    window.addEventListener( "popstate", ( e ) => {
        changeState( e.state );
    } );
};

/*
* Initiate Functions
*/
setAjaxEvents();
popStateMethods();
ajaxHistory.init();
