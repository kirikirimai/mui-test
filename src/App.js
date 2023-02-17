import "./App.css";
import React, { useState,useEffect } from "react";

import ModalBlock from "./components/ModalBlock"

function App() {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {

    const getParam= ()=>{
      var url = new URL(window.location.href);
        // URLSearchParamsオブジェクトを取得
        let params = url.searchParams;
        let p=false;

        if(params.has('id') ) {
          p=JSON.parse(params.get("id").toLowerCase());
          setOpen(p)
        }else{
          setOpen(false)
        }
      }
    getParam()
  },[])
  

  return (
    <div className="App">
      <h1>MUIテスト</h1>
        <ModalBlock flg={isOpen} />
      <hr/>
      <h2>コンポーネントから呼び出す</h2>
      {isOpen && <ModalBlock flg={isOpen} /> }
    </div>
  );
}


export default App;
