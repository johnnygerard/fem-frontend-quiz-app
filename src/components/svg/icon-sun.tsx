import { memo } from "react";

type Props = Readonly<{
  size: string;
}>;

const IconSun = ({ size }: Props) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path
        d="M8 1C8.13261 1 8.25979 1.05268 8.35355 1.14645C8.44732 1.24021 8.5 1.36739 8.5 1.5V2.5C8.5 2.63261 8.44732 2.75979 8.35355 2.85355C8.25979 2.94732 8.13261 3 8 3C7.86739 3 7.74021 2.94732 7.64645 2.85355C7.55268 2.75979 7.5 2.63261 7.5 2.5V1.5C7.5 1.36739 7.55268 1.24021 7.64645 1.14645C7.74021 1.05268 7.86739 1 8 1ZM8 11C8.79565 11 9.55871 10.6839 10.1213 10.1213C10.6839 9.55871 11 8.79565 11 8C11 7.20435 10.6839 6.44129 10.1213 5.87868C9.55871 5.31607 8.79565 5 8 5C7.20435 5 6.44129 5.31607 5.87868 5.87868C5.31607 6.44129 5 7.20435 5 8C5 8.79565 5.31607 9.55871 5.87868 10.1213C6.44129 10.6839 7.20435 11 8 11ZM8 10C7.46957 10 6.96086 9.78929 6.58579 9.41421C6.21071 9.03914 6 8.53043 6 8C6 7.46957 6.21071 6.96086 6.58579 6.58579C6.96086 6.21071 7.46957 6 8 6C8.53043 6 9.03914 6.21071 9.41421 6.58579C9.78929 6.96086 10 7.46957 10 8C10 8.53043 9.78929 9.03914 9.41421 9.41421C9.03914 9.78929 8.53043 10 8 10ZM14.5 8.5C14.6326 8.5 14.7598 8.44732 14.8536 8.35355C14.9473 8.25979 15 8.13261 15 8C15 7.86739 14.9473 7.74021 14.8536 7.64645C14.7598 7.55268 14.6326 7.5 14.5 7.5H13.5C13.3674 7.5 13.2402 7.55268 13.1464 7.64645C13.0527 7.74021 13 7.86739 13 8C13 8.13261 13.0527 8.25979 13.1464 8.35355C13.2402 8.44732 13.3674 8.5 13.5 8.5H14.5ZM8 13C8.13261 13 8.25979 13.0527 8.35355 13.1464C8.44732 13.2402 8.5 13.3674 8.5 13.5V14.5C8.5 14.6326 8.44732 14.7598 8.35355 14.8536C8.25979 14.9473 8.13261 15 8 15C7.86739 15 7.74021 14.9473 7.64645 14.8536C7.55268 14.7598 7.5 14.6326 7.5 14.5V13.5C7.5 13.3674 7.55268 13.2402 7.64645 13.1464C7.74021 13.0527 7.86739 13 8 13ZM2.5 8.5C2.63261 8.5 2.75979 8.44732 2.85355 8.35355C2.94732 8.25979 3 8.13261 3 8C3 7.86739 2.94732 7.74021 2.85355 7.64645C2.75979 7.55268 2.63261 7.5 2.5 7.5H1.5C1.36739 7.5 1.24021 7.55268 1.14645 7.64645C1.05268 7.74021 1 7.86739 1 8C1 8.13261 1.05268 8.25979 1.14645 8.35355C1.24021 8.44732 1.36739 8.5 1.5 8.5H2.5ZM3.146 3.146C3.19245 3.09944 3.24762 3.06249 3.30837 3.03729C3.36911 3.01208 3.43423 2.99911 3.5 2.99911C3.56577 2.99911 3.63089 3.01208 3.69163 3.03729C3.75238 3.06249 3.80755 3.09944 3.854 3.146L4.854 4.146C4.90049 4.19249 4.93736 4.24768 4.96252 4.30842C4.98768 4.36916 5.00063 4.43426 5.00063 4.5C5.00063 4.56574 4.98768 4.63084 4.96252 4.69158C4.93736 4.75232 4.90049 4.80751 4.854 4.854C4.80751 4.90049 4.75232 4.93736 4.69158 4.96252C4.63084 4.98768 4.56574 5.00063 4.5 5.00063C4.43426 5.00063 4.36916 4.98768 4.30842 4.96252C4.24768 4.93736 4.19249 4.90049 4.146 4.854L3.146 3.854C3.09944 3.80755 3.06249 3.75238 3.03729 3.69163C3.01208 3.63089 2.99911 3.56577 2.99911 3.5C2.99911 3.43423 3.01208 3.36911 3.03729 3.30837C3.06249 3.24762 3.09944 3.19245 3.146 3.146ZM3.854 12.854C3.80758 12.9005 3.75245 12.9374 3.69177 12.9626C3.6311 12.9877 3.56605 13.0007 3.50035 13.0008C3.43466 13.0008 3.36959 12.9879 3.30888 12.9628C3.24816 12.9377 3.19299 12.9009 3.1465 12.8545C3.10001 12.8081 3.06312 12.753 3.03794 12.6923C3.01275 12.6316 2.99977 12.5666 2.99972 12.5009C2.99968 12.4352 3.01257 12.3701 3.03767 12.3094C3.06277 12.2487 3.09958 12.1935 3.146 12.147L4.146 11.147C4.19242 11.1005 4.24755 11.0636 4.30823 11.0384C4.3689 11.0133 4.43395 11.0003 4.49965 11.0002C4.56534 11.0002 4.63041 11.0131 4.69112 11.0382C4.75184 11.0633 4.80701 11.1001 4.8535 11.1465C4.89999 11.1929 4.93688 11.248 4.96206 11.3087C4.98725 11.3694 5.00023 11.4344 5.00028 11.5001C5.00032 11.5658 4.98743 11.6309 4.96233 11.6916C4.93723 11.7523 4.90042 11.8075 4.854 11.854L3.854 12.854ZM12.854 3.146C12.8076 3.09944 12.7524 3.06249 12.6916 3.03729C12.6309 3.01208 12.5658 2.99911 12.5 2.99911C12.4342 2.99911 12.3691 3.01208 12.3084 3.03729C12.2476 3.06249 12.1924 3.09944 12.146 3.146L11.146 4.146C11.0521 4.23989 10.9994 4.36722 10.9994 4.5C10.9994 4.63278 11.0521 4.76011 11.146 4.854C11.2399 4.94789 11.3672 5.00063 11.5 5.00063C11.6328 5.00063 11.7601 4.94789 11.854 4.854L12.854 3.854C12.9006 3.80755 12.9375 3.75238 12.9627 3.69163C12.9879 3.63089 13.0009 3.56577 13.0009 3.5C13.0009 3.43423 12.9879 3.36911 12.9627 3.30837C12.9375 3.24762 12.9006 3.19245 12.854 3.146ZM12.146 12.854C12.2398 12.9479 12.367 13.0007 12.4996 13.0008C12.6323 13.0009 12.7596 12.9483 12.8535 12.8545C12.9474 12.7607 13.0002 12.6335 13.0003 12.5009C13.0004 12.3682 12.9478 12.2409 12.854 12.147L11.854 11.147C11.7602 11.0531 11.633 11.0003 11.5004 11.0002C11.3677 11.0001 11.2404 11.0527 11.1465 11.1465C11.0526 11.2403 10.9998 11.3675 10.9997 11.5001C10.9996 11.6328 11.0522 11.7601 11.146 11.854L12.146 12.854Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default memo(IconSun);
