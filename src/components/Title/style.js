import styled from 'styled-components'

export const Title = styled.h1`
	font-size: ${({ theme }) => theme.sizes.h1};
	margin-bottom: 1rem;

	span {
		color: ${({ theme }) => theme.colors.primary};
	}

	&.center {
		text-align: center;
	}

	&.mb {
		margin-bottom: 2.5rem;
	}
`
