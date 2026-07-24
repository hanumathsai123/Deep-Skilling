using Confluent.Kafka;

const string topic = "chat-messages";

var config = new ProducerConfig
{
    BootstrapServers = "localhost:9092"
};

using var producer = new ProducerBuilder<Null, string>(config).Build();

Console.WriteLine("Kafka chat producer");
Console.WriteLine("Type a message and press Enter. Type exit to stop.");

while (true)
{
    Console.Write("You: ");
    var message = Console.ReadLine();

    if (string.Equals(message, "exit", StringComparison.OrdinalIgnoreCase))
    {
        break;
    }

    if (string.IsNullOrWhiteSpace(message))
    {
        continue;
    }

    var result = await producer.ProduceAsync(topic, new Message<Null, string> { Value = message });
    Console.WriteLine($"Sent to {result.TopicPartitionOffset}");
}
