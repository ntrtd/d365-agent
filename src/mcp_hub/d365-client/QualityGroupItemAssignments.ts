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
import type { QualityGroupItemAssignmentsApi } from './QualityGroupItemAssignmentsApi';

/**
 * This class represents the entity "QualityGroupItemAssignments" of service "d365_metadata".
 */
export class QualityGroupItemAssignments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements QualityGroupItemAssignmentsType<T>
{
  /**
   * Technical entity name for QualityGroupItemAssignments.
   */
  static override _entityName = 'QualityGroupItemAssignments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the QualityGroupItemAssignments entity.
   */
  static _keys = ['dataAreaId', 'QualityGroupId', 'ItemNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Quality Group Id.
   */
  declare qualityGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: QualityGroupItemAssignmentsApi<T>) {
    super(_entityApi);
  }
}

export interface QualityGroupItemAssignmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  qualityGroupId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
}
