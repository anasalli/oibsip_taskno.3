
		// const input = document.querySelector('input');
		// const btn = document.querySelector('.addTask > button');
        // const listContainer = document.querySelector('list-container');

		// btn.addEventListener('click', addList);
		// input.addEventListener('keyup', (e)=>{
		// 	(e.keyCode === 13 ? addList(e) : null);
		// })
       

       
		// function addList(e){
		// 	const notCompleted = document.querySelector('.notCompleted');
		// 	const Completed = document.querySelector('.Completed');


		// 	const newLi = document.createElement('li');
		// 	const checkBtn = document.createElement('button');
		// 	const delBtn = document.createElement('button');

		// 	checkBtn.innerHTML  = '<i class="fa fa-check"></i>';
		// 	delBtn.innerHTML = '<i class="fa fa-trash"></i>';


		// 	if(input.value !==''){
		// 		newLi.textContent = input.value;
		// 		input.value = '';
		// 		notCompleted.appendChild(newLi);
		// 		newLi.appendChild(checkBtn);
		// 		newLi.appendChild(delBtn);
		// 	}

		// 	checkBtn.addEventListener('click', function(){
		// 		const parent = this.parentNode;
		// 		parent.remove();
		// 		Completed.appendChild(parent);
		// 		checkBtn.style.display = 'none';
		// 	});

        //     //edit 
        //     const task_edit_el = document.createElement('button');
		// task_edit_el.classList.add('edit');
		// task_edit_el.innerText = 'Edit';
        // task_actions_el.appendChild(task_edit_el);

        // task_edit_el.addEventListener('click', (e) => {
		// 	if (task_edit_el.innerText.toLowerCase() == "edit") {
		// 		task_edit_el.innerText = "Save";
		// 		task_input_el.removeAttribute("readonly");
		// 		task_input_el.focus();
		// 	} else {
		// 		task_edit_el.innerText = "Edit";
		// 		task_input_el.setAttribute("readonly", "readonly");
		// 	}
		// });


		// 	delBtn.addEventListener('click', function(){
		// 		const parent = this.parentNode;
		// 		parent.remove();
		// 	});
		// }

       
        const input = document.querySelector('input');
const btn = document.querySelector('.addTask > button');
const notCompleted = document.querySelector('.notCompleted');
const completed = document.querySelector('.completed');

btn.addEventListener('click', addList);
input.addEventListener('keyup', (e)=>{
    (e.keyCode === 13 ? addList(e) : null);
})

function addList(e){
    const newLi = document.createElement('li');
    const checkBtn = document.createElement('button');
    const delBtn = document.createElement('button');
    const editBtn = document.createElement('button'); // Create a new button for editing

    checkBtn.innerHTML  = '<i class="fa fa-check"></i>';
    delBtn.innerHTML = '<i class="fa fa-trash"></i>';
    editBtn.innerText = 'Edit'; // Set the text content of the edit button

    newLi.textContent = input.value;
    input.value = '';

    newLi.appendChild(checkBtn);
    newLi.appendChild(delBtn);
    newLi.appendChild(editBtn); // Append the edit button to the task item's list element

    notCompleted.appendChild(newLi);

    checkBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
        completed.appendChild(parent);
        checkBtn.style.display = 'none';
    });

    delBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
    });

    editBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        const taskNameEl = parent.firstChild;
        const currentText = taskNameEl.textContent;
        const editText = editBtn.innerText;

        if (editText === 'Edit') {
            editBtn.innerText = 'Save';
            taskNameEl.contentEditable = true;
            taskNameEl.focus();
        } else {
            editBtn.innerText = 'Edit';
            taskNameEl.contentEditable = false;
            taskNameEl.blur();
            if (taskNameEl.textContent.trim() === '') {
                parent.remove();
            }
        }
    });
} // Add a closing brace for the addList function
