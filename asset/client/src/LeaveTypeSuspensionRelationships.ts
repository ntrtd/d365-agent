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
import type { LeaveTypeSuspensionRelationshipsApi } from './LeaveTypeSuspensionRelationshipsApi';
import { LeaveTypes, LeaveTypesType } from './LeaveTypes';

/**
 * This class represents the entity "LeaveTypeSuspensionRelationships" of service "d365_metadata".
 */
export class LeaveTypeSuspensionRelationships<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LeaveTypeSuspensionRelationshipsType<T>
{
  /**
   * Technical entity name for LeaveTypeSuspensionRelationships.
   */
  static override _entityName = 'LeaveTypeSuspensionRelationships';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaveTypeSuspensionRelationships entity.
   */
  static _keys = [
    'dataAreaId',
    'SuspendedByLeaveType_Type',
    'SuspendedLeaveType_Type'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Suspended By Leave Type Type.
   */
  declare suspendedByLeaveTypeType: DeserializedType<T, 'Edm.String'>;
  /**
   * Suspended Leave Type Type.
   */
  declare suspendedLeaveTypeType: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link LeaveTypes} entity.
   */
  declare suspendedByLeaveType?: LeaveTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link LeaveTypes} entity.
   */
  declare suspendedLeaveType?: LeaveTypes<T> | null;

  constructor(_entityApi: LeaveTypeSuspensionRelationshipsApi<T>) {
    super(_entityApi);
  }
}

export interface LeaveTypeSuspensionRelationshipsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  suspendedByLeaveTypeType: DeserializedType<T, 'Edm.String'>;
  suspendedLeaveTypeType: DeserializedType<T, 'Edm.String'>;
  suspendedByLeaveType?: LeaveTypesType<T> | null;
  suspendedLeaveType?: LeaveTypesType<T> | null;
}
