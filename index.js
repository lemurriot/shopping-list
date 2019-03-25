$(function() {

    //handling form submission
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        
        //append new item from form entry
        const item = $('#shopping-list-entry').val();
        $('.shopping-list').append(`
            <li>
            <span class="shopping-item">${item}</span>
            <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
                <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
                <span class="button-label">delete</span>
            </button>
            </div>
        </li>
        `)
    });

    //handling check button event to toggle class
    $('li').on('click', '.shopping-item-toggle', function(event){
        let targetEl = $(this).closest('li').children('.shopping-item')
        $(targetEl).toggleClass('shopping-item__checked')
    });

    //handling delete item
    $('li').on('click', '.shopping-item-delete', function(event){
        let targetEl = $(this).closest('li').remove();
    });
});