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
import type { RetailCatalogsApi } from './RetailCatalogsApi';
import { CatalogState } from './CatalogState';
import { NoYes } from './NoYes';
import {
  RetailCatalogProductAttributeValues,
  RetailCatalogProductAttributeValuesType
} from './RetailCatalogProductAttributeValues';
import {
  RetailCatalogInternalOrganizations,
  RetailCatalogInternalOrganizationsType
} from './RetailCatalogInternalOrganizations';
import {
  RetailCatalogProducts,
  RetailCatalogProductsType
} from './RetailCatalogProducts';
import {
  RetailCatalogPriceGroups,
  RetailCatalogPriceGroupsType
} from './RetailCatalogPriceGroups';
import {
  RetailCatalogTranslations,
  RetailCatalogTranslationsType
} from './RetailCatalogTranslations';
import {
  RetailCatalogInternalOrganizationProductAttributeValues,
  RetailCatalogInternalOrganizationProductAttributeValuesType
} from './RetailCatalogInternalOrganizationProductAttributeValues';
import { People, PeopleType } from './People';
import {
  RetailCatalogInternalOrganizationProductAttributeValues2,
  RetailCatalogInternalOrganizationProductAttributeValues2Type
} from './RetailCatalogInternalOrganizationProductAttributeValues2';
import {
  CallCenterCatalogCoupons,
  CallCenterCatalogCouponsType
} from './CallCenterCatalogCoupons';

/**
 * This class represents the entity "RetailCatalogs" of service "d365_metadata".
 */
export class RetailCatalogs<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailCatalogsType<T>
{
  /**
   * Technical entity name for RetailCatalogs.
   */
  static override _entityName = 'RetailCatalogs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailCatalogs entity.
   */
  static _keys = ['CatalogNumber'];
  /**
   * Catalog Number.
   */
  declare catalogNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Language.
   * @nullable
   */
  declare language?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid From Date.
   */
  declare validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Friendly Name.
   * @nullable
   */
  declare friendlyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category Hierarchy.
   */
  declare categoryHierarchy: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Valid From Date Time.
   */
  declare validFromDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Published Expiration Date.
   */
  declare publishedExpirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Last Published Date Time.
   */
  declare lastPublishedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Published Effective Date.
   */
  declare publishedEffectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: CatalogState | null;
  /**
   * Is Snapshot Enabled.
   * @nullable
   */
  declare isSnapshotEnabled?: NoYes | null;
  /**
   * Valid To Date.
   */
  declare validToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Owner Party Number.
   * @nullable
   */
  declare ownerPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link RetailCatalogProductAttributeValues} entity.
   */
  declare retailCatalogProductAttributeValue: RetailCatalogProductAttributeValues<T>[];
  /**
   * One-to-many navigation property to the {@link RetailCatalogInternalOrganizations} entity.
   */
  declare retailCatalogInternalOrganization: RetailCatalogInternalOrganizations<T>[];
  /**
   * One-to-many navigation property to the {@link RetailCatalogProducts} entity.
   */
  declare retailCatalogProduct: RetailCatalogProducts<T>[];
  /**
   * One-to-many navigation property to the {@link RetailCatalogPriceGroups} entity.
   */
  declare retailCatalogPriceGroup: RetailCatalogPriceGroups<T>[];
  /**
   * One-to-many navigation property to the {@link RetailCatalogTranslations} entity.
   */
  declare retailCatalogTranslation: RetailCatalogTranslations<T>[];
  /**
   * One-to-many navigation property to the {@link RetailCatalogInternalOrganizationProductAttributeValues} entity.
   */
  declare retailCatalogInternalOrganizationProductAttributeValue: RetailCatalogInternalOrganizationProductAttributeValues<T>[];
  /**
   * One-to-one navigation property to the {@link People} entity.
   */
  declare person?: People<T> | null;
  /**
   * One-to-many navigation property to the {@link RetailCatalogInternalOrganizationProductAttributeValues2} entity.
   */
  declare retailCatalogInternalOrganizationProductAttributeValue2: RetailCatalogInternalOrganizationProductAttributeValues2<T>[];
  /**
   * One-to-many navigation property to the {@link CallCenterCatalogCoupons} entity.
   */
  declare callCenterCatalogCoupon: CallCenterCatalogCoupons<T>[];

  constructor(_entityApi: RetailCatalogsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailCatalogsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  catalogNumber: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  language?: DeserializedType<T, 'Edm.String'> | null;
  validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  friendlyName?: DeserializedType<T, 'Edm.String'> | null;
  categoryHierarchy: DeserializedType<T, 'Edm.Int64'>;
  validFromDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  publishedExpirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lastPublishedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  publishedEffectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  status?: CatalogState | null;
  isSnapshotEnabled?: NoYes | null;
  validToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  ownerPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  retailCatalogProductAttributeValue: RetailCatalogProductAttributeValuesType<T>[];
  retailCatalogInternalOrganization: RetailCatalogInternalOrganizationsType<T>[];
  retailCatalogProduct: RetailCatalogProductsType<T>[];
  retailCatalogPriceGroup: RetailCatalogPriceGroupsType<T>[];
  retailCatalogTranslation: RetailCatalogTranslationsType<T>[];
  retailCatalogInternalOrganizationProductAttributeValue: RetailCatalogInternalOrganizationProductAttributeValuesType<T>[];
  person?: PeopleType<T> | null;
  retailCatalogInternalOrganizationProductAttributeValue2: RetailCatalogInternalOrganizationProductAttributeValues2Type<T>[];
  callCenterCatalogCoupon: CallCenterCatalogCouponsType<T>[];
}
