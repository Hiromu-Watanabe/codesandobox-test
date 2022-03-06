import "./styles.css";

// TODO追加イベント
document
  .getElementById("add_button")
  .addEventListener("click", () => onClickAdd());

// 【メソッド】 未完了TODOを追加
const onClickAdd = () => {
  // テキストボックスを取得し、ボタンを押すと値を初期化
  const inputText = document.getElementById("add_text").value;
  document.getElementById("add_text").value = "";

  // 未完了のTODO作成
  createImconpToDo(inputText);
};

// 【メソッド】 未完了のTODO作成 （または完了したTODOから戻す）
const createImconpToDo = (inputText) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // 完了・削除ボタン生成
  const complete_button = document.createElement("button");
  const delete_button = document.createElement("button");
  complete_button.innerText = "完了";
  delete_button.innerText = "削除";

  // divの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(complete_button);
  div.appendChild(delete_button);

  // 未完了のリストに追加
  document.getElementById("imconplete-list").appendChild(div);

  // 完了ボタンにイベント追加
  complete_button.addEventListener("click", () => {
    onClickComplete(li);
    div.remove();
  });
  // 削除ボタンにイベント追加
  delete_button.addEventListener("click", () => {
    div.remove();
  });
};

// 【メソッド】 完了したTODO作成
const onClickComplete = (argument_li) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // 戻すボタンを生成
  const back_text = "戻す";
  const back_button = document.createElement("button");
  back_button.innerText = back_text;

  // divの子要素に各要素を設定
  div.appendChild(argument_li);
  div.appendChild(back_button);

  // TODO生成
  document.getElementById("complete-list").appendChild(div);

  // 戻すボタンにイベント追加
  back_button.addEventListener("click", () => {
    // 未完了のTODOに移動 (完了したTODOからは削除)
    createImconpToDo(argument_li.innerText);
    div.remove();
  });
};
