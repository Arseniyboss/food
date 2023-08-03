import {useState} from 'react';
import {
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native/types';

type KeyPressType = NativeSyntheticEvent<TextInputKeyPressEventData>;

type ReturnValues = {
  handleKeyPress: (e: KeyPressType) => void;
  formatCardNumber: (value: string) => string;
  formatExpiryDate: (value: string) => string;
};

export const usePaymentForm = (): ReturnValues => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleKeyPress = (e: KeyPressType) => {
    if (e.nativeEvent.key === 'Backspace') {
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }
  };

  const formatCardNumber = (value: string) => {
    if (
      (value.length === 4 || value.length === 9 || value.length === 14) &&
      !isEditing
    ) {
      return value + ' ';
    }
    return value;
  };

  const formatExpiryDate = (value: string) => {
    if (value.length === 2 && !isEditing) {
      return value + '/';
    }
    if (value.length === 2) {
      return value[0];
    }
    return value;
  };

  return {handleKeyPress, formatCardNumber, formatExpiryDate};
};
