import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import img1 from '../../../assets/doctorImage1.png'
import img2 from '../../../assets/doctorImage2.png'
import img3 from '../../../assets/doctorImage3.png'
import img4 from '../../../assets/doctorImage4.png'
import img5 from '../../../assets/doctorImage5.png'
import SpecialistCard from './SpecialistCard'
import { Autoplay, Pagination } from 'swiper/modules';

export default function Specialists() {

    const specialist_data = [
        { img: img1, title: 'Dr. Lesley Hull', designation: 'Medicine' },
        { img: img2, title: 'Dr. Ahmad Khan', designation: 'Neurologist' },
        { img: img3, title: 'Dr. Heena Sachdeva', designation: 'Orthopadics' },
        { img: img4, title: 'Dr. Ankur Sharma', designation: 'Medicine' },
        { img: img5, title: 'Dr. Ahmad Stevens', designation: 'Neurologist' },
        { img: img1, title: 'Dr. Lesley Hull', designation: 'Medicine' },
        { img: img2, title: 'Dr. Ahmad Khan', designation: 'Neurologist' },
        { img: img3, title: 'Dr. Heena Sachdeva', designation: 'Orthopadics' },
        { img: img4, title: 'Dr. Ankur Sharma', designation: 'Medicine' },
        { img: img5, title: 'Dr. Ahmad Stevens', designation: 'Neurologist' }
    ]

    return (
        <Box py={4} id="find-doctors">
            <Typography variant="h2" textAlign='center' mb={3} px={2}>
                Our Medical Specialist
            </Typography>
            <Swiper
                slidesPerView={2}
                spaceBetween={20}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                pagination={{
                    clickable: true
                }}
                breakpoints={
                    {
                        767: {
                            slidesPerView: 4
                        }
                    }
                }
            >
                {specialist_data.map((doc, index) => (
                    <SwiperSlide key={index}>
                        <SpecialistCard
                            img={doc.img}
                            title={doc.title}
                            designation={doc.designation} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    )
}