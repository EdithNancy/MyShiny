const Frame = (content) => {
    return (
        <>
            <div className="m-10">
                <div className="w-full p-10 bg-fourthly">
                    {content.children}
                </div>
            </div>
        </>
    );
};
export default Frame;
