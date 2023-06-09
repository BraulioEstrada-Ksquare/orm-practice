import Post from '../models/Post'
import Comment from '../models/Comment'
import { IPost } from '../interfaces'

export const createPost = async ({ text, userId }: IPost): Promise<Post | null> => {
    try {
        if (userId) {
            const response = await Post.create({
                text, userId
            })
            return response

        } else {
            return null
        }


    } catch (error) {
        console.error(error)
        return null
    }
}

export const readPost = async (id: number): Promise<Post | null> => {
    const response = await Post.findByPk(id);
    return response
}


export const getAllCommentsByPostId = async (id: number): Promise<Post | null> => {
    const response = await Post.findByPk(id, {
        include: [{
            model: Comment,
        }]
    });
    return response
}