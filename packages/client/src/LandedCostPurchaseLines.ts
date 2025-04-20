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
import type { LandedCostPurchaseLinesApi } from './LandedCostPurchaseLinesApi';
import { ItmMeasurementUnit } from './ItmMeasurementUnit';

/**
 * This class represents the entity "LandedCostPurchaseLines" of service "d365_metadata".
 */
export class LandedCostPurchaseLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LandedCostPurchaseLinesType<T>
{
  /**
   * Technical entity name for LandedCostPurchaseLines.
   */
  static override _entityName = 'LandedCostPurchaseLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LandedCostPurchaseLines entity.
   */
  static _keys = [
    'dataAreaId',
    'ShipDataArea',
    'PurchaseLineNumber',
    'PurchaseOrderId',
    'ShipId'
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
   * Purchase Line Number.
   */
  declare purchaseLineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Purchase Order Id.
   */
  declare purchaseOrderId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ship Id.
   */
  declare shipId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ship Position.
   */
  declare shipPosition: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Weight.
   */
  declare weight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ship No Of Cartons.
   */
  declare shipNoOfCartons: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit Id.
   * @nullable
   */
  declare unitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Qty.
   */
  declare shipQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ship Declared Qty.
   */
  declare shipDeclaredQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ship Container Id.
   * @nullable
   */
  declare shipContainerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Volume.
   */
  declare volume: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Item Id.
   * @nullable
   */
  declare shipItemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Folio Id.
   * @nullable
   */
  declare shipFolioId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Measurement Unit.
   * @nullable
   */
  declare shipMeasurementUnit?: ItmMeasurementUnit | null;
  /**
   * Line Amount Mst.
   */
  declare lineAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ship Measurement.
   */
  declare shipMeasurement: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: LandedCostPurchaseLinesApi<T>) {
    super(_entityApi);
  }
}

export interface LandedCostPurchaseLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  shipDataArea: DeserializedType<T, 'Edm.String'>;
  purchaseLineNumber: DeserializedType<T, 'Edm.Int64'>;
  purchaseOrderId: DeserializedType<T, 'Edm.String'>;
  shipId: DeserializedType<T, 'Edm.String'>;
  shipPosition: DeserializedType<T, 'Edm.Int32'>;
  weight: DeserializedType<T, 'Edm.Decimal'>;
  shipNoOfCartons: DeserializedType<T, 'Edm.Decimal'>;
  unitId?: DeserializedType<T, 'Edm.String'> | null;
  shipQty: DeserializedType<T, 'Edm.Decimal'>;
  shipDeclaredQty: DeserializedType<T, 'Edm.Decimal'>;
  shipContainerId?: DeserializedType<T, 'Edm.String'> | null;
  volume: DeserializedType<T, 'Edm.Decimal'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  shipItemId?: DeserializedType<T, 'Edm.String'> | null;
  shipFolioId?: DeserializedType<T, 'Edm.String'> | null;
  shipMeasurementUnit?: ItmMeasurementUnit | null;
  lineAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  shipMeasurement: DeserializedType<T, 'Edm.Decimal'>;
}
