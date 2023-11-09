import React, {useState}from "react";

const AddTodo = ({onAdd}) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if(!text){    
      alert('Please add todo.')
      return;
    }
    onAdd(text);
    setText('')
  };
  return (
    <form style={{padding:'10px'}} onSubmit={onSubmit} method="POST">
      <input type="text" placeholder="Add todo"  value={text} onChange={(e) => setText(e.target.value)} style={{width:'100%',height:'30px', padding:'5px'}}/>
      <button className="btn" style={{backgroundColor:'green', width:'100%',margin:'10px 0'}}>Save</button>
    </form>)
};

export default AddTodo;
