import React, { useState } from 'react';
import styled from 'styled-components';
import { flattenData } from '../helper';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from '../../features/userSlice';
const Table = styled.table`
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  background-color: #f4f4f4;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
  margin-right: 10px;
  
  &:hover {
    color: #0056b3;
    text-decoration: underline;
  }
`;

const Button = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;
  
  &:hover {
    background-color: #c82333;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${props => (props.isVisible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ModalButton = styled.button`
  background-color: ${props => (props.primary ? '#007bff' : '#dc3545')};
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
  
  &:hover {
    background-color: ${props => (props.primary ? '#0056b3' : '#c82333')};
  }
`;

const UserTable = () => {
    const [showModal, setShowModal] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);
    const users = useSelector((state) => state.user);
    const flattenedData = flattenData(users);
    const headers = flattenedData.length > 0 ? Object.keys(flattenedData[0]) : [];
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        setUserToDelete(id);
        setShowModal(true);
    };

    const confirmDelete = () => {
        dispatch(deleteUser({ id: userToDelete }));
        setShowModal(false);
    };

    const cancelDelete = () => {
        setShowModal(false);
    };

    return (
        <>
            <Table>
                <thead>
                    <tr>
                        {headers.map(header => (
                            <Th key={header}>
                                {header.charAt(0).toUpperCase() + header.slice(1).replace(/\./g, ' ')}
                            </Th>
                        ))}
                        <Th>Action</Th>
                    </tr>
                </thead>
                <tbody>
                    {flattenedData.length > 0 ? (
                        flattenedData.map((item, index) => (
                            <tr key={index}>
                                {headers.map(header => (
                                    <Td key={header}>{item[header]}</Td>
                                ))}
                                <Td>
                                    <StyledLink to={`/edit/${item.id}`}>Edit</StyledLink>
                                    <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                                </Td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <Td colSpan={headers.length + 1}>No data available</Td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <ModalOverlay isVisible={showModal}>
                <ModalContent>
                    <h3>Confirm Delete</h3>
                    <p>Are you sure you want to delete this user?</p>
                    <div>
                        <ModalButton primary onClick={confirmDelete}>Yes, Delete</ModalButton>
                        <ModalButton onClick={cancelDelete}>Cancel</ModalButton>
                    </div>
                </ModalContent>
            </ModalOverlay>
        </>
    );
};

export default UserTable;
