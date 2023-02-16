import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  // const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      
      variant="ghost"
      color="current"
      onClick={toggleColorMode}
      pos="fixed"
      top={"4"}                           //this 4 is their unit, which is typically equal to 16px
      right={"4"}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};

export default ColorModeSwitcher;