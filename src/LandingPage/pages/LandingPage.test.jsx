import React from 'react';
import {fireEvent, render,screen, waitFor} from '@testing-library/react';
import LandingPage from './LandingPage';
import {describe,it,expect,vi, beforeEach} from "vitest";
import '@testing-library/jest-dom/vitest';
import { signInWithPopup } from 'firebase/auth';

vi.mock("react-router-dom", () => ({
  useNavigate: () => vi.fn(),  // prevent real navigation
}));

// Mock Firebase Auth
vi.mock("firebase/auth", () => ({
  GoogleAuthProvider: vi.fn(),
  signInWithPopup: vi.fn(),
  onAuthStateChanged: vi.fn(() => () => {}), // return unsubscribe fn
  getAuth: vi.fn(() => ({})),                
}));

describe('LandingPage',()=>{
      beforeEach(() => {
    vi.clearAllMocks();
  });

    it("renders landing page's heading",()=>{
        render(<LandingPage/>);
        const headingElement=screen.getByText(/Instantly Summarize Any News Article/i);
        expect(headingElement).toBeInTheDocument();
    })
    it("renders landing page's subheading",()=>{
        render(<LandingPage/>);
     const subHeadings = screen.getAllByText(
     /Transform lengthy news articles into concise, actionable summaries in seconds./i
     );
    expect(subHeadings[0]).toBeInTheDocument();
    })
    
    it("renders Get Started button",()=>{
        render(<LandingPage/>);
        const buttonElement=screen.getAllByRole('button',{name:/Get Started/i});
        expect(buttonElement[0]).toBeInTheDocument();
        expect(buttonElement[0]).not.toBeDisabled();

    })

    it("clickable Get Started button",()=>{
        render(<LandingPage/>);
        const buttonElement=screen.getAllByRole('button',{name:/Get Started/i});
        expect(buttonElement[0]).not.toBeDisabled();
    })
  
    it("disables button and shows loading text when signing in",async()=>{
        signInWithPopup.mockResolvedValue({ user: {} });
        render(<LandingPage/>);
        const buttonElement=screen.getAllByRole('button',{name:/Get Started/i});
        fireEvent.click(buttonElement[0]);

        expect(buttonElement[0]).toBeDisabled();
        expect(buttonElement[0]).toHaveTextContent(/Signing in.../i);

        await waitFor(()=>{
            expect(signInWithPopup).toHaveBeenCalled("/summarize")
        });
    })
    
    it("handles sign-in errors gracefully", async()=>{
        signInWithPopup.mockRejectedValue(new Error("Error during signin:"));
                render(<LandingPage/>);
        const buttonElement=screen.getAllByRole('button',{name:/Get Started/i});
        fireEvent.click(buttonElement[0]);

        await waitFor(()=>{
            expect(buttonElement[0]).toHaveTextContent("Get Started");
            expect(buttonElement[0]).not.toBeDisabled();
        })
    })

});