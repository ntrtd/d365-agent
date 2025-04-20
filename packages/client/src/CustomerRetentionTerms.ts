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
import type { CustomerRetentionTermsApi } from './CustomerRetentionTermsApi';
import {
  CustomerRetentionTermSchedules,
  CustomerRetentionTermSchedulesType
} from './CustomerRetentionTermSchedules';

/**
 * This class represents the entity "CustomerRetentionTerms" of service "d365_metadata".
 */
export class CustomerRetentionTerms<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomerRetentionTermsType<T>
{
  /**
   * Technical entity name for CustomerRetentionTerms.
   */
  static override _entityName = 'CustomerRetentionTerms';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomerRetentionTerms entity.
   */
  static _keys = ['dataAreaId', 'RetentionTerm'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Retention Term.
   */
  declare retentionTerm: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Account.
   * @nullable
   */
  declare customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Contract Id.
   * @nullable
   */
  declare projectContractId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing Rule.
   * @nullable
   */
  declare billingRule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Effective Date.
   */
  declare effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-many navigation property to the {@link CustomerRetentionTermSchedules} entity.
   */
  declare customerRetentionTermSchedule: CustomerRetentionTermSchedules<T>[];

  constructor(_entityApi: CustomerRetentionTermsApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerRetentionTermsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  retentionTerm: DeserializedType<T, 'Edm.String'>;
  customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  projectContractId?: DeserializedType<T, 'Edm.String'> | null;
  billingRule?: DeserializedType<T, 'Edm.String'> | null;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  customerRetentionTermSchedule: CustomerRetentionTermSchedulesType<T>[];
}
