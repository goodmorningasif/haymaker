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

    add( { data, url, title } ) {
        this.memory[ title ] = {
            data,
            url,
        };
        this.length += 1;
        return this.length;
    },

    urlParser( link ) {
        const thisPageURL = link || window.location.href;
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

    assemble( data ) {
        const urlObj = this.urlParser();
        return this.add( {
            title: urlObj.title,
            url: urlObj.url,
            data,
        } );
    },

    init() {
        const urlObj = this.urlParser();
        if ( !this.memory[ urlObj.title ] ) {
            const content = document.getElementById( "load" ).outerHTML;
            this.assemble( content );
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
    const saveToMemory = () => {
        const $el = document.getElementById( "load" );
        ajaxHistory.assemble( $el.outerHTML );
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
        return $el.querySelector( "#load" );
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
            saveToMemory();
        }, 250 );
    };

    // Sets the history for the browser
    const setURL = ( newLink ) => {
        const thisUrlObj = ajaxHistory.urlParser();
        const state = {
            title: thisUrlObj.title,
            url: thisUrlObj.url,
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
        const urlObj = ajaxHistory.urlParser( $link.getAttribute( "href" ) );
        const currentPage = window.location.href;
        const hasURL = ( ajaxHistory.memory[ urlObj.title ] );
        if ( urlObj.url !== currentPage ) {
            if ( hasURL ) {
                mountComponents( {
                    resp: ajaxHistory.memory[ urlObj.title ].data,
                    link: ajaxHistory.memory[ urlObj.title ].url,
                    events: setAjaxEvents,
                } );
            } else {
                ajaxReq( {
                    LINK: urlObj.url,
                    callback: mountComponents,
                    resetEvents: setAjaxEvents,
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
*
* Handles history and the back and forward buttons on browser
*/
const popStateMethods = () => {
    const changeState = ( state ) => {
        const thisUrlObj = ajaxHistory.memory[ state.title ];
        if ( thisUrlObj ) {
            mountComponents( {
                resp: thisUrlObj.data,
                link: thisUrlObj.url,
                popState: true,
            } );
        } else {
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
