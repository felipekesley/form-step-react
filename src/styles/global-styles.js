import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	html{
		@media (max-width: 1199.92px) {
			font-size: 93.75%; // 16px
		}
		
		@media (max-width: 767.92px) {
			font-size: 87.5%; // 14px
		}
	}

	body {
		font-family: ${({ theme }) => theme.fonts.font1};
	}

	.full-h{
		min-height: 100vh;
	}

	.flex{
		display: flex;

		&.y-center{
			align-items: center;
		}

		&.one{
			flex: 1
		}
	}
`
