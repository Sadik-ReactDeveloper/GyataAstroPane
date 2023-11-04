import React from "react";

import "../../../assets/scss/pages/astrochat.scss";
class ChatAppMassage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: props,
    };
  }
  componentDidMount() {
    console.log(this.props);
    this.setState({ message: this.props });
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps.roomChatData.length); //16
    console.log(nextState); //15
    console.log(this.props.roomChatData.length);
    // nextProps.value !== this.props.roomChatData;

    if (nextProps.roomChatData.length !== nextState) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    return (
      <>
        {this.props.roomChatData?.length
          ? this.props.roomChatData
              .map((chat, index) => {
                return (
                  <>
                    {chat.type === "astrologer" ? (
                      <div class="message me">
                        <div class="message-body">{chat?.msg}</div>
                      </div>
                    ) : (
                      <div className="message">
                        <div class="message-body">{chat?.msg}</div>
                      </div>
                    )}
                  </>
                );
              })
              .reverse()
          : null}
      </>
    );
  }
}

export default ChatAppMassage;
