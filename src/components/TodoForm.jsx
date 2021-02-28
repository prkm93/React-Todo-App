import React, {useState} from 'react';
import TodoList from './TodoList';
import {TextField, Button, makeStyles} from '@material-ui/core';

function TodoForm() {

    const [list, setList] = useState([]);
    const [item, setItem] = useState('');

    const useStyles = makeStyles({
        textField:{
            width: "75%",
            margin:"10px 0"
        },
        btn_add:{
            margin:"13px"
        }
    })
    
    const handleInput = (e) => {
        let obj = {
            id: new Date().valueOf().toString(),
            task: e.target.value,
            status: false
        }
        setItem(obj); 
    }

    //*********** ADD ITEM TO LIST************ */
    const addItemHandler = (e) => {
        e.preventDefault();
        if(item!== ""){
            setList([...list, item]);
        }
        setItem("")
    }

    //*********** DLETE ITEM HANDLER *************** */
    const deleteItemHandler = (id) => {
        let tempList = list.filter((el) => el.id !== id);
        setList(tempList)
    }

    //************ TOGGLE STATUS HANDLER ************* */
    const statusHandler = (id) => {
        let newList = list.map(el => (el.id === id) ? {...el, status: !el.status} : el)
        setList(newList);
    }
    
    const classes  = useStyles();
    
    return (
      <>
        <h1 className="heading">Todo App</h1>
  
          <TextField 
            className={classes.textField}
            id="standard-secondary" 
            label="Todo" 
            color="secondary" 
            placeholder="Enter Todo"
            value={item && item.task}
            onChange={(e) => handleInput(e)}
         />
          <Button 
            variant="contained" 
            color="primary" 
            className={classes.btn_add} 
            onClick={(e) => addItemHandler(e)}
          >
            Add Todo
          </Button>
      
        <TodoList listItems={list} onDelete={deleteItemHandler} handleStatus={statusHandler}/>
      </>
    )
}

export default TodoForm
