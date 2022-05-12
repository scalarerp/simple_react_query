import { useQueryClient } from 'react-query'
import { usePosts } from '../service/post'

interface Props {
    setPostId: Function
    actualId?: number
}

const Posts = ({ setPostId, actualId }: Props) => {
    const { status, data, error, isFetching } = usePosts()

    return (
        <div>
            <h1>Posts</h1>
            <div>
                {status === 'loading' ? (
                    'Loading...'
                ) : error instanceof Error ? (
                    <span>Error: {error.message}</span>
                ) : (
                    <>
                        <div>
                            {data?.map((post) => (
                                <p key={post.id}>
                                    <a
                                        onClick={() => setPostId(post.id)}
                                        href="#"
                                        style={
                                            // We can access the query data here
                                            // to show bold links for
                                            // ones that are cached
                                            actualId === post.id
                                                ? {
                                                      fontWeight: 'bold',
                                                      color: 'green',
                                                  }
                                                : {}
                                        }
                                    >
                                        {post.id}
                                        {' - '} {post.title}
                                    </a>
                                </p>
                            ))}
                        </div>
                        <div>{isFetching ? 'Background Updating...' : ' '}</div>
                    </>
                )}
            </div>
        </div>
    )
}
export default Posts
