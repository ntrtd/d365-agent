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
import type { OnboardProcessTasksDualWriteApi } from './OnboardProcessTasksDualWriteApi';
import { HcmOnboardAssignmentType } from './HcmOnboardAssignmentType';
import { ProcessTasks, ProcessTasksType } from './ProcessTasks';
import { PositionsV2, PositionsV2Type } from './PositionsV2';

/**
 * This class represents the entity "OnboardProcessTasksDualWrite" of service "d365_metadata".
 */
export class OnboardProcessTasksDualWrite<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OnboardProcessTasksDualWriteType<T>
{
  /**
   * Technical entity name for OnboardProcessTasksDualWrite.
   */
  static override _entityName = 'OnboardProcessTasksDualWrite';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OnboardProcessTasksDualWrite entity.
   */
  static _keys = ['TaskId'];
  /**
   * Task Id.
   */
  declare taskId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Assignment Type.
   * @nullable
   */
  declare assignmentType?: HcmOnboardAssignmentType | null;
  /**
   * Assigned Position Id.
   * @nullable
   */
  declare assignedPositionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ProcessTasks} entity.
   */
  declare onboardTask?: ProcessTasks<T> | null;
  /**
   * One-to-one navigation property to the {@link PositionsV2} entity.
   */
  declare assignedPosition?: PositionsV2<T> | null;

  constructor(_entityApi: OnboardProcessTasksDualWriteApi<T>) {
    super(_entityApi);
  }
}

export interface OnboardProcessTasksDualWriteType<
  T extends DeSerializers = DefaultDeSerializers
> {
  taskId: DeserializedType<T, 'Edm.Guid'>;
  assignmentType?: HcmOnboardAssignmentType | null;
  assignedPositionId?: DeserializedType<T, 'Edm.String'> | null;
  onboardTask?: ProcessTasksType<T> | null;
  assignedPosition?: PositionsV2Type<T> | null;
}
