import httpInstance from "@/utils/http";
export const getData = () => {
    return httpInstance({
        url: 'home/category/head'
    })
}