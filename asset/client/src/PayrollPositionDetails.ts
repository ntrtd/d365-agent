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
import type { PayrollPositionDetailsApi } from './PayrollPositionDetailsApi';
import { NoYes } from './NoYes';
import {
  JobPositionsDualWrite,
  JobPositionsDualWriteType
} from './JobPositionsDualWrite';
import { PayCycles, PayCyclesType } from './PayCycles';
import { WorkCalendars, WorkCalendarsType } from './WorkCalendars';
import { Benefits, BenefitsType } from './Benefits';

/**
 * This class represents the entity "PayrollPositionDetails" of service "d365_metadata".
 */
export class PayrollPositionDetails<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayrollPositionDetailsType<T>
{
  /**
   * Technical entity name for PayrollPositionDetails.
   */
  static override _entityName = 'PayrollPositionDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayrollPositionDetails entity.
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
   * One-to-one navigation property to the {@link JobPositionsDualWrite} entity.
   */
  declare position?: JobPositionsDualWrite<T> | null;
  /**
   * One-to-one navigation property to the {@link PayCycles} entity.
   */
  declare payCycle?: PayCycles<T> | null;
  /**
   * One-to-one navigation property to the {@link WorkCalendars} entity.
   */
  declare workCalendar?: WorkCalendars<T> | null;
  /**
   * One-to-one navigation property to the {@link Benefits} entity.
   */
  declare benefit?: Benefits<T> | null;

  constructor(_entityApi: PayrollPositionDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface PayrollPositionDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  positionId: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  areEarningsGeneratedFromSchedule?: NoYes | null;
  annualRegularHours: DeserializedType<T, 'Edm.Decimal'>;
  payCycleId?: DeserializedType<T, 'Edm.String'> | null;
  schedule?: DeserializedType<T, 'Edm.String'> | null;
  payPeriodOvertimeHours: DeserializedType<T, 'Edm.Decimal'>;
  paidByLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  isSalaryGenerated?: NoYes | null;
  defaultEarningCodeId?: DeserializedType<T, 'Edm.String'> | null;
  benefitId?: DeserializedType<T, 'Edm.String'> | null;
  position?: JobPositionsDualWriteType<T> | null;
  payCycle?: PayCyclesType<T> | null;
  workCalendar?: WorkCalendarsType<T> | null;
  benefit?: BenefitsType<T> | null;
}
