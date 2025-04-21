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
import type { DimAttributeHcmPositionsApi } from './DimAttributeHcmPositionsApi';

/**
 * This class represents the entity "DimAttributeHcmPositions" of service "d365_metadata".
 */
export class DimAttributeHcmPositions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DimAttributeHcmPositionsType<T>
{
  /**
   * Technical entity name for DimAttributeHcmPositions.
   */
  static override _entityName = 'DimAttributeHcmPositions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DimAttributeHcmPositions entity.
   */
  static _keys = ['Value'];
  /**
   * Value.
   */
  declare value: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DimAttributeHcmPositionsApi<T>) {
    super(_entityApi);
  }
}

export interface DimAttributeHcmPositionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  value: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
