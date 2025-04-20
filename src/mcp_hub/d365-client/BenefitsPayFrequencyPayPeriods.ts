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
import type { BenefitsPayFrequencyPayPeriodsApi } from './BenefitsPayFrequencyPayPeriodsApi';
import {
  BenefitsPayFrequencies,
  BenefitsPayFrequenciesType
} from './BenefitsPayFrequencies';

/**
 * This class represents the entity "BenefitsPayFrequencyPayPeriods" of service "d365_metadata".
 */
export class BenefitsPayFrequencyPayPeriods<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitsPayFrequencyPayPeriodsType<T>
{
  /**
   * Technical entity name for BenefitsPayFrequencyPayPeriods.
   */
  static override _entityName = 'BenefitsPayFrequencyPayPeriods';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsPayFrequencyPayPeriods entity.
   */
  static _keys = ['PaymentFrequencyId', 'PeriodStartDateTime'];
  /**
   * Payment Frequency Id.
   */
  declare paymentFrequencyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Period Start Date Time.
   */
  declare periodStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Period End Date Time.
   */
  declare periodEndDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link BenefitsPayFrequencies} entity.
   */
  declare benefitsPayFrequency?: BenefitsPayFrequencies<T> | null;

  constructor(_entityApi: BenefitsPayFrequencyPayPeriodsApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitsPayFrequencyPayPeriodsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  paymentFrequencyId: DeserializedType<T, 'Edm.String'>;
  periodStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  periodEndDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  benefitsPayFrequency?: BenefitsPayFrequenciesType<T> | null;
}
