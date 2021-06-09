import classnames from 'classnames'
import SidebarItem from './sidebar-item'

const Sidebar = () => {
  return (
    <div className={classnames(
      'fixed',
      'md:relative',
      'bottom-0',
      'w-full',
      'md:w-48',
      'h-16',
      'md:h-screen',
      'mt-12',
      'z-10',
    )}>
      <div className={classnames(
        'md:fixed',
        'md:top-0',
        'md:left-0',
        'content-center',
        'md:centent-start',
        'justify-between',
        'md:mt-12',
        'md:w-48',
        'text-left',
      )}>
        <ul className={classnames(
          'list-reset',
          'flex',
          'flex-row',
          'md:flex-col',
          'py-0',
          'md:py-3',
          'px-1',
          'md:px-2',
          'text-center',
          'md:text-left',
        )}>
          <SidebarItem
            hover="hover:border-pink-500"
            icon="fa fa-tasks"
            text="text-gray-600 md:text-gray-400"
          >
            Tasks
          </SidebarItem>
          <SidebarItem
            hover="hover:border-purple-500"
            icon="fa fa-envelope"
            text="text-gray-600 md:text-gray-400"
          >
            Messages
          </SidebarItem>
          <SidebarItem
            hover="border-blue-600"
            icon="fas fa-chart-area text-blue-600"
            text="text-white md:text-white"
          >
            Analytics
          </SidebarItem>
          <SidebarItem
            hover="hover:border-red-500"
            icon="fa fa-wallet"
            text="text-gray-600 md:text-gray-400"
          >
            Payments
          </SidebarItem>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
