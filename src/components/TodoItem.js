/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
import React, { useState } from 'react';
function TodoItem( {item} ) {
  
  const [clicked, setClicked] = useState(false);
  
  return (
    <label className={`panel-block ${item.done ? 'has-text-grey-light' : ''}`} >
    <input type="checkbox" defaultChecked={item.done} onClick={()=>{
    setClicked(!clicked);
    item.done=!clicked;
    }}/>
    {item.text}
    </label>
  );
  
  
}

export default TodoItem;