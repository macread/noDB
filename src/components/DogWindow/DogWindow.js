import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header/Header';
import Dog from './Dog/Dog';
import FindDog from '../FindDog/FindDog';

export default class DogWindow extends Component {
    constructor() {
        super()
        
        this.state = { 
                    dogs: [],
                    randomDogURL: 'https://images.dog.ceo/breeds/pembroke/n02113023_2054.jpg',
                    // lastID: 3,
                    newDogName: '',
                    baseURL: '/api/dogs'
                }
                
        this.fetchRandomDog = this.fetchRandomDog.bind(this)
        this.deleteDog = this.deleteDog.bind(this)
        this.saveDog = this.saveDog.bind(this)
        this.updateDog = this.updateDog.bind(this)
    }

    componentDidMount() {
        axios.get( this.state.baseURL ).then( results => {
            this.setState({ dogs: results.data });
        });
       
      }

    fetchRandomDog() {
        axios.get('https://dog.ceo/api/breeds/image/random')
                .then( results => { this.setState({ randomDogURL:results.data.message }) } )
    }

    deleteDog(id) {
        axios.delete( `${this.state.baseURL}/${id}`).then ( results=> {
            this.setState({ dogs: results.data})
        });
    }

    updateDog(id, updatedName, updatedCaption) {
        axios.post(`${this.state.baseURL}/${id}`,
        {name: updatedName,
        caption: updatedCaption})
        .then ( results=> {
            this.setState({ dogs: results.data})
        });
    }
 
    saveDog(newDogURL, newDogName, newDogCaption) {
        axios.post(`${this.state.baseURL}`,
        {url: newDogURL,
        name: newDogName,
        caption: newDogCaption})
        .then ( results=> {
            this.setState({ dogs: results.data})
        });

        // let newID = this.state.lastID + 1
        // let newDog = {id: newID, url: newDogURL, name: newDogName, caption: newDogCaption}
        // this.setState( 
        //     {
        //         dogs: [...this.state.dogs,newDog],
        //         lastID: newID
        //     }
        // )
    }

    render() {
        return (
            <div>
                <Header />
                <FindDog 
                    fetchRandomDog={this.fetchRandomDog} 
                    randomDogURL={this.state.randomDogURL} 
                    saveDog={this.saveDog}
                />
                <div>
                    {
                    this.state.dogs.map( dog => (
                        <Dog 
                            id={dog.id} 
                            key={dog.id} 
                            name={dog.name} 
                            pictUrl={dog.url} 
                            caption={dog.caption}
                            deleteDog={this.deleteDog}
                            updateDog={this.updateDog}
                        />
                    ))
                    }
                </div> 
            </div> 
        )
    }
}