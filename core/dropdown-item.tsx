import classnames from 'classnames'

const DropdownItem = ({ children }) => {
  return (
    <li className={classnames(
      'flex-1',
      'md:flex-none',
      'md:mr-3',
    )}>
      {children}
    </li>
  )
}

export default DropdownItem
