interface Props {
  isActive: boolean;
}

const IcSidebarCoupon = ({ isActive }: Props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 18L7.93344 18C7.25137 18 6.61632 17.6524 6.24873 17.0778L3.68959 13.0779C3.2692 12.4208 3.2692 11.5792 3.68959 10.9221L6.24873 6.92215C6.61632 6.3476 7.25137 6 7.93344 6L19 6C19.5523 6 20 6.44771 20 7L20 9C20 9 17.875 9.81818 17.875 12C17.875 14.1818 20 15 20 15L20 17C20 17.5523 19.5523 18 19 18Z"
        stroke={isActive ? '#FF7D76' : '#A8A4A3'} stroke-width="2" />
      <ellipse cx="8.84375" cy="12" rx="1.59375" ry="1.63636" fill={isActive ? '#FF7D76' : '#A8A4A3'} />
      <path d="M14.6875 7.09094V16.9091" stroke={isActive ? '#FF7D76' : '#A8A4A3'} stroke-dasharray="2 2" />
    </svg>
  );
};

export default IcSidebarCoupon;
