import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { getBooking } from '@/controllers';

const bookingRouter = Router();

bookingRouter.all('/*', authenticateToken);
bookingRouter.get('/', getBooking);
//bookingRouter.post('/', postBooking);
//bookingRouter.put('/:bookingId', updateBooking);

export { bookingRouter };
