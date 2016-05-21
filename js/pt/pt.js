// ==UserScript==
// @name         send
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
//@include      *agency.orientbrides.net*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
//'use strict';
/*
查找目标：(\.|\?|\!|:\)|"|,)\s{0,3}\n{0,1}\r\n
替换为：$1\\n\\n

路径="D:\Users\YLJ\Desktop\array.txt"
Sub 整理()
Text = Plugin.File.ReadFileEx(路径)
Text = Replace(Text, "|", ",")
Call Plugin.File.DeleteFile(路径)
Call Plugin.File.WriteFileEx(路径, Text)
TracePrint "整理完毕"
End Sub

Call 整理()


var sheet = (function(){
  var style = document.createElement('style');
  style.appendChild(document.createTextNode(''));
  document.head.appendChild(style);
  return style.sheet;
})();

var div1 = document.createElement('div');
var div3 = document.createElement('div');
div1.setAttribute('id','wrap');
div3.setAttribute('class','divs');
div3.setAttribute('id','delay_sec');
sheet.insertRule('#wrap{height:100px;width:200px;position:absolute;left:70px;top:30px;}',0);
sheet.insertRule('.divs{width:100px;height:100px;color:red;font-size:36px;text-align:center;line-height:100px;float:left;}',1);
//sheet.insertRule('#reload_times{background-color:blue;}',2);
//sheet.insertRule('#delay_sec{background-color:green;}',3);
div1.appendChild(div3);
document.body.appendChild(div1);

var sec = 0;
var timer = null;
*/
 //if (/.*ladyID=\d{7,}&manID=\d{8,}.*/i.test(location) || /.*type=newLetter$/i.test(location)) {
 /*
   var timer = setInterval(function(){
     div3.innerHTML = sec;
     sec += 1;
     if (sec >= 29) {
       sec = 0;
       location.href = location;
     } 
    },1000);
 }
*/



var script = document.createElement('script');
var code = document.createTextNode('var sheet=(function(){var style=document.createElement("style");style.appendChild(document.createTextNode(""));document.head.appendChild(style);return style.sheet})();var div1=document.createElement("div");var div3=document.createElement("div");div1.setAttribute("id","wrap");div3.setAttribute("class","divs");div3.setAttribute("id","delay_sec");sheet.insertRule("#wrap{height:100px;width:200px;position:absolute;left:70px;top:30px;}",0);sheet.insertRule(".divs{width:100px;height:100px;color:red;font-size:36px;text-align:center;line-height:100px;float:left;}",1);div1.appendChild(div3);document.body.appendChild(div1);var sec=0;var timer=null;if(/.*ladyID=\d{7,}&manID=\d{8,}.*/i.test(location)||/.*type=newLetter$/i.test(location)){var timer=setInterval(function(){div3.innerHTML=sec;sec+=1;if(sec>=29){sec=0;location.href=location}},1000)};');
script.appendChild(code);
document.head.appendChild(script);


