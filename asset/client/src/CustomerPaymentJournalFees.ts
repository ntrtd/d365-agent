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
import type { CustomerPaymentJournalFeesApi } from './CustomerPaymentJournalFeesApi';
import { VendPaymFeeTaxDirectionJp } from './VendPaymFeeTaxDirectionJp';
import { NoYes } from './NoYes';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { Currencies, CurrenciesType } from './Currencies';
import {
  CustomerPaymentFees,
  CustomerPaymentFeesType
} from './CustomerPaymentFees';
import {
  TaxItemGroupHeadings,
  TaxItemGroupHeadingsType
} from './TaxItemGroupHeadings';
import {
  CustomerPaymentJournalLines,
  CustomerPaymentJournalLinesType
} from './CustomerPaymentJournalLines';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import { TaxGroups, TaxGroupsType } from './TaxGroups';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "CustomerPaymentJournalFees" of service "d365_metadata".
 */
export class CustomerPaymentJournalFees<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomerPaymentJournalFeesType<T>
{
  /**
   * Technical entity name for CustomerPaymentJournalFees.
   */
  static override _entityName = 'CustomerPaymentJournalFees';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomerPaymentJournalFees entity.
   */
  static _keys = [
    'dataAreaId',
    'SourceJournalBatchNumber',
    'SourceJournalLineNumber',
    'PaymentFeeId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Journal Batch Number.
   */
  declare sourceJournalBatchNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Journal Line Number.
   */
  declare sourceJournalLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Payment Fee Id.
   */
  declare paymentFeeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Tax Group.
   * @nullable
   */
  declare salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Sales Tax Group.
   * @nullable
   */
  declare itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Withholding Tax Group Code.
   * @nullable
   */
  declare itemWithholdingTaxGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sales Tax Direction.
   * @nullable
   */
  declare salesTaxDirection?: VendPaymFeeTaxDirectionJp | null;
  /**
   * Is Withholding Calculation Enabled.
   * @nullable
   */
  declare isWithholdingCalculationEnabled?: NoYes | null;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: LedgerJournalAcType | null;
  /**
   * Account Display Value.
   * @nullable
   */
  declare accountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare currency?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link CustomerPaymentFees} entity.
   */
  declare customerPaymentFee?: CustomerPaymentFees<T> | null;
  /**
   * One-to-one navigation property to the {@link TaxItemGroupHeadings} entity.
   */
  declare taxItemGroupHeading?: TaxItemGroupHeadings<T> | null;
  /**
   * One-to-one navigation property to the {@link CustomerPaymentJournalLines} entity.
   */
  declare customerPaymentJournalLine?: CustomerPaymentJournalLines<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link TaxGroups} entity.
   */
  declare taxGroup?: TaxGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: CustomerPaymentJournalFeesApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerPaymentJournalFeesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceJournalBatchNumber: DeserializedType<T, 'Edm.String'>;
  sourceJournalLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  paymentFeeId: DeserializedType<T, 'Edm.String'>;
  salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  itemWithholdingTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxDirection?: VendPaymFeeTaxDirectionJp | null;
  isWithholdingCalculationEnabled?: NoYes | null;
  accountType?: LedgerJournalAcType | null;
  accountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  currency?: CurrenciesType<T> | null;
  customerPaymentFee?: CustomerPaymentFeesType<T> | null;
  taxItemGroupHeading?: TaxItemGroupHeadingsType<T> | null;
  customerPaymentJournalLine?: CustomerPaymentJournalLinesType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
  taxGroup?: TaxGroupsType<T> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
