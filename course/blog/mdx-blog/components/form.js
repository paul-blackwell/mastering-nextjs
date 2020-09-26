import React from 'react';
import { useForm, ValidationError } from '@statickit/react';
import { Field, Heading, Button } from 'theme-ui';

const Form = () => {
  const [state, handleSubmit] = useForm('contactForm');

  if (state.succeeded) {
    return <Heading>Thanks for joining!</Heading>;
  }

  return (
    <>
      <Heading>{'Subscribe to my newsletter'}</Heading>
      <form onSubmit={handleSubmit}>
        <Field label="First Name" name="name" mb={2} />
        <Field label="Email" name="email" mb={3} />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <Button type="submit" disabled={state.submitting}>
          {'Submit'}
        </Button>
      </form>
    </>
  );
};

export default Form;
