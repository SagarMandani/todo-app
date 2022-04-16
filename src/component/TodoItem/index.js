import React from 'react';
import { Image } from "react-native"
import styled from 'styled-components/native';
import Icons from '../../common/Icon';
import styles from './style';

/**
 * Common TodoItem Component
 */

const ButtonContainer = styled.TouchableOpacity`
  margin-bottom: 20px;
  padding-horizontal: 10px;
  padding: 5px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 16px;
  color: black;
  font-weight: 500;
  margin-left: 15px;
`;

const TodoItem = (props) => {
  const { item } = props;
    return (
        <ButtonContainer onPress={() => props.onPress()}>
            <Image
                source={item?.check ?Icons.check: Icons.uncheck}
                style={styles.checkbox} />
            <Text>{item?.title}</Text>
        </ButtonContainer>
    )
}

export default TodoItem;

