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
import type { TaxGroupsApi } from './TaxGroupsApi';
import { NoYes } from './NoYes';
import { FillSalesDateW } from './FillSalesDateW';
import { FillVatDueDateW } from './FillVatDueDateW';
import { TaxPrintDetail } from './TaxPrintDetail';
import { TaxGroupRounding } from './TaxGroupRounding';
import {
  VendInvoiceJournalLines,
  VendInvoiceJournalLinesType
} from './VendInvoiceJournalLines';
import {
  LedgerJournalCdsLines,
  LedgerJournalCdsLinesType
} from './LedgerJournalCdsLines';
import {
  CdsFreeTextInvoiceLines,
  CdsFreeTextInvoiceLinesType
} from './CdsFreeTextInvoiceLines';
import { Prospects, ProspectsType } from './Prospects';
import {
  PurchaseOrderLineChargesV2,
  PurchaseOrderLineChargesV2Type
} from './PurchaseOrderLineChargesV2';
import {
  AssetLeaseLedgerJournalLines,
  AssetLeaseLedgerJournalLinesType
} from './AssetLeaseLedgerJournalLines';
import {
  CustomerPaymentJournalLines,
  CustomerPaymentJournalLinesType
} from './CustomerPaymentJournalLines';
import { VendorGroups, VendorGroupsType } from './VendorGroups';
import {
  GroupRetailTaxFilters,
  GroupRetailTaxFiltersType
} from './GroupRetailTaxFilters';
import {
  LedgerJournalLines,
  LedgerJournalLinesType
} from './LedgerJournalLines';
import {
  FreeTextInvoiceLines,
  FreeTextInvoiceLinesType
} from './FreeTextInvoiceLines';
import {
  PurchaseOrderHeaderCharges,
  PurchaseOrderHeaderChargesType
} from './PurchaseOrderHeaderCharges';
import {
  VendorPaymentJournalFees,
  VendorPaymentJournalFeesType
} from './VendorPaymentJournalFees';
import {
  VendorInvoiceHeaderCharges,
  VendorInvoiceHeaderChargesType
} from './VendorInvoiceHeaderCharges';
import {
  CustomerPaymentJournalFees,
  CustomerPaymentJournalFeesType
} from './CustomerPaymentJournalFees';
import { TaxGroupDatas, TaxGroupDatasType } from './TaxGroupDatas';
import {
  InventOperationalSiteCurrentPostalAddresses,
  InventOperationalSiteCurrentPostalAddressesType
} from './InventOperationalSiteCurrentPostalAddresses';

/**
 * This class represents the entity "TaxGroups" of service "d365_metadata".
 */
