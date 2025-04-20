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
import type { QualityTestGroupsApi } from './QualityTestGroupsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "QualityTestGroups" of service "d365_metadata".
 */
export class QualityTestGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements QualityTestGroupsType<T>
{
  /**
   * Technical entity name for QualityTestGroups.
   */
  static override _entityName = 'QualityTestGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the QualityTestGroups entity.
   */
  static _keys = ['dataAreaId', 'QualityTestGroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Quality Test Group Id.
   */
  declare qualityTestGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Batch Attribute Value Defaulted With Test Measurement.
   * @nullable
   */
  declare isBatchAttributeValueDefaultedWithTestMeasurement?: NoYes | null;
  /**
   * Acceptable Quality Level Percentage.
   */
  declare acceptableQualityLevelPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Passed Quality Order Inventory Status Id.
   * @nullable
   */
  declare passedQualityOrderInventoryStatusId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Failed Quality Order Inventory Status Id.
   * @nullable
   */
  declare failedQualityOrderInventoryStatusId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Failed Quality Order Batch Disposition Code.
   * @nullable
   */
  declare failedQualityOrderBatchDispositionCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Inventory Status Defaulted With Test Measurement.
   * @nullable
   */
  declare isInventoryStatusDefaultedWithTestMeasurement?: NoYes | null;
  /**
   * Item Sampling Id.
   * @nullable
   */
  declare itemSamplingId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Destructive Test.
   * @nullable
   */
  declare isDestructiveTest?: NoYes | null;
  /**
   * Is Batch Disposition Status Defaulted With Test Measurement.
   * @nullable
   */
  declare isBatchDispositionStatusDefaultedWithTestMeasurement?: NoYes | null;
  /**
   * Passed Quality Order Batch Disposition Code.
   * @nullable
   */
  declare passedQualityOrderBatchDispositionCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: QualityTestGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface QualityTestGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  qualityTestGroupId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  isBatchAttributeValueDefaultedWithTestMeasurement?: NoYes | null;
  acceptableQualityLevelPercentage: DeserializedType<T, 'Edm.Decimal'>;
  passedQualityOrderInventoryStatusId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  failedQualityOrderInventoryStatusId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  failedQualityOrderBatchDispositionCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  isInventoryStatusDefaultedWithTestMeasurement?: NoYes | null;
  itemSamplingId?: DeserializedType<T, 'Edm.String'> | null;
  isDestructiveTest?: NoYes | null;
  isBatchDispositionStatusDefaultedWithTestMeasurement?: NoYes | null;
  passedQualityOrderBatchDispositionCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
}
