import { useQuery } from 'react-query'
import axios from 'axios'
import { store } from '../store'

export interface Post {
    id: number
    title: string
    body: string
}

export interface ActualPost {
    id: number
}

export const postKeys = {
    posts: 'posts',
    post: 'post',
}

export const usePosts = () => {
    return useQuery(postKeys.posts, async () => await apiGetPosts())
}

export const usePost = () => {
    const storePostId = store.postId
    return useQuery(
        [postKeys.post, storePostId],
        async () => await apiGetPostById(),
        {
            enabled: storePostId > 0,
        }
    )
}

export const apiGetPostById = async (): Promise<Post> => {
    const storePostId = store.postId
    console.log('apiCall  POST ID:', storePostId)
    const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${storePostId}`
    )
    return data
}

export const apiGetPosts = async (): Promise<Post[]> => {
    console.log('apiCall  POSTS')
    const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
    )
    return data
}
