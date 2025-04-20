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
import type { BankPromissoryNoteLayoutsApi } from './BankPromissoryNoteLayoutsApi';
import { NoYes } from './NoYes';
import { BankPromissoryNoteNumMethod } from './BankPromissoryNoteNumMethod';
import { Units } from './Units';
import { PrePrintLevel } from './PrePrintLevel';
import { BankPromissoryNoteFormType } from './BankPromissoryNoteFormType';

/**
 * This class represents the entity "BankPromissoryNoteLayouts" of service "d365_metadata".
 */
export class BankPromissoryNoteLayouts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BankPromissoryNoteLayoutsType<T>
{
  /**
   * Technical entity name for BankPromissoryNoteLayouts.
   */
  static override _entityName = 'BankPromissoryNoteLayouts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BankPromissoryNoteLayouts entity.
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
   * Print Bank City.
   * @nullable
   */
  declare printBankCity?: NoYes | null;
  /**
   * Paper Length.
   */
  declare paperLength: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Number Of Slip Copies.
   */
  declare numberOfSlipCopies: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Print Bank Account.
   * @nullable
   */
  declare printBankAccount?: NoYes | null;
  /**
   * First Signature Amount Limit.
   */
  declare firstSignatureAmountLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Start Position.
   */
  declare startPosition: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Print Transaction Date.
   * @nullable
   */
  declare printTransactionDate?: NoYes | null;
  /**
   * Number Method.
   * @nullable
   */
  declare numberMethod?: BankPromissoryNoteNumMethod | null;
  /**
   * Print Bank Number.
   * @nullable
   */
  declare printBankNumber?: NoYes | null;
  /**
   * Paper Length Unit.
   * @nullable
   */
  declare paperLengthUnit?: Units | null;
  /**
   * Print Bank Name.
   * @nullable
   */
  declare printBankName?: NoYes | null;
  /**
   * Paper Format.
   * @nullable
   */
  declare paperFormat?: PrePrintLevel | null;
  /**
   * Second Signature Amount Limit.
   */
  declare secondSignatureAmountLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Print Due Date.
   * @nullable
   */
  declare printDueDate?: NoYes | null;
  /**
   * Amount Prefix.
   * @nullable
   */
  declare amountPrefix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Print Company Name.
   * @nullable
   */
  declare printCompanyName?: NoYes | null;
  /**
   * Print Second Signature.
   * @nullable
   */
  declare printSecondSignature?: NoYes | null;
  /**
   * Start Position Unit.
   * @nullable
   */
  declare startPositionUnit?: Units | null;
  /**
   * Print Company Logo.
   * @nullable
   */
  declare printCompanyLogo?: NoYes | null;
  /**
   * Format Note Number.
   * @nullable
   */
  declare formatNoteNumber?: NoYes | null;
  /**
   * Format Type.
   * @nullable
   */
  declare formatType?: BankPromissoryNoteFormType | null;
  /**
   * Print First Signature.
   * @nullable
   */
  declare printFirstSignature?: NoYes | null;

  constructor(_entityApi: BankPromissoryNoteLayoutsApi<T>) {
    super(_entityApi);
  }
}

export interface BankPromissoryNoteLayoutsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  bankAccountId: DeserializedType<T, 'Edm.String'>;
  printBankCity?: NoYes | null;
  paperLength: DeserializedType<T, 'Edm.Decimal'>;
  numberOfSlipCopies: DeserializedType<T, 'Edm.Int32'>;
  printBankAccount?: NoYes | null;
  firstSignatureAmountLimit: DeserializedType<T, 'Edm.Decimal'>;
  startPosition: DeserializedType<T, 'Edm.Decimal'>;
  printTransactionDate?: NoYes | null;
  numberMethod?: BankPromissoryNoteNumMethod | null;
  printBankNumber?: NoYes | null;
  paperLengthUnit?: Units | null;
  printBankName?: NoYes | null;
  paperFormat?: PrePrintLevel | null;
  secondSignatureAmountLimit: DeserializedType<T, 'Edm.Decimal'>;
  printDueDate?: NoYes | null;
  amountPrefix?: DeserializedType<T, 'Edm.String'> | null;
  printCompanyName?: NoYes | null;
  printSecondSignature?: NoYes | null;
  startPositionUnit?: Units | null;
  printCompanyLogo?: NoYes | null;
  formatNoteNumber?: NoYes | null;
  formatType?: BankPromissoryNoteFormType | null;
  printFirstSignature?: NoYes | null;
}
