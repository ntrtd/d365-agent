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
import type { LedgerFinancialReasonsApi } from './LedgerFinancialReasonsApi';
import { NoYes } from './NoYes';
import { BudgetCodes, BudgetCodesType } from './BudgetCodes';

/**
 * This class represents the entity "LedgerFinancialReasons" of service "d365_metadata".
 */
export class LedgerFinancialReasons<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LedgerFinancialReasonsType<T>
{
  /**
   * Technical entity name for LedgerFinancialReasons.
   */
  static override _entityName = 'LedgerFinancialReasons';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerFinancialReasons entity.
   */
  static _keys = ['dataAreaId', 'ReasonCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Reason Code.
   */
  declare reasonCode: DeserializedType<T, 'Edm.String'>;
  /**
   * For Ledger Transaction Type.
   * @nullable
   */
  declare forLedgerTransactionType?: NoYes | null;
  /**
   * For R Cash Transaction Type.
   * @nullable
   */
  declare forRCashTransactionType?: NoYes | null;
  /**
   * For Customer Transaction Type.
   * @nullable
   */
  declare forCustomerTransactionType?: NoYes | null;
  /**
   * For Bank Transaction Type.
   * @nullable
   */
  declare forBankTransactionType?: NoYes | null;
  /**
   * For Asset Transaction Type.
   * @nullable
   */
  declare forAssetTransactionType?: NoYes | null;
  /**
   * Cancellation Reason.
   * @nullable
   */
  declare cancellationReason?: NoYes | null;
  /**
   * Default Comment.
   * @nullable
   */
  declare defaultComment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * For R Asset Transaction Type.
   * @nullable
   */
  declare forRAssetTransactionType?: NoYes | null;
  /**
   * For Vendor Transaction Type.
   * @nullable
   */
  declare forVendorTransactionType?: NoYes | null;
  /**
   * Purpose Code.
   * @nullable
   */
  declare purposeCode?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link BudgetCodes} entity.
   */
  declare budgetCode: BudgetCodes<T>[];

  constructor(_entityApi: LedgerFinancialReasonsApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerFinancialReasonsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  reasonCode: DeserializedType<T, 'Edm.String'>;
  forLedgerTransactionType?: NoYes | null;
  forRCashTransactionType?: NoYes | null;
  forCustomerTransactionType?: NoYes | null;
  forBankTransactionType?: NoYes | null;
  forAssetTransactionType?: NoYes | null;
  cancellationReason?: NoYes | null;
  defaultComment?: DeserializedType<T, 'Edm.String'> | null;
  forRAssetTransactionType?: NoYes | null;
  forVendorTransactionType?: NoYes | null;
  purposeCode?: NoYes | null;
  budgetCode: BudgetCodesType<T>[];
}
