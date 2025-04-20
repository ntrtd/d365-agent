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
import type { MultiSourcePolicyAssignmentsApi } from './MultiSourcePolicyAssignmentsApi';

/**
 * This class represents the entity "MultiSourcePolicyAssignments" of service "d365_metadata".
 */
export class MultiSourcePolicyAssignments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MultiSourcePolicyAssignmentsType<T>
{
  /**
   * Technical entity name for MultiSourcePolicyAssignments.
   */
  static override _entityName = 'MultiSourcePolicyAssignments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MultiSourcePolicyAssignments entity.
   */
  static _keys = ['dataAreaId', 'ItemNumber', 'ValidFromDate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From Date.
   */
  declare validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Policy Name.
   * @nullable
   */
  declare policyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Id.
   * @nullable
   */
  declare warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid To Date.
   */
  declare validToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Site Id.
   * @nullable
   */
  declare siteId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: MultiSourcePolicyAssignmentsApi<T>) {
    super(_entityApi);
  }
}

export interface MultiSourcePolicyAssignmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  policyName?: DeserializedType<T, 'Edm.String'> | null;
  warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  validToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  siteId?: DeserializedType<T, 'Edm.String'> | null;
}
