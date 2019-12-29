import React, { Component } from "react"
import "./App.css"
export default class App extends Component {
  render() {
    let props = {
      className: 'redCls'
    }
    let textItem = {
      className: 'textCls'
    }
    let content = {
      className: 'contentCls'
    }
    // 使用react创建一个DOM元素，并给其添加一个类名，这个类名定义在props对象中，再给其添加文本
    // return React.createElement("div", props, "今天天气真好！")
    return React.createElement("div", props, ["早晨起来打开窗，心情美美哒", React.createElement("div", textItem, "今天天气真好！"), React.createElement("div", content, "适合野餐")])
  }
}