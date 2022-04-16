import React, { useState } from 'react';
import { SafeAreaView, View, Text, ScrollView, TouchableOpacity, Keyboard, Alert, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Dropdown } from 'react-native-element-dropdown';
import moment from 'moment'
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { InputWithIcon } from '@component'
import { Icon } from "@common";
import { useToDoTaskState } from "@state";
import styles from './style';

/*========================================================
* function Name: AddToDo screen design
* function Purpose: using AddToDo screen design.
* function Description: AddToDo screen using add form and other component.
*=====================================================*/

const ButtonContainer = styled.TouchableOpacity`
    margin: 20px;
    padding: 15px;
    border-radius: 10px;
    background-color: rgb(38, 192, 110);
`;

const TextComponent = styled.Text`
    font-size: 16px;
    text-align: center;
    color: white;
`;

const HeaderView = styled.View`
    flex-direction: row;
    padding-left: 10px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom-color: gray;
    border-bottom-width: 1px;
    align-items: center;
`;

const HeaderTouchableBack = styled.TouchableOpacity`
    padding: 10px;
    padding-right: 15px;
`;

const HeaderBackImg = styled.Image`
    height: 16px;
    width: 16px;    
`;

const HeaderTitle = styled.Text`
    flex: 1;
    font-size: 20px;
`;

