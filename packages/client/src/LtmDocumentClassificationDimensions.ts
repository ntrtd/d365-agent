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
import type { LtmDocumentClassificationDimensionsApi } from './LtmDocumentClassificationDimensionsApi';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "LTMDocumentClassificationDimensions" of service "d365_metadata".
 */
export class LtmDocumentClassificationDimensions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LtmDocumentClassificationDimensionsType<T>
{
  /**
   * Technical entity name for LtmDocumentClassificationDimensions.
   */
  static override _entityName = 'LTMDocumentClassificationDimensions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmDocumentClassificationDimensions entity.
   */
  static _keys = ['dataAreaId', 'DocumentClassificationId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Document Classification Id.
   */
  declare documentClassificationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSetEntity?: DimensionSets<T> | null;

  constructor(_entityApi: LtmDocumentClassificationDimensionsApi<T>) {
    super(_entityApi);
  }
}

export interface LtmDocumentClassificationDimensionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  documentClassificationId: DeserializedType<T, 'Edm.String'>;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  dimensionSetEntity?: DimensionSetsType<T> | null;
}
