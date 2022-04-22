import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}

@Injectable()
export class TransformResDataInterceptor<T> implements NestInterceptor<T, ResponseData<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<ResponseData<T>> {
    return next.handle().pipe(
      map((data) => {
        return {
          success: true,
          data,
        };
      }),
    );
  }
}
