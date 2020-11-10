import React from 'react';

const Arrow = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="34"
      viewBox="0 0 20 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.95303 0.651634C3.5225 0.229988 2.97456 0 2.32877 0C1.03718 0 0 0.99662 0 2.26156C0 2.89403 0.273973 3.469 0.724072 3.90981L14.4227 17.0192L0.724072 30.0902C0.273973 30.531 0 31.1251 0 31.7384C0 33.0034 1.03718 34 2.32877 34C2.97456 34 3.5225 33.77 3.95303 33.3484L19.1781 18.7824C19.726 18.2841 19.9804 17.6708 20 17C20 16.3292 19.726 15.7542 19.1781 15.2368L3.95303 0.651634Z"
        fill="white"
      />
    </svg>
  );
};

export default Arrow;
