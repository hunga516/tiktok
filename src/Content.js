import { useEffect, useState } from "react";
const types = ["posts", "comments", "albums"]

function Content() {
    const [avatar, setAvatar] = useState()

    function handlePreviewAvatar(e) {
        const file = e.target.files[0]
        setAvatar(URL.createObjectURL(file))

    }

    return (
        <div>
            <input
                type="file"
                onChange={handlePreviewAvatar}
            />
            <img src={avatar} />
        </div>
    )
}

export default Content;