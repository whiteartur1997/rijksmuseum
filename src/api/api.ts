import axios from "axios";

const API_KEY = "4iY9QtIe";

type CardType = {
    image: string
    title: string
    longTitle: string
    principal: string
}

const axiosInstance = axios.create({
    baseURL: `https://www.rijksmuseum.nl/api/nl/collection?key=${API_KEY}&imgonly=true`,
})

export const apiRequests = {
    getCards: (type: string, query: string, numberPerPage: number) => {
        return axiosInstance.get<ResponseType>(`&ps=${numberPerPage}&q=${query}&s=${type}`)
    }
}