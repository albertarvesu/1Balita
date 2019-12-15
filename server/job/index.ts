import cron from 'cron'

import providers from './../../providers.json'
import populate from './../lib/populate'

const INTERVAL_IN_MINUTES = 5
const CronJob = cron.CronJob

const start = () => {
  providers.map(({ name }, index) => {
    const schedule = (index + 1) * INTERVAL_IN_MINUTES
    console.log(`setting up job for ${name} - */${schedule} * * * *`)
    new CronJob(`*/${schedule} * * * *`, () => {
      console.log(`running job for ${name} at ${new Date()}`)
      populate(name)
    }).start()
  })
}

const job = {
  start
}

export default job
