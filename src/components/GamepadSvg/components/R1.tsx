import { useMemo } from "react";

import { GamepadData } from "@/hooks/type";

type IProps = {
    gamepad?: GamepadData
};

export const R1: React.FC<IProps> = ({ gamepad }) => {
    const fill = useMemo(() => {
        if (!gamepad) {
            return "#000000";
        }

        const { buttons } = gamepad;

        if (buttons[5].value > 0.1) {
            return "#0000ff";
        }

        return "#000000";
    }, [gamepad?.buttons]);

    return (
        <path
            className="R1"
            d="m550.56 64.976c-5.7092 0.0545-11.214 0.39525-14.212 0.99479-5.5594 1.0901-12.427 3.4883-15.915 5.5049-5.1159 3.0062-11.208 9.596-17.522 18.855a74.382 37.191 0 0 0 54.066 11.716 74.382 37.191 0 0 0 57.054-13.387c-3.7767-6.8454-8.3988-11.247-14.785-14.349-7.467-3.6518-19.022-6.6502-33.247-8.6123-3.8153-0.54504-9.7285-0.77624-15.438-0.72173z"
            style={{
                fill
            }} />
    );
};
