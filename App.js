import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Deck from './src/Deck'
import { DATA } from './src/common';
import { Card, Button } from 'react-native-elements';

export default class App extends React.Component {

  renderCard(item) {
    return (
      <Card
        key={item.id}
        title={item.text}
        image={{ uri: item.uri }}
      >
        <Text>Some text placed on swapping card.</Text>
        <Button
          icon={{ name: 'search' }}
          backgroundColor="#03A9F4"
          title="View it now!">
        </Button>
      </Card>

    )
  }

  renderNoMoreCards() {
    return (
      <Card title="All Done!">
        <Text style={{ marginBottom: 10 }}>There is no more cards here!</Text>
        <Button
          backgroundColor="#03A9F4"
          title="Get more!" />
      </Card>
    )
  }

  render() {
    console.log('DATA', DATA);
    return (
      <View style={styles.container}>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
