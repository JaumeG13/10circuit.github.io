document.addEventListener('DOMContentLoaded', function () {
    // Get the input field and list
    var input = document.getElementById('searchInput');
    var list = document.getElementById('list');

    // Add an input event listener to the search input
    input.addEventListener('input', function () {
        // Get the search query
        var query = input.value.toLowerCase();

        // Get all list items with class 'event' or 'driver'
        var items = list.querySelectorAll('.event, .driver');

        // Loop through the list items
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var text = item.textContent.toLowerCase();

            // Check if the item contains the search query
            if (text.includes(query)) {
                // Show the item using the correct display style
                if (item.classList.contains('event')) {
                    item.style.display = 'block';
                } else if (item.classList.contains('driver')) {
                    item.style.display = 'flex';
                }
            } else {
                item.style.display = 'none'; // Hide the item
            }
        }
    });

    // Add a click event listener to the reset button
    resetButton.addEventListener('click', function () {
        // Clear the search input
        input.value = '';

        // Show all list items with the correct display type
        var items = list.querySelectorAll('.event, .driver');
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item.classList.contains('event')) {
                item.style.display = 'block';
            } else if (item.classList.contains('driver')) {
                item.style.display = 'flex';
            }
        }
    });
});
