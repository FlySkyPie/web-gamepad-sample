import { useEffect, useRef, useState } from "react";
import equal from 'fast-deep-equal';

const cloneGamepadButton = (button: GamepadButton): GamepadButton => ({
    pressed: button.pressed,
    touched: button.touched,
    value: button.value,
})

const cloneGamepad = (gamepad: Gamepad): Gamepad => ({
    axes: gamepad.axes,
    buttons: gamepad.buttons.map(item => cloneGamepadButton(item)),
    connected: gamepad.connected,
    hapticActuators: gamepad.hapticActuators,
    id: gamepad.id,
    index: gamepad.index,
    mapping: gamepad.mapping,
    timestamp: gamepad.timestamp,
})

export const useGamepad = (index = 0) => {
    const [gamepad, setGamepad] = useState<Gamepad>();

    const gamepadRef = useRef(gamepad);
    gamepadRef.current = gamepad;

    useEffect(() => {
        let id = NaN;

        const animate = () => {
            id = window.requestAnimationFrame(animate);

            const gamepads = navigator.getGamepads();

            if (gamepads.length === 0) {
                return;
            }

            const _gamepad = gamepads[index];
            if (!_gamepad) {
                return;
            }

            if (!gamepadRef.current) {
                setGamepad(cloneGamepad(_gamepad));
                return;
            }

            setGamepad(prev => {
                if (!prev) {
                    return cloneGamepad(_gamepad);
                }

                if (!equal(prev.axes, _gamepad.axes)) {
                    console.log("update axes")
                    return cloneGamepad(_gamepad);
                }

                const buttons = _gamepad.buttons.map(b => cloneGamepadButton(b));
                for (let i = 0; i < prev.buttons.length; i++) {
                    if (!equal(prev.buttons[i], buttons[i])) {
                        return cloneGamepad(_gamepad);
                    }
                }

                return prev;
            })
        };

        animate();

        return () => {
            window.cancelAnimationFrame(id);
        }
    }, [index]);

    return { gamepad };
}