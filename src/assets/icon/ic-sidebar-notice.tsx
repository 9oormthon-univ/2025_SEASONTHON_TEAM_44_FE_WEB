interface Props {
  isActive?: boolean;
}

const IcSidebarNotice = ({ isActive }: Props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 5H19C19.5523 5 20 5.44771 20 6V15.8662C20 16.4185 19.5523 16.8662 19 16.8662H7.5C7.00758 16.8662 6.52238 16.988 6.08789 17.2197L4 18.332V6C4 5.44772 4.44772 5 5 5Z"
        stroke={isActive ? '#FF7D76' : '#A8A4A3'} stroke-width="2" />
      <path d="M12 8L12 12" stroke={isActive ? '#FF7D76' : '#A8A4A3'} stroke-width="2" />
      <path d="M12 12.7V14.1142" stroke={isActive ? '#FF7D76' : '#A8A4A3'} stroke-width="2" />
    </svg>

  );
};

export default IcSidebarNotice;
