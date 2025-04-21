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
import type { CostStatementEntriesApi } from './CostStatementEntriesApi';
import { CostStatementType } from './CostStatementType';
import { CostStatementLineCategoryLevel1 } from './CostStatementLineCategoryLevel1';
import { CostStatementLineCategoryLevel2 } from './CostStatementLineCategoryLevel2';
import { CostStatementLineCategoryLevel3 } from './CostStatementLineCategoryLevel3';
import { InventValueReportResourceType } from './InventValueReportResourceType';
import { OperationalSites, OperationalSitesType } from './OperationalSites';

/**
 * This class represents the entity "CostStatementEntries" of service "d365_metadata".
 */
export class CostStatementEntries<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CostStatementEntriesType<T>
{
  /**
   * Technical entity name for CostStatementEntries.
   */
  static override _entityName = 'CostStatementEntries';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostStatementEntries entity.
   */
  static _keys = [
    'dataAreaId',
    'CostStatementType',
    'AccountingDate',
    'LevelOneCostStatementLineCategoryName',
    'LevelTwoCostStatementLineCategoryName',
    'LevelThreeCostStatementLineCategoryName',
    'OperationalSiteId',
    'CostResourceType',
    'CostResourceId',
    'ProductConfigurationId',
    'ProductColorId',
    'ProductSizeId',
    'ProductStyleId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cost Statement Type.
   * @nullable
   */
  declare costStatementType?: CostStatementType | null;
  /**
   * Accounting Date.
   */
  declare accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Level One Cost Statement Line Category Name.
   * @nullable
   */
  declare levelOneCostStatementLineCategoryName?: CostStatementLineCategoryLevel1 | null;
  /**
   * Level Two Cost Statement Line Category Name.
   * @nullable
   */
  declare levelTwoCostStatementLineCategoryName?: CostStatementLineCategoryLevel2 | null;
  /**
   * Level Three Cost Statement Line Category Name.
   * @nullable
   */
  declare levelThreeCostStatementLineCategoryName?: CostStatementLineCategoryLevel3 | null;
  /**
   * Operational Site Id.
   */
  declare operationalSiteId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cost Resource Type.
   * @nullable
   */
  declare costResourceType?: InventValueReportResourceType | null;
  /**
   * Cost Resource Id.
   */
  declare costResourceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Configuration Id.
   */
  declare productConfigurationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Color Id.
   */
  declare productColorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Size Id.
   */
  declare productSizeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Style Id.
   */
  declare productStyleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cost Resource Group Id.
   * @nullable
   */
  declare costResourceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cost Amount.
   */
  declare costAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link OperationalSites} entity.
   */
  declare operationalSite?: OperationalSites<T> | null;

  constructor(_entityApi: CostStatementEntriesApi<T>) {
    super(_entityApi);
  }
}

export interface CostStatementEntriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  costStatementType?: CostStatementType | null;
  accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  levelOneCostStatementLineCategoryName?: CostStatementLineCategoryLevel1 | null;
  levelTwoCostStatementLineCategoryName?: CostStatementLineCategoryLevel2 | null;
  levelThreeCostStatementLineCategoryName?: CostStatementLineCategoryLevel3 | null;
  operationalSiteId: DeserializedType<T, 'Edm.String'>;
  costResourceType?: InventValueReportResourceType | null;
  costResourceId: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  costResourceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  costAmount: DeserializedType<T, 'Edm.Decimal'>;
  operationalSite?: OperationalSitesType<T> | null;
}
