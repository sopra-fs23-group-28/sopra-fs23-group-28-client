import React from 'react'

import { Helmet } from 'react-helmet'

import 'styles/views/choose-avatar.scss'


const slides = [
  {
    title: "DARKGREEN",
    subtitle: "HOPE",
    description: "Belive in you",
    image:
      "/playground_assets/greencamel-200h.gif"
  },
  {
    title: "RED",
    subtitle: "PASSION",
    description: "Let your dreams come true",
    image:
      "/playground_assets/redcamel-200h.gif"
  },
  {
    title: "BLUE",
    subtitle: "CLARITY",
    description: "Use the focus",
    image:
      "/playground_assets/bluecamel-200h.gif"
  },
  {
    title: "BLACK",
    subtitle: "ELEGANCE",
    description: "A piece of heaven",
    image:
      "/playground_assets/blackcamel-200h.gif"
  },
  {
    title: "PURPLE",
    subtitle: "MYSTIC",
    description: "Adventure is never far away",
    image:
      "/playground_assets/purplecamel-200h.gif"
  },
  {
    title: "GREY",
    subtitle: "BALANCED",
    description: "Keep calm",
    image:
      "/playground_assets/greycamel-200h.gif"
  }
];

function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
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

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
    
      onClick={() => select(slide)}
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
      }}
    >
      <div
      
        className="slideContent"
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      >
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.subtitle}</h3>
          <p className="slideDescription">{slide.description}</p>
        </div>
      </div>
    </div>
  );
}

const select = (props) => {
  console.log(props);
}

const ChooseAvatar = (props) => {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (

    <div className="choose-avatar-container">

      <h1 className="choose-avatar-login-text">ChooseAvatar</h1>
      <Helmet>
        <title>ChooseAvatar - SoPra Mockups</title>
        <meta property="og:title" content="ChooseAvatar - SoPra Mockups" />
      </Helmet>
      <div className="slides">
        <button onClick={() => dispatch({ type: "PREV" })}>›</button>

        {[...slides, ...slides, ...slides].map((slide, i) => {
          let offset = slides.length + (state.slideIndex - i);
          return <Slide slide={slide} offset={offset} key={i} />;
        })}
        <button onClick={() => dispatch({ type: "NEXT" })}>‹</button>
      </div>
    </div>
  );


  // <div className="choose-avatar-container">
  //   <Helmet>
  //     <title>ChooseAvatar - SoPra Mockups</title>
  //     <meta property="og:title" content="ChooseAvatar - SoPra Mockups" />
  //   </Helmet>
  //   <div className="choose-avatar-container1">
  //     <h1 className="choose-avatar-login-text">Heading</h1>
  //     <span className="choose-avatar-text">
  //       <span>logindescription</span>
  //       <br></br>
  //     </span>
  //     <div className="choose-avatar-container2">
  //       <div className="choose-avatar-container3">
  //         <img
  //           alt="image1"
  //           src="/playground_assets/bluecamel-200h.gif"
  //           className="choose-avatar-image"
  //         />
  //       </div>
  //       <div className="choose-avatar-container4">
  //         <img
  //           alt="image2"
  //           src="/playground_assets/greencamel-200h.gif"
  //           className="choose-avatar-image1"
  //         />
  //       </div>
  //     </div>
  //     <div className="choose-avatar-container5">
  //       <div className="choose-avatar-container6">
  //         <img
  //           alt="image3"
  //           src="/playground_assets/redcamel-200h.gif"
  //           className="choose-avatar-image2"
  //         />
  //       </div>
  //       <div className="choose-avatar-container7">
  //         <img
  //           alt="image4"
  //           src="/playground_assets/purplecamel-200h.gif"
  //           className="choose-avatar-image3"
  //         />
  //       </div>
  //     </div>
  //   </div>
  // </div>
}

export default ChooseAvatar
