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
import type { ApportionmentMappingsApi } from './ApportionmentMappingsApi';
import { ItmCostApportionmentMethod } from './ItmCostApportionmentMethod';

/**
 * This class represents the entity "ApportionmentMappings" of service "d365_metadata".
 */
export class ApportionmentMappings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ApportionmentMappingsType<T>
{
  /**
   * Technical entity name for ApportionmentMappings.
   */
  static override _entityName = 'ApportionmentMappings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ApportionmentMappings entity.
   */
  static _keys = ['dataAreaId', 'ShipCostTypeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ship Cost Type Id.
   */
  declare shipCostTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Apportionment Method.
   * @nullable
   */
  declare apportionmentMethod?: ItmCostApportionmentMethod | null;

  constructor(_entityApi: ApportionmentMappingsApi<T>) {
    super(_entityApi);
  }
}

export interface ApportionmentMappingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  shipCostTypeId: DeserializedType<T, 'Edm.String'>;
  apportionmentMethod?: ItmCostApportionmentMethod | null;
}