const AddToDo = (props) => {

    const reminderData = [
        { label: '10 minutes early', value: '10' },
        { label: '30 minutes early', value: '30' },
        { label: '45 minutes early', value: '45' },
        { label: '1 hourly early', value: '60' },
        { label: '3 hourly early', value: '180' },
        { label: '6 hourly early', value: '360' },
        { label: '9 hourly early', value: '540' },
        { label: '12 hourly early', value: '720' },
        { label: '24 hourly early', value: '1440' },
    ]

    const repeatData = [
        { label: 'Daily', value: 'Daily' },
        { label: 'Weekly', value: 'Weekly' },
        { label: 'Monthly', value: 'Monthly' },
        { label: 'Yearly', value: 'Yearly' },
    ]

    //State variables
    const [title, setTitle] = useState('');
    const [deadline, setDeadline] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());
    const [selectedRemind, setSelectedRemind] = useState('10');
    const [selectedRepeat, setSelectedRepeat] = useState('Daily');
    const [startTimeModel, setStartTimeModel] = useState(false);
    const [deadLineModel, setDeadLineModel] = useState(false);

    const [endTimeModel, setEndTimeModel] = useState(false);
    const [isRemindFocus, setIsRemindFocus] = useState(false);
    const [isRepeatFocus, setIsRepeatFocus] = useState(false);
    const [state, { addTodo }] = useToDoTaskState();

    const setStartDate = (event, date) => {
        setStartTimeModel(false);
        setStartTime(date);
    };

    const setDeadLineDate = (event, date) => {
        setDeadLineModel(false);
        setDeadline(date);
    };

    const setEndDate = (event, date) => {
        setEndTimeModel(false);
        setEndTime(date);
    };

    const isValid = () => {
        let errorStatus = true;
        let error = ''
        if (!title) {
            error = 'Please enter title';
            errorStatus = false;
        } else if (!deadline) {
            error = 'Please select deadline date';
            errorStatus = false;
        } else if (!startTime) {
            error = 'Please select the start Time';
            errorStatus = false;
        } else if (!endTime) {
            error = 'Please select the end Time';
            errorStatus = false;
        } else if (!selectedRemind) {
            error = 'Please select the remind time';
            errorStatus = false;
        } else if (!selectedRepeat) {
            error = 'Please select repeat type';
            errorStatus = false;
        }
        if (!errorStatus) {
            Alert.alert('ToDo App', error)
        }
        return errorStatus;
    }

    const onAddTask = () => {
        if (isValid()) {
            Keyboard.dismiss();
            let obj = {
                title,
                deadline,
                start_time: startTime,
                end_time: endTime,
                reminder: selectedRemind,
                repeat: selectedRepeat,
                check: false
            }
            addTodo(obj, () => props.navigation.goBack());
        }
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.flexOne}>
                <HeaderView>
                    <HeaderTouchableBack onPress={() => props.navigation.goBack()}>
                        <HeaderBackImg source={Icon.leftArrow} />
                    </HeaderTouchableBack>
                    <HeaderTitle>Add Task</HeaderTitle>
                </HeaderView>
                <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
                    <View style={styles.boxContainer}>
                        <Text style={styles.normalText}>Title</Text>
                        <InputWithIcon
                            autoCapitalize={`none`}
                            autoFocus={false}
                            placeholder={'Design team meeting'}
                            value={title}
                            onChangeHandler={(text) => setTitle(text)} />
                    </View>

                    <View style={styles.boxContainer}>
                        <Text style={styles.normalText}>Deadline</Text>
                        <TouchableOpacity onPress={() => setDeadLineModel(true)} pointerEvents="none">
                            <InputWithIcon
                                autoCapitalize={`none`}
                                autoFocus={false}
                                placeholder={moment(deadline).format("YYYY-MM-DD")}
                                editable={false}
                                iconUrl={Icon.down}
                                iconStyle={styles.timeIconStyle} />
                        </TouchableOpacity>
                    </View>

                    {deadLineModel &&
                        <View style={Platform.OS == 'ios' ? styles.pickerView : null}>
                            <DateTimePicker
                                mode="date"
                                value={deadline}
                                onChange={setDeadLineDate}
                            />
                        </View>
                    }

                    <View style={styles.boxContainer}>
                        <View style={styles.timeView}>
                            <View style={styles.startTimeView}>
                                <Text style={styles.normalText}>Start time</Text>
                                <TouchableOpacity onPress={() => setStartTimeModel(true)} pointerEvents="none">
                                    <InputWithIcon
                                        autoCapitalize={`none`}
                                        autoFocus={false}
                                        placeholder={moment(startTime).format("h:mm a")}
                                        editable={false}
                                        iconUrl={Icon.clock}
                                        iconStyle={styles.timeIconStyle} />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.endTimeView}>
                                <Text style={styles.normalText}>End time</Text>
                                <TouchableOpacity onPress={() => setEndTimeModel(true)} pointerEvents="none">
                                    <InputWithIcon
                                        autoCapitalize={`none`}
                                        autoFocus={false}
                                        placeholder={moment(endTime).format("h:mm a")}
                                        editable={false}
                                        iconUrl={Icon.clock}
                                        iconStyle={styles.timeIconStyle} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {startTimeModel &&
                        <View style={Platform.OS == 'ios' ? styles.pickerView : null}>
                            <DateTimePicker
                                mode="time"
                                value={startTime}
                                onChange={setStartDate}
                            />
                        </View>
                    }
                    {endTimeModel &&
                        <View style={Platform.OS == 'ios' ? styles.pickerView : null}>
                            <DateTimePicker
                                mode="time"
                                value={endTime}
                                onChange={setEndDate}
                            />
                        </View>
                    }

                    <View style={styles.boxContainer}>
                        <Text style={styles.normalText}>Remind</Text>
                        <Dropdown
                            style={Platform.OS == 'ios' ? styles.iosDropUpDownStyle : styles.androidDropUpDownStyle}
                            data={reminderData}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={'10 minutes early'}
                            value={selectedRemind}
                            selectedTextStyle={{ color: 'rgba(34, 34, 34, 0.3)' }}
                            iconColor={'rgba(34, 34, 34, 0.3)'}
                            onFocus={() => setIsRemindFocus(true)}
                            onBlur={() => setIsRemindFocus(false)}
                            onChange={item => {
                                setSelectedRemind(item.value);
                                setIsRemindFocus(false);
                            }}
                        />
                    </View>

                    <View style={styles.boxContainer}>
                        <Text style={styles.normalText}>Repeat</Text>
                        <Dropdown
                            style={Platform.OS == 'ios' ? styles.iosDropUpDownStyle : styles.androidDropUpDownStyle}
                            data={repeatData}
                            maxHeight={215}
                            labelField="label"
                            valueField="value"
                            placeholder={'Daily'}
                            value={selectedRepeat}
                            iconColor={'rgba(34, 34, 34, 0.3)'}
                            selectedTextStyle={{ color: 'rgba(34, 34, 34, 0.3)' }}
                            onFocus={() => setIsRepeatFocus(true)}
                            onBlur={() => setIsRepeatFocus(false)}
                            onChange={item => {
                                setSelectedRepeat(item.value);
                                setIsRepeatFocus(false);
                            }}
                        />
                    </View>
                </ScrollView>

                <ButtonContainer onPress={() => onAddTask()}>
                    <TextComponent style={{ color: 'white' }}>Create a Task</TextComponent>
                </ButtonContainer>

            </SafeAreaView>
        </View>
    );
};

export default AddToDo;

AddToDo.propTypes = {
    title: PropTypes.string,
    deadline: PropTypes.any,
    startTime: PropTypes.any,
    endTime: PropTypes.any,
    selectedRemind: PropTypes.string,
    selectedRepeat: PropTypes.string,
    startTimeModel: PropTypes.bool,
    endTimeModel: PropTypes.bool,
    isRemindFocus: PropTypes.bool,
    isRepeatFocus: PropTypes.bool,
}