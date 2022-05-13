import { useSnapshot } from 'valtio'
import { usePost } from '../service/post'
import { handleChangePostId, store } from '../store'

const Post = () => {
    const { postId } = useSnapshot(store)
    console.log('post with actual ID>', postId)

    const { status, data, error } = usePost(postId)

    if (status === 'loading') return <>Loading...</>
    // if (isFetching) return 'Background Updating...'
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
