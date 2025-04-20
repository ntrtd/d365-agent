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
import type { OutboundLoadHeadersApi } from './OutboundLoadHeadersApi';
import { NoYes } from './NoYes';
import { WhsLoadPackingSlipCreationPolicy } from './WhsLoadPackingSlipCreationPolicy';
import {
  OutboundShipmentHeaders,
  OutboundShipmentHeadersType
} from './OutboundShipmentHeaders';
import {
  ShipmentPackingSlipJournalHeaders,
  ShipmentPackingSlipJournalHeadersType
} from './ShipmentPackingSlipJournalHeaders';

/**
 * This class represents the entity "OutboundLoadHeaders" of service "d365_metadata".
 */
export class OutboundLoadHeaders<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements OutboundLoadHeadersType<T>
{
  /**
   * Technical entity name for OutboundLoadHeaders.
   */
  static override _entityName = 'OutboundLoadHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OutboundLoadHeaders entity.
   */
  static _keys = ['dataAreaId', 'LoadId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Load Id.
   */
  declare loadId: DeserializedType<T, 'Edm.String'>;
  /**
   * Actual Gross Weight.
   */
  declare actualGrossWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Car Registration State Id.
   * @nullable
   */
  declare carRegistrationStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Load Floor Stacked.
   * @nullable
   */
  declare isLoadFloorStacked?: NoYes | null;
  /**
   * Tractor Number.
   * @nullable
   */
  declare tractorNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Load Height.
   */
  declare loadHeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Shipping Carrier Group Id.
   * @nullable
   */
  declare shippingCarrierGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Load Split Ship Confirm Allowed.
   * @nullable
   */
  declare isLoadSplitShipConfirmAllowed?: NoYes | null;
  /**
   * Car Number.
   * @nullable
   */
  declare carNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Load External Reference Number.
   * @nullable
   */
  declare loadExternalReferenceNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Broker Id.
   * @nullable
   */
  declare brokerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Master Bill Of Lading Id.
   * @nullable
   */
  declare masterBillOfLadingId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trailer Number.
   * @nullable
   */
  declare trailerNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Packing Slip Creation Policy.
   * @nullable
   */
  declare packingSlipCreationPolicy?: WhsLoadPackingSlipCreationPolicy | null;
  /**
   * Voyage Number.
   * @nullable
   */
  declare voyageNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Carrier Vendor Account Number.
   * @nullable
   */
  declare shippingCarrierVendorAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Actual Net Weight.
   */
  declare actualNetWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Actual Tare Weight.
   */
  declare actualTareWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Load Depth.
   */
  declare loadDepth: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * User Defined Field 1.
   * @nullable
   */
  declare userDefinedField1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Defined Field 2.
   * @nullable
   */
  declare userDefinedField2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Defined Field 3.
   * @nullable
   */
  declare userDefinedField3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pro Number.
   * @nullable
   */
  declare proNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transportation Booking Number.
   * @nullable
   */
  declare transportationBookingNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Shipping Carrier Code.
   * @nullable
   */
  declare shippingCarrierCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inspection Seal Number.
   * @nullable
   */
  declare inspectionSealNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Carrier Service Id.
   * @nullable
   */
  declare shippingCarrierServiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Load Width.
   */
  declare loadWidth: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Seal Number.
   * @nullable
   */
  declare sealNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vessel Name.
   * @nullable
   */
  declare vesselName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link OutboundShipmentHeaders} entity.
   */
  declare outboundShipmentHeader: OutboundShipmentHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link ShipmentPackingSlipJournalHeaders} entity.
   */
  declare shipmentPackingSlipJournalHeaders: ShipmentPackingSlipJournalHeaders<T>[];

  constructor(_entityApi: OutboundLoadHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface OutboundLoadHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  loadId: DeserializedType<T, 'Edm.String'>;
  actualGrossWeight: DeserializedType<T, 'Edm.Decimal'>;
  carRegistrationStateId?: DeserializedType<T, 'Edm.String'> | null;
  isLoadFloorStacked?: NoYes | null;
  tractorNumber?: DeserializedType<T, 'Edm.String'> | null;
  loadHeight: DeserializedType<T, 'Edm.Decimal'>;
  shippingCarrierGroupId?: DeserializedType<T, 'Edm.String'> | null;
  isLoadSplitShipConfirmAllowed?: NoYes | null;
  carNumber?: DeserializedType<T, 'Edm.String'> | null;
  loadExternalReferenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  brokerId?: DeserializedType<T, 'Edm.String'> | null;
  masterBillOfLadingId?: DeserializedType<T, 'Edm.String'> | null;
  trailerNumber?: DeserializedType<T, 'Edm.String'> | null;
  packingSlipCreationPolicy?: WhsLoadPackingSlipCreationPolicy | null;
  voyageNumber?: DeserializedType<T, 'Edm.String'> | null;
  shippingCarrierVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  actualNetWeight: DeserializedType<T, 'Edm.Decimal'>;
  actualTareWeight: DeserializedType<T, 'Edm.Decimal'>;
  loadDepth: DeserializedType<T, 'Edm.Decimal'>;
  userDefinedField1?: DeserializedType<T, 'Edm.String'> | null;
  userDefinedField2?: DeserializedType<T, 'Edm.String'> | null;
  userDefinedField3?: DeserializedType<T, 'Edm.String'> | null;
  proNumber?: DeserializedType<T, 'Edm.String'> | null;
  transportationBookingNumber?: DeserializedType<T, 'Edm.String'> | null;
  shippingCarrierCode?: DeserializedType<T, 'Edm.String'> | null;
  inspectionSealNumber?: DeserializedType<T, 'Edm.String'> | null;
  shippingCarrierServiceId?: DeserializedType<T, 'Edm.String'> | null;
  loadWidth: DeserializedType<T, 'Edm.Decimal'>;
  sealNumber?: DeserializedType<T, 'Edm.String'> | null;
  vesselName?: DeserializedType<T, 'Edm.String'> | null;
  outboundShipmentHeader: OutboundShipmentHeadersType<T>[];
  shipmentPackingSlipJournalHeaders: ShipmentPackingSlipJournalHeadersType<T>[];
}
