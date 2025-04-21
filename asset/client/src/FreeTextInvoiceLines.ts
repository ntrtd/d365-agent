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
import type { FreeTextInvoiceLinesApi } from './FreeTextInvoiceLinesApi';
import { NoYes } from './NoYes';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import { TaxGroups, TaxGroupsType } from './TaxGroups';
import {
  FreeTextInvoiceHeaders,
  FreeTextInvoiceHeadersType
} from './FreeTextInvoiceHeaders';
import {
  TaxItemGroupHeadings,
  TaxItemGroupHeadingsType
} from './TaxItemGroupHeadings';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import { NgpCodes, NgpCodesType } from './NgpCodes';

/**
 * This class represents the entity "FreeTextInvoiceLines" of service "d365_metadata".
 */
export class FreeTextInvoiceLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FreeTextInvoiceLinesType<T>
{
  /**
   * Technical entity name for FreeTextInvoiceLines.
   */
  static override _entityName = 'FreeTextInvoiceLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FreeTextInvoiceLines entity.
   */
  static _keys = ['dataAreaId', 'LineNumber', 'ParentRecId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Parent Rec Id.
   */
  declare parentRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sales Tax Amount.
   */
  declare salesTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * E Invoice Account Code.
   * @nullable
   */
  declare eInvoiceAccountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Asset Number.
   * @nullable
   */
  declare fixedAssetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Service Invoice.
   * @nullable
   */
  declare isServiceInvoice?: NoYes | null;
  /**
   * State Of Origin.
   * @nullable
   */
  declare stateOfOrigin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Print Code.
   * @nullable
   */
  declare printCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Id.
   * @nullable
   */
  declare transactionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Weight.
   */
  declare totalWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Billing Code.
   * @nullable
   */
  declare billingCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ngp Code.
   */
  declare ngpCode: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Asset Id.
   * @nullable
   */
  declare assetId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Invoice Id.
   * @nullable
   */
  declare externalInvoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Currency Amount.
   */
  declare transactionCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Value Model.
   * @nullable
   */
  declare valueModel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Details.
   * @nullable
   */
  declare amountDetails?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cfop Code.
   * @nullable
   */
  declare cfopCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Information Service Code.
   * @nullable
   */
  declare fiscalInformationServiceCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Category Id.
   * @nullable
   */
  declare categoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Group Id.
   * @nullable
   */
  declare salesTaxGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Item Group Id.
   * @nullable
   */
  declare salesTaxItemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Unit.
   * @nullable
   */
  declare salesUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Property Number.
   * @nullable
   */
  declare propertyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Text.
   * @nullable
   */
  declare invoiceText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Price.
   */
  declare unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Override Sales Tax.
   * @nullable
   */
  declare overrideSalesTax?: NoYes | null;
  /**
   * Country Region Id.
   * @nullable
   */
  declare countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Withholding Tax Group.
   * @nullable
   */
  declare withholdingTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Code.
   * @nullable
   */
  declare transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Gtd.
   * @nullable
   */
  declare invoiceGtd?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Main Account Display Value.
   * @nullable
   */
  declare mainAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Name.
   * @nullable
   */
  declare countryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare ftiMainAccountDimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link TaxGroups} entity.
   */
  declare freeTextInvoiceLineEntityTaxGroup?: TaxGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link FreeTextInvoiceHeaders} entity.
   */
  declare custFreeTextInvoiceHeaderComposite?: FreeTextInvoiceHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link TaxItemGroupHeadings} entity.
   */
  declare freeTextInvoiceLineEntityTaxItemGroup?: TaxItemGroupHeadings<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare ftiDefaultDimensionDimensionSetCombination?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link NgpCodes} entity.
   */
  declare freeTextInvoiceLineEntityNgp?: NgpCodes<T> | null;

  constructor(_entityApi: FreeTextInvoiceLinesApi<T>) {
    super(_entityApi);
  }
}

export interface FreeTextInvoiceLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  parentRecId: DeserializedType<T, 'Edm.Int64'>;
  salesTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  eInvoiceAccountCode?: DeserializedType<T, 'Edm.String'> | null;
  fixedAssetNumber?: DeserializedType<T, 'Edm.String'> | null;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  isServiceInvoice?: NoYes | null;
  stateOfOrigin?: DeserializedType<T, 'Edm.String'> | null;
  printCode?: DeserializedType<T, 'Edm.String'> | null;
  transactionId?: DeserializedType<T, 'Edm.String'> | null;
  totalWeight: DeserializedType<T, 'Edm.Decimal'>;
  billingCode?: DeserializedType<T, 'Edm.String'> | null;
  ngpCode: DeserializedType<T, 'Edm.Int32'>;
  assetId?: DeserializedType<T, 'Edm.String'> | null;
  externalInvoiceId?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  transactionCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  valueModel?: DeserializedType<T, 'Edm.String'> | null;
  amountDetails?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  cfopCode?: DeserializedType<T, 'Edm.String'> | null;
  fiscalInformationServiceCode?: DeserializedType<T, 'Edm.String'> | null;
  categoryId?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroupId?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxItemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  salesUnit?: DeserializedType<T, 'Edm.String'> | null;
  propertyNumber?: DeserializedType<T, 'Edm.String'> | null;
  invoiceText?: DeserializedType<T, 'Edm.String'> | null;
  unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  overrideSalesTax?: NoYes | null;
  countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  withholdingTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  invoiceGtd?: DeserializedType<T, 'Edm.String'> | null;
  mainAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  countryName?: DeserializedType<T, 'Edm.String'> | null;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  ftiMainAccountDimensionCombination?: DimensionCombinationsType<T> | null;
  freeTextInvoiceLineEntityTaxGroup?: TaxGroupsType<T> | null;
  custFreeTextInvoiceHeaderComposite?: FreeTextInvoiceHeadersType<T> | null;
  freeTextInvoiceLineEntityTaxItemGroup?: TaxItemGroupHeadingsType<T> | null;
  ftiDefaultDimensionDimensionSetCombination?: DimensionSetsType<T> | null;
  freeTextInvoiceLineEntityNgp?: NgpCodesType<T> | null;
}
