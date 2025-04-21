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
import type { CustomerRebateAndDeductionsGroupAssignmentsApi } from './CustomerRebateAndDeductionsGroupAssignmentsApi';
import {
  CustomerRebateAndDeductionsGroups,
  CustomerRebateAndDeductionsGroupsType
} from './CustomerRebateAndDeductionsGroups';
import { CustomersV3, CustomersV3Type } from './CustomersV3';

/**
 * This class represents the entity "CustomerRebateAndDeductionsGroupAssignments" of service "d365_metadata".
 */
export class CustomerRebateAndDeductionsGroupAssignments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomerRebateAndDeductionsGroupAssignmentsType<T>
{
  /**
   * Technical entity name for CustomerRebateAndDeductionsGroupAssignments.
   */
  static override _entityName = 'CustomerRebateAndDeductionsGroupAssignments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomerRebateAndDeductionsGroupAssignments entity.
   */
  static _keys = [
    'dataAreaId',
    'CustomerRebateAndDeductionsGroupId',
    'CustomerAccountNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Rebate And Deductions Group Id.
   */
  declare customerRebateAndDeductionsGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Account Number.
   */
  declare customerAccountNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link CustomerRebateAndDeductionsGroups} entity.
   */
  declare customerRebateAndDeductionsGroup?: CustomerRebateAndDeductionsGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link CustomersV3} entity.
   */
  declare customerV3?: CustomersV3<T> | null;

  constructor(_entityApi: CustomerRebateAndDeductionsGroupAssignmentsApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerRebateAndDeductionsGroupAssignmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  customerRebateAndDeductionsGroupId: DeserializedType<T, 'Edm.String'>;
  customerAccountNumber: DeserializedType<T, 'Edm.String'>;
  customerRebateAndDeductionsGroup?: CustomerRebateAndDeductionsGroupsType<T> | null;
  customerV3?: CustomersV3Type<T> | null;
}
