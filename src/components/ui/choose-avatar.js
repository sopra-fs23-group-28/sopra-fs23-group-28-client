import { useReducer, useEffect, useRef, useState } from 'react'
import { api } from 'helpers/api';
import greencamel from "../../playground_assets/greencamel-200h.gif"
import redcamel from "../../playground_assets/redcamel-200h.gif"
import bluecamel from "../../playground_assets/bluecamel-200h.gif"
import blackcamel from "../../playground_assets/blackcamel-200h.gif"
import purplecamel from "../../playground_assets/purplecamel-200h.gif"
import greycamel from "../../playground_assets/greycamel-200h.gif"
import neoncamel from "../../playground_assets/neoncamel-200h.gif"

import 'styles/views/choose-avatar.scss'
import { useNavigate } from 'react-router-dom';


let slides = [
  {
    title: 'DARKGREEN',
    subtitle: 'HOPE',
    description: 'Belive in you',
    image:
    greencamel
  },
  {
    title: 'RED',
    subtitle: 'PASSION',
    description: 'Let your dreams come true',
    image:
     redcamel
  },
  {
    title: 'BLUE',
    subtitle: 'CLARITY',
    description: 'Use the focus',
    image:
      bluecamel
  },
  {
    title: 'BLACK',
    subtitle: 'ELEGANCE',
    description: 'A piece of heaven',
    image:
      blackcamel
  },
  {
    title: 'PURPLE',
    subtitle: 'MYSTIC',
    description: 'Adventure is never far away',
    image:
      purplecamel
  },
  {
    title: 'GREY',
    subtitle: 'BALANCED',
    description: 'Keep calm',
    image:
      greycamel
  },
  {
    title: 'NEONGREEN',
    subtitle: 'BRIGHTNESS',
    description: 'Feel the Energy',
    image:
      neoncamel
  }
];

function useTilt(active) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty('--px', px);
      el.style.setProperty('--py', py);
    };

    el.addEventListener('mousemove', handleMouseMove);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0
};

const slidesReducer = (state, event) => {
  if (event.type === 'NEXT') {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length
    };
  }
  if (event.type === 'PREV') {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
    };
  }
};

function Slide({ slide, id, offset, avatar , url }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div

      onClick={() => select(slide, id, avatar, url)}
      ref={ref}
      className='slide'
      data-active={active}
      style={{
        '--offset': offset,
        '--dir': offset === 0 ? 0 : (offset > 0 ? 1 : -1)
      }}
    >
      <div

        className='slideContent'
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      >
        <div className='slideContentInner'>
          <h2 className='slideTitle'>{slide.title}</h2>
          <h3 className='slideSubtitle'>{slide.subtitle}</h3>
          <p className='slideDescription'>{slide.description}</p>
        </div>
      </div>
    </div>
  );
}


// use react-router-dom's hook to access the navigate
const select = async (props, id, avatar, url) => {
  const camelColor = props.title
  const requestBody = JSON.stringify({camelColor});
  await api.put('/users/'+id, requestBody);    
  localStorage.setItem('avatar', camelColor);
  avatar(camelColor)
  url();
}


const ChooseAvatar = (props) => {
  const [users, setUsers] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [state, dispatch] = useReducer(slidesReducer, initialState);
  const id = localStorage.getItem('id');
  const pin = localStorage.getItem('pin');
  
  const navigate = useNavigate()
  useEffect( () => {
    
    // is Mounted to check if unmounted Objects exists.
    let isMounted = true;
        // Get Users in Lobby for the Color View
        api.get('/users/' + pin).then(data => {
          if (isMounted) {
            setUsers(data.data)
            setAvatar(localStorage.getItem('avatar'))
            }
          }
        )
        // Clean-up:
        return () => {isMounted = false;    }
  }, [avatar, pin])


  // Filter the Colors for choose Avater
  if (users) {
    const user = users
    let color = user.map(x => x.camelColor).filter(x => (x !== undefined) && (x !== null))
    color.forEach(e => {
      // eslint-disable-next-line array-callback-return
      slides = slides.filter(x => {
        if (x.title !== e) {
          return x
        }
      })
    });
  }

  const url = () => {
  navigate('/game/'+pin)
  }


  return (
    <div className='choose-avatar-container'>
      <h1 className='choose-avatar-login-text'>Choose your Avatar</h1>
      <div className='slides'>
        <button onClick={() => dispatch({ type: 'PREV' })}>›</button>

        {[...slides, ...slides, ...slides].map((slide, i) => {
          let offset = slides.length + (state.slideIndex - i);
          return <Slide slide={slide} id={id} offset={offset} key={i} avatar={(e) => setAvatar(e)} url={url} />;
        })}
        <button onClick={() => dispatch({ type: 'NEXT' })}>‹</button>
      </div>
    </div>
  )
}

export default ChooseAvatar
