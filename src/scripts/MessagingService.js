/* libraries */
import React from 'react';
import { connect } from 'react-redux'
import moment from 'moment';
import style from '../styles/base.scss';
/* reducers */
import { getUsers, getMessages } from './reducers/messages'
/* components */
import MessageForm from './MessageForm';

class MessagingService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           messages: this.props.messages,
        }
    }

    // update messages
    handleChange(val, userId) {
        if (val !== '') {
            const messages = this.state.messages
            const idx = messages.length - 1

            // define dateTime
            const newDateTime = new Date()

            // get last message with date
            const lastMessageDate = messages.length > 0 ? messages.filter(m => m.date !== null).slice(-1)[0] : null
            const newDate = moment(newDateTime).locale('fr').format('ll')
            const date = lastMessageDate && lastMessageDate.date === newDate ? null : newDate

            // get last message with time
            const lastMessageTime = messages.length > 0 ? messages.filter(m => m.time !== null).slice(-1)[0] : null
            const newTime = moment(newDateTime).format("HH:mm")
            const time = lastMessageTime && lastMessageTime.time === newTime ? null : newTime

            // push new values into array
            // const newMessages = [...messages, { userId, id: idx, time, message: val,}]
            messages.push({ userId, id: idx, date, time, message: val })

            // update states
            this.setState({
                messages,
            })

        }
        return null
    }

    render() {
        const { users } = this.props
        const { messages } = this.state
        return (
            <div className="container">
                <header>Test technique - iAdvize</header>
                <div className="container-form">
                    {users.map(user => <MessageForm key={user.id} user={user} messages={messages} change={this.handleChange.bind(this)}/>)}
                </div>
            </div>
        )
    }

}

export const mapStateToProps = (state) => ({
  messages: getMessages(state),
  users: getUsers(state),
})
export default connect(
  mapStateToProps,
)(
  MessagingService
)
