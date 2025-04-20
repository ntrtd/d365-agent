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
import type { TaxPostingGroupsV2Api } from './TaxPostingGroupsV2Api';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "TaxPostingGroupsV2" of service "d365_metadata".
 */
export class TaxPostingGroupsV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TaxPostingGroupsV2Type<T>
{
  /**
   * Technical entity name for TaxPostingGroupsV2.
   */
  static override _entityName = 'TaxPostingGroupsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxPostingGroupsV2 entity.
   */
  static _keys = ['dataAreaId', 'TaxPostingGroupCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Posting Group Code.
   */
  declare taxPostingGroupCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Receivable Short Term Main Account Id Display Value.
   * @nullable
   */
  declare taxReceivableShortTermMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Use Tax Payable Main Account Id Display Value.
   * @nullable
   */
  declare useTaxPayableMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax From Customer Cash Discount Main Account Id Display Value.
   * @nullable
   */
  declare taxFromCustomerCashDiscountMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax Receivable Long Term Main Account Id Display Value.
   * @nullable
   */
  declare taxReceivableLongTermMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Settlement Main Account Id Display Value.
   * @nullable
   */
  declare taxSettlementMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax Outgoing Offset Ledger Main Account Id Display Value.
   * @nullable
   */
  declare taxOutgoingOffsetLedgerMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax Incoming Difference Main Account Id Display Value.
   * @nullable
   */
  declare taxIncomingDifferenceMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax Receivable Main Account Id Display Value.
   * @nullable
   */
  declare taxReceivableMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax Outgoing Difference Main Account Id Display Value.
   * @nullable
   */
  declare taxOutgoingDifferenceMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax Unrealized Receivables Main Account Id Display Value.
   * @nullable
   */
  declare taxUnrealizedReceivablesMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax From Vendor Cash Discount Main Account Id Display Value.
   * @nullable
   */
  declare taxFromVendorCashDiscountMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Use Tax Main Account Id Display Value.
   * @nullable
   */
  declare useTaxMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax Payable Main Account Id Display Value.
   * @nullable
   */
  declare taxPayableMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax Outgoing Diff Offset Main Account Id Display Value.
   * @nullable
   */
  declare taxOutgoingDiffOffsetMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax Unrealized Payables Main Account Id Display Value.
   * @nullable
   */
  declare taxUnrealizedPayablesMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax Incoming Diff Offset Main Account Id Display Value.
   * @nullable
   */
  declare taxIncomingDiffOffsetMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax Sales Expense Main Account Id Display Value.
   * @nullable
   */
  declare taxSalesExpenseMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: TaxPostingGroupsV2Api<T>) {
    super(_entityApi);
  }
}

export interface TaxPostingGroupsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxPostingGroupCode: DeserializedType<T, 'Edm.String'>;
  taxReceivableShortTermMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  useTaxPayableMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  taxFromCustomerCashDiscountMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  taxReceivableLongTermMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  taxSettlementMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  taxOutgoingOffsetLedgerMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  taxIncomingDifferenceMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  taxReceivableMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  taxOutgoingDifferenceMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  taxUnrealizedReceivablesMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  taxFromVendorCashDiscountMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  useTaxMainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  taxPayableMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  taxOutgoingDiffOffsetMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  taxUnrealizedPayablesMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  taxIncomingDiffOffsetMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  taxSalesExpenseMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
