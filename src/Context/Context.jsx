import { createContext, useState }  from 'react'


export const myContext = createContext()


const MyProvider = ({children})=>{
    const [isOpen, setIsOpen] = useState(false)

    return (
        <myContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </myContext.Provider>
    )
}


export default MyProvider