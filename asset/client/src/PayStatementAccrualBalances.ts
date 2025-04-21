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
import type { PayStatementAccrualBalancesApi } from './PayStatementAccrualBalancesApi';
import {
  PayStatementHeaders,
  PayStatementHeadersType
} from './PayStatementHeaders';

/**
 * This class represents the entity "PayStatementAccrualBalances" of service "d365_metadata".
 */
export class PayStatementAccrualBalances<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayStatementAccrualBalancesType<T>
{
  /**
   * Technical entity name for PayStatementAccrualBalances.
   */
  static override _entityName = 'PayStatementAccrualBalances';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayStatementAccrualBalances entity.
   */
  static _keys = ['dataAreaId', 'PayStatementNumber', 'AccrualId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Pay Statement Number.
   */
  declare payStatementNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Accrual Id.
   */
  declare accrualId: DeserializedType<T, 'Edm.String'>;
  /**
   * Total Accrued Hours.
   */
  declare totalAccruedHours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Used Hours.
   */
  declare usedHours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Used Hours.
   */
  declare totalUsedHours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Available Hours.
   */
  declare totalAvailableHours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Accrued Hours.
   */
  declare accruedHours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link PayStatementHeaders} entity.
   */
  declare payStatementHeader?: PayStatementHeaders<T> | null;

  constructor(_entityApi: PayStatementAccrualBalancesApi<T>) {
    super(_entityApi);
  }
}

export interface PayStatementAccrualBalancesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  payStatementNumber: DeserializedType<T, 'Edm.String'>;
  accrualId: DeserializedType<T, 'Edm.String'>;
  totalAccruedHours: DeserializedType<T, 'Edm.Decimal'>;
  usedHours: DeserializedType<T, 'Edm.Decimal'>;
  totalUsedHours: DeserializedType<T, 'Edm.Decimal'>;
  totalAvailableHours: DeserializedType<T, 'Edm.Decimal'>;
  accruedHours: DeserializedType<T, 'Edm.Decimal'>;
  payStatementHeader?: PayStatementHeadersType<T> | null;
}
