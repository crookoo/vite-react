import IcoMoon from "react-icomoon";
import iconSet from '../assets/icomoon-selection.json';

interface IconProps {
    icon: string;
    color: string;
    className: string;
}

export default function Icon({ ...props }: IconProps) {
    return <IcoMoon iconSet={iconSet} {...props} />;
};
