import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.html',
  styleUrls: ['./blog.scss']
})
export class BlogComponent {
  posts: BlogPost[] = [
    {
      id: 1,
      title: 'Building Scalable Microservices with Node.js',
      excerpt: 'Learn how to design and implement microservices architecture using Node.js, Docker, and Kubernetes for production-ready applications.',
      category: 'Backend',
      date: 'Dec 15, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800',
      tags: ['Node.js', 'Microservices', 'Docker'],
      featured: true
    },
    {
      id: 2,
      title: 'Modern State Management in Angular with Signals',
      excerpt: 'Explore Angular\'s new reactive primitives and how signals are revolutionizing state management in Angular applications.',
      category: 'Frontend',
      date: 'Dec 10, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
      tags: ['Angular', 'Signals', 'RxJS'],
      featured: true
    },
    {
      id: 3,
      title: 'Optimizing React Performance for Large Applications',
      excerpt: 'Deep dive into React performance optimization techniques including memoization, code splitting, and lazy loading.',
      category: 'Frontend',
      date: 'Dec 5, 2024',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800',
      tags: ['React', 'Performance', 'Optimization']
    },
    {
      id: 4,
      title: 'Serverless Architecture: AWS Lambda Best Practices',
      excerpt: 'Best practices and patterns for building serverless applications with AWS Lambda, API Gateway, and DynamoDB.',
      category: 'Cloud',
      date: 'Nov 28, 2024',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
      tags: ['AWS', 'Serverless', 'Lambda']
    },
    {
      id: 5,
      title: 'GraphQL vs REST: Choosing the Right API Architecture',
      excerpt: 'A comprehensive comparison of GraphQL and REST APIs, including when to use each approach for your projects.',
      category: 'API Design',
      date: 'Nov 20, 2024',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
      tags: ['GraphQL', 'REST', 'API']
    },
    {
      id: 6,
      title: 'CI/CD Pipeline with GitHub Actions',
      excerpt: 'Step-by-step guide to setting up automated testing, building, and deployment pipelines using GitHub Actions.',
      category: 'DevOps',
      date: 'Nov 12, 2024',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800',
      tags: ['CI/CD', 'GitHub', 'DevOps']
    }
  ];

  categories = ['All', 'Frontend', 'Backend', 'Cloud', 'API Design', 'DevOps'];
  selectedCategory = 'All';

  get filteredPosts(): BlogPost[] {
    if (this.selectedCategory === 'All') {
      return this.posts;
    }
    return this.posts.filter(post => post.category === this.selectedCategory);
  }

  get featuredPosts(): BlogPost[] {
    return this.posts.filter(post => post.featured);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
