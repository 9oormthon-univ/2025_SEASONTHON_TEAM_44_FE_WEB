export const getDongFromAddress = (address: string) => {
  if (!address) return undefined;
  const match = address.match(/[가-힣]+동/);
  return match ? match[0] : undefined;
}
