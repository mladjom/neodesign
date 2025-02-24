import { Suspense } from 'react';
import { getProjectBySlug } from '@/lib/project-service';
// import { ProjectErrorBoundary } from '@/components/projects/ProjectErrorBoundary';
import { ProjectLoading } from '@/components/projects/ProjectLoading';
import { ProjectContent } from '@/components/projects/ProjectContent';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface PageProps {
  params: { slug: string };
}

// Generate metadata for the project page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const project = await getProjectBySlug(params.slug);
    
    return {
      title: `${project.title} - Case Study`,
      description: project.description,
      openGraph: {
        title: project.title,
        description: project.description,
        images: [{ url: project.thumbnail }],
      },
    };
  } catch (error) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    };
  }
}

export default async function ProjectPage({ params }: PageProps) {
  try {
    const project = await getProjectBySlug(params.slug);

    if (!project) {
      notFound();
    }

    return (
      <Suspense fallback={<ProjectLoading />}>
        <ProjectContent project={project} />
      </Suspense>
    );
  } catch (error) {
    console.error('Error loading project:', error);
    throw error; // Let the error boundary handle it
  }
}