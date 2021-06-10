import React from 'react';
import { previousLessonToServer } from '../../services/previousLessons';


const s_previousLessons = () => {

    const viewPreviousLessonsToServer = async () => {
        let res = '';
        res = await previousLessonToServer();
        console.log("previousLessonToServer",res);
    }
    return (<div>
        <div>
            {viewPreviousLessonsToServer()}
        </div>
    </div>
    )
}

export default s_previousLessons;