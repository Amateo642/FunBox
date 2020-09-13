function createBox(card) {
    const boxWrapper = document.createElement('div');
    boxWrapper.classList.add('catbox-wrapper');
    boxWrapper.insertAdjacentHTML('afterbegin', `
        <p class="underbox underbox-default">${card.underbox}</p>
        <p class="underbox underbox-disabled">${card.underboxDisabled}</p>
        <p class="underbox underbox-selected">${card.underboxSelected}</p>
    `);    

    const boxOuter = document.createElement('div');
    boxOuter.classList.add('catbox-outer');
    boxWrapper.appendChild(boxOuter);

    if (!card.exists) {
        boxWrapper.classList.add('empty');
    } else {
        boxOuter.addEventListener('click', () => {
            boxWrapper.classList.toggle('selected');
            boxWrapper.classList.add('mouseover');
            boxOuter.addEventListener('mouseleave', function mouseLeaveHandler() {
                boxWrapper.classList.remove('mouseover');
                boxOuter.removeEventListener('mouseleave', mouseLeaveHandler);
            });
        });
    }
    
    const box = document.createElement('div');
    box.classList.add('catbox');
    box.insertAdjacentHTML('afterbegin', `
        <div class="catbox-description">
            <p class="suptitle">${card.suptitle}</p>
            <p class="suptitle-selected-hover">${card.suptitleSelectedHover}</p>
            <h2 class="title">${card.title}</h2>
            <h3 class="subtitle">${card.subtitle}</h3>
            <p class="portion">${card.gift}</p>
        </div>
        <div class="circle">
            <p class ="weight">${card.weight}</p>
            <p class ="kilo">кг</p> 
        </div>
    `);
    boxOuter.appendChild(box);

    return boxWrapper;
}

const cards = [
    {
        title: 'Нямушка',
        subtitle: 'с фуа-гра',
        suptitle: 'Сказочное заморское яство',
        suptitleSelectedHover: 'Котэ не одобряет?',
        gift: '10 порций мышь в подарок',
        weight: '0,5',
        underbox: 'Чего сидишь? Порадуй котэ, <span>купи.</span>',
        underboxDisabled: 'Печалька, с фуа-гра закончился.',
        underboxSelected: 'Печень утки разварная с артишоками.',
        exists: true
    },
    {
        title: 'Нямушка',
        subtitle: 'с рыбой',
        suptitle: 'Сказочное заморское яство',
        suptitleSelectedHover: 'Котэ не одобряет?',
        gift: '40 порций 2 мыши в подарок',
        weight: '2',
        underbox: 'Чего сидишь? Порадуй котэ, <span>купи.</span>',
        underboxDisabled: 'Печалька, с рыбой закончился.',
        underboxSelected: 'Головы щучьи с чесноком да свежайшая семгушка.',
        exists: true
    },
    {
        title: 'Нямушка',
        subtitle: 'с курой',
        suptitle: 'Сказочное заморское яство',
        suptitleSelectedHover: 'Котэ не одобряет?',
        gift: '100 порций 5 мышей в подарок',
        weight: '5',
        underbox: 'Чего сидишь? Порадуй котэ, <span>купи.</span>',
        underboxDisabled: 'Печалька, с курой закончился.',
        underboxSelected: 'Филе из цыплят с трюфелями в бульоне.',
        exists: false
    }
];

function render(cards) {
    const boxContainer = document.createElement('div');
    boxContainer.classList.add('catboxes');
    cards.forEach((card) => {
        const box = createBox(card);
        boxContainer.appendChild(box);
    })
    document.querySelector('.container').appendChild(boxContainer);
}

render(cards);
