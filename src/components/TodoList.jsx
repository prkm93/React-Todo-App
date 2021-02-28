import React from 'react'
import {Paper, Button, Checkbox, Chip, Typography, makeStyles} from '@material-ui/core';

function TodoList({listItems, onDelete, handleStatus}) {

    const useStyles = makeStyles({
        btn_chip: {
            margin:"auto 1em"
        },
        btn_chip_done:{
            margin:"auto 1em",
            background:"rgb(23, 221, 23)",
            color: "rgb(59, 43, 204)"
        },
        btn_delete:{
            padding: "3px"
        }
    });

    const classes = useStyles();
    
    return (
        <div>
            {
                listItems && Array.isArray(listItems) && listItems.length ? 
                listItems.map((el, i) => {
                    return (
                        <Paper elevation={3} key={el.id} className="paper_item">
                            <Checkbox
                                checked={el.status}
                                color="primary"
                                id={el.id}
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                                onChange={() => handleStatus(el.id)}
                            />
                            <Typography variant="body1" gutterBottom className="paper_content">
                                {el.task}
                            </Typography>
                            <Chip
                                className={el.status ? classes.btn_chip_done : classes.btn_chip }
                                label={el.status ? "done" : "pending"}
                                clickable
                                color="primary"
                                variant="outlined"
                            />
                            <Button 
                                color="secondary"
                                disabled = {!el.status} 
                                className={classes.btn_delete}
                                onClick={() => onDelete(el.id)}
                            >
                                Delete
                            </Button>
                        </Paper>
                    )
                }) : null
            }   
        </div>
    )
}

export default TodoList
