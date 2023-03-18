import { useMemo } from "react";

import { GamepadData } from "@/hooks/type";

type IProps = {
    gamepad?: GamepadData
};

export const LeftStick: React.FC<IProps> = ({ gamepad }) => {
    const transform = useMemo(() => {
        if (!gamepad) {
            return;
        }
        const { axes } = gamepad;
        return `translate(${axes[0] * 32}px,${axes[1] * 32}px)`
    }, [gamepad?.axes]);

    const fill = useMemo(() => {
        if (!gamepad) {
            return "#000000";
        }

        const { axes, buttons } = gamepad;

        if (buttons[10].value > 0.1) {
            return "#0000ff";
        }

        if (Math.abs(axes[0]) > 0.1 ||
            Math.abs(axes[1]) > 0.1) {
            return "#990000";
        }

        return "#000000";
    }, [gamepad?.axes,gamepad?.buttons]);

    return (
        <circle
            className="B10"
            cx={234.01}
            cy={343.66}
            r={33.482}
            stopColor="#000000"
            style={{
                transform,
                fill,
            }}
        />
    );
};
