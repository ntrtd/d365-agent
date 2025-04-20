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
import type { EssLeaveTypeReasonCodesApi } from './EssLeaveTypeReasonCodesApi';
import { EssLeaveTypes, EssLeaveTypesType } from './EssLeaveTypes';

/**
 * This class represents the entity "EssLeaveTypeReasonCodes" of service "d365_metadata".
 */
export class EssLeaveTypeReasonCodes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EssLeaveTypeReasonCodesType<T>
{
  /**
   * Technical entity name for EssLeaveTypeReasonCodes.
   */
  static override _entityName = 'EssLeaveTypeReasonCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EssLeaveTypeReasonCodes entity.
   */
  static _keys = ['dataAreaId', 'LeaveTypeId', 'ReasonCodeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Leave Type Id.
   */
  declare leaveTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Reason Code Id.
   */
  declare reasonCodeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link EssLeaveTypes} entity.
   */
  declare leaveType?: EssLeaveTypes<T> | null;

  constructor(_entityApi: EssLeaveTypeReasonCodesApi<T>) {
    super(_entityApi);
  }
}

export interface EssLeaveTypeReasonCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  leaveTypeId: DeserializedType<T, 'Edm.String'>;
  reasonCodeId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  leaveType?: EssLeaveTypesType<T> | null;
}
