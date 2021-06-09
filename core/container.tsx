import classnames from 'classnames'

const Container = ({ children }) => {
  return (
    <div className={classnames(
      'w-full',
      'h-full',
      'bg-gray-800',
      'font-sans',
      'leading-normal',
      'tracking-normal',
      'mt-12',
    )}>
      {children}
    </div>
  )
}

export default Container
