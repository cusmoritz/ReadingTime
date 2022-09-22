// Init

const headerText = document.getElementById('header-text');
const mainBody = document.getElementById('main-body');

headerText.addEventListener('click', () => {
    // re-load reading.time
})

let mainContentTable = document.createElement('table');
mainBody.appendChild(mainContentTable);

let numOfRows = 5;
const createMainContent = (numOfRows) => {

    // this is where we populate our main content with how many pages we pull
    for (rowsInTable = 0; rowsInTable < numOfRows; rowsInTable++){
        // create rows
        let newRow = document.createElement('tr');

        //create rows per input number

        for (let cellsInRow = 0; cellsInRow < 3; cellsInRow++){
            //create cells
            let newCell = document.createElement('td');
            // add cells to rows
            newRow.appendChild(newCell);      
        }
    // add rows to board
    mainContentTable.appendChild(newRow);
    }
    
    return;
}

createMainContent();



// create one row
    // create 3 cells per row

// we want a side bar (static)
// with stats
    // how many articles
    // total number of links clicked (?)
    // other stuff?

// on the main body of the page
    // we want the table to populate with one thing at a time
    // a headline from an API
        // under that headline, the first paragraph (sentence) of text
        // on the left (?) side of that, the logo from the website?
        // header should be a link to the full story.

    // we want to be able to pull tweets, story links from various websites ... etc
    // ideally