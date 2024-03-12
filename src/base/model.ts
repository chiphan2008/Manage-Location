import {
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  Default,
} from 'sequelize-typescript';

export class BaseModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Default(new Date())
  @Column
  createdAt: Date;

  @Default(new Date())
  @Column
  updatedAt: Date;

  @Default(false)
  @Column
  isDeleted: boolean;
}
