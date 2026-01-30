import { Body, Controller, Get, Post } from '@nestjs/common';
import { BlogPostService } from './blog-post.service';
import { CreateBlogPostDto } from './dto/create-blog-post.dto';
import { BlogPost } from './models/blog-post.entity';

@Controller('blog-post')
export class BlogPostController {
  constructor(private readonly blogPostService: BlogPostService) {}

  @Post()
  create(@Body() dto: CreateBlogPostDto): Promise<BlogPost> {
    return this.blogPostService.create(dto);
  }

  @Get()
  findAll(): Promise<BlogPost[]> {
    return this.blogPostService.findAll();
  }

  @Get()
  findOne(id: number): Promise<BlogPost> {
    return this.blogPostService.findOne(id);
  }
}
