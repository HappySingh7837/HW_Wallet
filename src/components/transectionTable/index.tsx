import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {sendWalletDataProps} from '../../constants/constants';
import {Theme} from '../../constants/theme';
import {windowWidth} from '../../util';
import ShieldIcon from '../icons/shieldIcon';
import StyledCheckBox from '../StyledCheckBox';
import StyledText from '../StyleText';

interface Props {
  data: sendWalletDataProps[];
}
interface TransectionTableRowProps {
  row: sendWalletDataProps;
  onClick: () => void;
}

export const TransectionTableRow = ({
  row,
  onClick,
}: TransectionTableRowProps) => {
  return (
    <View style={styles.rowWrapper}>
      <View style={styles.rowBtc}>
        <StyledCheckBox isChecked={row.selected} onClick={onClick} />
        <StyledText style={styles.btc}>{row.amount}</StyledText>
      </View>
      <View style={styles.rowPrvcy}>
        {row.shieldIcon ? <ShieldIcon /> : null}
      </View>
      <View style={styles.col3}>
        <StyledText style={styles.centerText}>{row.clusterName}</StyledText>
      </View>
    </View>
  );
};

const TransectionTable = ({data}: Props) => {
  const [tableData, setTableData] = useState<sendWalletDataProps[]>([]);

  useEffect(() => {
    if (data) {
      setTableData(data);
    }
  }, [data]);

  const handleSelect = (i: number) => {
    const newTableData = [...tableData];
    newTableData[i].selected = !newTableData[i].selected;
    setTableData(newTableData);
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.headWrapper}>
        <View style={styles.col1}>
          <StyledText style={styles.btc}>Amount (BTC)</StyledText>
        </View>
        <View style={styles.col2}>
          <StyledText style={styles.centerText}>Privacy</StyledText>
        </View>
        <View style={styles.col3}>
          <StyledText style={styles.centerText}>Cluster</StyledText>
        </View>
      </View>
      {tableData.map((item: sendWalletDataProps, index: number) => (
        <TransectionTableRow
          key={index}
          row={item}
          onClick={() => handleSelect(index)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: Theme.Dimensions.fullWidth,
    paddingBottom: Theme.Dimensions.Default,
  },
  headWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    paddingVertical: Theme.sizes.size6,
    borderTopWidth: Theme.sizes.size2,
    borderTopColor: Theme.Colors.gray1,
    borderBottomWidth: Theme.sizes.size2,
    borderBottomColor: Theme.Colors.gray1,
    marginBottom: Theme.sizes.size20,
  },
  rowWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    paddingVertical: Theme.sizes.size6,
  },
  col1: {
    width: windowWidth / 2.5,
  },
  col2: {
    width: windowWidth / 3.5,
  },
  col3: {
    width: windowWidth / 3.5,
  },
  btc: {
    textAlign: 'right',
  },
  centerText: {
    textAlign: 'center',
  },
  rowPrvcy: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowBtc: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: Theme.Dimensions.Default,
    width: windowWidth / 2.5,
  },
});

export default TransectionTable;
