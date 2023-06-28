import React, { useState } from 'react';

export const AddTodo = (props) => {
 const [title,setTitle]=useState("");
 const [desc, setDesc] = useState("");

 const submit=(e)=>{
    e.preventDefault();
    if(!title || !desc){
        alert("Title and description can not be blank")
    }
    else{
        props.addTodo(title,desc);
        setTitle("");
        setDesc("");
    }
    
 }

  return (
    <div className="container my-3">
        <h3>Add a Todo</h3>
        <form onSubmit={submit}>
            <div className="form-group">
                <label htmlFor="title">Todo Title</label>
                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter title"/>
              
            </div>
            <div className="form-group">
                <label htmlFor="desc">Todo Description</label>
                <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" placeholder="Description"/>
            </div>
            <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
</form>
    </div>
  )
}
