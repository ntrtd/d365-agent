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
import type { LeavePlansV2Api } from './LeavePlansV2Api';
import { LeavePlanAccrualFrequency } from './LeavePlanAccrualFrequency';
import { LeavePlanAccrualType } from './LeavePlanAccrualType';
import { LeavePlanAccrualPolicy } from './LeavePlanAccrualPolicy';
import { LeaveHoursWorkedType } from './LeaveHoursWorkedType';
import { LeaveAccrualAwardDateBasis } from './LeaveAccrualAwardDateBasis';
import { LeavePlanAccrualPeriodBasis } from './LeavePlanAccrualPeriodBasis';
import { LeavePlanTiersV2, LeavePlanTiersV2Type } from './LeavePlanTiersV2';
import {
  LeaveBankTransactions,
  LeaveBankTransactionsType
} from './LeaveBankTransactions';
import {
  LeaveBankTransactionsV2,
  LeaveBankTransactionsV2Type
} from './LeaveBankTransactionsV2';
import {
  LeaveEnrollmentsV2,
  LeaveEnrollmentsV2Type
} from './LeaveEnrollmentsV2';

/**
 * This class represents the entity "LeavePlansV2" of service "d365_metadata".
 */
export class LeavePlansV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LeavePlansV2Type<T>
{
  /**
   * Technical entity name for LeavePlansV2.
   */
  static override _entityName = 'LeavePlansV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeavePlansV2 entity.
   */
  static _keys = ['dataAreaId', 'Name'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accrual Frequency.
   * @nullable
   */
  declare accrualFrequency?: LeavePlanAccrualFrequency | null;
  /**
   * Accrual Type.
   * @nullable
   */
  declare accrualType?: LeavePlanAccrualType | null;
  /**
   * Leave Type Id.
   * @nullable
   */
  declare leaveTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employee Specific Date Field Name.
   * @nullable
   */
  declare employeeSpecificDateFieldName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Enrollment Accrual Policy.
   * @nullable
   */
  declare enrollmentAccrualPolicy?: LeavePlanAccrualPolicy | null;
  /**
   * Hours Worked Type.
   * @nullable
   */
  declare hoursWorkedType?: LeaveHoursWorkedType | null;
  /**
   * Accrual Award Date Basis.
   * @nullable
   */
  declare accrualAwardDateBasis?: LeaveAccrualAwardDateBasis | null;
  /**
   * Employee Specific Date Table Name.
   * @nullable
   */
  declare employeeSpecificDateTableName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Accrual Period Basis.
   * @nullable
   */
  declare accrualPeriodBasis?: LeavePlanAccrualPeriodBasis | null;
  /**
   * Unenrollment Accrual Policy.
   * @nullable
   */
  declare unenrollmentAccrualPolicy?: LeavePlanAccrualPolicy | null;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-many navigation property to the {@link LeavePlanTiersV2} entity.
   */
  declare leavePlanTiersV2: LeavePlanTiersV2<T>[];
  /**
   * One-to-many navigation property to the {@link LeaveBankTransactions} entity.
   */
  declare leaveBankTransactions: LeaveBankTransactions<T>[];
  /**
   * One-to-many navigation property to the {@link LeaveBankTransactionsV2} entity.
   */
  declare leaveBankTransactionsV2: LeaveBankTransactionsV2<T>[];
  /**
   * One-to-many navigation property to the {@link LeaveEnrollmentsV2} entity.
   */
  declare leaveEnrollmentsV2: LeaveEnrollmentsV2<T>[];

  constructor(_entityApi: LeavePlansV2Api<T>) {
    super(_entityApi);
  }
}

export interface LeavePlansV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  accrualFrequency?: LeavePlanAccrualFrequency | null;
  accrualType?: LeavePlanAccrualType | null;
  leaveTypeId?: DeserializedType<T, 'Edm.String'> | null;
  employeeSpecificDateFieldName?: DeserializedType<T, 'Edm.String'> | null;
  enrollmentAccrualPolicy?: LeavePlanAccrualPolicy | null;
  hoursWorkedType?: LeaveHoursWorkedType | null;
  accrualAwardDateBasis?: LeaveAccrualAwardDateBasis | null;
  employeeSpecificDateTableName?: DeserializedType<T, 'Edm.String'> | null;
  accrualPeriodBasis?: LeavePlanAccrualPeriodBasis | null;
  unenrollmentAccrualPolicy?: LeavePlanAccrualPolicy | null;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  leavePlanTiersV2: LeavePlanTiersV2Type<T>[];
  leaveBankTransactions: LeaveBankTransactionsType<T>[];
  leaveBankTransactionsV2: LeaveBankTransactionsV2Type<T>[];
  leaveEnrollmentsV2: LeaveEnrollmentsV2Type<T>[];
}
