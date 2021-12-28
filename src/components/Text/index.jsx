import * as Style from './style'

const Text = ({ children, align }) => {
	return <Style.Paragraph className={align}>{children}</Style.Paragraph>
}

export default Text
