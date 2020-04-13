import { getRevertedNumber } from '../utils/digits';

export const revertDigit = (req, res, next) => {
  const { number } = req.body;

  res.json(getRevertedNumber(number));
};
