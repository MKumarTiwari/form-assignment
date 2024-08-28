import Blobs from "../components/Blobs"
import Form from "../components/Form"
import styled from 'styled-components'


const HomeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const HomePage = () => {
    return (
        <>
            <HomeWrapper>
                <Blobs />
                <Form />
            </HomeWrapper>
        </>
    )
}

export default HomePage