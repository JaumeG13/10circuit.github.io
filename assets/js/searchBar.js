document.addEventListener('DOMContentLoaded', function () {
    // Get the input field and list
    var input = document.getElementById('searchInput');
    var list = document.getElementById('list');

    // Add an input event listener to the search input
    input.addEventListener('input', function () {
        // Get the search query
        var query = input.value.toLowerCase();

        // Get all list items
        var items = list.getElementsByClassName('event');

        // Loop through the list items
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var text = item.textContent.toLowerCase();

            // Check if the item contains the search query
            if (text.includes(query)) {
                item.style.display = 'block'; // Show the item
            } else {
                item.style.display = 'none'; // Hide the item
            }
        }
    });

    // Add a click event listener to the reset button
    resetButton.addEventListener('click', function () {
        // Clear the search input
        input.value = '';

        // Show all list items
        var items = list.getElementsByClassName('event');
        for (var i = 0; i < items.length; i++) {
            items[i].style.display = 'block';
        }
    });
});