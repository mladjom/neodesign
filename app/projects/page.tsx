import { Suspense } from 'react';
import { getAllProjects } from '@/lib/project-service';
import { ProjectListContent } from '@/components/projects/ProjectListContent';
import { AnimatedFeaturedStudy } from '@/components/projects/AnimatedFeaturedStudy';
import { 
  ProjectFilterSkeleton, 
  ProjectGridSkeleton,
  FeaturedCaseStudySkeleton 
} from '@/components/projects/loading/ProjectListLoading';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work - Portfolio Projects',
  description: 'Explore our portfolio of successful digital solutions and case studies.',
  openGraph: {
    title: 'Our Work - Portfolio Projects',
    description: 'Explore our portfolio of successful digital solutions and case studies.',
  },
};

const categories = ["E-commerce", "Web Apps", "Mobile", "Branding"];

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <div className="space-y-20 md:space-y-32">
      {/* Hero Section */}
      <section className="relative pt-20 md:pt-32">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Our Work
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our portfolio of successful digital solutions
            </p>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20">
        <div className="container px-4">
          <div className="space-y-12">
            <Suspense fallback={<ProjectFilterSkeleton />}>
              <ProjectListContent 
                projects={projects} 
                categories={categories} 
              />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Featured Case Studies</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Deep dive into our most impactful projects
              </p>
            </div>
            <Suspense 
              fallback={
                <div className="space-y-8">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <FeaturedCaseStudySkeleton key={i} />
                  ))}
                </div>
              }
            >
              <div className="space-y-8">
                {projects.slice(0, 3).map((project, index) => (
                  <AnimatedFeaturedStudy 
                    key={project.slug} 
                    project={project}
                    index={index}
                  />
                ))}
              </div>
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  );
}