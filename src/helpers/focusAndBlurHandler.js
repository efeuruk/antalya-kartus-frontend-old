const eventHandler = (e) => {
    const input = e.target;
    const span = input.nextElementSibling;
    const eventType = e.type;
    input.classList[eventType === "focus" ? "add" : "remove"]("selected");
    span.classList[eventType === "focus" ? "add" : "remove"]("selected");
};

export default eventHandler;