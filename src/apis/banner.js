import httpInstance from "@/utils/http"
export const getBannerDataAPi = () => {
    return httpInstance({
        url: '/home/banner'
    })
}