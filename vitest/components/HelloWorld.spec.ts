import { render } from '@testing-library/vue';
import { describe, it } from 'vitest';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld', () => {
  it('renders properly', () => {
    const message = 'Hello World!';
    const { getByText } = render(HelloWorld, { props: { message } });
    getByText(message);
  });
});
