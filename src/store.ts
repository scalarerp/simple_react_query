import { proxy } from 'valtio'
import { devtools } from 'valtio/utils'

export const initialLocale = 'pt-BR'

interface ApplicationState {
    postId: number
}

export const store = proxy<ApplicationState>({
    postId: 0,
})
const unsub = devtools(store, 'simpleReactQuery')

export const handleChangePostId = async (id: number) => {
    store.postId = id
}
