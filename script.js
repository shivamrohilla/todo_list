 
 import './style.css'

 let listTasks = $('#listTasks')
 let btnAdd = $('#btnAdd')
 let btnClear = $('#btnClear')
 let inpnewTask = $('#inpnewTask')
 let btnDel = $('#btnDel')
 let btnSort = $('#btnSort')

 function additem(){

    if (inpnewTask.val()==""){

        return
    }

    let listItem = $('<li></li>',{

        'class' : "list-group-item" ,    
        text : inpnewTask.val()
    })
    
    listItem.click(() => {
    
        listItem.toggleClass('done')
    })
        console.log(inpnewTask.val());
    
        inpnewTask.val("") 
    
        listTasks.append(listItem)
    
 }

 function delTasks(){

    $('#listTasks .done').remove();
 }

 function sortTasks(){

    $('#listTasks .done').appendTo(listTasks)
    // console.log("DELETE") 
 }

 inpnewTask.keypress((e) => {

    if(e.which == 13){

        additem()
    }
 })

btnAdd.click(() => {


    additem()
})

btnClear.click(() => inpnewTask.val("") )
btnDel.click(delTasks)
btnSort.click(sortTasks)