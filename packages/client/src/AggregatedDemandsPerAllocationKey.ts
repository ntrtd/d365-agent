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
import type { AggregatedDemandsPerAllocationKeyApi } from './AggregatedDemandsPerAllocationKeyApi';
import { ReqDemPlanDemandCategory } from './ReqDemPlanDemandCategory';

/**
 * This class represents the entity "AggregatedDemandsPerAllocationKey" of service "d365_metadata".
 */
export class AggregatedDemandsPerAllocationKey<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AggregatedDemandsPerAllocationKeyType<T>
{
  /**
   * Technical entity name for AggregatedDemandsPerAllocationKey.
   */
  static override _entityName = 'AggregatedDemandsPerAllocationKey';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AggregatedDemandsPerAllocationKey entity.
   */
  static _keys = [
    'dataAreaId',
    'DemandCategory',
    'DeliveringSiteId',
    'ProductAllocationKeyId',
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
   * Delivering Site Id.
   */
  declare deliveringSiteId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Allocation Key Id.
   */
  declare productAllocationKeyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Demand Date.
   */
  declare demandDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
  /**
   * Demand Quantity Confidence Interval Lower Bound.
   */
  declare demandQuantityConfidenceIntervalLowerBound: DeserializedType<
    T,
    'Edm.Decimal'
  >;

  constructor(_entityApi: AggregatedDemandsPerAllocationKeyApi<T>) {
    super(_entityApi);
  }
}

export interface AggregatedDemandsPerAllocationKeyType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  demandCategory?: ReqDemPlanDemandCategory | null;
  deliveringSiteId: DeserializedType<T, 'Edm.String'>;
  productAllocationKeyId: DeserializedType<T, 'Edm.String'>;
  demandDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  demandQuantityConfidenceIntervalUpperBound: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  demandQuantity: DeserializedType<T, 'Edm.Decimal'>;
  demandQuantityConfidenceIntervalLowerBound: DeserializedType<
    T,
    'Edm.Decimal'
  >;
}
