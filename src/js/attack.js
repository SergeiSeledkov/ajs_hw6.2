export default function destructSpecial(character) {
  const arrSpecial = [];

  character.special.forEach((item) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = item;

    arrSpecial.push({
      id, name, icon, description,
    });
  });

  return arrSpecial;
}
