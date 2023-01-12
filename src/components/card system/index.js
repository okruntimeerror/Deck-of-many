const data = [
    {
        Name: 'Balance', 
        Effect: 'Your mind suffers a wrenching alteration, causing your Alignment to change. Lawful becomes chaotic, good becomes evil, and vice versa. If you are true neutral or unaligned, this card has no Effect on you.',
        Image: '.png',
        Conditional: 'N/A', 
    },

    {
        Name: 'Comet', 
        Effect: 'If you single-handedly defeat the next Hostile monster or group of Monsters you encounter, you gain Experience Points enough to gain one level. Otherwise, this card has no Effect.',
        Image: '.png',
        Conditional: 'N/A', 
    },

    {
        Name: 'Donjon', 
        Effect: 'You disappear and become entombed in a state of suspended animation in an extradimensional Sphere. Everything you were wearing and carrying stays behind in the space you occupied when you disappeared. You remain Imprisoned until you are found and removed from the Sphere. You cant be located by any Divination magic, but a wish spell can reveal the Location of your prison. You draw no more cards.',
        Image: '.png',
        Conditional: 'You draw no more cards', 
    },

    {
        Name: 'Euryale', 
        Effect: 'The cards medusa-like visage Curses you. You take a -2 penalty on Saving Throws while Cursed in this way. Only a god or the magic of The Fates card can end this curse.',
        Image: '.png',
        Conditional: 'N/A', 
    },

    {
        Name: 'The Fates', 
        Effect: 'Realitys fabric unravels and spins anew, allowing you to avoid or erase one event as if it never happened. You can use the cards magic as soon as you draw the card or at any other time before you die.',
        Image: '.png',
        Conditional: 'N/A',
    },

    {
        Name: 'Flames', 
        Effect: 'A powerful devil becomes your enemy. The devil seeks your ruin and plagues your life, savoring your suffering before attempting to slay you. This enmity lasts until either you or the devil dies.',
        Image: '.png',
        Conditional: 'N/A',
    },

    {
        Name: 'Fool', 
        Effect: 'You lose 10,000 XP, discard this card, and draw from the deck again, counting both draws as one of your declared draws. If losing that much XP would cause you to lose a level, you instead lose an amount that leaves you with just enough XP to keep your level.',
        Image: '.png',
        Conditional: 'Draw one more card',
    },

    {
        Name: 'Gem', 
        Effect: 'Twenty-five pieces of jewelry worth 2,000 gp each or fifty gems worth 1,000 gp each appear at your feet.',
        Image: '.png',
        Conditional: 'N/A',
    },

    {
        Name: 'Idiot', 
        Effect: 'Permanently reduce your Intelligence by 1d4 + 1 (to a minimum score of 1). You can draw one additional card beyond your declared draws.',
        Image: '.png',
        Conditional: 'choice to draw one more card',
    },

    {
        Name: 'Jester', 
        Effect: 'You gain 10,000 XP, or you can draw two additional cards beyond your declared draws.',
        Image: '.png',
        Conditional: 'Yes a choice to draw 2 more',
    },

    {
        Name: 'Key', 
        Effect: 'A rare or rarer Magic Weapon with which you are proficient appears in your hands. The DM chooses the weapon.',
        Image: '.png',
        Conditional: 'N/A',
    },

    {
        Name: 'Knight', 
        Effect: 'You gain the service of a 4th-level Fighter who appears in a space you choose within 30 feet of you. The Fighter is of the same race as you and serves you loyally until death, believing the fates have drawn him or her to you. You control this character',
        Image: '.png',
        Conditional: 'N/A',
    },

    {
        Name: 'Moon', 
        Effect: 'You are granted the ability to cast the wish spell 1d3 times.',
        Image: '.png',
        Conditional: 'N/A',
    },

    {
        Name: 'Rogue', 
        Effect: 'A nonplayer character of the DMs choice becomes Hostile toward you. The identity of your new enemy isnt known until the NPC or someone else reveals it. Nothing less than a wish spell or Divine Intervention can end the NPCs hostility toward you.',
        Image: '.png',
        Conditional: 'N/A',
    },

    {
        Name: 'Ruin', 
        Effect: 'All forms of Wealth that you carry or own, other than magic items, are lost to you. Portable property vanishes. Businesses, buildings, and land you own are lost in a way that alters reality the least. Any documentation that proves you should own something lost to this card also disappears.',
        Image: '.png',
        Conditional: 'N/A',
    },

    {
        Name: 'Skull', 
        Effect: 'You summon an avatar of death-a ghostly Humanoid Skeleton clad in a tattered black robe and carrying a spectral scythe. It appears in a space of the DMs choice within 10 feet of you and Attacks you, warning all others that you must win the battle alone. The avatar fights until you die or it drops to 0 Hit Points, whereupon it disappears. If anyone tries to help you, the helper summons its own Avatar of Death. A creature slain by an Avatar of Death cant be restored to life.',
        Image: '.png',
        Conditional: 'N/A',
    },

    {
        Name: 'Star', 
        Effect: 'Increase one of your Ability Scores by 2. The score can exceed 20 but cant exceed 24.',
        Image: '.png',
        Conditional: 'N/A',
    },

    {
        Name: 'Sun', 
        Effect: 'eYou gain 50,000 XP, and a wondrous item (which the DM determines randomly) appears in your hands.',
        Image: '.png',
        Conditional: 'N/A',
    },

    {
        Name: 'Talons', 
        Effect: 'Every magic item you wear or carry disintegrates. Artifacts in your possession arent destroyed but do Vanish.',
        Image: '.png',
        Conditional: 'N/A',
    },

    {
        Name: 'Throne', 
        Effect: 'You gain Proficiency in the Persuasion skill, and you double your Proficiency bonus on checks made with that skill. In addition, you gain rightful ownership of a small keep somewhere in the world. However, the keep is currently in the hands of Monsters, which you must clear out before you can claim the keep as. yours.',
        Image: '.png',
        Conditional: 'N/A',
    },

    {
        Name: 'Vizier', 
        Effect: 'At any time you choose within one year of drawing this card, you can ask a question in meditation and mentally receive a truthful answer to that question. Besides information, the answer helps you solve a puzzling problem or other dilemma. In other words, the knowledge comes with Wisdom on how to apply it',
        Image: '.png',
        Conditional: 'N/A',
    },

    {
        Name: 'The Void', 
        Effect: 'This black card Spells Disaster. Your soul is drawn from your body and contained in an object in a place of the DMs choice. One or more powerful beings guard the place. While your soul is trapped in this way, your body is Incapacitated. A wish spell cant restore your soul, but the spell reveals the Location of the object that holds it. You draw no more cards.',
        Image: '.png',
        Conditional: 'You draw no more cards',
    },

]

