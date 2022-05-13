import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { store } from './store'

import Post from './components/post'
import Posts from './components/posts'
import { useSnapshot } from 'valtio'

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            notifyOnChangeProps: 'tracked',
        },
    },
})

const App = () => {
    const { postId } = useSnapshot(store)

    return (
        <QueryClientProvider client={queryClient}>
            <div className="m-2 flex flex-row">
                {postId === 0 ? (
                    <div className="p-4">
                        <Posts />
                    </div>
                ) : (
                    <div className="p-4">
                        <Post />
                    </div>
                )}
            </div>

            <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>
    )
}

export default App
