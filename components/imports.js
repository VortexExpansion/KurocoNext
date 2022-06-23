export const title = "SushiPedia"

export async function SlideShowData() {
    const res = await fetch(process.env.BASE_URL+'/rcms-api/3/getEditorpicks')
    const data = await res.json()
    return data
}

export async function FetchSushiData() {
    const res = await fetch(process.env.BASE_URL+'/rcms-api/3/fetchSushi')
    const data = await res.json()
    return data
}

export async function TagsData() {
    const res = await fetch(process.env.BASE_URL+'/rcms-api/3/tags')
    const data = await res.json()
    return data
}

export async function CategoriesData() {
    const res = await fetch(process.env.BASE_URL+'/rcms-api/3/categories')
    const data = await res.json()
    return data
}





