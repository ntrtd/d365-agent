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
import type { TemporaryCreditLimitsApi } from './TemporaryCreditLimitsApi';

/**
 * This class represents the entity "TemporaryCreditLimits" of service "d365_metadata".
 */
export class TemporaryCreditLimits<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TemporaryCreditLimitsType<T>
{
  /**
   * Technical entity name for TemporaryCreditLimits.
   */
  static override _entityName = 'TemporaryCreditLimits';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TemporaryCreditLimits entity.
   */
  static _keys = [
    'CustAccount',
    'CustAccountDataArea',
    'CreditLimitId',
    'FromDate',
    'ToDate'
  ];
  /**
   * Cust Account.
   */
  declare custAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * Cust Account Data Area.
   */
  declare custAccountDataArea: DeserializedType<T, 'Edm.String'>;
  /**
   * Credit Limit Id.
   */
  declare creditLimitId: DeserializedType<T, 'Edm.String'>;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * To Date.
   */
  declare toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Credit Max.
   */
  declare creditMax: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: TemporaryCreditLimitsApi<T>) {
    super(_entityApi);
  }
}

export interface TemporaryCreditLimitsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  custAccount: DeserializedType<T, 'Edm.String'>;
  custAccountDataArea: DeserializedType<T, 'Edm.String'>;
  creditLimitId: DeserializedType<T, 'Edm.String'>;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  creditMax: DeserializedType<T, 'Edm.Decimal'>;
}
