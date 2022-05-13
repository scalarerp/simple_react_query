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
    return useQuery(postKeys.posts, async () => await apiGetPosts())
}

export const usePost = (id: number = 0) => {
    return useQuery([postKeys.post, id], async () => await apiGetPostById(id), {
        enabled: id > 0,
    })
}

export const resetPost = (id: number) => {
    queryClient.invalidateQueries([postKeys.post, id])
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
    console.log('apiCall  POST', id)
    const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
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
