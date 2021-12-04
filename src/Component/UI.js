import styled from "styled-components";

export const Img = styled.img`
  backgroung-image: ${(props) => props.src};
  position: ${(props) => (props.position ? props.position : "")};
  bottom: ${(props) => (props.bottom ? props.bottom : "")};
  right: ${(props) => (props.right ? props.right : "")};
  width: ${(props) => (props.width ? props.width : "")};
  height: ${(props) => (props.height ? props.height : "")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : ""};
  border-radius:${(props) => (props.borderRadius ? props.borderRadius : "")};
  padding:${(props) => (props.padding ? props.padding : "")};
  display:${(props) => (props.display ? props.display : "")};
  justify-content:${(props) =>
    props.justifyContent ? props.justifyContent : ""};
  align-items:${(props) => (props.alignItems ? props.alignItems : "")};

`;

export const P = styled.p`
  font-family: "Spartan";
  font-style: ${(props) => props.fontstyle};
  font-weight: ${(props) => props.fontweight};
  font-size: ${(props) => props.fontsize};
  line-height: ${(props) => props.lineheight};
  padding:${(props) => (props.padding ? props.padding : "")};
  color: ${(props) => props.color};
  letter-spacing: ${(props) => props.letterSpacing};
  background-color:${(props) => props.backgroundcolor} ;
  text-align: ${(props) => props.textalign};
  border-radius: ${(props) => props.borderradius};
  display: ${(props) => props.display} ;
  justify-content: ${(props) => props.justifycontent};
  align-items: ${(props) => props.alignitems};
`;
