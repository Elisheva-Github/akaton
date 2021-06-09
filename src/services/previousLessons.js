export const previousLessonToServer = () => {
    return fetch(`http://localhost:3000/previousLessons`)
        .then((res) => res.json())
        .then((data) => {
            return data;
        }
        )
        .catch((err) => {
            console.log("error", err);
        });
}
