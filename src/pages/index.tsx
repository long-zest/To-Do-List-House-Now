import * as Tabs from '@radix-ui/react-tabs'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <Tabs.Root className="pt-10" defaultValue="tab-all">
          <Tabs.List className="flex items-center gap-2 self-stretch">
            <Tabs.Trigger
              value="tab-all"
              className="flex items-center justify-center gap-2 rounded-full border border-gray-200 px-6 py-3 transition-all duration-500 data-[state=active]:bg-gray-700 data-[state=active]:text-white"
            >
              All
            </Tabs.Trigger>
            <Tabs.Trigger
              value="tab-pending"
              className="flex items-center justify-center gap-2 rounded-full border border-gray-200 px-6 py-3 transition-all duration-500 data-[state=active]:bg-gray-700 data-[state=active]:text-white"
            >
              Pending
            </Tabs.Trigger>
            <Tabs.Trigger
              value="tab-completed"
              className="flex items-center justify-center gap-2 rounded-full border border-gray-200 px-6 py-3 transition-all duration-500 data-[state=active]:bg-gray-700 data-[state=active]:text-white"
            >
              Completed
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab-all">
            <div className="pt-10">
              <TodoList status={'all'} />
            </div>
          </Tabs.Content>
          <Tabs.Content value="tab-pending">
            <div className="pt-10">
              <TodoList status="pending" />
            </div>
          </Tabs.Content>
          <Tabs.Content value="tab-completed">
            <div className="pt-10">
              <TodoList status="completed" />
            </div>
          </Tabs.Content>
        </Tabs.Root>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
