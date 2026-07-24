# Exercise 06 - Kafka Chat

Kafka chat sample:

- `ChatProducer` - sends console messages to the `chat-messages` topic.
- `ChatConsumer` - consumes and prints messages from the same topic.

Kafka prerequisites:

```powershell
zookeeper-server-start.bat ..\..\config\zookeeper.properties
kafka-server-start.bat ..\..\config\server.properties
kafka-topics.bat --create --topic chat-messages --bootstrap-server localhost:9092
```

Run the consumer:

```powershell
dotnet run --project .\ChatConsumer\ChatConsumer.csproj
```

Run the producer in another command prompt:

```powershell
dotnet run --project .\ChatProducer\ChatProducer.csproj
```
