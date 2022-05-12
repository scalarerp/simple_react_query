import { useQuery } from 'react-query'
import axios from 'axios'
import { queryClient } from '../App'

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
    actualPost: 'actualPost',
}

export const usePosts = () => {
    return useQuery(postKeys.posts, () => apiGetPosts())
}

export const usePost = (id: number) => {
    return useQuery([postKeys.post, id], () => apiGetPostById(id), {
        enabled: !!id,
    })
}

export const getQueryPost = (id: number) => {
    return queryClient.getQueryData<Post>([postKeys.post, id])
}

export const getQueryActualPost = () => {
    return queryClient.getQueryData<number>(postKeys.actualPost)
}
export const setQueryActualPost = (id: number) => {
    return queryClient.setQueryData(postKeys.actualPost, id)
}

export const apiGetPostById = async (id: number): Promise<Post> => {
    const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    )
    return data
}

export const apiGetPosts = async (): Promise<Post[]> => {
    const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
    )
    return data
}
