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
import type { CustDisputesApi } from './CustDisputesApi';
import { CustVendDisputeStatus } from './CustVendDisputeStatus';
import { NoYes } from './NoYes';
import { CustTransactions, CustTransactionsType } from './CustTransactions';

/**
 * This class represents the entity "CustDisputes" of service "d365_metadata".
 */
export class CustDisputes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CustDisputesType<T>
{
  /**
   * Technical entity name for CustDisputes.
   */
  static override _entityName = 'CustDisputes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustDisputes entity.
   */
  static _keys = ['dataAreaId', 'SysRecId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sys Rec Id.
   */
  declare sysRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Balance.
   */
  declare transactionBalance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Currency.
   * @nullable
   */
  declare transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reason Comment.
   * @nullable
   */
  declare reasonComment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reason Code.
   * @nullable
   */
  declare reasonCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Note.
   * @nullable
   */
  declare note?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Cur.
   */
  declare amountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Status Changed Date.
   */
  declare statusChangedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cust Trans.
   */
  declare custTrans: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Reason Table Ref.
   */
  declare reasonTableRef: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: CustVendDisputeStatus | null;
  /**
   * Is Automatic Update.
   * @nullable
   */
  declare isAutomaticUpdate?: NoYes | null;
  /**
   * Last Payment.
   */
  declare lastPayment: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Follow Up Date.
   */
  declare followUpDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link CustTransactions} entity.
   */
  declare custTransaction?: CustTransactions<T> | null;

  constructor(_entityApi: CustDisputesApi<T>) {
    super(_entityApi);
  }
}

export interface CustDisputesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sysRecId: DeserializedType<T, 'Edm.Int64'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  transactionBalance: DeserializedType<T, 'Edm.Decimal'>;
  transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  reasonComment?: DeserializedType<T, 'Edm.String'> | null;
  reasonCode?: DeserializedType<T, 'Edm.String'> | null;
  note?: DeserializedType<T, 'Edm.String'> | null;
  amountCur: DeserializedType<T, 'Edm.Decimal'>;
  statusChangedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  custTrans: DeserializedType<T, 'Edm.Int64'>;
  reasonTableRef: DeserializedType<T, 'Edm.Int64'>;
  status?: CustVendDisputeStatus | null;
  isAutomaticUpdate?: NoYes | null;
  lastPayment: DeserializedType<T, 'Edm.Decimal'>;
  followUpDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  custTransaction?: CustTransactionsType<T> | null;
}
