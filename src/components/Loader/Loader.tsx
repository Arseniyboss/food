import React, {useRef, useEffect} from 'react';
import {Animated, Easing} from 'react-native';
import {CenterContainer} from '../../styles/Global';
import {LoaderWrapper, LoaderComponent} from './Styles';

const startLoadingAnimation = (rotationDegree: Animated.Value): void => {
  Animated.loop(
    Animated.timing(rotationDegree, {
      toValue: 360,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start();
};

const Loader = () => {
  const rotationDegree = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startLoadingAnimation(rotationDegree);
  }, [rotationDegree]);
  return (
    <CenterContainer>
      <LoaderWrapper
        style={{
          transform: [
            {
              rotateZ: rotationDegree.interpolate({
                inputRange: [0, 360],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
        }}>
        <LoaderComponent />
      </LoaderWrapper>
    </CenterContainer>
  );
};

export default Loader;
