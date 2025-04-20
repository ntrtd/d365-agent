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
import type { VendorRebateAgreementHeadersApi } from './VendorRebateAgreementHeadersApi';
import { TamRebateLineBreakType } from './TamRebateLineBreakType';
import { NoYes } from './NoYes';
import { TamVendRebateApprovalStatus } from './TamVendRebateApprovalStatus';
import { TamCumulationPeriod } from './TamCumulationPeriod';
import { TamVendRebateCalcDateType } from './TamVendRebateCalcDateType';
import { TamVendRebateTakenFrom } from './TamVendRebateTakenFrom';
import { TamRebateUnitType } from './TamRebateUnitType';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "VendorRebateAgreementHeaders" of service "d365_metadata".
 */
export class VendorRebateAgreementHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendorRebateAgreementHeadersType<T>
{
  /**
   * Technical entity name for VendorRebateAgreementHeaders.
   */
  static override _entityName = 'VendorRebateAgreementHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendorRebateAgreementHeaders entity.
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
   * Vendor Account Number.
   * @nullable
   */
  declare vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rebate Break Basis.
   * @nullable
   */
  declare rebateBreakBasis?: TamRebateLineBreakType | null;
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
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
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
   * Validating Worker Personnel Number.
   */
  declare validatingWorkerPersonnelNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Expense Main Account Id Display Value.
   * @nullable
   */
  declare expenseMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vendor Rebate Vendor Group Id.
   * @nullable
   */
  declare vendorRebateVendorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Product Unit Symbol Exact.
   * @nullable
   */
  declare isProductUnitSymbolExact?: NoYes | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Rebate Product Group Id.
   * @nullable
   */
  declare vendorRebateProductGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Workflow Approval Status.
   * @nullable
   */
  declare workflowApprovalStatus?: TamVendRebateApprovalStatus | null;
  /**
   * Purchase Cumulation Method.
   * @nullable
   */
  declare purchaseCumulationMethod?: TamCumulationPeriod | null;
  /**
   * Is Agreement Validated.
   * @nullable
   */
  declare isAgreementValidated?: NoYes | null;
  /**
   * Calculation Search Date Type.
   * @nullable
   */
  declare calculationSearchDateType?: TamVendRebateCalcDateType | null;
  /**
   * Product Unit Symbol.
   * @nullable
   */
  declare productUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Cumulation Method Customized Period Type.
   * @nullable
   */
  declare purchaseCumulationMethodCustomizedPeriodType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Amount Basis.
   * @nullable
   */
  declare lineAmountBasis?: TamVendRebateTakenFrom | null;
  /**
   * Effective Date.
   */
  declare effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Minimum Purchase Amount Qualifying Rebate.
   */
  declare minimumPurchaseAmountQualifyingRebate: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Rebate Program Id.
   * @nullable
   */
  declare rebateProgramId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Agreement Note.
   * @nullable
   */
  declare agreementNote?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expiration Date.
   */
  declare expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Product Unit Symbol Type.
   * @nullable
   */
  declare productUnitSymbolType?: TamRebateUnitType | null;
  /**
   * Minimum Purchase Quantity Qualifying Rebate.
   */
  declare minimumPurchaseQuantityQualifyingRebate: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Qualifying Warehouse Id.
   * @nullable
   */
  declare qualifyingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare accrualMainAccountIdCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare expenseMainAccountIdCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: VendorRebateAgreementHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface VendorRebateAgreementHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  rebateAgreementId: DeserializedType<T, 'Edm.String'>;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  rebateBreakBasis?: TamRebateLineBreakType | null;
  accrualMainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  isProductSelectionUsed?: NoYes | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  isTaxable?: NoYes | null;
  validatingWorkerPersonnelNumber: DeserializedType<T, 'Edm.Int64'>;
  expenseMainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  vendorRebateVendorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  isProductUnitSymbolExact?: NoYes | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  vendorRebateProductGroupId?: DeserializedType<T, 'Edm.String'> | null;
  workflowApprovalStatus?: TamVendRebateApprovalStatus | null;
  purchaseCumulationMethod?: TamCumulationPeriod | null;
  isAgreementValidated?: NoYes | null;
  calculationSearchDateType?: TamVendRebateCalcDateType | null;
  productUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  purchaseCumulationMethodCustomizedPeriodType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  lineAmountBasis?: TamVendRebateTakenFrom | null;
  effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  qualifyingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  isApprovalRequired?: NoYes | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  minimumPurchaseAmountQualifyingRebate: DeserializedType<T, 'Edm.Decimal'>;
  rebateProgramId?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  agreementNote?: DeserializedType<T, 'Edm.String'> | null;
  expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  productUnitSymbolType?: TamRebateUnitType | null;
  minimumPurchaseQuantityQualifyingRebate: DeserializedType<T, 'Edm.Int32'>;
  qualifyingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  accrualMainAccountIdCombination?: DimensionCombinationsType<T> | null;
  expenseMainAccountIdCombination?: DimensionCombinationsType<T> | null;
}
