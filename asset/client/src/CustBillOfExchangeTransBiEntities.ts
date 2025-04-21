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
import type { CustBillOfExchangeTransBiEntitiesApi } from './CustBillOfExchangeTransBiEntitiesApi';
import { BankRemittanceType } from './BankRemittanceType';
import { CustVendNegInstStatus } from './CustVendNegInstStatus';
import { CustVendNegInstProtestReason } from './CustVendNegInstProtestReason';

/**
 * This class represents the entity "CustBillOfExchangeTransBiEntities" of service "d365_metadata".
 */
export class CustBillOfExchangeTransBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustBillOfExchangeTransBiEntitiesType<T>
{
  /**
   * Technical entity name for CustBillOfExchangeTransBiEntities.
   */
  static override _entityName = 'CustBillOfExchangeTransBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustBillOfExchangeTransBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SourceKey'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Account.
   * @nullable
   */
  declare custAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bill Of Exchange Id.
   * @nullable
   */
  declare billOfExchangeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Remittance Type.
   * @nullable
   */
  declare bankRemittanceType?: BankRemittanceType | null;
  /**
   * Seq Num.
   */
  declare seqNum: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Due Date.
   */
  declare dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Remitted To Bank Account Id.
   * @nullable
   */
  declare remittedToBankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Cur.
   */
  declare amountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: CustVendNegInstStatus | null;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Protest Reason.
   * @nullable
   */
  declare protestReason?: CustVendNegInstProtestReason | null;

  constructor(_entityApi: CustBillOfExchangeTransBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface CustBillOfExchangeTransBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  custAccount?: DeserializedType<T, 'Edm.String'> | null;
  billOfExchangeId?: DeserializedType<T, 'Edm.String'> | null;
  bankRemittanceType?: BankRemittanceType | null;
  seqNum: DeserializedType<T, 'Edm.Int32'>;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  remittedToBankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  amountCur: DeserializedType<T, 'Edm.Decimal'>;
  status?: CustVendNegInstStatus | null;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  protestReason?: CustVendNegInstProtestReason | null;
}
