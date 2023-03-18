import { useEffect, useRef, useState } from "react";
import equal from 'fast-deep-equal';
// import { getDiff } from 'json-difference'

import { GamepadButtonData, GamepadData } from "./type";

const cloneGamepadButton = (button: GamepadButton): GamepadButtonData => ({
    pressed: button.pressed,
    touched: button.touched,
    value: button.value,
})

const cloneGamepad = (gamepad: Gamepad): GamepadData => ({
    axes: Array.from(gamepad.axes),
    buttons: gamepad.buttons.map(item => cloneGamepadButton(item)),
    connected: gamepad.connected,
    id: gamepad.id,
    index: gamepad.index,
    mapping: gamepad.mapping,
    timestamp: gamepad.timestamp,
})

export const useGamepad = (index = 0) => {
    const [gamepad, setGamepad] = useState<GamepadData>();

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
                return prev;
            })

            setGamepad(prev => {
                if (prev && !equal(prev.axes, _gamepad.axes)) {
                    return { ...prev, axes: Array.from(_gamepad.axes) };
                }
                return prev;
            });

            setGamepad(prev => {
                const buttons = _gamepad.buttons.map(b => cloneGamepadButton(b));
                if (prev && !equal(prev.buttons,buttons)) {
                    return {
                        ...prev, buttons: prev.buttons.map((v, index) => {
                            if (equal(v, buttons[index])) {
                                return v;
                            }
                            return buttons[index];
                        })
                    };
                }
                return prev;
            })

            setGamepad(prev => {
                if (prev && prev.connected !== _gamepad.connected) {
                    return { ...prev, connected: _gamepad.connected }
                }

                return prev;
            });

            setGamepad(prev => {
                if (prev && prev.id !== _gamepad.id) {
                    return { ...prev, id: _gamepad.id }
                }

                return prev;
            });
            setGamepad(prev => {
                if (prev && prev.index !== _gamepad.index) {
                    return { ...prev, index: _gamepad.index }
                }

                return prev;
            });
            setGamepad(prev => {
                if (prev && prev.mapping !== _gamepad.mapping) {
                    return { ...prev, mapping: _gamepad.mapping }
                }

                return prev;
            });
            setGamepad(prev => {
                if (prev && prev.timestamp !== _gamepad.timestamp) {
                    return { ...prev, timestamp: _gamepad.timestamp }
                }

                return prev;
            });
        };

        animate();

        return () => {
            window.cancelAnimationFrame(id);
        }
    }, [index]);

    return { gamepad };
}