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
import type { RetailInternalOrganizationsApi } from './RetailInternalOrganizationsApi';
import { NoYes } from './NoYes';
import {
  RetailInternalOrganizationProductAttributeValues2,
  RetailInternalOrganizationProductAttributeValues2Type
} from './RetailInternalOrganizationProductAttributeValues2';
import {
  RetailCatalogInternalOrganizationProductAttributeValues2,
  RetailCatalogInternalOrganizationProductAttributeValues2Type
} from './RetailCatalogInternalOrganizationProductAttributeValues2';
import {
  RetailInternalOrganizationAttributeGroups,
  RetailInternalOrganizationAttributeGroupsType
} from './RetailInternalOrganizationAttributeGroups';
import {
  RetailInternalOrganizationProductAttributeValues,
  RetailInternalOrganizationProductAttributeValuesType
} from './RetailInternalOrganizationProductAttributeValues';

/**
 * This class represents the entity "RetailInternalOrganizations" of service "d365_metadata".
 */
export class RetailInternalOrganizations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailInternalOrganizationsType<T>
{
  /**
   * Technical entity name for RetailInternalOrganizations.
   */
  static override _entityName = 'RetailInternalOrganizations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailInternalOrganizations entity.
   */
  static _keys = ['PartyNumber'];
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Inherit Enabled.
   * @nullable
   */
  declare inheritEnabled?: NoYes | null;
  /**
   * Organization Name.
   * @nullable
   */
  declare organizationName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category Hierarchy Name.
   * @nullable
   */
  declare categoryHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link RetailInternalOrganizationProductAttributeValues2} entity.
   */
  declare retailInternalOrganizationProductAttributeValue2: RetailInternalOrganizationProductAttributeValues2<T>[];
  /**
   * One-to-many navigation property to the {@link RetailCatalogInternalOrganizationProductAttributeValues2} entity.
   */
  declare retailCatalogInternalOrganizationProductAttributeValue2: RetailCatalogInternalOrganizationProductAttributeValues2<T>[];
  /**
   * One-to-many navigation property to the {@link RetailInternalOrganizationAttributeGroups} entity.
   */
  declare retailInternalOrganizationAttributeGroup: RetailInternalOrganizationAttributeGroups<T>[];
  /**
   * One-to-many navigation property to the {@link RetailInternalOrganizationProductAttributeValues} entity.
   */
  declare retailInternalOrganizationProductAttributeValue: RetailInternalOrganizationProductAttributeValues<T>[];

  constructor(_entityApi: RetailInternalOrganizationsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailInternalOrganizationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  partyNumber: DeserializedType<T, 'Edm.String'>;
  inheritEnabled?: NoYes | null;
  organizationName?: DeserializedType<T, 'Edm.String'> | null;
  categoryHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  retailInternalOrganizationProductAttributeValue2: RetailInternalOrganizationProductAttributeValues2Type<T>[];
  retailCatalogInternalOrganizationProductAttributeValue2: RetailCatalogInternalOrganizationProductAttributeValues2Type<T>[];
  retailInternalOrganizationAttributeGroup: RetailInternalOrganizationAttributeGroupsType<T>[];
  retailInternalOrganizationProductAttributeValue: RetailInternalOrganizationProductAttributeValuesType<T>[];
}
