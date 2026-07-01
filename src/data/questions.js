export const schemas = {
  ED: {
    name: "Emotional Deprivation",
    description: "The feeling that your emotional needs won't be met by others",
    color: "#1e4d7b"
  },
  AB: {
    name: "Abandonment",
    description: "The fear that those close to you will leave or abandon you",
    color: "#2a5f8f"
  },
  MA: {
    name: "Mistrust/Abuse",
    description: "The belief that others will hurt, abuse, or take advantage of you",
    color: "#3a6fa0"
  },
  SI: {
    name: "Social Isolation",
    description: "The feeling that you're different, don't belong, or are separate from the world",
    color: "#4a7fb0"
  },
  DS: {
    name: "Defectiveness",
    description: "The feeling that you're flawed, bad, or unlovable",
    color: "#5a6b7d"
  },
  FA: {
    name: "Failure",
    description: "The belief that you're inadequate or will inevitably fail",
    color: "#6b7c8d"
  },
  DI: {
    name: "Dependency/Incompetence",
    description: "The belief that you can't handle everyday responsibilities without help",
    color: "#4a6278"
  },
  VH: {
    name: "Vulnerability to Harm",
    description: "The fear that disaster could strike at any moment",
    color: "#3d5669"
  },
  EM: {
    name: "Enmeshment",
    description: "Excessive emotional involvement with others at the expense of your identity",
    color: "#2f6882"
  },
  SB: {
    name: "Subjugation",
    description: "Surrendering control to others out of feeling forced or to avoid consequences",
    color: "#287a8a"
  },
  SS: {
    name: "Self-Sacrifice",
    description: "Excessively meeting others' needs at the expense of your own",
    color: "#3a8494"
  },
  FLC: {
    name: "Fear of Losing Control",
    description: "The fear of losing control over your emotions or impulses",
    color: "#4c6e7a"
  },
  EC: {
    name: "Emotional Constriction",
    description: "Inhibiting emotions and spontaneous expression",
    color: "#5a7580"
  },
  US: {
    name: "Unrelenting Standards",
    description: "The belief that you must meet very high internalized standards",
    color: "#667788"
  },
  ET: {
    name: "Entitlement",
    description: "The belief that you're superior and entitled to special rights",
    color: "#556677"
  },
  IS: {
    name: "Insufficient Self-Control",
    description: "Difficulty exercising self-control and tolerating frustration",
    color: "#445566"
  },
  AS: {
    name: "Approval-Seeking",
    description: "Excessive emphasis on gaining approval and recognition",
    color: "#334455"
  },
  NP: {
    name: "Negativity/Pessimism",
    description: "A pervasive focus on negative aspects of life",
    color: "#2c3e50"
  }
};

