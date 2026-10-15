import api from './api.js'


// Fetch all courses
export const getCourses = async () => {
    try {
        const response = await api.get('/courses')
        return response.data
    } catch (error) {
        console.error(
            'Get Courses Error:', error.response?.data || error.message
        )
        throw error
    }
}

// Fetch all categories
export const getCategories = async () => {
    try {
        const response = await api.get('/categories')
        return response.data
    } catch (error) {
        console.error(
            'Get Categories Error:', error.response?.data || error.message
        )
        throw error
    }
}