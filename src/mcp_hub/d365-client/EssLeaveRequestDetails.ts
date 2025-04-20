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
import type { EssLeaveRequestDetailsApi } from './EssLeaveRequestDetailsApi';
import { LeaveHalfDayDefinition } from './LeaveHalfDayDefinition';
import { EssLeaveTypes, EssLeaveTypesType } from './EssLeaveTypes';
import {
  EssLeaveRequestHeaders,
  EssLeaveRequestHeadersType
} from './EssLeaveRequestHeaders';

/**
 * This class represents the entity "EssLeaveRequestDetails" of service "d365_metadata".
 */
export class EssLeaveRequestDetails<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EssLeaveRequestDetailsType<T>
{
  /**
   * Technical entity name for EssLeaveRequestDetails.
   */
  static override _entityName = 'EssLeaveRequestDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EssLeaveRequestDetails entity.
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
   * One-to-one navigation property to the {@link EssLeaveRequestHeaders} entity.
   */
  declare request?: EssLeaveRequestHeaders<T> | null;

  constructor(_entityApi: EssLeaveRequestDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface EssLeaveRequestDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  requestId: DeserializedType<T, 'Edm.String'>;
  leaveTypeId: DeserializedType<T, 'Edm.String'>;
  leaveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  halfDayDefinition?: LeaveHalfDayDefinition | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  leaveType?: EssLeaveTypesType<T> | null;
  request?: EssLeaveRequestHeadersType<T> | null;
}
