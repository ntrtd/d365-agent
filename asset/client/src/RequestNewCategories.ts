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
import type { RequestNewCategoriesApi } from './RequestNewCategoriesApi';
import {
  VendorRequestNewCategories,
  VendorRequestNewCategoriesType
} from './VendorRequestNewCategories';

/**
 * This class represents the entity "RequestNewCategories" of service "d365_metadata".
 */
export class RequestNewCategories<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RequestNewCategoriesType<T>
{
  /**
   * Technical entity name for RequestNewCategories.
   */
  static override _entityName = 'RequestNewCategories';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RequestNewCategories entity.
   */
  static _keys = [
    'dataAreaId',
    'VendRequest_RequestId',
    'EcoResCategory_Name',
    'EcoResCategoryHierarchy_Name',
    'OMOperatingUnit_PartyNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Vend Request Request Id.
   */
  declare vendRequestRequestId: DeserializedType<T, 'Edm.String'>;
  /**
   * Eco Res Category Name.
   */
  declare ecoResCategoryName: DeserializedType<T, 'Edm.String'>;
  /**
   * Eco Res Category Hierarchy Name.
   */
  declare ecoResCategoryHierarchyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Om Operating Unit Party Number.
   */
  declare omOperatingUnitPartyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Vend Request.
   */
  declare vendRequest: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Operating Unit.
   */
  declare operatingUnit: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Category.
   */
  declare category: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Eco Res Category Category Hierarchy.
   */
  declare ecoResCategoryCategoryHierarchy: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link VendorRequestNewCategories} entity.
   */
  declare vendorRequestNewCategory?: VendorRequestNewCategories<T> | null;

  constructor(_entityApi: RequestNewCategoriesApi<T>) {
    super(_entityApi);
  }
}

export interface RequestNewCategoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  vendRequestRequestId: DeserializedType<T, 'Edm.String'>;
  ecoResCategoryName: DeserializedType<T, 'Edm.String'>;
  ecoResCategoryHierarchyName: DeserializedType<T, 'Edm.String'>;
  omOperatingUnitPartyNumber: DeserializedType<T, 'Edm.String'>;
  vendRequest: DeserializedType<T, 'Edm.Int64'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  operatingUnit: DeserializedType<T, 'Edm.Int64'>;
  category: DeserializedType<T, 'Edm.Int64'>;
  ecoResCategoryCategoryHierarchy: DeserializedType<T, 'Edm.Int64'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vendorRequestNewCategory?: VendorRequestNewCategoriesType<T> | null;
}
