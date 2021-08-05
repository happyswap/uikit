import styled from "styled-components";

const TabContent = styled.div.attrs(
  props=>({
    className:"tab-content"
  })
)<{active:boolean}>`
  display:${props => (props.active ? "" : "none")}
`;

export default TabContent;
