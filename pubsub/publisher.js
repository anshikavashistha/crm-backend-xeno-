const { PubSub } = require('@google-cloud/pubsub');
const pubSubClient = new PubSub();

const topicName = 'projects/YOUR_PROJECT_ID/topics/YOUR_TOPIC_NAME';

async function publishMessage(data) {
    const dataBuffer = Buffer.from(JSON.stringify(data));

    try {
        const messageId = await pubSubClient.topic(topicName).publish(dataBuffer);
        console.log(`Message ${messageId} published.`);
    } catch (error) {
        console.error(`Received error while publishing: ${error.message}`);
    }
}

module.exports = publishMessage;
