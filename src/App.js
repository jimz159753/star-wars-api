import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Tabs, Input } from 'antd';
import './App.css';
import Home from './components/home/Home';
import Characters from './components/characters/Characters';
import Axios from 'axios';

const { TabPane } = Tabs;

export default class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
          films: [],
          characters: [],
          tab: '1'
      }
      this.setTab = this.setTab.bind(this);
  }

  setTab(key){
    this.setState({
      tab: key
    })
  }

  componentDidMount() {
    Axios.get('https://swapi.co/api/films')
        .then(res => this.setState({films:res.data.results}))
    Axios.get('https://swapi.co/api/people')
        .then(res => this.setState({characters:res.data.results}))
  }

  render() {
    const { films, characters, tab } = this.state
    return (
      <div className="App">
        <Tabs defaultActiveKey="1" onChange={this.setTab} activeKey={tab}>
          <TabPane tab="Home" key="1">
            <Home characters={characters} films={films} setTab={this.setTab}/>
          </TabPane>
          <TabPane tab="People" key="2">
            <Characters characters={characters} films={films} setTab={this.setTab}/>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

