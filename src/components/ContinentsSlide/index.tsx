import { Box } from '@chakra-ui/react'

import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { SliderItem } from './SliderItem'

SwiperCore.use([Navigation, Pagination])

export function ContinentsSlide() {
  return (
    <Box mt="3.25rem" mb="2.5rem" maxHeight="450px">
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        grabCursor
      >
        <SwiperSlide>
          <SliderItem
            title="Europa"
            subtitle="O continente mais antigo"
            image="https://images.unsplash.com/photo-1490642914619-7955a3fd483c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1070&q=80"
          />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItem
            title="América"
            subtitle="Liberdade!"
            image="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}
