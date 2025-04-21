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
import type { PremiumEarningCodeActiveIntervalsApi } from './PremiumEarningCodeActiveIntervalsApi';

/**
 * This class represents the entity "PremiumEarningCodeActiveIntervals" of service "d365_metadata".
 */
export class PremiumEarningCodeActiveIntervals<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PremiumEarningCodeActiveIntervalsType<T>
{
  /**
   * Technical entity name for PremiumEarningCodeActiveIntervals.
   */
  static override _entityName = 'PremiumEarningCodeActiveIntervals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PremiumEarningCodeActiveIntervals entity.
   */
  static _keys = ['PremiumEarningCodeId', 'ValidFrom', 'ValidTo'];
  /**
   * Premium Earning Code Id.
   */
  declare premiumEarningCodeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: PremiumEarningCodeActiveIntervalsApi<T>) {
    super(_entityApi);
  }
}

export interface PremiumEarningCodeActiveIntervalsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  premiumEarningCodeId: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
