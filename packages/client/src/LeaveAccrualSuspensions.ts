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
import type { LeaveAccrualSuspensionsApi } from './LeaveAccrualSuspensionsApi';
import { NoYes } from './NoYes';
import { LeaveTypes, LeaveTypesType } from './LeaveTypes';
import { Workers, WorkersType } from './Workers';
import { ReasonCodes, ReasonCodesType } from './ReasonCodes';
import {
  LeaveOfAbsenceRequests,
  LeaveOfAbsenceRequestsType
} from './LeaveOfAbsenceRequests';

/**
 * This class represents the entity "LeaveAccrualSuspensions" of service "d365_metadata".
 */
export class LeaveAccrualSuspensions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LeaveAccrualSuspensionsType<T>
{
  /**
   * Technical entity name for LeaveAccrualSuspensions.
   */
  static override _entityName = 'LeaveAccrualSuspensions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaveAccrualSuspensions entity.
   */
  static _keys = [
    'dataAreaId',
    'PersonnelNumber',
    'LeaveTypeId',
    'StartDate',
    'EndDate',
    'RequestId',
    'Canceled'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Leave Type Id.
   */
  declare leaveTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Request Id.
   */
  declare requestId: DeserializedType<T, 'Edm.String'>;
  /**
   * Canceled.
   * @nullable
   */
  declare canceled?: NoYes | null;
  /**
   * Reason Code Id.
   * @nullable
   */
  declare reasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Comment.
   * @nullable
   */
  declare comment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link LeaveTypes} entity.
   */
  declare leaveType?: LeaveTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link ReasonCodes} entity.
   */
  declare reasonCode?: ReasonCodes<T> | null;
  /**
   * One-to-one navigation property to the {@link LeaveOfAbsenceRequests} entity.
   */
  declare request?: LeaveOfAbsenceRequests<T> | null;

  constructor(_entityApi: LeaveAccrualSuspensionsApi<T>) {
    super(_entityApi);
  }
}

export interface LeaveAccrualSuspensionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  leaveTypeId: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  requestId: DeserializedType<T, 'Edm.String'>;
  canceled?: NoYes | null;
  reasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  comment?: DeserializedType<T, 'Edm.String'> | null;
  leaveType?: LeaveTypesType<T> | null;
  worker?: WorkersType<T> | null;
  reasonCode?: ReasonCodesType<T> | null;
  request?: LeaveOfAbsenceRequestsType<T> | null;
}
