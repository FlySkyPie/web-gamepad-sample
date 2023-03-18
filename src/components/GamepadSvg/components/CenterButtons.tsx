import { useMemo } from "react";

import { GamepadData } from "@/hooks/type";

type IProps = {
    gamepad?: GamepadData
};

export const CenterButtons: React.FC<IProps> = ({ gamepad }) => {
    const fill8 = useMemo(() => {
        if (!gamepad) {
            return "#ffffff";
        }

        const { buttons } = gamepad;
        if (buttons[8].value > 0.1) {
            return "#0000ff";
        }

        return "#ffffff";
    }, [gamepad?.buttons]);

    const fill9 = useMemo(() => {
        if (!gamepad) {
            return "#ffffff";
        }

        const { buttons } = gamepad;
        if (buttons[9].value > 0.1) {
            return "#0000ff";
        }

        return "#ffffff";
    }, [gamepad?.buttons]);

    return (
        <>
            <path
                className="B08"
                d="m256.98 209.45v24.527h39.788v-24.527h-19.894z"
                style={{ fill: fill8, }}
            />
            <path
                className="B09"
                d="m397.39 208.91c-0.16351 0-0.32735 5.8867-0.32735 13.027v13.026l14.607-4.8502c8.012-2.6706 16.624-5.5052 19.185-6.2682 2.5617-0.81755 4.8508-1.635 5.1233-1.8531 0.21801-0.27252-8.2849-3.2702-18.913-6.7584-10.628-3.4883-19.512-6.3225-19.676-6.3225z"
                stopColor="#ffffff"
                style={{ fill: fill9, }}
            />
        </>
    );
};
