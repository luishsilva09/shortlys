import styled from "styled-components";
import Trophy from "../assets/trophy.svg"

export default function Ranking(){
    return(
    <Container>
        <Title>
            <img src={Trophy} alt='trofeu'/>
            <h1>Ranking</h1>
        </Title>
        <Table>

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