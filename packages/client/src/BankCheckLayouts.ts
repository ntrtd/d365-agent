/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { BankCheckLayoutsApi } from './BankCheckLayoutsApi';
import { NoYes } from './NoYes';
import { ChequeFormType } from './ChequeFormType';
import { CopySignature } from './CopySignature';
import { ChequeDateSeparatorCa } from './ChequeDateSeparatorCa';
import { CopyWatermark } from './CopyWatermark';
import { Units } from './Units';
import { ChequeDateFormatCa } from './ChequeDateFormatCa';
import { ChequeNumMethod } from './ChequeNumMethod';
import { BankAccounts, BankAccountsType } from './BankAccounts';

/**
 * This class represents the entity "BankCheckLayouts" of service "d365_metadata".
 */
export class BankCheckLayouts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BankCheckLayoutsType<T>
{
  /**
   * Technical entity name for BankCheckLayouts.
   */
  static override _entityName = 'BankCheckLayouts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BankCheckLayouts entity.
   */
  static _keys = ['dataAreaId', 'BankAccountId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Bank Account Id.
   */
  declare bankAccountId: DeserializedType<T, 'Edm.String'>;
  /**
   * Amount Prefix.
   * @nullable
   */
  declare amountPrefix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allow Other Currencies.
   * @nullable
   */
  declare allowOtherCurrencies?: NoYes | null;
  /**
   * Print Micr Line.
   * @nullable
   */
  declare printMicrLine?: NoYes | null;
  /**
   * Print Company Logo.
   * @nullable
   */
  declare printCompanyLogo?: NoYes | null;
  /**
   * Format Type.
   * @nullable
   */
  declare formatType?: ChequeFormType | null;
  /**
   * Print A Code.
   * @nullable
   */
  declare printACode?: NoYes | null;
  /**
   * Custom Cheque Layout Id.
   * @nullable
   */
  declare customChequeLayoutId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Print C Code.
   * @nullable
   */
  declare printCCode?: NoYes | null;
  /**
   * Copy Signature Type.
   * @nullable
   */
  declare copySignatureType?: CopySignature | null;
  /**
   * Print Company Name.
   * @nullable
   */
  declare printCompanyName?: NoYes | null;
  /**
   * Date Separator.
   * @nullable
   */
  declare dateSeparator?: ChequeDateSeparatorCa | null;
  /**
   * Print Bank Number.
   * @nullable
   */
  declare printBankNumber?: NoYes | null;
  /**
   * Header Text.
   * @nullable
   */
  declare headerText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Copy Watermark Type.
   * @nullable
   */
  declare copyWatermarkType?: CopyWatermark | null;
  /**
   * Paper Length Unit.
   * @nullable
   */
  declare paperLengthUnit?: Units | null;
  /**
   * Start Position.
   */
  declare startPosition: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Date Format.
   * @nullable
   */
  declare dateFormat?: ChequeDateFormatCa | null;
  /**
   * Print Leading Zeros On Micr Line.
   * @nullable
   */
  declare printLeadingZerosOnMicrLine?: NoYes | null;
  /**
   * Paper Length.
   */
  declare paperLength: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * First Signature Amount Limit.
   */
  declare firstSignatureAmountLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Print Bank Name.
   * @nullable
   */
  declare printBankName?: NoYes | null;
  /**
   * Print B Code.
   * @nullable
   */
  declare printBCode?: NoYes | null;
  /**
   * Micr Line.
   * @nullable
   */
  declare micrLine?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Footer Text.
   * @nullable
   */
  declare footerText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * B Code.
   * @nullable
   */
  declare bCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * C Code.
   * @nullable
   */
  declare cCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Check Number Length.
   */
  declare checkNumberLength: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Print Second Signature.
   * @nullable
   */
  declare printSecondSignature?: NoYes | null;
  /**
   * Check Number Method.
   * @nullable
   */
  declare checkNumberMethod?: ChequeNumMethod | null;
  /**
   * Custom Watermark.
   * @nullable
   */
  declare customWatermark?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Print Bank Account.
   * @nullable
   */
  declare printBankAccount?: NoYes | null;
  /**
   * A Code.
   * @nullable
   */
  declare aCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Print First Signature.
   * @nullable
   */
  declare printFirstSignature?: NoYes | null;
  /**
   * Second Signature Amount Limit.
   */
  declare secondSignatureAmountLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Start Position Unit.
   * @nullable
   */
  declare startPositionUnit?: Units | null;
  /**
   * Number Of Slip Copies.
   */
  declare numberOfSlipCopies: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-one navigation property to the {@link BankAccounts} entity.
   */
  declare bankAccount?: BankAccounts<T> | null;

  constructor(_entityApi: BankCheckLayoutsApi<T>) {
    super(_entityApi);
  }
}

export interface BankCheckLayoutsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  bankAccountId: DeserializedType<T, 'Edm.String'>;
  amountPrefix?: DeserializedType<T, 'Edm.String'> | null;
  allowOtherCurrencies?: NoYes | null;
  printMicrLine?: NoYes | null;
  printCompanyLogo?: NoYes | null;
  formatType?: ChequeFormType | null;
  printACode?: NoYes | null;
  customChequeLayoutId?: DeserializedType<T, 'Edm.String'> | null;
  printCCode?: NoYes | null;
  copySignatureType?: CopySignature | null;
  printCompanyName?: NoYes | null;
  dateSeparator?: ChequeDateSeparatorCa | null;
  printBankNumber?: NoYes | null;
  headerText?: DeserializedType<T, 'Edm.String'> | null;
  copyWatermarkType?: CopyWatermark | null;
  paperLengthUnit?: Units | null;
  startPosition: DeserializedType<T, 'Edm.Decimal'>;
  dateFormat?: ChequeDateFormatCa | null;
  printLeadingZerosOnMicrLine?: NoYes | null;
  paperLength: DeserializedType<T, 'Edm.Decimal'>;
  firstSignatureAmountLimit: DeserializedType<T, 'Edm.Decimal'>;
  printBankName?: NoYes | null;
  printBCode?: NoYes | null;
  micrLine?: DeserializedType<T, 'Edm.String'> | null;
  footerText?: DeserializedType<T, 'Edm.String'> | null;
  bCode?: DeserializedType<T, 'Edm.String'> | null;
  cCode?: DeserializedType<T, 'Edm.String'> | null;
  checkNumberLength: DeserializedType<T, 'Edm.Int32'>;
  printSecondSignature?: NoYes | null;
  checkNumberMethod?: ChequeNumMethod | null;
  customWatermark?: DeserializedType<T, 'Edm.String'> | null;
  printBankAccount?: NoYes | null;
  aCode?: DeserializedType<T, 'Edm.String'> | null;
  printFirstSignature?: NoYes | null;
  secondSignatureAmountLimit: DeserializedType<T, 'Edm.Decimal'>;
  startPositionUnit?: Units | null;
  numberOfSlipCopies: DeserializedType<T, 'Edm.Int32'>;
  bankAccount?: BankAccountsType<T> | null;
}
