import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ProjectDetailClient from './ProjectDetailClient';
import { projects } from '@/lib/data';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ projectId: string }>;
}): Promise<Metadata> {
  const { projectId } = await params;
  const project = projects.find((p) => p.id === projectId);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.title} | Mohd Uzair`,
    description: project.overview,
    openGraph: {
      title: project.title,
      description: project.overview,
      images: [`https://mohd-uzair.vercel.app${project.imageUrl}`],
    },
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    projectId: project.id,
  }));
}

const ProjectDetailPage = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const { projectId } = await params;
  const project = projects.find((p) => p.id === projectId);
  if (!project) notFound();
  return <ProjectDetailClient project={project} />;
};

export default ProjectDetailPage;