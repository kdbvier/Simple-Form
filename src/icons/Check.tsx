import { SVGProps } from "react";

const Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="10"
      height="8"
      viewBox="0 0 10 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.47334 0.806665C9.41136 0.74418 9.33763 0.694583 9.25639 0.660738C9.17515 0.626892 9.08801 0.609467 9.00001 0.609467C8.912 0.609467 8.82486 0.626892 8.74362 0.660738C8.66238 0.694583 8.58865 0.74418 8.52667 0.806665L3.56001 5.78L1.47334 3.68667C1.40899 3.62451 1.33303 3.57563 1.2498 3.54283C1.16656 3.51003 1.07768 3.49394 0.988222 3.49549C0.898768 3.49703 0.810495 3.51619 0.728443 3.55185C0.646391 3.58751 0.572166 3.63898 0.510007 3.70333C0.447848 3.76768 0.398972 3.84364 0.36617 3.92688C0.333367 4.01011 0.31728 4.099 0.318828 4.18845C0.320375 4.2779 0.339527 4.36618 0.375189 4.44823C0.410852 4.53028 0.462326 4.60451 0.526674 4.66667L3.08667 7.22667C3.14865 7.28915 3.22238 7.33875 3.30362 7.37259C3.38486 7.40644 3.472 7.42386 3.56001 7.42386C3.64802 7.42386 3.73515 7.40644 3.81639 7.37259C3.89763 7.33875 3.97137 7.28915 4.03334 7.22667L9.47334 1.78667C9.54101 1.72424 9.59501 1.64847 9.63195 1.56414C9.66889 1.4798 9.68796 1.38873 9.68796 1.29667C9.68796 1.2046 9.66889 1.11353 9.63195 1.02919C9.59501 0.944861 9.54101 0.869094 9.47334 0.806665Z"
        fill="#5845DD"
      />
    </svg>
  );
};

export default Icon;
