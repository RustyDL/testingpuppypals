/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from "@testing-library/react";
import App from "../src/App";
import "@testing-library/jest-dom";

describe("App component", () => {
  test("displays the details of a featured puppy when clicked", () => {
    // Render the App component
    render(<App />);

    // Find the puppy with name "Sir Waggington"
    const puppyName = screen.getByText("Sir Waggington");

    // Simulate a click on the puppy
    fireEvent.click(puppyName);

    // Assert that the featured puppy's name is displayed
    const featuredPuppyName = screen.getByRole("heading", {
      name: /Sir Waggington/i,
    });
    expect(featuredPuppyName).toBeInTheDocument();

    // Assert that the featured puppy's age is displayed
    const featuredPuppyAge = screen.getByText(/Age: \d+/);
    expect(featuredPuppyAge).toBeInTheDocument();

    // Assert that the featured puppy's email is displayed
    const featuredPuppyEmail = screen.getByText(/Email: \S+/);
    expect(featuredPuppyEmail).toBeInTheDocument();
  });

  test("does not display the details of a featured puppy initially", () => {
    // Render the App component
    render(<App />);

    // Assert that the featured puppy's name is not displayed
    const featuredPuppyName = screen.queryByRole("heading", {
      name: /Sir Waggington/i,
    });
    expect(featuredPuppyName).toBeNull();

    // Assert that the featured puppy's age is not displayed
    const featuredPuppyAge = screen.queryByText(/Age: \d+/);
    expect(featuredPuppyAge).toBeNull();

    // Assert that the featured puppy's email is not displayed
    const featuredPuppyEmail = screen.queryByText(/Email: \S+/);
    expect(featuredPuppyEmail).toBeNull();
  });

  test("does not change the featured puppy when the same puppy is clicked twice", () => {
    // Render the App component
    render(<App />);

    // Find the puppy with name "Sir Waggington"
    const puppyName = screen.getByText("Sir Waggington");

    // Simulate a click on the puppy
    fireEvent.click(puppyName);

    // Assert that the initial featured puppy's name is displayed
    const initialFeaturedPuppyName = screen.getByRole("heading", {
      name: /Sir Waggington/i,
    });
    expect(initialFeaturedPuppyName).toBeInTheDocument();

    // Simulate another click on the same puppy
    fireEvent.click(puppyName);

    // Assert that the featured puppy's name is still displayed
    const currentFeaturedPuppyName = screen.getByRole("heading", {
      name: /Sir Waggington/i,
    });
    expect(currentFeaturedPuppyName).toBeInTheDocument();

    // Assert that the featured puppy's name is the same as the initial featured puppy
    expect(currentFeaturedPuppyName).toEqual(initialFeaturedPuppyName);
  });

  test("displays the details of another featured puppy when clicked", () => {
    // Render the App component
    render(<App />);

    // Find the puppy with name "Miss Furbulous"
    const puppyName = screen.getByText("Miss Furbulous");

    // Simulate a click on the puppy
    fireEvent.click(puppyName);

    // Assert that the featured puppy's name is displayed
    const featuredPuppyName = screen.getByRole("heading", {
      name: /Miss Furbulous/i,
    });
    expect(featuredPuppyName).toBeInTheDocument();

    // Assert that the featured puppy's age is displayed
    const featuredPuppyAge = screen.getByText(/Age: \d+/);
    expect(featuredPuppyAge).toBeInTheDocument();

    // Assert that the featured puppy's email is displayed
    const featuredPuppyEmail = screen.getByText(/Email: \S+/);
    expect(featuredPuppyEmail).toBeInTheDocument();
  });
});
