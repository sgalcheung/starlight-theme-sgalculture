import {
	defineRouteMiddleware,
} from "@astrojs/starlight/route-data";

export const onRequest = defineRouteMiddleware(async (context) => {
	const starlightRoute = context.locals.starlightRoute;
  // starlightRoute.pagination = {prev:undefined, next:undefined}; // 取消分页，可以直接使用 pagination: false 属性控制
  // console.log(starlightRoute);

  // starlightRoute.pagination 控制是否显示分页
});
