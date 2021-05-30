import React from 'react';

export default function squiggleStriped(color: string, quantity: number) {
  const figure = (
    <svg
      width="71px"
      height="180px"
      viewBox="0 0 71 180"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>Squiggle - Striped</title>
      <desc>Created with Sketch.</desc>
      <defs />
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path
          d="M91.7857992,116.444521 L116.33898,91.8913407 C116.814407,90.9583418 117.270602,90.0109816 117.706576,89.0510836 C118.910081,86.6415345 119.630215,83.9659542 119.926395,81.232858 L83.0971691,118.062084 C86.4218903,117.883553 89.2894207,117.344395 91.7857992,116.444521 Z M97.33286,113.725888 L112.348824,98.7099242 C108.132522,105.01621 102.991775,110.271497 97.33286,113.725888 Z M80.2035388,118.127287 L120.084188,78.2466375 C120.081436,76.0865269 119.829926,73.9376066 119.358536,71.9012223 L73.5288857,117.730872 C75.9234776,117.982021 78.1429235,118.114165 80.2035388,118.127287 Z M71.0010655,117.430265 L118.744658,69.6866731 C118.170223,67.9202624 117.42219,66.278452 116.522395,64.8378684 L64.9024072,116.457856 C67.0458739,116.851588 69.0763274,117.175727 71.0010655,117.430265 Z M62.5290785,116.002757 L115.348886,63.1829503 C114.228684,61.7945574 112.936096,60.6866225 111.500062,59.9607062 L56.7142441,114.746524 C58.7357667,115.213655 60.6726353,115.6324 62.5290815,116.002754 L62.5290785,116.002757 Z M109.42268,59.209661 C108.810675,59.0719221 108.178708,59 107.528517,59 C105.732294,59 103.995165,59.0878468 102.298437,59.2628357 L48.7798126,112.78146 C50.7292656,113.292993 52.6105214,113.767829 54.4263753,114.205966 L109.42268,59.209661 Z M99.0148492,59.7179967 C95.6462586,60.3067584 92.3948299,61.2559934 89.1020525,62.5597257 L41.0089999,110.652778 C42.9112409,111.193602 44.7561128,111.705088 46.5456144,112.187233 L99.0148492,59.7179967 Z M83.9955902,64.8377609 C82.2387646,65.7039709 80.4487963,66.6653209 78.6033583,67.7209691 C77.8999813,68.0369415 75.9318371,68.9064357 75.8584357,68.9385759 C74.7070698,69.4427236 73.7523074,69.8448461 72.7603108,70.2363461 C72.1030585,70.4957363 71.4446184,70.7430553 70.7843523,70.9779309 L33.3261837,108.4361 C33.9767106,108.611622 34.6332561,108.796971 35.29623,108.992169 C36.488463,109.345796 37.6599459,109.689159 38.8110922,110.022259 L83.9955902,64.8377609 Z M66.6627026,72.2711536 C63.8557005,73.0324858 60.9935884,73.5622824 58.0295442,73.8332441 L25.1593067,106.703482 C27.0831491,106.991274 29.0497685,107.377061 31.0722514,107.861605 L66.6627026,72.2711536 Z M55.0170462,74.0173149 C52.8051217,74.0862188 50.5308345,74.013024 48.1761043,73.7871891 L15.8866858,106.076608 C18.1028574,106.034018 20.3503654,106.13517 22.6529159,106.381445 L55.0170462,74.0173149 Z M45.6452407,73.4896255 C43.7162465,73.2217749 41.7317976,72.8540696 39.6826679,72.3811305 L4.46282982,107.600969 C7.2793806,106.903882 10.0792779,106.442945 12.9137222,106.221144 L45.6452407,73.4896255 Z M37.4140435,71.8213278 C36.3469694,71.5413119 35.2622848,71.2335535 34.1587751,70.8973445 C33.4034611,70.6733117 32.6593475,70.4535808 31.9261585,70.2381294 L-11.6244288,113.788731 C-9.61663134,112.820492 -9.34926248,112.724838 -8.57222612,112.490366 L-7.99685742,112.088997 C-5.09230849,110.747022 -2.27431638,109.626571 0.504940571,108.730431 L37.4140435,71.8213278 Z M29.7375483,69.5983281 C27.8298955,69.0437071 25.9987979,68.5196966 24.2389425,68.0258661 L-28.106962,120.371771 C-24.816655,119.670546 -21.3604844,118.375072 -17.0565373,116.392414 L29.7375483,69.5983281 Z M22.0258764,67.4105021 C20.0781888,66.8741413 18.2210354,66.3771519 16.4464271,65.9188865 L-38.4402435,120.805557 C-37.9954272,120.861079 -37.5405888,120.889513 -37.0762376,120.889513 C-35.1011666,121.052451 -33.26507,121.056723 -31.4498545,120.886236 L22.0258789,67.4105026 L22.0258764,67.4105021 Z M14.1906471,65.3462394 C12.1763419,64.844172 10.2724614,64.395779 8.46582626,63.9999924 L-44.9873047,117.453123 C-43.7545956,118.714798 -42.3221941,119.676959 -40.7210061,120.257893 L14.1906471,65.3462394 Z M-46.2823411,115.919733 L6.13056372,63.5068278 C3.99531317,63.0737058 2.0004146,62.7206142 0.120801918,62.4455218 L-48.6919275,111.258251 C-48.0815661,112.995748 -47.2704666,114.570472 -46.2823414,115.919733 L-46.2823411,115.919733 Z M-49.3332025,109.071098 L-2.37988715,62.1177837 C-4.76636688,61.8436845 -6.96609652,61.7081696 -9.03951278,61.7063416 L-50.0058919,102.672721 C-50.0447421,104.912459 -49.8106734,107.071264 -49.3332025,109.071098 Z M-49.7873142,99.6257159 L-11.9580285,61.7964302 C-14.9642742,61.9891053 -17.7432418,62.4889582 -20.5111355,63.2784693 L-46.5469608,89.3142947 C-46.7680004,89.7884739 -46.9945879,90.2774623 -47.227273,90.7821449 C-48.5861285,93.6970579 -49.4191061,96.6987694 -49.7873142,99.6257159 Z M-43.9084747,83.8473814 L-24.7949441,64.7338508 C-30.3139146,66.936153 -34.4551112,70.0163428 -37.8943812,74.2366686 C-40.0569571,76.8903638 -41.768118,79.6210984 -43.9084747,83.8473814 Z M-40.9951463,71.7097621 C-36.6122256,66.3314833 -31.16772,62.5704937 -23.747455,60.0944634 C-16.189946,57.5726368 -8.25440511,57.1723623 1.61318744,58.6407136 C9.87223829,59.8697051 18.7379616,62.1511506 35.3103878,67.0667349 C49.8551819,71.49808 60.6936902,70.698299 71.2918965,66.5156258 C72.2318405,66.1446688 73.14398,65.760498 74.2540247,65.2744436 C74.3064325,65.2514958 76.0724339,64.4713171 76.7152008,64.19291 C87.306618,58.1465822 96.3218149,55 107.528517,55 C121.499987,55 128.332978,76.7276842 121.316868,90.7716397 C115.33082,103.954835 105.657479,115.021742 94.3366003,119.743749 C82.863874,124.529094 65.4088639,122.096086 34.1626221,112.828172 C18.8337781,108.314933 7.41848613,109.373019 -5.743799,115.318793 L-6.34502044,115.731885 C-7.90134978,116.424316 -8.04334111,116.492474 -12.2997678,118.562555 C-22.8717727,123.704168 -28.9361631,125.560017 -37.1612628,124.889291 C-51.6428126,124.813639 -58.4582379,105.412219 -50.8580166,89.1035395 C-46.7437103,80.1800239 -44.4337779,75.9293045 -40.9951463,71.7097621 Z"
          id="Squiggle---Striped"
          fill={color}
          fillRule="nonzero"
          transform="translate(35.051624, 90.010555) rotate(90.000000) translate(-35.051624, -90.010555) "
        />
      </g>
    </svg>
  );
  return <div className="card-container">{Array(quantity).map(() => figure)}</div>;
}
