/*
  Warnings:

  - The `returnedAt` column on the `Transaction` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "returnedAt",
ADD COLUMN     "returnedAt" TIMESTAMP(3);
