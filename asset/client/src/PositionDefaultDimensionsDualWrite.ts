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
import type { PositionDefaultDimensionsDualWriteApi } from './PositionDefaultDimensionsDualWriteApi';
import {
  JobPositionsDualWrite,
  JobPositionsDualWriteType
} from './JobPositionsDualWrite';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "PositionDefaultDimensionsDualWrite" of service "d365_metadata".
 */
export class PositionDefaultDimensionsDualWrite<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PositionDefaultDimensionsDualWriteType<T>
{
  /**
   * Technical entity name for PositionDefaultDimensionsDualWrite.
   */
  static override _entityName = 'PositionDefaultDimensionsDualWrite';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PositionDefaultDimensionsDualWrite entity.
   */
  static _keys = ['dataAreaId', 'PositionId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Position Id.
   */
  declare positionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Dimension Display Value.
   * @nullable
   */
  declare dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Distribution Template Id.
   * @nullable
   */
  declare distributionTemplateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Legal Entity Data Area.
   * @nullable
   */
  declare legalEntityDataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link JobPositionsDualWrite} entity.
   */
  declare jobPositionDualWrite?: JobPositionsDualWrite<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: PositionDefaultDimensionsDualWriteApi<T>) {
    super(_entityApi);
  }
}

export interface PositionDefaultDimensionsDualWriteType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  positionId: DeserializedType<T, 'Edm.String'>;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  distributionTemplateId?: DeserializedType<T, 'Edm.String'> | null;
  legalEntityDataArea?: DeserializedType<T, 'Edm.String'> | null;
  jobPositionDualWrite?: JobPositionsDualWriteType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
