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
import type { EssLeaveRequestAssignedDetailsApi } from './EssLeaveRequestAssignedDetailsApi';
import { LeaveHalfDayDefinition } from './LeaveHalfDayDefinition';
import { EssLeaveTypes, EssLeaveTypesType } from './EssLeaveTypes';
import {
  EssLeaveRequestAssignedHeaders,
  EssLeaveRequestAssignedHeadersType
} from './EssLeaveRequestAssignedHeaders';

/**
 * This class represents the entity "EssLeaveRequestAssignedDetails" of service "d365_metadata".
 */
export class EssLeaveRequestAssignedDetails<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EssLeaveRequestAssignedDetailsType<T>
{
  /**
   * Technical entity name for EssLeaveRequestAssignedDetails.
   */
  static override _entityName = 'EssLeaveRequestAssignedDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EssLeaveRequestAssignedDetails entity.
   */
  static _keys = ['dataAreaId', 'RequestId', 'LeaveTypeId', 'LeaveDate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Request Id.
   */
  declare requestId: DeserializedType<T, 'Edm.String'>;
  /**
   * Leave Type Id.
   */
  declare leaveTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Leave Date.
   */
  declare leaveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * One-to-one navigation property to the {@link EssLeaveTypes} entity.
   */
  declare leaveType?: EssLeaveTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link EssLeaveRequestAssignedHeaders} entity.
   */
  declare request?: EssLeaveRequestAssignedHeaders<T> | null;

  constructor(_entityApi: EssLeaveRequestAssignedDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface EssLeaveRequestAssignedDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  requestId: DeserializedType<T, 'Edm.String'>;
  leaveTypeId: DeserializedType<T, 'Edm.String'>;
  leaveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  halfDayDefinition?: LeaveHalfDayDefinition | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  leaveType?: EssLeaveTypesType<T> | null;
  request?: EssLeaveRequestAssignedHeadersType<T> | null;
}
