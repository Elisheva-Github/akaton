import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import {connect, useDispatch} from "react-redux";
import { previousLessonToServer } from '../../services/previousLessons';


const PreviousLessons = (props) => {


    const [lesss, setless] = useState();

    // const viewPreviousLessonsToServer = async () => {
    //     const res = await previousLessonToServer();

    // }

    useEffect(() => {
        // previousLessonToServer(userid) 
            // previousLessonToServer(student)
            debugger 
            previousLessonToServer(props.id) 

            // .then(data =>{debugger; (setless(data.result))})
            .then(data =>{
                
                console.log(data);
                 (setless(data))})
                



    }, [])

    return (<div>
        {/* <div>{
            lesss?.map(less=><div>
            {less?.numLesson?.numLesson}
            {less?.lessonName?.lessonName}
            {less?.file?.file}
            {less?.date?.date}
            {less?.notes?.notes}
            {less?.time?.time}
            </div>)}
        </div> */}
         {lesss?.numLesson?.numLesson}
        <h1>id: {props.id}</h1>
        <h1>fname: {props.fname}</h1>
    </div>
    )
}


const mapStateToProps = (state) => {
    debugger
    return {
        id: state.user?.user?.id,
        fname: state.user?.user?.firstName,

    };
  };
export default connect(mapStateToProps,{})(PreviousLessons) ;

