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
import type { FreightBillDetailsApi } from './FreightBillDetailsApi';
import { Timezone } from './Timezone';
import { NoYes } from './NoYes';
import { TmsDirection } from './TmsDirection';
import { TmsFreightBillMatchStatus } from './TmsFreightBillMatchStatus';
import { TmsLineType } from './TmsLineType';
import { ShippingCarriers, ShippingCarriersType } from './ShippingCarriers';
import {
  TransportationModes,
  TransportationModesType
} from './TransportationModes';
import { VendorsV2, VendorsV2Type } from './VendorsV2';
import { CustomersV3, CustomersV3Type } from './CustomersV3';

/**
 * This class represents the entity "FreightBillDetails" of service "d365_metadata".
 */
export class FreightBillDetails<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements FreightBillDetailsType<T>
{
  /**
   * Technical entity name for FreightBillDetails.
   */
  static override _entityName = 'FreightBillDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FreightBillDetails entity.
   */
  static _keys = [
    'dataAreaId',
    'FreightBillId',
    'FreightBillDetailEntryNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Freight Bill Id.
   */
  declare freightBillId: DeserializedType<T, 'Edm.String'>;
  /**
   * Freight Bill Detail Entry Number.
   */
  declare freightBillDetailEntryNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Pickup Address State Id.
   * @nullable
   */
  declare pickupAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Drop Off Address Longitude.
   */
  declare dropOffAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Drop Off Address Latitude.
   */
  declare dropOffAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Load Sales Order Number.
   * @nullable
   */
  declare loadSalesOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pickup Address Building Compliment.
   * @nullable
   */
  declare pickupAddressBuildingCompliment?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Invoice Vendor Account Number.
   * @nullable
   */
  declare invoiceVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Rate.
   */
  declare totalRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Drop Off Address City In Kana.
   * @nullable
   */
  declare dropOffAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Drop Off Address Time Zone.
   * @nullable
   */
  declare dropOffAddressTimeZone?: Timezone | null;
  /**
   * Transportation Route Plan Id.
   * @nullable
   */
  declare transportationRoutePlanId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sequence Number.
   */
  declare sequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Drop Off Address Building Compliment.
   * @nullable
   */
  declare dropOffAddressBuildingCompliment?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Formatted Drop Off Address.
   * @nullable
   */
  declare formattedDropOffAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Drop Off Address Street In Kana.
   * @nullable
   */
  declare dropOffAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Drop Off Address Post Box.
   * @nullable
   */
  declare dropOffAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Cycle Count Date Time.
   */
  declare lastCycleCountDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Rate Notes.
   * @nullable
   */
  declare rateNotes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Carrier Service Id.
   * @nullable
   */
  declare shippingCarrierServiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Drop Off Address Country Region Iso Code.
   * @nullable
   */
  declare dropOffAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Drop Off Address County Id.
   * @nullable
   */
  declare dropOffAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Carrier Id.
   * @nullable
   */
  declare shippingCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Freight Bill Type Id.
   * @nullable
   */
  declare freightBillTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pickup Address Zip Code.
   * @nullable
   */
  declare pickupAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rate Unit.
   */
  declare rateUnit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pro Number Code.
   * @nullable
   */
  declare proNumberCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pickup Address Country Region Id.
   * @nullable
   */
  declare pickupAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Pickup Address Description.
   * @nullable
   */
  declare pickupAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rate Unit Method.
   */
  declare rateUnitMethod: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transportation Booking Number.
   * @nullable
   */
  declare transportationBookingNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Freight Bill Order Quantity.
   */
  declare freightBillOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pickup Address City.
   * @nullable
   */
  declare pickupAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Drop Off Address Private.
   * @nullable
   */
  declare isDropOffAddressPrivate?: NoYes | null;
  /**
   * Load Purchase Order Number.
   * @nullable
   */
  declare loadPurchaseOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transportation Hub Id.
   * @nullable
   */
  declare transportationHubId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Drop Off Address Duns Number.
   * @nullable
   */
  declare dropOffAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Drop Off Address Country Region Id.
   * @nullable
   */
  declare dropOffAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Transportation Mode Code.
   * @nullable
   */
  declare transportationModeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transportation Billing Group Id.
   * @nullable
   */
  declare transportationBillingGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Load Id.
   * @nullable
   */
  declare loadId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Drop Off Address Zip Code.
   * @nullable
   */
  declare dropOffAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Formatted Pickup Address.
   * @nullable
   */
  declare formattedPickupAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pickup Address Street Number.
   * @nullable
   */
  declare pickupAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipment Id.
   * @nullable
   */
  declare shipmentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Standard Transportation Commodity Code.
   * @nullable
   */
  declare standardTransportationCommodityCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Pickup Address Time Zone.
   * @nullable
   */
  declare pickupAddressTimeZone?: Timezone | null;
  /**
   * Trailer Number.
   * @nullable
   */
  declare trailerNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Drop Off Address District Name.
   * @nullable
   */
  declare dropOffAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pickup Address City In Kana.
   * @nullable
   */
  declare pickupAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Drop Off Address Location Id.
   * @nullable
   */
  declare dropOffAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Movement Direction Rule.
   * @nullable
   */
  declare productMovementDirectionRule?: TmsDirection | null;
  /**
   * Drop Off Address Description.
   * @nullable
   */
  declare dropOffAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Load Customer Account Number.
   * @nullable
   */
  declare loadCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reconciliation Status.
   * @nullable
   */
  declare reconciliationStatus?: TmsFreightBillMatchStatus | null;
  /**
   * Transportation Equipment Code.
   * @nullable
   */
  declare transportationEquipmentCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Freight Bill Order Amount.
   * @nullable
   */
  declare freightBillOrderAmount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pickup Address Post Box.
   * @nullable
   */
  declare pickupAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Drop Off Address Street.
   * @nullable
   */
  declare dropOffAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voyage Num.
   * @nullable
   */
  declare voyageNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Line Type.
   * @nullable
   */
  declare invoiceLineType?: TmsLineType | null;
  /**
   * Pickup Address District Name.
   * @nullable
   */
  declare pickupAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vessel Name.
   * @nullable
   */
  declare vesselName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tractor Number.
   * @nullable
   */
  declare tractorNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pickup Address Street In Kana.
   * @nullable
   */
  declare pickupAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pickup Address Latitude.
   */
  declare pickupAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pickup Address Longitude.
   */
  declare pickupAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transportation External Code.
   * @nullable
   */
  declare transportationExternalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accessorial Charge Master Code.
   * @nullable
   */
  declare accessorialChargeMasterCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Drop Off Address State Id.
   * @nullable
   */
  declare dropOffAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pickup Address Country Region Iso Code.
   * @nullable
   */
  declare pickupAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Pickup Address County Id.
   * @nullable
   */
  declare pickupAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pickup Address Location Id.
   * @nullable
   */
  declare pickupAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pickup Address Street.
   * @nullable
   */
  declare pickupAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Drop Off Address Street Number.
   * @nullable
   */
  declare dropOffAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bill Of Lading Id.
   * @nullable
   */
  declare billOfLadingId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Pickup Address Private.
   * @nullable
   */
  declare isPickupAddressPrivate?: NoYes | null;
  /**
   * Shipping Carrier Vendor Account Number.
   * @nullable
   */
  declare shippingCarrierVendorAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Pickup Address Duns Number.
   * @nullable
   */
  declare pickupAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Drop Off Address City.
   * @nullable
   */
  declare dropOffAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Load Vendor Account Number.
   * @nullable
   */
  declare loadVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Holding Freight End Datetime.
   */
  declare holdingFreightEndDatetime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Physical Weight.
   */
  declare physicalWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link ShippingCarriers} entity.
   */
  declare shippingCarrier?: ShippingCarriers<T> | null;
  /**
   * One-to-one navigation property to the {@link TransportationModes} entity.
   */
  declare transportationMode?: TransportationModes<T> | null;
  /**
   * One-to-one navigation property to the {@link VendorsV2} entity.
   */
  declare shippingCarrierVendor?: VendorsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link CustomersV3} entity.
   */
  declare loadCustomer?: CustomersV3<T> | null;

  constructor(_entityApi: FreightBillDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface FreightBillDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  freightBillId: DeserializedType<T, 'Edm.String'>;
  freightBillDetailEntryNumber: DeserializedType<T, 'Edm.Int64'>;
  pickupAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  dropOffAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  dropOffAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  loadSalesOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  pickupAddressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  invoiceVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  totalRate: DeserializedType<T, 'Edm.Decimal'>;
  dropOffAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  dropOffAddressTimeZone?: Timezone | null;
  transportationRoutePlanId?: DeserializedType<T, 'Edm.String'> | null;
  sequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  dropOffAddressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  formattedDropOffAddress?: DeserializedType<T, 'Edm.String'> | null;
  dropOffAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  dropOffAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  lastCycleCountDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  rateNotes?: DeserializedType<T, 'Edm.String'> | null;
  shippingCarrierServiceId?: DeserializedType<T, 'Edm.String'> | null;
  dropOffAddressCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  dropOffAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  shippingCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  freightBillTypeId?: DeserializedType<T, 'Edm.String'> | null;
  pickupAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  rateUnit: DeserializedType<T, 'Edm.Decimal'>;
  proNumberCode?: DeserializedType<T, 'Edm.String'> | null;
  pickupAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  pickupAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  rateUnitMethod: DeserializedType<T, 'Edm.Decimal'>;
  transportationBookingNumber?: DeserializedType<T, 'Edm.String'> | null;
  freightBillOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  pickupAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  isDropOffAddressPrivate?: NoYes | null;
  loadPurchaseOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  transportationHubId?: DeserializedType<T, 'Edm.String'> | null;
  dropOffAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  dropOffAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  transportationModeCode?: DeserializedType<T, 'Edm.String'> | null;
  transportationBillingGroupId?: DeserializedType<T, 'Edm.String'> | null;
  loadId?: DeserializedType<T, 'Edm.String'> | null;
  dropOffAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  formattedPickupAddress?: DeserializedType<T, 'Edm.String'> | null;
  pickupAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  shipmentId?: DeserializedType<T, 'Edm.String'> | null;
  standardTransportationCommodityCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  pickupAddressTimeZone?: Timezone | null;
  trailerNumber?: DeserializedType<T, 'Edm.String'> | null;
  dropOffAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  pickupAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  dropOffAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  productMovementDirectionRule?: TmsDirection | null;
  dropOffAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  loadCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  reconciliationStatus?: TmsFreightBillMatchStatus | null;
  transportationEquipmentCode?: DeserializedType<T, 'Edm.String'> | null;
  freightBillOrderAmount?: DeserializedType<T, 'Edm.String'> | null;
  pickupAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  dropOffAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  voyageNum?: DeserializedType<T, 'Edm.String'> | null;
  invoiceLineType?: TmsLineType | null;
  pickupAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  vesselName?: DeserializedType<T, 'Edm.String'> | null;
  tractorNumber?: DeserializedType<T, 'Edm.String'> | null;
  pickupAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  pickupAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  pickupAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  transportationExternalCode?: DeserializedType<T, 'Edm.String'> | null;
  accessorialChargeMasterCode?: DeserializedType<T, 'Edm.String'> | null;
  dropOffAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  pickupAddressCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  pickupAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  pickupAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  pickupAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  dropOffAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  billOfLadingId?: DeserializedType<T, 'Edm.String'> | null;
  isPickupAddressPrivate?: NoYes | null;
  shippingCarrierVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  pickupAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  dropOffAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  loadVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  holdingFreightEndDatetime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  physicalWeight: DeserializedType<T, 'Edm.Decimal'>;
  shippingCarrier?: ShippingCarriersType<T> | null;
  transportationMode?: TransportationModesType<T> | null;
  shippingCarrierVendor?: VendorsV2Type<T> | null;
  loadCustomer?: CustomersV3Type<T> | null;
}
