import "./Loader.scss";

interface Props {
    position?: "fixed" | "absolute" | "relative";
    data: {
        loading: boolean,
        index: number,
        account: string
    }
}

function Loader(props: Props) {
    const position = props.position ? props.position : "absolute";

    return (
        <div className="LoaderWrapper"
            style={{ position: position }}>
            <div className="Loader">
                <div className="LoaderAnimation">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <h2 className="LoaderTitle">
                    {props.data.index} accounts loaded
                </h2>
                <div>{props.data.account}</div>
            </div>
        </div>
    );
}

export default Loader;