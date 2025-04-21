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
import type { DimAttributeOmCostCentersApi } from './DimAttributeOmCostCentersApi';

/**
 * This class represents the entity "DimAttributeOMCostCenters" of service "d365_metadata".
 */
export class DimAttributeOmCostCenters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DimAttributeOmCostCentersType<T>
{
  /**
   * Technical entity name for DimAttributeOmCostCenters.
   */
  static override _entityName = 'DimAttributeOMCostCenters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DimAttributeOmCostCenters entity.
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

  constructor(_entityApi: DimAttributeOmCostCentersApi<T>) {
    super(_entityApi);
  }
}

export interface DimAttributeOmCostCentersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  value: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
