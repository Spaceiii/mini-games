interface Props {
    children: JSX.Element[]
}

export default function ({children}: Props) {
    return <ul>
        {children}
    </ul>
}