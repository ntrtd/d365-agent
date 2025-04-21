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
import type { BankClientPaymentsApi } from './BankClientPaymentsApi';
import { BankClientPaymentDirectionRu } from './BankClientPaymentDirectionRu';
import { NoYes } from './NoYes';
import { ModuleCustVend } from './ModuleCustVend';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "BankClientPayments" of service "d365_metadata".
 */
export class BankClientPayments<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BankClientPaymentsType<T>
{
  /**
   * Technical entity name for BankClientPayments.
   */
  static override _entityName = 'BankClientPayments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BankClientPayments entity.
   */
  static _keys = [
    'dataAreaId',
    'PaymentDirection',
    'DocumentNumber',
    'DocumentDate',
    'PayerAccountNumber',
    'PayeeAccountNumber',
    'Amount',
    'Currency'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Payment Direction.
   * @nullable
   */
  declare paymentDirection?: BankClientPaymentDirectionRu | null;
  /**
   * Document Number.
   */
  declare documentNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Document Date.
   */
  declare documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Payer Account Number.
   */
  declare payerAccountNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Payee Account Number.
   */
  declare payeeAccountNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Currency.
   */
  declare currency: DeserializedType<T, 'Edm.String'>;
  /**
   * Uci.
   * @nullable
   */
  declare uci?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Exchange Rate.
   */
  declare bankExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Payer Bank Account Number.
   * @nullable
   */
  declare payerBankAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quittance Time.
   */
  declare quittanceTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Item Sales Tax Group.
   * @nullable
   */
  declare itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prepayment Journal Voucher.
   * @nullable
   */
  declare prepaymentJournalVoucher?: NoYes | null;
  /**
   * Currency Of Conversion.
   * @nullable
   */
  declare currencyOfConversion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quittance Content.
   * @nullable
   */
  declare quittanceContent?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Account.
   * @nullable
   */
  declare bankAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Include.
   * @nullable
   */
  declare include?: NoYes | null;
  /**
   * Counteragent Type.
   * @nullable
   */
  declare counteragentType?: ModuleCustVend | null;
  /**
   * Purpose Text.
   * @nullable
   */
  declare purposeText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Agreement Number Locking.
   * @nullable
   */
  declare agreementNumberLocking?: NoYes | null;
  /**
   * Payer Bank Address.
   * @nullable
   */
  declare payerBankAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exchange Rate.
   */
  declare exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Payee Bank Address.
   * @nullable
   */
  declare payeeBankAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ambiguous Text.
   * @nullable
   */
  declare ambiguousText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Recipient.
   * @nullable
   */
  declare recipient?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payee Bank Corr Account.
   * @nullable
   */
  declare payeeBankCorrAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Display Value.
   * @nullable
   */
  declare dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payee Bank Account Number.
   * @nullable
   */
  declare payeeBankAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payee Bank Bic.
   * @nullable
   */
  declare payeeBankBic?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Type.
   * @nullable
   */
  declare documentType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Date.
   */
  declare transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Bank Transaction Type.
   * @nullable
   */
  declare bankTransactionType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Profile.
   * @nullable
   */
  declare postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payer.
   * @nullable
   */
  declare payer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quittance Date.
   */
  declare quittanceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Error.
   * @nullable
   */
  declare error?: NoYes | null;
  /**
   * Counteragent.
   * @nullable
   */
  declare counteragent?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payer Bank Bic.
   * @nullable
   */
  declare payerBankBic?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posted.
   * @nullable
   */
  declare posted?: NoYes | null;
  /**
   * Payer Bank Corr Account.
   * @nullable
   */
  declare payerBankCorrAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payer Bank Name.
   * @nullable
   */
  declare payerBankName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payee Bank Name.
   * @nullable
   */
  declare payeeBankName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Agreement Id.
   * @nullable
   */
  declare agreementId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payee Inn.
   * @nullable
   */
  declare payeeInn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Withdrawal Date.
   */
  declare withdrawalDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Payer Inn.
   * @nullable
   */
  declare payerInn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Number.
   * @nullable
   */
  declare journalNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Error Cause.
   * @nullable
   */
  declare errorCause?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Group.
   * @nullable
   */
  declare salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payer Registry Reason Code.
   * @nullable
   */
  declare payerRegistryReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payee Registry Reason Code.
   * @nullable
   */
  declare payeeRegistryReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receipt Date.
   */
  declare receiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: BankClientPaymentsApi<T>) {
    super(_entityApi);
  }
}

export interface BankClientPaymentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  paymentDirection?: BankClientPaymentDirectionRu | null;
  documentNumber: DeserializedType<T, 'Edm.String'>;
  documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  payerAccountNumber: DeserializedType<T, 'Edm.String'>;
  payeeAccountNumber: DeserializedType<T, 'Edm.String'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  currency: DeserializedType<T, 'Edm.String'>;
  uci?: DeserializedType<T, 'Edm.String'> | null;
  bankExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  payerBankAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  quittanceTime: DeserializedType<T, 'Edm.Int32'>;
  itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  prepaymentJournalVoucher?: NoYes | null;
  currencyOfConversion?: DeserializedType<T, 'Edm.String'> | null;
  quittanceContent?: DeserializedType<T, 'Edm.String'> | null;
  bankAccount?: DeserializedType<T, 'Edm.String'> | null;
  include?: NoYes | null;
  counteragentType?: ModuleCustVend | null;
  purposeText?: DeserializedType<T, 'Edm.String'> | null;
  agreementNumberLocking?: NoYes | null;
  payerBankAddress?: DeserializedType<T, 'Edm.String'> | null;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  payeeBankAddress?: DeserializedType<T, 'Edm.String'> | null;
  ambiguousText?: DeserializedType<T, 'Edm.String'> | null;
  recipient?: DeserializedType<T, 'Edm.String'> | null;
  payeeBankCorrAccount?: DeserializedType<T, 'Edm.String'> | null;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  payeeBankAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  payeeBankBic?: DeserializedType<T, 'Edm.String'> | null;
  documentType?: DeserializedType<T, 'Edm.String'> | null;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  bankTransactionType?: DeserializedType<T, 'Edm.String'> | null;
  postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  payer?: DeserializedType<T, 'Edm.String'> | null;
  quittanceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  error?: NoYes | null;
  counteragent?: DeserializedType<T, 'Edm.String'> | null;
  payerBankBic?: DeserializedType<T, 'Edm.String'> | null;
  posted?: NoYes | null;
  payerBankCorrAccount?: DeserializedType<T, 'Edm.String'> | null;
  payerBankName?: DeserializedType<T, 'Edm.String'> | null;
  payeeBankName?: DeserializedType<T, 'Edm.String'> | null;
  agreementId?: DeserializedType<T, 'Edm.String'> | null;
  payeeInn?: DeserializedType<T, 'Edm.String'> | null;
  withdrawalDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  payerInn?: DeserializedType<T, 'Edm.String'> | null;
  journalNumber?: DeserializedType<T, 'Edm.String'> | null;
  errorCause?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  payerRegistryReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  payeeRegistryReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  receiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dimensionSet?: DimensionSetsType<T> | null;
}
