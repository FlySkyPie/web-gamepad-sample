import { useMemo } from "react";

import { GamepadData } from "@/hooks/type";

type IProps = {
    gamepad?: GamepadData
};

export const L1: React.FC<IProps> = ({ gamepad }) => {
    const fill = useMemo(() => {
        if (!gamepad) {
            return "#000000";
        }

        const { buttons } = gamepad;

        if (buttons[4].value > 0.1) {
            return "#0000ff";
        }


        return "#000000";
    }, [gamepad?.buttons]);

    return (
        <path
            className="L1"
            style={{
                fill
            }}
            d="m142.68 66.043c-2.376 0.0376-4.5386 0.14618-6.2419 0.33694-6.5404 0.76305-14.607 2.126-20.984 3.5976-13.626 3.1612-20.766 6.6498-26.979 13.19-1.6622 1.7624-3.4479 5.0428-5.2183 8.8765a74.382 37.191 0 0 0 53.099 11.174 74.382 37.191 0 0 0 57.629-13.708c-2.4703-3.4973-5.0938-6.9384-7.0211-9.0139-6.813-7.358-13.081-10.792-23.818-13.135-4.2922-0.89932-13.336-1.4306-20.464-1.3182z" />
    );
};
