import classnames from 'classnames'

const NavItem = ({ className, children }) => {
  return (
    <div className={classnames(
      'flex',
      'md:w-1/3',
      className,
    )}>
      {children}
    </div>
  )
}

export default NavItem
