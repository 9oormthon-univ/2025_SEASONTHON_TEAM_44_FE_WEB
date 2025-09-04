export const receiverOptions = [
  { value: 'all', label: '전체' },
  { value: 'normal', label: '일반 단골(10회 미만)' },
  { value: 'vip', label: '인증 단골(10회 이상)' },
];

export type ReceiverOption = 'all' | 'normal' | 'vip';
