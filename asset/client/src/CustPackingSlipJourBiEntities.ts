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
import type { CustPackingSlipJourBiEntitiesApi } from './CustPackingSlipJourBiEntitiesApi';
import { NoYes } from './NoYes';
import { RefNum } from './RefNum';
import { WmsFreightedBy } from './WmsFreightedBy';
import { Listcode } from './Listcode';
import { InventProfileTypeRu } from './InventProfileTypeRu';
import { FreightSlipType } from './FreightSlipType';
import { SalesType } from './SalesType';

/**
 * This class represents the entity "CustPackingSlipJourBiEntities" of service "d365_metadata".
 */
export class CustPackingSlipJourBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustPackingSlipJourBiEntitiesType<T>
{
  /**
   * Technical entity name for CustPackingSlipJourBiEntities.
   */
  static override _entityName = 'CustPackingSlipJourBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustPackingSlipJourBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SourceDocumentHeader'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Document Header.
   */
  declare sourceDocumentHeader: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Qty.
   */
  declare qty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transportation Delivery Owner.
   */
  declare transportationDeliveryOwner: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Transportation Document.
   */
  declare transportationDocument: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Order Account.
   * @nullable
   */
  declare orderAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Compiler.
   */
  declare compiler: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Return Item Num.
   * @nullable
   */
  declare returnItemNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Packing Slip Id.
   * @nullable
   */
  declare returnPackingSlipId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inter Company Company Id.
   * @nullable
   */
  declare interCompanyCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker Sales Taker.
   */
  declare workerSalesTaker: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Internal Packing Slip Id.
   * @nullable
   */
  declare internalPackingSlipId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoicing Name.
   * @nullable
   */
  declare invoicingName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fin Tag.
   */
  declare finTag: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Ship Carrier Id.
   * @nullable
   */
  declare shipCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Print Mgmt Site Id.
   * @nullable
   */
  declare printMgmtSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inter Company Posted.
   * @nullable
   */
  declare interCompanyPosted?: NoYes | null;
  /**
   * Intrastat Fulfillment Date Hu.
   */
  declare intrastatFulfillmentDateHu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Dlv Mode.
   * @nullable
   */
  declare dlvMode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Weight.
   */
  declare weight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Bol Address.
   * @nullable
   */
  declare bolAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dlv Term.
   * @nullable
   */
  declare dlvTerm?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Party Tax Id.
   */
  declare partyTaxId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Ref Num.
   * @nullable
   */
  declare refNum?: RefNum | null;
  /**
   * Off Session Id Ru.
   * @nullable
   */
  declare offSessionIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Carrier Blind Shipment.
   * @nullable
   */
  declare shipCarrierBlindShipment?: NoYes | null;
  /**
   * Ship Carrier Delivery Contact.
   * @nullable
   */
  declare shipCarrierDeliveryContact?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Postal Address.
   */
  declare invoicePostalAddress: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Bol Carrier Name.
   * @nullable
   */
  declare bolCarrierName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger Voucher.
   * @nullable
   */
  declare ledgerVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Id.
   */
  declare taxId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Pds Cw Qty.
   */
  declare pdsCwQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Bol Freighted By.
   * @nullable
   */
  declare bolFreightedBy?: WmsFreightedBy | null;
  /**
   * Document Date.
   */
  declare documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Volume.
   */
  declare volume: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Number Sequence Group.
   * @nullable
   */
  declare numberSequenceGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Location Id.
   * @nullable
   */
  declare inventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dlv Reason.
   * @nullable
   */
  declare dlvReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Packing Slip Id.
   * @nullable
   */
  declare packingSlipId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Ref.
   * @nullable
   */
  declare customerRef?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Freight Slip Num.
   * @nullable
   */
  declare freightSlipNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Dispatch.
   * @nullable
   */
  declare intrastatDispatch?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Carrier Email.
   * @nullable
   */
  declare shipCarrierEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Packing Slip Numbering Code Lt.
   * @nullable
   */
  declare packingSlipNumberingCodeLt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Postal Address.
   */
  declare deliveryPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Bol Package Appearance.
   * @nullable
   */
  declare bolPackageAppearance?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Order.
   * @nullable
   */
  declare purchaseOrder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reason Table Ref Br.
   */
  declare reasonTableRefBr: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Transportation Delivery Loader.
   */
  declare transportationDeliveryLoader: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sales Id.
   * @nullable
   */
  declare salesId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transportation Delivery Contractor.
   */
  declare transportationDeliveryContractor: DeserializedType<T, 'Edm.Int64'>;
  /**
   * List Code.
   * @nullable
   */
  declare listCode?: Listcode | null;
  /**
   * Invoice Issue Due Date W.
   */
  declare invoiceIssueDueDateW: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invent Profile Type Ru.
   * @nullable
   */
  declare inventProfileTypeRu?: InventProfileTypeRu | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Lc Export Line.
   */
  declare bankLcExportLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Delivery Name.
   * @nullable
   */
  declare deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Freight Slip Type.
   * @nullable
   */
  declare freightSlipType?: FreightSlipType | null;
  /**
   * Print Blank Date Lt.
   * @nullable
   */
  declare printBlankDateLt?: NoYes | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sales Type.
   * @nullable
   */
  declare salesType?: SalesType | null;
  /**
   * Ship Carrier Phone.
   * @nullable
   */
  declare shipCarrierPhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Export Reason.
   * @nullable
   */
  declare exportReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Printed.
   * @nullable
   */
  declare printed?: NoYes | null;
  /**
   * Parm Id.
   * @nullable
   */
  declare parmId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invoice Account.
   * @nullable
   */
  declare invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Carrier Account.
   * @nullable
   */
  declare shipCarrierAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inter Company Purch Id.
   * @nullable
   */
  declare interCompanyPurchId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bill Of Lading Id.
   * @nullable
   */
  declare billOfLadingId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Date.
   */
  declare deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Contact Person Id.
   * @nullable
   */
  declare contactPersonId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CustPackingSlipJourBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface CustPackingSlipJourBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceDocumentHeader: DeserializedType<T, 'Edm.Int64'>;
  qty: DeserializedType<T, 'Edm.Decimal'>;
  transportationDeliveryOwner: DeserializedType<T, 'Edm.Int64'>;
  transportationDocument: DeserializedType<T, 'Edm.Int64'>;
  orderAccount?: DeserializedType<T, 'Edm.String'> | null;
  compiler: DeserializedType<T, 'Edm.Int64'>;
  returnItemNum?: DeserializedType<T, 'Edm.String'> | null;
  returnPackingSlipId?: DeserializedType<T, 'Edm.String'> | null;
  interCompanyCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  workerSalesTaker: DeserializedType<T, 'Edm.Int64'>;
  internalPackingSlipId?: DeserializedType<T, 'Edm.String'> | null;
  invoicingName?: DeserializedType<T, 'Edm.String'> | null;
  finTag: DeserializedType<T, 'Edm.Int64'>;
  shipCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  printMgmtSiteId?: DeserializedType<T, 'Edm.String'> | null;
  interCompanyPosted?: NoYes | null;
  intrastatFulfillmentDateHu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dlvMode?: DeserializedType<T, 'Edm.String'> | null;
  weight: DeserializedType<T, 'Edm.Decimal'>;
  bolAddress?: DeserializedType<T, 'Edm.String'> | null;
  dlvTerm?: DeserializedType<T, 'Edm.String'> | null;
  partyTaxId: DeserializedType<T, 'Edm.Int64'>;
  refNum?: RefNum | null;
  offSessionIdRu?: DeserializedType<T, 'Edm.String'> | null;
  shipCarrierBlindShipment?: NoYes | null;
  shipCarrierDeliveryContact?: DeserializedType<T, 'Edm.String'> | null;
  invoicePostalAddress: DeserializedType<T, 'Edm.Int64'>;
  bolCarrierName?: DeserializedType<T, 'Edm.String'> | null;
  ledgerVoucher?: DeserializedType<T, 'Edm.String'> | null;
  taxId: DeserializedType<T, 'Edm.Int64'>;
  pdsCwQty: DeserializedType<T, 'Edm.Decimal'>;
  bolFreightedBy?: WmsFreightedBy | null;
  documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  volume: DeserializedType<T, 'Edm.Decimal'>;
  numberSequenceGroup?: DeserializedType<T, 'Edm.String'> | null;
  inventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  dlvReason?: DeserializedType<T, 'Edm.String'> | null;
  packingSlipId?: DeserializedType<T, 'Edm.String'> | null;
  customerRef?: DeserializedType<T, 'Edm.String'> | null;
  freightSlipNum?: DeserializedType<T, 'Edm.String'> | null;
  intrastatDispatch?: DeserializedType<T, 'Edm.String'> | null;
  shipCarrierEmail?: DeserializedType<T, 'Edm.String'> | null;
  packingSlipNumberingCodeLt?: DeserializedType<T, 'Edm.String'> | null;
  deliveryPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  bolPackageAppearance?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrder?: DeserializedType<T, 'Edm.String'> | null;
  reasonTableRefBr: DeserializedType<T, 'Edm.Int64'>;
  transportationDeliveryLoader: DeserializedType<T, 'Edm.Int64'>;
  salesId?: DeserializedType<T, 'Edm.String'> | null;
  transportationDeliveryContractor: DeserializedType<T, 'Edm.Int64'>;
  listCode?: Listcode | null;
  invoiceIssueDueDateW: DeserializedType<T, 'Edm.DateTimeOffset'>;
  inventProfileTypeRu?: InventProfileTypeRu | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  bankLcExportLine: DeserializedType<T, 'Edm.Int64'>;
  deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  freightSlipType?: FreightSlipType | null;
  printBlankDateLt?: NoYes | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  salesType?: SalesType | null;
  shipCarrierPhone?: DeserializedType<T, 'Edm.String'> | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  exportReason?: DeserializedType<T, 'Edm.String'> | null;
  printed?: NoYes | null;
  parmId?: DeserializedType<T, 'Edm.String'> | null;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  shipCarrierAccount?: DeserializedType<T, 'Edm.String'> | null;
  interCompanyPurchId?: DeserializedType<T, 'Edm.String'> | null;
  billOfLadingId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
}
