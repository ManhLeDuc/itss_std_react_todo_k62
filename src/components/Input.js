import React, { useState } from 'react';
import { getKey } from "../lib/util";
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input( props ) {

  const [itemName, changeName] = React.useState("");

  return (
    <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.putItems(
              props.items.concat({ key: getKey(), text: itemName, done: false })
            );
            changeName("");
          }}
        >
          <input
            class="input"
            type="text"
            value={itemName}
            onChange={(e) => {
              changeName(e.target.value);
            }}
            placeholder="新しいToDo"
          ></input>
        </form>
      </div>
  );
}

export default Input;
