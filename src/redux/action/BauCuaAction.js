import { DAT_CUOC_BAU_CUA ,PLAY_GAME_BAU_CUA, RESET_GAME} from "../type/BauCuaType";

export const DatCuoc = (item, isPlus) => ({
    type: DAT_CUOC_BAU_CUA,
    item,
    isPlus
})
export const PlayGameBauCua = () => ({
    type: PLAY_GAME_BAU_CUA,
})
export const ResetGame = () => ({
    type: RESET_GAME,
})