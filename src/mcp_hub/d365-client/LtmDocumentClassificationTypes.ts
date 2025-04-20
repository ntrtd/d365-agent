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
import type { LtmDocumentClassificationTypesApi } from './LtmDocumentClassificationTypesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "LTMDocumentClassificationTypes" of service "d365_metadata".
 */
export class LtmDocumentClassificationTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LtmDocumentClassificationTypesType<T>
{
  /**
   * Technical entity name for LtmDocumentClassificationTypes.
   */
  static override _entityName = 'LTMDocumentClassificationTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmDocumentClassificationTypes entity.
   */
  static _keys = ['dataAreaId', 'DocumentClassificationTypeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Document Classification Type Id.
   */
  declare documentClassificationTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Cust Line Debit.
   * @nullable
   */
  declare journalCustLineDebit?: NoYes | null;
  /**
   * Purchase Credit Note.
   * @nullable
   */
  declare purchaseCreditNote?: NoYes | null;
  /**
   * Free Text Inv Invoice.
   * @nullable
   */
  declare freeTextInvInvoice?: NoYes | null;
  /**
   * Journal Gl Line Debit.
   * @nullable
   */
  declare journalGlLineDebit?: NoYes | null;
  /**
   * Free Text Inv Credit Note.
   * @nullable
   */
  declare freeTextInvCreditNote?: NoYes | null;
  /**
   * Document Classification Type Name.
   * @nullable
   */
  declare documentClassificationTypeName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Purchase Invoice.
   * @nullable
   */
  declare purchaseInvoice?: NoYes | null;
  /**
   * Journal Vend Line Debit.
   * @nullable
   */
  declare journalVendLineDebit?: NoYes | null;
  /**
   * Journal Bank Line Credit.
   * @nullable
   */
  declare journalBankLineCredit?: NoYes | null;
  /**
   * Project Packing Slip.
   * @nullable
   */
  declare projectPackingSlip?: NoYes | null;
  /**
   * Receipt Rev Bank Line.
   * @nullable
   */
  declare receiptRevBankLine?: NoYes | null;
  /**
   * Invent Transfer Packing Slip.
   * @nullable
   */
  declare inventTransferPackingSlip?: NoYes | null;
  /**
   * Sales Invoice.
   * @nullable
   */
  declare salesInvoice?: NoYes | null;
  /**
   * Packing Slip.
   * @nullable
   */
  declare packingSlip?: NoYes | null;
  /**
   * Project Credit Note.
   * @nullable
   */
  declare projectCreditNote?: NoYes | null;
  /**
   * Receipt Rev Vend Line.
   * @nullable
   */
  declare receiptRevVendLine?: NoYes | null;
  /**
   * Journal Proj Line Credit.
   * @nullable
   */
  declare journalProjLineCredit?: NoYes | null;
  /**
   * Cash Box Control.
   * @nullable
   */
  declare cashBoxControl?: NoYes | null;
  /**
   * Journal Bank Line Debit.
   * @nullable
   */
  declare journalBankLineDebit?: NoYes | null;
  /**
   * Document Classification Type Prefix.
   * @nullable
   */
  declare documentClassificationTypePrefix?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sales Credit Note.
   * @nullable
   */
  declare salesCreditNote?: NoYes | null;
  /**
   * Single Document Per Voucher.
   * @nullable
   */
  declare singleDocumentPerVoucher?: NoYes | null;
  /**
   * Project Invoice.
   * @nullable
   */
  declare projectInvoice?: NoYes | null;
  /**
   * Inherits Header Number.
   * @nullable
   */
  declare inheritsHeaderNumber?: NoYes | null;
  /**
   * Receipt Rev Fa Line.
   * @nullable
   */
  declare receiptRevFaLine?: NoYes | null;
  /**
   * Journal Vend Line Credit.
   * @nullable
   */
  declare journalVendLineCredit?: NoYes | null;
  /**
   * Return Packing Slip.
   * @nullable
   */
  declare returnPackingSlip?: NoYes | null;
  /**
   * Receipt Rev Gl Line.
   * @nullable
   */
  declare receiptRevGlLine?: NoYes | null;
  /**
   * Project Returndeliverynote.
   * @nullable
   */
  declare projectReturndeliverynote?: NoYes | null;
  /**
   * Journal Fa Line Credit.
   * @nullable
   */
  declare journalFaLineCredit?: NoYes | null;
  /**
   * Journal Cust Line Credit.
   * @nullable
   */
  declare journalCustLineCredit?: NoYes | null;
  /**
   * Single Coll Pay Doc Per Voucher.
   * @nullable
   */
  declare singleCollPayDocPerVoucher?: NoYes | null;
  /**
   * Receipt Rev Proj Line.
   * @nullable
   */
  declare receiptRevProjLine?: NoYes | null;
  /**
   * Journal Gl Line Credit.
   * @nullable
   */
  declare journalGlLineCredit?: NoYes | null;
  /**
   * Journal Fa Line Debit.
   * @nullable
   */
  declare journalFaLineDebit?: NoYes | null;
  /**
   * Is Payment Media.
   * @nullable
   */
  declare isPaymentMedia?: NoYes | null;
  /**
   * Journal Proj Line Debit.
   * @nullable
   */
  declare journalProjLineDebit?: NoYes | null;
  /**
   * Receipt Rev Cust Line.
   * @nullable
   */
  declare receiptRevCustLine?: NoYes | null;
  /**
   * Single Account Per Voucher.
   * @nullable
   */
  declare singleAccountPerVoucher?: NoYes | null;

  constructor(_entityApi: LtmDocumentClassificationTypesApi<T>) {
    super(_entityApi);
  }
}

export interface LtmDocumentClassificationTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  documentClassificationTypeId: DeserializedType<T, 'Edm.String'>;
  journalCustLineDebit?: NoYes | null;
  purchaseCreditNote?: NoYes | null;
  freeTextInvInvoice?: NoYes | null;
  journalGlLineDebit?: NoYes | null;
  freeTextInvCreditNote?: NoYes | null;
  documentClassificationTypeName?: DeserializedType<T, 'Edm.String'> | null;
  purchaseInvoice?: NoYes | null;
  journalVendLineDebit?: NoYes | null;
  journalBankLineCredit?: NoYes | null;
  projectPackingSlip?: NoYes | null;
  receiptRevBankLine?: NoYes | null;
  inventTransferPackingSlip?: NoYes | null;
  salesInvoice?: NoYes | null;
  packingSlip?: NoYes | null;
  projectCreditNote?: NoYes | null;
  receiptRevVendLine?: NoYes | null;
  journalProjLineCredit?: NoYes | null;
  cashBoxControl?: NoYes | null;
  journalBankLineDebit?: NoYes | null;
  documentClassificationTypePrefix?: DeserializedType<T, 'Edm.String'> | null;
  salesCreditNote?: NoYes | null;
  singleDocumentPerVoucher?: NoYes | null;
  projectInvoice?: NoYes | null;
  inheritsHeaderNumber?: NoYes | null;
  receiptRevFaLine?: NoYes | null;
  journalVendLineCredit?: NoYes | null;
  returnPackingSlip?: NoYes | null;
  receiptRevGlLine?: NoYes | null;
  projectReturndeliverynote?: NoYes | null;
  journalFaLineCredit?: NoYes | null;
  journalCustLineCredit?: NoYes | null;
  singleCollPayDocPerVoucher?: NoYes | null;
  receiptRevProjLine?: NoYes | null;
  journalGlLineCredit?: NoYes | null;
  journalFaLineDebit?: NoYes | null;
  isPaymentMedia?: NoYes | null;
  journalProjLineDebit?: NoYes | null;
  receiptRevCustLine?: NoYes | null;
  singleAccountPerVoucher?: NoYes | null;
}
