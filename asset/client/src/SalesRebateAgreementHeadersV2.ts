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
import type { SalesRebateAgreementHeadersV2Api } from './SalesRebateAgreementHeadersV2Api';
import { NoYes } from './NoYes';
import { PdsRebateLineBreakType } from './PdsRebateLineBreakType';
import { PdsCumulationPeriod } from './PdsCumulationPeriod';
import { PdsPaymtType } from './PdsPaymtType';
import { PdsRebateCalcDateType } from './PdsRebateCalcDateType';
import { PdsRebateTakenFrom } from './PdsRebateTakenFrom';
import { TamCustRebateApprovalStatus } from './TamCustRebateApprovalStatus';
import { PdsUnitType } from './PdsUnitType';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "SalesRebateAgreementHeadersV2" of service "d365_metadata".
 */
export class SalesRebateAgreementHeadersV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesRebateAgreementHeadersV2Type<T>
{
  /**
   * Technical entity name for SalesRebateAgreementHeadersV2.
   */
  static override _entityName = 'SalesRebateAgreementHeadersV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesRebateAgreementHeadersV2 entity.
   */
  static _keys = ['dataAreaId', 'RebateAgreementId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rebate Agreement Id.
   */
  declare rebateAgreementId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Generic Currency Search Enabled.
   * @nullable
   */
  declare isGenericCurrencySearchEnabled?: NoYes | null;
  /**
   * Rebate Break Basis.
   * @nullable
   */
  declare rebateBreakBasis?: PdsRebateLineBreakType | null;
  /**
   * Accrual Main Account Id Display Value.
   * @nullable
   */
  declare accrualMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Product Selection Used.
   * @nullable
   */
  declare isProductSelectionUsed?: NoYes | null;
  /**
   * Sales Rebate Product Group Id.
   * @nullable
   */
  declare salesRebateProductGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Account Number.
   * @nullable
   */
  declare customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Cumulation Method.
   * @nullable
   */
  declare salesCumulationMethod?: PdsCumulationPeriod | null;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Taxable.
   * @nullable
   */
  declare isTaxable?: NoYes | null;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Validating Worker Personnel Number.
   * @nullable
   */
  declare validatingWorkerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Expense Main Account Id Display Value.
   * @nullable
   */
  declare expenseMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sales Cumulation Method Customized Period Type.
   * @nullable
   */
  declare salesCumulationMethodCustomizedPeriodType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Product Unit Symbol Exact.
   * @nullable
   */
  declare isProductUnitSymbolExact?: NoYes | null;
  /**
   * Payment Type.
   * @nullable
   */
  declare paymentType?: PdsPaymtType | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Calculation Search Date Type.
   * @nullable
   */
  declare calculationSearchDateType?: PdsRebateCalcDateType | null;
  /**
   * Product Unit Symbol.
   * @nullable
   */
  declare productUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Validated.
   * @nullable
   */
  declare isValidated?: NoYes | null;
  /**
   * Line Amount Basis.
   * @nullable
   */
  declare lineAmountBasis?: PdsRebateTakenFrom | null;
  /**
   * Minimum Sales Quantity Qualifying Rebate.
   */
  declare minimumSalesQuantityQualifyingRebate: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Sales Rebate Customer Group Id.
   * @nullable
   */
  declare salesRebateCustomerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qualifying Site Id.
   * @nullable
   */
  declare qualifyingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Approval Required.
   * @nullable
   */
  declare isApprovalRequired?: NoYes | null;
  /**
   * Note.
   * @nullable
   */
  declare note?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Minimum Sales Amount Qualifying Rebate.
   */
  declare minimumSalesAmountQualifyingRebate: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Rebate Program Id.
   * @nullable
   */
  declare rebateProgramId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Approval Status.
   * @nullable
   */
  declare approvalStatus?: TamCustRebateApprovalStatus | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Unit Symbol Type.
   * @nullable
   */
  declare productUnitSymbolType?: PdsUnitType | null;
  /**
   * Qualifying Warehouse Id.
   * @nullable
   */
  declare qualifyingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: SalesRebateAgreementHeadersV2Api<T>) {
    super(_entityApi);
  }
}

export interface SalesRebateAgreementHeadersV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  rebateAgreementId: DeserializedType<T, 'Edm.String'>;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  isGenericCurrencySearchEnabled?: NoYes | null;
  rebateBreakBasis?: PdsRebateLineBreakType | null;
  accrualMainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  isProductSelectionUsed?: NoYes | null;
  salesRebateProductGroupId?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  salesCumulationMethod?: PdsCumulationPeriod | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  isTaxable?: NoYes | null;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validatingWorkerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  expenseMainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  salesCumulationMethodCustomizedPeriodType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  isProductUnitSymbolExact?: NoYes | null;
  paymentType?: PdsPaymtType | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  calculationSearchDateType?: PdsRebateCalcDateType | null;
  productUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  isValidated?: NoYes | null;
  lineAmountBasis?: PdsRebateTakenFrom | null;
  minimumSalesQuantityQualifyingRebate: DeserializedType<T, 'Edm.Int32'>;
  salesRebateCustomerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  qualifyingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  isApprovalRequired?: NoYes | null;
  note?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  minimumSalesAmountQualifyingRebate: DeserializedType<T, 'Edm.Decimal'>;
  rebateProgramId?: DeserializedType<T, 'Edm.String'> | null;
  approvalStatus?: TamCustRebateApprovalStatus | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  productUnitSymbolType?: PdsUnitType | null;
  qualifyingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
