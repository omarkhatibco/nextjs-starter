import { breakpoints } from 'components/theme';
import styled from 'styled-components';

export const Main = styled.main`
	content-visibility: auto;
	padding-block: 1rem;

	@media ${breakpoints.md} {
		padding-block: 2rem;
	}
	@media ${breakpoints.lg} {
		padding-block: 4rem;
	}
`;
