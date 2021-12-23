export default function ErrorMessage({ message: message }: { message: string }): JSX.Element {
    return (
        <div className="alert alert-danger m-3" role="alert">{message}</div>
    )
}