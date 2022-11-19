import axios from "axios"
import { useEffect, useState } from "react"

const ListStickers = () => {
  const [stickers, setStickers] = useState<any[]>([])

  useEffect(() => {
    getStickersList()
  }, [])

  const getStickersList = async () => {
    try {
      const result = await axios.get('http://localhost:8080/sticker')
      setStickers(result.data)
    } catch(error: Error | any) {
      console.log(error.message)
    }
  }

  return (
    <>
      <table width="90%" border={1}>
        <thead>
          <tr>
            <th style={{ width: "30%" }}>Jogador</th>
            <th style={{ width: "25%" }}>País</th>
            <th style={{ width: "10%" }}>Peso</th>
            <th style={{ width: "10%" }}>Altura</th>
            <th style={{ width: "15%" }}>Data de Nascimento</th>
            <th style={{ width: "10%" }}>Lendário</th>
          </tr>
        </thead>
        <tbody>
          {
            stickers.map(sticker => (
              <tr key={sticker.id}>
                <td>{sticker.player}</td>
                <td>{sticker.country}</td>
                <td>{sticker.weight}</td>
                <td>{sticker.height}</td>
                <td>{sticker.birthday}</td>
                <td>{sticker.legendary}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default ListStickers