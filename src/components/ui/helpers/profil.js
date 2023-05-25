import greencamel from "../../../playground_assets/greencamel-200h.gif"
import redcamel from "../../../playground_assets/redcamel-200h.gif"
import bluecamel from "../../../playground_assets/bluecamel-200h.gif"
import blackcamel from "../../../playground_assets/blackcamel-200h.gif"
import purplecamel from "../../../playground_assets/purplecamel-200h.gif"
import greycamel from "../../../playground_assets/greycamel-200h.gif"
import neoncamel from "../../../playground_assets/neoncamel-200h.gif"

// Get Avatar from camelColor of User
const getAvatar = (avatar) => {
  let url = ''
  switch (avatar) {
    case 'DARKGREEN':
      url = greencamel
      break;
    case 'RED':
      url = redcamel
      break;
    case 'BLUE':
      url = bluecamel
      break;
    case 'BLACK':
      url = blackcamel
      break;
    case 'PURPLE':
      url = purplecamel
      break;
    case 'GREY':
      url = greycamel
      break;
    case 'NEONGREEN':
      url = neoncamel
      break;

    default:
      url = ""
      break;
  }
  return url
}
// Return the
const Profil = (props) => {
  return (
    <div className="overview-container02">
      <div className="overview-container03">
        <img
          alt={'profile' + props.user.id}
          src={getAvatar(props.user.camelColor)}
          className="overview-image" />
      </div>
      <h2 className="overview-text">{(props.user.username.toUpperCase())}</h2>
      <h2 className="overview-text">{ props.showState ?'Steps: '+props.user.stepState:''}</h2>
    </div>
  )

}

export default Profil