import { cpus } from 'os';

export const printCPUS = () => {
  const amount = cpus().length;
  const result = [];
  cpus().forEach( cpu => {
    result.push({ model : cpu.model, speed: cpu.speed });
  })
  console.log(`Overall amount of CPUS is ${amount}.`)
  console.table(result);
}
