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
import type { VendInvoiceTransBiEntitiesApi } from './VendInvoiceTransBiEntitiesApi';
import { ExciseTypeIn } from './ExciseTypeIn';
import { NoYes } from './NoYes';
import { VatGoodsTypeIn } from './VatGoodsTypeIn';
import { PurchInvoiceLineType } from './PurchInvoiceLineType';
import { PurchBookVatDocumentTypeInvoice_Ru } from './PurchBookVatDocumentTypeInvoice_Ru';
import { NoYesCombo } from './NoYesCombo';
import { ExciseRecordTypeIn } from './ExciseRecordTypeIn';
import { VendorOperationTypeMx } from './VendorOperationTypeMx';
import { GtaServiceCategoryIn } from './GtaServiceCategoryIn';
import { InventRefType } from './InventRefType';

/**
 * This class represents the entity "VendInvoiceTransBiEntities" of service "d365_metadata".
 */
export class VendInvoiceTransBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendInvoiceTransBiEntitiesType<T>
{
  /**
   * Technical entity name for VendInvoiceTransBiEntities.
   */
  static override _entityName = 'VendInvoiceTransBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendInvoiceTransBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SourceKey'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Vendor Location In.
   */
  declare vendorLocationIn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Excise Type In.
   * @nullable
   */
  declare exciseTypeIn?: ExciseTypeIn | null;
  /**
   * Price Unit.
   */
  declare priceUnit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purch Price.
   */
  declare purchPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Disc Percent.
   */
  declare discPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Orig State Id.
   * @nullable
   */
  declare origStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Sequence Group.
   * @nullable
   */
  declare numberSequenceGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Region Name Ru.
   * @nullable
   */
  declare countryRegionNameRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Amount Ru.
   */
  declare vatAmountRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tcs Group In.
   * @nullable
   */
  declare tcsGroupIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pds Cw Qty Physical.
   */
  declare pdsCwQtyPhysical: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Amount Mst.
   */
  declare lineAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Assessable Value In.
   */
  declare assessableValueIn: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Registration Postal Address In.
   */
  declare registrationPostalAddressIn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Reason Table Ref.
   */
  declare reasonTableRef: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Budget Reservation Line Psn.
   */
  declare budgetReservationLinePsn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Ref Return Invoice Trans W.
   */
  declare refReturnInvoiceTransW: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Line Amount Tax.
   */
  declare lineAmountTax: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Withhold Line Num In.
   */
  declare taxWithholdLineNumIn: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Intrastat Commodity.
   */
  declare intrastatCommodity: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax 1099 Num.
   * @nullable
   */
  declare tax1099Num?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Item Id.
   * @nullable
   */
  declare externalItemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Orig Purch Id.
   * @nullable
   */
  declare origPurchId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax 1099 Fields.
   */
  declare tax1099Fields: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Customs Tariff Code Table In.
   */
  declare customsTariffCodeTableIn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Vat Deferred In.
   */
  declare vatDeferredIn: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rbo Package Line Num.
   */
  declare rboPackageLineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ledger Dimension Values Json.
   * @nullable
   */
  declare ledgerDimensionValuesJson?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Psa Release Amount.
   */
  declare psaReleaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Factured Fully Ru.
   * @nullable
   */
  declare facturedFullyRu?: NoYes | null;
  /**
   * Tax Item Group.
   * @nullable
   */
  declare taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Ref Id.
   * @nullable
   */
  declare inventRefId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Goods Type In.
   * @nullable
   */
  declare vatGoodsTypeIn?: VatGoodsTypeIn | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invent Ref Trans Id.
   * @nullable
   */
  declare inventRefTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Port.
   * @nullable
   */
  declare port?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax 1099 Date.
   */
  declare tax1099Date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invent Qty.
   */
  declare inventQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Withhold Item Group Heading Th.
   */
  declare taxWithholdItemGroupHeadingTh: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Transaction Code.
   * @nullable
   */
  declare transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Trans Id.
   * @nullable
   */
  declare inventTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Dim Id.
   * @nullable
   */
  declare inventDimId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Value Ru.
   */
  declare vatValueRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Excise Amount Mst Ru.
   */
  declare exciseAmountMstRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax 1099 Rec Id.
   */
  declare tax1099RecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Settle Tax 1099 State Amount.
   */
  declare settleTax1099StateAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ngp Codes Table Fr.
   */
  declare ngpCodesTableFr: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Invoice Gtd Id Ru.
   * @nullable
   */
  declare invoiceGtdIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Agreement Line Psn.
   */
  declare agreementLinePsn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Maximum Retail Price In.
   */
  declare maximumRetailPriceIn: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Non Recoverable Percent In.
   */
  declare nonRecoverablePercentIn: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transport.
   * @nullable
   */
  declare transport?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Markup Code Ru.
   * @nullable
   */
  declare markupCodeRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Dispatch Id.
   * @nullable
   */
  declare intrastatDispatchId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Type.
   * @nullable
   */
  declare lineType?: PurchInvoiceLineType | null;
  /**
   * Excise Amount Ru.
   */
  declare exciseAmountRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Multi Ln Percent.
   */
  declare multiLnPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent Date.
   */
  declare inventDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Vend Directive Psn.
   */
  declare vendDirectivePsn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Disc Amount.
   */
  declare discAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice Date.
   */
  declare invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Line Percent.
   */
  declare linePercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purch Id.
   * @nullable
   */
  declare purchId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Disc.
   */
  declare lineDisc: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vat Expense In.
   */
  declare vatExpenseIn: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reverse Charge W.
   * @nullable
   */
  declare reverseChargeW?: NoYes | null;
  /**
   * Alcohol License Series Num Ru.
   * @nullable
   */
  declare alcoholLicenseSeriesNumRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Advance Application Id.
   */
  declare advanceApplicationId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Settle Tax 1099 Amount.
   */
  declare settleTax1099Amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Pwp.
   * @nullable
   */
  declare isPwp?: NoYes | null;
  /**
   * Part Delivery.
   * @nullable
   */
  declare partDelivery?: NoYes | null;
  /**
   * Excise Tariff Codes In.
   */
  declare exciseTariffCodesIn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Group.
   * @nullable
   */
  declare taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Amount Mst W.
   */
  declare taxAmountMstW: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Qty.
   */
  declare qty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Stat Proc Id.
   * @nullable
   */
  declare statProcId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Orig Country Region Id.
   * @nullable
   */
  declare origCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purch Markup.
   */
  declare purchMarkup: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice Id.
   * @nullable
   */
  declare invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Override Sales Tax.
   * @nullable
   */
  declare overrideSalesTax?: NoYes | null;
  /**
   * Vat Document Type Ru.
   * @nullable
   */
  declare vatDocumentTypeRu?: PurchBookVatDocumentTypeInvoice_Ru | null;
  /**
   * Tds Group In.
   * @nullable
   */
  declare tdsGroupIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Factured Qty Ru.
   */
  declare facturedQtyRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ready For Payment.
   * @nullable
   */
  declare readyForPayment?: NoYesCombo | null;
  /**
   * Weight.
   */
  declare weight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax 1099 State.
   * @nullable
   */
  declare tax1099State?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Procurement Category.
   */
  declare procurementCategory: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Line Amount Mst W.
   */
  declare lineAmountMstW: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Amount.
   */
  declare taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Autogenerated.
   * @nullable
   */
  declare taxAutogenerated?: NoYes | null;
  /**
   * Tax Withhold Voucher In.
   * @nullable
   */
  declare taxWithholdVoucherIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Package Id.
   * @nullable
   */
  declare retailPackageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dest County.
   * @nullable
   */
  declare destCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Name.
   * @nullable
   */
  declare deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Fulfillment Date Hu.
   */
  declare intrastatFulfillmentDateHu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Excise Record Type In.
   * @nullable
   */
  declare exciseRecordTypeIn?: ExciseRecordTypeIn | null;
  /**
   * Delivery Postal Address.
   */
  declare deliveryPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Purchase Line Line Number.
   */
  declare purchaseLineLineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Amount Mst Ru.
   */
  declare vatAmountMstRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vat Amount In.
   */
  declare vatAmountIn: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Inter Company Invent Trans Id.
   * @nullable
   */
  declare interCompanyInventTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Operation Type Mx.
   * @nullable
   */
  declare operationTypeMx?: VendorOperationTypeMx | null;
  /**
   * Internal Invoice Id.
   * @nullable
   */
  declare internalInvoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Psa Retainage Amount.
   */
  declare psaRetainageAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Dest State.
   * @nullable
   */
  declare destState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dsa In.
   * @nullable
   */
  declare dsaIn?: NoYes | null;
  /**
   * Purch Unit.
   * @nullable
   */
  declare purchUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Code Table In.
   */
  declare serviceCodeTableIn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax 1099 State Amount.
   */
  declare tax1099StateAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Credit Note Date In.
   */
  declare creditNoteDateIn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Source Document Line.
   */
  declare sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Statistic Value Lt.
   */
  declare statisticValueLt: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Amount.
   */
  declare lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Stocked Product.
   * @nullable
   */
  declare stockedProduct?: NoYes | null;
  /**
   * Excise Value Ru.
   */
  declare exciseValueRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax 1099 Amount.
   */
  declare tax1099Amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pds Cw Qty.
   */
  declare pdsCwQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Gta Service Category In.
   * @nullable
   */
  declare gtaServiceCategoryIn?: GtaServiceCategoryIn | null;
  /**
   * Sales Tax Form Types In.
   */
  declare salesTaxFormTypesIn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Withhold Base Cur Th.
   */
  declare taxWithholdBaseCurTh: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent Ref Type.
   * @nullable
   */
  declare inventRefType?: InventRefType | null;
  /**
   * Company Location In.
   */
  declare companyLocationIn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Withhold Group Th.
   * @nullable
   */
  declare taxWithholdGroupTh?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purch Commitment Line Psn.
   */
  declare purchCommitmentLinePsn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Write Code.
   * @nullable
   */
  declare taxWriteCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qty Physical.
   */
  declare qtyPhysical: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Multi Ln Disc.
   */
  declare multiLnDisc: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Dest Country Region Id.
   * @nullable
   */
  declare destCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: VendInvoiceTransBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface VendInvoiceTransBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  vendorLocationIn: DeserializedType<T, 'Edm.Int64'>;
  exciseTypeIn?: ExciseTypeIn | null;
  priceUnit: DeserializedType<T, 'Edm.Decimal'>;
  purchPrice: DeserializedType<T, 'Edm.Decimal'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  discPercent: DeserializedType<T, 'Edm.Decimal'>;
  origStateId?: DeserializedType<T, 'Edm.String'> | null;
  numberSequenceGroup?: DeserializedType<T, 'Edm.String'> | null;
  countryRegionNameRu?: DeserializedType<T, 'Edm.String'> | null;
  vatAmountRu: DeserializedType<T, 'Edm.Decimal'>;
  tcsGroupIn?: DeserializedType<T, 'Edm.String'> | null;
  pdsCwQtyPhysical: DeserializedType<T, 'Edm.Decimal'>;
  lineAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  assessableValueIn: DeserializedType<T, 'Edm.Decimal'>;
  registrationPostalAddressIn: DeserializedType<T, 'Edm.Int64'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  reasonTableRef: DeserializedType<T, 'Edm.Int64'>;
  budgetReservationLinePsn: DeserializedType<T, 'Edm.Int64'>;
  refReturnInvoiceTransW: DeserializedType<T, 'Edm.Int64'>;
  lineAmountTax: DeserializedType<T, 'Edm.Decimal'>;
  taxWithholdLineNumIn: DeserializedType<T, 'Edm.Decimal'>;
  intrastatCommodity: DeserializedType<T, 'Edm.Int64'>;
  tax1099Num?: DeserializedType<T, 'Edm.String'> | null;
  externalItemId?: DeserializedType<T, 'Edm.String'> | null;
  origPurchId?: DeserializedType<T, 'Edm.String'> | null;
  tax1099Fields: DeserializedType<T, 'Edm.Int64'>;
  customsTariffCodeTableIn: DeserializedType<T, 'Edm.Int64'>;
  vatDeferredIn: DeserializedType<T, 'Edm.Decimal'>;
  rboPackageLineNum: DeserializedType<T, 'Edm.Decimal'>;
  ledgerDimensionValuesJson?: DeserializedType<T, 'Edm.String'> | null;
  psaReleaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  facturedFullyRu?: NoYes | null;
  taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  inventRefId?: DeserializedType<T, 'Edm.String'> | null;
  vatGoodsTypeIn?: VatGoodsTypeIn | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  inventRefTransId?: DeserializedType<T, 'Edm.String'> | null;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  port?: DeserializedType<T, 'Edm.String'> | null;
  tax1099Date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  inventQty: DeserializedType<T, 'Edm.Decimal'>;
  taxWithholdItemGroupHeadingTh: DeserializedType<T, 'Edm.Int64'>;
  transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  inventTransId?: DeserializedType<T, 'Edm.String'> | null;
  inventDimId?: DeserializedType<T, 'Edm.String'> | null;
  vatValueRu: DeserializedType<T, 'Edm.Decimal'>;
  exciseAmountMstRu: DeserializedType<T, 'Edm.Decimal'>;
  tax1099RecId: DeserializedType<T, 'Edm.Int64'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  settleTax1099StateAmount: DeserializedType<T, 'Edm.Decimal'>;
  ngpCodesTableFr: DeserializedType<T, 'Edm.Int64'>;
  invoiceGtdIdRu?: DeserializedType<T, 'Edm.String'> | null;
  agreementLinePsn: DeserializedType<T, 'Edm.Int64'>;
  maximumRetailPriceIn: DeserializedType<T, 'Edm.Decimal'>;
  nonRecoverablePercentIn: DeserializedType<T, 'Edm.Decimal'>;
  transport?: DeserializedType<T, 'Edm.String'> | null;
  markupCodeRu?: DeserializedType<T, 'Edm.String'> | null;
  intrastatDispatchId?: DeserializedType<T, 'Edm.String'> | null;
  lineType?: PurchInvoiceLineType | null;
  exciseAmountRu: DeserializedType<T, 'Edm.Decimal'>;
  multiLnPercent: DeserializedType<T, 'Edm.Decimal'>;
  inventDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vendDirectivePsn: DeserializedType<T, 'Edm.Int64'>;
  discAmount: DeserializedType<T, 'Edm.Decimal'>;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  linePercent: DeserializedType<T, 'Edm.Decimal'>;
  purchId?: DeserializedType<T, 'Edm.String'> | null;
  lineDisc: DeserializedType<T, 'Edm.Decimal'>;
  vatExpenseIn: DeserializedType<T, 'Edm.Decimal'>;
  reverseChargeW?: NoYes | null;
  alcoholLicenseSeriesNumRu?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  advanceApplicationId: DeserializedType<T, 'Edm.Int64'>;
  settleTax1099Amount: DeserializedType<T, 'Edm.Decimal'>;
  isPwp?: NoYes | null;
  partDelivery?: NoYes | null;
  exciseTariffCodesIn: DeserializedType<T, 'Edm.Int64'>;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  taxAmountMstW: DeserializedType<T, 'Edm.Decimal'>;
  qty: DeserializedType<T, 'Edm.Decimal'>;
  statProcId?: DeserializedType<T, 'Edm.String'> | null;
  origCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  purchMarkup: DeserializedType<T, 'Edm.Decimal'>;
  invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  overrideSalesTax?: NoYes | null;
  vatDocumentTypeRu?: PurchBookVatDocumentTypeInvoice_Ru | null;
  tdsGroupIn?: DeserializedType<T, 'Edm.String'> | null;
  facturedQtyRu: DeserializedType<T, 'Edm.Decimal'>;
  readyForPayment?: NoYesCombo | null;
  weight: DeserializedType<T, 'Edm.Decimal'>;
  tax1099State?: DeserializedType<T, 'Edm.String'> | null;
  procurementCategory: DeserializedType<T, 'Edm.Int64'>;
  lineAmountMstW: DeserializedType<T, 'Edm.Decimal'>;
  taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  taxAutogenerated?: NoYes | null;
  taxWithholdVoucherIn?: DeserializedType<T, 'Edm.String'> | null;
  retailPackageId?: DeserializedType<T, 'Edm.String'> | null;
  destCounty?: DeserializedType<T, 'Edm.String'> | null;
  deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  intrastatFulfillmentDateHu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  exciseRecordTypeIn?: ExciseRecordTypeIn | null;
  deliveryPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  purchaseLineLineNumber: DeserializedType<T, 'Edm.Int64'>;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  vatAmountMstRu: DeserializedType<T, 'Edm.Decimal'>;
  vatAmountIn: DeserializedType<T, 'Edm.Decimal'>;
  interCompanyInventTransId?: DeserializedType<T, 'Edm.String'> | null;
  operationTypeMx?: VendorOperationTypeMx | null;
  internalInvoiceId?: DeserializedType<T, 'Edm.String'> | null;
  psaRetainageAmount: DeserializedType<T, 'Edm.Decimal'>;
  destState?: DeserializedType<T, 'Edm.String'> | null;
  dsaIn?: NoYes | null;
  purchUnit?: DeserializedType<T, 'Edm.String'> | null;
  serviceCodeTableIn: DeserializedType<T, 'Edm.Int64'>;
  tax1099StateAmount: DeserializedType<T, 'Edm.Decimal'>;
  creditNoteDateIn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  statisticValueLt: DeserializedType<T, 'Edm.Decimal'>;
  lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  stockedProduct?: NoYes | null;
  exciseValueRu: DeserializedType<T, 'Edm.Decimal'>;
  tax1099Amount: DeserializedType<T, 'Edm.Decimal'>;
  pdsCwQty: DeserializedType<T, 'Edm.Decimal'>;
  gtaServiceCategoryIn?: GtaServiceCategoryIn | null;
  salesTaxFormTypesIn: DeserializedType<T, 'Edm.Int64'>;
  taxWithholdBaseCurTh: DeserializedType<T, 'Edm.Decimal'>;
  inventRefType?: InventRefType | null;
  companyLocationIn: DeserializedType<T, 'Edm.Int64'>;
  taxWithholdGroupTh?: DeserializedType<T, 'Edm.String'> | null;
  purchCommitmentLinePsn: DeserializedType<T, 'Edm.Int64'>;
  taxWriteCode?: DeserializedType<T, 'Edm.String'> | null;
  qtyPhysical: DeserializedType<T, 'Edm.Decimal'>;
  multiLnDisc: DeserializedType<T, 'Edm.Decimal'>;
  destCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
}
