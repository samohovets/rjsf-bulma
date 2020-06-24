import React from 'react';
import { ErrorListProps } from '@rjsf/core';
import Card from 'react-bulma-components/lib/components/card';
import List from 'react-bulma-components/lib/components/list';
import Notification from 'react-bulma-components/lib/components/notification';

const ErrorList = ({ errors }: ErrorListProps) => (
  <Card className="error-list-card">
    <Card.Header>
      <Card.Header.Title>Errors</Card.Header.Title>
    </Card.Header>
    <Card.Content>
      <List renderAs="ul" className="error-list-items">
        {errors.map((error, i: number) => {
          return (
            <Notification renderAs="li" key={i}>{error.stack}</Notification>
          );
        })}
      </List>
    </Card.Content>
  </Card>
);

export default ErrorList;
