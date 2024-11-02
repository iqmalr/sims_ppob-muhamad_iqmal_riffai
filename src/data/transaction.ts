export type Transaction = {
  id: number;
  title: string;
  amount: number;
  createdAt: string;
};

export const transaction: Transaction[] = [
  {
    id: 1,
    title: "Top Up",
    amount: 100000,
    createdAt: "2021-01-01",
  },
  {
    id: 2,
    title: "Listrik Prabayar",
    amount: 200000,
    createdAt: "2021-02-02",
  },
  {
    id: 3,
    title: "Pulsa",
    amount: 300000,
    createdAt: "2021-03-03",
  },
  {
    id: 4,
    title: "Top Up",
    amount: -400000,
    createdAt: "2021-04-04",
  },
  {
    id: 5,
    title: "Top Up",
    amount: 500000,
    createdAt: "2021-05-05",
  },
  {
    id: 6,
    title: "Listrik Prabayar",
    amount: 600000,
    createdAt: "2021-06-06",
  },
  {
    id: 7,
    title: "Pulsa",
    amount: 700000,
    createdAt: "2021-07-07",
  },
  {
    id: 8,
    title: "Top Up",
    amount: 800000,
    createdAt: "2021-08-08",
  },
  {
    id: 9,
    title: "Top Up",
    amount: 900000,
    createdAt: "2021-09-09",
  },
  {
    id: 10,
    title: "Listrik Prabayar",
    amount: 1000000,
    createdAt: "2021-10-10",
  },
  {
    id: 11,
    title: "Pulsa",
    amount: 1100000,
    createdAt: "2021-11-11",
  },
  {
    id: 12,
    title: "Top Up",
    amount: 1200000,
    createdAt: "2021-12-12",
  },
];
