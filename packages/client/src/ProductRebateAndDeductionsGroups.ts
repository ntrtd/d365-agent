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
import type { ProductRebateAndDeductionsGroupsApi } from './ProductRebateAndDeductionsGroupsApi';
import {
  RebateAndDeductionAgreementHeaders,
  RebateAndDeductionAgreementHeadersType
} from './RebateAndDeductionAgreementHeaders';
import {
  ReleasedProductRebateAndDeductionsGroupAssignments,
  ReleasedProductRebateAndDeductionsGroupAssignmentsType
} from './ReleasedProductRebateAndDeductionsGroupAssignments';

/**
 * This class represents the entity "ProductRebateAndDeductionsGroups" of service "d365_metadata".
 */
export class ProductRebateAndDeductionsGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductRebateAndDeductionsGroupsType<T>
{
  /**
   * Technical entity name for ProductRebateAndDeductionsGroups.
   */
  static override _entityName = 'ProductRebateAndDeductionsGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductRebateAndDeductionsGroups entity.
   */
  static _keys = ['dataAreaId', 'GroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Id.
   */
  declare groupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Description.
   * @nullable
   */
  declare groupDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link RebateAndDeductionAgreementHeaders} entity.
   */
  declare rebateAndDeductionsAgreementHeaders: RebateAndDeductionAgreementHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link ReleasedProductRebateAndDeductionsGroupAssignments} entity.
   */
  declare releasedProductRebateAndDeductionsGroupAssignments: ReleasedProductRebateAndDeductionsGroupAssignments<T>[];

  constructor(_entityApi: ProductRebateAndDeductionsGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductRebateAndDeductionsGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupId: DeserializedType<T, 'Edm.String'>;
  groupDescription?: DeserializedType<T, 'Edm.String'> | null;
  rebateAndDeductionsAgreementHeaders: RebateAndDeductionAgreementHeadersType<T>[];
  releasedProductRebateAndDeductionsGroupAssignments: ReleasedProductRebateAndDeductionsGroupAssignmentsType<T>[];
}
