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
import type { ProspectiveVendorRegistrationProcurementCategoriesApi } from './ProspectiveVendorRegistrationProcurementCategoriesApi';
import { VendCategoryStatus } from './VendCategoryStatus';

/**
 * This class represents the entity "ProspectiveVendorRegistrationProcurementCategories" of service "d365_metadata".
 */
export class ProspectiveVendorRegistrationProcurementCategories<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProspectiveVendorRegistrationProcurementCategoriesType<T>
{
  /**
   * Technical entity name for ProspectiveVendorRegistrationProcurementCategories.
   */
  static override _entityName =
    'ProspectiveVendorRegistrationProcurementCategories';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProspectiveVendorRegistrationProcurementCategories entity.
   */
  static _keys = [
    'dataAreaId',
    'VendorRegistrationId',
    'CategoryName',
    'CategoryHierarchyName'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Vendor Registration Id.
   */
  declare vendorRegistrationId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Category Name.
   */
  declare categoryName: DeserializedType<T, 'Edm.String'>;
  /**
   * Category Hierarchy Name.
   */
  declare categoryHierarchyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Contact Person Email Address.
   * @nullable
   */
  declare contactPersonEmailAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category Status.
   * @nullable
   */
  declare categoryStatus?: VendCategoryStatus | null;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(
    _entityApi: ProspectiveVendorRegistrationProcurementCategoriesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface ProspectiveVendorRegistrationProcurementCategoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  vendorRegistrationId: DeserializedType<T, 'Edm.Int64'>;
  categoryName: DeserializedType<T, 'Edm.String'>;
  categoryHierarchyName: DeserializedType<T, 'Edm.String'>;
  contactPersonEmailAddress?: DeserializedType<T, 'Edm.String'> | null;
  categoryStatus?: VendCategoryStatus | null;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
