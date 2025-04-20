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
import type { MultiSourcePolicyEntriesApi } from './MultiSourcePolicyEntriesApi';

/**
 * This class represents the entity "MultiSourcePolicyEntries" of service "d365_metadata".
 */
export class MultiSourcePolicyEntries<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MultiSourcePolicyEntriesType<T>
{
  /**
   * Technical entity name for MultiSourcePolicyEntries.
   */
  static override _entityName = 'MultiSourcePolicyEntries';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MultiSourcePolicyEntries entity.
   */
  static _keys = ['dataAreaId', 'PolicyName', 'VendorAccountNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Policy Name.
   */
  declare policyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Vendor Account Number.
   */
  declare vendorAccountNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Allocation Pct.
   */
  declare allocationPct: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: MultiSourcePolicyEntriesApi<T>) {
    super(_entityApi);
  }
}

export interface MultiSourcePolicyEntriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  policyName: DeserializedType<T, 'Edm.String'>;
  vendorAccountNumber: DeserializedType<T, 'Edm.String'>;
  allocationPct: DeserializedType<T, 'Edm.Decimal'>;
}