var account = {
  login: {
    login: 72041,
    pwd: 19900805
  },
  ladys: {
    xiaojun: {
      lady_account: 1187357,
      letters: {
        letter0: 'I was looking at photography online the other day. There was one picture that caught my attention especially. It was a picture of a birds nest, and three or four eggs in the nest. However, right in the center of the nest, was a small empty bird cage. I believe that it symbolized that from the moment of conception, we are already destined to end up a certain way. This made me sad, in the fact that I don\'t want to already know how the rest of my life is going to pan out. I want to go out and live, and make last minute decisions, and take risks. I don\'t want to safely walk down some path to somewhere where I was already predetermined to go. I want to stray off this path and make my own road, and have my own adventures and end up somewhere beautiful that no one has ever been to before. I don\'t want to end up like the poor old bird who was destined to land in a cage.\n\nIt showed me that if we follow the crowd and go where everyone else is going, we\'re going to end up in a cage, like everyone else in the world.\n\n',
        letter1: 'I hope you are well. I am not.\n\nIf I could escape to another world, where the urgency and the wailing red lights called \"responsibilities\" were just a bad dream... I would find a bed in a dark room and nest in the pillows and blankets until my heart could love itself again.\n\nI would violently vomit up the self-loathing that\'s been poisoning my system for decades into a great big garbage can and feel utter relief.\n\nI would wear my warmest pajamas and my fuzzy sock and sleep and sleep and sleep, in the comfort of knowing everything is going to be okay, assured that I have some fundamental worth.\n\nBut my life rages on, unexpectedly, frantically. My own mind threatens me for every hesitation, everything \"mistake.\" It knows all my weak spots. There\'s no place to hide. It savagely tears me apart.\n\nI don\'t want to play this sick game any longer. I don\'t want to live in constant panic.\n\nHow do I escape?\n\nAgain, I hope you are well. May you always live in an abundance of peace.\n\n',
        letter2: 'We haven\'t met yet but one day we will and everything will fall into place. One day, our two lost souls that have always been meant for each other will reunite and we will be one.\n\nI image looking into your eyes, losing myself in the feeling of having you in my life. You might not believe me now but I know that magic is possible. Believe me, we will be magical!\n\nThere are days when I miss you badly and my whole body aces for your love.\n\nYet you give me strength. I am secure in knowing that one day, we will be very happy together. Believe me, we will be crazy about each other!\n\nOne day, I will love you with all my heart.\n\n',
        letter3: 'Do you believe we are all made of the same things? Do you believe every human experience is new, or has someone done exactly what you are doing/have done at some point in time? Are you a carbon copy of your family member, or are you unique, a new face and being to the cosmos? Are you a creature of habit, or do your days consist of spontaneous activity? what do you dream of? What are your goals? What do you fear? Who do you miss?\n\nHow is it that we all share a common creation, born of a mother, raised in the same air, seeing the same stars, singing under the same sun, dancing under the same moon, but we know nothing of the person down the street? We both live on the same planet, but we are two totally different beings, why is that? To you, is individuality important, or do you follow the flow?\n\nI am a weirdly unique and wonderful person. No being vain, but I am who I am. I believe in destiny, but it is what we make it. make yours your own.\n\nYour\'s truly,\n\n',
      letter4:'How do I start explaining these things? I could write you hundreds of letters but you wouldn\'t understand the ache in my chest. You wouldn\'t understand the way I say goodnight to you while I\'m lying in the dark and you aren\'t there next to me. Or the way that I wake up surrounded by pillows, dreaming they are you. The dread I feel when I\'ve woken but can\'t open my eyes, and the feeling fades into dark behind my eyelids. It would be so easy to be selfish, but I\'d never forgive myself. I want so much for you, for us.\n\nI drink coffee to fill my stomach and paint my nails to fill my ego. I do my hair and wonder if you\'d like it. I am given a compliment and wish it was from you.\n\nYou can\'t understand how you can be constantly present while so far away.\n\n',
      letter5:'I\'m sorry I have been self-centered lately. I\'ve been falling in lust, not love. I\'ve been having these bad feelings and dealing with them with bad actions. Don\'t you know you\'re the only thing I need? Don\'t you know all I want is you beside me? Everything in this world is so messed up but you and I, we could make sense of it all. We could have everything. In fact, we do have every thing, we just can\'t see it. We make drama out of everything but if we just put everything else aside, we would be infinite. And maybe some day you will return. And maybe some day I\'ll get over this hurt. And maybe you\'ll just hold me and we will sit on our porch together and watch the world go by. And you\'ll smile.\n\n',
      letter6:'I just want to be back in that morning where we sat on your bed at you laid on your side and your eyes were wide and you were rapid firing questions at me about my life back home and my family and me and my past. Like you really wanted to know. Like if you didn\'t know for any more length of time it would drive you crazy. Each question came before the last answer was finished.\n\nI want to be back where I\'m completely dressed and ready to leave, saying goodbye, and insisting that I\'ll just walk home and it\'s not all that far, while you insist on taking some of your coins to get a taxi back. I say, nah, I\'ll walk, I\'ll be fine. I think leaving is what I should do, but it was never what I wanted and you must have sensed that. You said \"comhere\" like you always do. \"what.\" i said. \"comeeeere!\" and you pulled me back to you, this stranger that I was already fascinated with and knew I would never forget but also thought I must leave behind. I sat on your stomach and you looked at me and you bit your lip. These little things that I noticed right from the start are the things that drive me mad for you. You pulled me in and you kissed me and it was so sweet.\n\nYou asked me if I was sure I could make it the rest of the way on my own. I knew you didn\'t go right into your friends house because I could feel you watching me just like I watched you a few nights later as you walked away and I took a mental snap shot titled \"the last time I ever saw him\". It was the most painful walk back on my feet and Lord knows I must have looked like a day-after mess but I was the happiest girl and I must have skipped all the way home despite the gravel threatening my tights and bottoms of my feet.\n\nAll I want is to be back there with you. You keep coming back to me and bringing me back there. I tell you \"life is weird\" and you tell me, \"life is wonderful\".\n\n'
      }
    },
    caiyin: {
      lady_account: 1187098,
      letters: {
        letter0: 'I hope you are having a lovely day and that this letter finds you well! I am having a wonderful day myself, especially because we are standing on the very beginning of fall! Do you love fall? I hope you do! I absolutely love it!\n\nThere\'s something magical about it, ya know? The air grows crisp and cool, the leaves change and fall, and of course I can\'t forget football. :) Do you like football? I\'m a huge fan of it!\n\nI hope you know how incredible you are! You are never alone. You are beautiful. You are valued. And you are so important.\n\n',
        letter1: 'I hope this letter finds you well... I want you to know that you are special, and hat you can do anything you set your mind to. It took me a great deal of trial and error to learn that for myself. For too long, I allowed family, significant others, and \"friends\" to pull me down with negativity.\n\nBut you know what? We only have one change to be here - one life to live. So live. Live your life the way you want. - the way that fills your heart with love, joy, and pride. Know that there is someone who believes in you, who believes in your dreams and aspirations.\n\nI wish you happiness, love, and I wish for you peace of mind. You are unique... (((Hugs))) Smile!\n\nLove,\n\n',
        letter2: 'Accepting this letter. And here I am. Writing it. To a stranger I know I will get no reply from, nor know anything about. It creates a confidential freedom between us, won\'t you agree? It is precisely for this reason, for this candid environment that I write. It is this I lack. And desperately year for. A connect. Beyond judgement.\n\nI don\'t have much to say, really. I use to. When I thought I was on the verge of some kind of pinnacle moment or idea. Not anymore. I\'m not so familiar with life anymore. I hardly ever feel a sense of urgency. We choose for ourselves the rules we live by. Knowingly or unknowingly, whether we would like to admit this or not. I just don\'t know what to choose. So I live among the rest. Making a living. doing what interests me - if it\'s anything at all. I have many, but lately more of them seem to matter. I\'ve been feeling this way about mostly everything, including our own lives. Compared to the span of endless time and space nothing we do now matters one bit. Yet it\'s a collective. So, somehow it must. Now this feels like a journal entry rather than a letter.\n\n',
        letter3: 'Today I dare you to smile. It doesn\'t matter why. Simply smile. It could be over something that\'s seemingly insignificant, like the sound of a soda can opening, or it could be over something a bit more meaningful like a loved one laughing. Whatever the reason, a smile will brighten your day... I promise. :)\n\nHave a wonderful day!\n\nSincerely,\n\n',
      letter4:'these letters get more and more difficult to write because all I want is you next to me and I\'m not sure where I\'m at because i\'ll always want it, the way your mouth squares when you say something you know is going to work me up and i just want my mouth on yours or to be sitting on your stomach with your hands around my hips and your teeth biting your lip holding back this insanity that we\'ve created. we live for making fun of the other and we all say things are perfect in the beginning don\'t we? But I need to find something anything I don\'t like about you and if the only thing is that you are too nice or you like me too much well that\'s not much of anything is it. sometimes we sit in silence and we\'re both on our own beds and I want to tell the distance between us that it can fuck off and I want to lay my head on your bare chest and smell your cologne so faint I almost missed it. You\'re every thing I wanted to turn someone else into and look at you! I don\'t even have to change a thing and how does that make me feel besides planning the next year with you when you are bashful and realize that we\'ve only known each other long enough to know that our hands fit perfectly and that we can move completely in sync while everyone watches and gets angry around us. and look at me go on rambling about you while you chat up my mom and get chummy with my friends and are the dream I had, but didn\'t place thousands of miles away. where did you come from and why am I worth this to you?\n\nyou are the car wreck i wished so foolishly for. you are the ruthless love I need to give and you are breaking my heart as fast as you restore it.\n\n',
      letter5:'It\'s because I learned to play the game. It\'s because the game became part of me, rather than me a player in it. It\'s because I learned that you can\'t get through life without hiding your cards for at least a little while.\n\nIt\'s because you are either an expert or have no clue about what the game is. It\'s because I can\'t tell if you\'re just showing me fakes, decoys. I haven\'t figured it out yet. I haven\'t figured you out yet.\n\nThat\'s why you haven\'t figured me out though, either.\n\n',
      letter6:'Everyday everyday everyday everyday. Everyday you become a little less of a stranger and a little more of a great mystery of my life. You\'ve got me, yet you say I\'m the one that only has to say the word, that the choice is all mine and you will wait around for me to make it. Since the moment I met you, I never had a choice. My only choice was a drunken decision to step off a cliff, and now that I\'ve sobered up the only way is down. I just keep falling further and further. Acceleration due to gravity is 9.8 meters per square second and there\'s no bottom in sight.\n\n'
      }
    },
    qiaohui: {
      lady_account: 1249264,
      letters: {
        letter0: 'I hope this finds you well. I am well, at the port of a new adventure. When given the opportunity it seems, I will always choose the option of life experience, or, \"furthest from the norm.\" I wonder sometimes if I will always be this wall, will the wind I follow ever settle, - and do I want it to? I like to imagine one day, delightful! I will be drawn to a place or two for a while... It will be different, and this is what I enjoy best- if you do a thing all the time though, it is no longer the unique and different thing it once was. How do you live? When you must decide: Do you stay or go? Heads or tails? Pass or plunge? There is no \"right\" answer. There might not be an answer at all. Someone once told me; If you only do what you\'ve always done you\'re going to get what you already got.\n\n',
        letter1: '\"You will see the world for all that it is, and for all that it is not, what you should do, is choose to see the world the way you wish it to be, so that way every day will be a new adventure.\" - I wrote that myself. Wake up in the morning with a smile on your face, set your sights high, make your dreams come true. Do what makes you happy and do a good deed. Knowing that you\'ve made someone else\'s day just by leaving a little note, or helping someone across the street, it only takes a little to mean a whole lot.\n\n',
        letter2: 'Today did not start out well. I was upset when I went to bed last night and my anger followed me into the morning. That little voice that helps you make decisions was telling me that I was a bad person... ugly... unlovable... stupid...\n\nI decided to stop for coffee on the way to work, and the most amazing thing happened: the woman at the window smiled at me. It was a brilliant, genuine smile. As a reflex, I smiled back... and I felt better. Not great... but better. The voice got quieter. My heart got lighter.\n\nYou never know how the tiniest of kind gestures can change someone\'s day.\n\nThis is me, sending a genuine smile to you.\n\nWith the sincerest of smiles,\n\n',
        letter3: 'This is my sixth attempt. My wastebasket is starting to become full, and I fear the trees will soon start a mutiny. Anyways, have you looked at the stars lately? I imagine if everyone looked at the stars every night, many people would live differently. They are a constant reminder that I\'m not the only one in the world. I feel as if I am part of something larger and it makes my own anger, resentment, and my petty problems so insignificant. Because I know that when I look up at the universe, billions of people see exactly the same thing I do. I guess that is one of the only constants throughout the entire world. Just that helps me to forgive, love, and put others first. I may not always succeed but I tried. My friend told me once that the only person I should try to be better than was the person I was the day before. That\'s why I love space so much. Nothing brings greater humility.\n\n',
      letter4:'You are creating something out of me that I do not recognize. You are making it so that I focus on you, even when you are not in the viewfinder. You are making it so that I do not notice all of the beautiful strangers around me. You are filling my heart in a way that I was never previously aware of. My heart has been remodeled and you are declaring yourself a suitable tenant. You are distracting me. You are so much beauty. I notice you over and over and over.\n\nGoodnight.\n\n',
      letter5:'What can I say to you now? I know that I\'m not everything, just something. But I also know that you are going to remember me forever. Your life will not be the same because after you and her are over (some day you and her will be over), you will still be talking about me. You will ask people, should I have kissed her? Should I regret not kissing her? And they will say Yes. They will say you were young and that you had no idea what was in front of you, even though you preached about him not knowing what was in front of him.\n\nThat is the thing about humans. It is so easy for them to say things. They can go on and on and on like experts about topics. Then it comes down to it. I am not discounting myself. I have told people so many things, so many beliefs but look at me! I am the same! I am selfish and go after what I want just the same as the next person. I suppose that is life: selfishness and getting what you want. It\'s a rat race, I hear. But all I really want is to make people happy. I never did anything with any intention of hurting any one and that makes the difference.\n\nSome people take the easy way out. They know that some people have no way to possibly defend themselves, they know that they wont even try. So they strike.\n\nI strike when I know that there is a fight to be had. I strike when I know I will have to have courage. I strike because of belief, not because of ease.\n\n',
      letter6:'I will leave. I may fade. But you will always remain, no matter what I do or where I go. You have no idea the damage you have done on my heart, the wreckage you have created. I\'d have it no other way. You have made me fuller and livelier and everything I\'ve always wanted to be but may have been too scared as the person I was before. Maybe I knew you for months. Maybe I knew you for a night, but your fingerprints have created a new layer of being around my soul, an aura that follows me and can be seen at just the right time of day when the light is cast just so. But even when it can\'t be seen, I know that it can be felt.\n\nAll I can hope for is that I\'ve left my own fingerprints, so that when they come searching, they will know that it was me causing the wreckage right back.\n\n'
      }
    },
    yanhong: {
      lady_account: 1268425,
      letters: {
        letter0: 'I just love that word. Beloved. It sounds so poetic. I\'ve always been fascinated by the English language. My own language is poetic in its own way, but with the English language I can play with the words in another way. Like beloved. We have our own version of that word, but it\'s not the same. Not at all.\n\nMost people don\'t take time to reflect on things. But my dear, somehow I imagine you do. I imagine that you think a lot. I know I do. And maybe I\'m just hoping for someone else to do it too.\n\nI wish you all the best.\n\n',
        letter1: 'Hello. I don\'t really know how to start this (I\'ve never done this before, you know). I\'m already wondering about you;  Will you read this and think, ah. I know the feeling. I\'ve been there. I\'ve done that. and will you say, oh my I don\'t know, I can\'t understand you, I don\'t relate? I think you\'ll understand. In my experience, we\'re all more alike than different. My problem is this: I\'m not entirely sure who I am. Wait, let me specify: I know my name, I know my gender, and my family and my favorite color. I know my race, where I live, and how long I sleep at night. But what I don\'t know is this: I don\'t know who I like and who I don\'t like, I don\'t know what I want to be, or if I\'m good enough to be it; I have only a vague idea of what I want to do, and rarely have the courage to pursue it; I don\'t know what real life is like, outside of my \"perfect\" suburban town, and I think that\'s why I don\'t know who I am; I don\'t know who I am in the context of the world. But maybe no one knows that. Or, maybe I\'m just nothing, maybe my thoughts and questions and wonders are trite, trivial, shallow, commonplace. tell me anything and everything, I\'m curious.if I\'m not as weird as I thought I was. I just want to hear your story. And your advice. But that\'s highly unlikely, so tell me whatever\'s on your mind. I\'ll listen.\n\n',
        letter2: 'This is harder than I expected. I guess I\'ll start by saying that I love to stand in the pouring rain. There\'s something so renewing about it. I am forever interested in reinventing myself. I believe that people are never done growing. Just as soon as you\'ve learned something about yourself, there is always something else to keep searching for. I used to think that love could not be real. How could someone love you if you\'re never done finding out who you are? But love is kind. It allows someone to not only love who you are now, but also who you will be in the future. Accept those around you that you love. If you don\'t, you will never be able to accept yourself, or who you will become. I\'d like to conclude by leaving an Emerson quote. \"What lies behind us and what lies before us are tiny matters compared to what lies within us.\"\n\n',
      letter3:'No one can understand the things you do. You can try all you want to explain your reasons, your situation, the events that have lead you to where you are at this moment, but they will never really understand. So just keep burning. Just keep knowing your own reasons and don\'t worry about whether or not they understand. Because they can\'t and it\'s not their fault, they just can\'t.\n\nMaybe I\'m telling this to you. Maybe I\'m telling it to myself.\n\nI wish I could tell you how much you\'ve meant to me. I wish I didn\'t even have to tell you because I could kiss you and you would just feel it and you would tell me I didn\'t have to say a word, that you know. I wish we had more time. I guess we all just wish for more time.\n\n',
      letter4:'I hope you\'ll be sad to see me go. I feel like I just got here and I just want so much more time with you.\n\nI\'ll miss you more than I could ever tell you.\n\nYou could have been the one to keep up with me. To tell me off. To keep me in my place. You could have been the one that told me when I wasn\'t funny, told me when I wasn\'t pretty, to make fun of me. You could have been the one to ask \"what is wrong with you?\" and maybe I would have thought a second before answering, instead of laughing it off and giving a wink and something about making up for lost time.\n\nBut you aren\'t, so i guess you really couldn\'t have been, could you? There\'s a reason, sometimes, when you get somewhere late.\n\n',
      letter5:'You were supposed to break my heart, not the other way around. You were supposed to drop me. You were supposed to chicken out. I was supposed to be the big dreamer that scared you away. You were supposed to remain the beautiful stranger that I spent the most romantic night with, and was tragically never able to see again. You were supposed to reject me at the last moment. You weren\'t supposed to say words like \"future\" and \"options\".\n\nYou were supposed to be more afraid of me than I was of you. You were supposed to be the unattached one. But you didn\'t know a thing about me and I\'m just this lovely little girl that walked into your life one night and never told you a thing about herself. And so I remained the girl from that night, never becoming myself, and never giving you the opportunity to really know what you were looking at.\n\nMaybe you could have been exactly what I needed. Maybe if you had met me at a different time when I had wanted different things from the strangers I meet. But the right things never come at the right time, do they?\n\n'
      }
    },
    qin: {
      lady_account: 1194524,
      letters: {
        letter0: 'Do you ever find yourself wondering what it would be like to live in a different time? I do, but it\'s not some far-off time like the Middle Ages or the Renaissance. No, I wonder what life was like for someone like me in the 1950\'s and 1960\'s. How would my life be different? would I have had all of the opportunities to challenge myself? Most certainly not. What would my house look like? Who would my friends be? Mother, who grew up in that era, sometimes jokingly says she was raised Amish when she realized all of the things she was not permitted to do because, \"What would the neighbors think?\" How would a \"Who cares what the neighbors think\" go over in 1958?\"\n\nThe thing is, I have friends who were alive then, but I feel silly and strange asking to reminisce about a time I wasn\'t even alive.\n\nDo you think folks are more able to enjoy life now, with all of our many choices, or back in the 1950\'s and 1960\'s? Was it really more simple then, or are we fooling ourselves? I am sure we are preferring to remember the best of times over the more challenging times. This has been a missile of questions, and I hope it prompts you to think about times past, and maybe even contact someone from your past. Have a lovely day.\n\nBest Regards,\n\n',
        letter1: 'It feels good writing to you.it\'s reasuring knowing I don\'t have to pretend right now. I don\'t have to get you to like me or even hold a conversation with you because to be honest I am NOT very good at either of those things. Another thing I\'m not good at is spelling, so please give me a break. :) My favorite color is yellow, I get happiness from seeing other happy; whether I provide that happiness or not, I love going to the dentist (I went today as a matter of fact), grow up scares me,and one of my favorite people in the entire world is my grandma.\n\nLove\n\n',
        letter2: 'Growing up I was told to never talk to you. Whether it was from the media, teachers, or my family. But you know what? I\'m a rebel and I\'m totally breaking the age-old rule of \"Never talk to strangers.\" Why? Because, if you never meet anyone new, you\'ll be alone forever. Every friend was once a stranger.\n\nWho knows, maybe the next stranger you meet will be the one who makes your dreams come true. Strangers can give you the answer you\'ve been looking for; spark an idea and share aspirations.\n\n',
        letter3: 'I feel so strange writing and sending this to someone unfamiliar. But I suppose if you\'re reading this, that means you sent a letter in, too. I guess we\'re in the same boat.\n\nFor the past six months I\'ve treated my heart like a sponge. I look for love in all the wrong places. I\'ve neglected to tell my family/friends how I feel on the inside. I barely sleep. I barely eat. I\'ve lost all creative drive. Simply because the one thing I ever wanted was for someone to need me. The very idea of waking up to the sounds of someone breathing on the pillow next to my mine makes my heart ache so much. It\'s borderline unbearable.\n\nI know it\'s not healthy to feel this way. Making yourself feel alive is an inside job. Never losing hope is such a tedious task, though.\n\nSaying all of this makes me feel cloddish. There are so many people out there with worse problems than my broken heart. I wish I were stronger.\n\nAnd I can\'t help but wonder what\'s happening in your life. Has your heart been broken? Do you fall asleep at night to the sound of someone\'s breathing on the pillow next to yours?\n\nMore than anything, I think we all deserve that person who shares coffee with us in the morning, We deserve weekend trips and holidays with extended families. Long drive and sleeping through cold afternoons should be a reoccuring past time.\n\nI\'m such a ridiculous dreamer. I must seem completely crazy to you. To be completely honest, I feel crazy. and all I want is commitment.\n\nThank you for taking the time to read this. Nothing is more important than knowing there are good people out there who will listen and understand. (Or at least try to.) You\'ll never know the affect you\'ll have on someone\'s life by simply being there.\n\nYou\'re a good person.\n\nEven if you don\'t feel that way sometimes.\n\nYours Truly,\n\n',
      letter4:'You tell the most beautiful lies. You tell me exactly what I want to hear. You touch me just the way I need to be touched, and no further than that. You leaned over me and the sun was shining in our eyes and you kissed me so softly, so sleepy. I turned over to face you and you say \"you alright?\" and I smile. I make horrible jokes but you laugh at them and make me feel like I\'m funny. You kissed me all over my back. You  cuddled like you meant it. Everything was like you meant it.\n\nI\'m the most appealing as a stranger, aren\'t I?\n\n',
      letter5:'i fall in love with words that describe the desire to collect everyone. to hear everyone\'s story and put your arms around them and just collect people and their stories and their dreams and their wishes as if they had just won it all and they pull them in as if they are poker chips, arms wide and wrapping themselves, not looking at the worth of any individual chip, just taking, accepting, loving. they make me ache. they give me hope. people that say, \"you. i want to know you.\" when that \\\'you\' could be any body, and that\'s why you say it. my heart is a machine that breaks and repairs itself routinely.\n\n',
      letter6:'It\'s as if you could read my mind, my words that I\'d just written. It was as if we were looking for each other and then when we noticed the other in our peripheral vision, we sighed a bit of relief, \"ah, there you are. I\'ve been searching so long\".  You knew I was looking for more than eye contact. You knew I craved conversation. You molded yourself to fit this. You said all the things I wanted to hear. You saw in my eyes that I was losing my confidence, and you found it for me and reinstalled it.\n\nI\'m not easy if it\'s only kissing. I\'m not easy if I\'m just broken hearted. I\'m not easy if this is just filling the time before I\'m ready to love again.'
      }
    }
  }
};



