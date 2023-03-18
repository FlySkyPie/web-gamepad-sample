import { useMemo } from "react";

import { GamepadData } from "@/hooks/type";

type IProps = {
    gamepad?: GamepadData
};

export const RightStick: React.FC<IProps> = ({ gamepad }) => {
    const transform = useMemo(() => {
        if (!gamepad) {
            return;
        }
        const { axes } = gamepad;
        return `translate(${axes[2] * 32}px,${axes[3] * 32}px)`
    }, [gamepad?.axes]);

    const fill = useMemo(() => {
        if (!gamepad) {
            return "#000000";
        }

        const { axes, buttons } = gamepad;

        if (buttons[11].value > 0.1) {
            return "#0000ff";
        }

        if (Math.abs(axes[2]) > 0.1 ||
            Math.abs(axes[3]) > 0.1) {
            return "#990000";
        }

        return "#000000";
    }, [gamepad?.axes, gamepad?.buttons]);

    return (
        <circle
            className="B11"
            cx={460.05}
            cy={345.67}
            r={33.482}
            stopColor="#000000"
            style={{
                transform,
                fill,
            }}
        />
    );
};
