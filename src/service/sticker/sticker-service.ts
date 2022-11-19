import axios from "axios"

export const getStickers = async () => {
  try {
    const result = await axios.get('http://localhost:8080/sticker')
    return result
  } catch(error: Error | any) {
    console.log(error.message)
  }
}