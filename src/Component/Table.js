import React from "react";
import Addicon from "../Icon/addicon.svg";
import Minusicon from "../Icon/minusicon.svg";
import TableRow from "./TableRow";
import styled from "styled-components";
import { Img, P } from "./UI";
const TableContainer = styled.div`
  padding: 70px 100px;
  overflow: hidden;
`;
const TableHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TableHeaderRightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ButtonContainer = styled.div`
  position: relative;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Tables = styled.table`
  width: 100%;
  border-spacing: 0 15px;
  padding-top: 60px;
`;
const Tr = styled.tr`
  background-color: #dfeafa;
  font-family: Spartan;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: #000000;
`;
const Th = styled.th`
  text-align: start;
  border: none;
  padding: 16px;
  :first-child {
    border-radius: 10px 0 0 10px;
  }

  :last-child {
    border-radius: 0 10px 10px 0;
  }
`;
const Button = styled.button`
  background-color: #1c97f3;
  padding: 5px 10px;
  border-radius: 30px;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Select = styled.select`
  font-family: "Spartan" ;
  font-style: normal;
  font-weight: 800;
  border: none;
  margin-right: 30px;
  background-color: transparent;
  font-size: 12px;
  line-height: 15px;
  padding: 5px;
  outline: none;
  letter-spacing: -0.25px;

  color: #0c0e16;
`;
const Option = styled.option`
  font-family: "Spartan";
  font-style: normal;
  font-weight: bold;
  border: none;
  background-color: transparent;
  font-size: 12px;
  line-height: 15px;
  padding: 15px;
  margin: 5px;
  letter-spacing: -0.25px;

  color: #0c0e16;
`;
function Table(props) {
  return (
    <TableContainer>
      <TableHeaderContainer>
        <div>
          <P
            fontstyle="normal"
            fontweight="bold"
            fontsize="32px"
            lineheight="36px"
            color="#0c0e16"
            letterspacing="-1px"
          >
            Interview Requests
          </P>
          <P
            fontstyle="normal"
            fontweight="800"
            fontsize="12px"
            lineheight="15px"
            color="#888eb0"
            letterspacing="-0.25px"
          >
            There are {props.data.length} candidates in the list
          </P>
        </div>
        <TableHeaderRightContainer>
          <Select value={props.filterBy} onChange={e => props.setFilterBy(e.target.value)}>
            <Option value="all">Filter By State</Option>
            <Option value="active">Active</Option>
            <Option value="archived">Archived</Option>
          </Select>
          <ButtonContainer>
            <Button onClick={(e) => props.setShowArchived((p) => !p)}>
              <Container>
                <Img
                  height="10"
                  width="10"
                  backgroundColor="white"
                  borderRadius="50px"
                  padding="10px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  src={props.showArchived ? Minusicon : Addicon}
                ></Img>
                <P
                  fontfamily="Spartan"
                  fontstyle="normal"
                  fontweight="bold"
                  fontsize="12px"
                  lineheight="15px"
                  padding="0px 10px"
                  letterspacing="-0.25px"
                  color="#FFFFFF"
                >
                  {props.showArchived ? "Hide Archived" : "Show Archived"}
                </P>
              </Container>
            </Button>
          </ButtonContainer>
        </TableHeaderRightContainer>
      </TableHeaderContainer>
      <Tables>
        <Tr>
          <Th>Candidate</Th>
          <Th>Role</Th>
          <Th>Last Communication</Th>
          <Th>Salary</Th>
          <Th>Sent By</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
        {props.data.map((p) => (
          <TableRow data={p} />
        ))}
      </Tables>
    </TableContainer>
  );
}

export default Table;
