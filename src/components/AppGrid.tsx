'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';

interface AppGridProps {
  searchText: string;
}

interface AppData {
  name: string;
  url: string;
  iconClass: string;
  iconContent: React.ReactNode;
}

export function AppGrid({ searchText }: AppGridProps) {
  const [filteredApps, setFilteredApps] = useState<AppData[]>([]);

  // Define all apps with useMemo to prevent recreation on each render
  const apps = useMemo<AppData[]>(() => [
    {
      name: 'Hyperloo',
      url: 'https://tumph.github.io/hyperlooprod/',
      iconClass: 'hyperloo',
      iconContent: (
        <div className="icon-inner">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            {/* Top layer - 1 node */}
            <circle cx="32" cy="8" r="4" fill="#7042f8"/>
            
            {/* Middle layer - 2 nodes */}
            <circle cx="20" cy="28" r="5" fill="#7042f8"/>
            <circle cx="44" cy="28" r="5" fill="#7042f8"/>
            
            {/* Bottom layer - 4 nodes */}
            <circle cx="10" cy="48" r="5" fill="#7042f8"/>
            <circle cx="26" cy="48" r="4.5" fill="#7042f8"/>
            <circle cx="42" cy="48" r="4.5" fill="#7042f8"/>
            <circle cx="58" cy="48" r="6" fill="#7042f8"/>
            
            {/* Connection lines */}
            <g stroke="#7042f8" strokeWidth="2" opacity="0.9">
              {/* Top to middle layer */}
              <line x1="32" y1="8" x2="20" y2="28"/>
              <line x1="32" y1="8" x2="44" y2="28"/>
              
              {/* Middle to bottom layer */}
              <line x1="20" y1="28" x2="10" y2="48"/>
              <line x1="20" y1="28" x2="26" y2="48"/>
              <line x1="44" y1="28" x2="42" y2="48"/>
              <line x1="44" y1="28" x2="58" y2="48"/>
            </g>
          </svg>
        </div>
      )
    },
    {
      name: 'Semesters',
      url: 'https://semesters.ca/',
      iconClass: 'semesters',
      iconContent: (
        <div className="icon-inner">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33 5.92308V15.7692L25 13.3077V3.46154L33 5.92308Z" fill="black"/>
            <path d="M33 18.2308L9 10.8462L1 9V15.7692L25 23.1538L33 21V18.2308Z" fill="black"/>
            <path d="M1 28.0769V18.2308L9 20.6923V30.5385L1 28.0769Z" fill="black"/>
            <path d="M17 33L33 28.0769V21L25 23.1538L17 25.6154L13 24.3846V31.7692L17 33Z" fill="black"/>
            <path d="M9 10.8462L17 8.1022L21 9.47418V2.23077L17 1L1 5.92308V9L9 10.8462Z" fill="black"/>
            <path d="M9 10.8462L17 8.1022L21 9.47418V2.23077L17 1L1 5.92308V9M9 10.8462L33 18.2308V21M9 10.8462L1 9M25 23.1538L17 25.6154L13 24.3846V31.7692L17 33L33 28.0769V21M25 23.1538L1 15.7692V9M25 23.1538L33 21M33 5.92308V15.7692L25 13.3077V3.46154L33 5.92308ZM1 28.0769V18.2308L9 20.6923V30.5385L1 28.0769Z" stroke="white"/>
          </svg>
        </div>
      )
    },
    {
      name: 'Waterloo Tunnel Map',
      url: 'https://watisgrass.vercel.app/',
      iconClass: 'map',
      iconContent: (
        <div className="icon-inner">📍</div>
      )
    },
    {
      name: 'UW Flow',
      url: 'https://uwflow.com/',
      iconClass: 'uwflow',
      iconContent: (
        <div className="icon-inner">
          <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="20" stroke="blue" strokeWidth="2" fill="none" />
            <circle cx="25" cy="25" r="10" fill="blue" />
          </svg>
        </div>
      )
    },
    {
      name: 'GRT Transit',
      url: 'https://grtapp.ca/v3/stop.asp?',
      iconClass: 'grt',
      iconContent: (
        <div className="icon-inner">🚌</div>
      )
    },
    {
      name: 'Weather',
      url: 'https://www.theweathernetwork.com/en/city/ca/ontario/waterloo/current',
      iconClass: 'weather',
      iconContent: (
        <div className="icon-inner">🌧️</div>
      )
    },
    {
      name: 'Study Spots',
      url: 'https://spots.aksharbarot.com/',
      iconClass: 'spots',
      iconContent: (
        <div className="icon-inner">
          <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,50 130,30 130,170 50,150" fill="white" />
            <circle cx="70" cy="100" r="5" fill="black" />
            <path d="M130 50 L145 50 L145 160" stroke="white" strokeWidth="10" strokeLinecap="round" fill="none" />
          </svg>
        </div>
      )
    },
    {
      name: 'Recipe Planner',
      url: 'https://www.cupboardcuisine.ai/start',
      iconClass: 'food',
      iconContent: (
        <div className="icon-inner">🍅</div>
      )
    },
    {
      name: 'Workout Planner',
      url: 'https://workout.lol/',
      iconClass: 'workout',
      iconContent: (
        <div className="icon-inner">🦾</div>
      )
    },
    {
      name: 'Chrome',
      url: 'https://google.com',
      iconClass: 'chrome',
      iconContent: (
        <div className="icon-inner">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
             viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve" width="45" height="45">
            <path fill="#FFFFFF" d="M255.73,383.71c70.3,0,127.3-56.99,127.3-127.3s-56.99-127.3-127.3-127.3s-127.3,56.99-127.3,127.3 S185.42,383.71,255.73,383.71z"/>
            <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="283.2852" y1="18.9008" x2="62.8264" y2="400.7473" gradientTransform="matrix(1 0 0 -1 0 514)">
              <stop offset="0" style={{ stopColor: "#1E8E3E" }} />
              <stop offset="1" style={{ stopColor: "#34A853" }} />
            </linearGradient>
            <path fill="url(#SVGID_1_)" d="M145.48,320.08L35.26,129.17c-22.35,38.7-34.12,82.6-34.12,127.29s11.76,88.59,34.11,127.29 c22.35,38.7,54.49,70.83,93.2,93.17c38.71,22.34,82.61,34.09,127.3,34.08l110.22-190.92v-0.03c-11.16,19.36-27.23,35.44-46.58,46.62 c-19.35,11.18-41.3,17.07-63.65,17.07s-44.3-5.88-63.66-17.05C172.72,355.52,156.65,339.44,145.48,320.08z"/>
            <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="218.5901" y1="2.3333" x2="439.0491" y2="384.1796" gradientTransform="matrix(1 0 0 -1 0 514)">
              <stop offset="0" style={{ stopColor: "#FCC934" }} />
              <stop offset="1" style={{ stopColor: "#FBBC04" }} />
            </linearGradient>
            <path fill="url(#SVGID_2_)" d="M365.96,320.08L255.74,510.99c44.69,0.01,88.59-11.75,127.29-34.1 c38.7-22.34,70.84-54.48,93.18-93.18c22.34-38.7,34.1-82.61,34.09-127.3c-0.01-44.69-11.78-88.59-34.14-127.28H255.72l-0.03,0.02 c22.35-0.01,44.31,5.86,63.66,17.03c19.36,11.17,35.43,27.24,46.61,46.59c11.18,19.35,17.06,41.31,17.06,63.66 C383.03,278.77,377.14,300.72,365.96,320.08L365.96,320.08z"/>
            <path fill="#1A73E8" d="M255.73,357.21c55.66,0,100.78-45.12,100.78-100.78s-45.12-100.78-100.78-100.78 s-100.78,45.12-100.78,100.78S200.07,357.21,255.73,357.21z"/>
            <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="35.2587" y1="353.0303" x2="476.177" y2="353.0303" gradientTransform="matrix(1 0 0 -1 0 514)">
              <stop offset="0" style={{ stopColor: "#D93025" }} />
              <stop offset="1" style={{ stopColor: "#EA4335" }} />
            </linearGradient>
            <path fill="url(#SVGID_3_)" d="M255.73,129.14h220.45C453.84,90.43,421.7,58.29,383,35.95C344.3,13.6,300.4,1.84,255.71,1.84 c-44.69,0-88.59,11.77-127.29,34.12c-38.7,22.35-70.83,54.5-93.16,93.2l110.22,190.92l0.03,0.02 c-11.18-19.35-17.08-41.3-17.08-63.65s5.87-44.31,17.04-63.66c11.17-19.36,27.24-35.43,46.6-46.6 C211.42,135.01,233.38,129.13,255.73,129.14z"/>
          </svg>
        </div>
      )
    },
    {
      name: 'Perplexity',
      url: 'https://perplexity.ai/',
      iconClass: 'perplexity',
      iconContent: (
        <div className="icon-inner">
          <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 509.64">
            <path fill="#1F1F1F" d="M115.613 0h280.774C459.974 0 512 52.025 512 115.612v278.415c0 63.587-52.026 115.613-115.613 115.613H115.613C52.026 509.64 0 457.614 0 394.027V115.612C0 52.025 52.026 0 115.613 0z"/>
            <path fill="#fff" fillRule="nonzero" d="M348.851 128.063l-68.946 58.302h68.946v-58.302zm-83.908 48.709l100.931-85.349v94.942h32.244v143.421h-38.731v90.004l-94.442-86.662v83.946h-17.023v-83.906l-96.596 86.246v-89.628h-37.445V186.365h38.732V90.768l95.309 84.958v-83.16h17.023l-.002 84.206zm-29.209 26.616c-34.955.02-69.893 0-104.83 0v109.375h20.415v-27.121l84.415-82.254zm41.445 0l82.208 82.324v27.051h21.708V203.388c-34.617 0-69.274.02-103.916 0zm-42.874-17.023l-64.669-57.646v57.646h64.669zm13.617 124.076v-95.2l-79.573 77.516v88.731l79.573-71.047zm17.252-95.022v94.863l77.19 70.83c0-29.485-.012-58.943-.012-88.425l-77.178-77.268z"/>
          </svg>
        </div>
      )
    },
    {
      name: 'chatUW',
      url: 'https://chat-uw-seven.vercel.app/',
      iconClass: 'photo-booth',
      iconContent: (
        <div className="icon-inner">
          <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
            <rect width="200" height="200" rx="40" fill="#002145"/>
            <path d="M60 80c0-11.046 8.954-20 20-20h40c11.046 0 20 8.954 20 20v20c0 11.046-8.954 20-20 20H85l-15 15v-15H80c-11.046 0-20-8.954-20-20V80z" 
                  fill="#FFFFFF" stroke="#99C1F1" strokeWidth="6"/>
            <path d="M80 80l 10 20 10-20 10 20 10-20" 
                  stroke="#FFD700" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="160" cy="45" r="6" fill="#FFD700"/>
            <path d="M160 35v20M150 45h20" stroke="#FFD700" strokeWidth="2"/>
          </svg>
        </div>
      )
    },
    {
      name: 'Waterloo Reddit',
      url: 'https://www.reddit.com/r/uwaterloo',
      iconClass: 'reddit',
      iconContent: (
        <div className="icon-inner">
          <svg height="70px" width="70px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 429.709 429.709" xmlSpace="preserve" fill="#000000">
            <g>
              <path style={{ fill: "#181A1C" }} d="M429.709,196.618c0-29.803-24.16-53.962-53.963-53.962c-14.926,0-28.41,6.085-38.176,15.881 c-30.177-19.463-68.73-31.866-111.072-33.801c0.026-17.978,8.078-34.737,22.104-45.989c14.051-11.271,32.198-15.492,49.775-11.588 l2.414,0.536c-0.024,0.605-0.091,1.198-0.091,1.809c0,24.878,20.168,45.046,45.046,45.046s45.046-20.168,45.046-45.046 c0-24.879-20.168-45.046-45.046-45.046c-15.997,0-30.01,8.362-38.002,20.929l-4.317-0.959c-24.51-5.446-49.807,0.442-69.395,16.156 c-19.564,15.695-30.792,39.074-30.818,64.152c-42.332,1.934-80.878,14.331-111.052,33.785c-9.767-9.798-23.271-15.866-38.2-15.866 C24.16,142.656,0,166.815,0,196.618c0,20.765,11.75,38.755,28.946,47.776c-1.306,6.68-1.993,13.51-1.993,20.462 c0,77.538,84.126,140.395,187.901,140.395s187.901-62.857,187.901-140.395c0-6.948-0.687-13.775-1.991-20.452 C417.961,235.381,429.709,217.385,429.709,196.618z M345.746,47.743c12,0,21.762,9.762,21.762,21.762 c0,11.999-9.762,21.761-21.762,21.761s-21.762-9.762-21.762-21.761C323.984,57.505,333.747,47.743,345.746,47.743z M23.284,196.618 c0-16.916,13.762-30.678,30.678-30.678c7.245,0,13.895,2.538,19.142,6.758c-16.412,14.08-29.118,30.631-37.007,48.804 C28.349,215.937,23.284,206.868,23.284,196.618z M333.784,345.477c-31.492,23.53-73.729,36.489-118.929,36.489 s-87.437-12.959-118.929-36.489c-29.462-22.013-45.688-50.645-45.688-80.621c0-29.977,16.226-58.609,45.688-80.622 c31.492-23.53,73.729-36.489,118.929-36.489s87.437,12.959,118.929,36.489c29.462,22.013,45.688,50.645,45.688,80.622 C379.471,294.832,363.246,323.464,333.784,345.477z M393.605,221.488c-7.891-18.17-20.596-34.716-37.005-48.794 c5.247-4.22,11.901-6.754,19.147-6.754c16.916,0,30.678,13.762,30.678,30.678C406.424,206.867,401.353,215.925,393.605,221.488z"></path>
              <circle style={{ fill: "#D80000" }} cx="146.224" cy="232.074" r="24.57"></circle>
              <circle style={{ fill: "#D80000" }} cx="283.484" cy="232.074" r="24.57"></circle>
              <path style={{ fill: "#181A1C" }} d="M273.079,291.773c-17.32,15.78-39.773,24.47-63.224,24.47c-26.332,0-50.729-10.612-68.696-29.881 c-4.384-4.704-11.751-4.96-16.454-0.575c-4.703,4.384-4.96,11.752-0.575,16.454c22.095,23.695,53.341,37.285,85.726,37.285 c29.266,0,57.288-10.847,78.905-30.543c4.752-4.33,5.096-11.694,0.765-16.446C285.197,287.788,277.838,287.44,273.079,291.773z"></path>
            </g>
          </svg>
        </div>
      )
    },
    {
      name: 'reverseATS',
      url: 'https://chromewebstore.google.com/detail/ipkldjngbilnepdikdjmhjhfagbjllnj?utm_source=item-share-cb',
      iconClass: 'reverseats',
      iconContent: (
        <div className="icon-inner">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="#1a73e8">
            <path transform="scale(1) translate(0, 0)"
                d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
            <path transform="scale(1) translate(0, 0)" 
                d="M7 12h2v5H7v-5zm0-5h2v2H7V7zm4 0h2v2h-2V7zm0 5h2v5h-2v-5zm4-5h2v2h-2V7zm0 5h2v5h-2v-5z" />
          </svg>
        </div>
      )
    },
    {
      name: 'Watguessr',
      url: 'http://watguessr.io/',
      iconClass: 'watguessr',
      iconContent: (
        <div className="icon-inner">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="#FFD700">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
      )
    }
  ], []);

  // Filter apps based on search text
  useEffect(() => {
    if (searchText === '') {
      setFilteredApps(apps);
    } else {
      const filtered = apps.filter(app => 
        app.name.toLowerCase().startsWith(searchText.toLowerCase())
      );
      setFilteredApps(filtered);
    }
  }, [searchText, apps]);

  return (
    <div className="app-grid">
      {filteredApps.map((app, index) => (
        <Link key={index} href={app.url} className="app-icon" target="_blank" rel="noopener noreferrer">
          <div className={`icon ${app.iconClass}`}>
            {app.iconContent}
          </div>
          <div className="app-name">{app.name}</div>
        </Link>
      ))}
    </div>
  );
}