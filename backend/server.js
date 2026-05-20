import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { clerkMiddleware } from '@clerk/express';
import { connectDB } from './config/db.js';
import doctorRouter from './routes/doctorRouter.js';
import serviceRouter from './routes/serviceRouter.js';
import appointmentRouter from './routes/appointmentRouter.js';
import serviceAppointmentRouter from './routes/serviceAppointmentRouter.js';


const app = express();
const port = 4000;

const allowedOrigins = [
"http://localhost:5173",
"http://localhost:5174"
];

//middlewares
app.use(cors(
    {
        origin: function (origin, callback){
            if(!origin) return callback(null, true);
            const allowedOrigins = [
      "http://localhost:5173",
      "http://localhost:5174"
    ];

            if(allowedOrigins.includes(origin)){
                return callback(null, true)
            }

            return callback(new Error("Not allowed by CORS"));
        },
        credentials: true,
          }
));

app.use(clerkMiddleware());
app.use(express.json({limit: "20mb"}));
app.use(express.urlencoded({limit: "20mb", extended: true}));

//db
connectDB();


//routes

app.use("/api/doctors", doctorRouter);
app.use("/api/services", serviceRouter);
app.use("/api/appointments", appointmentRouter);
app.use("/api/service-appointments", serviceAppointmentRouter);

app.get('/', (req, res) => {
res.send("API WORKING");
});

app.listen(port, () => {
console.log(`Server started on http://localhost:${port}`);
});

