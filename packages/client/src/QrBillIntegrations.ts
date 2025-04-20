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
import type { QrBillIntegrationsApi } from './QrBillIntegrationsApi';

/**
 * This class represents the entity "QRBillIntegrations" of service "d365_metadata".
 */
export class QrBillIntegrations<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements QrBillIntegrationsType<T>
{
  /**
   * Technical entity name for QrBillIntegrations.
   */
  static override _entityName = 'QRBillIntegrations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the QrBillIntegrations entity.
   */
  static _keys = ['dataAreaId', 'ImportExecutionId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Import Execution Id.
   */
  declare importExecutionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Qr Reference Type.
   * @nullable
   */
  declare qrReferenceType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qr Creditor Address Type.
   * @nullable
   */
  declare qrCreditorAddressType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qr Reference.
   * @nullable
   */
  declare qrReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qr Creditor Town.
   * @nullable
   */
  declare qrCreditorTown?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qr Creditor Country.
   * @nullable
   */
  declare qrCreditorCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qr Unstructured Message.
   * @nullable
   */
  declare qrUnstructuredMessage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Bank Account.
   * @nullable
   */
  declare vendorBankAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qr Creditor Iban.
   * @nullable
   */
  declare qrCreditorIban?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount In Transaction Currency.
   */
  declare amountInTransactionCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Qr Bill Information.
   * @nullable
   */
  declare qrBillInformation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qr Creditor Addr Street.
   * @nullable
   */
  declare qrCreditorAddrStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Group.
   * @nullable
   */
  declare taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Account.
   * @nullable
   */
  declare vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qr Creditor Addr Line 2.
   * @nullable
   */
  declare qrCreditorAddrLine2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qr Creditor Addr Line 1.
   * @nullable
   */
  declare qrCreditorAddrLine1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Paym Term Id.
   * @nullable
   */
  declare paymTermId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Paym Id.
   * @nullable
   */
  declare paymId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qr Amount.
   */
  declare qrAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Item Group.
   * @nullable
   */
  declare taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Disc Code.
   * @nullable
   */
  declare cashDiscCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qr Creditor Building Number.
   * @nullable
   */
  declare qrCreditorBuildingNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qr Creditor Postal Code.
   * @nullable
   */
  declare qrCreditorPostalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Id.
   * @nullable
   */
  declare invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Date.
   */
  declare invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Qr Alternative Parameter 2.
   * @nullable
   */
  declare qrAlternativeParameter2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qr Creditor Name.
   * @nullable
   */
  declare qrCreditorName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qr Alternative Parameter 1.
   * @nullable
   */
  declare qrAlternativeParameter1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qr Currency.
   * @nullable
   */
  declare qrCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Number.
   * @nullable
   */
  declare vatNumber?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: QrBillIntegrationsApi<T>) {
    super(_entityApi);
  }
}

export interface QrBillIntegrationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  importExecutionId: DeserializedType<T, 'Edm.String'>;
  qrReferenceType?: DeserializedType<T, 'Edm.String'> | null;
  qrCreditorAddressType?: DeserializedType<T, 'Edm.String'> | null;
  qrReference?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  qrCreditorTown?: DeserializedType<T, 'Edm.String'> | null;
  qrCreditorCountry?: DeserializedType<T, 'Edm.String'> | null;
  qrUnstructuredMessage?: DeserializedType<T, 'Edm.String'> | null;
  vendorBankAccount?: DeserializedType<T, 'Edm.String'> | null;
  qrCreditorIban?: DeserializedType<T, 'Edm.String'> | null;
  amountInTransactionCurrency: DeserializedType<T, 'Edm.Decimal'>;
  qrBillInformation?: DeserializedType<T, 'Edm.String'> | null;
  qrCreditorAddrStreet?: DeserializedType<T, 'Edm.String'> | null;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  qrCreditorAddrLine2?: DeserializedType<T, 'Edm.String'> | null;
  qrCreditorAddrLine1?: DeserializedType<T, 'Edm.String'> | null;
  paymTermId?: DeserializedType<T, 'Edm.String'> | null;
  paymId?: DeserializedType<T, 'Edm.String'> | null;
  qrAmount: DeserializedType<T, 'Edm.Decimal'>;
  taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscCode?: DeserializedType<T, 'Edm.String'> | null;
  qrCreditorBuildingNumber?: DeserializedType<T, 'Edm.String'> | null;
  qrCreditorPostalCode?: DeserializedType<T, 'Edm.String'> | null;
  invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  qrAlternativeParameter2?: DeserializedType<T, 'Edm.String'> | null;
  qrCreditorName?: DeserializedType<T, 'Edm.String'> | null;
  qrAlternativeParameter1?: DeserializedType<T, 'Edm.String'> | null;
  qrCurrency?: DeserializedType<T, 'Edm.String'> | null;
  vatNumber?: DeserializedType<T, 'Edm.String'> | null;
}
