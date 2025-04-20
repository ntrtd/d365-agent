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
import type { CdsSalesChargesApi } from './CdsSalesChargesApi';
import { MarkupClassificationBr } from './MarkupClassificationBr';
import { MarkupType } from './MarkupType';
import { NoYes } from './NoYes';
import { LedgerPostingType } from './LedgerPostingType';

/**
 * This class represents the entity "CDSSalesCharges" of service "d365_metadata".
 */
export class CdsSalesCharges<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CdsSalesChargesType<T>
{
  /**
   * Technical entity name for CdsSalesCharges.
   */
  static override _entityName = 'CDSSalesCharges';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CdsSalesCharges entity.
   */
  static _keys = ['dataAreaId', 'ChargeCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Charge Code.
   */
  declare chargeCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Charge Classification.
   * @nullable
   */
  declare chargeClassification?: MarkupClassificationBr | null;
  /**
   * Credit Posting Main Account Id Display Value.
   * @nullable
   */
  declare creditPostingMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Debit Posting Main Account Id Display Value.
   * @nullable
   */
  declare debitPostingMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Debit Posting Method.
   * @nullable
   */
  declare debitPostingMethod?: MarkupType | null;
  /**
   * Charge Description.
   * @nullable
   */
  declare chargeDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Intrastat Invoice Value Include Charge Amounts.
   * @nullable
   */
  declare willIntrastatInvoiceValueIncludeChargeAmounts?: NoYes | null;
  /**
   * Ledger Name.
   * @nullable
   */
  declare ledgerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Debit Posting Type.
   * @nullable
   */
  declare debitPostingType?: LedgerPostingType | null;
  /**
   * Will Intrastat Statistical Value Include Charge Amounts.
   * @nullable
   */
  declare willIntrastatStatisticalValueIncludeChargeAmounts?: NoYes | null;
  /**
   * Sales Tax Item Group Code.
   * @nullable
   */
  declare salesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Sales Invoicing Prorate Charge Amounts.
   * @nullable
   */
  declare willSalesInvoicingProrateChargeAmounts?: NoYes | null;
  /**
   * Credit Posting Method.
   * @nullable
   */
  declare creditPostingMethod?: MarkupType | null;
  /**
   * Chart Of Accounts Name.
   * @nullable
   */
  declare chartOfAccountsName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Posting Type.
   * @nullable
   */
  declare creditPostingType?: LedgerPostingType | null;

  constructor(_entityApi: CdsSalesChargesApi<T>) {
    super(_entityApi);
  }
}

export interface CdsSalesChargesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  chargeCode: DeserializedType<T, 'Edm.String'>;
  chargeClassification?: MarkupClassificationBr | null;
  creditPostingMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  debitPostingMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  debitPostingMethod?: MarkupType | null;
  chargeDescription?: DeserializedType<T, 'Edm.String'> | null;
  willIntrastatInvoiceValueIncludeChargeAmounts?: NoYes | null;
  ledgerName?: DeserializedType<T, 'Edm.String'> | null;
  debitPostingType?: LedgerPostingType | null;
  willIntrastatStatisticalValueIncludeChargeAmounts?: NoYes | null;
  salesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  willSalesInvoicingProrateChargeAmounts?: NoYes | null;
  creditPostingMethod?: MarkupType | null;
  chartOfAccountsName?: DeserializedType<T, 'Edm.String'> | null;
  creditPostingType?: LedgerPostingType | null;
}
