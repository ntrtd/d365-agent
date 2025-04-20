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
import type { ReleasedProductRebateAndDeductionsGroupAssignmentsApi } from './ReleasedProductRebateAndDeductionsGroupAssignmentsApi';
import {
  ProductRebateAndDeductionsGroups,
  ProductRebateAndDeductionsGroupsType
} from './ProductRebateAndDeductionsGroups';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';

/**
 * This class represents the entity "ReleasedProductRebateAndDeductionsGroupAssignments" of service "d365_metadata".
 */
export class ReleasedProductRebateAndDeductionsGroupAssignments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ReleasedProductRebateAndDeductionsGroupAssignmentsType<T>
{
  /**
   * Technical entity name for ReleasedProductRebateAndDeductionsGroupAssignments.
   */
  static override _entityName =
    'ReleasedProductRebateAndDeductionsGroupAssignments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReleasedProductRebateAndDeductionsGroupAssignments entity.
   */
  static _keys = [
    'dataAreaId',
    'ProductRebateAndDeductionsGroupId',
    'ItemNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Rebate And Deductions Group Id.
   */
  declare productRebateAndDeductionsGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link ProductRebateAndDeductionsGroups} entity.
   */
  declare releasedProductRebateAndDeductionsGroup?: ProductRebateAndDeductionsGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductV2?: ReleasedProductsV2<T> | null;

  constructor(
    _entityApi: ReleasedProductRebateAndDeductionsGroupAssignmentsApi<T>
  ) {
    super(_entityApi);
  }
}

export interface ReleasedProductRebateAndDeductionsGroupAssignmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  productRebateAndDeductionsGroupId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  releasedProductRebateAndDeductionsGroup?: ProductRebateAndDeductionsGroupsType<T> | null;
  releasedProductV2?: ReleasedProductsV2Type<T> | null;
}
