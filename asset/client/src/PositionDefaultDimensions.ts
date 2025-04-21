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
import type { PositionDefaultDimensionsApi } from './PositionDefaultDimensionsApi';
import { PositionsV2, PositionsV2Type } from './PositionsV2';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "PositionDefaultDimensions" of service "d365_metadata".
 */
export class PositionDefaultDimensions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PositionDefaultDimensionsType<T>
{
  /**
   * Technical entity name for PositionDefaultDimensions.
   */
  static override _entityName = 'PositionDefaultDimensions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PositionDefaultDimensions entity.
   */
  static _keys = ['dataAreaId', 'PositionId', 'LegalEntityDataArea'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Position Id.
   */
  declare positionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Data Area.
   */
  declare legalEntityDataArea: DeserializedType<T, 'Edm.String'>;
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
   * One-to-one navigation property to the {@link PositionsV2} entity.
   */
  declare position?: PositionsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-many navigation property to the {@link PositionsV2} entity.
   */
  declare positionV2: PositionsV2<T>[];

  constructor(_entityApi: PositionDefaultDimensionsApi<T>) {
    super(_entityApi);
  }
}

export interface PositionDefaultDimensionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  positionId: DeserializedType<T, 'Edm.String'>;
  legalEntityDataArea: DeserializedType<T, 'Edm.String'>;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  distributionTemplateId?: DeserializedType<T, 'Edm.String'> | null;
  position?: PositionsV2Type<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
  positionV2: PositionsV2Type<T>[];
}
