import { useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { StickerDto } from "../../dto"
import { stickerService } from "../../service"

const ListStickers = () => {
  const [stickers, setStickers] = useState<StickerDto[]>([])
  const [errorMessage, setErrorMessage] = useState("")

  const navigate = useNavigate()

  const loadStickers = useCallback(async () => {
    try {
      const result = await stickerService.getStickers()
      setStickers(result)
    } catch(error: Error | any) {
      setErrorMessage(error.message)
    }
  }, [])

  const addNewSticker = () => {
    navigate('/register')
  }

  useEffect(() => {
    loadStickers();
  }, [loadStickers])

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
                <td>{sticker.birthday.toString()}</td>
                <td>{sticker.legendary ? "Sim" : "Não"}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div>
        {errorMessage}
      </div>
      <input type="button" value="Nova Figurinha" onClick={addNewSticker}/>
    </>
  )
}

export default ListStickers