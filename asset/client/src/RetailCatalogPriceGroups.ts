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
import type { RetailCatalogPriceGroupsApi } from './RetailCatalogPriceGroupsApi';
import { RetailCatalogs, RetailCatalogsType } from './RetailCatalogs';

/**
 * This class represents the entity "RetailCatalogPriceGroups" of service "d365_metadata".
 */
export class RetailCatalogPriceGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailCatalogPriceGroupsType<T>
{
  /**
   * Technical entity name for RetailCatalogPriceGroups.
   */
  static override _entityName = 'RetailCatalogPriceGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailCatalogPriceGroups entity.
   */
  static _keys = ['CatalogNumber', 'PriceGroupLegalEntity', 'PriceGroupId'];
  /**
   * Catalog Number.
   */
  declare catalogNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Group Legal Entity.
   */
  declare priceGroupLegalEntity: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Group Id.
   */
  declare priceGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link RetailCatalogs} entity.
   */
  declare retailCatalog?: RetailCatalogs<T> | null;

  constructor(_entityApi: RetailCatalogPriceGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailCatalogPriceGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  catalogNumber: DeserializedType<T, 'Edm.String'>;
  priceGroupLegalEntity: DeserializedType<T, 'Edm.String'>;
  priceGroupId: DeserializedType<T, 'Edm.String'>;
  retailCatalog?: RetailCatalogsType<T> | null;
}
