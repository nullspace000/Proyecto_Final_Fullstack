function ButtonComponent({ text, onClick, api, type = "button", className = "", style }) {
    const buttonStyle = {
        backgroundColor: "#5D5D5D",
        color: "white",
        border: "none",
        borderRadius: "20px",
        padding: "6px 14px",
        cursor: "pointer",
        fontWeight: "500",
        fontSize: "0.9rem",
        ...style
    };

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleClick = async (event) => {

    }

    return (
        <button
            className={className}
            style={buttonStyle}
            onClick={handleClick}
            disabled={loading}
            type={type}
        >
            {loading ? "..." : text}
            {error ? ` (${error})` : ""}
        </button>
    );

}
export default ButtonComponent;