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
import type { BankAccountStatementBiEntitiesApi } from './BankAccountStatementBiEntitiesApi';

/**
 * This class represents the entity "BankAccountStatementBiEntities" of service "d365_metadata".
 */
export class BankAccountStatementBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BankAccountStatementBiEntitiesType<T>
{
  /**
   * Technical entity name for BankAccountStatementBiEntities.
   */
  static override _entityName = 'BankAccountStatementBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BankAccountStatementBiEntities entity.
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
   * Ending Balance.
   */
  declare endingBalance: DeserializedType<T, 'Edm.Decimal'>;
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
   * Account Statement Date.
   */
  declare accountStatementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Id.
   * @nullable
   */
  declare accountId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Statement Num.
   * @nullable
   */
  declare accountStatementNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cancel Date.
   */
  declare cancelDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Reconcile Date.
   */
  declare reconcileDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: BankAccountStatementBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface BankAccountStatementBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  endingBalance: DeserializedType<T, 'Edm.Decimal'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  accountStatementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  accountId?: DeserializedType<T, 'Edm.String'> | null;
  accountStatementNum?: DeserializedType<T, 'Edm.String'> | null;
  cancelDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  reconcileDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
