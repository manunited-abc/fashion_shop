function Button({ title, type, className }) {
    return <input className={className} value={title} data-dismiss="" type={type} />;
}

export default Button;
