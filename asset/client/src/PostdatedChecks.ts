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
import type { PostdatedChecksApi } from './PostdatedChecksApi';
import { NoYes } from './NoYes';
import { PostDatedCheckStatus } from './PostDatedCheckStatus';
import { CustVendAcType } from './CustVendAcType';

/**
 * This class represents the entity "PostdatedChecks" of service "d365_metadata".
 */
export class PostdatedChecks<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PostdatedChecksType<T>
{
  /**
   * Technical entity name for PostdatedChecks.
   */
  static override _entityName = 'PostdatedChecks';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PostdatedChecks entity.
   */
  static _keys = ['dataAreaId', 'JournalBatchNumber', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Batch Number.
   */
  declare journalBatchNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Credit Amount.
   */
  declare creditAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Account Display Value.
   * @nullable
   */
  declare accountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Payment Stopped.
   * @nullable
   */
  declare isPaymentStopped?: NoYes | null;
  /**
   * Post Dated Check Status.
   * @nullable
   */
  declare postDatedCheckStatus?: PostDatedCheckStatus | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker Collection Agent.
   * @nullable
   */
  declare workerCollectionAgent?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Name.
   * @nullable
   */
  declare bankName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker Sales Person.
   * @nullable
   */
  declare workerSalesPerson?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Replacement Check.
   * @nullable
   */
  declare isReplacementCheck?: NoYes | null;
  /**
   * Comments.
   * @nullable
   */
  declare comments?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Date.
   */
  declare transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Debit Amount.
   */
  declare debitAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: CustVendAcType | null;
  /**
   * Check Number.
   * @nullable
   */
  declare checkNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maturity Date.
   */
  declare maturityDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Original Check Number.
   * @nullable
   */
  declare originalCheckNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Branch.
   * @nullable
   */
  declare bankBranch?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reason For Stop.
   * @nullable
   */
  declare reasonForStop?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PostdatedChecksApi<T>) {
    super(_entityApi);
  }
}

export interface PostdatedChecksType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalBatchNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  creditAmount: DeserializedType<T, 'Edm.Decimal'>;
  accountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  isPaymentStopped?: NoYes | null;
  postDatedCheckStatus?: PostDatedCheckStatus | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  workerCollectionAgent?: DeserializedType<T, 'Edm.String'> | null;
  bankName?: DeserializedType<T, 'Edm.String'> | null;
  workerSalesPerson?: DeserializedType<T, 'Edm.String'> | null;
  isReplacementCheck?: NoYes | null;
  comments?: DeserializedType<T, 'Edm.String'> | null;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  debitAmount: DeserializedType<T, 'Edm.Decimal'>;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  accountType?: CustVendAcType | null;
  checkNumber?: DeserializedType<T, 'Edm.String'> | null;
  maturityDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  originalCheckNumber?: DeserializedType<T, 'Edm.String'> | null;
  bankBranch?: DeserializedType<T, 'Edm.String'> | null;
  reasonForStop?: DeserializedType<T, 'Edm.String'> | null;
}
