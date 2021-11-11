function sortList() {
    
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("todo-lista");
    switching = true;
    
    while (switching) {
      
      switching = false;
      b = list.getElementsByTagName("LI");
      
      for (i = 0; i < (b.length - 1); i++) {
        
        shouldSwitch = false;
        
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;

      }
    }
  }



const form = document.querySelector('#todo-form');
const input = document.querySelector('input');
const main = document.querySelector('.main');
const ul = document.querySelector('#todo-lista');


function createLi() {
  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = input.value;

  const label = document.createElement('label');
  label.textContent = 'Avklarat';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Ändra';

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Ta bort';


  li.appendChild(span);
  li.appendChild(label);
  label.appendChild(checkbox);
  li.appendChild(editBtn);
  li.appendChild(removeBtn);

  return li;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const li = createLi();

  if(input.value === '') {
    alert('Var vänlig och skriv någonting');
  } else {
    ul.appendChild(li);
  }
}); 


ul.addEventListener('change', (event) => {
  const checkbox = event.target;
  const checked = checkbox.checked;
  const li = checkbox.parentNode.parentNode;
  if(checked) {
    li.className = 'responded';
  } else {
    li.className = '';
  }
});


ul.addEventListener('click', (event) => {
  if(event.target.tagName === 'BUTTON') {
    const button = event.target;
    const li = button.parentNode;
    const ul = li.parentNode;
    if(button.textContent === 'Ta bort') {
      ul.removeChild(li);
    } else if(button.textContent === 'Ändra') {
      const span = li.firstElementChild;
      const input = document.createElement('input');
      input.type = 'text';
      input.value = span.textContent;
      li.insertBefore(input, span);
      li.removeChild(span);
      button.textContent = 'Spara';
    } else if(button.textContent === 'Spara') {
      const input = li.firstElementChild;
      const span = document.createElement('span');
      span.textContent = input.value;
      li.insertBefore(span, input);
      li.removeChild(input);
      button.textContent = 'Ändra';
    }
  }
});

