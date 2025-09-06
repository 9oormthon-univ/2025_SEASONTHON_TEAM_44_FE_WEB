export const receiverOptions = [
  { value: 'ALL', label: '전체' },
  { value: 'BASIC', label: '일반 단골(10회 미만)' },
  { value: 'CERTIFIED', label: '인증 단골(10회 이상)' },
];

export const receiverType = [
  { value: 'ALL', label: '전체' },
  { value: 'BASIC', label: '단골' },
  { value: 'CERTIFIED', label: '인증 단골' },
];

export type ReceiverOption = "ALL" | "BASIC" | "CERTIFIED";
