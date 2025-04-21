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
import type { SalesTaxHierarchiesApi } from './SalesTaxHierarchiesApi';
import { TaxReportHrchyStructDesignTypeIn } from './TaxReportHrchyStructDesignTypeIn';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "SalesTaxHierarchies" of service "d365_metadata".
 */
export class SalesTaxHierarchies<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SalesTaxHierarchiesType<T>
{
  /**
   * Technical entity name for SalesTaxHierarchies.
   */
  static override _entityName = 'SalesTaxHierarchies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesTaxHierarchies entity.
   */
  static _keys = ['dataAreaId', 'HierarchyName', 'HierarchyVersion'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Hierarchy Name.
   */
  declare hierarchyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Hierarchy Version.
   */
  declare hierarchyVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Hierarchy Structure.
   * @nullable
   */
  declare hierarchyStructure?: TaxReportHrchyStructDesignTypeIn | null;
  /**
   * Is Active Version.
   * @nullable
   */
  declare isActiveVersion?: NoYes | null;
  /**
   * Hierarchy Version Description.
   * @nullable
   */
  declare hierarchyVersionDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Setoffable.
   * @nullable
   */
  declare isSetoffable?: NoYes | null;

  constructor(_entityApi: SalesTaxHierarchiesApi<T>) {
    super(_entityApi);
  }
}

export interface SalesTaxHierarchiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  hierarchyName: DeserializedType<T, 'Edm.String'>;
  hierarchyVersion: DeserializedType<T, 'Edm.Int32'>;
  hierarchyStructure?: TaxReportHrchyStructDesignTypeIn | null;
  isActiveVersion?: NoYes | null;
  hierarchyVersionDescription?: DeserializedType<T, 'Edm.String'> | null;
  isSetoffable?: NoYes | null;
}
