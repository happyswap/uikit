import styled from "styled-components";

const TabContent = styled.div.attrs(
  props=>{
    // @ts-ignore
    const {active} = props;
    if(active){
      return ({ className:"active tab-pane fade" })
    }
    return ({ className:"tab-pane fade" })
  }
)<{active:boolean}>`
  display:${props => (props.active ? "" : "none")}
`;

export default TabContent;
