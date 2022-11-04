import React from 'react'
import QuanCuoc from './QuanCuoc'
import { useSelector, useDispatch } from 'react-redux'

export default function DanhSachCuoc(props) {
    const danhSachCuoc = useSelector(state => state.BauCuaReducer.danhSachCuoc)
    return (
        <div className='row py-3 ps-3'>
            {danhSachCuoc.map((item, index) => <div key={index} className="col-4">
                <QuanCuoc item={item} />
            </div>)}
        </div>
    )
}
