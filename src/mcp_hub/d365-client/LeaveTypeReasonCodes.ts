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
import type { LeaveTypeReasonCodesApi } from './LeaveTypeReasonCodesApi';
import { LeaveRequests, LeaveRequestsType } from './LeaveRequests';
import { ReasonCodes, ReasonCodesType } from './ReasonCodes';
import { LeaveTypes, LeaveTypesType } from './LeaveTypes';

/**
 * This class represents the entity "LeaveTypeReasonCodes" of service "d365_metadata".
 */
export class LeaveTypeReasonCodes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LeaveTypeReasonCodesType<T>
{
  /**
   * Technical entity name for LeaveTypeReasonCodes.
   */
  static override _entityName = 'LeaveTypeReasonCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaveTypeReasonCodes entity.
   */
  static _keys = ['dataAreaId', 'LeaveType', 'ReasonCodeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Leave Type.
   */
  declare leaveType: DeserializedType<T, 'Edm.String'>;
  /**
   * Reason Code Id.
   */
  declare reasonCodeId: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-many navigation property to the {@link LeaveRequests} entity.
   */
  declare requests: LeaveRequests<T>[];
  /**
   * One-to-one navigation property to the {@link ReasonCodes} entity.
   */
  declare reasonCode?: ReasonCodes<T> | null;
  /**
   * One-to-one navigation property to the {@link LeaveTypes} entity.
   */
  declare type?: LeaveTypes<T> | null;

  constructor(_entityApi: LeaveTypeReasonCodesApi<T>) {
    super(_entityApi);
  }
}

export interface LeaveTypeReasonCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  leaveType: DeserializedType<T, 'Edm.String'>;
  reasonCodeId: DeserializedType<T, 'Edm.String'>;
  requests: LeaveRequestsType<T>[];
  reasonCode?: ReasonCodesType<T> | null;
  type?: LeaveTypesType<T> | null;
}
