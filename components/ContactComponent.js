import React, { Component } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Text, Card, Button, Icon } from "react-native";

class Contact extends Component {
  static navigationOptions = {
    title: "Contact Us",
  };

  sendMail() {
    MailComposer.composeAsync({
      recipients: ["thebeanroasters@gmail.com"],
      subject: "Inquiry",
      body: "To whom it may concern:",
    });
  }

  render() {
    return (
      <ScrollView>
        <Card title={"Contact Info"}>
          <Text>Phone: 575-527-5155</Text>
          <Button
            title="Send Email"
            buttonStyle={{ backgroundColor: "#5637DD", margin: 40 }}
            icon={
              <Icon
                name="envelope-o"
                type="font-awesome"
                color="#fff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            onPress={() => this.sendMail()}
          />
        </Card>
      </ScrollView>
    );
  }
}

export default Contact;
