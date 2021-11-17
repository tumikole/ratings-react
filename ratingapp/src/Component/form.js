import React, { Component } from 'react'
import RatingPopUp from './ratingPopUp';

export default class form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            ratings: ""
        }

        this.handleRatingsChange = this.handleRatingsChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleRatingsChange = (event) => {
        this.setState({
...this.state, [event.target.name]: event.target.value
        })
    }

handleSubmit = (event) => {
    event.preventDefault();
    const { ratings } = this.state;
    let newState = {
        ratings
    }
    
    if (ratings) {
        
        this.setState({
          list: [...this.state.list, newState]
          
        });
        this.setState({
            name: "",
          });

}
}
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
<label>ratings
<input type="number" name="ratings" value={this.state.ratings} onChange={this.handleRatingsChange}/>

</label>

<input type="submit" value="Save" />

                </form>

                <RatingPopUp  list={this.state.list}/>
            </div>
        )
    }
}
