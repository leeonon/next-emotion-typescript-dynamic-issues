import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('./dynamic-component'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
})

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <DynamicComponent />
    </div>
  )
}
