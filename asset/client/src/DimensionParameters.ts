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
import type { DimensionParametersApi } from './DimensionParametersApi';
import { DimensionSegmentDelimiter } from './DimensionSegmentDelimiter';

/**
 * This class represents the entity "DimensionParameters" of service "d365_metadata".
 */
export class DimensionParameters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DimensionParametersType<T>
{
  /**
   * Technical entity name for DimensionParameters.
   */
  static override _entityName = 'DimensionParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DimensionParameters entity.
   */
  static _keys = ['Key'];
  /**
   * Key.
   */
  declare key: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Dimension Segment Delimiter.
   * @nullable
   */
  declare dimensionSegmentDelimiter?: DimensionSegmentDelimiter | null;

  constructor(_entityApi: DimensionParametersApi<T>) {
    super(_entityApi);
  }
}

export interface DimensionParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  key: DeserializedType<T, 'Edm.Int32'>;
  dimensionSegmentDelimiter?: DimensionSegmentDelimiter | null;
}