(function (win, doc) {
  contentLoaded = function (fn) {
    var done = false,
    top = true,
    doc = win.document,
    root = doc.documentElement,
    add = doc.addEventListener ? 'addEventListener' : 'attachEvent',
    rem = doc.addEventListener ? 'removeEventListener' : 'detachEvent',
    pre = doc.addEventListener ? '' : 'on',
    init = function (e) {
      if (e.type == 'readystatechange' && doc.readyState != 'complete') return;
      (e.type == 'load' ? win : doc) [rem](pre + e.type, init, false);
      if (!done && (done = true)) fn.call(win, e.type || e);
    },
    poll = function () {
      try {
        root.doScroll('left');
      } catch (e) {
        setTimeout(poll, 50);
        return;
      }
      init('poll');
    };
    if (doc.readyState == 'complete') fn.call(win, 'lazy');
     else {
      if (doc.createEventObject && root.doScroll) {
        try {
          top = !win.frameElement;
        } catch (e) {
        }
        if (top) poll();
      }
      doc[add](pre + 'DOMContentLoaded', init, false);
      doc[add](pre + 'readystatechange', init, false);
      win[add](pre + 'load', init, false);
    }
  };
}) (window, document);

function stripHTML(lady_name_tr) {
  var reTag = /<(?:.|\s)*?>/g;
  return lady_name_tr.replace(reTag, '');
}
function setCookie(c_name, value, expiredays)
{
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = c_name + '=' + value + ((expiredays  === null) ? '' : '; path=/;expires=' + exdate.toGMTString());
}
function getCookie(c_name)
{
  if (document.cookie.length > 0)
  {
    c_start = document.cookie.indexOf(c_name + '=');
    if (c_start != - 1)
    {
      c_start = c_start + c_name.length + 1;
      c_end = document.cookie.indexOf(';', c_start);
      if (c_end == - 1) c_end = document.cookie.length;
      return unescape(document.cookie.substring(c_start, c_end));
    }
  }
  return '';
}
// 对Date的扩展，将 Date 转化为指定格式的String 
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
// 例子： 
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 

