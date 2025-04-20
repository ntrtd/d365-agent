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
import type { VendorRebateAndDeductionsGroupsApi } from './VendorRebateAndDeductionsGroupsApi';
import {
  RebateAndDeductionAgreementHeaders,
  RebateAndDeductionAgreementHeadersType
} from './RebateAndDeductionAgreementHeaders';
import {
  VendorRebateAndDeductionsGroupAssignments,
  VendorRebateAndDeductionsGroupAssignmentsType
} from './VendorRebateAndDeductionsGroupAssignments';

/**
 * This class represents the entity "VendorRebateAndDeductionsGroups" of service "d365_metadata".
 */
export class VendorRebateAndDeductionsGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendorRebateAndDeductionsGroupsType<T>
{
  /**
   * Technical entity name for VendorRebateAndDeductionsGroups.
   */
  static override _entityName = 'VendorRebateAndDeductionsGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendorRebateAndDeductionsGroups entity.
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
   * One-to-many navigation property to the {@link VendorRebateAndDeductionsGroupAssignments} entity.
   */
  declare vendorRebateAndDeductionsGroupAssignments: VendorRebateAndDeductionsGroupAssignments<T>[];

  constructor(_entityApi: VendorRebateAndDeductionsGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface VendorRebateAndDeductionsGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupId: DeserializedType<T, 'Edm.String'>;
  groupDescription?: DeserializedType<T, 'Edm.String'> | null;
  rebateAndDeductionsAgreementHeaders: RebateAndDeductionAgreementHeadersType<T>[];
  vendorRebateAndDeductionsGroupAssignments: VendorRebateAndDeductionsGroupAssignmentsType<T>[];
}
