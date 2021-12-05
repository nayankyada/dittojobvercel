import React from "react";
import Temp1 from "../Icon/temp1.svg";
import Temp2 from "../Icon/temp2.svg";
import moment from "moment";
import styled from "styled-components";
import { Img, P } from "./UI";
const Tr = styled.tr`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
`;

const CandidateProfileContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const StatusContainer = styled.div`
  background-color: ${(props) => props.backgroundcolor};
  border-radius: ${(props) => props.borderradius};
  padding: ${(props) => (props.padding ? props.padding : "")};
`;

const Td = styled.td`
   width: ${(props) => (props.width ? props.width : "")};
   :first-child {
    border-radius: 10px 0 0 10px;
  }

  :last-child {
    border-radius: 0 10px 10px 0;
  }

`
export default function TableRow(props) {
  return (
    <Tr>
      <Td>
        <CandidateProfileContainer>
          <div style={{ padding: "10px" }}>
            <Img height="40" src={props.data.image} borderRadius="50px"></Img>
          </div>
          <P
            padding="0px 10px "
            fontfamily="Spartan"
            fontweight="800"
            fontsize="12px"
            lineheight="15px"
            letterspacing="-0.25px"
            color="#858BB2"
          >
            {props.data.candidate}
          </P>
        </CandidateProfileContainer>
      </Td>
      <Td>
        <P
          padding="0px 10px "
          fontfamily="Spartan"
          fontweight="800"
          fontsize="12px"
          lineheight="15px"
          letterspacing="-0.25px"
          color="#858BB2"
        >
          {props.data.role ? props.data.role : "-"}
        </P>
      </Td>
      <Td>
        <P
          padding="0px 10px "
          fontfamily="Spartan"
          fontweight="800"
          fontsize="12px"
          lineheight="15px"
          letterspacing="-0.25px"
          color="#858BB2"
        >
          {props.data.last_comms.description}
          {" " + moment(props.data.last_comms.date_time, "YYYYMMDD").fromNow()}
        </P>
      </Td>
      <Td>
        <P
          padding="0px 10px "
          fontfamily="Spartan"
          fontweight="bold"
          fontsize="16px"
          lineheight="24px"
          letterspacing="-0.8px"
          color="#0C0E16"
        >
          R {props.data.salary}
        </P>
      </Td>
      <Td>
        <P
          padding="0px 10px "
          fontfamily="Spartan"
          fontweight="800"
          fontsize="12px"
          lineheight="15px"
          letterspacing="-0.25px"
          color="#858BB2"
        >
          {props.data.sent_by}
        </P>
      </Td>
      <Td width="100px">
        <P
          backgroundcolor={props.data.archived ? "#FEF5F5" : "#F5FDF9"}
          padding="10px"
          color={props.data.archived ? "#EC5757" : "#55D698"}
          fontfamily="Spartan"
          fontsize="12px"
          lineheight="15px"
          textalign="center"
          borderradius="10px"
          fontweight="bold"
          display="flex"
          justifycontent="space-between"
          alignitems="center"
        >
          <StatusContainer
            backgroundcolor={props.data.archived ? "#EC5757" : "#55D698"}
            borderradius="50px"
            padding="5px"
          ></StatusContainer>
          {props.data.archived ? "Archived" : "Active"}
        </P>
      </Td>
      <Td>
        <Img padding="20px" src={props.data.archived ? Temp2 : Temp1}></Img>
      </Td>
    </Tr>
  );
}
