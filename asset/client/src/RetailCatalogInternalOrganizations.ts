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
import type { RetailCatalogInternalOrganizationsApi } from './RetailCatalogInternalOrganizationsApi';
import { RetailCatalogs, RetailCatalogsType } from './RetailCatalogs';
import {
  RetailCatalogInternalOrganizationProductAttributeValues,
  RetailCatalogInternalOrganizationProductAttributeValuesType
} from './RetailCatalogInternalOrganizationProductAttributeValues';
import {
  RetailCatalogInternalOrganizationProductAttributeValues2,
  RetailCatalogInternalOrganizationProductAttributeValues2Type
} from './RetailCatalogInternalOrganizationProductAttributeValues2';

/**
 * This class represents the entity "RetailCatalogInternalOrganizations" of service "d365_metadata".
 */
export class RetailCatalogInternalOrganizations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailCatalogInternalOrganizationsType<T>
{
  /**
   * Technical entity name for RetailCatalogInternalOrganizations.
   */
  static override _entityName = 'RetailCatalogInternalOrganizations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailCatalogInternalOrganizations entity.
   */
  static _keys = ['CatalogNumber', 'PartyNumber'];
  /**
   * Catalog Number.
   */
  declare catalogNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link RetailCatalogs} entity.
   */
  declare retailCatalog?: RetailCatalogs<T> | null;
  /**
   * One-to-many navigation property to the {@link RetailCatalogInternalOrganizationProductAttributeValues} entity.
   */
  declare retailCatalogInternalOrganizationProductAttributeValue: RetailCatalogInternalOrganizationProductAttributeValues<T>[];
  /**
   * One-to-many navigation property to the {@link RetailCatalogInternalOrganizationProductAttributeValues2} entity.
   */
  declare retailCatalogInternalOrganizationProductAttributeValue2: RetailCatalogInternalOrganizationProductAttributeValues2<T>[];

  constructor(_entityApi: RetailCatalogInternalOrganizationsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailCatalogInternalOrganizationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  catalogNumber: DeserializedType<T, 'Edm.String'>;
  partyNumber: DeserializedType<T, 'Edm.String'>;
  retailCatalog?: RetailCatalogsType<T> | null;
  retailCatalogInternalOrganizationProductAttributeValue: RetailCatalogInternalOrganizationProductAttributeValuesType<T>[];
  retailCatalogInternalOrganizationProductAttributeValue2: RetailCatalogInternalOrganizationProductAttributeValues2Type<T>[];
}
