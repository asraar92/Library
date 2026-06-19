//  6-june-2026 -> GOT BACK TO IT

const myLibrary = [];

function Book(title, author, noOfPages, readStatus) {
    this.title = title;
    this.author = author;
    this.noOfPages = noOfPages;
    this.readStatus = readStatus;
    this.id = crypto.randomUUID();
}




function addBookToLibrary(title, author, noOfPages, readStatus) {
    const newBook = new Book(title, author, noOfPages, readStatus);
    myLibrary.push(newBook);
    
}

let mainContainer = document.querySelector(".mainContainer");

function displayBook() {
    for (let i = 0; i < myLibrary.length; i++) {
        let display = document.createElement("div");
        display.classList.add("card");
        display.dataset.divId = myLibrary[i].id;
        let line1 = document.createElement("div");
        let line2 = document.createElement("div");
        let line3 = document.createElement("div");
        let line4 = document.createElement("button");
        line4.id = "readStatusBtn";
        let line5 = document.createElement("button");
        line5.id = "removeBtn";
        line1.textContent = myLibrary[i]["title"];
        line2.textContent = myLibrary[i].author;
        line3.textContent = `${myLibrary[i].noOfPages} pages`;
        line4.textContent = myLibrary[i].readStatus;
        line5.textContent = "Remove";
        display.append(line1, line2, line3, line4, line5);
        mainContainer.appendChild(display);
    }
        
        let cards = document.querySelectorAll(".card");

        for (const card of cards) {
            card.addEventListener("click", () => {
                let target = event.target;
                switch (target.id) {
                    case "readStatusBtn": { toggleReadStatus(event); break; }
                    case "removeBtn": { removeEventHandler(event); break; }
                    default: break;

                }
            }

            );
        }

    
}

addBookToLibrary("The Millionaire Fastlane", "MJ Demarco", 276, "Read");

addBookToLibrary("Harry Potter and the Prisoner of Azkaban", "JK Rowling", 349, "Read");

addBookToLibrary("Atomic Habits", "James Clear", 185, "Read");

addBookToLibrary("The Untethered Soul", "Michael A. Singer", 200, "Unread");

addBookToLibrary("How to get Rich", "Felix Dennis", 176, "Read");

addBookToLibrary("Unscripted", "MJ Demarco", 325, "Read");

displayBook();


function removeEventHandler(event) {


    let target = event.currentTarget;
    console.log(target);
    myLibrary.forEach((book, index) => {
        if (book.id === target.dataset.divId) {
            myLibrary.splice(index, 1);
            mainContainer.innerHTML = "";
            displayBook();

        }
    })
    console.log(target.dataset.divId);
}
function toggleReadStatus(event) {
    let target = event.currentTarget;
    console.log(target);
    myLibrary.forEach((book, index) => {
        if (book.id === target.dataset.divId) {
            if(myLibrary[index]["readStatus"]==="Read"){
                myLibrary[index]["readStatus"]="Unread";
            }
            else {myLibrary[index]["readStatus"]="Read";}
            mainContainer.innerHTML = "";
            displayBook();

        }
    })

}
const newBookDialog = document.querySelector("#newBookDialog");

        const newBookBtn = document.querySelector("#newBookBtn");

        newBookBtn.addEventListener("click", () => newBookDialog.showModal());

        const closeBtn = document.querySelector("#closeBtn");

        closeBtn.addEventListener("click", () => newBookDialog.close());

        const submitBtn = document.querySelector("#submitBtn");

        submitBtn.addEventListener("click", () => {
            console.log("submit handler fired");
            const titleInput = document.querySelector("#title");
            const title = titleInput.value;
            const authorInput = document.querySelector("#author");
            const author = authorInput.value;
            const pagesInput = document.querySelector("#pages");
            const pages = pagesInput.value;
            const readStatusInput = document.querySelector("#readStatus").checked;
            let readStatus;
            if(readStatusInput){
                readStatus="Read";
            }
            else readStatus="Unread";
            addBookToLibrary(title,author,pages,readStatus);
            mainContainer.innerHTML = "";
            
           displayBook();
            newBookDialog.close();
            
        })




