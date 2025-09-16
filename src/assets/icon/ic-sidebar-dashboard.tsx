interface Props {
  isActive?: boolean;
}

const IcSidebarDashboard = ({ isActive }: Props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 4H19C19.5523 4 20 4.44772 20 5V12H4V5C4 4.44772 4.44772 4 5 4Z" stroke={isActive ? '#FF7D76' : '#A8A4A3'} stroke-width="2"/>
      <path d="M14 12V20H5C4.44772 20 4 19.5523 4 19V12H14Z" stroke={isActive ? '#FF7D76' : '#A8A4A3'} stroke-width="2"/>
      <path d="M20 12V19C20 19.5523 19.5523 20 19 20H14V12H20Z" stroke={isActive ? '#FF7D76' : '#A8A4A3'} stroke-width="2"/>
    </svg>

  );
};

export default IcSidebarDashboard;
