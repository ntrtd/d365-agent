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
import type { AccountingEventBiEntitiesApi } from './AccountingEventBiEntitiesApi';
import { NoYes } from './NoYes';
import { AccountingEventState } from './AccountingEventState';
import { AccountingEventType } from './AccountingEventType';

/**
 * This class represents the entity "AccountingEventBiEntities" of service "d365_metadata".
 */
export class AccountingEventBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AccountingEventBiEntitiesType<T>
{
  /**
   * Technical entity name for AccountingEventBiEntities.
   */
  static override _entityName = 'AccountingEventBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AccountingEventBiEntities entity.
   */
  static _keys = ['SourceKey'];
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Is Accounting Required.
   * @nullable
   */
  declare isAccountingRequired?: NoYes | null;
  /**
   * State.
   * @nullable
   */
  declare state?: AccountingEventState | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Delayed Accounting Event Type.
   * @nullable
   */
  declare delayedAccountingEventType?: AccountingEventType | null;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Document Header.
   */
  declare sourceDocumentHeader: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Event Date Time.
   */
  declare eventDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sys Created Date Time.
   */
  declare sysCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Document Data Area Id.
   * @nullable
   */
  declare documentDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting Date.
   */
  declare accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Type.
   * @nullable
   */
  declare type?: AccountingEventType | null;
  /**
   * Sys Created Transaction Id.
   */
  declare sysCreatedTransactionId: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: AccountingEventBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface AccountingEventBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  isAccountingRequired?: NoYes | null;
  state?: AccountingEventState | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  delayedAccountingEventType?: AccountingEventType | null;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  sourceDocumentHeader: DeserializedType<T, 'Edm.Int64'>;
  eventDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sysCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  documentDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  type?: AccountingEventType | null;
  sysCreatedTransactionId: DeserializedType<T, 'Edm.Int64'>;
}
