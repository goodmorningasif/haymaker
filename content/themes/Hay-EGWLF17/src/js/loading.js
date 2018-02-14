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
    add( {
        data,
        url,
        title,
    } ) {
        this.memory[ title ] = {
            page_data: data,
            url,
        };
        this.length += 1;
        return this.length;
    },
    urlParser() {
        const thisPageURL = window.location.href;
        const urlArr = thisPageURL.split( "/" );
        const subPage = urlArr.reduce( ( accu, curr ) =>
            ( ( curr === "team" || curr === "menu" ) ?
                accu + curr :
                accu
            ), "" );

        return {
            title: urlArr[ urlArr.length - 2 ],
            subPage,
            url: thisPageURL,
        };
    },
    assemble( {
        urlObj,
        content,
    } ) {
        return this.add( {
            data: content,
            url: urlObj.url,
            title: urlObj.title,
        } );
    },
    init() {
        const urlObj = this.urlParser();
        if ( !this.memory[ urlObj ] ) {
            const content = document.getElementById( "load" ).outerHTML;
            this.assemble( {
                urlObj,
                content,
            } );
        }
        return urlObj;
    },
};

/*
* AJAX Function
*
* Pure JavaScript AJAX method
*/
const ajaxReq = ( {
    LINK,
    callback,
    resetEvents = false,
} = {} ) => {
    const xmlHTTP = new XMLHttpRequest();
    xmlHTTP.onreadystatechange = () => {
        if ( xmlHTTP.readyState === XMLHttpRequest.DONE ) {
            if ( xmlHTTP.status >= 200 && xmlHTTP.status < 300 ) {
                callback( {
                    resp: xmlHTTP.response,
                    link: LINK,
                    events: resetEvents,
                } );
            } else if ( xmlHTTP.status >= 400 && xmlHTTP.status < 500 ) {
                // console.warn( "error! request status", xmlHTTP.status, LINK );
            } else {
                // console.warn( "something went wrong with your request: ", xmlHTTP.status );
            }
        }
    };
    xmlHTTP.open( "GET", LINK, true );
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

    const $menuLink = document.getElementsByClassName( "menu-link" );
    Array.prototype.forEach.call( $menuLink, ( $link ) => {
        const $children = $link.children;
        $children[ 0 ].classList.remove( "active" );
    } );

    const $getAjaxLinks = document.getElementsByClassName( "ajax-load" );
    Array.prototype.forEach.call( $getAjaxLinks, ( $link ) => {
        const linkURL = $link.getAttribute( "href" );
        const isMenuPage = linkURL.indexOf( "/menu/" );
        if ( isMenuPage < 0 && linkURL === link && $link.closest( ".list-link" ) ) {
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
const mountComponents = ( {
    resp,
    link,
    popState = false,
    events = false,
} = {} ) => {
    // saves input to memory object and returns original object
    const saveToMemory = ( $el ) => {
        ajaxHistory.add( {
            data: $el.outerHTML,
            url: link,
        } );
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
        if ( events ) events( $el );
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
        const $hamMenu = document.getElementById( "ham-menu" );
        const menuIsActive = $hamMenu.classList.contains( "active" );
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
    removeEl( insertEl( createEl( resp ) ) );
    setNavClasses( link );
    if ( !popState ) setURL( link );
};

/*
* Set Ajax Event
*
* Sets the onClick events for all anchors with
* the class name ajax-load
*/
const setAjaxEvents = ( $newContent = false ) => {
    const $ajaxLoad = ( $newContent ) ?
        $newContent.getElementsByClassName( "ajax-load" ) :
        document.getElementsByClassName( "ajax-load" );

    const ajaxTriggerAction = ( e, $link ) => {
        e.preventDefault();
        const URL = $link.getAttribute( "href" );
        const currentPage = window.location.href;
        // const hasURL = Object.prototype.hasOwnProperty.call( ajaxHistory.memory, URL );
        const hasURL = ( ajaxHistory.memory[ URL ] );
        if ( URL !== currentPage ) {
            if ( !hasURL ) {
                console.log( "triggered by AJAXREQ in trigger", hasURL, URL );
                ajaxReq( {
                    LINK: URL,
                    callback: mountComponents,
                    resetEvents: setAjaxEvents,
                } );
            } else {
                console.log( "triggered by MOUNT in trigger", hasURL );
                mountComponents( {
                    resp: ajaxHistory.memory[ URL ].page_data,
                    link: URL,
                    events: setAjaxEvents,
                } );
            }
        }
    };

    Array.prototype.forEach.call( $ajaxLoad, ( $link ) => {
        $link.addEventListener( "click", ( e ) => {
            ajaxTriggerAction( e, $link );
        }, { capture: true } );
    } );
};

/*
*  PopState Listener
*/
const popStateMethods = () => {
    const changeState = ( state ) => {
        const hasURL = Object.prototype.hasOwnProperty.call( ajaxHistory.memory, `${ state.url }` );
        console.log( "hasURL in popstate", hasURL );
        const thisURLObj = ajaxHistory.memory[ state.url ];
        if ( hasURL ) {
            console.log( "triggered by MOUNT in popstate", hasURL );
            mountComponents( {
                resp: thisURLObj.page_data,
                link: state.url,
                popState: true,
            } );
        } else {
            console.log( "triggered by AJAXREQ in popstate", hasURL );
            ajaxReq( {
                LINK: state.url,
                callback: mountComponents,
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
// --> Sets events to handle loading pages

popStateMethods();
// --> Sets handler for Back and Forward browser buttons

ajaxHistory.init();
// --> Starts up memory
