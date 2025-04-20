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
import type { LeaveRequestDetailsApi } from './LeaveRequestDetailsApi';
import { LeaveHalfDayDefinition } from './LeaveHalfDayDefinition';
import { LeaveTypes, LeaveTypesType } from './LeaveTypes';
import {
  LeaveRequestHeaders,
  LeaveRequestHeadersType
} from './LeaveRequestHeaders';

/**
 * This class represents the entity "LeaveRequestDetails" of service "d365_metadata".
 */
export class LeaveRequestDetails<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LeaveRequestDetailsType<T>
{
  /**
   * Technical entity name for LeaveRequestDetails.
   */
  static override _entityName = 'LeaveRequestDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaveRequestDetails entity.
   */
  static _keys = ['dataAreaId', 'RequestId', 'LeaveDate', 'Type'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Request Id.
   */
  declare requestId: DeserializedType<T, 'Edm.String'>;
  /**
   * Leave Date.
   */
  declare leaveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Type.
   */
  declare type: DeserializedType<T, 'Edm.String'>;
  /**
   * Half Day Definition.
   * @nullable
   */
  declare halfDayDefinition?: LeaveHalfDayDefinition | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link LeaveTypes} entity.
   */
  declare leaveRequestDetailLeaveType?: LeaveTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link LeaveRequestHeaders} entity.
   */
  declare leaveRequestHeader?: LeaveRequestHeaders<T> | null;

  constructor(_entityApi: LeaveRequestDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface LeaveRequestDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  requestId: DeserializedType<T, 'Edm.String'>;
  leaveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  type: DeserializedType<T, 'Edm.String'>;
  halfDayDefinition?: LeaveHalfDayDefinition | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  leaveRequestDetailLeaveType?: LeaveTypesType<T> | null;
  leaveRequestHeader?: LeaveRequestHeadersType<T> | null;
}
