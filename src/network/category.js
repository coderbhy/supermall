import { request } from './request';

export function getCategory () {
  return request({
    url: '/category'
  })
}

export function getContent (maitKey) {
  return request({
    url: `/subcategory?maitKey=${maitKey}`
  })
}