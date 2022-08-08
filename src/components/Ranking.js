import styled from "styled-components";
import Trophy from "../assets/trophy.svg";
import axios from 'axios'
import React from "react";
import {ThreeDots} from 'react-loader-spinner'

function List({element,index}){
    return (
        <>
          <p>{index+1}. {element.name} - {element.linksCount} links - {element.visitCount} visualizações</p>
        </>
    )

}

export default function Ranking(){
    const [rankingData,setRankingData] = React.useState()
    const [load,setLoad] =React.useState(true)


    React.useEffect(()=> {
        const promise = axios.get(' https://projeto16-back-shortly.herokuapp.com/ranking')
        promise.then((req,res)=> {
        setRankingData(req.data)
        setLoad(false)
    })
    },[])
    
    
    return(
    <Container>
        <Title>
            <img src={Trophy} alt='trofeu'/>
            <h1>Ranking</h1>
        </Title>
        <Table>
            {load? <ThreeDots ></ThreeDots>:rankingData.map( ( e,index ) => <List element={e} key={index} index={index}/>)}
        </Table>
    </Container>)
}

const Container = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
`

const Table = styled.div`
    width: 1000px;
    min-height: 240px;
    background: #FFFFFF;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 24px 24px 0px 0px;
    padding:20px 40px 20px 40px;
    p{
        font-size:22px;
        font-weight: 400;
        line-height: 28px;
        margin-bottom: 13px;
    }
`
const Title = styled.div`
    display: flex;
    align-items: center;
    margin:50px;
    h1{
        font-size: 40px;
        font-weight: 700;
    }
`