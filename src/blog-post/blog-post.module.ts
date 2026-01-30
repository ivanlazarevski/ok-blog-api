import { Module } from '@nestjs/common';
import { BlogPostController } from './blog-post.controller';
import { BlogPostService } from './blog-post.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogPost } from './models/blog-post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BlogPost])],
  controllers: [BlogPostController],
  providers: [BlogPostService],
})
export class BlogPostModule {}
