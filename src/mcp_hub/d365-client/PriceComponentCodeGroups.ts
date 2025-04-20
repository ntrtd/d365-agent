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
import type { PriceComponentCodeGroupsApi } from './PriceComponentCodeGroupsApi';
import { GupPriceComponent } from './GupPriceComponent';

/**
 * This class represents the entity "PriceComponentCodeGroups" of service "d365_metadata".
 */
export class PriceComponentCodeGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PriceComponentCodeGroupsType<T>
{
  /**
   * Technical entity name for PriceComponentCodeGroups.
   */
  static override _entityName = 'PriceComponentCodeGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PriceComponentCodeGroups entity.
   */
  static _keys = ['dataAreaId', 'PriceComponentCodeGroup'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Component Code Group.
   */
  declare priceComponentCodeGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Component.
   * @nullable
   */
  declare priceComponent?: GupPriceComponent | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PriceComponentCodeGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface PriceComponentCodeGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  priceComponentCodeGroup: DeserializedType<T, 'Edm.String'>;
  priceComponent?: GupPriceComponent | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
