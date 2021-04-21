const { trimProperties } = require('./index')
const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  it('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  it('[2] returns a copy, leaving the original object intact', () => {

    const input = { foo: ' foo ', bar: '  bar ', baz: ' baz '};
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz'};
    const actual = utils.trimPropertiesMutation(input);
   expect(trimProperties).toBeDefined() 

    
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  it('[3] returns an object with the properties trimmed', () => { 

  expect(trimProperties).toBeDefined()
})

  it('[4] the object returned is the exact same one we passed in', () => {
    
    expect(trimProperties).toBeDefined()
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  it('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [2, 4, 5, 8, 10];
    const expected = 10;
    const actual = utils.findLargestInteger(input)

    expect(actual).toEqual(expected)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh counter
  })
  it('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    const result = counter.countDown();

    expect(result).toEqual(3)
  })
  it('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown();
    const result = counter.countDown();
    expect(result).toEqual(2)
  })
  it('[8] the count eventually reaches zero but does not go below zero', () => {
    let result;
    for(let i = 0; i < 5; i++){
      result = counter.countDown()
    }
    expect(result).toEqual(0)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })

  it('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toEqual('summer')
  })

  it('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next();
    expect(seasons.next()).toEqual('fall');
  })

  it('[11] the THIRD call of seasons.next returns "winter"', () => {
    for(let i = 0; i < 2; i++) {
      seasons.next();
    }
    expect(seasons.next()).toEqual('winter')
  })

  it('[12] the FOURTH call of seasons.next returns "spring"', () => {
    for(let i = 0; i < 3; i++) {
      seasons.next();
    }
    expect(seasons.next()).toEqual('spring');
  })

  it('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    for(let i = 0; i < 4; i++) {
      seasons.next();
    }
    expect(seasons.next()).toEqual('summer');
  })

  it('[14] the 40th call of seasons.next returns "spring"', () => {
    for(let i = 0; i < 39; i++) {
      seasons.next();
    }
    expect(seasons.next()).toEqual('spring');
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  it('[15] driving the car returns the updated odometer', () => {
    const distanceDriven = focus.drive(100)
    const expectedDistance = 100;

    expect(distanceDriven).toEqual(expectedDistance);
    expect(focus.odometer).toEqual(100);
  })
  it('[16] driving the car uses gas', () => {
    focus.drive(100);

    expect(focus.tank).toBe(20 - 100 / 30);
  })
  it('[17] refueling allows to keep driving', () => {
    focus.drive(600);
    expect(focus.tank).toEqual(0);
    focus.refuel(20);
    expect(focus.tank).toEqual(20);

    expect(focus.drive(100)).not.toEqual('Can\'t drive, need gas!');
  })

  it('[18] adding fuel to a full tank has no effect', () => {
    expect(focus.refuel(100)).toEqual(20);
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  it('[19] resolves true if passed an even number', async () => {
    const result = await utils.isEvenNumberAsync(2)
    expect(result).toEqual(true)
  })
  it('[20] resolves false if passed an odd number', async () => {
    const result = await utils.isEvenNumberAsync(3)
    expect(result).toEqual(false)
  })
  it('[21] rejects an error with the message "number must be a number" if passed a non-number type', async () => {
    utils.isEvenNumberAsync('2')
    .then(result => {
      console.log(result)
    })
    .catch(err => {
      expect(err).toEqual('number must be a number')
    })
  })
  it('[22] rejects an error with the message "number must be a number" if passed NaN', async () => {
    utils.isEvenNumberAsync(NaN)
    .then(result => {
      console.log(result)
    })
    .catch(err => {
      expect(err).toEqual('number must be a number')
    })
  })
})
