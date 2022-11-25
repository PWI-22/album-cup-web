import { httpService } from "../../commons/http"
import { StickerDto } from "../../dto"
import { ServiceError } from "../../error"

export const getStickers = async (): Promise<StickerDto[]> => {
  try {
    const result = await httpService.get<StickerDto[]>('/sticker')
    return result
  } catch(error: Error | any) {
    throw new ServiceError("Não foi possível obter a lista de figurinhas.")
  }
}
