import * as React from "react";
import { Terminal, ITerminalAddon } from "xterm";
export interface IXtermProps extends React.DOMAttributes<{}> {
    onChange?: (e: any) => void;
    onInput?: (e: any) => void;
    onFocusChange?: Function;
    addons?: ITerminalAddon[];
    onScroll?: (e: any) => void;
    onContextMenu?: (e: any) => void;
    options?: any;
    path?: string;
    value?: string;
    className?: string;
    style?: React.CSSProperties;
}
export interface IXtermState {
    isFocused: boolean;
}
export default class XTerm extends React.Component<IXtermProps, IXtermState> {
    xterm: Terminal;
    container: HTMLDivElement;
    constructor(props?: IXtermProps, context?: any);
    loadAddon(addon: ITerminalAddon): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    shouldComponentUpdate(nextProps: Readonly<IXtermProps>, nextState: Readonly<IXtermState>, nextContext: any): boolean;
    getTerminal(): Terminal;
    write(data: string | Uint8Array): void;
    writeln(data: string | Uint8Array): void;
    focus(): void;
    focusChanged(focused: boolean): void;
    onInput: (data: any) => void;
    resize(cols: number, rows: number): void;
    setOption(key: string, value: boolean): void;
    refresh(): void;
    onContextMenu(e: any): void;
    render(): JSX.Element;
}
export { Terminal, XTerm };
