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
import type { CostTransItemTablesApi } from './CostTransItemTablesApi';
import { ItmCostValueAdjustment } from './ItmCostValueAdjustment';
import { ItmCostCategory } from './ItmCostCategory';
import { ItmCostApportionmentMethod } from './ItmCostApportionmentMethod';

/**
 * This class represents the entity "CostTransItemTables" of service "d365_metadata".
 */
export class CostTransItemTables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CostTransItemTablesType<T>
{
  /**
   * Technical entity name for CostTransItemTables.
   */
  static override _entityName = 'CostTransItemTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostTransItemTables entity.
   */
  static _keys = [
    'dataAreaId',
    'ShipDataArea',
    'PurchaseOrderId',
    'PurchaseOrderLineNumber',
    'LineNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ship Data Area.
   */
  declare shipDataArea: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchase Order Id.
   */
  declare purchaseOrderId: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchase Order Line Number.
   */
  declare purchaseOrderLineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Value Adjustment Method.
   * @nullable
   */
  declare valueAdjustmentMethod?: ItmCostValueAdjustment | null;
  /**
   * Ship Cost Category.
   * @nullable
   */
  declare shipCostCategory?: ItmCostCategory | null;
  /**
   * Min Cost Amount.
   */
  declare minCostAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Adjustment Amount.
   */
  declare adjustmentAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Link Cost Type Id.
   * @nullable
   */
  declare linkCostTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Value.
   */
  declare costValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ship Cost Type Id.
   * @nullable
   */
  declare shipCostTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Apportionment Method.
   * @nullable
   */
  declare apportionmentMethod?: ItmCostApportionmentMethod | null;
  /**
   * Tax Item Group.
   * @nullable
   */
  declare taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CostTransItemTablesApi<T>) {
    super(_entityApi);
  }
}

export interface CostTransItemTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  shipDataArea: DeserializedType<T, 'Edm.String'>;
  purchaseOrderId: DeserializedType<T, 'Edm.String'>;
  purchaseOrderLineNumber: DeserializedType<T, 'Edm.Int64'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  valueAdjustmentMethod?: ItmCostValueAdjustment | null;
  shipCostCategory?: ItmCostCategory | null;
  minCostAmount: DeserializedType<T, 'Edm.Decimal'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  adjustmentAmount: DeserializedType<T, 'Edm.Decimal'>;
  linkCostTypeId?: DeserializedType<T, 'Edm.String'> | null;
  costValue: DeserializedType<T, 'Edm.Decimal'>;
  shipCostTypeId?: DeserializedType<T, 'Edm.String'> | null;
  apportionmentMethod?: ItmCostApportionmentMethod | null;
  taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
}
