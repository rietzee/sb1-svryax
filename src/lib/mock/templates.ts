import { Template } from '@/types/template';

export const mockTemplates: Template[] = [
  {
    id: '1',
    name: 'Welcome Email',
    category: 'Onboarding',
    group: 'Automated',
    subject: 'Welcome to Our Service!',
    content: 'Hello {{name}}, welcome to our service!',
    createdAt: new Date('2024-02-20').toISOString(),
    updatedAt: new Date('2024-02-20').toISOString(),
  },
  {
    id: '2',
    name: 'Password Reset',
    category: 'Security',
    group: 'Automated',
    subject: 'Password Reset Request',
    content: 'Click here to reset your password: {{resetLink}}',
    createdAt: new Date('2024-02-19').toISOString(),
    updatedAt: new Date('2024-02-19').toISOString(),
  },
];

export async function getTemplates() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return mockTemplates;
}

export async function createTemplate(template: Partial<Template>) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const newTemplate: Template = {
    id: String(mockTemplates.length + 1),
    name: template.name!,
    category: template.category!,
    group: template.group!,
    subject: template.subject!,
    content: template.content!,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  mockTemplates.push(newTemplate);
  return newTemplate;
}

export async function updateTemplate(id: string, template: Partial<Template>) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const index = mockTemplates.findIndex((t) => t.id === id);
  if (index === -1) {
    throw new Error('Template not found');
  }
  mockTemplates[index] = {
    ...mockTemplates[index],
    ...template,
    updatedAt: new Date().toISOString(),
  };
  return mockTemplates[index];
}

export async function deleteTemplate(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const index = mockTemplates.findIndex((t) => t.id === id);
  if (index === -1) {
    throw new Error('Template not found');
  }
  mockTemplates.splice(index, 1);
  return true;
}