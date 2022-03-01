const CONTRACT_ADDRESS = '0x858E1b76a8F1eeBc6e7070Cf7ddAF9ba8c8A79B9';

const transformCharacterData = (characterData) => {
    return {
      name: characterData.name,
      imageURI: characterData.imageURI,
      hp: characterData.hp.toNumber(),
      maxHp: characterData.maxHp.toNumber(),
      attackDamage: characterData.attackDamage.toNumber(),
    };
  };

  export { CONTRACT_ADDRESS, transformCharacterData };