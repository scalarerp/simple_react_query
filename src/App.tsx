import { useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import Post from './components/post'
import Posts from './components/posts'
import { getQueryActualPost, setQueryActualPost } from './service/post'

export const queryClient = new QueryClient()

const App = () => {
    //only to reload the page
    const [first, setFirst] = useState(-1)

    //get Id from  react-query State
    const postId = getQueryActualPost()

    const setPostId = (id: number) => {
        console.log('setPostId', id)
        console.log('teste getActualPostQuery', setQueryActualPost(id))

        //reload the page
        setFirst(id)
    }

    //only for log
    // useEffect(() => {
    //     console.log('postId changed', postId)
    // }, [postId])

    return (
        <QueryClientProvider client={queryClient}>
            <div className="m-2 flex flex-row">
                <div className="p-4">
                    <Posts setPostId={setPostId} actualId={postId} />
                </div>
                <div className="p-4">
                    {postId && postId > 0 && (
                        <Post postId={postId} setPostId={setPostId} />
                    )}
                </div>
            </div>

            <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>
    )
}

export default App
