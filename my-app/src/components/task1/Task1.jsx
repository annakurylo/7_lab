import React from "react";
import Header from "./Header";
import Content from './Content'
import Image from './Image'
import "./styles/Task1.css";

export default function Task1() {
  return (
    <div>
      <div className="content">
        <Header />
        <Content/>
        <Image/>
      </div>
    </div>
  );
}
