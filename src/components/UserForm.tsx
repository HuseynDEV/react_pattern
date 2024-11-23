import { useRef, useState } from "react"

export const UserForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    return (
        <form>
            <div>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                />
                <p>Name: {name}</p>
            </div>
            <div>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                />
                <p>Name: {email}</p>
            </div>
            <UserFormItems />
        </form>
    )
}







function UserFormItems() {

    const [isVisible, setIsVisible] = useState(true)
    const [items, setItems] = useState<string[]>([])
    const [selectedItem, setSelectedItem] = useState<string | null>(null)

    const inputRef = useRef<HTMLInputElement>(null)


    function addItem(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        if (inputRef.current && inputRef.current.value) {
            setItems([...items, inputRef.current.value])
            inputRef.current.value = ''
        }
    }

    return (
        <>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? "Hide" : "Show"}
            </button>
            {
                isVisible && (
                    <div>
                        <input type="text" ref={inputRef} placeholder="Add item" />
                        <button onClick={addItem}>Add Item</button>
                        <ul>
                            {items.map((item, index) => (
                                <li key={index} onClick={() => setSelectedItem(item)}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            }
            <div>
                <p>Selected Item: {selectedItem}</p>
            </div>
        </>
    )

}