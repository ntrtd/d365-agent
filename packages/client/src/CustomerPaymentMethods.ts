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
import type { CustomerPaymentMethodsApi } from './CustomerPaymentMethodsApi';
import { TypeOfDraft } from './TypeOfDraft';
import { NoYes } from './NoYes';
import { CustVendPaymStatus } from './CustVendPaymStatus';
import { PaymSumBy } from './PaymSumBy';
import { PaymentTypeMx } from './PaymentTypeMx';
import { CustPaymentType } from './CustPaymentType';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { PrimaryMethodBr } from './PrimaryMethodBr';
import { JournalNames, JournalNamesType } from './JournalNames';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import {
  CustomerPaymentJournalLines,
  CustomerPaymentJournalLinesType
} from './CustomerPaymentJournalLines';
import { OnlineChannelV2S, OnlineChannelV2SType } from './OnlineChannelV2S';
import {
  SalesAgreementConfirmations,
  SalesAgreementConfirmationsType
} from './SalesAgreementConfirmations';
import { SalesAgreements, SalesAgreementsType } from './SalesAgreements';
import {
  FreeTextInvoiceHeaders,
  FreeTextInvoiceHeadersType
} from './FreeTextInvoiceHeaders';
import { RetailCallCenters, RetailCallCentersType } from './RetailCallCenters';
import {
  CustomerPaymentMethodSpecifications,
  CustomerPaymentMethodSpecificationsType
} from './CustomerPaymentMethodSpecifications';
import { OnlineChannels, OnlineChannelsType } from './OnlineChannels';
import {
  CdsFreeTextInvoiceHeaders,
  CdsFreeTextInvoiceHeadersType
} from './CdsFreeTextInvoiceHeaders';
import { RetailStores, RetailStoresType } from './RetailStores';

/**
 * This class represents the entity "CustomerPaymentMethods" of service "d365_metadata".
 */
