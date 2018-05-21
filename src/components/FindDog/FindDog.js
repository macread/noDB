import React, { Component } from 'react';
import './FindDog.css';

export default class FindDog extends Component {

    constructor() {
        super()
            
        this.state = {
            dogName: '',
            caption: ''
        }
    }

    updateDogName(val){
         this.setState( {dogName: val} )
    }

    updateCaption(val){
        this.setState( {caption: val} )
    }

    addNewDog(url){
        this.props.saveDog(url, this.state.dogName, this.state.caption)
        this.setState({
            dogName: "",
            caption: ""
        })
        this.refs.dogName.value=''
        this.refs.caption.value=''
    }

    render() {
        return (
            <div className="FindDog">
                <div className="FindDog-randomDog">
                    <button type='' className=''>
                        <img 
                            className="FindDog-image" 
                            src={this.props.randomDogURL} 
                            alt="random dog" 
                            onClick={this.props.fetchRandomDog}
                        />
                    </button>
                    <div className="FindDog-clickMe">Click on picture for a random dog.</div>
                </div>

                <div className="FindDog-section">
                    <div className='FindDog-inputCol'>
                        <input 
                            type='' 
                            placeholder='Name this dog...' 
                            className='FindDog-input' 
                            ref="dogName"
                            onChange={ ( e ) => this.updateDogName( e.target.value ) }
                        />
                    </div>

                    <div className='FindDog-inputCol'>
                        <input 
                            type='' 
                            placeholder='Caption the picture...' 
                            className='FindDog-input'
                            ref="caption"
                            onChange={( e ) => this.updateCaption( e.target.value ) }
                        />
                    </div> 
                    <button 
                        type='' 
                        className='save'
                        onClick={() => this.addNewDog(this.props.randomDogURL)}>
                        Save
                    </button>
                </div>
            </div>
        )
    }
}