export const questions = [
  { id: 1, schema: "ED", text: "I haven't gotten enough love and attention" },
  { id: 2, schema: "ED", text: "For the most part, I haven't had someone to depend on for advice" },
  { id: 3, schema: "ED", text: "For much of my life, I haven't had someone who wanted to get close to me" },
  { id: 4, schema: "ED", text: "For much of my life, I haven't felt that I am special to someone" },
  { id: 5, schema: "ED", text: "I have rarely had a strong person to give me sound advice" },

  { id: 6, schema: "AB", text: "I worry that people I feel close to will leave me or abandon me" },
  { id: 7, schema: "AB", text: "I don't feel that important relationships will last" },
  { id: 8, schema: "AB", text: "I feel addicted to partners who can't be there for me" },
  { id: 9, schema: "AB", text: "I become upset when someone leaves me alone" },
  { id: 10, schema: "AB", text: "I can't let myself get very close to other people" },
  { id: 11, schema: "AB", text: "The people close to me have been very unpredictable" },
  { id: 12, schema: "AB", text: "I need other people so much that I worry about losing them" },
  { id: 13, schema: "AB", text: "I can't be myself or express what I really feel, or people will leave" },

  { id: 14, schema: "MA", text: "I feel that I cannot let my guard down in the presence of others" },
  { id: 15, schema: "MA", text: "It is only a matter of time before someone betrays me" },
  { id: 16, schema: "MA", text: "I have a great deal of difficulty trusting people" },
  { id: 17, schema: "MA", text: "I set up tests for other people" },
  { id: 18, schema: "MA", text: "I subscribe to the belief: Control or be controlled" },

  { id: 19, schema: "SI", text: "I'm fundamentally different from other people" },
  { id: 20, schema: "SI", text: "I don't belong; I'm a loner" },
  { id: 21, schema: "SI", text: "I always feel on the outside of groups" },
  { id: 22, schema: "SI", text: "No one really understands me" },
  { id: 23, schema: "SI", text: "I sometimes feel as if I'm an alien" },

  { id: 24, schema: "DS", text: "No one I desire would want to stay close to me if they knew the real me" },
  { id: 25, schema: "DS", text: "I am inherently flawed and defective" },
  { id: 26, schema: "DS", text: "I feel that I'm not lovable" },
  { id: 27, schema: "DS", text: "I am too unacceptable in very basic ways to reveal myself" },
  { id: 28, schema: "DS", text: "When people like me, I feel I am fooling them" },
  { id: 29, schema: "DS", text: "I cannot understand how anyone could love me" },

  { id: 30, schema: "FA", text: "Almost nothing I do at work is as good as other people can do" },
  { id: 31, schema: "FA", text: "Most other people are more capable than I am" },
  { id: 32, schema: "FA", text: "I'm a failure" },
  { id: 33, schema: "FA", text: "I'm not as talented as most people" },
  { id: 34, schema: "FA", text: "I often feel embarrassed around others about my accomplishments" },
  { id: 35, schema: "FA", text: "I often compare my accomplishments and feel they are less successful" },

  { id: 36, schema: "DI", text: "I do not feel capable of getting by on my own" },
  { id: 37, schema: "DI", text: "I believe that other people can take care of me better than I can" },
  { id: 38, schema: "DI", text: "I have trouble tackling new tasks without someone to guide me" },
  { id: 39, schema: "DI", text: "I screw up everything I try" },
  { id: 40, schema: "DI", text: "If I trust my own judgment, I'll make the wrong decision" },
  { id: 41, schema: "DI", text: "I feel that I need someone I can rely on for advice" },
  { id: 42, schema: "DI", text: "I feel more like a child than an adult when handling responsibilities" },
  { id: 43, schema: "DI", text: "I find the responsibilities of everyday life overwhelming" },

  { id: 44, schema: "VH", text: "I feel that a disaster could strike at any moment" },
  { id: 45, schema: "VH", text: "I worry about being attacked" },
  { id: 46, schema: "VH", text: "I take great precautions to avoid getting sick or hurt" },
  { id: 47, schema: "VH", text: "I worry that I'm developing a serious illness" },
  { id: 48, schema: "VH", text: "I worry a lot about the bad things happening in the world" },
  { id: 49, schema: "VH", text: "I feel that the world is a dangerous place" },

  { id: 50, schema: "EM", text: "My parent(s) and I tend to be overinvolved in each other's lives" },
  { id: 51, schema: "EM", text: "It is very difficult for my parent(s) and me to keep intimate details private" },
  { id: 52, schema: "EM", text: "My parent(s) and I must speak almost every day or I feel guilty" },
  { id: 53, schema: "EM", text: "I often feel that I do not have a separate identity from my family" },
  { id: 54, schema: "EM", text: "It is very difficult for me to maintain distance from intimate people" },
  { id: 55, schema: "EM", text: "I often feel that I have no privacy with my parent(s) or partner" },
  { id: 56, schema: "EM", text: "I feel that my parent(s) are very hurt about my living away from them" },

  { id: 57, schema: "SB", text: "I believe that if I do what I want, I'm only asking for trouble" },
  { id: 58, schema: "SB", text: "In relationships, I let the other person have the upper hand" },
  { id: 59, schema: "SB", text: "I've always let others make choices for me" },
  { id: 60, schema: "SB", text: "I worry a lot about pleasing other people, so they won't reject me" },
  { id: 61, schema: "SB", text: "I will go to much greater lengths than most people to avoid confrontations" },

  { id: 62, schema: "SS", text: "I give more to other people than I get back in return" },
  { id: 63, schema: "SS", text: "I'm the one who usually ends up taking care of people I'm close to" },
  { id: 64, schema: "SS", text: "No matter how busy I am, I can always find time for others" },
  { id: 65, schema: "SS", text: "I've always been the one who listens to everyone's problems" },
  { id: 66, schema: "SS", text: "Other people see me as doing too much for others and not enough for myself" },
  { id: 67, schema: "SS", text: "No matter how much I give, I feel it is never enough" },

  { id: 68, schema: "FLC", text: "I worry about losing control of my actions" },
  { id: 69, schema: "FLC", text: "I worry that I might seriously harm someone if my anger gets out of control" },
  { id: 70, schema: "FLC", text: "I feel that I must control my emotions and impulses or something bad will happen" },
  { id: 71, schema: "FLC", text: "A lot of anger and resentment build up inside of me that I don't express" },

  { id: 72, schema: "EC", text: "I am too self-conscious to show positive feelings to others" },
  { id: 73, schema: "EC", text: "I find it embarrassing to express my feelings to others" },
  { id: 74, schema: "EC", text: "I find it hard to be warm and spontaneous" },
  { id: 75, schema: "EC", text: "I control myself so much that people think I am unemotional" },
  { id: 76, schema: "EC", text: "People see me as uptight emotionally" },

  { id: 77, schema: "US", text: "I must be the best at most of what I do; I can't accept second best" },
  { id: 78, schema: "US", text: "I strive to keep almost everything in perfect order" },
  { id: 79, schema: "US", text: "I have so much to accomplish that there is almost no time to really relax" },
  { id: 80, schema: "US", text: "I must meet all my responsibilities" },
  { id: 81, schema: "US", text: "I often sacrifice pleasure and happiness to meet my own standards" },
  { id: 82, schema: "US", text: "I can't let myself off the hook easily or make excuses for my mistakes" },
  { id: 83, schema: "US", text: "I must always be Number One in terms of my performance" },

  { id: 84, schema: "ET", text: "I have a lot of trouble accepting 'no' for an answer when I want something" },
  { id: 85, schema: "ET", text: "I hate to be constrained or kept from doing what I want" },
  { id: 86, schema: "ET", text: "I feel that I shouldn't have to follow the normal rules and conventions" },
  { id: 87, schema: "ET", text: "I often find that I am so involved in my own priorities that I don't have time for friends" },
  { id: 88, schema: "ET", text: "People often tell me I am very controlling about how things are done" },
  { id: 89, schema: "ET", text: "I can't tolerate other people telling me what to do" },

  { id: 90, schema: "IS", text: "I can't seem to discipline myself to complete routine or boring tasks" },
  { id: 91, schema: "IS", text: "Often I allow myself to carry through on impulses and express emotions that get me into trouble" },
  { id: 92, schema: "IS", text: "I get bored very easily" },
  { id: 93, schema: "IS", text: "When tasks become difficult, I usually cannot persevere and complete them" },
  { id: 94, schema: "IS", text: "I can't force myself to do things I don't enjoy, even when I know it's for my own good" },
  { id: 95, schema: "IS", text: "I have rarely been able to stick to my resolutions" },
  { id: 96, schema: "IS", text: "I often do things impulsively that I later regret" },

  { id: 97, schema: "AS", text: "It is important to me to be liked by almost everyone I know" },
  { id: 98, schema: "AS", text: "I change myself depending on the people I'm with so they'll like me" },
  { id: 99, schema: "AS", text: "My self-esteem is based mostly on how other people view me" },
  { id: 100, schema: "AS", text: "Even if I don't like someone, I still want him or her to like me" },

  { id: 101, schema: "NP", text: "I can't help thinking that bad things are going to happen" },
  { id: 102, schema: "NP", text: "I worry a lot about terrible things that might happen" },
  { id: 103, schema: "NP", text: "I think about all the things that could go wrong" },
  { id: 104, schema: "NP", text: "Even when things seem to be going well, I feel that it is only temporary" },

  { id: 105, schema: "ED", text: "In general, people have not been there to meet my emotional needs" },
  { id: 106, schema: "AB", text: "I find myself clinging to people I'm close to because I'm afraid they'll leave" },
  { id: 107, schema: "MA", text: "I am quite suspicious of other people's motives" },
  { id: 108, schema: "SI", text: "I feel isolated and alone" },
  { id: 109, schema: "DS", text: "There is something wrong with me that makes me unlovable" },
  { id: 110, schema: "FA", text: "I don't measure up to other people in terms of talent and ability" },
  { id: 111, schema: "DI", text: "I lack common sense and good judgment in everyday matters" },
  { id: 112, schema: "VH", text: "I often worry that something bad is about to happen" },
  { id: 113, schema: "EM", text: "I have trouble separating my point of view from that of my parents" },
  { id: 114, schema: "SB", text: "I feel controlled by others because I'm afraid of their anger or rejection" },
  { id: 115, schema: "SS", text: "I put others' needs before my own or I feel guilty" },
  { id: 116, schema: "US", text: "I have such high standards that my performance usually doesn't measure up" },
  { id: 117, schema: "ET", text: "I insist that things be done my way because I know best" },
  { id: 118, schema: "IS", text: "I have great difficulty getting myself to stop drinking, smoking, or other problem behaviors" }
];

export const ratingScale = [
  { value: 1, label: "Completely untrue of me" },
  { value: 2, label: "Mostly untrue of me" },
  { value: 3, label: "Slightly more true than untrue" },
  { value: 4, label: "Moderately true of me" },
  { value: 5, label: "Mostly true of me" },
  { value: 6, label: "Describes me perfectly" }
];
