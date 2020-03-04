import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

import { PostImage } from './post-image.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(
    () => PostImage,
    _ => _.posts,
    { cascade: true }
  )
  @JoinTable()
  images: PostImage[];
}
