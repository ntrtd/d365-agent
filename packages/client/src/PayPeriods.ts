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
import type { PayPeriodsApi } from './PayPeriodsApi';
import { PayrollPeriodStatus } from './PayrollPeriodStatus';
import {
  PayrollCalculationFrequencyPayPeriods,
  PayrollCalculationFrequencyPayPeriodsType
} from './PayrollCalculationFrequencyPayPeriods';
import { PayCycles, PayCyclesType } from './PayCycles';
import {
  EarningStatementLineInquiries,
  EarningStatementLineInquiriesType
} from './EarningStatementLineInquiries';

/**
 * This class represents the entity "PayPeriods" of service "d365_metadata".
 */
export class PayPeriods<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PayPeriodsType<T>
{
  /**
   * Technical entity name for PayPeriods.
   */
  static override _entityName = 'PayPeriods';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayPeriods entity.
   */
  static _keys = ['PayCycleId', 'PeriodStartDate', 'PeriodEndDate'];
  /**
   * Pay Cycle Id.
   */
  declare payCycleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Period Start Date.
   */
  declare periodStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Period End Date.
   */
  declare periodEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Comments.
   * @nullable
   */
  declare comments?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: PayrollPeriodStatus | null;
  /**
   * Default Payment Date.
   */
  declare defaultPaymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-many navigation property to the {@link PayrollCalculationFrequencyPayPeriods} entity.
   */
  declare payrollCalculationFrequencyPayPeriod: PayrollCalculationFrequencyPayPeriods<T>[];
  /**
   * One-to-one navigation property to the {@link PayCycles} entity.
   */
  declare payCycle?: PayCycles<T> | null;
  /**
   * One-to-many navigation property to the {@link EarningStatementLineInquiries} entity.
   */
  declare payrollEarningStatement: EarningStatementLineInquiries<T>[];

  constructor(_entityApi: PayPeriodsApi<T>) {
    super(_entityApi);
  }
}

export interface PayPeriodsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  payCycleId: DeserializedType<T, 'Edm.String'>;
  periodStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  periodEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  comments?: DeserializedType<T, 'Edm.String'> | null;
  status?: PayrollPeriodStatus | null;
  defaultPaymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  payrollCalculationFrequencyPayPeriod: PayrollCalculationFrequencyPayPeriodsType<T>[];
  payCycle?: PayCyclesType<T> | null;
  payrollEarningStatement: EarningStatementLineInquiriesType<T>[];
}
