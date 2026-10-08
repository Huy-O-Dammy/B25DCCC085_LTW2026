import StudentItem from "./StudentItem";

const StudentList = ({ students, onDelete }) => {
    if (students.length === 0) {
        return <p>Không có sinh viên nào.</p>;
    }

    return (
        <ul className="student-list">
            {students.map((student) => (
                <StudentItem
                    key={student.id}
                    student={student}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
};

export default StudentList;
