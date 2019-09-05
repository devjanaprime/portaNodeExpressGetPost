$( document ).ready( onReady );

function addThing(){
    let objectToSend = {
        name: $( '#nameIn' ).val()
    }
    $.ajax({
        type: 'POST',
        url: '/things',
        data: objectToSend
    }).then( function( response ){
        console.log( 'back from server with:', response );
        getThings();
    }).catch( function( err ){
        alert( err );
    }) // end POST
} //end addThing

function getThings(){
    // use AJAX to make a GET request
    $.ajax({
        type: 'GET',
        url: '/things'
    }).then( function( response ){
        // console log out response
        console.log( 'back from server with:', response );
        // display things on DOM
        let el = $( '#thingsOut' );
        el.empty();
        for( let i=0; i< response.length; i++){
            el.append( `<li>${ response[i].name }</li>`);
        } // end loop
    }).catch( function( err ){
        // catch errors here
        alert( err );
    })
} // end getThings

function onReady(){
    $( '#addThingButton' ).on( 'click', addThing );
    getThings();
} 