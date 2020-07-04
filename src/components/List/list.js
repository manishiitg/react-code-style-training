import React from "react"
import styled from "styled-components"


const StyledList = styled.div`
-webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`

const List = (props) => {
    return (
        <StyledList>
            <ul className="list-group">
                {
                    props.list.map((ele, idx) => {
                        return <li className="list-group-item" key={idx}>{ele}</li>
                    })
                }
            </ul>
        </StyledList>
    )
}

export default List