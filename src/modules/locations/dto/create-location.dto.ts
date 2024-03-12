import { ApiProperty } from '@nestjs/swagger';

export class CreateLocationDto {
  @ApiProperty({
    type: String,
  })
  building: string;

  @ApiProperty({
    type: String,
  })
  locationName: string;

  @ApiProperty({
    type: String,
  })
  locationNumber: string;

  @ApiProperty({
    type: String,
  })
  area: string;

  @ApiProperty({
    type: Number,
    required: true,
    default: 0,
  })
  parentsId: number;
}
