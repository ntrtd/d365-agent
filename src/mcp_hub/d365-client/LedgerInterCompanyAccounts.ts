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
import type { LedgerInterCompanyAccountsApi } from './LedgerInterCompanyAccountsApi';
import { CustVendSettleCompanyPostOption } from './CustVendSettleCompanyPostOption';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import { JournalNames, JournalNamesType } from './JournalNames';

/**
 * This class represents the entity "LedgerInterCompanyAccounts" of service "d365_metadata".
 */
export class LedgerInterCompanyAccounts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LedgerInterCompanyAccountsType<T>
{
  /**
   * Technical entity name for LedgerInterCompanyAccounts.
   */
  static override _entityName = 'LedgerInterCompanyAccounts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerInterCompanyAccounts entity.
   */
  static _keys = ['OriginatingLegalEntityId', 'DestinationLegalEntityId'];
  /**
   * Originating Legal Entity Id.
   */
  declare originatingLegalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Destination Legal Entity Id.
   */
  declare destinationLegalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Post Interest.
   * @nullable
   */
  declare postInterest?: CustVendSettleCompanyPostOption | null;
  /**
   * Journal.
   * @nullable
   */
  declare journal?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Originating Debit Account Display Value.
   * @nullable
   */
  declare originatingDebitAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Destination Debit Account Display Value.
   * @nullable
   */
  declare destinationDebitAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Post Fine.
   * @nullable
   */
  declare postFine?: CustVendSettleCompanyPostOption | null;
  /**
   * Destination Credit Account Display Value.
   * @nullable
   */
  declare destinationCreditAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vendor Payment Post Financial Interest.
   * @nullable
   */
  declare vendorPaymentPostFinancialInterest?: CustVendSettleCompanyPostOption | null;
  /**
   * Post Currency Exchange Gain Or Loss.
   * @nullable
   */
  declare postCurrencyExchangeGainOrLoss?: CustVendSettleCompanyPostOption | null;
  /**
   * Post Cash Discount.
   * @nullable
   */
  declare postCashDiscount?: CustVendSettleCompanyPostOption | null;
  /**
   * Originating Credit Account Display Value.
   * @nullable
   */
  declare originatingCreditAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vendor Payment Post Fine.
   * @nullable
   */
  declare vendorPaymentPostFine?: CustVendSettleCompanyPostOption | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare ledgerInterCompanyAccountSourceCreditDimension?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare ledgerInterCompanyAccountDestinationCreditDimension?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare ledgerInterCompanyAccountDestinationDebitDimension?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link JournalNames} entity.
   */
  declare ledgerIntercompanyJournalName?: JournalNames<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare ledgerInterCompanyAccountSourceDebitDimension?: DimensionCombinations<T> | null;

  constructor(_entityApi: LedgerInterCompanyAccountsApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerInterCompanyAccountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  originatingLegalEntityId: DeserializedType<T, 'Edm.String'>;
  destinationLegalEntityId: DeserializedType<T, 'Edm.String'>;
  postInterest?: CustVendSettleCompanyPostOption | null;
  journal?: DeserializedType<T, 'Edm.String'> | null;
  originatingDebitAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  destinationDebitAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  postFine?: CustVendSettleCompanyPostOption | null;
  destinationCreditAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  vendorPaymentPostFinancialInterest?: CustVendSettleCompanyPostOption | null;
  postCurrencyExchangeGainOrLoss?: CustVendSettleCompanyPostOption | null;
  postCashDiscount?: CustVendSettleCompanyPostOption | null;
  originatingCreditAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  vendorPaymentPostFine?: CustVendSettleCompanyPostOption | null;
  ledgerInterCompanyAccountSourceCreditDimension?: DimensionCombinationsType<T> | null;
  ledgerInterCompanyAccountDestinationCreditDimension?: DimensionCombinationsType<T> | null;
  ledgerInterCompanyAccountDestinationDebitDimension?: DimensionCombinationsType<T> | null;
  ledgerIntercompanyJournalName?: JournalNamesType<T> | null;
  ledgerInterCompanyAccountSourceDebitDimension?: DimensionCombinationsType<T> | null;
}
