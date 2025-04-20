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
import type { NrTaxTransApi } from './NrTaxTransApi';
import { LvNrTransType } from './LvNrTransType';
import { NoYes } from './NoYes';
import { InventTransType } from './InventTransType';

/**
 * This class represents the entity "NRTaxTrans" of service "d365_metadata".
 */
export class NrTaxTrans<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements NrTaxTransType<T>
{
  /**
   * Technical entity name for NrTaxTrans.
   */
  static override _entityName = 'NRTaxTrans';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the NrTaxTrans entity.
   */
  static _keys = ['dataAreaId', 'LineId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Id.
   */
  declare lineId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Packing Material Code.
   * @nullable
   */
  declare packingMaterialCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Rec Id Reference.
   */
  declare transRecIdReference: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Reference Table Id.
   */
  declare referenceTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Packing Unit Weight.
   */
  declare packingUnitWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Packing Weight.
   */
  declare packingWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Packing Qty.
   */
  declare packingQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Dimension Number.
   * @nullable
   */
  declare dimensionNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Nr Tax Group.
   * @nullable
   */
  declare nrTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Amount.
   */
  declare taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Number.
   * @nullable
   */
  declare number?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Base Amount.
   */
  declare taxBaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice.
   * @nullable
   */
  declare invoice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Packing Unit.
   * @nullable
   */
  declare packingUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Type.
   * @nullable
   */
  declare transType?: LvNrTransType | null;
  /**
   * Tax Code.
   * @nullable
   */
  declare taxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bom Line.
   * @nullable
   */
  declare bomLine?: NoYes | null;
  /**
   * Invent Trans Type Reference.
   * @nullable
   */
  declare inventTransTypeReference?: InventTransType | null;
  /**
   * Item Qty.
   */
  declare itemQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Value.
   */
  declare taxValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Tax Group.
   * @nullable
   */
  declare salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Trans Id.
   * @nullable
   */
  declare inventTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Packing Unit Qty.
   */
  declare packingUnitQty: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: NrTaxTransApi<T>) {
    super(_entityApi);
  }
}

export interface NrTaxTransType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lineId: DeserializedType<T, 'Edm.Guid'>;
  packingMaterialCode?: DeserializedType<T, 'Edm.String'> | null;
  transRecIdReference: DeserializedType<T, 'Edm.Int64'>;
  referenceTableId: DeserializedType<T, 'Edm.Int32'>;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  packingUnitWeight: DeserializedType<T, 'Edm.Decimal'>;
  packingWeight: DeserializedType<T, 'Edm.Decimal'>;
  packingQty: DeserializedType<T, 'Edm.Decimal'>;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dimensionNumber?: DeserializedType<T, 'Edm.String'> | null;
  nrTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  number?: DeserializedType<T, 'Edm.String'> | null;
  taxBaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  invoice?: DeserializedType<T, 'Edm.String'> | null;
  packingUnit?: DeserializedType<T, 'Edm.String'> | null;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  transType?: LvNrTransType | null;
  taxCode?: DeserializedType<T, 'Edm.String'> | null;
  bomLine?: NoYes | null;
  inventTransTypeReference?: InventTransType | null;
  itemQty: DeserializedType<T, 'Edm.Decimal'>;
  taxValue: DeserializedType<T, 'Edm.Decimal'>;
  salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  inventTransId?: DeserializedType<T, 'Edm.String'> | null;
  packingUnitQty: DeserializedType<T, 'Edm.Decimal'>;
}
