import React,{ type CSSProperties } from 'react';

const Page404: React.FC = () => {
  const styles: Record<string, CSSProperties> = {
    root: {
      '--primary-color': '#905bd6',
      '--background-color': '#100E17',
      '--glow-color': 'rgba(144, 91, 214, 0.5)',
      '--glitch-color-1': '#ff00c1',
      '--glitch-color-2': '#00ffc3',
    } as React.CSSProperties,
    body: {
      backgroundColor: 'var(--background-color)',
      fontFamily: "'Space Grotesk', sans-serif",
      color: 'white',
      overflow: 'hidden' ,
    },
    glitchText: {
      position: 'relative',
      color: 'white',
      textShadow:
        '-1px -1px 0 var(--glitch-color-1), 1px 1px 0 var(--glitch-color-2)',
    },
    glowButton: {
      boxShadow: '0 0 15px 5px var(--glow-color)',
      backgroundColor: 'var(--primary-color)',
      padding: '0.75rem 2rem',
      borderRadius: '9999px',
      color: 'white',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      transition: 'all 0.3s ease-in-out',
      minWidth: '180px',
      textAlign: 'center',
      display: 'inline-block',
      cursor: 'pointer',
    },
    cubeFace: {
      position: 'absolute',
      width: '150px',
      height: '150px',
      border: '2px solid var(--primary-color)',
      background: 'rgba(144, 91, 214, 0.1)',
      backdropFilter: 'blur(5px)',
    },
    stars: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: `
        radial-gradient(1px 1px at 20% 30%, #fff, transparent),
        radial-gradient(1px 1px at 80% 70%, #fff, transparent),
        radial-gradient(1px 1px at 50% 50%, #fff, transparent),
        radial-gradient(2px 2px at 10% 90%, #fff, transparent),
        radial-gradient(2px 2px at 90% 10%, #fff, transparent)
      `,
      backgroundRepeat: 'no-repeat',
      animation: 'twinkle 15s infinite linear',
    },
    cube: {
      width: '150px',
      height: '150px',
      position: 'relative',
      transformStyle: 'preserve-3d',
      animation: 'floatRotate 20s infinite linear',
    },
    perspective: {
      perspective: '800px',
    },
    fullHeightCenter: {
      minHeight: '100vh',
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      textAlign: 'center',
      
    },
  };

  const handleHover = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hover: boolean
  ) => {
    const target = e.currentTarget;
    if (hover) {
      target.style.boxShadow = '0 0 25px 10px var(--glow-color)';
      target.style.transform = 'scale(1.05)';
    } else {
      target.style.boxShadow = styles.glowButton.boxShadow!;
      target.style.transform = 'scale(1)';
    }
  };

  return (
    <div style={{ ...styles.root, ...styles.body }} className='h-full w-full p-8'>
      <div style={styles.fullHeightCenter} className='overflow-hidden'>
        <div style={styles.stars}></div>

        <div
          style={{
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '3rem',
          }}
          
        >
          <div style={styles.perspective}>
            <div style={styles.cube}>
              <div
                style={{
                  ...styles.cubeFace,
                  transform: 'rotateY(0deg) translateZ(75px)',
                }}
              />
              <div
                style={{
                  ...styles.cubeFace,
                  transform: 'rotateY(180deg) translateZ(75px)',
                }}
              />
              <div
                style={{
                  ...styles.cubeFace,
                  transform: 'rotateY(90deg) translateZ(75px)',
                }}
              />
              <div
                style={{
                  ...styles.cubeFace,
                  transform: 'rotateY(-90deg) translateZ(75px)',
                }}
              />
              <div
                style={{
                  ...styles.cubeFace,
                  transform: 'rotateX(90deg) translateZ(75px)',
                }}
              />
              <div
                style={{
                  ...styles.cubeFace,
                  transform: 'rotateX(-90deg) translateZ(75px)',
                }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h1
              style={{
                ...styles.glitchText,
                fontSize: '4rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
              }}
            >
             Hqm Solutions
            </h1>
          
          </div>

          <a
            href="/"
            style={styles.glowButton}
            onMouseOver={(e) => handleHover(e, true)}
            onMouseOut={(e) => handleHover(e, false)}
          >
           Coming Soon
          </a>
        </div>
      </div>

      <style>
        {`
          @keyframes floatRotate {
            0% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
            50% { transform: translateY(-20px) rotateX(180deg) rotateY(180deg); }
            100% { transform: translateY(0px) rotateX(360deg) rotateY(360deg); }
          }

          @keyframes twinkle {
            0% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default Page404;
