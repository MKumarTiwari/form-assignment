import Blobs from "../components/Blobs"
// import Form from "../components/Form"
import Update from "../components/Form/Update"
import styled from 'styled-components'


const HomeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const UpdateUser = () => {
    return (
        <>
            <HomeWrapper>
                <Blobs />
                <Update />
            </HomeWrapper>
        </>
    )
}

export default UpdateUser