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
import type { CodaAccountStatementLinesApi } from './CodaAccountStatementLinesApi';
import { NoYes } from './NoYes';
import { PaymentStub } from './PaymentStub';
import { BankCodaTransactionType } from './BankCodaTransactionType';
import { MessageType } from './MessageType';
import { BankCodaSettlementType } from './BankCodaSettlementType';
import { BankCodaLedgerJournalAcType } from './BankCodaLedgerJournalAcType';
import { GlobalisationCode } from './GlobalisationCode';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "CodaAccountStatementLines" of service "d365_metadata".
 */
export class CodaAccountStatementLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CodaAccountStatementLinesType<T>
{
  /**
   * Technical entity name for CodaAccountStatementLines.
   */
  static override _entityName = 'CodaAccountStatementLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CodaAccountStatementLines entity.
   */
  static _keys = ['dataAreaId', 'GUID'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Guid.
   */
  declare guid: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Customer Reference.
   * @nullable
   */
  declare customerReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Sales Tax Group.
   * @nullable
   */
  declare itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction.
   * @nullable
   */
  declare transaction?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Discount Linked.
   * @nullable
   */
  declare cashDiscountLinked?: NoYes | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Message.
   * @nullable
   */
  declare message?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Account.
   * @nullable
   */
  declare bankAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Associated Payment Attachment.
   * @nullable
   */
  declare associatedPaymentAttachment?: PaymentStub | null;
  /**
   * Bank Reference Number.
   * @nullable
   */
  declare bankReferenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Opposite Party City.
   * @nullable
   */
  declare oppositePartyCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Display Value.
   * @nullable
   */
  declare accountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Or Vendor Account Number.
   * @nullable
   */
  declare customerOrVendorAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Amount In Accounting Currency.
   */
  declare amountInAccountingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Has Process Errors.
   * @nullable
   */
  declare hasProcessErrors?: NoYes | null;
  /**
   * Transaction Type.
   * @nullable
   */
  declare transactionType?: BankCodaTransactionType | null;
  /**
   * Date 1.
   */
  declare date1: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Amount Imported.
   */
  declare amountImported: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Opposite Party Internal Codes.
   * @nullable
   */
  declare oppositePartyInternalCodes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Message Type.
   * @nullable
   */
  declare messageType?: MessageType | null;
  /**
   * Opposite Party Address.
   * @nullable
   */
  declare oppositePartyAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Opposite Party Name.
   * @nullable
   */
  declare oppositePartyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Note.
   * @nullable
   */
  declare note?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Statement Date.
   */
  declare bankStatementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Completed.
   * @nullable
   */
  declare completed?: NoYes | null;
  /**
   * Settlement Type.
   * @nullable
   */
  declare settlementType?: BankCodaSettlementType | null;
  /**
   * Transaction Group.
   * @nullable
   */
  declare transactionGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date.
   */
  declare date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invoice Number.
   * @nullable
   */
  declare invoiceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Detail.
   * @nullable
   */
  declare detail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: BankCodaLedgerJournalAcType | null;
  /**
   * Bank Coda Account Statement Lines 1 Line Id.
   */
  declare bankCodaAccountStatementLines1LineId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Globalisation Id.
   */
  declare globalisationId: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Bank Statement.
   * @nullable
   */
  declare bankStatement?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Globalization Coda.
   * @nullable
   */
  declare globalizationCoda?: GlobalisationCode | null;
  /**
   * Transaction Category.
   * @nullable
   */
  declare transactionCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Group.
   * @nullable
   */
  declare salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Bank Reference Number.
   * @nullable
   */
  declare externalBankReferenceNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sequence Number.
   * @nullable
   */
  declare sequenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Account Number.
   * @nullable
   */
  declare bankAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: CodaAccountStatementLinesApi<T>) {
    super(_entityApi);
  }
}

export interface CodaAccountStatementLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  guid: DeserializedType<T, 'Edm.Guid'>;
  customerReference?: DeserializedType<T, 'Edm.String'> | null;
  itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  transaction?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscountLinked?: NoYes | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  message?: DeserializedType<T, 'Edm.String'> | null;
  bankAccount?: DeserializedType<T, 'Edm.String'> | null;
  associatedPaymentAttachment?: PaymentStub | null;
  bankReferenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  oppositePartyCity?: DeserializedType<T, 'Edm.String'> | null;
  accountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  customerOrVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  amountInAccountingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  hasProcessErrors?: NoYes | null;
  transactionType?: BankCodaTransactionType | null;
  date1: DeserializedType<T, 'Edm.DateTimeOffset'>;
  amountImported: DeserializedType<T, 'Edm.Decimal'>;
  oppositePartyInternalCodes?: DeserializedType<T, 'Edm.String'> | null;
  messageType?: MessageType | null;
  oppositePartyAddress?: DeserializedType<T, 'Edm.String'> | null;
  oppositePartyName?: DeserializedType<T, 'Edm.String'> | null;
  note?: DeserializedType<T, 'Edm.String'> | null;
  bankStatementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  completed?: NoYes | null;
  settlementType?: BankCodaSettlementType | null;
  transactionGroup?: DeserializedType<T, 'Edm.String'> | null;
  date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  invoiceNumber?: DeserializedType<T, 'Edm.String'> | null;
  detail?: DeserializedType<T, 'Edm.String'> | null;
  accountType?: BankCodaLedgerJournalAcType | null;
  bankCodaAccountStatementLines1LineId: DeserializedType<T, 'Edm.Guid'>;
  globalisationId: DeserializedType<T, 'Edm.Decimal'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  bankStatement?: DeserializedType<T, 'Edm.String'> | null;
  globalizationCoda?: GlobalisationCode | null;
  transactionCategory?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  externalBankReferenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  sequenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  bankAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
