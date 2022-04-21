// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// You can access the story by using the pages array.
// You can find the pages array in story.js
// The first page is at index 0.
console.log(pages[0]);

let endingPages = [4, 9, 13, 17, 19, 20];
let currentPage = 0;

// Your Code Here.
let endStory = function (currentPage) {
    for (let index = 0; index < endingPages.length; index ++) {
        if (currentPage === endingPages[index]) {
            return true
        } 
    }
    return false
    
}

endStory()

    while (currentPage !== null) {
        if (endStory(currentPage) === true) {
            document.write("<h2>Game Over</h2>")
            break
        }
        for (index = 0; index < pages.length; index += 1) {
            if (currentPage === index) {
                currentPage = prompt(pages[index])
                document.write(`<h2>You turned to page ${index} </h2>`)
                document.write(`<p>${pages[index]}</p>`)
            }
            // currentPage = prompt(pages[20])
            // document.write(`<p>${pages[20]}</p>`)
            
        }
        if (!currentPage) {
            currentPage = null 
            document.write("<h2>Game over</h2>")
            break
        } else {currentPage = parseInt(currentPage)}
        // currentPage = prompt(pages[currentPage] + "What page would you like to go to?")
    }

