import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Query,
} from '@nestjs/common';
import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { BaseQueryDto } from 'base/query.dto';

@ApiTags('Locations')
@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a location',
  })
  create(
    @Req() req: { body: CreateLocationDto },
    @Body() createLocationDto: CreateLocationDto,
  ) {
    console.log(createLocationDto);
    return this.locationsService.create(req.body);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all location',
  })
  findAll(@Query() paramsDto: BaseQueryDto) {
    return this.locationsService.findAll(paramsDto);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get one location by id',
  })
  findOne(@Param('id') id: string) {
    return this.locationsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update a location',
  })
  update(
    @Param('id') id: string,
    @Body() updateLocationDto: UpdateLocationDto,
    @Req() req: { body: UpdateLocationDto },
  ) {
    console.log("🚀 ~ LocationsController ~ updateLocationDto:", updateLocationDto)
    return this.locationsService.update(+id, req.body);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a location',
  })
  remove(@Param('id') id: string) {
    return this.locationsService.remove(+id);
  }
}
