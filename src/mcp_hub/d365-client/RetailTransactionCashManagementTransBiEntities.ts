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
import type { RetailTransactionCashManagementTransBiEntitiesApi } from './RetailTransactionCashManagementTransBiEntitiesApi';
import { RetailCashManagementTransactionContextEnum } from './RetailCashManagementTransactionContextEnum';

/**
 * This class represents the entity "RetailTransactionCashManagementTransBIEntities" of service "d365_metadata".
 */
export class RetailTransactionCashManagementTransBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionCashManagementTransBiEntitiesType<T>
{
  /**
   * Technical entity name for RetailTransactionCashManagementTransBiEntities.
   */
  static override _entityName =
    'RetailTransactionCashManagementTransBIEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionCashManagementTransBiEntities entity.
   */
  static _keys = ['dataAreaId', 'Store', 'Terminal', 'TransactionId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Store.
   */
  declare store: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal.
   */
  declare terminal: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Id.
   */
  declare transactionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * To Safe.
   * @nullable
   */
  declare toSafe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Source Context Type.
   * @nullable
   */
  declare transactionSourceContextType?: RetailCashManagementTransactionContextEnum | null;
  /**
   * Transaction Destination Context Type.
   * @nullable
   */
  declare transactionDestinationContextType?: RetailCashManagementTransactionContextEnum | null;
  /**
   * To Shift Terminal Id.
   * @nullable
   */
  declare toShiftTerminalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Origin.
   * @nullable
   */
  declare origin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Replication Counter From Origin.
   */
  declare replicationCounterFromOrigin: DeserializedType<T, 'Edm.Int32'>;
  /**
   * From Safe.
   * @nullable
   */
  declare fromSafe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * From Shift Id.
   * @nullable
   */
  declare fromShiftId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * To Shift Id.
   * @nullable
   */
  declare toShiftId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * From Shift Terminal Id.
   * @nullable
   */
  declare fromShiftTerminalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(
    _entityApi: RetailTransactionCashManagementTransBiEntitiesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface RetailTransactionCashManagementTransBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  store: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  toSafe?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  transactionSourceContextType?: RetailCashManagementTransactionContextEnum | null;
  transactionDestinationContextType?: RetailCashManagementTransactionContextEnum | null;
  toShiftTerminalId?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  origin?: DeserializedType<T, 'Edm.String'> | null;
  replicationCounterFromOrigin: DeserializedType<T, 'Edm.Int32'>;
  fromSafe?: DeserializedType<T, 'Edm.String'> | null;
  fromShiftId?: DeserializedType<T, 'Edm.String'> | null;
  toShiftId?: DeserializedType<T, 'Edm.String'> | null;
  fromShiftTerminalId?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
