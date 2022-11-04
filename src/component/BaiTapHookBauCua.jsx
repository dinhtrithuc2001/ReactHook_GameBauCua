import React from 'react'
import { useState, useEffect } from 'react'
import DanhSachCuoc from './DanhSachCuoc'
import DanhSachXucXac from './DanhSachXucXac'
import DiemCuoc from './DiemCuoc'
import './BaiTapGameBauCua.css'

export default (props) => {
    return (
        <div id='BaiTapGameBauCua' className='container-fluid'>
            <DiemCuoc />
            <div className="row">
                <div className="col-8">
                    <DanhSachCuoc />
                </div>
                <div className="col-4">
                    <DanhSachXucXac />
                </div>
            </div>
        </div>
    )
}
