import React from 'react';
import { ImageBackground, StatusBar, StyleSheet } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import styled from '@emotion/native';

import { Registration } from '../../components/Registration';
import { Screen } from '../../components/Screen';

import bgImage from '../../assets/images/background.png';
import { colors } from '../../styles';

const BackgroundImage = styled(ImageBackground)`
  ${StyleSheet.absoluteFillObject};
`;

export function RegistrationScreen(props: NavigationScreenProps) {
  const createClick = () => {
    props.navigation.navigate('Intro');
  };
  return (
    <BackgroundImage source={bgImage} resizeMode="cover">
      <StatusBar
        translucent
        animated
        backgroundColor="rgba(0, 0, 0, 0.20)"
        barStyle="light-content"
      />
      <Screen testID="registrationScreen" backgroundColor={colors.transparent} paddingTop={60} margin={20}>
        <Registration createPress={createClick} goBack={()=>props.navigation.goBack()}/>
      </Screen>
    </BackgroundImage>
  );
}
