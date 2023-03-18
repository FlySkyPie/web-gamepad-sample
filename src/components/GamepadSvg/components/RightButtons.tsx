import { useMemo } from "react";

import { GamepadData } from "@/hooks/type";

type IProps = {
    gamepad?: GamepadData
};

export const RightButtons: React.FC<IProps> = ({ gamepad }) => {
    const fill0 = useMemo(() => {
        if (!gamepad) {
            return "#ffffff";
        }

        const { buttons } = gamepad;
        if (buttons[0].value > 0.1) {
            return "#0000ff";
        }

        return "#ffffff";
    }, [gamepad?.buttons]);

    const fill1 = useMemo(() => {
        if (!gamepad) {
            return "#ffffff";
        }

        const { buttons } = gamepad;
        if (buttons[1].value > 0.1) {
            return "#0000ff";
        }

        return "#ffffff";
    }, [gamepad?.buttons]);

    const fill2 = useMemo(() => {
        if (!gamepad) {
            return "#ffffff";
        }

        const { buttons } = gamepad;
        if (buttons[2].value > 0.1) {
            return "#0000ff";
        }

        return "#ffffff";
    }, [gamepad?.buttons]);

    const fill3 = useMemo(() => {
        if (!gamepad) {
            return "#ffffff";
        }

        const { buttons } = gamepad;
        if (buttons[3].value > 0.1) {
            return "#0000ff";
        }

        return "#ffffff";
    }, [gamepad?.buttons]);

    return (
        <>
            <path
                className="B03"
                d="m571.5 141.65c-3.7078-0.083-7.1651 0.71776-10.878 2.4551-4.6873 2.1801-7.6853 4.6876-10.356 8.7209-8.3391 12.481-4.4151 28.996 8.6658 36.572 11.064 6.4314 26.38 2.8337 33.411-7.849 3.1612-4.8508 4.3057-8.7205 4.3057-14.334-0.0545-11.664-7.3039-21.475-18.096-24.472-2.514-0.67448-4.8284-1.0426-7.053-1.0922z"
                style={{ fill: fill3, }}
            />
            <path
                className="B02"
                d="m510.24 195.92c-2.0723 0.0174-4.0343 0.23186-5.5672 0.66107-4.4148 1.2536-8.1214 3.4335-11.555 6.8127-11.282 11.119-9.5378 30.032 3.5976 38.97 4.6873 3.1612 8.7206 4.3602 14.716 4.3057 5.8864-0.109 9.7013-1.3078 14.389-4.578 4.6873-3.3247 7.7402-7.467 9.6478-13.081 1.3626-4.0878 1.362-11.228-0.0551-15.534-2.2346-6.922-8.4479-13.463-15.37-16.079-2.5889-0.98788-6.3489-1.5075-9.8027-1.4786z"
                stopColor="#ffffff"
                style={{ fill: fill2, }}
            />
            <path
                className="B01"
                d="m632.81 195.98c-13.358 0.3413-24.869 11.334-24.822 25.164 0.0545 7.576 2.2349 13.081 7.3037 18.15 10.41 10.356 26.762 10.192 36.518-0.38163 5.3959-5.7773 7.0854-10.519 6.7585-18.694-0.16354-5.1778-0.32707-5.9413-2.2347-9.7021-3.4337-7.0309-10.301-12.426-17.714-14.007-1.9553-0.40877-3.9009-0.57703-5.8092-0.52852z"
                stopColor="#ffffff"
                style={{ fill: fill1, }}
            />
            <path
                className="B00"
                d="m569.49 257.02c-2.4527 0.0382-3.9544 0.28342-5.7939 0.89659-22.128 7.3034-24.255 36.953-3.3796 47.255 3.8153 1.9076 4.6878 2.1255 9.4841 2.289 8.012 0.32702 13.462-1.5806 18.858-6.5404 5.2869-4.8508 7.9576-11.173 7.9576-18.694 0-10.465-5.1233-18.422-14.77-23.055-3.5972-1.7441-4.5241-1.9626-9.5384-2.1261-1.0764-0.0294-2-0.0365-2.8176-0.0239z"
                stopColor="#ffffff"
                style={{ fill: fill0, }}
            />
        </>
    );
};
