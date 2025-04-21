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
import type { ItemPriceToleranceGroupsApi } from './ItemPriceToleranceGroupsApi';
import {
  VendInvoicePriceTolerances,
  VendInvoicePriceTolerancesType
} from './VendInvoicePriceTolerances';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';

/**
 * This class represents the entity "ItemPriceToleranceGroups" of service "d365_metadata".
 */
export class ItemPriceToleranceGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ItemPriceToleranceGroupsType<T>
{
  /**
   * Technical entity name for ItemPriceToleranceGroups.
   */
  static override _entityName = 'ItemPriceToleranceGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ItemPriceToleranceGroups entity.
   */
  static _keys = ['dataAreaId', 'GroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Id.
   */
  declare groupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link VendInvoicePriceTolerances} entity.
   */
  declare vendInvoicePriceTolerance: VendInvoicePriceTolerances<T>[];
  /**
   * One-to-many navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductsV2: ReleasedProductsV2<T>[];

  constructor(_entityApi: ItemPriceToleranceGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface ItemPriceToleranceGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  vendInvoicePriceTolerance: VendInvoicePriceTolerancesType<T>[];
  releasedProductsV2: ReleasedProductsV2Type<T>[];
}
