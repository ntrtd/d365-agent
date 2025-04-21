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
import type { AggregatedDemandsV2Api } from './AggregatedDemandsV2Api';
import { ReqDemPlanDemandCategory } from './ReqDemPlanDemandCategory';

/**
 * This class represents the entity "AggregatedDemandsV2" of service "d365_metadata".
 */
export class AggregatedDemandsV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AggregatedDemandsV2Type<T>
{
  /**
   * Technical entity name for AggregatedDemandsV2.
   */
  static override _entityName = 'AggregatedDemandsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AggregatedDemandsV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'DemandCategory',
    'CustomerAddressCountryRegionCode',
    'CustomerAddressStateId',
    'CustomerGroupId',
    'CustomerAccountNumber',
    'ProductAllocationKeyId',
    'ProductConfigurationId',
    'ItemNumber',
    'ProductColorId',
    'ProductSizeId',
    'ProductStyleId',
    'ProductVersionId',
    'DeliveringWarehouseId',
    'DeliveringSiteId',
    'InventoryStatusId',
    'DemandDate'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Demand Category.
   * @nullable
   */
  declare demandCategory?: ReqDemPlanDemandCategory | null;
  /**
   * Customer Address Country Region Code.
   */
  declare customerAddressCountryRegionCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Address State Id.
   */
  declare customerAddressStateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Group Id.
   */
  declare customerGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Account Number.
   */
  declare customerAccountNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Allocation Key Id.
   */
  declare productAllocationKeyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Configuration Id.
   */
  declare productConfigurationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Color Id.
   */
  declare productColorId: DeserializedType<T, 'Edm.String'>;
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
   * Delivering Warehouse Id.
   */
  declare deliveringWarehouseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Delivering Site Id.
   */
  declare deliveringSiteId: DeserializedType<T, 'Edm.String'>;
  /**
   * Inventory Status Id.
   */
  declare inventoryStatusId: DeserializedType<T, 'Edm.String'>;
  /**
   * Demand Date.
   */
  declare demandDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Demand Quantity Confidence Interval Lower Bound.
   */
  declare demandQuantityConfidenceIntervalLowerBound: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Demand Quantity Confidence Interval Upper Bound.
   */
  declare demandQuantityConfidenceIntervalUpperBound: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Demand Quantity.
   */
  declare demandQuantity: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: AggregatedDemandsV2Api<T>) {
    super(_entityApi);
  }
}

export interface AggregatedDemandsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  demandCategory?: ReqDemPlanDemandCategory | null;
  customerAddressCountryRegionCode: DeserializedType<T, 'Edm.String'>;
  customerAddressStateId: DeserializedType<T, 'Edm.String'>;
  customerGroupId: DeserializedType<T, 'Edm.String'>;
  customerAccountNumber: DeserializedType<T, 'Edm.String'>;
  productAllocationKeyId: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  productVersionId: DeserializedType<T, 'Edm.String'>;
  deliveringWarehouseId: DeserializedType<T, 'Edm.String'>;
  deliveringSiteId: DeserializedType<T, 'Edm.String'>;
  inventoryStatusId: DeserializedType<T, 'Edm.String'>;
  demandDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  demandQuantityConfidenceIntervalLowerBound: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  demandQuantityConfidenceIntervalUpperBound: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  demandQuantity: DeserializedType<T, 'Edm.Decimal'>;
}
