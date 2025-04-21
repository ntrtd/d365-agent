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
import type { ShipCustomsDescriptionsApi } from './ShipCustomsDescriptionsApi';

/**
 * This class represents the entity "ShipCustomsDescriptions" of service "d365_metadata".
 */
export class ShipCustomsDescriptions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ShipCustomsDescriptionsType<T>
{
  /**
   * Technical entity name for ShipCustomsDescriptions.
   */
  static override _entityName = 'ShipCustomsDescriptions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ShipCustomsDescriptions entity.
   */
  static _keys = ['dataAreaId', 'CustomsDescription'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Customs Description.
   */
  declare customsDescription: DeserializedType<T, 'Edm.String'>;
  /**
   * Detailed Customs Description.
   * @nullable
   */
  declare detailedCustomsDescription?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ShipCustomsDescriptionsApi<T>) {
    super(_entityApi);
  }
}

export interface ShipCustomsDescriptionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  customsDescription: DeserializedType<T, 'Edm.String'>;
  detailedCustomsDescription?: DeserializedType<T, 'Edm.String'> | null;
}
