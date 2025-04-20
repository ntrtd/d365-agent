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
import type { DimAttributeOmBusinessUnitsApi } from './DimAttributeOmBusinessUnitsApi';

/**
 * This class represents the entity "DimAttributeOMBusinessUnits" of service "d365_metadata".
 */
export class DimAttributeOmBusinessUnits<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DimAttributeOmBusinessUnitsType<T>
{
  /**
   * Technical entity name for DimAttributeOmBusinessUnits.
   */
  static override _entityName = 'DimAttributeOMBusinessUnits';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DimAttributeOmBusinessUnits entity.
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

  constructor(_entityApi: DimAttributeOmBusinessUnitsApi<T>) {
    super(_entityApi);
  }
}

export interface DimAttributeOmBusinessUnitsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  value: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