export class CustomerPaymentMethods<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomerPaymentMethodsType<T>
{
  /**
   * Technical entity name for CustomerPaymentMethods.
   */
  static override _entityName = 'CustomerPaymentMethods';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomerPaymentMethods entity.
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
   * Bill Of Exchange Draft Type.
   * @nullable
   */
  declare billOfExchangeDraftType?: TypeOfDraft | null;
  /**
   * Er Solution.
   * @nullable
   */
  declare erSolution?: DeserializedType<T, 'Edm.String'> | null;
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
   * Return Layout Group Id.
   * @nullable
   */
  declare returnLayoutGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bridging Posting Enabled.
   * @nullable
   */
  declare bridgingPostingEnabled?: NoYes | null;
  /**
   * Payment Status.
   * @nullable
   */
  declare paymentStatus?: CustVendPaymStatus | null;
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
   * Er Model Mapping Table.
   */
  declare erModelMappingTable: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Validate Transaction Type Is Bank.
   * @nullable
   */
  declare validateTransactionTypeIsBank?: NoYes | null;
  /**
   * Description Primary Method Payment.
   * @nullable
   */
  declare descriptionPrimaryMethodPayment?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * Import Format Class Name.
   * @nullable
   */
  declare importFormatClassName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Type.
   * @nullable
   */
  declare paymentType?: CustPaymentType | null;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: LedgerJournalAcType | null;
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
   * Export Bill Of Exchange During Invoice Posting.
   * @nullable
   */
  declare exportBillOfExchangeDuringInvoicePosting?: NoYes | null;
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
   * Attribute Third Party Bank Enabled.
   * @nullable
   */
  declare attributeThirdPartyBankEnabled?: NoYes | null;
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
   * Validate Deposit Slip Is Mandatory.
   * @nullable
   */
  declare validateDepositSlipIsMandatory?: NoYes | null;
  /**
   * Is Sepa.
   * @nullable
   */
  declare isSepa?: NoYes | null;
  /**
   * Split Payment.
   * @nullable
   */
  declare splitPayment?: NoYes | null;
  /**
   * Create And Draw Bill Of Exchange During Invoice Posting.
   * @nullable
   */
  declare createAndDrawBillOfExchangeDuringInvoicePosting?: NoYes | null;
  /**
   * Er Provider.
   * @nullable
   */
  declare erProvider?: DeserializedType<T, 'Edm.String'> | null;
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
   * Primary Method Payment.
   * @nullable
   */
  declare primaryMethodPayment?: PrimaryMethodBr | null;
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
   * Posting Profile Bills Remit Collection.
   * @nullable
   */
  declare postingProfileBillsRemitCollection?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Posting Profile Bills Remit Discount.
   * @nullable
   */
  declare postingProfileBillsRemitDiscount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link JournalNames} entity.
   */
  declare journalName?: JournalNames<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-many navigation property to the {@link CustomerPaymentJournalLines} entity.
   */
  declare customerPaymentJournalLinePaymentMethodEntity: CustomerPaymentJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link OnlineChannelV2S} entity.
   */
  declare onlineChannelV2: OnlineChannelV2S<T>[];
  /**
   * One-to-many navigation property to the {@link SalesAgreementConfirmations} entity.
   */
  declare salesAgreementConfirmationHeaders: SalesAgreementConfirmations<T>[];
  /**
   * One-to-many navigation property to the {@link SalesAgreements} entity.
   */
  declare salesAgreementHeaders: SalesAgreements<T>[];
  /**
   * One-to-many navigation property to the {@link FreeTextInvoiceHeaders} entity.
   */
  declare freeTextInvoiceHeaderMethodOfPayment: FreeTextInvoiceHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link RetailCallCenters} entity.
   */
  declare retailCallCenter: RetailCallCenters<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerPaymentMethodSpecifications} entity.
   */
  declare customerPaymentMethodSpecification: CustomerPaymentMethodSpecifications<T>[];
  /**
   * One-to-many navigation property to the {@link OnlineChannels} entity.
   */
  declare onlineChannel: OnlineChannels<T>[];
  /**
   * One-to-many navigation property to the {@link CdsFreeTextInvoiceHeaders} entity.
   */
  declare cdsFreeTextInvoiceHeaders: CdsFreeTextInvoiceHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link RetailStores} entity.
   */
  declare retailStore: RetailStores<T>[];

  constructor(_entityApi: CustomerPaymentMethodsApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerPaymentMethodsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  billOfExchangeDraftType?: TypeOfDraft | null;
  erSolution?: DeserializedType<T, 'Edm.String'> | null;
  useGerConfiguration?: NoYes | null;
  paymentJournalName?: DeserializedType<T, 'Edm.String'> | null;
  exportFormatClassName?: DeserializedType<T, 'Edm.String'> | null;
  returnLayoutGroupId?: DeserializedType<T, 'Edm.String'> | null;
  bridgingPostingEnabled?: NoYes | null;
  paymentStatus?: CustVendPaymStatus | null;
  sumByPeriod?: PaymSumBy | null;
  satPaymentType?: PaymentTypeMx | null;
  attributeBelgianStructuredPaymentIdEnabled?: NoYes | null;
  lastFileNumberToday: DeserializedType<T, 'Edm.Int32'>;
  erFormatMapping?: DeserializedType<T, 'Edm.String'> | null;
  bankTransactionType?: DeserializedType<T, 'Edm.String'> | null;
  erModelMappingTable: DeserializedType<T, 'Edm.Int64'>;
  validateTransactionTypeIsBank?: NoYes | null;
  descriptionPrimaryMethodPayment?: DeserializedType<T, 'Edm.String'> | null;
  validateCheckNumberIsMandatory?: NoYes | null;
  exportLayoutGroupId?: DeserializedType<T, 'Edm.String'> | null;
  discountGracePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  importFormatClassName?: DeserializedType<T, 'Edm.String'> | null;
  paymentType?: CustPaymentType | null;
  accountType?: LedgerJournalAcType | null;
  attributePaymentAccountEnabled?: NoYes | null;
  lastFileNumber: DeserializedType<T, 'Edm.Int32'>;
  exportBillOfExchangeDuringInvoicePosting?: NoYes | null;
  directDebit?: NoYes | null;
  bridgingPostingAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  dimensionControl?: NoYes | null;
  attributePaymentIdEnabled?: NoYes | null;
  attributeThirdPartyBankEnabled?: NoYes | null;
  returnFormatClassName?: DeserializedType<T, 'Edm.String'> | null;
  paymentAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  validateDepositSlipIsMandatory?: NoYes | null;
  isSepa?: NoYes | null;
  splitPayment?: NoYes | null;
  createAndDrawBillOfExchangeDuringInvoicePosting?: NoYes | null;
  erProvider?: DeserializedType<T, 'Edm.String'> | null;
  remittanceFormatClassName?: DeserializedType<T, 'Edm.String'> | null;
  enablePostdatedCheckClearingPosting?: NoYes | null;
  validatePaymentReferenceIsMandatory?: NoYes | null;
  primaryMethodPayment?: PrimaryMethodBr | null;
  lastFileDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validateOffsetTransactionTypeIsBank?: NoYes | null;
  postingProfileBillsRemitCollection?: DeserializedType<T, 'Edm.String'> | null;
  postingProfileBillsRemitDiscount?: DeserializedType<T, 'Edm.String'> | null;
  journalName?: JournalNamesType<T> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
  customerPaymentJournalLinePaymentMethodEntity: CustomerPaymentJournalLinesType<T>[];
  onlineChannelV2: OnlineChannelV2SType<T>[];
  salesAgreementConfirmationHeaders: SalesAgreementConfirmationsType<T>[];
  salesAgreementHeaders: SalesAgreementsType<T>[];
  freeTextInvoiceHeaderMethodOfPayment: FreeTextInvoiceHeadersType<T>[];
  retailCallCenter: RetailCallCentersType<T>[];
  customerPaymentMethodSpecification: CustomerPaymentMethodSpecificationsType<T>[];
  onlineChannel: OnlineChannelsType<T>[];
  cdsFreeTextInvoiceHeaders: CdsFreeTextInvoiceHeadersType<T>[];
  retailStore: RetailStoresType<T>[];
}
