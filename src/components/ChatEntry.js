import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';

// BreakfastList.js or Breakfast.js?
// messages.json is breakfastData? yes
// Start at Step 8 in notes
const ChatEntry = (props) => {
  const id = props.id;
  const sender = props.sender;
  const body = props.body;
  const timeStamp = props.timeStamp;

  let time = new Date(timeStamp);
  let difference = 2022 - time.getFullYear();

  if (id % 2 === 0) {
    return (
      <div className="chat-entry remote">
        <h2 className="entry-name">{sender}</h2>
        <section className="entry-bubble">
          <p>{body}</p>
          <p className="entry-time">{difference} years ago</p>
          <button className="like">🤍</button>
        </section>
      </div>
    );
  } else {
    return (
      <div className="chat-entry local">
        <h2 className="entry-name">{sender}</h2>
        <section className="entry-bubble">
          <p>{body}</p>
          <p className="entry-time">{difference} years ago</p>
          <button className="like">🤍</button>
        </section>
      </div>
    );
  }
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default ChatEntry;
