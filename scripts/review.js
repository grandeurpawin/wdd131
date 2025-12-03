let submitCount = Number(localStorage.getItem("submitCount")) || 0;
submitCount++;

localStorage.setItem("submitCount", submitCount);
console.log(`You have submitted ${submitCount} review(s) on this page.`)