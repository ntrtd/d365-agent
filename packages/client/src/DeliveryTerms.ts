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
import type { DeliveryTermsApi } from './DeliveryTermsApi';
import { LogisticsLocationRoleType } from './LogisticsLocationRoleType';
import { NoYes } from './NoYes';
import { WmsFreightChargeTerms } from './WmsFreightChargeTerms';
import { CustomInventTransStatusRu } from './CustomInventTransStatusRu';
import { Prospects, ProspectsType } from './Prospects';
import {
  BundleSalesOrderConfirmationBundleParentLines,
  BundleSalesOrderConfirmationBundleParentLinesType
} from './BundleSalesOrderConfirmationBundleParentLines';
import {
  PurchaseAgreements,
  PurchaseAgreementsType
} from './PurchaseAgreements';
import {
  SalesAgreementConfirmations,
  SalesAgreementConfirmationsType
} from './SalesAgreementConfirmations';
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
  BundleSalesOrderConfirmationLines,
  BundleSalesOrderConfirmationLinesType
} from './BundleSalesOrderConfirmationLines';
import {
  ClmIntegrationPurchaseAgreements,
  ClmIntegrationPurchaseAgreementsType
} from './ClmIntegrationPurchaseAgreements';

/**
 * This class represents the entity "DeliveryTerms" of service "d365_metadata".
 */
export class DeliveryTerms<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DeliveryTermsType<T>
{
  /**
   * Technical entity name for DeliveryTerms.
   */
  static override _entityName = 'DeliveryTerms';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DeliveryTerms entity.
   */
  static _keys = ['dataAreaId', 'TermsCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Terms Code.
   */
  declare termsCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Inventory Profile.
   * @nullable
   */
  declare inventoryProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Code.
   * @nullable
   */
  declare intrastatCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Location Role.
   * @nullable
   */
  declare salesTaxLocationRole?: LogisticsLocationRoleType | null;
  /**
   * Is Cash On Delivery.
   * @nullable
   */
  declare isCashOnDelivery?: NoYes | null;
  /**
   * Do Retail Sales Orders Get Transportation Charges Added.
   * @nullable
   */
  declare doRetailSalesOrdersGetTransportationChargesAdded?: NoYes | null;
  /**
   * Will Shipment Confirmation Transfer Charges.
   * @nullable
   */
  declare willShipmentConfirmationTransferCharges?: NoYes | null;
  /**
   * Terms Description.
   * @nullable
   */
  declare termsDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Freight Charge Terms.
   * @nullable
   */
  declare freightChargeTerms?: WmsFreightChargeTerms | null;
  /**
   * Receipt Transaction Status.
   * @nullable
   */
  declare receiptTransactionStatus?: CustomInventTransStatusRu | null;
  /**
   * Port Mandatory.
   * @nullable
   */
  declare portMandatory?: NoYes | null;
  /**
   * Goods In Transit Control.
   * @nullable
   */
  declare goodsInTransitControl?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link Prospects} entity.
   */
  declare prospects: Prospects<T>[];
  /**
   * One-to-many navigation property to the {@link BundleSalesOrderConfirmationBundleParentLines} entity.
   */
  declare bundleSalesOrderConfirmationBundleParentLines: BundleSalesOrderConfirmationBundleParentLines<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseAgreements} entity.
   */
  declare purchaseAgreementHeaders: PurchaseAgreements<T>[];
  /**
   * One-to-many navigation property to the {@link SalesAgreementConfirmations} entity.
   */
  declare salesAgreementConfirmationHeaders: SalesAgreementConfirmations<T>[];
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
   * One-to-many navigation property to the {@link BundleSalesOrderConfirmationLines} entity.
   */
  declare bundleSalesOrderConfirmationLines: BundleSalesOrderConfirmationLines<T>[];
  /**
   * One-to-many navigation property to the {@link ClmIntegrationPurchaseAgreements} entity.
   */
  declare clmIntegrationPurchaseAgreementHeaders: ClmIntegrationPurchaseAgreements<T>[];

  constructor(_entityApi: DeliveryTermsApi<T>) {
    super(_entityApi);
  }
}

export interface DeliveryTermsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  termsCode: DeserializedType<T, 'Edm.String'>;
  inventoryProfile?: DeserializedType<T, 'Edm.String'> | null;
  intrastatCode?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxLocationRole?: LogisticsLocationRoleType | null;
  isCashOnDelivery?: NoYes | null;
  doRetailSalesOrdersGetTransportationChargesAdded?: NoYes | null;
  willShipmentConfirmationTransferCharges?: NoYes | null;
  termsDescription?: DeserializedType<T, 'Edm.String'> | null;
  freightChargeTerms?: WmsFreightChargeTerms | null;
  receiptTransactionStatus?: CustomInventTransStatusRu | null;
  portMandatory?: NoYes | null;
  goodsInTransitControl?: NoYes | null;
  prospects: ProspectsType<T>[];
  bundleSalesOrderConfirmationBundleParentLines: BundleSalesOrderConfirmationBundleParentLinesType<T>[];
  purchaseAgreementHeaders: PurchaseAgreementsType<T>[];
  salesAgreementConfirmationHeaders: SalesAgreementConfirmationsType<T>[];
  outboundShipmentOrderHeaders: OutboundShipmentOrderHeadersType<T>[];
  shipmentPackingSlipJournalHeaders: ShipmentPackingSlipJournalHeadersType<T>[];
  salesAgreementHeaders: SalesAgreementsType<T>[];
  shipmentReciptJournalHeaders: ShipmentReceiptJournalHeadersType<T>[];
  bundleSalesOrderConfirmationLines: BundleSalesOrderConfirmationLinesType<T>[];
  clmIntegrationPurchaseAgreementHeaders: ClmIntegrationPurchaseAgreementsType<T>[];
}
