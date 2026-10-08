const StudentItem = ({ student, onDelete }) => {
    const { id, name, score, class: className } = student;

    const rank =
        score >= 8
            ? "Giỏi"
            : score >= 6.5
                ? "Khá"
                : score >= 5
                    ? "Trung bình"
                    : "Yếu";

    const message = `Họ tên: ${name} - Lớp: ${className} - Điểm: ${score} - Xếp loại: ${rank}`;

    const itemClass =
        score >= 5 ? "student-item passed" : "student-item failed";

    return (
        <li className={itemClass}>
            {message}
            <button className="delete-btn" onClick={() => onDelete(id)}>
                Xóa
            </button>
        </li>
    );
};

export default StudentItem;
