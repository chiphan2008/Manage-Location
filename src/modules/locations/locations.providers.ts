import { REPOSITORY } from 'utils';
import { Location } from './entities/location.entity';

export const locationProviders = [
  {
    provide: REPOSITORY.LOCATIONS,
    useValue: Location,
  },
];
