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
import type { CostTransShippingContainerTablesApi } from './CostTransShippingContainerTablesApi';
import { ItmCostCategory } from './ItmCostCategory';
import { ItmCostApportionmentMethod } from './ItmCostApportionmentMethod';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "CostTransShippingContainerTables" of service "d365_metadata".
 */
export class CostTransShippingContainerTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CostTransShippingContainerTablesType<T>
{
  /**
   * Technical entity name for CostTransShippingContainerTables.
   */
  static override _entityName = 'CostTransShippingContainerTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostTransShippingContainerTables entity.
   */
  static _keys = ['dataAreaId', 'ShipId', 'ShipContainerId', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ship Id.
   */
  declare shipId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ship Container Id.
   */
  declare shipContainerId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ship Data Area.
   * @nullable
   */
  declare shipDataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Cost Category.
   * @nullable
   */
  declare shipCostCategory?: ItmCostCategory | null;
  /**
   * Link Leg Id.
   * @nullable
   */
  declare linkLegId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Ship Leg Id.
   * @nullable
   */
  declare shipLegId?: DeserializedType<T, 'Edm.String'> | null;
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
  /**
   * Aggregated Cost.
   * @nullable
   */
  declare aggregatedCost?: NoYes | null;

  constructor(_entityApi: CostTransShippingContainerTablesApi<T>) {
    super(_entityApi);
  }
}

export interface CostTransShippingContainerTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  shipId: DeserializedType<T, 'Edm.String'>;
  shipContainerId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  shipDataArea?: DeserializedType<T, 'Edm.String'> | null;
  shipCostCategory?: ItmCostCategory | null;
  linkLegId?: DeserializedType<T, 'Edm.String'> | null;
  minCostAmount: DeserializedType<T, 'Edm.Decimal'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  shipLegId?: DeserializedType<T, 'Edm.String'> | null;
  linkCostTypeId?: DeserializedType<T, 'Edm.String'> | null;
  costValue: DeserializedType<T, 'Edm.Decimal'>;
  shipCostTypeId?: DeserializedType<T, 'Edm.String'> | null;
  apportionmentMethod?: ItmCostApportionmentMethod | null;
  taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  aggregatedCost?: NoYes | null;
}
