interface Props {
  isActive?: boolean;
}

const IcSidebarQR = ({ isActive }: Props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="6" height="6" rx="1" stroke={isActive ? '#FF7D76' : '#A8A4A3'} stroke-width="2" stroke-linejoin="round"/>
      <rect x="4" y="14" width="6" height="6" rx="1" stroke={isActive ? '#FF7D76' : '#A8A4A3'} stroke-width="2" stroke-linejoin="round"/>
      <rect x="14" y="4" width="6" height="6" rx="1" stroke={isActive ? '#FF7D76' : '#A8A4A3'} stroke-width="2" stroke-linejoin="round"/>
      <path d="M14 13V18C14 19.1046 14.8954 20 16 20H21" stroke={isActive ? '#FF7D76' : '#A8A4A3'} stroke-width="2" stroke-linejoin="round"/>
      <rect x="18" y="13" width="3" height="3" fill={isActive ? '#FF7D76' : '#A8A4A3'}/>
    </svg>

  );
};

export default IcSidebarQR;
