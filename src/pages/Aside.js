import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {styled } from 'styled-components'

const ASide = styled.div`
        position: fixed;
        right: 20px;
        bottom: 20px;
        box-shadow: 0px 0px 3px gray;
        background-color:  ${(props) => props.theme.colors.Secondary};
        border-radius: 50%;
        cursor: pointer;
        width: 50px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        z-index: 500000;
        color: ${(props) => props.theme.colors.Primary};
    `

function Aside({ThemeSelect, themeConfig}) {
    return (
        <>
            <ASide onClick={ThemeSelect}>
                <FontAwesomeIcon icon={ themeConfig === 'light' ?  faMoon: faSun} size="lg"/>
            </ASide>
        </>
  )




  
}

export default Aside