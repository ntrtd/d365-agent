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
import type { CustPaymModeTableBiEntitiesApi } from './CustPaymModeTableBiEntitiesApi';
import { NoYes } from './NoYes';
import { PaymentTypeMx } from './PaymentTypeMx';
import { PaymSumBy } from './PaymSumBy';
import { CustPaymentType } from './CustPaymentType';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { PrimaryMethodBr } from './PrimaryMethodBr';
import { TypeOfDraft } from './TypeOfDraft';
import { CustVendPaymStatus } from './CustVendPaymStatus';
import { EfDocPaymentMethodBr } from './EfDocPaymentMethodBr';

/**
 * This class represents the entity "CustPaymModeTableBiEntities" of service "d365_metadata".
 */
export class CustPaymModeTableBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustPaymModeTableBiEntitiesType<T>
{
  /**
   * Technical entity name for CustPaymModeTableBiEntities.
   */
  static override _entityName = 'CustPaymModeTableBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustPaymModeTableBiEntities entity.
   */
  static _keys = ['dataAreaId', 'PaymMode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Paym Mode.
   */
  declare paymMode: DeserializedType<T, 'Edm.String'>;
  /**
   * Paym On Invoice.
   * @nullable
   */
  declare paymOnInvoice?: NoYes | null;
  /**
   * Posting Profile Bills Remit Collection It.
   * @nullable
   */
  declare postingProfileBillsRemitCollectionIt?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Use Ger Configuration.
   * @nullable
   */
  declare useGerConfiguration?: NoYes | null;
  /**
   * Last Sequence Num Date.
   */
  declare lastSequenceNumDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Dimension Attribute Set.
   */
  declare dimensionAttributeSet: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Use Custom Format Ru.
   * @nullable
   */
  declare useCustomFormatRu?: NoYes | null;
  /**
   * Bank Client Document Type Id Ru.
   * @nullable
   */
  declare bankClientDocumentTypeIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Local Instrument W.
   */
  declare localInstrumentW: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Class Id.
   */
  declare classId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Payment Type Mx.
   * @nullable
   */
  declare paymentTypeMx?: PaymentTypeMx | null;
  /**
   * Number Sequence Table Lt.
   */
  declare numberSequenceTableLt: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Class Id Remittance.
   */
  declare classIdRemittance: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Further Posting.
   * @nullable
   */
  declare furtherPosting?: NoYes | null;
  /**
   * Paym Sum By.
   * @nullable
   */
  declare paymSumBy?: PaymSumBy | null;
  /**
   * Paym Journal Name Id.
   * @nullable
   */
  declare paymJournalNameId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Er Model Mapping Table.
   */
  declare erModelMappingTable: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Split Payment W.
   * @nullable
   */
  declare splitPaymentW?: NoYes | null;
  /**
   * Export Layout Group Id Br.
   * @nullable
   */
  declare exportLayoutGroupIdBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Disc Grace Days.
   */
  declare discGraceDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Last Sequence Number.
   */
  declare lastSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Service Level W.
   */
  declare serviceLevelW: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Export Refund.
   * @nullable
   */
  declare exportRefund?: NoYes | null;
  /**
   * Posting Profile Bills Remit Discount It.
   * @nullable
   */
  declare postingProfileBillsRemitDiscountIt?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Charge Bearer W.
   */
  declare chargeBearerW: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Payment Type.
   * @nullable
   */
  declare paymentType?: CustPaymentType | null;
  /**
   * Last Sequence Num Today.
   */
  declare lastSequenceNumToday: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: LedgerJournalAcType | null;
  /**
   * Payment Ledger Dimension Values Json.
   * @nullable
   */
  declare paymentLedgerDimensionValuesJson?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Class Id File Analyze.
   */
  declare classIdFileAnalyze: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Direct Debit.
   * @nullable
   */
  declare directDebit?: NoYes | null;
  /**
   * Bank Cust Paym Id Table.
   */
  declare bankCustPaymIdTable: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Primary Method Br.
   * @nullable
   */
  declare primaryMethodBr?: PrimaryMethodBr | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Desc Primary Method Br.
   * @nullable
   */
  declare descPrimaryMethodBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Use Ger Import.
   * @nullable
   */
  declare useGerImport?: NoYes | null;
  /**
   * Dim Ctrl.
   * @nullable
   */
  declare dimCtrl?: NoYes | null;
  /**
   * Bank Trans Type.
   * @nullable
   */
  declare bankTransType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Is Sepa.
   * @nullable
   */
  declare isSepa?: NoYes | null;
  /**
   * Er Format Mapping Id.
   */
  declare erFormatMappingId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Pdc Clearing Posting.
   * @nullable
   */
  declare pdcClearingPosting?: NoYes | null;
  /**
   * Bank Client Class Id Ru.
   */
  declare bankClientClassIdRu: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Return Layout Group Id Br.
   * @nullable
   */
  declare returnLayoutGroupIdBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Class Id Return.
   */
  declare classIdReturn: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Category Purpose W.
   */
  declare categoryPurposeW: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Type Of Draft.
   * @nullable
   */
  declare typeOfDraft?: TypeOfDraft | null;
  /**
   * Class Id In.
   */
  declare classIdIn: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Export On Invoice.
   * @nullable
   */
  declare exportOnInvoice?: NoYes | null;
  /**
   * Paym Status.
   * @nullable
   */
  declare paymStatus?: CustVendPaymStatus | null;
  /**
   * Payment Method Br.
   * @nullable
   */
  declare paymentMethodBr?: EfDocPaymentMethodBr | null;

  constructor(_entityApi: CustPaymModeTableBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface CustPaymModeTableBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  paymMode: DeserializedType<T, 'Edm.String'>;
  paymOnInvoice?: NoYes | null;
  postingProfileBillsRemitCollectionIt?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  useGerConfiguration?: NoYes | null;
  lastSequenceNumDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dimensionAttributeSet: DeserializedType<T, 'Edm.Int64'>;
  useCustomFormatRu?: NoYes | null;
  bankClientDocumentTypeIdRu?: DeserializedType<T, 'Edm.String'> | null;
  localInstrumentW: DeserializedType<T, 'Edm.Int64'>;
  classId: DeserializedType<T, 'Edm.Int32'>;
  paymentTypeMx?: PaymentTypeMx | null;
  numberSequenceTableLt: DeserializedType<T, 'Edm.Int64'>;
  classIdRemittance: DeserializedType<T, 'Edm.Int32'>;
  furtherPosting?: NoYes | null;
  paymSumBy?: PaymSumBy | null;
  paymJournalNameId?: DeserializedType<T, 'Edm.String'> | null;
  erModelMappingTable: DeserializedType<T, 'Edm.Int64'>;
  splitPaymentW?: NoYes | null;
  exportLayoutGroupIdBr?: DeserializedType<T, 'Edm.String'> | null;
  discGraceDays: DeserializedType<T, 'Edm.Int32'>;
  lastSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  serviceLevelW: DeserializedType<T, 'Edm.Int64'>;
  exportRefund?: NoYes | null;
  postingProfileBillsRemitDiscountIt?: DeserializedType<T, 'Edm.String'> | null;
  chargeBearerW: DeserializedType<T, 'Edm.Int64'>;
  paymentType?: CustPaymentType | null;
  lastSequenceNumToday: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  accountType?: LedgerJournalAcType | null;
  paymentLedgerDimensionValuesJson?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  classIdFileAnalyze: DeserializedType<T, 'Edm.Int32'>;
  directDebit?: NoYes | null;
  bankCustPaymIdTable: DeserializedType<T, 'Edm.Int64'>;
  primaryMethodBr?: PrimaryMethodBr | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  descPrimaryMethodBr?: DeserializedType<T, 'Edm.String'> | null;
  useGerImport?: NoYes | null;
  dimCtrl?: NoYes | null;
  bankTransType?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  isSepa?: NoYes | null;
  erFormatMappingId: DeserializedType<T, 'Edm.Int64'>;
  pdcClearingPosting?: NoYes | null;
  bankClientClassIdRu: DeserializedType<T, 'Edm.Int32'>;
  returnLayoutGroupIdBr?: DeserializedType<T, 'Edm.String'> | null;
  classIdReturn: DeserializedType<T, 'Edm.Int32'>;
  categoryPurposeW: DeserializedType<T, 'Edm.Int64'>;
  typeOfDraft?: TypeOfDraft | null;
  classIdIn: DeserializedType<T, 'Edm.Int32'>;
  exportOnInvoice?: NoYes | null;
  paymStatus?: CustVendPaymStatus | null;
  paymentMethodBr?: EfDocPaymentMethodBr | null;
}
