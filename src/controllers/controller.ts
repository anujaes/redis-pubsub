import { Request, Response } from 'express';
import publisherUtils from '../utils/publisher.utils';

class Controller {

    public async publishMessage(req: Request, res: Response): Promise<void> {
        try {

            await publisherUtils.publish(
                process.env.PUBLISHERS_CHANNEL_A!,
                JSON.stringify(req.body)
            )
            res.status(200).send({ message: 'Messaeg published!' });
        } catch (error) {
            console.log(error);
            res.status(500).send({ error: 'Internal Server Error' });
        }
    }
}

export default new Controller();
