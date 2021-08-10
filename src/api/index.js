import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/',
    headers: {
        'Content-Type': 'application/json',
    }
})

export const booksAPI = {
    getBooks(term, startIndex, pageSize, sorting) {
            return instance.get(`volumes?q=${term}${sorting === 'newest' ? `&orderBy=${sorting}` : ''}&startIndex=${startIndex}&maxResults=${pageSize}&key=AIzaSyCtw5j3OWvHPBtsXalDF7o6RcDEMZn-VkA`)
                .then(res => res.data)
                .catch(e => {
                    alert(e)
                })},
    getBook(id){return instance.get('/volumes/' + id).then(res => res.data)},
}
