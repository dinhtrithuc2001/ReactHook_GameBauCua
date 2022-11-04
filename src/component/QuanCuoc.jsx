import React from 'react'
import { useDispatch } from 'react-redux'
import { DatCuoc } from '../redux/action/BauCuaAction'

export default function QuanCuoc(props) {
    const dispatch = useDispatch()

    const { item } = props

    return (
        <div className='row'>
            <div className=" px-5 py-3" >
                <img src={item.hinhAnh} className='w-100' />
                <div className='bg-success p-3 rounded text-center'>
                    <button onClick={() => dispatch(DatCuoc(item, false))} className='btn btn-danger px-3 p-1'
                         style={{ fontSize: 25 }}>-
                    </button>
                    <span className='mx-2' style={{ color: 'yellow' }}>{item.diemCuoc}</span>
                    <button onClick={() => dispatch(DatCuoc(item, true))} className='btn btn-danger px-3 p-1'
                        style={{ fontSize: 25 }}>+
                    </button>
                </div>
            </div>
        </div>
    )
}
