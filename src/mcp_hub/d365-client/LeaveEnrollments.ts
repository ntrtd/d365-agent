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
import type { LeaveEnrollmentsApi } from './LeaveEnrollmentsApi';
import { NoYes } from './NoYes';
import { LeaveTierBasis } from './LeaveTierBasis';
import { LeaveRequests, LeaveRequestsType } from './LeaveRequests';
import { Workers, WorkersType } from './Workers';
import { LeavePlans, LeavePlansType } from './LeavePlans';

/**
 * This class represents the entity "LeaveEnrollments" of service "d365_metadata".
 */
export class LeaveEnrollments<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LeaveEnrollmentsType<T>
{
  /**
   * Technical entity name for LeaveEnrollments.
   */
  static override _entityName = 'LeaveEnrollments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaveEnrollments entity.
   */
  static _keys = ['dataAreaId', 'PersonnelNumber', 'LeavePlanId', 'StartDate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Leave Plan Id.
   */
  declare leavePlanId: DeserializedType<T, 'Edm.String'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Accrual Suspended.
   * @nullable
   */
  declare isAccrualSuspended?: NoYes | null;
  /**
   * Tier Basis.
   * @nullable
   */
  declare tierBasis?: LeaveTierBasis | null;
  /**
   * Accrual Date Basis.
   */
  declare accrualDateBasis: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Accrual Start Date.
   */
  declare accrualStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Custom Date.
   */
  declare customDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Leave Type.
   * @nullable
   */
  declare leaveType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link LeaveRequests} entity.
   */
  declare requests: LeaveRequests<T>[];
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link LeavePlans} entity.
   */
  declare plan?: LeavePlans<T> | null;

  constructor(_entityApi: LeaveEnrollmentsApi<T>) {
    super(_entityApi);
  }
}

export interface LeaveEnrollmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  leavePlanId: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isAccrualSuspended?: NoYes | null;
  tierBasis?: LeaveTierBasis | null;
  accrualDateBasis: DeserializedType<T, 'Edm.DateTimeOffset'>;
  accrualStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  customDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  leaveType?: DeserializedType<T, 'Edm.String'> | null;
  requests: LeaveRequestsType<T>[];
  worker?: WorkersType<T> | null;
  plan?: LeavePlansType<T> | null;
}
