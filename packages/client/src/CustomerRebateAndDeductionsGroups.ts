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
import type { CustomerRebateAndDeductionsGroupsApi } from './CustomerRebateAndDeductionsGroupsApi';
import {
  RebateAndDeductionAgreementHeaders,
  RebateAndDeductionAgreementHeadersType
} from './RebateAndDeductionAgreementHeaders';
import {
  CustomerRebateAndDeductionsGroupAssignments,
  CustomerRebateAndDeductionsGroupAssignmentsType
} from './CustomerRebateAndDeductionsGroupAssignments';

/**
 * This class represents the entity "CustomerRebateAndDeductionsGroups" of service "d365_metadata".
 */
export class CustomerRebateAndDeductionsGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomerRebateAndDeductionsGroupsType<T>
{
  /**
   * Technical entity name for CustomerRebateAndDeductionsGroups.
   */
  static override _entityName = 'CustomerRebateAndDeductionsGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomerRebateAndDeductionsGroups entity.
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
   * One-to-many navigation property to the {@link CustomerRebateAndDeductionsGroupAssignments} entity.
   */
  declare customerRebateAndDeductionsGroupAssignments: CustomerRebateAndDeductionsGroupAssignments<T>[];

  constructor(_entityApi: CustomerRebateAndDeductionsGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerRebateAndDeductionsGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupId: DeserializedType<T, 'Edm.String'>;
  groupDescription?: DeserializedType<T, 'Edm.String'> | null;
  rebateAndDeductionsAgreementHeaders: RebateAndDeductionAgreementHeadersType<T>[];
  customerRebateAndDeductionsGroupAssignments: CustomerRebateAndDeductionsGroupAssignmentsType<T>[];
}
