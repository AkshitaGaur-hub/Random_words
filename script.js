let random_words = [
{
    word: "Relentless",
    Meaning: "Showing no sign of giving up or pausing in intensity",
    Synonyms: "Persistent, Unyielding, Determined, Tenacious, Dogged",
    Antonyms: "Weak, Hesitant, Irresolute, Yielding, Reluctant"
},
{
    word: "Lucid",
    Meaning: "Clearly expressed and easy to understand",
    Synonyms: "Clear, Understandable, Coherent, Rational, Transparent",
    Antonyms: "Confusing, Obscure, Vague, Muddled, Incoherent"
},
{
    word: "Diligent",
    Meaning: "Showing care and effort in one's work or duties",
    Synonyms: "Hardworking, Industrious, Persistent, Attentive, Dedicated",
    Antonyms: "Lazy, Negligent, Idle, Careless, Indifferent"
},
{
    word: "Timid",
    Meaning: "Lacking self-confidence or courage",
    Synonyms: "Shy, Hesitant, Fearful, Nervous, Bashful",
    Antonyms: "Brave, Bold, Confident, Fearless, Courageous"
},
{
    word: "Frugal",
    Meaning: "Economical or careful in spending resources",
    Synonyms: "Thrifty, Economical, Prudent, Sparing, Conservative",
    Antonyms: "Extravagant, Wasteful, Lavish, Spendthrift, Imprudent"
},
{
    word: "Naive",
    Meaning: "Lacking worldly experience or judgment",
    Synonyms: "Innocent, Gullible, Trusting, Childlike, Unsuspecting",
    Antonyms: "Wise, Experienced, Skeptical, Suspicious, Worldly"
},
{
    word: "Obscure",
    Meaning: "Not clearly understood or easily expressed",
    Synonyms: "Vague, Unclear, Ambiguous, Hidden, Indistinct",
    Antonyms: "Clear, Obvious, Evident, Understandable, Explicit"
},
{
    word: "Robust",
    Meaning: "Strong and healthy; vigorous",
    Synonyms: "Sturdy, Resilient, Durable, Solid, Vigorous",
    Antonyms: "Weak, Frail, Fragile, Delicate, Feeble"
},
{
    word: "Candid",
    Meaning: "Truthful and straightforward; honest",
    Synonyms: "Honest, Frank, Blunt, Sincere, Open",
    Antonyms: "Deceptive, Dishonest, Secretive, Reserved, Insincere"
},
{
    word: "Subtle",
    Meaning: "Not obvious; delicate or precise",
    Synonyms: "Delicate, Faint, Understated, Refined, Nuanced",
    Antonyms: "Obvious, Harsh, Blunt, Crude, Loud"
},
{
    word: "Imminent",
    Meaning: "About to happen very soon",
    Synonyms: "Impending, Approaching, Forthcoming, Looming, Near",
    Antonyms: "Distant, Delayed, Postponed, Avoidable, Remote"
},
{
    word: "Eradicate",
    Meaning: "To completely destroy or get rid of",
    Synonyms: "Eliminate, Remove, Exterminate, Abolish, Annihilate",
    Antonyms: "Create, Establish, Build, Promote, Encourage"
},
{
    word: "Amiable",
    Meaning: "Friendly and pleasant",
    Synonyms: "Affable, Genial, Cordial, Friendly, Pleasant",
    Antonyms: "Hostile, Unfriendly, Rude, Mean, Cold"
},
{
    word: "Deviate",
    Meaning: "To move away from the usual path or standard",
    Synonyms: "Diverge, Depart, Stray, Veer, Swerve",
    Antonyms: "Conform, Follow, Obey, Stick, Maintain"
},
{
    word: "Austere",
    Meaning: "Severe or strict in manner or appearance",
    Synonyms: "Stern, Severe, Harsh, Strict, Ascetic",
    Antonyms: "Luxurious, Lenient, Gentle, Mild, Indulgent"
},
{
    word: "Transit",
    Meaning: "The act of passing through or across a place",
    Synonyms: "Passage, Movement, Transportation, Transfer, Journey",
    Antonyms: "Stay, Remain, Halt, Stop, Pause"
},
{
    word: "Reverent",
    Meaning: "Showing deep respect or admiration",
    Synonyms: "Respectful, Devout, Worshipful, Admiring, Awe-struck",
    Antonyms: "Disrespectful, Irreverent, Rude, Scornful, Disdainful"
},
{
    word: "Scrutinize",
    Meaning: "To examine closely and carefully",
    Synonyms: "Inspect, Examine, Analyze, Study, Survey",
    Antonyms: "Ignore, Overlook, Neglect, Disregard, Skim"
},
{
    word: "Incisive",
    Meaning: "Clear and sharp in thinking or expression",
    Synonyms: "Sharp, Penetrating, Acute, Keen, Clear",
    Antonyms: "Vague, Dull, Blunt, Indirect, Confused"
},
{
    word: "Cumbersome",
    Meaning: "Large or heavy and therefore difficult to carry or use",
    Synonyms: "Bulky, Clumsy, Unwieldy, Heavy, Awkward",
    Antonyms: "Light, Manageable, Convenient, Easy, Simple"
},
{
    word: "Sincere",
    Meaning: "Genuine and honest",
    Synonyms: "Honest, Genuine, Frank, Truthful, Earnest",
    Antonyms: "Insincere, Dishonest, Fake, Deceptive, Hypocritical"
},
{
    word: "Obsolete",
    Meaning: "No longer in use or useful",
    Synonyms: "Outdated, Old-fashioned, Antiquated, Archaic, Defunct",
    Antonyms: "Modern, Current, Up-to-date, New, Fresh"
},
{
    word: "Astute",
    Meaning: "Having sharp judgment; clever",
    Synonyms: "Shrewd, Sharp, Clever, Perceptive, Insightful",
    Antonyms: "Dull, Stupid, Naive, Slow, Unobservant"
},
{
    word: "Intricate",
    Meaning: "Very detailed and complicated",
    Synonyms: "Complex, Detailed, Complicated, Elaborate, Sophisticated",
    Antonyms: "Simple, Plain, Easy, Clear, Straightforward"
},
{
    word: "Impeccable",
    Meaning: "Without any faults or errors",
    Synonyms: "Flawless, Perfect, Immaculate, Spotless, Exemplary",
    Antonyms: "Faulty, Imperfect, Flawed, Defective, Weak"
},
{
    word: "Skeptical",
    Meaning: "Doubting or questioning",
    Synonyms: "Doubtful, Suspicious, Cynical, Unconvinced, Distrustful",
    Antonyms: "Trusting, Confident, Certain, Believing, Positive"
},
{
    word: "Vigilant",
    Meaning: "Watchful and alert for danger",
    Synonyms: "Alert, Watchful, Careful, Attentive, Observant",
    Antonyms: "Careless, Negligent, Inattentive, Distracted, Unaware"
},
{
    word: "Altruistic",
    Meaning: "Unselfishly concerned for others",
    Synonyms: "Selfless, Charitable, Kind, Benevolent, Generous",
    Antonyms: "Selfish, Self-centered, Greedy, Narcissistic, Stingy"
},
{
    word: "Tactful",
    Meaning: "Showing sensitivity in dealing with others",
    Synonyms: "Diplomatic, Considerate, Thoughtful, Polite, Discreet",
    Antonyms: "Rude, Tactless, Impolite, Blunt, Insensitive"
},
{
    word: "Tenacious",
    Meaning: "Holding firmly to a purpose or goal",
    Synonyms: "Persistent, Determined, Stubborn, Resolute, Steadfast",
    Antonyms: "Weak, Irresolute, Hesitant, Yielding, Indecisive"
},
{
    word: "Frugal",
    Meaning: "Careful in using money or resources",
    Synonyms: "Thrifty, Economical, Sparing, Prudent, Careful",
    Antonyms: "Wasteful, Extravagant, Lavish, Profligate, Spendthrift"
},
{
    word: "Articulate",
    Meaning: "Able to express ideas clearly and effectively",
    Synonyms: "Eloquent, Expressive, Fluent, Clear, Coherent",
    Antonyms: "Inarticulate, Mumbled, Confused, Unclear, Tongue-tied"
},
{
    word: "Meticulous",
    Meaning: "Showing great attention to detail",
    Synonyms: "Careful, Thorough, Detailed, Precise, Exact",
    Antonyms: "Careless, Sloppy, Negligent, Inaccurate, Hasty"
},
{
    word: "Exotic",
    Meaning: "Unusual and exciting because of being from far away",
    Synonyms: "Foreign, Unusual, Unique, Strange, Rare",
    Antonyms: "Common, Native, Ordinary, Familiar, Usual"
},
{
    word: "Fastidious",
    Meaning: "Very attentive to detail; hard to please",
    Synonyms: "Meticulous, Picky, Fussy, Particular, Exacting",
    Antonyms: "Undemanding, Easygoing, Lenient, Careless, Uncritical"
},
{
    word: "Obsequious",
    Meaning: "Excessively eager to please or obey",
    Synonyms: "Servile, Submissive, Fawning, Sycophantic, Flattering",
    Antonyms: "Domineering, Assertive, Independent, Confident, Bold"
},
{
    word: "Impetuous",
    Meaning: "Acting quickly without thought",
    Synonyms: "Impulsive, Rash, Hasty, Reckless, Spontaneous",
    Antonyms: "Cautious, Careful, Thoughtful, Considerate, Deliberate"
},{
    word: "Ambiguous",
    Meaning: "Open to more than one interpretation; unclear",
    Synonyms: "Vague, Unclear, Doubtful, Equivocal, Obscure",
    Antonyms: "Clear, Obvious, Definite, Explicit, Certain"
},
{
    word: "Oblivious",
    Meaning: "Unaware or unconscious of what is happening",
    Synonyms: "Unaware, Ignorant, Unmindful, Forgetful, Inattentive",
    Antonyms: "Aware, Conscious, Mindful, Alert, Attentive"
},
{
    word: "Inquisitive",
    Meaning: "Curious or eager to learn",
    Synonyms: "Curious, Questioning, Investigative, Probing, Interested",
    Antonyms: "Indifferent, Uninterested, Apathetic, Unconcerned, Detached"
},
{
    word: "Impatient",
    Meaning: "Unable to wait calmly",
    Synonyms: "Restless, Anxious, Eager, Short-tempered, Irritable",
    Antonyms: "Patient, Calm, Tolerant, Composed, Forbearing"
},
{
    word: "Assertive",
    Meaning: "Confidently self-assured and standing up for oneself",
    Synonyms: "Confident, Forceful, Firm, Decisive, Bold",
    Antonyms: "Submissive, Passive, Shy, Hesitant, Timid"
},
{
    word: "Audacious",
    Meaning: "Showing a willingness to take bold risks",
    Synonyms: "Bold, Daring, Fearless, Adventurous, Brave",
    Antonyms: "Cautious, Timid, Careful, Reserved, Fearful"
},
{
    word: "Shankering",
    Meaning: "A strong desire or craving",
    Synonyms: "Longing, Yearning, Craving, Desire, Hunger",
    Antonyms: "Dislike, Aversion, Indifference, Repulsion, Distaste"
},
{
    word: "Flamboyant",
    Meaning: "Tending to attract attention because of confidence and style",
    Synonyms: "Showy, Flashy, Extravagant, Ostentatious, Vibrant",
    Antonyms: "Plain, Modest, Simple, Restrained, Unassuming"
},
{
    word: "Vindictive",
    Meaning: "Having a strong desire for revenge",
    Synonyms: "Revengeful, Spiteful, Malicious, Bitter, Unforgiving",
    Antonyms: "Forgiving, Merciful, Kind, Compassionate, Lenient"
},
{
    word: "Sadistic",
    Meaning: "Deriving pleasure from causing pain or suffering",
    Synonyms: "Cruel, Brutal, Ruthless, Harsh, Callous",
    Antonyms: "Kind, Compassionate, Gentle, Caring, Humane"
},
{
    word: "Vicissitude",
    Meaning: "A change or variation occurring in the course of something",
    Synonyms: "Fluctuation, Change, Variation, Shift, Alteration",
    Antonyms: "Stability, Sameness, Constancy, Uniformity, Steadiness"
},
{
    word: "Ineffable",
    Meaning: "Too great or extreme to be expressed in words",
    Synonyms: "Indescribable, Inexpressible, Unutterable, Unspeakable, Beyond words",
    Antonyms: "Describable, Expressible, Definable, Explainable, Articulate"
},
{
    word: "Pernicious",
    Meaning: "Having a harmful effect, especially in a gradual way",
    Synonyms: "Harmful, Dangerous, Deadly, Destructive, Detrimental",
    Antonyms: "Beneficial, Harmless, Helpful, Innocuous, Safe"
},
{
    word: "Psychopath",
    Meaning: "A person exhibiting antisocial behavior and lack of empathy",
    Synonyms: "Sociopath, Maniac, Lunatic, Madman, Deranged person",
    Antonyms: "Normal, Sane, Balanced, Rational, Stable person"
},
{
    word: "Obfuscate",
    Meaning: "To make something unclear or confusing",
    Synonyms: "Confuse, Blur, Complicate, Cloud, Obscure",
    Antonyms: "Clarify, Explain, Illuminate, Simplify, Elucidate"
},
{
    word: "Ubiquitous",
    Meaning: "Present, appearing, or found everywhere",
    Synonyms: "Omnipresent, Everywhere, Pervasive, Universal, Widespread",
    Antonyms: "Rare, Scarce, Uncommon, Limited, Restricted"
},
{
    word: "Despair",
    Meaning: "Complete loss or absence of hope",
    Synonyms: "Hopelessness, Misery, Sadness, Desperation, Melancholy",
    Antonyms: "Hope, Optimism, Happiness, Joy, Confidence"
},
{
    word: "Hesitate",
    Meaning: "To pause before doing something",
    Synonyms: "Pause, Delay, Waver, Falter, Dither",
    Antonyms: "Proceed, Continue, Decide, Advance, Act"
},
{
    word: "Arrogant",
    Meaning: "Having an exaggerated sense of one's own importance",
    Synonyms: "Proud, Conceited, Haughty, Overbearing, Egotistical",
    Antonyms: "Humble, Modest, Respectful, Unassuming, Meek"
},
{
    word: "Mollify",
    Meaning: "To calm or soothe someone's anger or anxiety",
    Synonyms: "Pacify, Soothe, Appease, Calm, Placate",
    Antonyms: "Agitate, Upset, Anger, Provoke, Irritate"
},
{
    word: "Linger",
    Meaning: "To stay longer than necessary",
    Synonyms: "Remain, Stay, Loiter, Delay, Persist",
    Antonyms: "Leave, Depart, Go, Hurry, Rush"
},
{
    word: "Gobble",
    Meaning: "To eat hurriedly or greedily",
    Synonyms: "Devour, Consume, Inhale, Scarf, Wolf down",
    Antonyms: "Nibble, Pick, Morsel, Abstain, Fast"
},
{
    word: "Wrecked",
    Meaning: "Damaged or destroyed",
    Synonyms: "Ruined, Destroyed, Broken, Shattered, Crushed",
    Antonyms: "Intact, Safe, Whole, Fixed, Repaired"
},
{
    word: "Turmoil",
    Meaning: "A state of great disturbance or confusion",
    Synonyms: "Chaos, Disorder, Confusion, Upheaval, Turbulence",
    Antonyms: "Calm, Order, Peace, Stability, Tranquility"
},
{
    word: "Absurd",
    Meaning: "Wildly unreasonable or illogical",
    Synonyms: "Ridiculous, Ludicrous, Preposterous, Foolish, Nonsensical",
    Antonyms: "Reasonable, Sensible, Logical, Rational, Realistic"
},{
    word: "Prime",
    Meaning: "Of the best quality or importance",
    Synonyms: "Main, Chief, Principal, Foremost, Peak",
    Antonyms: "Secondary, Minor, Inferior, Subordinate, Least"
},
{
    word: "Excusable",
    Meaning: "Able to be forgiven or justified",
    Synonyms: "Forgivable, Justifiable, Allowable, Understandable, Pardoned",
    Antonyms: "Unforgivable, Inexcusable, Unjustifiable, Blameworthy, Condemnable"
},
{
    word: "Deteriorate",
    Meaning: "To become worse over time",
    Synonyms: "Decline, Worsen, Decay, Degrade, Degenerate",
    Antonyms: "Improve, Enhance, Repair, Restore, Progress"
},
{
    word: "Intimidate",
    Meaning: "To frighten or threaten someone",
    Synonyms: "Threaten, Scare, Bully, Frighten, Terrorize",
    Antonyms: "Encourage, Comfort, Support, Reassure, Help"
},
{
    word: "Fable",
    Meaning: "A short story conveying a moral lesson",
    Synonyms: "Tale, Story, Legend, Parable, Myth",
    Antonyms: "Fact, Reality, Truth, History, Account"
},
{
    word: "Elated",
    Meaning: "Very happy or proud; jubilant",
    Synonyms: "Overjoyed, Ecstatic, Thrilled, Jubilant, Delighted",
    Antonyms: "Depressed, Sad, Miserable, Unhappy, Gloomy"
},
{
    word: "Fraudulent",
    Meaning: "Dishonest and illegal",
    Synonyms: "Deceptive, Dishonest, Fake, False, Corrupt",
    Antonyms: "Honest, Truthful, Genuine, Authentic, Real"
},
{
    word: "Accordless",
    Meaning: "Lacking agreement or harmony",
    Synonyms: "Discordant, Disagreeing, Conflicting, Disunited, Dissonant",
    Antonyms: "Agreeing, Harmonious, United, Compatible, Consistent"
},
{
    word: "Bummer",
    Meaning: "A disappointing or unpleasant situation",
    Synonyms: "Disappointment, Letdown, Misfortune, Setback, Trouble",
    Antonyms: "Pleasure, Delight, Success, Joy, Benefit"
},
{
    word: "Deceptive",
    Meaning: "Giving an appearance that is misleading or false",
    Synonyms: "Misleading, Dishonest, False, Fraudulent, Deceitful",
    Antonyms: "Honest, Truthful, Genuine, Sincere, Reliable"
},
{
    word: "Imperspective",
    Meaning: "Lacking perspective or insight",
    Synonyms: "Unaware, Shortsighted, Narrow-minded, Uninformed, Biased",
    Antonyms: "Insightful, Perceptive, Wise, Clear-sighted, Thoughtful"
},
{
    word: "Mended",
    Meaning: "Repaired or fixed",
    Synonyms: "Repaired, Fixed, Restored, Healed, Rebuilt",
    Antonyms: "Broken, Damaged, Ruined, Wrecked, Harmed"
},
{
    word: "Perplexed",
    Meaning: "Confused or puzzled",
    Synonyms: "Baffled, Bewildered, Confounded, Puzzled, Mystified",
    Antonyms: "Clear, Certain, Understanding, Confident, Sure"
},
{
    word: "Amplified",
    Meaning: "Made larger, stronger, or more intense",
    Synonyms: "Increased, Magnified, Enlarged, Boosted, Intensified",
    Antonyms: "Reduced, Decreased, Minimized, Lessened, Weakened"
},
{
    word: "Flabbergasted",
    Meaning: "Extremely surprised or shocked",
    Synonyms: "Astonished, Amazed, Stunned, Shocked, Dumbfounded",
    Antonyms: "Unimpressed, Expected, Calm, Unmoved, Indifferent"
},
{
    word: "Relentless",
    Meaning: "Showing no sign of stopping or weakening",
    Synonyms: "Persistent, Unyielding, Determined, Tireless, Incessant",
    Antonyms: "Weak, Hesitant, Yielding, Intermittent, Reluctant"
},
{
    word: "Embarrassed",
    Meaning: "Feeling self-conscious or ashamed",
    Synonyms: "Ashamed, Humiliated, Mortified, Shy, Uncomfortable",
    Antonyms: "Confident, Proud, Comfortable, Bold, Unashamed"
},
{
    word: "Tranquil",
    Meaning: "Calm, peaceful, and quiet",
    Synonyms: "Peaceful, Calm, Serene, Quiet, Placid",
    Antonyms: "Agitated, Turbulent, Noisy, Chaotic, Restless"
},
{
    word: "Authority",
    Meaning: "The power to give orders or make decisions",
    Synonyms: "Power, Control, Command, Jurisdiction, Influence",
    Antonyms: "Powerlessness, Weakness, Subordination, Helplessness, Obedience"
},
{
    word: "Perceive",
    Meaning: "To become aware of through the senses",
    Synonyms: "Notice, Observe, Detect, Recognize, Discern",
    Antonyms: "Ignore, Overlook, Miss, Neglect, Disregard"
},
{
    word: "Nurture",
    Meaning: "To care for and encourage growth or development",
    Synonyms: "Foster, Support, Cultivate, Encourage, Raise",
    Antonyms: "Neglect, Ignore, Abandon, Harm, Discourage"
},
{
    word: "Revitalize",
    Meaning: "To give new life or energy to something",
    Synonyms: "Renew, Refresh, Restore, Rejuvenate, Energize",
    Antonyms: "Drain, Weaken, Exhaust, Deplete, Damage"
},
{
    word: "Quips",
    Meaning: "Witty or clever remarks",
    Synonyms: "Jokes, Witticisms, Remarks, Jests, Banter",
    Antonyms: "Seriousness, Sobriety, Gravity, Solemnity, Earnestness"
},
{
    word: "Decentralize",
    Meaning: "To distribute power away from a central authority",
    Synonyms: "Distribute, Delegate, Devolve, Disperse, Disband",
    Antonyms: "Centralize, Concentrate, Consolidate, Unite, Gather"
},
{
    word: "Calibration",
    Meaning: "The process of adjusting something precisely",
    Synonyms: "Adjustment, Tuning, Regulation, Alignment, Standardization",
    Antonyms: "Misalignment, Malfunction, Disorder, Confusion, Inaccuracy"
},
{
    word: "Rigorous",
    Meaning: "Extremely thorough and accurate",
    Synonyms: "Strict, Thorough, Exacting, Stringent, Precise",
    Antonyms: "Lenient, Careless, Easy, Lax, Relaxed"
},
{
    word: "Emotive",
    Meaning: "Able to arouse intense feeling",
    Synonyms: "Emotional, Expressive, Passionate, Moving, Touching",
    Antonyms: "Unemotional, Cold, Indifferent, Detached, Impassive"
},
{
    word: "Inside",
    Meaning: "Within the interior of something",
    Synonyms: "Inner, Interior, Within, Internal, Inward",
    Antonyms: "Outside, Exterior, External, Outward, Outer"
},
{
    word: "Ingrained",
    Meaning: "Deeply fixed or established",
    Synonyms: "Entrenched, Deep-rooted, Fixed, Established, Embedded",
    Antonyms: "Superficial, Shallow, Temporary, Unfixed, Fickle"
},
{
    word: "Prophetic",
    Meaning: "Foretelling events as if by divine inspiration",
    Synonyms: "Predictive, Visionary, Foretelling, Prescient, Clairvoyant",
    Antonyms: "Unpredictive, Unforeseeing, Shortsighted, Unprophetic, Blind"
},
{
    word: "Reluctant",
    Meaning: "Unwilling or hesitant to do something",
    Synonyms: "Hesitant, Unwilling, Disinclined, Resistant, Loath",
    Antonyms: "Willing, Eager, Ready, Enthusiastic, Agreeable"
},
{
    word: "Cunning",
    Meaning: "Showing skill in achieving goals by deceit",
    Synonyms: "Sly, Crafty, Clever, Wily, Devious",
    Antonyms: "Naive, Honest, Straightforward, Gullible, Trusting"
},
{
    word: "Ridiculous",
    Meaning: "Deserving or inviting mockery; absurd",
    Synonyms: "Absurd, Ludicrous, Preposterous, Silly, Foolish",
    Antonyms: "Serious, Reasonable, Sensible, Logical, Plausible"
},
{
    word: "Funky",
    Meaning: "Unconventionally stylish or unusual",
    Synonyms: "Trendy, Stylish, Hip, Cool, Quirky",
    Antonyms: "Dull, Old-fashioned, Boring, Conventional, Plain"
},
{
    word: "Crawling",
    Meaning: "Moving slowly close to the ground",
    Synonyms: "Creeping, Slithering, Dragging, Shuffling, Inch-by-inch",
    Antonyms: "Running, Flying, Racing, Speeding, Sprinting"
},
{
    word: "Inevitable",
    Meaning: "Certain to happen; unavoidable",
    Synonyms: "Unavoidable, Inescapable, Sure, Certain, Predestined",
    Antonyms: "Avoidable, Uncertain, Doubtful, Preventable, Surprising"
},
{
    word: "Resentment",
    Meaning: "Bitter indignation from unfair treatment",
    Synonyms: "Bitterness, Grudge, Anger, Annoyance, Displeasure",
    Antonyms: "Forgiveness, Acceptance, Happiness, Pleasure, Satisfaction"
},
{
    word: "Legitimate",
    Meaning: "Conforming to the law or rules",
    Synonyms: "Legal, Lawful, Valid, Genuine, Authorized",
    Antonyms: "Illegal, Illegitimate, Invalid, Fake, Unauthorized"
},
{
    word: "Credential",
    Meaning: "A qualification or achievement proving identity",
    Synonyms: "Qualification, Certificate, Document, Reference, License",
    Antonyms: "Disqualification, Incompetence, Failure, Imposture, Fake"
},
{
    word: "Stoic",
    Meaning: "Showing endurance and calm in hardship",
    Synonyms: "Unemotional, Resilient, Impassive, Patient, Enduring",
    Antonyms: "Emotional, Sensitive, Weak, Excitable, Complaining"
}

];

function generateRandom() {
    let index = Math.floor(Math.random() * random_words.length);
    let selected = random_words[index];

    document.getElementById("word").textContent = `Word: ${selected.word}`;
    document.getElementById("meaning").textContent = `Meaning: ${selected.Meaning}`;
    document.getElementById("synonyms").textContent = `Synonyms: ${selected.Synonyms}`;
    document.getElementById("antonyms").textContent = `Antonyms: ${selected.Antonyms}`;
}
