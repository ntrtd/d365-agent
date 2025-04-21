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
import type { ShippingCarriersApi } from './ShippingCarriersApi';
import { NoYes } from './NoYes';
import { TmsLoadTender } from './TmsLoadTender';
import {
  PurchaseAgreements,
  PurchaseAgreementsType
} from './PurchaseAgreements';
import {
  OutboundShipmentOrderHeaders,
  OutboundShipmentOrderHeadersType
} from './OutboundShipmentOrderHeaders';
import {
  FreightBillDetails,
  FreightBillDetailsType
} from './FreightBillDetails';
import {
  ShipmentPackingSlipJournalHeaders,
  ShipmentPackingSlipJournalHeadersType
} from './ShipmentPackingSlipJournalHeaders';
import { SalesAgreements, SalesAgreementsType } from './SalesAgreements';
import {
  ShipmentReceiptJournalHeaders,
  ShipmentReceiptJournalHeadersType
} from './ShipmentReceiptJournalHeaders';
import {
  ClmIntegrationPurchaseAgreements,
  ClmIntegrationPurchaseAgreementsType
} from './ClmIntegrationPurchaseAgreements';

/**
 * This class represents the entity "ShippingCarriers" of service "d365_metadata".
 */
export class ShippingCarriers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ShippingCarriersType<T>
{
  /**
   * Technical entity name for ShippingCarriers.
   */
  static override _entityName = 'ShippingCarriers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ShippingCarriers entity.
   */
  static _keys = ['dataAreaId', 'CarrierId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Carrier Id.
   */
  declare carrierId: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Shipping Carrier Active.
   * @nullable
   */
  declare isShippingCarrierActive?: NoYes | null;
  /**
   * Carrier Name.
   * @nullable
   */
  declare carrierName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transportation Mode Id.
   * @nullable
   */
  declare transportationModeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transportation Tender Type.
   * @nullable
   */
  declare transportationTenderType?: TmsLoadTender | null;
  /**
   * Shipping Carrier Tracking Url.
   * @nullable
   */
  declare shippingCarrierTrackingUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Carrier Website Url.
   * @nullable
   */
  declare shippingCarrierWebsiteUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Shipping Carrier Rating Active.
   * @nullable
   */
  declare isShippingCarrierRatingActive?: NoYes | null;
  /**
   * Pro Number Sequence Id.
   * @nullable
   */
  declare proNumberSequenceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Broker.
   * @nullable
   */
  declare isBroker?: NoYes | null;
  /**
   * Average Container Weight.
   */
  declare averageContainerWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Standard Carrier Alpha Code.
   * @nullable
   */
  declare standardCarrierAlphaCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Carrier Vendor Account Number.
   * @nullable
   */
  declare shippingCarrierVendorAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-many navigation property to the {@link PurchaseAgreements} entity.
   */
  declare purchaseAgreementHeaders: PurchaseAgreements<T>[];
  /**
   * One-to-many navigation property to the {@link OutboundShipmentOrderHeaders} entity.
   */
  declare outboundShipmentOrderHeaders: OutboundShipmentOrderHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link FreightBillDetails} entity.
   */
  declare freightBillDetails: FreightBillDetails<T>[];
  /**
   * One-to-many navigation property to the {@link ShipmentPackingSlipJournalHeaders} entity.
   */
  declare shipmentPackingSlipJournalHeaders: ShipmentPackingSlipJournalHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link SalesAgreements} entity.
   */
  declare salesAgreementHeaders: SalesAgreements<T>[];
  /**
   * One-to-many navigation property to the {@link ShipmentReceiptJournalHeaders} entity.
   */
  declare shipmentReciptJournalHeaders: ShipmentReceiptJournalHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link ClmIntegrationPurchaseAgreements} entity.
   */
  declare clmIntegrationPurchaseAgreementHeaders: ClmIntegrationPurchaseAgreements<T>[];

  constructor(_entityApi: ShippingCarriersApi<T>) {
    super(_entityApi);
  }
}

export interface ShippingCarriersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  carrierId: DeserializedType<T, 'Edm.String'>;
  isShippingCarrierActive?: NoYes | null;
  carrierName?: DeserializedType<T, 'Edm.String'> | null;
  transportationModeId?: DeserializedType<T, 'Edm.String'> | null;
  transportationTenderType?: TmsLoadTender | null;
  shippingCarrierTrackingUrl?: DeserializedType<T, 'Edm.String'> | null;
  shippingCarrierWebsiteUrl?: DeserializedType<T, 'Edm.String'> | null;
  isShippingCarrierRatingActive?: NoYes | null;
  proNumberSequenceId?: DeserializedType<T, 'Edm.String'> | null;
  isBroker?: NoYes | null;
  averageContainerWeight: DeserializedType<T, 'Edm.Decimal'>;
  standardCarrierAlphaCode?: DeserializedType<T, 'Edm.String'> | null;
  shippingCarrierVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  purchaseAgreementHeaders: PurchaseAgreementsType<T>[];
  outboundShipmentOrderHeaders: OutboundShipmentOrderHeadersType<T>[];
  freightBillDetails: FreightBillDetailsType<T>[];
  shipmentPackingSlipJournalHeaders: ShipmentPackingSlipJournalHeadersType<T>[];
  salesAgreementHeaders: SalesAgreementsType<T>[];
  shipmentReciptJournalHeaders: ShipmentReceiptJournalHeadersType<T>[];
  clmIntegrationPurchaseAgreementHeaders: ClmIntegrationPurchaseAgreementsType<T>[];
}
