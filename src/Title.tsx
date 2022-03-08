type TitleType = {
  title: string;
};

const Title = (props: TitleType) => {
  const { title } = props;
  return <h1>{title}</h1>;
};

export default Title;
