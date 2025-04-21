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
import type { ShippingCarrierServicesApi } from './ShippingCarrierServicesApi';
import { TmsShippingLabelRequestType } from './TmsShippingLabelRequestType';
import {
  PurchaseAgreements,
  PurchaseAgreementsType
} from './PurchaseAgreements';
import {
  OutboundShipmentOrderHeaders,
  OutboundShipmentOrderHeadersType
} from './OutboundShipmentOrderHeaders';
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
 * This class represents the entity "ShippingCarrierServices" of service "d365_metadata".
 */
export class ShippingCarrierServices<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ShippingCarrierServicesType<T>
{
  /**
   * Technical entity name for ShippingCarrierServices.
   */
  static override _entityName = 'ShippingCarrierServices';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ShippingCarrierServices entity.
   */
  static _keys = ['dataAreaId', 'ShippingCarrierId', 'ServiceId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Shipping Carrier Id.
   */
  declare shippingCarrierId: DeserializedType<T, 'Edm.String'>;
  /**
   * Service Id.
   */
  declare serviceId: DeserializedType<T, 'Edm.String'>;
  /**
   * External Shipping Carrier Service Id.
   * @nullable
   */
  declare externalShippingCarrierServiceId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Physical Load Template Id.
   * @nullable
   */
  declare physicalLoadTemplateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transportation Billing Group Id.
   * @nullable
   */
  declare transportationBillingGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Shipping Label Request Type.
   * @nullable
   */
  declare shippingLabelRequestType?: TmsShippingLabelRequestType | null;
  /**
   * Delivery Mode Code.
   * @nullable
   */
  declare deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Load Volume Factor.
   */
  declare loadVolumeFactor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Service Name.
   * @nullable
   */
  declare serviceName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transportation Method Id.
   * @nullable
   */
  declare transportationMethodId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link PurchaseAgreements} entity.
   */
  declare purchaseAgreementHeaders: PurchaseAgreements<T>[];
  /**
   * One-to-many navigation property to the {@link OutboundShipmentOrderHeaders} entity.
   */
  declare outboundShipmentOrderHeaders: OutboundShipmentOrderHeaders<T>[];
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

  constructor(_entityApi: ShippingCarrierServicesApi<T>) {
    super(_entityApi);
  }
}

export interface ShippingCarrierServicesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  shippingCarrierId: DeserializedType<T, 'Edm.String'>;
  serviceId: DeserializedType<T, 'Edm.String'>;
  externalShippingCarrierServiceId?: DeserializedType<T, 'Edm.String'> | null;
  physicalLoadTemplateId?: DeserializedType<T, 'Edm.String'> | null;
  transportationBillingGroupId?: DeserializedType<T, 'Edm.String'> | null;
  shippingLabelRequestType?: TmsShippingLabelRequestType | null;
  deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  loadVolumeFactor: DeserializedType<T, 'Edm.Decimal'>;
  serviceName?: DeserializedType<T, 'Edm.String'> | null;
  transportationMethodId?: DeserializedType<T, 'Edm.String'> | null;
  purchaseAgreementHeaders: PurchaseAgreementsType<T>[];
  outboundShipmentOrderHeaders: OutboundShipmentOrderHeadersType<T>[];
  shipmentPackingSlipJournalHeaders: ShipmentPackingSlipJournalHeadersType<T>[];
  salesAgreementHeaders: SalesAgreementsType<T>[];
  shipmentReciptJournalHeaders: ShipmentReceiptJournalHeadersType<T>[];
  clmIntegrationPurchaseAgreementHeaders: ClmIntegrationPurchaseAgreementsType<T>[];
}
