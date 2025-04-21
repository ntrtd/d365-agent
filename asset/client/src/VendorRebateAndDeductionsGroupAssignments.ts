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
import type { VendorRebateAndDeductionsGroupAssignmentsApi } from './VendorRebateAndDeductionsGroupAssignmentsApi';
import { VendorsV2, VendorsV2Type } from './VendorsV2';
import {
  VendorRebateAndDeductionsGroups,
  VendorRebateAndDeductionsGroupsType
} from './VendorRebateAndDeductionsGroups';

/**
 * This class represents the entity "VendorRebateAndDeductionsGroupAssignments" of service "d365_metadata".
 */
export class VendorRebateAndDeductionsGroupAssignments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendorRebateAndDeductionsGroupAssignmentsType<T>
{
  /**
   * Technical entity name for VendorRebateAndDeductionsGroupAssignments.
   */
  static override _entityName = 'VendorRebateAndDeductionsGroupAssignments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendorRebateAndDeductionsGroupAssignments entity.
   */
  static _keys = [
    'dataAreaId',
    'VendorRebateAndDeductionsGroupId',
    'VendorAccountNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Vendor Rebate And Deductions Group Id.
   */
  declare vendorRebateAndDeductionsGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Vendor Account Number.
   */
  declare vendorAccountNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link VendorsV2} entity.
   */
  declare vendorV2?: VendorsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link VendorRebateAndDeductionsGroups} entity.
   */
  declare vendorRebateAndDeductionsGroup?: VendorRebateAndDeductionsGroups<T> | null;

  constructor(_entityApi: VendorRebateAndDeductionsGroupAssignmentsApi<T>) {
    super(_entityApi);
  }
}

export interface VendorRebateAndDeductionsGroupAssignmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  vendorRebateAndDeductionsGroupId: DeserializedType<T, 'Edm.String'>;
  vendorAccountNumber: DeserializedType<T, 'Edm.String'>;
  vendorV2?: VendorsV2Type<T> | null;
  vendorRebateAndDeductionsGroup?: VendorRebateAndDeductionsGroupsType<T> | null;
}
