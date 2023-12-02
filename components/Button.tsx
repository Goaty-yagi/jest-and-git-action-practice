
type ButtonProps = {
    text: string,
    event: () => void
}

export default function Button({text, event}:ButtonProps){
    return (
        <><button data-testid="custom-button" onClick={event}>{text}</button></>
    )
}