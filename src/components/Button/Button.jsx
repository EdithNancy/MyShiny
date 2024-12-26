const Button = (text, style) => {
    return (
        <button
            type="button"
            className={`font-poppinBold md:bg-secondary md:text-white bg-white text-secondary text-h1 px-5 py-1 items-c rounded-3xl ${style} `}
        >
            {text.children}
        </button>
    );
};
export default Button;
