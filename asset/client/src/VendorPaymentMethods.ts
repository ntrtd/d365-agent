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
import type { VendorPaymentMethodsApi } from './VendorPaymentMethodsApi';
import { NoYes } from './NoYes';
import { PrimaryMethodBr } from './PrimaryMethodBr';
import { CustVendPaymStatus } from './CustVendPaymStatus';
import { PaymSumBy } from './PaymSumBy';
import { PaymentTypeMx } from './PaymentTypeMx';
import { PaymentType } from './PaymentType';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { PostingBr } from './PostingBr';
import { TypeOfDraft } from './TypeOfDraft';
import {
  VendorPaymentJournalLines,
  VendorPaymentJournalLinesType
} from './VendorPaymentJournalLines';
import {
  PurchaseAgreements,
  PurchaseAgreementsType
} from './PurchaseAgreements';
import {
  VendorPaymentMethodSpecifications,
  VendorPaymentMethodSpecificationsType
} from './VendorPaymentMethodSpecifications';
import {
  ClmIntegrationPurchaseAgreements,
  ClmIntegrationPurchaseAgreementsType
} from './ClmIntegrationPurchaseAgreements';
import { JournalNames, JournalNamesType } from './JournalNames';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "VendorPaymentMethods" of service "d365_metadata".
 */
