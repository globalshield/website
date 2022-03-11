import * as React from 'react'

const TextBlock = ({ light = false, copyable = false, center = false, text, className }) => {
    const mainClass = `
        flex items-center justify-${center ? 'center' : 'between'} py-4 px-6 rounded-lg mt-2 
        ${ light ? 'bg-bg-light-gray' : 'bg-bg-blue-gray' } 
        ${ className || '' }
    `;

    const copyButtonClass = `
        rounded-lg py-2 px-4 -my-3 ml-4 -mr-4 bg-opacity-20
        focus:bg-opacity-30 hover:bg-opacity-40
        ${ light ? 'bg-bg-blue-gray' : 'bg-white' }
    `;

    return (
        <div className={mainClass}>
            <span className={"text-sm break-all"}>
                { text }
            </span>
            {/* { copyable &&
                <button className={copyButtonClass}>
                    <span className={"text-sm text-default"}>Copy</span>
                </button>
            } */}
        </div>
    );
}

export default TextBlock
