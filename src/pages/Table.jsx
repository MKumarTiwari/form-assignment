import UserTable from "../components/UserTable/usertable";
import {useSelector} from "react-redux"
import styled from 'styled-components';

const TableWrapper = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
        margin: 0px 30px;
`;

const HeadingText = styled.h1`
text-align: center;
    font-size: 36px;
    line-height: 1.3;
    font-weight: 600;
`;

const data = [{
    name: "Manish Tiwari",
    email: "manish.tiwari@example.com",
    phone: "123-456-7890",
    skills: {
        html: true,
        css: false,
        javascript: true
    }
}];

const Table = () => {

    const users = useSelector((state) => state.users)
  console.log(users,"fromtable")

    return (
        <TableWrapper>
            <HeadingText>User Information</HeadingText>
            <UserTable data={data} />
        </TableWrapper>
    );
};

export default Table;