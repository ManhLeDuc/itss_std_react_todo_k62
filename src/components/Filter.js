/* 
  【Filterコンポーネント】
　・該当するTodoをステータス毎にで分けてリスト表示する
　・タブで表示する
　・サポートするステータスは「すべて」「未完了」「完了済み」
*/
import React, { useState } from "react";
function Filter(props) {
  const [activeTabIndex, changeTab] = React.useState(0);

  return (
    <div className="tabs is-centered">
      <ul>
        <li
          className={`${activeTabIndex == 0 ? `is-active` : ""}`}
          onClick={() => {
            changeTab(0);
            props.toggle(0);
          }}
        >
          <a>すべて</a>
        </li>
        <li
          className={`${activeTabIndex == 1 ? `is-active` : ""}`}
          onClick={() => {
            changeTab(1);
            props.toggle(1);
          }}
        >
          <a>未完了</a>
        </li>
        <li
          className={`${activeTabIndex == 2 ? `is-active` : ""}`}
          onClick={() => {
            changeTab(2);
            props.toggle(2);
          }}
        >
          <a>完了済み</a>
        </li>
      </ul>
    </div>
  );
}

export default Filter;
