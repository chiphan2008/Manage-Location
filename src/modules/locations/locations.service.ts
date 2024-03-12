import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { REPOSITORY, paginate } from 'utils';
import { Location } from './entities/location.entity';
import { BaseQueryDto } from 'base/query.dto';

@Injectable()
export class LocationsService {
  constructor(
    @Inject(REPOSITORY.LOCATIONS)
    private readonly locationRepository: typeof Location,
  ) {}
  create(createLocationDto: CreateLocationDto) {
    try {
      return this.locationRepository.create({ ...createLocationDto });
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async findAll(paramsDto: BaseQueryDto) {
    try {
      const { page = 1, limit = 10 } = paramsDto;
      const result = await this.locationRepository.findAll({
        offset: page - 1 >= 0 ? page - 1 : 0,
        limit,
        where: {
          isDeleted: false,
        },
      });
      return paginate({
        data: result,
        totalItems: result?.length,
        page,
        limit,
      });
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  findOne(id: number) {
    try {
      return this.locationRepository.findByPk(id);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  update(id: number, updateLocationDto: UpdateLocationDto) {
    try {
      return this.locationRepository.update(updateLocationDto, {
        where: { id },
      });
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  remove(id: number) {
    try {
      return this.locationRepository.destroy({
        where: { id },
      });
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
