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
import type { CostTransTransferLineTablesApi } from './CostTransTransferLineTablesApi';
import { ItmCostValueAdjustment } from './ItmCostValueAdjustment';
import { ItmCostCategory } from './ItmCostCategory';
import { ItmCostApportionmentMethod } from './ItmCostApportionmentMethod';

/**
 * This class represents the entity "CostTransTransferLineTables" of service "d365_metadata".
 */
export class CostTransTransferLineTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CostTransTransferLineTablesType<T>
{
  /**
   * Technical entity name for CostTransTransferLineTables.
   */
  static override _entityName = 'CostTransTransferLineTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostTransTransferLineTables entity.
   */
  static _keys = [
    'dataAreaId',
    'ShipDataArea',
    'TransferId',
    'TransferLineNumber',
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
   * Transfer Id.
   */
  declare transferId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transfer Line Number.
   */
  declare transferLineNumber: DeserializedType<T, 'Edm.Decimal'>;
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

  constructor(_entityApi: CostTransTransferLineTablesApi<T>) {
    super(_entityApi);
  }
}

export interface CostTransTransferLineTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  shipDataArea: DeserializedType<T, 'Edm.String'>;
  transferId: DeserializedType<T, 'Edm.String'>;
  transferLineNumber: DeserializedType<T, 'Edm.Decimal'>;
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
