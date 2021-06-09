import classnames from 'classnames'

const GraphCard = ({ children, title }) => {
  return (
    <div className={classnames(
      'p-6',
      'w-full',
      'md:w-1/2',
      'xl:w-1/3',
    )}>
      <div className={classnames(
        'bg-white',
        'border-transparent',
        'rounded-lg',
        'shadow-xl',
      )}>
        <div className={classnames(
          'p-2',
          'bg-gradient-to-b',
          'from-gray-300',
          'to-gray-100',
          'text-gray-800',
          'uppercase',
          'border-b-2',
          'border-gray-300',
          'rounded-tl-lg',
          'rounded-tr-lg',
        )}>
          <h5 className={classnames(
            'font-bold',
            'uppercase',
            'text-gray-600',
          )}>
            {title}
          </h5>
        </div>
        <div className="p-5">
          {children}
        </div>
      </div>
    </div>
  )
}

export default GraphCard
