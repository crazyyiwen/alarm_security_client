<picture class="github-only">
  <img alt="Alarm.com Logo" src="https://media.licdn.com/dms/image/v2/C4E0BAQH7Ef_zBPUQnw/company-logo_200_200/company-logo_200_200/0/1631327773224?e=1760572800&v=beta&t=F4eDHsvrfiFP7QhJraL5DjXVaeiKeSSlcwtZ-z8Nt1g" width="40%">
</picture>

<div>
<br>
</div>

## Get started

Download and host Docker file - alarm-chat-client:

```
docker build -t alarm-chat-client .
docker run -d -p 5173:80 --name alarm-chat-client alarm-chat-client
```

Then, open the client side UI in any browser

```
http://localhost:5173/
```

Now you are hosting client side UI successfully, this is a React based light chatbot.

## Core benefits

LangGraph provides low-level supporting infrastructure for *any* long-running, stateful workflow or agent. LangGraph does not abstract prompts or architecture, and provides the following central benefits:

- [Durable execution](https://langchain-ai.github.io/langgraph/concepts/durable_execution/): Build agents that persist through failures and can run for extended periods, automatically resuming from exactly where they left off.
- [Human-in-the-loop](https://langchain-ai.github.io/langgraph/concepts/human_in_the_loop/): Seamlessly incorporate human oversight by inspecting and modifying agent state at any point during execution.
- [Comprehensive memory](https://langchain-ai.github.io/langgraph/concepts/memory/): Create truly stateful agents with both short-term working memory for ongoing reasoning and long-term persistent memory across sessions.
- [Debugging with LangSmith](http://www.langchain.com/langsmith): Gain deep visibility into complex agent behavior with visualization tools that trace execution paths, capture state transitions, and provide detailed runtime metrics.
- [Production-ready deployment](https://langchain-ai.github.io/langgraph/concepts/deployment_options/): Deploy sophisticated agent systems confidently with scalable infrastructure designed to handle the unique challenges of stateful, long-running workflows.

## LangGraph’s ecosystem

While LangGraph can be used standalone, it also integrates seamlessly with any LangChain product, giving developers a full suite of tools for building agents. To improve your LLM application development, pair LangGraph with:

- [LangSmith](http://www.langchain.com/langsmith) — Helpful for agent evals and observability. Debug poor-performing LLM app runs, evaluate agent trajectories, gain visibility in production, and improve performance over time.
- [LangGraph Platform](https://langchain-ai.github.io/langgraph/concepts/langgraph_platform/) — Deploy and scale agents effortlessly with a purpose-built deployment platform for long running, stateful workflows. Discover, reuse, configure, and share agents across teams — and iterate quickly with visual prototyping in [LangGraph Studio](https://langchain-ai.github.io/langgraph/concepts/langgraph_studio/).
- [LangChain](https://python.langchain.com/docs/introduction/) – Provides integrations and composable components to streamline LLM application development.

> [!NOTE]
> Looking for the JS version of LangGraph? See the [JS repo](https://github.com/langchain-ai/langgraphjs) and the [JS docs](https://langchain-ai.github.io/langgraphjs/).

## Additional resources

- [Guides](https://langchain-ai.github.io/langgraph/guides/): Quick, actionable code snippets for topics such as streaming, adding memory & persistence, and design patterns (e.g. branching, subgraphs, etc.).
- [Reference](https://langchain-ai.github.io/langgraph/reference/graphs/): Detailed reference on core classes, methods, how to use the graph and checkpointing APIs, and higher-level prebuilt components.
- [Examples](https://langchain-ai.github.io/langgraph/examples/): Guided examples on getting started with LangGraph.
- [LangChain Forum](https://forum.langchain.com/): Connect with the community and share all of your technical questions, ideas, and feedback.
- [LangChain Academy](https://academy.langchain.com/courses/intro-to-langgraph): Learn the basics of LangGraph in our free, structured course.
- [Templates](https://langchain-ai.github.io/langgraph/concepts/template_applications/): Pre-built reference apps for common agentic workflows (e.g. ReAct agent, memory, retrieval etc.) that can be cloned and adapted.
- [Case studies](https://www.langchain.com/built-with-langgraph): Hear how industry leaders use LangGraph to ship AI applications at scale.

## Acknowledgements

LangGraph is inspired by [Pregel](https://research.google/pubs/pub37252/) and [Apache Beam](https://beam.apache.org/). The public interface draws inspiration from [NetworkX](https://networkx.org/documentation/latest/). LangGraph is built by LangChain Inc, the creators of LangChain, but can be used without LangChain.