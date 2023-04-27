import styled from "styled-components";

// Get Avatar from CamelColor of the User
const getAvatar = (user) => {
  
  let url = ''
  if (user) {
  switch (user.camelColor) {
    case 'DARKGREEN':
      url = "/playground_assets/greencamel-200h.gif"
      break;
    case 'RED':
      url = "/playground_assets/redcamel-200h.gif"
      break;
    case 'BLUE':
      url = "/playground_assets/bluecamel-200h.gif"
      break;
    case 'BLACK':
      url = "/playground_assets/blackcamel-200h.gif"
      break;
    case 'PURPLE':
      url = "/playground_assets/purplecamel-200h.gif"
      break;
    case 'GREY':
      url = "/playground_assets/greycamel-200h.gif"
      break;
    case 'NEONGREEN':
      url = "/playground_assets/neoncamel-200h.gif"
      break;

    default:
      url = ""
      break;
  }
  
  }
  return url
}
// Use Styled componet to move the Camel with the props (stateState is the actual position)
const Horse = styled.img.attrs((props) => ({
  src: props.src,
}))`
  left: ${props => (props.left)+'vw'};
  width: 250;
  height: auto;
  bottom: -15px;
  margin: auto;
  position: absolute;
  align-self: flex-start;
  object-fit: cover;
  
  @media(max-width:970px) {
    height: 120px;
    left: ${props => (-0+props.left)+'vw'};
  }
  @media(max-width: 676px) {
    height: 100px;
    left: ${props => (-0+props.left)+'vw'};
  }
`;

//Return only the court where the race is with the camels on different positions
const Court = ({users, maxSteps}) => {
  return(
    <><div className="race-container07">
      <img
        alt="3"
        src={"/playground_assets/tribune-900w.png"}
        className="race-image2" />
    </div><div className="race-container08">
        <Horse
          alt="4"
          src={getAvatar(users[0])} 
          left={-10+(60/maxSteps)*users[0].stepState}/>
      </div><div className="race-container09">
        <Horse
          alt="5"
          src={getAvatar(users[1])} 
          left={-10+(60/maxSteps)*users[1].stepState}/>
      </div><div className="race-container10">
        <Horse
          alt="6"
          src={getAvatar(users[2])} 
          left={-10+(60/maxSteps)*users[2].stepState}/>
      </div><div className="race-container11">
        <Horse
          alt="7"
          src={getAvatar(users[3])} 
          left={-10+(60/maxSteps)*users[3].stepState}/>
      </div></>

  )
}
export default Court