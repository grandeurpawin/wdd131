const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// This is the code from week to button.addEventListener 
// button.addEventListener('click', function (){
//     if (input.value.trim() !== '') {
//         const li = document.createElement('li');
//         const deleteButton = document.createElement('button');

//         li.textContent = input.value;
//         deleteButton.textContent = '❌';
//         deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

//         deleteButton.addEventListener('click', function () {
//             list.removeChild(li);
//             input.focus();
//         });
//         li.append(deleteButton);
//         list.append(li);

//         input.value = '';
//         input.focus();
//     }
// });

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener("click", () => {
    if (input.value != "") {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    }
});

function displayList(item) {
    let li = document.createElement("li");
    let deleteButton = document.createElement("button");
    li.textContent = item;
    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete");
    deleteButton.setAttribute("aria-label", `Remove ${input.value}`);
    list.append(li);
    li.append(deleteButton);
    deleteButton.addEventListener("click", () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
    console.log("I type the code myself ang trying to understand it even if I can't understand it all for now")
}

function setChapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}