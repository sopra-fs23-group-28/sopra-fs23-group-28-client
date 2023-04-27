// Get Avatar from camelColor of User
const getAvatar = (avatar) => {
  let url = ''
  switch (avatar) {
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
  return url
}
// Return the Profile in the Waitingroom and the Race
const Profil = (props) => {
  return (
    <div className="overview-container02">
      <div className="overview-container03">
        <img
          alt={'profile' + props.user.id}
          src={getAvatar(props.user.camelColor)}
          className="overview-image" />
      </div>
      <h1 className="overview-text">{(props.user.username.toUpperCase())}</h1>
      <h1 className="overview-text">{ props.showState ?'Steps: '+props.user.stepState:''}</h1>
    </div>
  )

}

export default Profil