export class TaxGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TaxGroupsType<T>
{
  /**
   * Technical entity name for TaxGroups.
   */
  static override _entityName = 'TaxGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxGroups entity.
   */
  static _keys = ['dataAreaId', 'TaxGroupCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Group Code.
   */
  declare taxGroupCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Criteria City Id.
   * @nullable
   */
  declare defaultCriteriaCityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Criteria County Id.
   * @nullable
   */
  declare defaultCriteriaCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Reverse On Cash Discount.
   * @nullable
   */
  declare taxReverseOnCashDiscount?: NoYes | null;
  /**
   * Default Criteria Country Id.
   * @nullable
   */
  declare defaultCriteriaCountryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mandatory Sales Date W.
   * @nullable
   */
  declare mandatorySalesDateW?: NoYes | null;
  /**
   * Fill Sales Date W.
   * @nullable
   */
  declare fillSalesDateW?: FillSalesDateW | null;
  /**
   * Default Criteria Zip Code Id.
   * @nullable
   */
  declare defaultCriteriaZipCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Eu Trade W.
   * @nullable
   */
  declare euTradeW?: NoYes | null;
  /**
   * Date Of Vat Register Filling.
   * @nullable
   */
  declare dateOfVatRegisterFilling?: FillVatDueDateW | null;
  /**
   * Invoice Print Details.
   * @nullable
   */
  declare invoicePrintDetails?: TaxPrintDetail | null;
  /**
   * Rounding By.
   * @nullable
   */
  declare roundingBy?: TaxGroupRounding | null;
  /**
   * Default Criteria State Id.
   * @nullable
   */
  declare defaultCriteriaStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link VendInvoiceJournalLines} entity.
   */
  declare vendInvoiceJournalLineSalesTaxGroup: VendInvoiceJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerJournalCdsLines} entity.
   */
  declare ledgerJournalLineCdsSalesTaxGroup: LedgerJournalCdsLines<T>[];
  /**
   * One-to-many navigation property to the {@link CdsFreeTextInvoiceLines} entity.
   */
  declare cdsFreeTextInvoiceLines: CdsFreeTextInvoiceLines<T>[];
  /**
   * One-to-many navigation property to the {@link Prospects} entity.
   */
  declare prospects: Prospects<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseOrderLineChargesV2} entity.
   */
  declare purchaseOrderLineCharges: PurchaseOrderLineChargesV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetLeaseLedgerJournalLines} entity.
   */
  declare ledgerJournalLineSalesTaxGroup: AssetLeaseLedgerJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerPaymentJournalLines} entity.
   */
  declare customerPaymentJournalLineTaxGroupEntity: CustomerPaymentJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link VendorGroups} entity.
   */
  declare vendorGroups: VendorGroups<T>[];
  /**
   * One-to-many navigation property to the {@link GroupRetailTaxFilters} entity.
   */
  declare groupRetailTaxFilter: GroupRetailTaxFilters<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerJournalLines} entity.
   */
  declare ledgerJournalLineEntitySalesTaxGroup: LedgerJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link FreeTextInvoiceLines} entity.
   */
  declare freeTextInvoiceLineTaxGroup: FreeTextInvoiceLines<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseOrderHeaderCharges} entity.
   */
  declare purchaseOrderHeaderCharges: PurchaseOrderHeaderCharges<T>[];
  /**
   * One-to-many navigation property to the {@link VendorPaymentJournalFees} entity.
   */
  declare vendorPaymentJournalFee: VendorPaymentJournalFees<T>[];
  /**
   * One-to-many navigation property to the {@link VendorInvoiceHeaderCharges} entity.
   */
  declare invoiceHeaderCharges: VendorInvoiceHeaderCharges<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerPaymentJournalFees} entity.
   */
  declare customerPaymentJournalFee: CustomerPaymentJournalFees<T>[];
  /**
   * One-to-many navigation property to the {@link TaxGroupDatas} entity.
   */
  declare taxGroupData: TaxGroupDatas<T>[];
  /**
   * One-to-many navigation property to the {@link InventOperationalSiteCurrentPostalAddresses} entity.
   */
  declare operationalSiteCurrentPostalAddresses: InventOperationalSiteCurrentPostalAddresses<T>[];

  constructor(_entityApi: TaxGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface TaxGroupsType<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxGroupCode: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  defaultCriteriaCityId?: DeserializedType<T, 'Edm.String'> | null;
  defaultCriteriaCountyId?: DeserializedType<T, 'Edm.String'> | null;
  taxReverseOnCashDiscount?: NoYes | null;
  defaultCriteriaCountryId?: DeserializedType<T, 'Edm.String'> | null;
  mandatorySalesDateW?: NoYes | null;
  fillSalesDateW?: FillSalesDateW | null;
  defaultCriteriaZipCodeId?: DeserializedType<T, 'Edm.String'> | null;
  euTradeW?: NoYes | null;
  dateOfVatRegisterFilling?: FillVatDueDateW | null;
  invoicePrintDetails?: TaxPrintDetail | null;
  roundingBy?: TaxGroupRounding | null;
  defaultCriteriaStateId?: DeserializedType<T, 'Edm.String'> | null;
  vendInvoiceJournalLineSalesTaxGroup: VendInvoiceJournalLinesType<T>[];
  ledgerJournalLineCdsSalesTaxGroup: LedgerJournalCdsLinesType<T>[];
  cdsFreeTextInvoiceLines: CdsFreeTextInvoiceLinesType<T>[];
  prospects: ProspectsType<T>[];
  purchaseOrderLineCharges: PurchaseOrderLineChargesV2Type<T>[];
  ledgerJournalLineSalesTaxGroup: AssetLeaseLedgerJournalLinesType<T>[];
  customerPaymentJournalLineTaxGroupEntity: CustomerPaymentJournalLinesType<T>[];
  vendorGroups: VendorGroupsType<T>[];
  groupRetailTaxFilter: GroupRetailTaxFiltersType<T>[];
  ledgerJournalLineEntitySalesTaxGroup: LedgerJournalLinesType<T>[];
  freeTextInvoiceLineTaxGroup: FreeTextInvoiceLinesType<T>[];
  purchaseOrderHeaderCharges: PurchaseOrderHeaderChargesType<T>[];
  vendorPaymentJournalFee: VendorPaymentJournalFeesType<T>[];
  invoiceHeaderCharges: VendorInvoiceHeaderChargesType<T>[];
  customerPaymentJournalFee: CustomerPaymentJournalFeesType<T>[];
  taxGroupData: TaxGroupDatasType<T>[];
  operationalSiteCurrentPostalAddresses: InventOperationalSiteCurrentPostalAddressesType<T>[];
}
