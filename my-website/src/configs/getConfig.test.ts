import getConfig from './getConfig';

describe('Get form config', () => {
  describe('get form config', () => {

    it('get default form config', () => {
      const config = getConfig('orderForm.property') as any;
      expect(config.streetAddress).not.toEqual(undefined);
      expect(config.streetAddress.isRequired).toEqual(true);
    });

    it('get updated form config', () => {
      const update = {
        orderForm: {
          property: {
            streetAddress: {
              isRequired: false
            }
          }
        }
      };
      const config = getConfig('orderForm.property', update) as any;
      expect(config.streetAddress).not.toEqual(undefined);
      expect(config.streetAddress.isRequired).toEqual(false);
    });

  });
});
