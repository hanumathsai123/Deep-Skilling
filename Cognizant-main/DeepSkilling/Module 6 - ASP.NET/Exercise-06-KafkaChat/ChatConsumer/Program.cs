using Confluent.Kafka;

const string topic = "chat-messages";

var config = new ConsumerConfig
{
    BootstrapServers = "localhost:9092",
    GroupId = "chat-console-clients",
    AutoOffsetReset = AutoOffsetReset.Earliest
};

using var consumer = new ConsumerBuilder<Ignore, string>(config).Build();
consumer.Subscribe(topic);

Console.WriteLine("Kafka chat consumer");
Console.WriteLine("Listening for messages. Press Ctrl+C to stop.");

try
{
    while (true)
    {
        var result = consumer.Consume();
        Console.WriteLine($"Message: {result.Message.Value}");
    }
}
catch (OperationCanceledException)
{
    consumer.Close();
}
