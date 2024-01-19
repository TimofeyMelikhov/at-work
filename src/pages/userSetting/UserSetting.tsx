import { useParams } from 'react-router-dom'

export const UserSetting = () => {
	const { id } = useParams<'id'>()
	return <div>UserSetting - {id}</div>
}
