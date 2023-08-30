import { createQueue } from 'kue';

const queue = createQueue();

const notification = {
  phoneNumber: '4153518780',
  message: 'This is the code to verify your account',
};

const job = queue
  .create('push_notification_code', notification)
  .save((error) => {
    if (!error) {
      console.log(`Notification job created: ${job.id}`);
    }
  });

job
  .on('complete', () => {
    console.log('Notification job completed');
  })
  .on('failed', () => {
    console.log('Notification job failed');
  });
