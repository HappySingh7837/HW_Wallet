export interface sendWalletDataProps {
  amount: number;
  shieldIcon: boolean;
  clusterName: string;
  selected: boolean;
}

export const sendWalletData = [
  {amount: 0.00120001, shieldIcon: true, clusterName: 'test', selected: false},
  {amount: 0.00120001, shieldIcon: true, clusterName: 'test2', selected: false},
  {amount: 0.00120001, shieldIcon: true, clusterName: 'test3', selected: false},
];
