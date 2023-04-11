import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { getFontStyle } from '@/theme/utils';
import Svg from '@/components/svg/Svg';

interface IPrimaryButtonProps {
  buttonText: string;
}
const StPrimaryButton = styled(Link)`
  &:hover {
    background-color: var(--secondary);
  }
  background-color: var(--primary);
  margin-top: var(--spacingS);
  padding: 0.7em 1.6em 0.7em 4.5em;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: right;
  ${getFontStyle('LabelS')};
  @media (min-width: 768px) {
    ${getFontStyle('LabelM')};
  }
  @media (min-width: 1920px) {
    ${getFontStyle('LabelXL')};
  }
`;

const StSvg = styled.div`
  position: absolute;
  top: 0;
  left: 0.9em;
`;

const PrimaryButton = (props: IPrimaryButtonProps) => {
  return (
    <StPrimaryButton to="/main" className="landingElementAnimation">
      <StSvg>
        <Svg id="symbol-logo" width="2.4em" height="2.4em" />
      </StSvg>
      {props.buttonText}
    </StPrimaryButton>
  );
};

export default PrimaryButton;

PrimaryButton.defaultProps = {
  buttonText: '문구를 적어주세요',
};
