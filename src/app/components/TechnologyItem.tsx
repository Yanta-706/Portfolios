import { cloneElement } from "react";

interface TechnologyItemProps {
    technology: {
        name: string;
        icon: JSX.Element;
        description?: string;
    };
}

export default function TechnologyItem({ technology }: TechnologyItemProps) {
    const IconWithClasses = cloneElement(technology.icon, {
        className: `w-full h-full ${
            technology.icon.props.className || ""
        }`,
    });

    return (
        <div
            className="p-6 bg-white bg-opacity-[0.04] hover:bg-opacity-[0.08] transition-all duration-300 rounded-sm"
            title={technology.name}
        >
            {IconWithClasses}
        </div>
    );
}
