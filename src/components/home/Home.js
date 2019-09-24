import React, { Component } from 'react'
import { List } from 'antd';

export default class Home extends Component {
    render() {
        const { films, characters, setTab } = this.props;
        return (
            <div>
                <List
                    size="large"
                    dataSource={films}
                    renderItem={movie => 
                            <List.Item>
                                <p className='title' >Title:</p><p className='answer' >{movie.title}</p>  
                                <p className='title' >No. episode:</p><p className='answer' >{movie.episode_id}</p>
                                <p className='title' >Gender:</p><p className='answer' >{movie.director}</p>
                                <p className='title' >Characters:</p>{characters.map((person, index) => 
                                                                        person.films.includes(movie.url)?
                                                                                <p className='answer' key={index}><a onClick={()=>setTab('2')}>{person.name}</a></p>
                                                                            :
                                                                                null)}
                            </List.Item>}
                />
            </div>
        )
    }
}
