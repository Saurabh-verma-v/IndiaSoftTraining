import authMiddleware from './middlware/authMiddleware.js'
import express from 'express'
import authRoute from './routes/authRoute.js'
import categoryRoute from './routes/categoryRoute.js'
import courseRoute from './routes/courseRoute.js'
import enquiryRoute from './routes/enquiryRoute.js'
import trainerApplication from './routes/trainerApplicationRoutes.js'
import testimonialRoute from './routes/testimonialRoutes.js'
import successStoryRoute from './routes/successStoryRoutes.js'
import trainingServiceRoute from './routes/trainingServiceRoutes.js'
import settingRoute from './routes/settingRoutes.js'
import dashboardRoutes  from './routes/dashboardRoutes.js'

const app=express()
import cors from 'cors'

app.use(cors());
app.use(express.json());


app.use('/api/admin',authRoute)

app.use('/api/categories',categoryRoute)

app.use('/api/courses',courseRoute)

app.use('/api/enquiries',enquiryRoute)

app.use('/api/trainer-applications',trainerApplication)

app.use('/api/testimonials',testimonialRoute)

app.use('/api/success-stories',successStoryRoute)

app.use('/api/training-services',trainingServiceRoute)

app.use('/api/settings',settingRoute)

app.use('/api/dashboard',dashboardRoutes)

export default app