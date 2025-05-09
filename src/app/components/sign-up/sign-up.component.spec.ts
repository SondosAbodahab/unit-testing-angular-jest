import { ComponentFixture, TestBed } from '@angular/core/testing';

import { render, screen } from '@testing-library/angular';
import { SignUpComponent } from './sign-up.component';

it('has sign up header', async () => {
  await render(SignUpComponent);
  const header = screen.getByRole('heading', { name: 'Sign Up' });
  expect(header).toBeInTheDocument();
});
