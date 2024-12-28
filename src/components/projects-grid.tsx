import { Button } from '@/components/ui/button'

const projects = [
  {
    title: 'Unview: A Simplified Streaming Experience',
    description: 'Unified media management for modern streaming platforms.',
    video: '/unview-demo.mov',
  },
  {
    title: 'DEI Consulting Web App',
    description: 'The tool consultants use to track organizational progress.',
    video: '/dei-consulting-demo.mov',
  },
  {
    title: 'Patient Management System',
    description: 'Healthcare platform for managing patient records and appointments.',
    video: '/patient-management-demo.mp4',
  },
]

export function ProjectsGrid() {
  return (
    <section className="py-12 max-w-6xl mx-auto">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold text-center mb-12">
          Recent Projects
        </h2>
        <div className="grid gap-16 justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative space-y-6 max-w-xl mx-auto text-center"
            >
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                <video
                  src={project.video}
                  className="object-cover transition-transform group-hover:scale-105"
                  autoPlay
                  loop
                  muted
                  controls
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-500">{project.description}</p>
                <Button variant="outline" className="mt-2">
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
