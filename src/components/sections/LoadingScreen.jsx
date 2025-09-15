import { useEffect, useState } from "react";

export const LoadingScreen = ( {onComplete} ) => {
    const [text, setText] = useState("");
    const fullText="<welcome/>";

    useEffect(()=>{
        let index = 0;
        const interval= setInterval(()=>{
            setText(fullText.substring(0, index));
            index++;

            if (index>fullText.length) {
                clearInterval(interval)
            setTimeout(() => {
                onComplete();
            },100);
            }


    }, 100);

    return() => clearInterval(interval)
},[onComplete]);
    
    return (
    <div className="fixed inset-0 z-50 bg-violetblue text-gray-100 flex flex-col items-center justify-center">
        <div className="mb-4 text-6xl text-orange-400 font-medium">{text}<span className="animate-blink ml-1"> | </span>
        
        </div>
        <div className="w-[200px] h-[2px] bg-yellow-400 rounded relative overflow-hidden">
            <div className="w-[40%] h-full bg-orange-400 shadow 0_0_15px_#3b82f6 animate-loading-bar"> 
            </div>
            </div>
    </div>
    );
    };
