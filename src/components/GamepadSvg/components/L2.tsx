import { useMemo } from "react";

import { GamepadData } from "@/hooks/type";

type IProps = {
    gamepad?: GamepadData
};

export const L2: React.FC<IProps> = ({ gamepad }) => {
    const sacle = useMemo(() => {
        if (!gamepad) {
            return 0;
        }

        const { buttons } = gamepad;
        return buttons[6].value;
    }, [gamepad?.buttons]);

    return (
        <>
             <path
                className="L2-bg"
                style={{
                    fill: "#000000",
                    strokeWidth: 1.54499,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    paintOrder: "stroke markers fill",
                    stopColor: "#000000"
                }}
                d="m142.46 0a24.213 10.545 0 0 0-24.213 10.545v38.671a24.213 10.545 0 0 0 24.213 10.545 24.213 10.545 0 0 0 24.213-10.545v-38.671a24.213 10.545 0 0 0-24.213-10.545z"
            />
            <rect
                style={{
                    fill: "#0000ff",
                }}
                className="L2"
                width={48.425758}
                height={59.761375 * sacle}
                x={118.248}
                y={-0.0000076293945 + 59.761375 * (1 - sacle)}
                clipPath="url(#clipPathL2)"
            />
        </>
    );
};
