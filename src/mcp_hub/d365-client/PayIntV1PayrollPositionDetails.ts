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
import type { PayIntV1PayrollPositionDetailsApi } from './PayIntV1PayrollPositionDetailsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "PayIntV1PayrollPositionDetails" of service "d365_metadata".
 */
export class PayIntV1PayrollPositionDetails<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayIntV1PayrollPositionDetailsType<T>
{
  /**
   * Technical entity name for PayIntV1PayrollPositionDetails.
   */
  static override _entityName = 'PayIntV1PayrollPositionDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1PayrollPositionDetails entity.
   */
  static _keys = ['PositionId', 'ValidFrom', 'ValidTo'];
  /**
   * Position Id.
   */
  declare positionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Are Earnings Generated From Schedule.
   * @nullable
   */
  declare areEarningsGeneratedFromSchedule?: NoYes | null;
  /**
   * Schedule Legal Entity.
   * @nullable
   */
  declare scheduleLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Annual Regular Hours.
   */
  declare annualRegularHours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pay Cycle Id.
   * @nullable
   */
  declare payCycleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Schedule.
   * @nullable
   */
  declare schedule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay Period Overtime Hours.
   */
  declare payPeriodOvertimeHours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Paid By Legal Entity.
   * @nullable
   */
  declare paidByLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Salary Generated.
   * @nullable
   */
  declare isSalaryGenerated?: NoYes | null;
  /**
   * Default Earning Code Id.
   * @nullable
   */
  declare defaultEarningCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Benefit Id.
   * @nullable
   */
  declare benefitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay Cycle.
   */
  declare payCycle: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: PayIntV1PayrollPositionDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1PayrollPositionDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  positionId: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  areEarningsGeneratedFromSchedule?: NoYes | null;
  scheduleLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  annualRegularHours: DeserializedType<T, 'Edm.Decimal'>;
  payCycleId?: DeserializedType<T, 'Edm.String'> | null;
  schedule?: DeserializedType<T, 'Edm.String'> | null;
  payPeriodOvertimeHours: DeserializedType<T, 'Edm.Decimal'>;
  paidByLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  isSalaryGenerated?: NoYes | null;
  defaultEarningCodeId?: DeserializedType<T, 'Edm.String'> | null;
  benefitId?: DeserializedType<T, 'Edm.String'> | null;
  payCycle: DeserializedType<T, 'Edm.Int64'>;
}
