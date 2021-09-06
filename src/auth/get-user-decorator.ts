import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from './user.entity';
//
// export const GetUser = createParamDecorator((data, req): User => {
//   console.log(req);
//   console.log('-----------------------------------------------------');
//   // console.log(req.args[0]?.user);
//   // console.log(req.method);
//   // console.log(req.user);
//   // console.log(req.contextType);
//
//   return req?.user ?? req.args[0]?.user;
// });

export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    //console.log(request);
    return request.user;
  },
);
