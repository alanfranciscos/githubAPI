import React, { Component } from 'react';

class ImageComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <img src={this.props.url} alt="imagem de perfil" style={
                    {
                    display: "flex",
                    margin: "20px auto",
                    borderRadius: "50%",
                    width: "50%"
                    }}/>
            </div>
        );
    }
}

export default ImageComponent;