import React from 'react'
import XucXac from './XucXac'
import { useSelector, useDispatch } from 'react-redux'
import { PlayGameBauCua } from '../redux/action/BauCuaAction'


export default function DanhSachXucXac() {
    const mangXucXac = useSelector(state => state.BauCuaReducer.mangXucXac)
    const dispatch = useDispatch()

    const renderMangXucXac = () => {
        return mangXucXac.map((item, index) => <div key={index} className={`${index == 2 ? 'col-12 ' : 'col-6'}  text-center`}>
            <XucXac item={item} />
        </div>)
    }
    console.log(mangXucXac);
    return (
        <div className='mt-5 ms-5'>     
            <div className="bg-white" style={{ maxWidth: 400, height: 300, borderRadius: '50%',paddingRight: '5rem'}}>
                <div className="row" >
                    {renderMangXucXac()}
                </div>
            </div>
            <div className="text-center">
                <button onClick={()=>dispatch(PlayGameBauCua())} className='btn btn-success px-5 py-3 mt-3'>Xốc</button>
            </div>
        </div>
    )
}
