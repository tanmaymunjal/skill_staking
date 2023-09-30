/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category AddFreelancer
 * @category generated
 */
export type AddFreelancerInstructionArgs = {
  freelancerMetadata: string
}
/**
 * @category Instructions
 * @category AddFreelancer
 * @category generated
 */
export const addFreelancerStruct = new beet.FixableBeetArgsStruct<
  AddFreelancerInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['freelancerMetadata', beet.utf8String],
  ],
  'AddFreelancerInstructionArgs'
)
/**
 * Accounts required by the _addFreelancer_ instruction
 *
 * @property [_writable_, **signer**] freelancer
 * @property [] freelancerVerifiedUser
 * @property [_writable_] freelanceAccount
 * @category Instructions
 * @category AddFreelancer
 * @category generated
 */
export type AddFreelancerInstructionAccounts = {
  freelancer: web3.PublicKey
  freelancerVerifiedUser: web3.PublicKey
  freelanceAccount: web3.PublicKey
  systemProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const addFreelancerInstructionDiscriminator = [
  219, 134, 204, 131, 39, 93, 111, 181,
]

/**
 * Creates a _AddFreelancer_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category AddFreelancer
 * @category generated
 */
export function createAddFreelancerInstruction(
  accounts: AddFreelancerInstructionAccounts,
  args: AddFreelancerInstructionArgs,
  programId = new web3.PublicKey('CnMMyfQSGk7h6YNf2uLmBuLpfBKuMTYPct6PmFMM3P24')
) {
  const [data] = addFreelancerStruct.serialize({
    instructionDiscriminator: addFreelancerInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.freelancer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.freelancerVerifiedUser,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.freelanceAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
  ]

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc)
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
