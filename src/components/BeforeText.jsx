import { GoClock } from "react-icons/go";
import { IoBookOutline } from "react-icons/io5";
import { RiSeparator } from "react-icons/ri";

function BeforeText() {
  return (
    <section className="w-full py-16 px-4 sm:px-8 lg:px-20    transition-colors duration-500 rounded-3xl">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14 text-red-400">
          AI Article Comparison
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Original Version */}
          <div className="bg-white/10   border border-black/15  rounded-3xl shadow-lg p-6 flex flex-col justify-between  hover:shadow-2xl transition-all duration-300">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Original Version</h3>
              <p className="text-sm  leading-relaxed max-h-[300px] sm:max-h-[300px] overflow-y-auto whitespace-pre-line px-1 scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
                Artificial intelligence is making our lives easier. Popular AI
                tools such as ChatGPT, Google Gemini, Claude, and Perplexity AI
                have all become personal assistants to millions of working
                professionals and students. These days there is a new AI chatbot
                with a new use case coming out every fortnight. However, one
                thing that remains common to all of these chatbots is the
                quality of prompts that help them come up with the best output.
                Prompts, in simple words, are ways in which a user communicates
                with a large language model (LLM) or chatbot. Interestingly, one
                does not need a computer science degree to master prompt
                engineering; it is a skill that anyone can obtain with some
                practice. In this article, we will share 10 practical and
                platform-agnostic tips that may help you become a top AI user,
                boost your efficiency at work, and even unlock your creativity.
                Since prompting involves communication, think of it as a
                structured instruction. According to Google, one of the most
                effective ways of prompting includes four components – persona,
                task, context, and format. ‘Persona’ means who the AI is acting
                as, for example, ‘You are a tour guide.’ The task is what it
                should do – suggest places to try authentic place&gt; foods.
                Context here is essentially what the background or objective is;
                for example, the user is in Delhi for three hours. On the other
                hand, format is how you want the AI chatbot to structure its
                response, such as lists or bullet points. Although one need not
                employ all four components in every prompt, they should try to
                use at least two or three, as this can significantly improve
                outputs. Perhaps the biggest hurdle most users face is the lack
                of clarity in the responses. For an AI chatbot to generate
                relevant and contextual answers, one needs to be very specific.
                Instead of simply inputting, ‘Write a summary,’ one should use a
                clear prompt like the example below: “Write a summary of this
                article in 5 bullet points with a focus on economic implications
                for the IT sector.” Experts advise using clear verbs such as
                ‘translate’, ‘rephrase’, ‘summarise’, ‘create’, and ‘compare’.
                These verbs should be accompanied by helpful context or
                constraints such as length, audience, tone, etc. Prompting is
                not a one-time task, as most of us would like to believe.
                According to experts, users should try to treat it as a
                back-and-forth dialogue. If you don’t like the first answer, you
                should refine the prompt. If you require the same information in
                a different format, you can request it. You can ask the chatbot
                to convert it into a table or show key facts as flash cards. AI
                can also change the tone of the content to the user’s
                preference. Prompts can be refined further to make output
                casual, formal, or even more engaging. Establishing a dialogue
                and iterating not only improves accuracy but also lets the user
                know what kinds of prompts can yield the best results. If you
                are working on formatting, categorisation, or structured
                results, experts suggest using examples, as they can lead to the
                most accurate results. This technique is also known as few-shot
                prompting, as one is guiding an AI model output by giving a
                small number of examples or shots within the prompt itself.
                Here’s a sample prompt: “This is a sample tweet that combines
                humour and statistics to advocate for climate awareness. Write 5
                more in the same style.” When you give clear examples to an AI
                model, it is essentially teaching it to imitate the desired
                pattern or style. This is particularly useful for writing tasks,
                data extraction, and any tasks that would need structured
                output. Several studies have shown that AI performs better when
                it is assigned a specific identity or role. This can impact the
                tone, knowledge scope, and the style of output. If you are
                looking for career advice, assigning the role of a career coach
                in the prompt is advisable. For example – "Act as a career
                coach. Help me write my resume summary for the role of a deputy
                editor." One can also specify tone; for example, write this as a
                motivational coach using a humorous and informal tone. It needs
                to be noted that the clearer the persona, the sharper the
                results. Now that ChatGPT, Gemini, and DeepSeek offer reasoning,
                they have become adept at complex reasoning or problem-solving
                tasks. One simply needs to ask the AI to ‘think step by step’ or
                explain the rationale behind its output. This is called
                chain-of-thought prompting. A simple example would be, “Explain
                the life cycle of a butterfly. Think step by step in different
                stages.” Chain of thought prompting can lead to more accurate
                and often logically sound answers. This is useful, especially in
                math, coding, or logic-based queries. This is only advisable
                under certain circumstances and one should practice caution
                while uploading sensitive documents. Those using ChatGPT,
                Gemini, or Claude with file upload capabilities have the option
                to reference their own data directly. For example, “Use the
                attached document and create a summary of the key findings in
                bullet points.” Often, providing context from your own materials
                makes outputs more relevant and personalised. It needs to be
                noted that prompt engineering is trial and error, meaning what
                works once may not work in every scenario. It is a good idea to
                document your best prompts, track what settings work, and most
                importantly, stay curious. For repeated tasks like report
                writing, brainstorming, or templates for customer support,
                reusing effective prompts that have been saved can save time. AI
                is ubiquitous, but remember it is not here to replace you;
                rather, it is here to help you amplify your critical thinking.
                It doesn’t matter what line of work; better prompting skills
                lead to better output, essentially making working with AI
                faster, easier, and fun.{" "}
              </p>
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-center text-sm   rounded-full py-3 px-5 gap-x-3 border  ">
                <IoBookOutline className="hidden sm:block text-lg" />
                <span>Word Count: 969</span>
                <RiSeparator />
                <GoClock className="hidden sm:block text-lg" />
                <span>Reading Time: 4 min</span>
              </div>
            </div>
          </div>

          {/* Summarized Version */}
          <div className="bg-white/10  border border-black/15 rounded-3xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition-all duration-300">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Summarized Version
              </h3>
              <p className="text-sm leading-relaxed max-h-[300px] sm:max-h-[300px] overflow-y-auto whitespace-pre-line px-1 scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
                Artificial intelligence tools like ChatGPT, Google Gemini, and
                Perplexity AI have become popular personal assistants for many
                professionals and students. However, the quality of the prompts
                used to communicate with these AI chatbots is crucial in getting
                the best outputs. Prompt engineering involves structuring
                instructions to the AI using four key components: persona, task,
                context, and format. Being specific and avoiding vagueness in
                prompts is important. Prompting is an iterative process, where
                users should refine and experiment to get the desired results.
                Using examples in prompts, role-playing with the AI, and
                employing chain-of-thought reasoning can all lead to more
                accurate and relevant outputs. While AI is ubiquitous, it is
                important to see it as a tool to amplify one's critical
                thinking, rather than a replacement. Developing strong prompt
                engineering skills can make working with AI faster, easier, and
                more productive across various domains.
              </p>
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-center text-sm  rounded-full py-3 px-5 gap-x-3 border ">
                <IoBookOutline className="hidden sm:block text-lg" />
                <span>Word Count: 143</span>
                <RiSeparator />
                <GoClock className="hidden sm:block text-lg" />
                <span>Reading Time: 40 sec</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeforeText;
