import React, { Component } from 'react';
import './Dog.css';

export default class Dog extends Component {
    constructor() {
    super()
        
        this.state = {
            dogID: 0,
            editing: false,
            dogName: '',
            caption: ''
        }
    }

editDog(id, name, caption){
    this.setState({
        dogID: id,
        dogName: name,
        caption: caption,
        editing: true
    })
}

updateDogName(val){
    this.setState( {dogName: val} )
}

updateCaption(val){
   this.setState( {caption: val} )
}

cancelEditDog() {
    this.setState({
        dogID: 0,
        editing: false
    })
}

saveDog(){
    this.props.updateDog(this.state.dogID, this.state.dogName, this.state.caption)
    this.setState({editing: false})
}

deleteDog(id) {
    this.props.deleteDog(id)
}

    render() {
        return (
            
            <div className='Dog'>
                <img src={ this.props.pictUrl } alt="of a dog" className="Dog-Image"/>

                {
                    this.state.editing
                    ? (
                        <div className='Dog-section'>
                                <span className="Dog-inputLabel">Name:</span>
                                <input type=''
                                    className='Dog-input' 
                                    value={this.state.dogName} 
                                    onChange={ ( e ) => this.updateDogName( e.target.value ) }
                                />
                                <span className="Dog-inputLabel">Caption:</span>
                                <input type='' 
                                    className='Dog-input' 
                                    value={this.state.caption} 
                                    onChange={( e ) => this.updateCaption( e.target.value ) }
                                />

                            <div className='Dog-buttons'>
                                <button type='' className='Dog-button' onClick={()=> this.cancelEditDog()}>Cancel</button>
                                <button type='' className='Dog-button' onClick={()=> this.saveDog()}>Save</button>
                            </div> 
                        </div>
    
                    ) : (
                        <div className='Dog-section'>
                            <span className="Dog-inputLabel">Name:</span>
                            <span className="Dog-input">{this.props.name}</span>
                            <span className="Dog-inputLabel">Caption:</span>
                            <span className="Dog-input">{this.props.caption}</span>

                            <div className='Dog-buttons'>
                                <button type='' className='Dog-button' onClick={()=> this.deleteDog(this.props.id)}>Remove</button>
                                <button type='' 
                                    className='Dog-button' 
                                    onClick={()=> this.editDog(this.props.id, this.props.name, this.props.caption)}>   
                                    Edit
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>

        )
    }
}