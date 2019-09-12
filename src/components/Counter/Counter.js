import React, {Component} from 'react';
import Image from "../Image/Image";
import gameImages from "../../images.json";
import "./style.css";


// Click score counter set to zero
export default class Counter extends Component {
    state = {
        counter: 0,
        gameImages,
        clickedImages: [],
        highScore: 0,
    };

    handleClick = (event) => {
        event.preventDefault();
        let imageId = event.target.id;
        console.log(imageId);
        if (this.state.clickedImages).includes(imageId) {
            alert("This image has been clicked already!");
            this.setState({
                counter: 0,
                clickedImages: []
            })
            if (this.state.highScore < this.state.counter) {
                this.setState ({
                    highScore: this.state.counter
                })
            }
        }
        else {
            this.setState({
                counter: this.state.counter + 1
            });
            this.handleImageRandomizer(gameImages);
        }
        this.state.clickedImages.push(imageId);
        console.log(this.state.clickedImages);
    };

    handleImageRandomizer = (arr) => {
        for (let i = arr.length -1; i>0; i--) {
            const j = Math.floor(Math.random()*(i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="counter">
                            <span id="click">Click: {this.state.counter}</span>
                            <span id="highScore">High Score: {this.state.highScore}</span>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        gameImages.map(image =>
                        <Image 
                        key={gameImages.id}
                        gameImages={gameImages.image}
                        id={gameImages.id}
                        handleClick={this.handleClick}
                        />
                        )
                    };
                </div>
            </div>
        )
    }
}