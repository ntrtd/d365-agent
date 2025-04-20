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
import type { DimAttributeOmDepartmentsApi } from './DimAttributeOmDepartmentsApi';

/**
 * This class represents the entity "DimAttributeOMDepartments" of service "d365_metadata".
 */
export class DimAttributeOmDepartments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DimAttributeOmDepartmentsType<T>
{
  /**
   * Technical entity name for DimAttributeOmDepartments.
   */
  static override _entityName = 'DimAttributeOMDepartments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DimAttributeOmDepartments entity.
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

  constructor(_entityApi: DimAttributeOmDepartmentsApi<T>) {
    super(_entityApi);
  }
}

export interface DimAttributeOmDepartmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  value: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
