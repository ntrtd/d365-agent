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
import type { DimAttributeRetailTerminalsApi } from './DimAttributeRetailTerminalsApi';

/**
 * This class represents the entity "DimAttributeRetailTerminals" of service "d365_metadata".
 */
export class DimAttributeRetailTerminals<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DimAttributeRetailTerminalsType<T>
{
  /**
   * Technical entity name for DimAttributeRetailTerminals.
   */
  static override _entityName = 'DimAttributeRetailTerminals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DimAttributeRetailTerminals entity.
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

  constructor(_entityApi: DimAttributeRetailTerminalsApi<T>) {
    super(_entityApi);
  }
}

export interface DimAttributeRetailTerminalsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  value: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
