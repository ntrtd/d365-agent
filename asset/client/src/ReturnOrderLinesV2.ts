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
import type { ReturnOrderLinesV2Api } from './ReturnOrderLinesV2Api';
import { InventRefType } from './InventRefType';
import { Timezone } from './Timezone';
import { NoYes } from './NoYes';
import { ReturnStatusLine } from './ReturnStatusLine';
import {
  ReturnOrderHeadersV2,
  ReturnOrderHeadersV2Type
} from './ReturnOrderHeadersV2';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "ReturnOrderLinesV2" of service "d365_metadata".
 */
export class ReturnOrderLinesV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ReturnOrderLinesV2Type<T>
{
  /**
   * Technical entity name for ReturnOrderLinesV2.
   */
  static override _entityName = 'ReturnOrderLinesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReturnOrderLinesV2 entity.
   */
  static _keys = ['dataAreaId', 'ReturnOrderNumber', 'ReturnInventoryLotId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Return Order Number.
   */
  declare returnOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Return Inventory Lot Id.
   */
  declare returnInventoryLotId: DeserializedType<T, 'Edm.String'>;
  /**
   * Return Address Zip Code.
   * @nullable
   */
  declare returnAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Unit Symbol.
   * @nullable
   */
  declare salesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ordered Inventory Status Id.
   * @nullable
   */
  declare orderedInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Origin State Id.
   * @nullable
   */
  declare originStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Unit Cost.
   */
  declare returnUnitCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Return Closed Date.
   */
  declare returnClosedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Return Catch Weight Quantity.
   */
  declare returnCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Return Site Id.
   * @nullable
   */
  declare returnSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Main Account Id Display Value.
   * @nullable
   */
  declare mainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Description.
   * @nullable
   */
  declare lineDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Sales Quantity.
   */
  declare returnSalesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Return Address Street.
   * @nullable
   */
  declare returnAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Type.
   * @nullable
   */
  declare referenceType?: InventRefType | null;
  /**
   * Customer Account Number.
   * @nullable
   */
  declare customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address Time Zone.
   * @nullable
   */
  declare returnAddressTimeZone?: Timezone | null;
  /**
   * Return Address Building Compliment.
   * @nullable
   */
  declare returnAddressBuildingCompliment?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Line Amount.
   */
  declare lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Warehouse Id.
   * @nullable
   */
  declare returnWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address Street Number.
   * @nullable
   */
  declare returnAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address Duns Number.
   * @nullable
   */
  declare returnAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Tax Amount.
   */
  declare totalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice Customer Account Number.
   * @nullable
   */
  declare invoiceCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Return Address Location Id.
   * @nullable
   */
  declare returnAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Creation Sequence Number.
   */
  declare lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sales Price.
   */
  declare salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Return Address Country Region Iso Code.
   * @nullable
   */
  declare returnAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Return Address Order Specific.
   * @nullable
   */
  declare isReturnAddressOrderSpecific?: NoYes | null;
  /**
   * Return Address County Id.
   * @nullable
   */
  declare returnAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Returning Inventory Lot Id.
   * @nullable
   */
  declare returningInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address Name.
   * @nullable
   */
  declare returnAddressName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rma Number.
   * @nullable
   */
  declare rmaNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address State Id.
   * @nullable
   */
  declare returnAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expected Return Arrival Date.
   */
  declare expectedReturnArrivalDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Return Address District Name.
   * @nullable
   */
  declare returnAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Status.
   * @nullable
   */
  declare returnStatus?: ReturnStatusLine | null;
  /**
   * Return Address City In Kana.
   * @nullable
   */
  declare returnAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Serial Number.
   * @nullable
   */
  declare itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Charges Amount.
   */
  declare totalChargesAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Formatted Return Address.
   * @nullable
   */
  declare formattedReturnAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Discount Amount.
   */
  declare totalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Return Address Street In Kana.
   * @nullable
   */
  declare returnAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Return Address Private.
   * @nullable
   */
  declare isReturnAddressPrivate?: NoYes | null;
  /**
   * Origin Country Region Id.
   * @nullable
   */
  declare originCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Warehouse Location Id.
   * @nullable
   */
  declare returnWarehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Actual Return Arrival Date.
   */
  declare actualReturnArrivalDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Return Address Country Region Id.
   * @nullable
   */
  declare returnAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Returned Sales Quantity.
   */
  declare returnedSalesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * External Item Number.
   * @nullable
   */
  declare externalItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address City.
   * @nullable
   */
  declare returnAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Disposition Code.
   * @nullable
   */
  declare returnDispositionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Batch Number.
   * @nullable
   */
  declare itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address Latitude.
   */
  declare returnAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address Description.
   * @nullable
   */
  declare returnAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address Post Box.
   * @nullable
   */
  declare returnAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Number.
   * @nullable
   */
  declare referenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Inventory Lot Id.
   * @nullable
   */
  declare referenceInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address Longitude.
   */
  declare returnAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Returned Quantity Available For Reservation.
   * @nullable
   */
  declare isReturnedQuantityAvailableForReservation?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link ReturnOrderHeadersV2} entity.
   */
  declare returnOrderHeader?: ReturnOrderHeadersV2<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: ReturnOrderLinesV2Api<T>) {
    super(_entityApi);
  }
}

export interface ReturnOrderLinesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  returnOrderNumber: DeserializedType<T, 'Edm.String'>;
  returnInventoryLotId: DeserializedType<T, 'Edm.String'>;
  returnAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  salesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  orderedInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  originStateId?: DeserializedType<T, 'Edm.String'> | null;
  returnUnitCost: DeserializedType<T, 'Edm.Decimal'>;
  returnClosedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  returnCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  returnSiteId?: DeserializedType<T, 'Edm.String'> | null;
  mainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  lineDescription?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  returnSalesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  returnAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  referenceType?: InventRefType | null;
  customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressTimeZone?: Timezone | null;
  returnAddressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  returnWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  totalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  invoiceCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  returnAddressCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  isReturnAddressOrderSpecific?: NoYes | null;
  returnAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  returningInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressName?: DeserializedType<T, 'Edm.String'> | null;
  rmaNumber?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  expectedReturnArrivalDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  returnAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  returnStatus?: ReturnStatusLine | null;
  returnAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  totalChargesAmount: DeserializedType<T, 'Edm.Decimal'>;
  formattedReturnAddress?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  totalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  returnAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  isReturnAddressPrivate?: NoYes | null;
  originCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  returnWarehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  actualReturnArrivalDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  returnAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  returnedSalesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  externalItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  returnDispositionCode?: DeserializedType<T, 'Edm.String'> | null;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  referenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  referenceInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  isReturnedQuantityAvailableForReservation?: NoYes | null;
  returnOrderHeader?: ReturnOrderHeadersV2Type<T> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
