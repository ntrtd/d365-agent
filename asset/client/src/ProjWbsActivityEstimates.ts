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
import type { ProjWbsActivityEstimatesApi } from './ProjWbsActivityEstimatesApi';
import { QuotationProjTransType } from './QuotationProjTransType';
import {
  ProjectCategoryEntities,
  ProjectCategoryEntitiesType
} from './ProjectCategoryEntities';

/**
 * This class represents the entity "ProjWBSActivityEstimates" of service "d365_metadata".
 */
export class ProjWbsActivityEstimates<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjWbsActivityEstimatesType<T>
{
  /**
   * Technical entity name for ProjWbsActivityEstimates.
   */
  static override _entityName = 'ProjWBSActivityEstimates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjWbsActivityEstimates entity.
   */
  static _keys = [
    'dataAreaId',
    'ProjectId',
    'WBSId',
    'TransactionType',
    'Category',
    'ResourceCategory',
    'ItemNumber',
    'SalesCategory',
    'LineProperty',
    'Quantity',
    'UnitCostPrice',
    'UnitSalesPrice'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Id.
   */
  declare projectId: DeserializedType<T, 'Edm.String'>;
  /**
   * Wbs Id.
   */
  declare wbsId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Type.
   * @nullable
   */
  declare transactionType?: QuotationProjTransType | null;
  /**
   * Category.
   */
  declare category: DeserializedType<T, 'Edm.String'>;
  /**
   * Resource Category.
   */
  declare resourceCategory: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Category.
   */
  declare salesCategory: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Property.
   */
  declare lineProperty: DeserializedType<T, 'Edm.String'>;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit Cost Price.
   */
  declare unitCostPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit Sales Price.
   */
  declare unitSalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Sales Price.
   */
  declare totalSalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Cost Price.
   */
  declare totalCostPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Task Name.
   * @nullable
   */
  declare taskName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ProjectCategoryEntities} entity.
   */
  declare projectCategories?: ProjectCategoryEntities<T> | null;

  constructor(_entityApi: ProjWbsActivityEstimatesApi<T>) {
    super(_entityApi);
  }
}

export interface ProjWbsActivityEstimatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  projectId: DeserializedType<T, 'Edm.String'>;
  wbsId: DeserializedType<T, 'Edm.String'>;
  transactionType?: QuotationProjTransType | null;
  category: DeserializedType<T, 'Edm.String'>;
  resourceCategory: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  salesCategory: DeserializedType<T, 'Edm.String'>;
  lineProperty: DeserializedType<T, 'Edm.String'>;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  unitCostPrice: DeserializedType<T, 'Edm.Decimal'>;
  unitSalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  totalSalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  totalCostPrice: DeserializedType<T, 'Edm.Decimal'>;
  taskName?: DeserializedType<T, 'Edm.String'> | null;
  projectCategories?: ProjectCategoryEntitiesType<T> | null;
}
