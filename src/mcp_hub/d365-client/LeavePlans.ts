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
import type { LeavePlansApi } from './LeavePlansApi';
import { LeavePlanAccrualFrequency } from './LeavePlanAccrualFrequency';
import { LeavePlanAccrualType } from './LeavePlanAccrualType';
import { LeavePlanAccrualPolicy } from './LeavePlanAccrualPolicy';
import { LeaveHoursWorkedType } from './LeaveHoursWorkedType';
import { LeaveAccrualAwardDateBasis } from './LeaveAccrualAwardDateBasis';
import { LeavePlanAccrualPeriodBasis } from './LeavePlanAccrualPeriodBasis';
import { LeavePlanTiers, LeavePlanTiersType } from './LeavePlanTiers';
import { LeaveEnrollments, LeaveEnrollmentsType } from './LeaveEnrollments';
import { LeaveTypes, LeaveTypesType } from './LeaveTypes';

/**
 * This class represents the entity "LeavePlans" of service "d365_metadata".
 */
export class LeavePlans<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LeavePlansType<T>
{
  /**
   * Technical entity name for LeavePlans.
   */
  static override _entityName = 'LeavePlans';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeavePlans entity.
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
   * One-to-many navigation property to the {@link LeavePlanTiers} entity.
   */
  declare leavePlanTiers: LeavePlanTiers<T>[];
  /**
   * One-to-many navigation property to the {@link LeaveEnrollments} entity.
   */
  declare leaveEnrollments: LeaveEnrollments<T>[];
  /**
   * One-to-one navigation property to the {@link LeaveTypes} entity.
   */
  declare type?: LeaveTypes<T> | null;

  constructor(_entityApi: LeavePlansApi<T>) {
    super(_entityApi);
  }
}

export interface LeavePlansType<
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
  leavePlanTiers: LeavePlanTiersType<T>[];
  leaveEnrollments: LeaveEnrollmentsType<T>[];
  type?: LeaveTypesType<T> | null;
}
