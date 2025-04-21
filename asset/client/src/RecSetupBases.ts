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
import type { RecSetupBasesApi } from './RecSetupBasesApi';
import { ProductGroups, ProductGroupsType } from './ProductGroups';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';

/**
 * This class represents the entity "RecSetupBases" of service "d365_metadata".
 */
export class RecSetupBases<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RecSetupBasesType<T>
{
  /**
   * Technical entity name for RecSetupBases.
   */
  static override _entityName = 'RecSetupBases';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RecSetupBases entity.
   */
  static _keys = ['dataAreaId', 'ItemId', 'ItemGroup'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Id.
   */
  declare itemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Group.
   */
  declare itemGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ProductGroups} entity.
   */
  declare itemProductGroup?: ProductGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare item?: ReleasedProductsV2<T> | null;

  constructor(_entityApi: RecSetupBasesApi<T>) {
    super(_entityApi);
  }
}

export interface RecSetupBasesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemId: DeserializedType<T, 'Edm.String'>;
  itemGroup: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  itemProductGroup?: ProductGroupsType<T> | null;
  item?: ReleasedProductsV2Type<T> | null;
}
