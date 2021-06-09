import classnames from 'classnames'

const MetricCard = ({
  gradient,
  background,
  icon,
  heading,
  text,
  textColor,
  textIcon,
}) => {
  return (
    <div className={classnames(
      'p-6',
      'w-full',
      'md:w-1/2',
      'xl:w-1/3',
    )}>
      <div className={classnames(
        'p-5',
        'bg-gradient-to-b',
        'border-b-4',
        'rounded-lg',
        'shadow-xl',
        gradient,
      )}>
        <div className="flex flex-row items-center">
          <div className="flex-shrink pr-4">
            <div className={classnames(
              'rounded-full',
              'p-5',
              background,
            )}>
              <i className={icon}></i>
            </div>
          </div>
          <div className={classnames(
            'flex-1',
            'text-right',
            'md:text-center',
          )}>
            <h5 className={classnames(
              'font-bold',
              'uppercase',
              'text-gray-600',
            )}>
              {heading}
            </h5>
            <h3 className="font-bold text-3xl">
              {text}&nbsp;
              <span className={textColor}>
                <i className={textIcon}></i>
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MetricCard