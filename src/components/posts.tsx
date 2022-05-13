import { handleChangePostId } from '../store'
import { usePosts } from '../service/post'

const Posts = () => {
    const { status, data, error } = usePosts()

    if (status === 'loading') return <>Loading...</>
    if (error instanceof Error) return <span>Error: {error.message}</span>

    return (
        <div>
            {data?.map((post) => (
                <p key={post.id}>
                    <a
                        onClick={() => {
                            // setQueryActualPost(post.id)
                            handleChangePostId(post.id)
                        }}
                        href="#"
                    >
                        {post.id}
                        {' - '} {post.title}
                    </a>
                </p>
            ))}
        </div>
    )
}
export default Posts
