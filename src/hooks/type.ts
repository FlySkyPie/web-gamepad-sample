export interface GamepadButtonData {
    pressed: boolean;
    touched: boolean;
    value: number;
}

export interface GamepadData {
    axes: number[];
    buttons: GamepadButtonData[];
    connected: boolean;
    // hapticActuators: Array<GamepadHapticActuator>;
    // vibrationActuator: GamepadHapticActuator;
    id: string;
    index: number;
    mapping: GamepadMappingType;
    timestamp: DOMHighResTimeStamp;
}