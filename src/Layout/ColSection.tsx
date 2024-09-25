import { Grid, Typography } from '@arco-design/web-react';
import React, { PropsWithChildren } from 'react';

function Section({ children }: PropsWithChildren) {
  return <Grid.Row className="w-full">{children}</Grid.Row>;
}

function Title({ children, title }: PropsWithChildren<{ title?: string }>) {
  return (
    <Grid.Col xs={24} lg={8}>
      <Typography.Title className="text-lg">{title}</Typography.Title>
      <Typography.Text className="mt-1 text-sm text-gray-600">{children}</Typography.Text>
    </Grid.Col>
  );
}

function Content({ children }: PropsWithChildren) {
  return (
    <Grid.Col xs={24} lg={16} className="max-lg:mt-4">
      {children}
    </Grid.Col>
  );
}

export const ColSection = {
  Section, Title, Content,
};