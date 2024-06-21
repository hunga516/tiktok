import { useEffect, useState } from "react";

const list = [
    {
        id: 1,
        name: 'Le Ngoc Loc',
        degree: 'Admin'
    },
    {
        id: 2,
        name: 'Nguyen Bao Tran',
        degree: 'Modder'
    },
    {
        id: 3,
        name: 'Nguyen Hoang Truong An',
        degree: 'Staff'
    }
]

function Content() {
    const [activeId, setActiveId] = useState(1)

    useEffect(() => {
        function handleComment(e) {
            console.log(e.detail);
        }
        window.addEventListener(`item-${activeId}`, handleComment)

        return () => {
            window.removeEventListener(`item-${activeId}`, handleComment)
        }
    }, [activeId])

    function handleClick(id) {
        setActiveId(id)
    }

    return (
        <div>
            <ul>
                {list.map((item, index) => (
                    < li
                        style={{
                            color: item.id === activeId ? 'red' : '#333'
                        }}
                        key={index}
                        onClick={() => handleClick(item.id)}
                    >{item.name}
                    </li>
                ))}
            </ul>
        </div >
    )
}

export default Content;