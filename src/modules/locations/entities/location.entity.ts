import { BaseModel } from 'base/model';
import { AutoIncrement, Column, PrimaryKey, Table } from 'sequelize-typescript';

@Table({ tableName: 'locations' })
export class Location extends BaseModel {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  building: string;

  @Column
  locationName: string;

  @Column
  locationNumber: string;

  @Column
  area: string;

  @Column
  parentsId: number;
}