export class VendorPaymentMethods<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendorPaymentMethodsType<T>
{
  /**
   * Technical entity name for VendorPaymentMethods.
   */
  static override _entityName = 'VendorPaymentMethods';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendorPaymentMethods entity.
   */
  static _keys = ['dataAreaId', 'Name'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Electronic Reporting Vendor.
   * @nullable
   */
  declare electronicReportingVendor?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Level.
   */
  declare serviceLevel: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Use Ger Configuration.
   * @nullable
   */
  declare useGerConfiguration?: NoYes | null;
  /**
   * Payment Journal Name.
   * @nullable
   */
  declare paymentJournalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Export Format Class Name.
   * @nullable
   */
  declare exportFormatClassName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Validate Payment Note Is Mandatory.
   * @nullable
   */
  declare validatePaymentNoteIsMandatory?: NoYes | null;
  /**
   * Sped Primary Payment Method.
   * @nullable
   */
  declare spedPrimaryPaymentMethod?: PrimaryMethodBr | null;
  /**
   * Return Layout Group Id.
   * @nullable
   */
  declare returnLayoutGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Charge Bearer Value.
   * @nullable
   */
  declare chargeBearerValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bridging Posting Enabled.
   * @nullable
   */
  declare bridgingPostingEnabled?: NoYes | null;
  /**
   * Electronic Reporting Solution.
   * @nullable
   */
  declare electronicReportingSolution?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Payment Status.
   * @nullable
   */
  declare paymentStatus?: CustVendPaymStatus | null;
  /**
   * Local Instrument.
   */
  declare localInstrument: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sum By Period.
   * @nullable
   */
  declare sumByPeriod?: PaymSumBy | null;
  /**
   * Sat Payment Type.
   * @nullable
   */
  declare satPaymentType?: PaymentTypeMx | null;
  /**
   * Attribute Belgian Structured Payment Id Enabled.
   * @nullable
   */
  declare attributeBelgianStructuredPaymentIdEnabled?: NoYes | null;
  /**
   * Last File Number Today.
   */
  declare lastFileNumberToday: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Er Format Mapping.
   * @nullable
   */
  declare erFormatMapping?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Transaction Type.
   * @nullable
   */
  declare bankTransactionType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Validate Payment Id Is Mandatory.
   * @nullable
   */
  declare validatePaymentIdIsMandatory?: NoYes | null;
  /**
   * Dimension Attribute Display Value.
   * @nullable
   */
  declare dimensionAttributeDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Validate Transaction Type Is Bank.
   * @nullable
   */
  declare validateTransactionTypeIsBank?: NoYes | null;
  /**
   * Validate Check Number Is Mandatory.
   * @nullable
   */
  declare validateCheckNumberIsMandatory?: NoYes | null;
  /**
   * Export Layout Group Id.
   * @nullable
   */
  declare exportLayoutGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Grace Period Days.
   */
  declare discountGracePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Export Promissory Note During Invoice Posting.
   * @nullable
   */
  declare exportPromissoryNoteDuringInvoicePosting?: NoYes | null;
  /**
   * Payment Type.
   * @nullable
   */
  declare paymentType?: PaymentType | null;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: LedgerJournalAcType | null;
  /**
   * Create And Draw Promissory Note During Invoice Posting.
   * @nullable
   */
  declare createAndDrawPromissoryNoteDuringInvoicePosting?: NoYes | null;
  /**
   * Attribute Payment Account Enabled.
   * @nullable
   */
  declare attributePaymentAccountEnabled?: NoYes | null;
  /**
   * Last File Number.
   */
  declare lastFileNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Direct Debit.
   * @nullable
   */
  declare directDebit?: NoYes | null;
  /**
   * Bridging Posting Account Display Value.
   * @nullable
   */
  declare bridgingPostingAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Dimension Control.
   * @nullable
   */
  declare dimensionControl?: NoYes | null;
  /**
   * Attribute Payment Id Enabled.
   * @nullable
   */
  declare attributePaymentIdEnabled?: NoYes | null;
  /**
   * Sped Primary Payment Method Description.
   * @nullable
   */
  declare spedPrimaryPaymentMethodDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Validate Payment Specification Is Mandatory.
   * @nullable
   */
  declare validatePaymentSpecificationIsMandatory?: NoYes | null;
  /**
   * Attribute Third Party Bank Enabled.
   * @nullable
   */
  declare attributeThirdPartyBankEnabled?: NoYes | null;
  /**
   * Allow Payment Copies.
   * @nullable
   */
  declare allowPaymentCopies?: NoYes | null;
  /**
   * Return Format Class Name.
   * @nullable
   */
  declare returnFormatClassName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Account Display Value.
   * @nullable
   */
  declare paymentAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category Purpose.
   */
  declare categoryPurpose: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Generate Payment One Voucher.
   * @nullable
   */
  declare generatePaymentOneVoucher?: PostingBr | null;
  /**
   * Remittance Format Class Name.
   * @nullable
   */
  declare remittanceFormatClassName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Enable Postdated Check Clearing Posting.
   * @nullable
   */
  declare enablePostdatedCheckClearingPosting?: NoYes | null;
  /**
   * Validate Payment Reference Is Mandatory.
   * @nullable
   */
  declare validatePaymentReferenceIsMandatory?: NoYes | null;
  /**
   * Promissory Note Draft Type.
   * @nullable
   */
  declare promissoryNoteDraftType?: TypeOfDraft | null;
  /**
   * Last File Date.
   */
  declare lastFileDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Validate Offset Transaction Type Is Bank.
   * @nullable
   */
  declare validateOffsetTransactionTypeIsBank?: NoYes | null;
  /**
   * Posting Profile Remit Notes.
   * @nullable
   */
  declare postingProfileRemitNotes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link VendorPaymentJournalLines} entity.
   */
  declare vendorPaymentJournalLinePaymentMethodEntity: VendorPaymentJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseAgreements} entity.
   */
  declare purchaseAgreementHeaders: PurchaseAgreements<T>[];
  /**
   * One-to-many navigation property to the {@link VendorPaymentMethodSpecifications} entity.
   */
  declare vendorPaymentMethodSpecification: VendorPaymentMethodSpecifications<T>[];
  /**
   * One-to-many navigation property to the {@link ClmIntegrationPurchaseAgreements} entity.
   */
  declare clmIntegrationPurchaseAgreementHeaders: ClmIntegrationPurchaseAgreements<T>[];
  /**
   * One-to-one navigation property to the {@link JournalNames} entity.
   */
  declare journalName?: JournalNames<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: VendorPaymentMethodsApi<T>) {
    super(_entityApi);
  }
}

