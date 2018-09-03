import React from 'react';

const path = 'src/images/'

class Photo extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const { size, photo } = this.props
        const url = `url(${path}${photo})`
        return (
            <div className="user-image" style={{ width: this.props.size + 'px', height: this.props.size + 'px', backgroundImage: url }}></div>
        )
    }
}

export default Photo
