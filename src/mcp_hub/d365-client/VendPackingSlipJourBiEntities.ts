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
import type { VendPackingSlipJourBiEntitiesApi } from './VendPackingSlipJourBiEntitiesApi';
import { NoYes } from './NoYes';
import { PurchaseType } from './PurchaseType';
import { InventProfileTypeRu } from './InventProfileTypeRu';
import { FreightSlipType } from './FreightSlipType';
import { ReceiptListDeviationTypeRu } from './ReceiptListDeviationTypeRu';
import { PurchDlvAddr } from './PurchDlvAddr';

/**
 * This class represents the entity "VendPackingSlipJourBiEntities" of service "d365_metadata".
 */
export class VendPackingSlipJourBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendPackingSlipJourBiEntitiesType<T>
{
  /**
   * Technical entity name for VendPackingSlipJourBiEntities.
   */
  static override _entityName = 'VendPackingSlipJourBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendPackingSlipJourBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SourceDocumentHeader', 'SysDataAreaId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Document Header.
   */
  declare sourceDocumentHeader: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Data Area Id.
   */
  declare sysDataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transportation Document.
   */
  declare transportationDocument: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Currency Code W.
   * @nullable
   */
  declare currencyCodeW?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Account.
   * @nullable
   */
  declare orderAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Item Num.
   * @nullable
   */
  declare returnItemNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inter Company Company Id.
   * @nullable
   */
  declare interCompanyCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignor Account Ru.
   * @nullable
   */
  declare consignorAccountRu?: DeserializedType<T, 'Edm.String'> | null;
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
   * Consignee Account Ru.
   * @nullable
   */
  declare consigneeAccountRu?: DeserializedType<T, 'Edm.String'> | null;
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
   * Off Session Id Ru.
   * @nullable
   */
  declare offSessionIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Region Id.
   * @nullable
   */
  declare countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Buyer Group Id.
   * @nullable
   */
  declare itemBuyerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Id.
   */
  declare taxId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Purchase Type.
   * @nullable
   */
  declare purchaseType?: PurchaseType | null;
  /**
   * Document Date.
   */
  declare documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Number Sequence Group.
   * @nullable
   */
  declare numberSequenceGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Req Attention.
   * @nullable
   */
  declare reqAttention?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Packing Slip Id.
   * @nullable
   */
  declare packingSlipId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Requester.
   */
  declare requester: DeserializedType<T, 'Edm.Int64'>;
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
   * Purch Id.
   * @nullable
   */
  declare purchId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Lc Import Line.
   */
  declare bankLcImportLine: DeserializedType<T, 'Edm.Int64'>;
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
   * Inter Company Sales Id.
   * @nullable
   */
  declare interCompanySalesId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Grn Number In.
   * @nullable
   */
  declare grnNumberIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Freight Slip Type.
   * @nullable
   */
  declare freightSlipType?: FreightSlipType | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * End Disc Ru.
   */
  declare endDiscRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Account.
   * @nullable
   */
  declare invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Balance Ru.
   */
  declare orderBalanceRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Date.
   */
  declare deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Receipt List Deviation Type Ru.
   * @nullable
   */
  declare receiptListDeviationTypeRu?: ReceiptListDeviationTypeRu | null;
  /**
   * Delivery Type.
   * @nullable
   */
  declare deliveryType?: PurchDlvAddr | null;

  constructor(_entityApi: VendPackingSlipJourBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface VendPackingSlipJourBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceDocumentHeader: DeserializedType<T, 'Edm.Int64'>;
  sysDataAreaId: DeserializedType<T, 'Edm.String'>;
  transportationDocument: DeserializedType<T, 'Edm.Int64'>;
  currencyCodeW?: DeserializedType<T, 'Edm.String'> | null;
  orderAccount?: DeserializedType<T, 'Edm.String'> | null;
  returnItemNum?: DeserializedType<T, 'Edm.String'> | null;
  interCompanyCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  consignorAccountRu?: DeserializedType<T, 'Edm.String'> | null;
  interCompanyPosted?: NoYes | null;
  intrastatFulfillmentDateHu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dlvMode?: DeserializedType<T, 'Edm.String'> | null;
  consigneeAccountRu?: DeserializedType<T, 'Edm.String'> | null;
  dlvTerm?: DeserializedType<T, 'Edm.String'> | null;
  partyTaxId: DeserializedType<T, 'Edm.Int64'>;
  offSessionIdRu?: DeserializedType<T, 'Edm.String'> | null;
  countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  itemBuyerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  taxId: DeserializedType<T, 'Edm.Int64'>;
  purchaseType?: PurchaseType | null;
  documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  numberSequenceGroup?: DeserializedType<T, 'Edm.String'> | null;
  reqAttention?: DeserializedType<T, 'Edm.String'> | null;
  packingSlipId?: DeserializedType<T, 'Edm.String'> | null;
  freightSlipNum?: DeserializedType<T, 'Edm.String'> | null;
  intrastatDispatch?: DeserializedType<T, 'Edm.String'> | null;
  requester: DeserializedType<T, 'Edm.Int64'>;
  packingSlipNumberingCodeLt?: DeserializedType<T, 'Edm.String'> | null;
  deliveryPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  purchId?: DeserializedType<T, 'Edm.String'> | null;
  bankLcImportLine: DeserializedType<T, 'Edm.Int64'>;
  invoiceIssueDueDateW: DeserializedType<T, 'Edm.DateTimeOffset'>;
  inventProfileTypeRu?: InventProfileTypeRu | null;
  interCompanySalesId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  grnNumberIn?: DeserializedType<T, 'Edm.String'> | null;
  freightSlipType?: FreightSlipType | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  endDiscRu: DeserializedType<T, 'Edm.Decimal'>;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  orderBalanceRu: DeserializedType<T, 'Edm.Decimal'>;
  deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  receiptListDeviationTypeRu?: ReceiptListDeviationTypeRu | null;
  deliveryType?: PurchDlvAddr | null;
}