export interface VendorPaymentMethodsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  electronicReportingVendor?: DeserializedType<T, 'Edm.String'> | null;
  serviceLevel: DeserializedType<T, 'Edm.Int64'>;
  useGerConfiguration?: NoYes | null;
  paymentJournalName?: DeserializedType<T, 'Edm.String'> | null;
  exportFormatClassName?: DeserializedType<T, 'Edm.String'> | null;
  validatePaymentNoteIsMandatory?: NoYes | null;
  spedPrimaryPaymentMethod?: PrimaryMethodBr | null;
  returnLayoutGroupId?: DeserializedType<T, 'Edm.String'> | null;
  chargeBearerValue?: DeserializedType<T, 'Edm.String'> | null;
  bridgingPostingEnabled?: NoYes | null;
  electronicReportingSolution?: DeserializedType<T, 'Edm.String'> | null;
  paymentStatus?: CustVendPaymStatus | null;
  localInstrument: DeserializedType<T, 'Edm.Int64'>;
  sumByPeriod?: PaymSumBy | null;
  satPaymentType?: PaymentTypeMx | null;
  attributeBelgianStructuredPaymentIdEnabled?: NoYes | null;
  lastFileNumberToday: DeserializedType<T, 'Edm.Int32'>;
  erFormatMapping?: DeserializedType<T, 'Edm.String'> | null;
  bankTransactionType?: DeserializedType<T, 'Edm.String'> | null;
  validatePaymentIdIsMandatory?: NoYes | null;
  dimensionAttributeDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  validateTransactionTypeIsBank?: NoYes | null;
  validateCheckNumberIsMandatory?: NoYes | null;
  exportLayoutGroupId?: DeserializedType<T, 'Edm.String'> | null;
  discountGracePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  exportPromissoryNoteDuringInvoicePosting?: NoYes | null;
  paymentType?: PaymentType | null;
  accountType?: LedgerJournalAcType | null;
  createAndDrawPromissoryNoteDuringInvoicePosting?: NoYes | null;
  attributePaymentAccountEnabled?: NoYes | null;
  lastFileNumber: DeserializedType<T, 'Edm.Int32'>;
  directDebit?: NoYes | null;
  bridgingPostingAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  dimensionControl?: NoYes | null;
  attributePaymentIdEnabled?: NoYes | null;
  spedPrimaryPaymentMethodDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  validatePaymentSpecificationIsMandatory?: NoYes | null;
  attributeThirdPartyBankEnabled?: NoYes | null;
  allowPaymentCopies?: NoYes | null;
  returnFormatClassName?: DeserializedType<T, 'Edm.String'> | null;
  paymentAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  categoryPurpose: DeserializedType<T, 'Edm.Int64'>;
  generatePaymentOneVoucher?: PostingBr | null;
  remittanceFormatClassName?: DeserializedType<T, 'Edm.String'> | null;
  enablePostdatedCheckClearingPosting?: NoYes | null;
  validatePaymentReferenceIsMandatory?: NoYes | null;
  promissoryNoteDraftType?: TypeOfDraft | null;
  lastFileDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validateOffsetTransactionTypeIsBank?: NoYes | null;
  postingProfileRemitNotes?: DeserializedType<T, 'Edm.String'> | null;
  vendorPaymentJournalLinePaymentMethodEntity: VendorPaymentJournalLinesType<T>[];
  purchaseAgreementHeaders: PurchaseAgreementsType<T>[];
  vendorPaymentMethodSpecification: VendorPaymentMethodSpecificationsType<T>[];
  clmIntegrationPurchaseAgreementHeaders: ClmIntegrationPurchaseAgreementsType<T>[];
  journalName?: JournalNamesType<T> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
