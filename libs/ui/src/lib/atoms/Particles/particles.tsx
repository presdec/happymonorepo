/* eslint-disable react/jsx-no-useless-fragment */
import { FC, lazy, memo, Suspense } from "react";
import styled from "styled-components";

import {
  Container,
  Engine,
  IOptions,
  loadFull,
  RecursivePartial,
} from "./primitive/particles";

const BaseParticles = lazy(() => import("./primitive/particles"));

export type { RecursivePartial, IOptions };

const StyledParticles = styled(BaseParticles)`
  z-index: 0;
  position: fixed;
`;

const defaultOptions: RecursivePartial<IOptions> = {
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: "repulse",
      },
      onHover: {
        enable: false,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 200,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 1,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 200,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: false,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "out",
      random: false,
      speed: 3,
      straight: false,
    },
    // eslint-disable-next-line id-blacklist
    number: {
      density: {
        enable: false,
        value_area: 100,
      },
      value: 100,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 4,
    },
  },
  detectRetina: true,
};

export type ParticleProps = { options?: RecursivePartial<IOptions> };

export const Particles: FC<ParticleProps> = memo(
  ({ options = defaultOptions }) => {
    const particlesInit = async (main: Engine) => {
      // console.log(main);

      // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(main);
    };

    const particlesLoaded = async (container?: Container) => {
      // console.log(container);
    };

    return (
      <Suspense fallback={<></>}>
        <StyledParticles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={options}
        />
      </Suspense>
    );
  }
);

Particles.displayName = "Particles";

export default Particles;
