import { getQueryActualPost, usePost } from '../service/post'

interface Props {
    postId: number
    setPostId: Function
}

const Post = ({ postId, setPostId }: Props) => {
    const { status, data, error, isFetching } = usePost(postId)

    const PostI = getQueryActualPost()

    return (
        <div>
            <div>
                <a onClick={() => setPostId(-1)} href="#">
                    Back
                </a>
            </div>
            {!postId || status === 'loading' ? (
                'Loading...'
            ) : error instanceof Error ? (
                <span>Error: {error.message}</span>
            ) : (
                <>
                    <h1>
                        {data?.id} {' - '} {data?.title}
                    </h1>
                    <div>
                        <p>{data?.body}</p>
                    </div>
                    <div>{isFetching ? 'Background Updating...' : ' '}</div>
                </>
            )}
        </div>
    )
}

export default Post
