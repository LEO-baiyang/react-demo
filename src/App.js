// 引入依赖
import React, { Component, Fragment } from "react"
// 引入css文件
import "./App.css"
// 编写类组件，并暴露
export default class App extends Component {
  // 生命周期函数
  render() {
    let titles = ['Pull request', 'Isssues', 'Maketplace', 'explore']
    let is_boy = true
    function fn() {
      return "bilibili"
    }
    // return方法，返回一个结构标签
    return (
      // <div>
      //   <ul>
      //     <li>Pull request</li>
      //     <li>Isssues</li>
      //     <li>Maketplace</li>
      //     <li>explore</li>
      //   </ul>
      // </div>
      // <ul>
      //   {titles.map((v, i) => {
      //     return <li key={i}>{v}</li>
      //   })}
      //   {/* {titles.forEach((value, index) => {
      //     <li key={index}>{value}</li>
      //   })} */}
      // </ul>
      <div>
        <h1>
          蹦瞎卡拉卡
        </h1>
        <h2>
          {"蹦瞎卡拉卡"}
        </h2>
        <h1>{1 + 1}</h1>
        <h1>{is_boy ? 'Jack' : 'Rose'}</h1>
        <h1>{fn()}</h1>
        <h1>{is_boy}</h1>
      </div>
    )
    // return "汝妻吾养之，汝放心去"
  }
}