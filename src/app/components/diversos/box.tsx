import Link from "next/link";
import React from "react";

interface BoxProps {
    title: string;
    paragraph: string;
    link: {
        href: string;
        text: string;
    };
}

const Box: React.FC<BoxProps> = ({ title, paragraph, link }) => {
    return (
        <div className="border rounded-lg shadow-md p-6 max-w-md bg-white ">
            <h2 className="text-xl font-bold mb-2 text-red-700 text-center">{title}</h2>
            <p className="text-gray-700 mb-4 text-center">{paragraph}</p>
            <div className="flex justify-center text-blue-700">
                <Link href={link.href} >{link.text}</Link>
            </div>
        </div>
    );
};

export default Box;
