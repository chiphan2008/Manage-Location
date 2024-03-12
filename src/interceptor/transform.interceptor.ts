import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

export interface Response<T> {
  statusCode: number;
  message: string;
  data: T;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(ctx: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => {
        console.log('data:', data);
        let message = 'OK';

        if (typeof data === 'string') {
          message = data;
          data = null;
        }

        if (data?.message && data?.message != '') {
          message = data.message;
          data = data.data || null;
        }

        if (data?.items && data?.pagination) {
          return {
            data: data.items,
            pagination: data.pagination,
            message,
            statusCode: 200,
          };
        }

        return {
          data,
          message,
          statusCode: 200,
        };
      }),
    );
  }
}
