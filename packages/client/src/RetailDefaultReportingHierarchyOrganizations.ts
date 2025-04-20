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
import type { RetailDefaultReportingHierarchyOrganizationsApi } from './RetailDefaultReportingHierarchyOrganizationsApi';

/**
 * This class represents the entity "RetailDefaultReportingHierarchyOrganizations" of service "d365_metadata".
 */
export class RetailDefaultReportingHierarchyOrganizations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailDefaultReportingHierarchyOrganizationsType<T>
{
  /**
   * Technical entity name for RetailDefaultReportingHierarchyOrganizations.
   */
  static override _entityName = 'RetailDefaultReportingHierarchyOrganizations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailDefaultReportingHierarchyOrganizations entity.
   */
  static _keys = ['OrganizationNumber', 'ValidFrom', 'ValidTo'];
  /**
   * Organization Number.
   */
  declare organizationNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Organization Name.
   * @nullable
   */
  declare organizationName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Organization Record Id.
   */
  declare organizationRecordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Parent Organization Number.
   * @nullable
   */
  declare parentOrganizationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parent Organization Record Id.
   */
  declare parentOrganizationRecordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Parent Organization Name.
   * @nullable
   */
  declare parentOrganizationName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailDefaultReportingHierarchyOrganizationsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailDefaultReportingHierarchyOrganizationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  organizationNumber: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  organizationName?: DeserializedType<T, 'Edm.String'> | null;
  organizationRecordId: DeserializedType<T, 'Edm.Int64'>;
  parentOrganizationNumber?: DeserializedType<T, 'Edm.String'> | null;
  parentOrganizationRecordId: DeserializedType<T, 'Edm.Int64'>;
  parentOrganizationName?: DeserializedType<T, 'Edm.String'> | null;
}
