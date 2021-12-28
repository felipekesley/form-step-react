import * as Style from './style'

const Title = ({ children, align, mb }) => {
	return <Style.Title className={`${align} ${mb}`}>{children}</Style.Title>
}

export default Title
