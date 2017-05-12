/**
 * Created by juancarlosnavarrete on 5/10/17.
 */

$( document ).ready(function() {
    console.log( "ready!" );
    $(".home").click(function(){
       $(".allItems").addClass('hide');
        $(".addItem").addClass('hide');
        $(".adminActive").addClass('hide');
        $(".adminPending").addClass('hide');
        $(".main").removeClass('hide');

    });
    $(".items").click(function(){
        $(".main").addClass('hide');
        $(".addItem").addClass('hide');
        $(".adminActive").addClass('hide');
        $(".adminPending").addClass('hide');
        $(".allItems").removeClass('hide');
    });
    $(".add-Items").click(function(){
        $(".main").addClass('hide');
        $(".allItems").addClass('hide');
        $(".adminActive").addClass('hide');
        $(".adminPending").addClass('hide');
        $(".addItem").removeClass('hide');
    });
    $(".active-clients").click(function(){
        $(".main").addClass('hide');
        $(".allItems").addClass('hide');
        $(".addItem").addClass('hide');
        $(".adminPending").addClass('hide');
        $(".adminActive").removeClass('hide');
    });
    $(".pending-clients").click(function(){
        $(".main").addClass('hide');
        $(".allItems").addClass('hide');
        $(".addItem").addClass('hide');
        $(".adminActive").addClass('hide');
        $(".adminPending").removeClass('hide');
    });
});

