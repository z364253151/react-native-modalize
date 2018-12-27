import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';

import Footer from '../../components/footer/Footer';

import { MODAL_DEFAULT, MODAL_FIXED, MODAL_SNAPPING, MODAL_ABSOLUTE, MODAL_INPUT } from '..';

interface ILink {
  id: string;
  name: string;
}

const Modal = () => {
  const onOpen = (name: string) => {
    Navigation.showOverlay({
      component: {
        name,
        options: {
          overlay: { interceptTouchOutside: false },
        },
      },
    });
  };

  const renderButtons = (links: Array<ILink>) => {
    return links.map(({ id, name }, i) => (
      <TouchableOpacity
        key={i}
        style={s.app__button}
        onPress={() => onOpen(id)}
        activeOpacity={0.9}
      >
        <Text style={s.app__text}>{name}</Text>
      </TouchableOpacity>
    ));
  }

  return (
    <View style={s.app}>
      {renderButtons([
        { id: MODAL_DEFAULT, name: 'Modal with a default content' },
        { id: MODAL_FIXED, name: 'Modal with a fixed content' },
        { id: MODAL_SNAPPING, name: 'Modal with a snapping list' },
        { id: MODAL_ABSOLUTE, name: 'Modal with an absolute header' },
        { id: MODAL_INPUT, name: 'Modal with an input' },
      ])}

      <Footer />
    </View>
  );
}

const s = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    padding: 15,

    backgroundColor: '#fafafa',
  },

  app__button: {
    paddingVertical: 15,
    marginBottom: 15,

    width: 240,

    backgroundColor: '#333',
    borderRadius: 6,
  },

  app__text: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Modal;