Date.prototype.Format = function Format(fmt)
{
  //author: meizz 
  var o = {
    'M+': this.getMonth() + 1, //月份 
    'd+': this.getDate(), //日 
    'h+': this.getHours(), //小时 
    'm+': this.getMinutes(), //分 
    's+': this.getSeconds(), //秒 
    'q+': Math.floor((this.getMonth() + 3) / 3), //季度 
    'S': this.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt))
  fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
  for (var k in o)
  if (new RegExp('(' + k + ')').test(fmt))
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k])  : (('00' + o[k]).substr(('' + o[k]).length)));
  return fmt;
};
function reachMaxSize(str) {
  var bytesCount = 0;
  for (var i = 0; i < str.length; i++)
  {
    var c = str.charAt(i);
    if (/^[\u0000-\u00ff]$/.test(c)) //匹配双字节
    {
      bytesCount += 1;
    } 
    else
    {
      bytesCount += 2;
    }
  }
  return bytesCount < 1600; //max size
}
function getDaysInMonth(year, month) {
  var day = new Date(year, month, 0);
  return day.getDate();
}

function Send() {
  //PublicProperty.call(this);
  var self = this;
  var accountArray = [
  ];
  for (var ladyName in account.ladys) {
    accountArray.push(ladyName);
  }
  self.accountArray = accountArray;
  self.cookieInitialize();
    
          if(/.*agency.orientbrides.net\/index\/Login.aspx.*/i.test(location)){

    try {
    var login_input = document.getElementById('ctl00_ContentPlaceHolder1_txtBoxLogin');
    var pwd_input = document.getElementById('ctl00_ContentPlaceHolder1_txtBoxPWD');
    var enter = document.getElementById('ctl00_ContentPlaceHolder1_btnLogin');
    login_input.value = account.login.login;
    pwd_input.value = account.login.pwd;
    enter.click();
} catch (e) {
    document.title = 'login: ' + e;
    location.href = location;
}
}
    
  //if (/.*type=newLetter$/i.test(location)) {
  if (/.*ladyID=\d{7,}&manID=(\d{8,}|undefined).*/i.test(location)) {
    try {
      var lady_name_element = document.getElementById('ctl00_ctl00_ctl00_ContentPlaceHolder1_nestedContentPlaceHolder_ContentIndex_cntrlViewLadyCorrespondence_ctrlGirlInfo_pnlGirlInfo').getElementsByTagName('table') [0].firstElementChild.children[0].children[1].innerHTML;
      var lady_name = stripHTML(lady_name_element).trim().substring(7).split(' ')[0].trim();
      if (/\(/.test(lady_name)) {
        var bracket_index = lady_name.indexOf('(');
        lady_name = lady_name.substring(0, bracket_index);
      }
      self.lady_name = lady_name.toLowerCase();
      self.record_log();
      var id_td = document.getElementsByTagName('table') [7].getElementsByTagName('table') [0].getElementsByTagName('table') [0].getElementsByTagName('table') [3].lastElementChild.firstElementChild.firstElementChild.nextElementSibling;
      var man_name = id_td.parentNode.nextElementSibling.lastElementChild.innerHTML.trim();
      if (/\s+/.test(man_name)) {
        var blank = man_name.indexOf(' ');
        man_name = man_name.substring(0, blank);
      }
      self.man_name = man_name;
      var lady_current_letter = self.setLetter();
      if (!lady_current_letter) return false;
      var textarea_element = document.getElementById('ctl00_ctl00_ctl00_ContentPlaceHolder1_nestedContentPlaceHolder_ContentIndex_cntrlViewLadyCorrespondence_txtBoxLetterText');
      var tip_element = document.getElementsByTagName('table') [0].firstElementChild.firstElementChild.firstElementChild;
      tip_element.innerHTML = 'IdIndex:\n\n' + self.id_letter_obj[self.lady_name]['id_index'] + '\n\nid_quantity:\n\n' + self.id_letter_obj['id_quantity']['id_quantity'] + '\n\nletter_index:\n\n' + self.id_letter_obj[self.lady_name]['letter_index'] + '\n\nletter_quantity:\n\n' + self.id_letter_obj[self.lady_name]['letter_quantity'];
      var sendBtn = document.getElementById('btnReply2');
      var checkBox = document.querySelector('input[type=checkbox]');
      textarea_element.value = lady_current_letter
      self.increaseId();
      checkBox.click();
      sendBtn.click();
      //location = 'http://agency.orientbrides.net/index/ViewLadyCorrespondence.aspx?ladyID=' + account['ladys'][self.lady_name]['lady_account'] + '&manID=' + self.id_letter_obj[self.man_name]['current_id'] + '&type=newLetter';
    } catch (e) {
      document.title = 'send: ' + e;
      try {
        if (/.*type=newLetter$/i.test(location)) {
          if (self.lady_name) {
            self.increaseId();
            self.log_obj[self.lady_name + '_log']['id_block_profile_or_never_sent'] += 1;
            setCookie('log', JSON.stringify(self.log_obj), 3560);
            location.href = 'http://agency.orientbrides.net/index/ViewLadyCorrespondence.aspx?ladyID=' + account['ladys'][self.lady_name]['lady_account'] + '&manID=' + self.id_letter_obj[self.lady_name]['current_id'] + '&type=newLetter';
          }
        }

        var currentId = self.id_letter_obj[self.lady_name]['current_id'] || 11111111;
        console.log(self.id_letter_obj[self.lady_name]['current_id']);
        var LadyAccount = location.substr(-38,7);
        location.href = 'http://agency.orientbrides.net/index/ViewLadyCorrespondence.aspx?ladyID=' + LadyAccount + '&manID=' + currentId + '&type=newLetter';
      } catch (msg) {
        document.title = 'increaseId:' + msg;
        location.reload();
      }
    }
  }

  if (/.*agency.orientbrides.net\/default.aspx.*/.test(location)) {
    try {
      for (var i = 0; i < self.accountArray.length; i++) {
        window.open('http://agency.orientbrides.net/index/ViewLadyCorrespondence.aspx?ladyID=' + account['ladys'][self.accountArray[i]]['lady_account'] + '&manID=' + self.id_letter_obj[self.accountArray[i]]['current_id'] + '&type=newLetter');
      }
    } catch (e) {
      document.title = 'default: ' + e;
      //location = location;
    }
  }
}
Send.prototype = {
  cookieInitialize: function () {
    var id_letter_cookie = getCookie('id_letter_cookie');
    var log_cookie = getCookie('log');
    this.id_letter_cookie = id_letter_cookie;
    this.log_cookie = log_cookie;
    var date = new Date();
    var today = date.getDate();
    if (!reachMaxSize(this.log_cookie)) {
      setCookie('log', '', - 1);
    }
    log_cookie = getCookie('log');
    if (log_cookie === '') {
      var time = (new Date()).Format('yyyy-MM-dd hh:mm:ss');
      this.log_cookie = '{';
      for (var i = 0; i < this.accountArray.length; i++) {
        this.log_cookie += this.accountArray[i] + '_log:{today_sent_quantity: 0,log: \'\',id_block_profile_or_never_sent: 0},';
      }
      this.log_cookie += 'today: ' + today + '}';
      setCookie('log', this.log_cookie, '3560');
    }
    if (this.id_letter_cookie === '') {
      this.id_letter_cookie = '{';
      for (var i = 0; i < this.accountArray.length; i++) {
        this.id_letter_cookie += this.accountArray[i] + ':{id_index: 0,letter_index: 0,letter_quantity: 0,current_id: 11111111,lady_account: ' + account['ladys'][this.accountArray[i]]['lady_account'] + '},';
      }
      this.id_letter_cookie += 'id_quantity:{id_quantity: 0}}';
      setCookie('id_letter_cookie', this.id_letter_cookie, 3560);
    }
    var id_letter_obj = eval('(' + this.id_letter_cookie + ')');
    var log_obj = eval('(' + this.log_cookie + ')');
    this.id_letter_obj = id_letter_obj;
    this.log_obj = log_obj;
  },
  record_log: function () {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var today = date.getDate();
    var log_today = this.log_obj['today'];
    if (today > log_today) {
      for (var lady_name in account['ladys']) {
        var log_obj_log = this.log_obj[lady_name + '_log']['log'];
        var time = (new Date()).Format('yyyy-MM-dd hh:mm:ss');
        var today_sent_quantity = this.log_obj[lady_name + '_log']['today_sent_quantity'];
        var id_index = this.id_letter_obj[lady_name]['id_index'];
        var letter_index = this.id_letter_obj[lady_name]['letter_index'];
        log_obj_log += 'time: ' + time + '\ntoday_sent_quantity: ' + today_sent_quantity + '\nid_index: ' + id_index + '\nletter_index: ' + letter_index + '\n\n';
        this.log_obj[lady_name + '_log']['log'] = log_obj_log;
        this.log_obj[lady_name + '_log']['today_sent_quantity'] = 0;
      }
      this.log_obj['today'] = today;
      setCookie('log', JSON.stringify(this.log_obj), 3560);
    }
  },
  setLetter: function () {
    var letter_quantity = [
    ];
    var flag = false;
    for (var i = 0; i < this.accountArray.length; i++) {
      var temp = [
      ];
      if (this.lady_name == this.accountArray[i]) flag = true;
      for (var letter_key in account['ladys'][this.accountArray[i]]['letters']) {
        temp.push(letter_key);
      }
      this.id_letter_obj[this.accountArray[i]]['letter_quantity'] = temp.length;
    }
    if (!flag) {
      alert('未设置 ' + this.lady_name + ' 对象！');
      return false;
    }
    setCookie('id_letter_cookie', JSON.stringify(this.id_letter_obj), 3560)
    //设置当前账号的信件
    var lady_letters = [
    ];
    for (var letter in account['ladys'][this.lady_name]['letters']) {
      lady_letters.push(account['ladys'][this.lady_name]['letters'][letter]);
    }
    var current_account_letter_index = parseInt(this.id_letter_obj[this.lady_name]['letter_index']);
    var current_letter = lady_letters[current_account_letter_index];
    
    if (current_letter != undefined) {
      current_letter = 'Dear ' + this.man_name + '\n\n' + current_letter  + this.lady_name;
      return current_letter;
    } else {
      alert('信件耗尽！');
    }
    
    
  },
  increaseId: function () {alert(this.lady_name);
    var today_sent_quantity = this.log_obj[this.lady_name + '_log']['today_sent_quantity'];
    var id_index = this.id_letter_obj[this.lady_name]['id_index'];
    var id_quantity = id_source['lady_name'].length;
    var letter_index = this.id_letter_obj[this.lady_name]['letter_index'];
    var letter_quantity = this.id_letter_obj[this.lady_name]['letter_quantity'];
    this.id_letter_obj['id_quantity']['id_quantity'] = id_quantity;
    if (id_index < id_quantity) {
      id_index += 1;
      today_sent_quantity += 1;
      this.id_letter_obj[this.lady_name]['id_index'] = id_index;
      this.id_letter_obj[this.lady_name]['current_id'] = id_source['lady_name'][id_index];
    } else {
      id_index = 0;
      this.id_letter_obj[this.lady_name]['id_index'] = id_index;
      if (letter_index < letter_quantity) {
        letter_index += 1;
        this.id_letter_obj[this.lady_name]['letter_index'] = letter_index;
      } else {
        letter_index = 0;
        this.id_letter_obj[this.lady_name]['letter_index'] = letter_index;
      }
    }
    this.log_obj[this.lady_name + '_log']['today_sent_quantity'] = today_sent_quantity;
    setCookie('log', JSON.stringify(this.log_obj), 3560);
    setCookie('id_letter_cookie', JSON.stringify(this.id_letter_obj), 3560);
  }
};



contentLoaded(function(){
    new Send();
});
