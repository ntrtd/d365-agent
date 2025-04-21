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
import type { PayrollCalculationFrequencyPayPeriodsApi } from './PayrollCalculationFrequencyPayPeriodsApi';
import { PayrollPeriodStatus } from './PayrollPeriodStatus';
import {
  PayrollCalculationFrequencies,
  PayrollCalculationFrequenciesType
} from './PayrollCalculationFrequencies';
import { PayPeriods, PayPeriodsType } from './PayPeriods';

/**
 * This class represents the entity "PayrollCalculationFrequencyPayPeriods" of service "d365_metadata".
 */
export class PayrollCalculationFrequencyPayPeriods<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayrollCalculationFrequencyPayPeriodsType<T>
{
  /**
   * Technical entity name for PayrollCalculationFrequencyPayPeriods.
   */
  static override _entityName = 'PayrollCalculationFrequencyPayPeriods';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayrollCalculationFrequencyPayPeriods entity.
   */
  static _keys = ['CalculationFrequencyId', 'PayCycleId', 'PeriodEndDate'];
  /**
   * Calculation Frequency Id.
   */
  declare calculationFrequencyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Pay Cycle Id.
   */
  declare payCycleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Period End Date.
   */
  declare periodEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Period Status.
   * @nullable
   */
  declare periodStatus?: PayrollPeriodStatus | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Period Start Date.
   */
  declare periodStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Default Payment Date.
   */
  declare defaultPaymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link PayrollCalculationFrequencies} entity.
   */
  declare payrollCalculationFrequency?: PayrollCalculationFrequencies<T> | null;
  /**
   * One-to-one navigation property to the {@link PayPeriods} entity.
   */
  declare payPeriod?: PayPeriods<T> | null;

  constructor(_entityApi: PayrollCalculationFrequencyPayPeriodsApi<T>) {
    super(_entityApi);
  }
}

export interface PayrollCalculationFrequencyPayPeriodsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  calculationFrequencyId: DeserializedType<T, 'Edm.String'>;
  payCycleId: DeserializedType<T, 'Edm.String'>;
  periodEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  periodStatus?: PayrollPeriodStatus | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  periodStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  defaultPaymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  payrollCalculationFrequency?: PayrollCalculationFrequenciesType<T> | null;
  payPeriod?: PayPeriodsType<T> | null;
}
