import { TrophySpin } from "react-loading-indicators";

const Loading = () => {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <TrophySpin color="#32cd32" size="medium" text="" textColor="" />
        </div>
    );
};

export default Loading;
