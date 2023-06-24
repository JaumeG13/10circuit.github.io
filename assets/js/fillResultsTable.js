function fillResultsTable() {
    fetch("/assets/json/R5_LEMANS_RACE.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        data.Result[0].Class = 'HY'
        console.log(data)
        const container = document.getElementById('round5')
        console.log(container)

        const headers = ['Position', 'Driver', 'Class', 'Qualified', '+/-', 'Time', 'Fastest Lap']

        for (let i = 0; i < headers.length; i++) {
            console.log(headers[i]);
            const titleDiv = createElement(headers[i]);
            container.appendChild(titleDiv);
            titleDiv.classList.add("grid-element");
            titleDiv.setAttribute('id', 'grid-title');

            
        }
        for (let j = 0; j < data.Result.length; j++) {
                const dataDiv = createElement(j+1);
                container.appendChild(dataDiv);
                dataDiv.classList.add("grid-element");
            }
    });
}

fillResultsTable()

function createElement(text) {
    // create a new div element
    const newDiv = document.createElement("div");
  
    // and give it some content
    const newContent = document.createTextNode(text);
  
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
    return newDiv;
}
/*
<div class="grid-element">1</div>
<div class="grid-element">Focuser</div>
<div class="grid-element">HY</div>
<div class="grid-element">2</div>
<div class="grid-element">+1</div>
<div class="grid-element">2:29:46.078</div>
<div class="grid-element">3:12.990</div>
*/