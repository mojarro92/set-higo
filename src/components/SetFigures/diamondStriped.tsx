import React from 'react';

export default function diamondStriped(color: string, quantity: number) {
  const figure = (
    <svg
      width="75px"
      height="180px"
      viewBox="0 0 75 180"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>Diamond - Striped</title>
      <desc>Created with Sketch.</desc>
      <defs />
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g
          id="Diamond---Striped"
          transform="translate(37.500000, 90.000000) rotate(90.000000) translate(-37.500000, -90.000000) translate(-50.000000, 55.000000)"
          fill={color}
          fillRule="nonzero"
        >
          <path d="M5.35864741,35 L87.0042446,67.8459299 L169.588297,35 L87.0042446,2.1540701 L5.35864741,35 Z M-0.746457025,33.1445211 L86.253543,-1.85547889 C86.7299989,-2.04715655 87.2619313,-2.04820472 87.7391388,-1.85840624 L175.739139,33.1415938 C177.420287,33.8102322 177.420287,36.1897678 175.739139,36.8584062 L87.7391388,71.8584062 C87.2619313,72.0482047 86.7299989,72.0471565 86.253543,71.8554789 L-0.746457025,36.8554789 C-2.41784766,36.1830804 -2.41784766,33.8169196 -0.746457025,33.1445211 Z" />
          <path
            d="M6.30988633,36.8325634 L7.39022163,36.6119307 L5.76865844,35.9595777 L5.46726866,36.2609675 L5.61306663,36.9748721 L6.00849656,37.1339531 L9.32898155,33.8134681 L6.30988633,36.8325634 Z M12.3480768,30.7943729 L12.0141985,31.0150056 L14.5697552,29.9869081 L16.2287365,28.3279268 L16.1836775,28.2597401 L14.0070581,29.1353916 L9.32898155,33.8134681 L12.3480768,30.7943729 Z M16.3731461,28.1835171 L7.01699311,37.5396701 L5,36.7282361 L11.64097,30.0872661 L16.3731461,28.1835171 Z M13.3693622,39.6725824 L14.4496975,39.4519497 L12.8281343,38.7995967 L12.5267446,39.1009865 L12.6725425,39.8148912 L13.0679725,39.9739722 L21.1400278,31.9019169 L13.3693622,39.6725824 Z M28.9106933,24.1312513 L28.576815,24.351884 L31.1323717,23.3237865 L32.791353,21.6648052 L32.7462941,21.5966185 L30.5696746,22.47227 L21.1400278,31.9019169 L28.9106933,24.1312513 Z M32.9357627,21.5203955 L14.076469,40.3796892 L12.0594759,39.5682552 L28.2035865,23.4241446 L32.9357627,21.5203955 Z M20.4288381,42.5126014 L21.5091734,42.2919688 L19.8876102,41.6396158 L19.5862205,41.9410055 L19.7320184,42.6549102 L20.1274484,42.8139912 L32.951074,29.9903656 L20.4288381,42.5126014 Z M45.4733098,17.4681297 L45.1394315,17.6887624 L47.6949882,16.6606649 L49.3539695,15.0016836 L49.3089106,14.9334969 L47.1322911,15.8091485 L32.951074,29.9903656 L45.4733098,17.4681297 Z M49.4983792,14.8572739 L21.1359449,43.2197082 L19.1189518,42.4082742 L44.766203,16.761023 L49.4983792,14.8572739 Z M27.488314,45.3526205 L28.5686493,45.1319878 L26.9470861,44.4796348 L26.6456964,44.7810246 L26.7914943,45.4949292 L27.1869242,45.6540103 L44.7621202,28.0788143 L27.488314,45.3526205 Z M62.0359263,10.8050082 L61.7020481,11.0256408 L64.2576048,9.9975433 L65.9165861,8.33856201 L65.8715271,8.27037535 L63.6949076,9.14602686 L44.7621202,28.0788143 L62.0359263,10.8050082 Z M66.0609957,8.19415235 L28.1954208,46.0597273 L26.1784277,45.2482932 L61.3288196,10.0979014 L66.0609957,8.19415235 Z M34.5477899,48.1926395 L35.6281252,47.9720069 L34.006562,47.3196538 L33.7051723,47.6210436 L33.8509702,48.3349483 L34.2464001,48.4940293 L56.5731664,26.167263 L34.5477899,48.1926395 Z M78.5985429,4.14188656 L78.2646646,4.36251923 L80.8202213,3.33442171 L82.4792026,1.67544042 L82.4341436,1.60725376 L80.2575242,2.48290527 L56.5731664,26.167263 L78.5985429,4.14188656 Z M82.6236122,1.53103076 L35.2548967,48.8997463 L33.2379036,48.0883123 L77.8914361,3.43477978 L82.6236122,1.53103076 Z M41.6072658,51.0326586 L42.6876011,50.8120259 L41.0660379,50.1596729 L40.7646482,50.4610627 L40.9104461,51.1749673 L41.305876,51.3340483 L66.2700417,26.3698827 L41.6072658,51.0326586 Z M90.9328176,1.70710678 L89.8561414,1.92920312 L91.4793432,2.57479475 L91.7840315,2.27010646 L91.6378942,1.56166385 L91.2375059,1.40241849 L66.2700417,26.3698827 L90.9328176,1.70710678 Z M92.2493009,1.80483699 L42.3143726,51.7397653 L40.2973795,50.9283313 L90.2257108,1 L92.2493009,1.80483699 Z M48.6667417,53.8726776 L49.747077,53.6520449 L48.1255138,52.9996919 L47.824124,53.3010817 L47.969922,54.0149864 L48.3653519,54.1740674 L73.3410624,29.1983569 L48.6667417,53.8726776 Z M98.0153831,4.52403623 L96.9387069,4.74613258 L98.5619087,5.3917242 L98.866597,5.08703591 L98.7204597,4.37859331 L98.3200714,4.21934795 L73.3410624,29.1983569 L98.0153831,4.52403623 Z M49.3738485,54.5797844 L47.3568554,53.7683504 L97.3082763,3.81692945 L99.3318664,4.62176644 L49.3738485,54.5797844 Z M55.7262176,56.7126966 L56.8065529,56.492064 L55.1849897,55.839711 L54.8835999,56.1411007 L55.0293979,56.8550054 L55.4248278,57.0140864 L80.4120831,32.0268312 L55.7262176,56.7126966 Z M105.097949,7.34096569 L104.021272,7.56306203 L105.644474,8.20865365 L105.949162,7.90396537 L105.803025,7.19552276 L105.402637,7.0362774 L80.4120831,32.0268312 L105.097949,7.34096569 Z M56.4333244,57.4198034 L54.4163313,56.6083694 L104.390842,6.63385891 L106.414432,7.43869589 L56.4333244,57.4198034 Z M62.5965114,59.4766079 L63.6768467,59.2559753 L62.0552835,58.6036222 L61.7538937,58.905012 L61.8996917,59.6189167 L62.2951216,59.7779977 L87.2936123,34.779507 L62.5965114,59.4766079 Z M111.990713,10.0824061 L110.914037,10.3045025 L112.537239,10.9500941 L112.841927,10.6454058 L112.69579,9.93696322 L112.295401,9.77771786 L87.2936123,34.779507 L111.990713,10.0824061 Z M63.3036182,60.1837147 L61.286625,59.3722807 L111.283606,9.37529936 L113.307196,10.1801364 L63.3036182,60.1837147 Z M69.8451694,62.3927347 L70.9255047,62.172102 L69.3039415,61.519749 L69.0025517,61.8211388 L69.1483497,62.5350435 L69.5437796,62.6941245 L94.5541245,37.6837797 L69.8451694,62.3927347 Z M119.26308,12.9748246 L118.186403,13.1969209 L119.809605,13.8425126 L120.114293,13.5378243 L119.968156,12.8293817 L119.567768,12.6701363 L94.5541245,37.6837797 L119.26308,12.9748246 Z M120.579563,13.0725548 L70.5522762,63.0998415 L68.5352831,62.2884075 L118.555973,12.2677178 L120.579563,13.0725548 Z M76.9046453,65.2327538 L77.9849806,65.0121211 L76.3634174,64.3597681 L76.0620276,64.6611579 L76.2078256,65.3750625 L76.6032555,65.5341435 L101.625145,40.5122539 L76.9046453,65.2327538 Z M126.345645,15.791754 L125.268969,16.0138504 L126.892171,16.659442 L127.196859,16.3547537 L127.050722,15.6463111 L126.650333,15.4870658 L101.625145,40.5122539 L126.345645,15.791754 Z M77.6117521,65.9398605 L75.594759,65.1284265 L125.638538,15.0846473 L127.662128,15.8894843 L77.6117521,65.9398605 Z M83.9641212,68.0727728 L85.0444565,67.8521401 L83.4228933,67.1997871 L83.1215035,67.5011769 L83.2673015,68.2150816 L83.6627314,68.3741626 L108.696166,43.3407281 L83.9641212,68.0727728 Z M133.42821,18.6086835 L132.351534,18.8307798 L133.974736,19.4763715 L134.279424,19.1716832 L134.133287,18.4632406 L133.732899,18.3039952 L108.696166,43.3407281 L133.42821,18.6086835 Z M84.671228,68.7798796 L82.6542349,67.9684456 L132.721104,17.9015767 L134.744694,18.7064137 L84.671228,68.7798796 Z M97.2189939,64.717395 L97.5565313,64.4952987 L95.0167274,65.5054479 L93.375706,67.1464693 L93.42152,67.2160964 L95.5779725,66.3584164 L118.864885,43.071504 L97.2189939,64.717395 Z M140.510776,21.425613 L139.4341,21.6477093 L141.057302,22.2933009 L141.36199,21.9886126 L141.215853,21.28017 L140.815464,21.1209247 L118.864885,43.071504 L140.510776,21.425613 Z M141.827259,21.5233432 L97.9261007,65.4245018 L93.2298443,67.292331 L139.803669,20.7185062 L141.827259,21.5233432 Z M113.655891,58.1799927 L113.993429,57.9578964 L111.453625,58.9680456 L109.812603,60.609067 L109.858417,60.6786941 L112.01487,59.8210141 L130.624616,41.2112676 L113.655891,58.1799927 Z M147.593341,24.2425424 L146.516665,24.4646387 L148.139867,25.1102304 L148.444555,24.8055421 L148.298418,24.0970995 L147.89803,23.9378541 L130.624616,41.2112676 L147.593341,24.2425424 Z M114.362998,58.8870995 L109.666742,60.7549287 L146.886235,23.5354356 L148.909825,24.3402726 L114.362998,58.8870995 Z M130.092788,51.6425904 L130.430326,51.420494 L127.890522,52.4306433 L126.249501,54.0716647 L126.295314,54.1412918 L128.451767,53.2836118 L142.384348,39.3510311 L130.092788,51.6425904 Z M154.675907,27.0594719 L153.599231,27.2815682 L155.222433,27.9271598 L155.527121,27.6224715 L155.380984,26.9140289 L154.980595,26.7547836 L142.384348,39.3510311 L154.675907,27.0594719 Z M130.799895,52.3496972 L126.103639,54.2175264 L153.9688,26.3523651 L155.99239,27.1572021 L130.799895,52.3496972 Z M146.529686,45.1051881 L146.867223,44.8830917 L144.327419,45.893241 L142.686398,47.5342624 L142.732212,47.6038895 L144.888664,46.7462095 L154.144079,37.4907947 L146.529686,45.1051881 Z M161.758472,29.8764013 L160.681796,30.0984977 L162.304998,30.7440893 L162.609686,30.439401 L162.463549,29.7309584 L162.063161,29.571713 L154.144079,37.4907947 L161.758472,29.8764013 Z M147.236792,45.8122949 L142.540536,47.6801241 L161.051366,29.1692945 L163.074956,29.9741315 L147.236792,45.8122949 Z M162.966583,38.5677858 L163.30412,38.3456894 L160.764316,39.3558387 L159.123295,40.9968601 L159.169109,41.0664871 L161.325562,40.2088072 L165.90381,35.6305583 L162.966583,38.5677858 Z M168.841038,32.6933308 L167.764362,32.9154271 L169.387564,33.5610187 L169.692252,33.2563304 L169.546115,32.5478878 L169.145726,32.3886425 L165.90381,35.6305583 L168.841038,32.6933308 Z M170.157521,32.791061 L163.67369,39.2748925 L158.977433,41.1427218 L168.133931,31.986224 L170.157521,32.791061 Z"
            id="Combined-Shape"
          />
        </g>
      </g>
    </svg>
  );
  return <div className="card-container">{Array(quantity).map(() => figure)}</div>;
}
