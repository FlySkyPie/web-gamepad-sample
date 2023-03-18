import { useMemo } from "react";

import { GamepadData } from "@/hooks/type";

type IProps = {
    gamepad?: GamepadData
};

export const LeftButtons: React.FC<IProps> = ({ gamepad }) => {
    const fill12 = useMemo(() => {
        if (!gamepad) {
            return "#ffffff";
        }

        const { buttons } = gamepad;
        if (buttons[12].value > 0.1) {
            return "#0000ff";
        }

        return "#ffffff";
    }, [gamepad?.buttons]);

    const fill13 = useMemo(() => {
        if (!gamepad) {
            return "#ffffff";
        }

        const { buttons } = gamepad;
        if (buttons[13].value > 0.1) {
            return "#0000ff";
        }

        return "#ffffff";
    }, [gamepad?.buttons]);

    const fill14 = useMemo(() => {
        if (!gamepad) {
            return "#ffffff";
        }

        const { buttons } = gamepad;
        if (buttons[14].value > 0.1) {
            return "#0000ff";
        }

        return "#ffffff";
    }, [gamepad?.buttons]);

    const fill15 = useMemo(() => {
        if (!gamepad) {
            return "#ffffff";
        }

        const { buttons } = gamepad;
        if (buttons[15].value > 0.1) {
            return "#0000ff";
        }

        return "#ffffff";
    }, [gamepad?.buttons]);

    return (
        <>
            <path
                className="B012"
                d="m104.37 156.04v30.685l3.9249 4.6874c5.5594 6.595 11.609 12.373 14.389 13.736l2.3984 1.1441 2.3976-1.1441c2.5617-1.2536 10.356-8.8842 15.316-14.934l2.998-3.7612v-30.413h-20.711z"
                style={{ fill: fill12, }}
            />
            <path
                className="B014"
                d="m79.629 197.46c-8.1756 0-15.043 0.16367-15.206 0.38163-0.21801 0.16352-0.38163 9.4834-0.38163 20.711v20.33h30.903l4.0335-3.3253c8.9931-7.4124 15.206-14.443 15.206-17.114 0-2.8888-6.8125-10.628-15.642-17.714l-4.0335-3.2702z"
                stopColor="#ffffff"
                style={{ fill: fill14, }}
            />
            <path
                className="B015"
                d="m155.72 197.46-2.8894 2.289c-9.3746 7.249-16.841 15.425-16.841 18.368 0 0.81756 0.70816 2.5615 1.5257 3.9241 1.7441 2.6162 10.138 10.901 14.935 14.552l2.9972 2.2898 15.207-0.10938 15.206-0.16368v-40.878l-15.043-0.16286z"
                stopColor="#ffffff"
                style={{ fill: fill15, }}
            />
            <path
                className="B013"
                d="m125.47 230.78c-1.4137-0.0713-2.8913 0.66052-5.0714 2.3297-3.5972 2.6707-7.0311 6.105-12.427 12.536l-3.5976 4.3057 0.10939 15.316 0.16368 15.316h40.878l0.16286-15.261 0.10939-15.261-5.3412-6.2674c-5.3959-6.3225-9.375-10.192-12.373-12.045-0.94019-0.59267-1.7649-0.92514-2.6131-0.96765z"
                stopColor="#ffffff"
                style={{ fill: fill13, }}
            />
        </>
    );
};
