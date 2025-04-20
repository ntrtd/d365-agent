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
import type { PayrollParametersApi } from './PayrollParametersApi';
import { NoYes } from './NoYes';
import { PayrollAccrualDateBasis } from './PayrollAccrualDateBasis';
import { PayrollEarningAccountingDate } from './PayrollEarningAccountingDate';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "PayrollParameters" of service "d365_metadata".
 */
export class PayrollParameters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PayrollParametersType<T>
{
  /**
   * Technical entity name for PayrollParameters.
   */
  static override _entityName = 'PayrollParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayrollParameters entity.
   */
  static _keys = ['dataAreaId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Payment Mode.
   * @nullable
   */
  declare paymentMode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Arrear Threshold Override.
   */
  declare arrearThresholdOverride: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Salary Clearing Account Ledger Dimension Display Value.
   * @nullable
   */
  declare salaryClearingAccountLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vendor Account Number.
   * @nullable
   */
  declare vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category Name.
   * @nullable
   */
  declare categoryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Recover Arrear In All Run Types.
   * @nullable
   */
  declare recoverArrearInAllRunTypes?: NoYes | null;
  /**
   * Key.
   */
  declare key: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Apply Retirement Annual Wage Limit.
   * @nullable
   */
  declare applyRetirementAnnualWageLimit?: NoYes | null;
  /**
   * Accrual Date Basis.
   * @nullable
   */
  declare accrualDateBasis?: PayrollAccrualDateBasis | null;
  /**
   * Apply Group Term Life.
   * @nullable
   */
  declare applyGroupTermLife?: NoYes | null;
  /**
   * Category Hierarchy Name.
   * @nullable
   */
  declare categoryHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Journal Name.
   * @nullable
   */
  declare paymentJournalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay Slip Contributions.
   * @nullable
   */
  declare paySlipContributions?: NoYes | null;
  /**
   * Earning Accounting Date.
   * @nullable
   */
  declare earningAccountingDate?: PayrollEarningAccountingDate | null;
  /**
   * Payment Task Grouping Count.
   */
  declare paymentTaskGroupingCount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Electronic Payment Mode.
   * @nullable
   */
  declare electronicPaymentMode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: PayrollParametersApi<T>) {
    super(_entityApi);
  }
}

export interface PayrollParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  paymentMode?: DeserializedType<T, 'Edm.String'> | null;
  arrearThresholdOverride: DeserializedType<T, 'Edm.Decimal'>;
  salaryClearingAccountLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  categoryName?: DeserializedType<T, 'Edm.String'> | null;
  recoverArrearInAllRunTypes?: NoYes | null;
  key: DeserializedType<T, 'Edm.Int32'>;
  applyRetirementAnnualWageLimit?: NoYes | null;
  accrualDateBasis?: PayrollAccrualDateBasis | null;
  applyGroupTermLife?: NoYes | null;
  categoryHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  paymentJournalName?: DeserializedType<T, 'Edm.String'> | null;
  paySlipContributions?: NoYes | null;
  earningAccountingDate?: PayrollEarningAccountingDate | null;
  paymentTaskGroupingCount: DeserializedType<T, 'Edm.Int32'>;
  electronicPaymentMode?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
