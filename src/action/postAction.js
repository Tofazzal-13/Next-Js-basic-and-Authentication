"use server"
import { addPosts } from "@/database/postdb";
import { revalidatePath } from "next/cache";

export const handlePostAction = async (formData) => {
    "use server"
    const title = formData.get("title")
    const description = formData.get("description")

    addPosts({ title, description });
    revalidatePath("/serverAction")
}