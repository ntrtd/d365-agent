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
import type { VoucherTypesApi } from './VoucherTypesApi';
import { NoYes } from './NoYes';
import {
  GeneralLedgerCustInvoiceJournalLines,
  GeneralLedgerCustInvoiceJournalLinesType
} from './GeneralLedgerCustInvoiceJournalLines';
import {
  VendInvoiceJournalLines,
  VendInvoiceJournalLinesType
} from './VendInvoiceJournalLines';
import {
  AssetLeaseLedgerJournalLines,
  AssetLeaseLedgerJournalLinesType
} from './AssetLeaseLedgerJournalLines';
import {
  CustomerPaymentJournalLines,
  CustomerPaymentJournalLinesType
} from './CustomerPaymentJournalLines';
import {
  VendorPaymentJournalLines,
  VendorPaymentJournalLinesType
} from './VendorPaymentJournalLines';
import {
  VendInvoiceRegisterLines,
  VendInvoiceRegisterLinesType
} from './VendInvoiceRegisterLines';
import {
  LedgerJournalLines,
  LedgerJournalLinesType
} from './LedgerJournalLines';
import {
  ExpenseJournalLines,
  ExpenseJournalLinesType
} from './ExpenseJournalLines';
import { AssetJournalV2, AssetJournalV2Type } from './AssetJournalV2';
import { AssetJournalLines, AssetJournalLinesType } from './AssetJournalLines';

/**
 * This class represents the entity "VoucherTypes" of service "d365_metadata".
 */
export class VoucherTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements VoucherTypesType<T>
{
  /**
   * Technical entity name for VoucherTypes.
   */
  static override _entityName = 'VoucherTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VoucherTypes entity.
   */
  static _keys = ['dataAreaId', 'VoucherType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Voucher Type.
   */
  declare voucherType: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Name.
   * @nullable
   */
  declare journalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Approved By.
   * @nullable
   */
  declare defaultApprovedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher Type Number.
   * @nullable
   */
  declare voucherTypeNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger Print Layout Group.
   * @nullable
   */
  declare ledgerPrintLayoutGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Defaulted Prepared By.
   * @nullable
   */
  declare defaultedPreparedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Priority.
   */
  declare priority: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Default Type.
   * @nullable
   */
  declare isDefaultType?: NoYes | null;
  /**
   * Number Sequence Code.
   * @nullable
   */
  declare numberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link GeneralLedgerCustInvoiceJournalLines} entity.
   */
  declare generalLedgerCustInvoiceJournalLine: GeneralLedgerCustInvoiceJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link VendInvoiceJournalLines} entity.
   */
  declare vendInvoiceJournalLine: VendInvoiceJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetLeaseLedgerJournalLines} entity.
   */
  declare ledgerVoucherTypeEntityVoucherType: AssetLeaseLedgerJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerPaymentJournalLines} entity.
   */
  declare customerPaymentJournalLineLedgerVoucherTypeEntity: CustomerPaymentJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link VendorPaymentJournalLines} entity.
   */
  declare vendorPaymentJournalLine: VendorPaymentJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link VendInvoiceRegisterLines} entity.
   */
  declare vendInvoiceRegisterLedgerVoucherType: VendInvoiceRegisterLines<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerJournalLines} entity.
   */
  declare ledgerJournalLine: LedgerJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link ExpenseJournalLines} entity.
   */
  declare expenseJournalLine: ExpenseJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetJournalV2} entity.
   */
  declare assetJournalV2Entity: AssetJournalV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetJournalLines} entity.
   */
  declare assetJournalLine: AssetJournalLines<T>[];

  constructor(_entityApi: VoucherTypesApi<T>) {
    super(_entityApi);
  }
}

export interface VoucherTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  voucherType: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  journalName?: DeserializedType<T, 'Edm.String'> | null;
  defaultApprovedBy?: DeserializedType<T, 'Edm.String'> | null;
  voucherTypeNumber?: DeserializedType<T, 'Edm.String'> | null;
  ledgerPrintLayoutGroup?: DeserializedType<T, 'Edm.String'> | null;
  defaultedPreparedBy?: DeserializedType<T, 'Edm.String'> | null;
  priority: DeserializedType<T, 'Edm.Int32'>;
  isDefaultType?: NoYes | null;
  numberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  generalLedgerCustInvoiceJournalLine: GeneralLedgerCustInvoiceJournalLinesType<T>[];
  vendInvoiceJournalLine: VendInvoiceJournalLinesType<T>[];
  ledgerVoucherTypeEntityVoucherType: AssetLeaseLedgerJournalLinesType<T>[];
  customerPaymentJournalLineLedgerVoucherTypeEntity: CustomerPaymentJournalLinesType<T>[];
  vendorPaymentJournalLine: VendorPaymentJournalLinesType<T>[];
  vendInvoiceRegisterLedgerVoucherType: VendInvoiceRegisterLinesType<T>[];
  ledgerJournalLine: LedgerJournalLinesType<T>[];
  expenseJournalLine: ExpenseJournalLinesType<T>[];
  assetJournalV2Entity: AssetJournalV2Type<T>[];
  assetJournalLine: AssetJournalLinesType<T>[];
}
