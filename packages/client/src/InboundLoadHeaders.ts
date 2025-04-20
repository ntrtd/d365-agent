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
import type { InboundLoadHeadersApi } from './InboundLoadHeadersApi';
import { NoYes } from './NoYes';
import { WhsReceivingCompletedLoadDeliveryPolicy } from './WhsReceivingCompletedLoadDeliveryPolicy';
import {
  InboundShipmentHeaders,
  InboundShipmentHeadersType
} from './InboundShipmentHeaders';
import {
  LicensePlateReceivingRegistrationsHistory,
  LicensePlateReceivingRegistrationsHistoryType
} from './LicensePlateReceivingRegistrationsHistory';
import {
  ShipmentReceiptJournalHeaders,
  ShipmentReceiptJournalHeadersType
} from './ShipmentReceiptJournalHeaders';

/**
 * This class represents the entity "InboundLoadHeaders" of service "d365_metadata".
 */
export class InboundLoadHeaders<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements InboundLoadHeadersType<T>
{
  /**
   * Technical entity name for InboundLoadHeaders.
   */
  static override _entityName = 'InboundLoadHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InboundLoadHeaders entity.
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
   * Load External Reference Number.
   * @nullable
   */
  declare loadExternalReferenceNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Car Number.
   * @nullable
   */
  declare carNumber?: DeserializedType<T, 'Edm.String'> | null;
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
   * Estimated Arrival Date Time.
   */
  declare estimatedArrivalDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Load Depth.
   */
  declare loadDepth: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Receiving Completed Delivery Policy.
   * @nullable
   */
  declare receivingCompletedDeliveryPolicy?: WhsReceivingCompletedLoadDeliveryPolicy | null;
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
   * One-to-many navigation property to the {@link InboundShipmentHeaders} entity.
   */
  declare inboundShipmentHeader: InboundShipmentHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link LicensePlateReceivingRegistrationsHistory} entity.
   */
  declare inbundLoadHeaders: LicensePlateReceivingRegistrationsHistory<T>[];
  /**
   * One-to-many navigation property to the {@link ShipmentReceiptJournalHeaders} entity.
   */
  declare shipmentReciptJournalHeaders: ShipmentReceiptJournalHeaders<T>[];

  constructor(_entityApi: InboundLoadHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface InboundLoadHeadersType<
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
  loadExternalReferenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  carNumber?: DeserializedType<T, 'Edm.String'> | null;
  brokerId?: DeserializedType<T, 'Edm.String'> | null;
  masterBillOfLadingId?: DeserializedType<T, 'Edm.String'> | null;
  trailerNumber?: DeserializedType<T, 'Edm.String'> | null;
  voyageNumber?: DeserializedType<T, 'Edm.String'> | null;
  shippingCarrierVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  actualNetWeight: DeserializedType<T, 'Edm.Decimal'>;
  actualTareWeight: DeserializedType<T, 'Edm.Decimal'>;
  estimatedArrivalDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  loadDepth: DeserializedType<T, 'Edm.Decimal'>;
  receivingCompletedDeliveryPolicy?: WhsReceivingCompletedLoadDeliveryPolicy | null;
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
  inboundShipmentHeader: InboundShipmentHeadersType<T>[];
  inbundLoadHeaders: LicensePlateReceivingRegistrationsHistoryType<T>[];
  shipmentReciptJournalHeaders: ShipmentReceiptJournalHeadersType<T>[];
}
