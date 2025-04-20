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
import type { CostTransVoyageTablesApi } from './CostTransVoyageTablesApi';
import { ItmCostCategory } from './ItmCostCategory';
import { ItmCostApportionmentMethod } from './ItmCostApportionmentMethod';

/**
 * This class represents the entity "CostTransVoyageTables" of service "d365_metadata".
 */
export class CostTransVoyageTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CostTransVoyageTablesType<T>
{
  /**
   * Technical entity name for CostTransVoyageTables.
   */
  static override _entityName = 'CostTransVoyageTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostTransVoyageTables entity.
   */
  static _keys = ['dataAreaId', 'ShipId', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ship Id.
   */
  declare shipId: DeserializedType<T, 'Edm.String'>;
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
   * Min Cost Amount.
   */
  declare minCostAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
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

  constructor(_entityApi: CostTransVoyageTablesApi<T>) {
    super(_entityApi);
  }
}

export interface CostTransVoyageTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  shipId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  shipDataArea?: DeserializedType<T, 'Edm.String'> | null;
  shipCostCategory?: ItmCostCategory | null;
  minCostAmount: DeserializedType<T, 'Edm.Decimal'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  linkCostTypeId?: DeserializedType<T, 'Edm.String'> | null;
  costValue: DeserializedType<T, 'Edm.Decimal'>;
  shipCostTypeId?: DeserializedType<T, 'Edm.String'> | null;
  apportionmentMethod?: ItmCostApportionmentMethod | null;
  taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
}
