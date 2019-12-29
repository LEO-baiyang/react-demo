import React, { Component } from "react"
import "./App.css"
export default class App extends Component {
  // state初始化的方式
  // 构造函数初始化
  // constructor() {
  //   // 必须在this之前调用super()
  //   super()
  //   this.state = {
  //     data: "2008",
  //     msg: "大头儿子小偷爸爸"
  //   }
  // }
  // 类属性的方式声明state
  state = {
    data: "2008",
    msg: "黑猫警长",
    title: ["Isssues", "Maketplace", "Pull request", "Explore"],
    desc: ""
  }
  handleTabs = (v) => {
    console.log("吾现在被点击了")
    this.setState({
      desc: v
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.data}</h1>
        <h1>{this.state.msg}</h1>
        <ul>
          {
            this.state.title.map((v, i) => {
              return <li key={i} onClick={this.handleTabs.bind(this, v)}>{v}</li>
            })
          }
        </ul>
        <div>
          {this.state.desc}
        </div>
      </div>
    )
  }
}