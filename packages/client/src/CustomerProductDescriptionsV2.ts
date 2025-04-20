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
import type { CustomerProductDescriptionsV2Api } from './CustomerProductDescriptionsV2Api';
import { Abc } from './Abc';
import { CustomersV3, CustomersV3Type } from './CustomersV3';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';

/**
 * This class represents the entity "CustomerProductDescriptionsV2" of service "d365_metadata".
 */
export class CustomerProductDescriptionsV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomerProductDescriptionsV2Type<T>
{
  /**
   * Technical entity name for CustomerProductDescriptionsV2.
   */
  static override _entityName = 'CustomerProductDescriptionsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomerProductDescriptionsV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'ItemNumber',
    'ProductColorId',
    'ProductConfigurationId',
    'ProductSizeId',
    'ProductStyleId',
    'ProductVersionId',
    'CustomerAccountNumber',
    'ProductDescriptionCustomerGroupId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Color Id.
   */
  declare productColorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Configuration Id.
   */
  declare productConfigurationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Size Id.
   */
  declare productSizeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Style Id.
   */
  declare productStyleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Version Id.
   */
  declare productVersionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Account Number.
   */
  declare customerAccountNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Description Customer Group Id.
   */
  declare productDescriptionCustomerGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Abc Code.
   * @nullable
   */
  declare customerAbcCode?: Abc | null;
  /**
   * Customer Product Number.
   * @nullable
   */
  declare customerProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Product Description.
   * @nullable
   */
  declare customerProductDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Abc Code Note.
   * @nullable
   */
  declare customerAbcCodeNote?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link CustomersV3} entity.
   */
  declare customer?: CustomersV3<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProduct?: ReleasedProductsV2<T> | null;

  constructor(_entityApi: CustomerProductDescriptionsV2Api<T>) {
    super(_entityApi);
  }
}

export interface CustomerProductDescriptionsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  productVersionId: DeserializedType<T, 'Edm.String'>;
  customerAccountNumber: DeserializedType<T, 'Edm.String'>;
  productDescriptionCustomerGroupId: DeserializedType<T, 'Edm.String'>;
  customerAbcCode?: Abc | null;
  customerProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  customerProductDescription?: DeserializedType<T, 'Edm.String'> | null;
  customerAbcCodeNote?: DeserializedType<T, 'Edm.String'> | null;
  customer?: CustomersV3Type<T> | null;
  releasedProduct?: ReleasedProductsV2Type<T> | null;
}
