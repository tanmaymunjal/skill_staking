/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import * as beetSolana from '@metaplex-foundation/beet-solana'

/**
 * Arguments used to create {@link NameRouter}
 * @category Accounts
 * @category generated
 */
export type NameRouterArgs = {
  bump: number
  signatureVersion: number
  totalVerifiedUsers: beet.bignum
  routerCreator: web3.PublicKey
  signingDomain: string
}

export const nameRouterDiscriminator = [76, 77, 45, 18, 122, 255, 171, 86]
/**
 * Holds the data for the {@link NameRouter} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class NameRouter implements NameRouterArgs {
  private constructor(
    readonly bump: number,
    readonly signatureVersion: number,
    readonly totalVerifiedUsers: beet.bignum,
    readonly routerCreator: web3.PublicKey,
    readonly signingDomain: string
  ) {}

  /**
   * Creates a {@link NameRouter} instance from the provided args.
   */
  static fromArgs(args: NameRouterArgs) {
    return new NameRouter(
      args.bump,
      args.signatureVersion,
      args.totalVerifiedUsers,
      args.routerCreator,
      args.signingDomain
    )
  }

  /**
   * Deserializes the {@link NameRouter} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [NameRouter, number] {
    return NameRouter.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link NameRouter} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig
  ): Promise<NameRouter> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig
    )
    if (accountInfo == null) {
      throw new Error(`Unable to find NameRouter account at ${address}`)
    }
    return NameRouter.fromAccountInfo(accountInfo, 0)[0]
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey(
      'CnMMyfQSGk7h6YNf2uLmBuLpfBKuMTYPct6PmFMM3P24'
    )
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, nameRouterBeet)
  }

  /**
   * Deserializes the {@link NameRouter} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [NameRouter, number] {
    return nameRouterBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link NameRouter} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return nameRouterBeet.serialize({
      accountDiscriminator: nameRouterDiscriminator,
      ...this,
    })
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link NameRouter} for the provided args.
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   */
  static byteSize(args: NameRouterArgs) {
    const instance = NameRouter.fromArgs(args)
    return nameRouterBeet.toFixedFromValue({
      accountDiscriminator: nameRouterDiscriminator,
      ...instance,
    }).byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link NameRouter} data from rent
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    args: NameRouterArgs,
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      NameRouter.byteSize(args),
      commitment
    )
  }

  /**
   * Returns a readable version of {@link NameRouter} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      bump: this.bump,
      signatureVersion: this.signatureVersion,
      totalVerifiedUsers: (() => {
        const x = <{ toNumber: () => number }>this.totalVerifiedUsers
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      routerCreator: this.routerCreator.toBase58(),
      signingDomain: this.signingDomain,
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const nameRouterBeet = new beet.FixableBeetStruct<
  NameRouter,
  NameRouterArgs & {
    accountDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['bump', beet.u8],
    ['signatureVersion', beet.u8],
    ['totalVerifiedUsers', beet.u64],
    ['routerCreator', beetSolana.publicKey],
    ['signingDomain', beet.utf8String],
  ],
  NameRouter.fromArgs,
  'NameRouter'
)
