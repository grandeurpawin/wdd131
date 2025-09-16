const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.getElementById('list');




button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const createButton = document.createElement('button');

        li.textContent = input.value;
        createButton.textContent = '❌';
        li.append(createButton);
        list.append(li);

    createButton.addEventListener('click', function() {
        list.removeChild(li);
        input.focus();
    });

        input.value = '';
        input.focus();
    }
});
