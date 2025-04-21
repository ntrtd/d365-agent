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
import type { CdsReturnOrderLinesApi } from './CdsReturnOrderLinesApi';
import { ReturnStatusLine } from './ReturnStatusLine';
import { NoYes } from './NoYes';
import { InventRefType } from './InventRefType';
import { Timezone } from './Timezone';
import {
  CdsReturnOrderHeaders,
  CdsReturnOrderHeadersType
} from './CdsReturnOrderHeaders';

/**
 * This class represents the entity "CDSReturnOrderLines" of service "d365_metadata".
 */
export class CdsReturnOrderLines<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CdsReturnOrderLinesType<T>
{
  /**
   * Technical entity name for CdsReturnOrderLines.
   */
  static override _entityName = 'CDSReturnOrderLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CdsReturnOrderLines entity.
   */
  static _keys = [
    'dataAreaId',
    'ReturnOrderNumber',
    'LineCreationSequenceNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Return Order Number.
   */
  declare returnOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Creation Sequence Number.
   */
  declare lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Formatted Return Address.
   * @nullable
   */
  declare formattedReturnAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address Duns Number.
   * @nullable
   */
  declare returnAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Postal Address Rec Id.
   */
  declare returnPostalAddressRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Total Tax Amount.
   */
  declare totalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Returning Inventory Lot Id.
   * @nullable
   */
  declare returningInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address Country Region Id.
   * @nullable
   */
  declare returnAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Return Status.
   * @nullable
   */
  declare returnStatus?: ReturnStatusLine | null;
  /**
   * Reference Number.
   * @nullable
   */
  declare referenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Return Address Private.
   * @nullable
   */
  declare isReturnAddressPrivate?: NoYes | null;
  /**
   * Return Address Post Box.
   * @nullable
   */
  declare returnAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Sales Quantity.
   */
  declare returnSalesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Charges Amount.
   */
  declare totalChargesAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Return Address Zip Code.
   * @nullable
   */
  declare returnAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Discount Amount.
   */
  declare totalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address County Id.
   * @nullable
   */
  declare returnAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address Location Id.
   * @nullable
   */
  declare returnAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Disposition Code.
   * @nullable
   */
  declare returnDispositionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Description.
   * @nullable
   */
  declare lineDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address Description.
   * @nullable
   */
  declare returnAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Site Id.
   * @nullable
   */
  declare returnSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address Street.
   * @nullable
   */
  declare returnAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Warehouse Id.
   * @nullable
   */
  declare returnWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address State Id.
   * @nullable
   */
  declare returnAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address City.
   * @nullable
   */
  declare returnAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address Street Number.
   * @nullable
   */
  declare returnAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Price.
   */
  declare salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Return Address Name.
   * @nullable
   */
  declare returnAddressName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Type.
   * @nullable
   */
  declare referenceType?: InventRefType | null;
  /**
   * Is Return Address Order Specific.
   * @nullable
   */
  declare isReturnAddressOrderSpecific?: NoYes | null;
  /**
   * Return Address Time Zone.
   * @nullable
   */
  declare returnAddressTimeZone?: Timezone | null;
  /**
   * Return Address Latitude.
   */
  declare returnAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Return Inventory Lot Id.
   * @nullable
   */
  declare returnInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Unit Symbol.
   * @nullable
   */
  declare salesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address Longitude.
   */
  declare returnAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Return Address District Name.
   * @nullable
   */
  declare returnAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Closed Date.
   */
  declare returnClosedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Returned Sales Quantity.
   */
  declare returnedSalesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reference Inventory Lot Id.
   * @nullable
   */
  declare referenceInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Amount.
   */
  declare lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Expected Return Arrival Date.
   */
  declare expectedReturnArrivalDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Actual Return Arrival Date.
   */
  declare actualReturnArrivalDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Rma Number.
   * @nullable
   */
  declare rmaNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link CdsReturnOrderHeaders} entity.
   */
  declare cdsReturnOrderHeader?: CdsReturnOrderHeaders<T> | null;

  constructor(_entityApi: CdsReturnOrderLinesApi<T>) {
    super(_entityApi);
  }
}

export interface CdsReturnOrderLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  returnOrderNumber: DeserializedType<T, 'Edm.String'>;
  lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  formattedReturnAddress?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  returnPostalAddressRecId: DeserializedType<T, 'Edm.Int64'>;
  totalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  returningInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  returnStatus?: ReturnStatusLine | null;
  referenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  isReturnAddressPrivate?: NoYes | null;
  returnAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  returnSalesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  totalChargesAmount: DeserializedType<T, 'Edm.Decimal'>;
  returnAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  totalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  returnDispositionCode?: DeserializedType<T, 'Edm.String'> | null;
  lineDescription?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  returnSiteId?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  returnWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  returnAddressName?: DeserializedType<T, 'Edm.String'> | null;
  referenceType?: InventRefType | null;
  isReturnAddressOrderSpecific?: NoYes | null;
  returnAddressTimeZone?: Timezone | null;
  returnAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  returnInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  salesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  returnAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  returnClosedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  returnedSalesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  referenceInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  expectedReturnArrivalDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  actualReturnArrivalDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  rmaNumber?: DeserializedType<T, 'Edm.String'> | null;
  cdsReturnOrderHeader?: CdsReturnOrderHeadersType<T> | null;
}
