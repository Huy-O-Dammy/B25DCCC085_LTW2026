import { useState } from "react";
import StudentList from "./StudentList";

const App = () => {
    const [students, setStudents] = useState([
        { id: 1, name: "Nguyễn Văn A", score: 8.5, class: "D25CQCC01" },
        { id: 2, name: "Trần Thị B", score: 4, class: "D25CQCC01" },
        { id: 3, name: "Lê Văn C", score: 6.5, class: "D25CQCC02" }
    ]);

    const [newName, setNewName] = useState("");
    const [newScore, setNewScore] = useState("");
    const [newClass, setNewClass] = useState("");
    const [error, setError] = useState("");
    const [filter, setFilter] = useState("all");

    const addStudent = () => {
        if (newName.trim() === "" || newScore === "" || newClass.trim() === "") {
            setError("Vui lòng nhập đầy đủ họ tên, điểm số và lớp!");
            return;
        }

        const score = Number(newScore);

        if (Number.isNaN(score) || score < 0 || score > 10) {
            setError("Điểm số không hợp lệ (phải từ 0 đến 10)!");
            return;
        }

        const newStudent = {
            id: Date.now(),
            name: newName.trim(),
            score: score,
            class: newClass.trim()
        };

        setStudents([...students, newStudent]);

        setNewName("");
        setNewScore("");
        setNewClass("");
        setError("");
    };

    const deleteStudent = (id) => {
        setStudents(students.filter((student) => student.id !== id));
    };

    const filteredStudents = students.filter(({ score }) => {
        if (filter === "good") return score >= 8;
        if (filter === "fail") return score < 5;
        return true;
    });

    const total = students.length;
    const average =
        total === 0
            ? 0
            : students.reduce((sum, { score }) => sum + score, 0) / total;

    return (
        <div className="app">
            <div className="container">
                <h2>Quản lý điểm sinh viên</h2>

                <div className="form">
                    <input
                        type="text"
                        placeholder="Họ tên"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                    />

                    <input
                        type="number"
                        placeholder="Điểm số"
                        value={newScore}
                        onChange={(e) => setNewScore(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Lớp"
                        value={newClass}
                        onChange={(e) => setNewClass(e.target.value)}
                    />

                    <button onClick={addStudent}>Thêm</button>
                </div>

                {error && <p className="error">{error}</p>}

                <div className="stats">
                    <span>{`Tổng số sinh viên: ${total}`}</span>
                    <span>{`Điểm trung bình: ${average.toFixed(2)}`}</span>
                </div>

                <div className="filters">
                    <button onClick={() => setFilter("all")}>Tất cả</button>
                    <button onClick={() => setFilter("good")}>Giỏi (≥ 8)</button>
                    <button onClick={() => setFilter("fail")}>Trượt (&lt; 5)</button>
                </div>

                <StudentList students={filteredStudents} onDelete={deleteStudent} />
            </div>
        </div>
    );
};

export default App;
