import { DAT_CUOC_BAU_CUA, PLAY_GAME_BAU_CUA, RESET_GAME } from "../type/BauCuaType"
const initialState = {
    danhSachCuoc: [
        { ma: 'bau', hinhAnh: './img/bau.png', diemCuoc: 0 },
        { ma: 'ca', hinhAnh: './img/ca.png', diemCuoc: 0 },
        { ma: 'cua', hinhAnh: './img/cua.png', diemCuoc: 0 },
        { ma: 'ga', hinhAnh: './img/ga.png', diemCuoc: 0 },
        { ma: 'nai', hinhAnh: './img/nai.png', diemCuoc: 0 },
        { ma: 'tom', hinhAnh: './img/tom.png', diemCuoc: 0 }
    ],
    tongDiem: 1000,
    mangXucXac: [
        { ma: 'ga', hinhAnh: './img/ga.png' },
        { ma: 'nai', hinhAnh: './img/nai.png' },
        { ma: 'tom', hinhAnh: './img/tom.png' }
    ]
}

export default (state = initialState, { type, item, isPlus }) => {
    switch (type) {
        case DAT_CUOC_BAU_CUA: {
            let danhSachCuoc = [...state.danhSachCuoc]
            let newCuoc = danhSachCuoc.find(qc => qc.ma == item.ma)
            if (isPlus && state.tongDiem >= 100) {
                newCuoc.diemCuoc += 100
                state.tongDiem -= 100
            }
            if (!isPlus && newCuoc.diemCuoc >= 100) {
                newCuoc.diemCuoc -= 100
                state.tongDiem += 100
            }
            return { ...state, danhSachCuoc }
        }
        case PLAY_GAME_BAU_CUA: {
            let mangXucXac = [...state.mangXucXac]
            let danhSachCuoc = [...state.danhSachCuoc]
            // xử lý random
            mangXucXac.forEach( xucXac => {
                let index = Math.floor(Math.random()*6)
                xucXac.ma = danhSachCuoc[index].ma
                xucXac.hinhAnh = danhSachCuoc[index].hinhAnh
            });
            // xử lý thắng thua 
            danhSachCuoc.forEach(itemCuoc => {
                let count = 0
                mangXucXac.forEach(itemXucXac => {
                    if(itemCuoc.ma == itemXucXac.ma && itemCuoc.diemCuoc > 0){
                        count += 1
                    }
                })
                if(count > 0){
                    state.tongDiem += itemCuoc.diemCuoc + (itemCuoc.diemCuoc*count)
                }
                itemCuoc.diemCuoc = 0
            })
            return {...state,mangXucXac,danhSachCuoc }
        }
        case RESET_GAME: {
            state.tongDiem = 1000
            let danhSachCuoc = [...state.danhSachCuoc]
            danhSachCuoc = danhSachCuoc.map((item) => {
                return {...item, diemCuoc: 0}
            })
            return {...state, danhSachCuoc}
        }
        default: return { ...state }
    }
}
