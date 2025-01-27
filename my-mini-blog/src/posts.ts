export interface Post {
    id: number;
    title: string;
    author: string;
    preview: string;
    content: string;
    date: string;
}


const userPosts: Post[] = [
  {
    id: 1,
    title: "Optimizing React Performance",
    author: "John Doe",
    preview:
      "Learn how to improve your React app's performance with these simple techniques...",
    content: `React is known for its performance, but as applications grow, you might encounter some slowdowns. Here are some tips to keep your React app running smoothly:

      1. Use React.memo for component memoization
      2. Implement useCallback for function memoization
      3. Utilize useMemo for expensive computations
      4. Optimize your Redux store structure
      5. Implement code splitting with React.lazy and Suspense

      By applying these techniques, you can significantly improve your app's performance and provide a better user experience.`,
    date: "Jan 24, 2025",
  },
  {
    id: 2,
    title: "Introduction to GraphQL",
    author: "Jane Smith",
    preview: "Discover the benefits of using GraphQL in your next project...",
    content: `GraphQL is a query language for APIs and a runtime for executing those queries with your existing data. It provides a more efficient, powerful and flexible alternative to REST. Here's why you might want to use GraphQL in your next project:

      1. Precise data fetching
      2. Single endpoint
      3. Strongly-typed schema
      4. Real-time updates with subscriptions
      5. Excellent developer tools

      While GraphQL offers many benefits, it's important to note that it also comes with its own set of challenges, such as increased complexity on the server-side and potential performance issues with nested queries.`,
    date: "Jan 23, 2025",
  },
  {
    id: 3,
    title: "Mastering CSS Grid",
    author: "John Doe",
    preview: "Take your layout skills to the next level with CSS Grid...",
    content: `CSS Grid is a powerful layout system that allows for complex web page layouts to be created with ease. Here are some key concepts and techniques to help you master CSS Grid:

      1. Grid Container and Grid Items
      2. Defining Rows and Columns
      3. Grid Lines and Grid Areas
      4. Implicit and Explicit Grids
      5. Alignment and Justification
      6. Grid Auto Flow
      7. Responsive Design with CSS Grid
      8. Subgrids

      By mastering these concepts, you'll be able to create complex, responsive layouts with clean, semantic HTML and minimal CSS.`,
    date: "Jan 22, 2025",
  },
];

export default userPosts;