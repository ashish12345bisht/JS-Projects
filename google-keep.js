const addButton = document.querySelector(".add");
const updateLSData=()=>{
    const textareaData=document.querySelectorAll('textarea');
    const notes=[];
    textareaData.forEach((note)=>{
        return notes.push(note.value);
    })
    localStorage.setItem('notes', JSON.stringify(notes));
}
const addNewNote = (text="")=>{
    const note=document.createElement('div');
    const notes1=document.querySelector('.notes');
    note.classList.add("note");
    console.log(text);
    const htmlData=`
    <div>
        <button class="edit"><i class="fas fa-edit fa-2x"></i></button>
        <button class="delete"><i class="far fa-trash-alt fa-2x"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden" }"></div>
    <textarea class="${text ? "hidden" : "" }"></textarea>
    `;
    note.insertAdjacentHTML('afterbegin',htmlData);

    const edit=note.querySelector(".edit");
    const todelete=note.querySelector(".delete");
    const main=note.querySelector(".main");
    const textarea=note.querySelector("textarea");
    todelete.addEventListener('click',()=>note.remove());
    textarea.value=text;
    main.innerHTML=text;
    edit.addEventListener('click',()=>{
        main.classList.toggle("hidden");
        textarea.classList.toggle("hidden");
    })
    textarea.addEventListener('change',(event)=>{
        const value=event.target.value;
        main.innerHTML=value;
        updateLSData();
    })
    notes1.appendChild(note);
}
const notes = JSON.parse(localStorage.getItem('notes'));
if(notes){
    notes.forEach((note)=>addNewNote(note));
}
addButton.addEventListener('click',()=>addNewNote());