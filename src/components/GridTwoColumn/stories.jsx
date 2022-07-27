import { GridTwoColumn } from '.';

export default {
  title: 'GridTwoColumn',
  component: GridTwoColumn,
  args: {
    title: 'GridTwoColumn',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iste ab reprehenderit, ad, quas fugit eligendi minus hic odit, consequatur iure labore sit blanditiis alias iusto sed optio vero neque.`,
    srcImg: 'assets/images/javascript.svg',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumn {...args} />
    </div>
  );
};
