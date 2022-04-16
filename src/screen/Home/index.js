import React, { useState, useEffect } from "react";
import { View, FlatList, SafeAreaView, Image, ScrollView } from "react-native";
import styled from 'styled-components/native';
import { TodoItem } from '@component'
import { Icon } from "@common";
import { useToDoTaskState } from "@state";
import styles from "./style";

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const TextComponent = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const ButtonContainer = styled.TouchableOpacity`
    margin: 20px;
    padding: 15px;
    border-radius: 10px;
    background-color: rgb(38, 192, 110);
`;

const HeaderView = styled.View`
    flex-direction: row;
    padding: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
    border-bottom-color: gray;
    border-bottom-width: 1px;
    align-items: center;
`;

const HeaderTitle = styled.Text`
    flex: 1;
    font-size: 20px;
`;

const BtnTextComponent = styled.Text`
    font-size: 16px;
    text-align: center;
    color: white;
`;

/*========================================================
* function Name: Home screen design
* function Purpose: design todo list in Home screen.
* function Description: Home screen using design todo list.
*=====================================================*/

const Home = (props) => {
    //State variables
    const [todoTaskList, setTodoTaskList] = useState([]);
    const [state, { getTodo, changeTodoStatus }] = useToDoTaskState();

    useEffect(() => {
        getTodo([
            { title: 'Design Team meeting', deadline: "2022-04-21", start_time: "2022-04-14T13:23:30.822Z", end_time: "2022-04-14T11:54:30.822Z", reminder: "10", repeat: "Daily", check: true },
            { title: 'Making Wireframes', deadline: "2022-04-21", start_time: "2022-04-14T13:23:30.822Z", end_time: "2022-04-14T11:54:30.822Z", reminder: "10", repeat: "Daily", check: false },
            { title: 'Create UI elements', deadline: "2022-04-21", start_time: "2022-04-14T13:23:30.822Z", end_time: "2022-04-14T11:54:30.822Z", reminder: "10", repeat: "Daily", check: false },
            { title: 'Meeting with Murman Khvadadze', deadline: "2022-04-21", start_time: "2022-04-14T13:23:30.822Z", end_time: "2022-04-14T11:54:30.822Z", reminder: "10", repeat: "Daily", check: false }]);
    }, [])


    useEffect(() => {
        setTodoTaskList(state.toDoTask);
    }, [state.toDoTask]);

    const onChangeStatus = (item) => {
        changeTodoStatus(item);
    };

    let completeTaskList = todoTaskList.filter(item => item.check == true);
    let pendingTaskList = todoTaskList.filter(item => item.check == false);

    return (
        <Container>
            <SafeAreaView style={styles.flexOne}>
                <HeaderView>
                    <HeaderTitle>To-Do App</HeaderTitle>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={styles.menuIcon} source={Icon.search} resizeMode='contain' />
                        <Image style={styles.menuIcon} source={Icon.notification} resizeMode='contain' />
                        <Image style={styles.menuIcon} source={Icon.menu} resizeMode='contain' />
                    </View>
                </HeaderView>

                <View style={styles.container}>
                    <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
                        <View style={styles.subContainer}>
                            <TextComponent style={{ marginTop: 20 }}>Completed Tasks</TextComponent>
                            <FlatList
                                data={completeTaskList}
                                renderItem={({ item, index }) => <TodoItem item={item} onPress={() => onChangeStatus(item)} />}
                                keyExtractor={(item, index) => index.toString()}
                                scrollEnabled={false}
                            />
                            <TextComponent>Pending Tasks</TextComponent>
                            <FlatList
                                data={pendingTaskList}
                                renderItem={({ item, index }) => <TodoItem item={item} onPress={() => onChangeStatus(item)} />}
                                keyExtractor={(item, index) => index.toString()}
                                scrollEnabled={false}
                            />
                        </View>
                    </ScrollView>
                </View>

                <ButtonContainer onPress={() => props.navigation.navigate('AddToDo')}>
                    <BtnTextComponent>Add a Task</BtnTextComponent>
                </ButtonContainer>
            </SafeAreaView>
        </Container>
    );
};

export default Home;