import { useState } from "react";
import "./styles.css";

// セレクトボックス
const InputSelectBox = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className="App">
      <p>
        現在選択されている値：
        <b>{selectedValue}</b>
      </p>

      <select value={selectedValue} onChange={handleChange}>
        <option value="html">html</option>
        <option value="go">go</option>
        <option value="javascript">javascript</option>
        <option value="typescript">typescript</option>
      </select>
    </div>
  );
};

// 入力フォーム
const InputText = () => {
  // 入力中のテキスト状態 InputTextValue と
  // InputTextValue の状態を更新する関数 setInputTextValue
  // const [状態変数, 状態を変更するための関数] = useState(状態の初期値);

  const [inputTextValue, setInputTextValue] = useState("");

  // 入力ボタンを click したときのテキスト状態 text と
  // text の状態を更新する関数 setText

  const [text, setText] = useState("javascript");

  const handleChange = (e) => setInputTextValue(e.target.value);

  const handleClick = () => {
    setText(inputTextValue);
    setInputTextValue("");
  };

  return (
    <div className="App">
      <h1>I love {text}</h1>
      <input type="text" value={inputTextValue} onChange={handleChange} />
      <input type="button" value="入力" onClick={handleClick} />
    </div>
  );
};

// hello react を出力
const Hello = () => {
  const isReact = false;

  return <p>{isReact || "hello react"}</p>;
};

// key 属性がないとエラーが発生
const ListItems = () => {
  const numbers = [2, 4, 6];
  const items = numbers.map((item) => <li key={item.toString()}>{item}</li>);

  return <ul>{items}</ul>;
};

const handleClick = (e) => {
  console.log(e.target.value);
};

// ボタンを押すと console.log が発火;
const SampleButton = () => {
  return <input type="button" value="value" onClick={handleClick} />;
};

// app コンポーネントの戻り値を <> コンポーネントとした
export default function App() {
  return <InputSelectBox />;
}
