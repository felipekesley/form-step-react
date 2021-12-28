import styled from 'styled-components'

export const Paragraph = styled.p`
	font-size: ${({ theme }) => theme.sizes.p};
	margin-bottom: 1rem;
	line-height: 1.5rem;

	&.center {
		text-align: center;
	}
`
