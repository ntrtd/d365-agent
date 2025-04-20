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
import type { CustInvoiceLineBiEntitiesApi } from './CustInvoiceLineBiEntitiesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "CustInvoiceLineBiEntities" of service "d365_metadata".
 */
export class CustInvoiceLineBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustInvoiceLineBiEntitiesType<T>
{
  /**
   * Technical entity name for CustInvoiceLineBiEntities.
   */
  static override _entityName = 'CustInvoiceLineBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustInvoiceLineBiEntities entity.
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
   * Tax Withhold Item Group Heading Th.
   */
  declare taxWithholdItemGroupHeadingTh: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Reason Ref Rec Id.
   */
  declare reasonRefRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Stat Proc Id.
   * @nullable
   */
  declare statProcId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * E Invoice Account Code.
   * @nullable
   */
  declare eInvoiceAccountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customs Doc Date Mx.
   */
  declare customsDocDateMx: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tax Withhold Group.
   * @nullable
   */
  declare taxWithholdGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Price.
   */
  declare unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Proj Trans Id.
   * @nullable
   */
  declare projTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Period Charge Invoice Line Base From Date.
   */
  declare periodChargeInvoiceLineBaseFromDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Fin Tag.
   */
  declare finTag: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Samples Mx.
   * @nullable
   */
  declare samplesMx?: NoYes | null;
  /**
   * Weight.
   */
  declare weight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sat Custom Unit Of Measure Mx.
   * @nullable
   */
  declare satCustomUnitOfMeasureMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Unit Ru.
   * @nullable
   */
  declare salesUnitRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ngp Codes Table Fr.
   */
  declare ngpCodesTableFr: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Proj Funding Source.
   */
  declare projFundingSource: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice Gtd Ru.
   * @nullable
   */
  declare invoiceGtdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cfop Table Br.
   */
  declare cfopTableBr: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Customs Name Mx.
   * @nullable
   */
  declare customsNameMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Item Group.
   * @nullable
   */
  declare taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Orig State.
   * @nullable
   */
  declare origState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Cur.
   */
  declare amountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transport.
   * @nullable
   */
  declare transport?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Txt.
   * @nullable
   */
  declare invoiceTxt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Id.
   * @nullable
   */
  declare assetId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Id Ru.
   * @nullable
   */
  declare assetIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Category Id.
   * @nullable
   */
  declare projCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parent Rec Id.
   */
  declare parentRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Service Code Br.
   * @nullable
   */
  declare taxServiceCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Code.
   * @nullable
   */
  declare transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Group.
   * @nullable
   */
  declare taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Name Ru.
   * @nullable
   */
  declare countryNameRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pk Wi U Code Pl.
   * @nullable
   */
  declare pkWiUCodePl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Property Number Mx.
   * @nullable
   */
  declare propertyNumberMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tax Write Code.
   * @nullable
   */
  declare taxWriteCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Commodity.
   */
  declare intrastatCommodity: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Consignment Mx.
   * @nullable
   */
  declare consignmentMx?: NoYes | null;
  /**
   * Sat Product Code Mx.
   * @nullable
   */
  declare satProductCodeMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting Distribution Template.
   */
  declare accountingDistributionTemplate: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Billing Code.
   * @nullable
   */
  declare billingCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Directive Psn.
   */
  declare custDirectivePsn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Amount.
   */
  declare taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sat Customs Qty Mx.
   */
  declare satCustomsQtyMx: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * External Invoice Id.
   * @nullable
   */
  declare externalInvoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Override Sales Tax.
   * @nullable
   */
  declare overrideSalesTax?: NoYes | null;
  /**
   * Orig Country Region Id.
   * @nullable
   */
  declare origCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Port.
   * @nullable
   */
  declare port?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Corrected Cust Invoice Line.
   */
  declare correctedCustInvoiceLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sat Tariff Fraction Mx.
   * @nullable
   */
  declare satTariffFractionMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Billing Code.
   */
  declare custBillingCode: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Cust Invoice Line Template.
   */
  declare custInvoiceLineTemplate: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sat Unit Code Mx.
   * @nullable
   */
  declare satUnitCodeMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Period Charge Invoice Line Base To Date.
   */
  declare periodChargeInvoiceLineBaseToDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Tax Autogenerated.
   * @nullable
   */
  declare taxAutogenerated?: NoYes | null;
  /**
   * Proj Id.
   * @nullable
   */
  declare projId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Details.
   * @nullable
   */
  declare amountDetails?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Line Reference No.
   * @nullable
   */
  declare orderLineReferenceNo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Note Internal Ref Pl.
   */
  declare creditNoteInternalRefPl: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Brand Mx.
   * @nullable
   */
  declare brandMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customs Doc Number Mx.
   * @nullable
   */
  declare customsDocNumberMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Book Id.
   * @nullable
   */
  declare assetBookId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Document Line.
   */
  declare sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Ref Return Invoice Trans W.
   */
  declare refReturnInvoiceTransW: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Service Invoice Br.
   * @nullable
   */
  declare serviceInvoiceBr?: NoYes | null;

