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
import type { RetailTransactionPaymentRefundableAmountsBiEntitiesApi } from './RetailTransactionPaymentRefundableAmountsBiEntitiesApi';

/**
 * This class represents the entity "RetailTransactionPaymentRefundableAmountsBIEntities" of service "d365_metadata".
 */
export class RetailTransactionPaymentRefundableAmountsBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionPaymentRefundableAmountsBiEntitiesType<T>
{
  /**
   * Technical entity name for RetailTransactionPaymentRefundableAmountsBiEntities.
   */
  static override _entityName =
    'RetailTransactionPaymentRefundableAmountsBIEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionPaymentRefundableAmountsBiEntities entity.
   */
  static _keys = [
    'dataAreaId',
    'store',
    'terminal',
    'transactionId',
    'lineNum'
  ];
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
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
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
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Refundable Amount.
   */
  declare refundableAmount: DeserializedType<T, 'Edm.Decimal'>;

  constructor(
    _entityApi: RetailTransactionPaymentRefundableAmountsBiEntitiesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface RetailTransactionPaymentRefundableAmountsBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  store: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  refundableAmount: DeserializedType<T, 'Edm.Decimal'>;
}
