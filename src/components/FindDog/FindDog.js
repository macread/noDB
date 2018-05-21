import React, { Component } from 'react';
import './FindDog.css';

export default class FindDog extends Component {

    constructor() {
        super()
            
        this.state = {
            dogName: '',
            caption: ''
        }

        //this.updateDogName = this.updateDogName(this)
        // this.updateCaption = this.updateCaption(this)
    }

    updateDogName(val){
         this.setState( {dogName: val} )
    }

    updateCaption(val){
        this.setState( {caption: val} )
    }

    addNewDog(url){
        this.props.saveDog(url, this.state.dogName, this.state.caption)
    }

    render() {
        return (
            <div className="FindDog">
                <img 
                    className="FindDog-image" 
                    src={this.props.randomDogURL} 
                    alt="random dog" 
                />

                <div className="FindDog-section">
                    <div className='FindDog-inputCol'>
                        <input 
                            type='' 
                            placeholder='Name this dog...' 
                            className='FindDog-input' 
                            onChange={ ( e ) => this.updateDogName( e.target.value ) }
                        />
                        <button 
                            type='' 
                            className='fetch' 
                            onClick={this.props.fetchRandomDog}>
                            Fetch
                        </button>
                    </div>

                    <div className='FindDog-inputCol'>
                        <input 
                            type='' 
                            placeholder='Caption the picture...' 
                            className='FindDog-input'
                            onChange={( e ) => this.updateCaption( e.target.value ) }
                        />
                        <button 
                            type='' 
                            className='save'
                            onClick={() => this.addNewDog(this.props.randomDogURL)}>
                            Save
                        </button>
                    </div> 
                </div>
            </div>
        )
    }
}