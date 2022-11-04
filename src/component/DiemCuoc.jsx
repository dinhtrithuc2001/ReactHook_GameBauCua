import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ResetGame } from '../redux/action/BauCuaAction'


export default function DiemCuoc() {
    const tongDiem = useSelector(state => state.BauCuaReducer.tongDiem)
    const dispatch = useDispatch()
    return (
        <div>
            <h1 className=' text-center display-4 py-3 text-white'>GAME BẦU CUA</h1>
            <div className="text-center d-flex justify-content-evenly">
                <div className=' p-3 bg-danger text-light rounded' style={{ fontSize: 20 }}>Tiền thưởng: 
                    <span className='text-light'> {tongDiem.toLocaleString()}$</span>
                </div>
                <div><button onClick={()=>dispatch(ResetGame())} className='text-light p-3 btn btn-success px-5'>Chơi lại</button></div>
            </div>
        </div>
    )
}
