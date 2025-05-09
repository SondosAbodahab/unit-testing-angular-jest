import { ComponentFixture, TestBed } from '@angular/core/testing';

import { render, screen } from '@testing-library/angular';
import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  describe('Layout', () => {
    it('has sign up header', async () => {
      await render(SignUpComponent);
      const header = screen.getByRole('heading', { name: 'Sign Up' });
      expect(header).toBeInTheDocument();
    });
    it('has username input', async()=>{
      await render(SignUpComponent);
      expect(screen.getByLabelText('userName')).toBeInTheDocument()
      expect(screen.getByPlaceholderText('userName')).toBeInTheDocument();
    })

    it('has email input', async()=>{
      await render(SignUpComponent);
      expect(screen.getByLabelText('email')).toBeInTheDocument()
      expect(screen.getByPlaceholderText('email')).toBeInTheDocument();
    })

    it('has password input', async()=>{
      await render(SignUpComponent);
      expect(screen.getByLabelText('password')).toBeInTheDocument()
      expect(screen.getByPlaceholderText('password')).toBeInTheDocument();
    })
    it('has password type for password input', async()=>{
      await render(SignUpComponent);
      const input = screen.getByLabelText('password')
      expect(input).toHaveAttribute('type', 'password')
    })

    it('has sign up button', async()=>{
      await render(SignUpComponent);
      const buttons = screen.getAllByRole('button', {name: 'Sign Up'})
      expect(buttons).toHaveLength(1);
    })

    it('disables button initially', async()=>{
      await render(SignUpComponent);
      const button =  screen.getByRole('button', {name: /Sign Up/i})
      expect(button).toBeDisabled()
    })

  });
});
