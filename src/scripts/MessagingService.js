import React from 'react';
import moment from 'moment';
import MessageForm from './MessageForm';
import style from '../styles/base.scss';

class MessagingService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { id: 'user1', name: 'Lily Peters', photo: 'lily.jpg' },
                { id: 'user2', name: 'Molly Bailey', photo: 'molly.jpg' }
            ],
            messages: []
        }
    }

    handleChange(val, userId) {
        if (val !== '') {
            const messages = this.state.messages
            const idx = messages.length - 1
            // get last message with time
            const lastMessage = messages.length > 0 ? messages.filter(m => m.time !== null).slice(-1)[0] : null

            // define dateTime
            const newDate = new Date()
            const newTime = moment(newDate).format("HH:mm")
            const time = lastMessage && lastMessage.time === newTime ? null : newTime

            // push new values into array
            // const newMessages = [...messages, { userId, id: idx, time, message: val,}]
            messages.push({ userId, id: idx, time, message: val })

            // update state
            this.setState({
                messages,
            })
        }
        return null
    }

    render() {
        const { users, messages } = this.state
        return (
            <div className="container">
                <header>Test technique - iAdvize</header>
                <div className="container-form">
                    {users.map(user => <MessageForm user={user} messages={messages} change={this.handleChange.bind(this)}/>)}
                </div>
            </div>
        )
    }

}

export default MessagingService
