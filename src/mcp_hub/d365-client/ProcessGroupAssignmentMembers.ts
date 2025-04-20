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
import type { ProcessGroupAssignmentMembersApi } from './ProcessGroupAssignmentMembersApi';
import {
  ProcessGroupAssignments,
  ProcessGroupAssignmentsType
} from './ProcessGroupAssignments';
import { PositionsV2, PositionsV2Type } from './PositionsV2';

/**
 * This class represents the entity "ProcessGroupAssignmentMembers" of service "d365_metadata".
 */
export class ProcessGroupAssignmentMembers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProcessGroupAssignmentMembersType<T>
{
  /**
   * Technical entity name for ProcessGroupAssignmentMembers.
   */
  static override _entityName = 'ProcessGroupAssignmentMembers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProcessGroupAssignmentMembers entity.
   */
  static _keys = ['GroupName', 'PositionId'];
  /**
   * Group Name.
   */
  declare groupName: DeserializedType<T, 'Edm.String'>;
  /**
   * Position Id.
   */
  declare positionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Title.
   * @nullable
   */
  declare title?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker Name.
   * @nullable
   */
  declare workerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ProcessGroupAssignments} entity.
   */
  declare groupAssignment?: ProcessGroupAssignments<T> | null;
  /**
   * One-to-one navigation property to the {@link PositionsV2} entity.
   */
  declare position?: PositionsV2<T> | null;

  constructor(_entityApi: ProcessGroupAssignmentMembersApi<T>) {
    super(_entityApi);
  }
}

export interface ProcessGroupAssignmentMembersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  groupName: DeserializedType<T, 'Edm.String'>;
  positionId: DeserializedType<T, 'Edm.String'>;
  title?: DeserializedType<T, 'Edm.String'> | null;
  workerName?: DeserializedType<T, 'Edm.String'> | null;
  groupAssignment?: ProcessGroupAssignmentsType<T> | null;
  position?: PositionsV2Type<T> | null;
}
