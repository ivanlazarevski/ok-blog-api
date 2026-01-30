import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogPost } from './models/blog-post.entity';
import { Repository } from 'typeorm';
import { CreateBlogPostDto } from './dto/create-blog-post.dto';

@Injectable()
export class BlogPostService {
  constructor(
    @InjectRepository(BlogPost)
    private readonly blogPostRepository: Repository<BlogPost>,
  ) {}

  create(dto: CreateBlogPostDto): Promise<BlogPost> {
    const post = this.blogPostRepository.create(dto);
    return this.blogPostRepository.save(post);
  }

  findAll(): Promise<BlogPost[]> {
    return this.blogPostRepository.find();
  }

  async findOne(id: number): Promise<BlogPost> {
    const post = await this.blogPostRepository.findOneBy({ id });
    if (!post) {
      throw new NotFoundException({
        message: 'Post not found!',
      });
    }

    return post;
  }
}
