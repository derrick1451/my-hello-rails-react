import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../features/greeting/greetingSlice';
const Greetings = () => {
    const dispatch = useDispatch();
    const {greeting} = useSelector((state) => state.greeting.greeting);
    useEffect(() => {
        dispatch(fetchGreeting());
      }, [dispatch]);
    return (
        <h2>{greeting}</h2>
    )
    }
    export default Greetings;