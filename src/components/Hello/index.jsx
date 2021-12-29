import { useRouter } from 'next/router'
import { Button } from 'react-bootstrap'
import { Text, Title } from 'src/components/All'
import * as Style from './style'

const Hello = () => {
	const router = useRouter()
	const handleClick = () => {
		router.push('/step-1')
	}
	return (
		<Style.Content>
			<Title align="center">Oi, vamos começar?</Title>
			<Text align="center">
				Precisamos de algumas informações, siga os passos e logo
				terminaremos.
			</Text>
			<Style.boxBtn>
				<Button variant="primary" size="lg" onClick={handleClick}>
					Vamos lá
				</Button>
			</Style.boxBtn>
		</Style.Content>
	)
}

export default Hello
