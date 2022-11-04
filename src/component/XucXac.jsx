import React, { Fragment } from 'react'

export default function XucXac(props) {
    const { ma, hinhAnh } = props.item

    return (
        <Fragment>
            <div className='scene mx-auto ps-3'>
                <div className='cube'>
                    <img src={hinhAnh} className='img-fluid cube__face front' style={{ width: 60 }} />
                    <img src='./img/bau.png' className='img-fluid cube__face back' style={{ width: 60 }} />
                    <img src='./img/ga.png' className='img-fluid cube__face left' style={{ width: 60 }} />
                    <img src='./img/ca.png' className='img-fluid cube__face right' style={{ width: 60 }} />
                    <img src='./img/tom.png' className='img-fluid cube__face top' style={{ width: 60 }} />
                    <img src='./img/cua.png' className='img-fluid cube__face bottom' style={{ width: 60 }} />
                </div>
            </div>
        </Fragment>
    )
}
