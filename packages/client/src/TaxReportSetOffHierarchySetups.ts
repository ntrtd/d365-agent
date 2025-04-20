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
import type { TaxReportSetOffHierarchySetupsApi } from './TaxReportSetOffHierarchySetupsApi';

/**
 * This class represents the entity "TaxReportSetOffHierarchySetups" of service "d365_metadata".
 */
export class TaxReportSetOffHierarchySetups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TaxReportSetOffHierarchySetupsType<T>
{
  /**
   * Technical entity name for TaxReportSetOffHierarchySetups.
   */
  static override _entityName = 'TaxReportSetOffHierarchySetups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxReportSetOffHierarchySetups entity.
   */
  static _keys = ['dataAreaId', 'EffectiveDate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Effective Date.
   */
  declare effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Hierarchy Version.
   */
  declare hierarchyVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Hierarchy Name.
   * @nullable
   */
  declare hierarchyName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TaxReportSetOffHierarchySetupsApi<T>) {
    super(_entityApi);
  }
}

export interface TaxReportSetOffHierarchySetupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  hierarchyVersion: DeserializedType<T, 'Edm.Int32'>;
  hierarchyName?: DeserializedType<T, 'Edm.String'> | null;
}
