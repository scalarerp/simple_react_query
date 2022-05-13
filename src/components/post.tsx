import { usePost } from '../service/post'
import { handleChangePostId } from '../store'

const Post = () => {
    const { status, data, error } = usePost()
    if (status === 'loading') return <>Loading...</>
    if (error instanceof Error) return <span>Error: {error.message}</span>

    return (
        <div>
            <div>
                <a onClick={() => handleChangePostId(0)} href="#">
                    Back
                </a>
            </div>

            <h1>
                {data?.id} {' - '} {data?.title}
            </h1>
            <div>
                <p>{data?.body}</p>
            </div>
        </div>
    )
}

export default Post
