const mqtt = require("mqtt");

const url = "wss://api-uat.vinid.dev:443/base-platform/ws/mqtt";
const current_time = new Date();
// host: “api-uat.vinid.dev”, handshakePath: “/base-platform/ws/mqtt”, port: 443
const options = {
  clean: true,
  connectTimeout: 4000,
  port: 443
};

const client = mqtt.connect(url);
const message = '{\"msg\":\"{\\\"user_info\\\":{\\\"sender_id\\\":\\\"F1ECD9EE-B490-4138-8D6F-FE89D795E059\\\",\\\"display_name\\\":\\\"messi\\\"},\\\"message_id\\\":\\\"095D9998-6525-44C6-9A10-8E4624693AA5\\\",\\\"message\\\":\\\"chao lan cuoi\\\"}\"}'

client.on('connect', function () {
  console.log('Connected')
  // Subscribe to a topic
  client.subscribe('bd6d57d7-d7d9-4456-98fb-0d6bbff64dbf/Channel1', function (err) {
    if (!err) {
      // Publish a message to a topic
      client.publish('bd6d57d7-d7d9-4456-98fb-0d6bbff64dbf/Channel1', message)
      console.log('published')
    }
  })
})

// Receive messages
client.on("message", function (topic, message) {
  // message is Buffer
  console.log(JSON.stringify(message.toString()));
});
