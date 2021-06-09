import classnames from 'classnames'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode;
  hover: string;
  icon: string;
  text: string;
}

const SidebarItem = ({ children, hover, icon, text }: Props) => {
  return (
    <li className="mr-3 flex-1">
      <a className={classnames(
        'block',
        'py-1',
        'md:py-3',
        'pl-1',
        'align-middle',
        'text-white',
        'no-underline',
        'hover:text-white',
        'border-b-2',
        'border-gray-800',
        hover,
      )}>
        <i className={classnames(
          'pr-0',
          'md:pr-3',
          icon,
        )}></i>
        <span className={classnames(
          'block',
          'md:inline-block',
          'pb-1',
          'md:pb-0',
          'text-xs',
          'md:text-base',
          text,
        )}>
          {children}
        </span>
      </a>
    </li>
  )
}

export default SidebarItem
