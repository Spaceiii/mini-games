interface Props {
    name: string,
    description?: string
    categories?: string[]
}

export default function ({name, description}: Props) {
    if (description) {
        return <li>{name}, {description}</li>
    }
    return <li>{name}</li>
}