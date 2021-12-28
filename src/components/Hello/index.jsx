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
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
				voluptatem amet magnam assumenda sunt consectetur, iste eligendi
				qui distinctio, accusamus nesciunt dolorem vero unde fugiat
				facilis veniam! Nihil, facere tempore.
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