  constructor(_entityApi: CustInvoiceLineBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface CustInvoiceLineBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  taxWithholdItemGroupHeadingTh: DeserializedType<T, 'Edm.Int64'>;
  reasonRefRecId: DeserializedType<T, 'Edm.Int64'>;
  statProcId?: DeserializedType<T, 'Edm.String'> | null;
  eInvoiceAccountCode?: DeserializedType<T, 'Edm.String'> | null;
  customsDocDateMx: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taxWithholdGroup?: DeserializedType<T, 'Edm.String'> | null;
  unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  projTransId?: DeserializedType<T, 'Edm.String'> | null;
  periodChargeInvoiceLineBaseFromDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  finTag: DeserializedType<T, 'Edm.Int64'>;
  samplesMx?: NoYes | null;
  weight: DeserializedType<T, 'Edm.Decimal'>;
  satCustomUnitOfMeasureMx?: DeserializedType<T, 'Edm.String'> | null;
  salesUnitRu?: DeserializedType<T, 'Edm.String'> | null;
  ngpCodesTableFr: DeserializedType<T, 'Edm.Int64'>;
  projFundingSource: DeserializedType<T, 'Edm.Int64'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  invoiceGtdRu?: DeserializedType<T, 'Edm.String'> | null;
  cfopTableBr: DeserializedType<T, 'Edm.Int64'>;
  customsNameMx?: DeserializedType<T, 'Edm.String'> | null;
  taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  origState?: DeserializedType<T, 'Edm.String'> | null;
  amountCur: DeserializedType<T, 'Edm.Decimal'>;
  transport?: DeserializedType<T, 'Edm.String'> | null;
  invoiceTxt?: DeserializedType<T, 'Edm.String'> | null;
  assetId?: DeserializedType<T, 'Edm.String'> | null;
  assetIdRu?: DeserializedType<T, 'Edm.String'> | null;
  projCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  parentRecId: DeserializedType<T, 'Edm.Int64'>;
  taxServiceCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  countryNameRu?: DeserializedType<T, 'Edm.String'> | null;
  pkWiUCodePl?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  propertyNumberMx?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  taxWriteCode?: DeserializedType<T, 'Edm.String'> | null;
  intrastatCommodity: DeserializedType<T, 'Edm.Int64'>;
  consignmentMx?: NoYes | null;
  satProductCodeMx?: DeserializedType<T, 'Edm.String'> | null;
  accountingDistributionTemplate: DeserializedType<T, 'Edm.Int64'>;
  billingCode?: DeserializedType<T, 'Edm.String'> | null;
  custDirectivePsn: DeserializedType<T, 'Edm.Int64'>;
  taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  satCustomsQtyMx: DeserializedType<T, 'Edm.Decimal'>;
  externalInvoiceId?: DeserializedType<T, 'Edm.String'> | null;
  overrideSalesTax?: NoYes | null;
  origCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  port?: DeserializedType<T, 'Edm.String'> | null;
  correctedCustInvoiceLine: DeserializedType<T, 'Edm.Int64'>;
  satTariffFractionMx?: DeserializedType<T, 'Edm.String'> | null;
  custBillingCode: DeserializedType<T, 'Edm.Int64'>;
  custInvoiceLineTemplate: DeserializedType<T, 'Edm.Int64'>;
  satUnitCodeMx?: DeserializedType<T, 'Edm.String'> | null;
  periodChargeInvoiceLineBaseToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taxAutogenerated?: NoYes | null;
  projId?: DeserializedType<T, 'Edm.String'> | null;
  amountDetails?: DeserializedType<T, 'Edm.String'> | null;
  orderLineReferenceNo?: DeserializedType<T, 'Edm.String'> | null;
  creditNoteInternalRefPl: DeserializedType<T, 'Edm.Int64'>;
  brandMx?: DeserializedType<T, 'Edm.String'> | null;
  customsDocNumberMx?: DeserializedType<T, 'Edm.String'> | null;
  assetBookId?: DeserializedType<T, 'Edm.String'> | null;
  sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  refReturnInvoiceTransW: DeserializedType<T, 'Edm.Int64'>;
  serviceInvoiceBr?: NoYes | null;
}
