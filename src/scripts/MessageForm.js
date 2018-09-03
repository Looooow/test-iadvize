import React from 'react';
import Photo from './Photo';

class MessageForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: ''};
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    // add message with enter
    onEnterPress(e) {
      if(e.keyCode == 13 && e.shiftKey == false) {
        e.preventDefault()
        this.props.change(e.target.value, this.props.user.id)
        this.setState({value: ''})
      }
    }

    // add message with click
    onClick() {
        this.props.change(this.state.value, this.props.user.id)
        this.setState({value: ''})
    }

    render() {
        const { user, messages } = this.props
        const { value } = this.state
        return (
            <div className="form">
                <div className="header-name">
                    <Photo photo={user.photo} size={30} />
                    <h1>{user.name}</h1>
                </div>
                <div className="list-messages">{messages.length > 0 && messages.map((m, i) => {
                    const className = user.id === m.userId ? 'my-messages' : 'another-messages'
                    return [
                        m.date && <div key={i + '_0'} className="time"><small>{m.date + ' ' + m.time}</small></div>,
                        m.date === null && m.time && <div key={i + '_1'} className="time"><small>{m.time}</small></div>,
                        <div  key={i + '_2'} className={className} key={i}>{
                            m.message.split('\n').map((line, i) => (i === 0 ? line : [<br/>, line]))}
                        </div>,]
                })}</div>
                <div className="container-input">
                    <textarea onKeyDown={e => this.onEnterPress(e)} value={value} placeholder="Tapez votre message" onChange={e => this.handleChange(e)}></textarea>
                    <button className="btn" type="submit" onClick={() => this.onClick()}>
                    <span className="mdi mdi-send"></span>
                  </button>
                </div>
            </div>
        )
    }
}

export default MessageForm
