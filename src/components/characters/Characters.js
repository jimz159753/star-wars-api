import React, { Component } from 'react'
import { List, Input } from 'antd';

export default class Characters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: '',
            peopleF: []
        }
        this.changeText = this.changeText.bind(this);
    }

    componentDidMount() {
        this.setState({peopleF:this.props.characters})
    }

    changeText(event){
        this.setState({
            filter: event.target.value
        })
    }

    render() {
        const { characters, films, setTab } = this.props
        const { filter } = this.state
        console.log('filter',filter)
        let data = characters.filter(p => p.eye_color === filter || p.gender === filter)
        console.log(data)
        return (
            <div>
                <div className='input-container'>
                    <Input className='filter-input' onChange={this.changeText} placeholder='eye_color, gender, films' size="large"/>
                </div>
                <List
                    size="large"
                    pagination={{
                        onChange: page => {
                        console.log(page);
                        },
                        pageSize: 8,
                    }}
                    dataSource={data.length === 0?characters:data}
                    renderItem={person => 
                        <List.Item>
                            <p className='title' >Name:</p><p className='answer' >{person.name}</p>  
                            <p className='title' >Eye color:</p><p className='answer' >{person.eye_color}</p>
                            <p className='title' >Gender:</p><p className='answer' >{person.gender}</p>
                            <p className='title' >Films:</p>{films.map((movie, index) => person.films.includes(movie.url)?<p className='answer' key={index}><a onClick={()=>setTab('1')}>{movie.title}</a></p>:null)}
                        </List.Item>}
                />
            </div>
        )
    }
}
