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
import type { PaymentTermsApi } from './PaymentTermsApi';
import { CreditCardCreditCheck } from './CreditCardCreditCheck';
import { NoYes } from './NoYes';
import { CreditCardPaymentType } from './CreditCardPaymentType';
import { PaymentDueDateUpdatePolicy } from './PaymentDueDateUpdatePolicy';
import { NetCurrent } from './NetCurrent';
import { VendorGroups, VendorGroupsType } from './VendorGroups';
import { OnlineChannelV2S, OnlineChannelV2SType } from './OnlineChannelV2S';
import {
  PurchaseAgreements,
  PurchaseAgreementsType
} from './PurchaseAgreements';
import { PaymentSchedules, PaymentSchedulesType } from './PaymentSchedules';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import { PaymentDays, PaymentDaysType } from './PaymentDays';
import {
  FreeTextInvoiceHeaders,
  FreeTextInvoiceHeadersType
} from './FreeTextInvoiceHeaders';
import { OnlineChannels, OnlineChannelsType } from './OnlineChannels';
import {
  CdsFreeTextInvoiceHeaders,
  CdsFreeTextInvoiceHeadersType
} from './CdsFreeTextInvoiceHeaders';
import { RetailStores, RetailStoresType } from './RetailStores';
import {
  ClmIntegrationPurchaseAgreements,
  ClmIntegrationPurchaseAgreementsType
} from './ClmIntegrationPurchaseAgreements';

/**
 * This class represents the entity "PaymentTerms" of service "d365_metadata".
 */
export class PaymentTerms<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PaymentTermsType<T>
{
  /**
   * Technical entity name for PaymentTerms.
   */
  static override _entityName = 'PaymentTerms';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PaymentTerms entity.
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
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Of Months.
   */
  declare numberOfMonths: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Cutoff Day Of Month.
   */
  declare cutoffDayOfMonth: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Credit Card Credit Check Type.
   * @nullable
   */
  declare creditCardCreditCheckType?: CreditCardCreditCheck | null;
  /**
   * Payment Schedule Name.
   * @nullable
   */
  declare paymentScheduleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Default Payment Term.
   * @nullable
   */
  declare isDefaultPaymentTerm?: NoYes | null;
  /**
   * Credit Card Payment Type.
   * @nullable
   */
  declare creditCardPaymentType?: CreditCardPaymentType | null;
  /**
   * Is Cash Payment.
   * @nullable
   */
  declare isCashPayment?: NoYes | null;
  /**
   * Number Of Days.
   */
  declare numberOfDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Customer Due Date Update Policy.
   * @nullable
   */
  declare customerDueDateUpdatePolicy?: PaymentDueDateUpdatePolicy | null;
  /**
   * Payment Day Name.
   * @nullable
   */
  declare paymentDayName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Due Date Update Policy.
   * @nullable
   */
  declare vendorDueDateUpdatePolicy?: PaymentDueDateUpdatePolicy | null;
  /**
   * Post Offsetting Ar.
   * @nullable
   */
  declare postOffsettingAr?: NoYes | null;
  /**
   * Payment Method Type.
   * @nullable
   */
  declare paymentMethodType?: NetCurrent | null;
  /**
   * Cash Payment Main Account Id Display Value.
   * @nullable
   */
  declare cashPaymentMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Certified Company Check.
   * @nullable
   */
  declare isCertifiedCompanyCheck?: NoYes | null;
  /**
   * Additional Months For Cutoff Date.
   */
  declare additionalMonthsForCutoffDate: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-many navigation property to the {@link VendorGroups} entity.
   */
  declare clearingPeriodAssignedVendorGroups: VendorGroups<T>[];
  /**
   * One-to-many navigation property to the {@link VendorGroups} entity.
   */
  declare defaultAssignedVendorGroups: VendorGroups<T>[];
  /**
   * One-to-many navigation property to the {@link OnlineChannelV2S} entity.
   */
  declare onlineChannelV2: OnlineChannelV2S<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseAgreements} entity.
   */
  declare purchaseAgreementHeaders: PurchaseAgreements<T>[];
  /**
   * One-to-one navigation property to the {@link PaymentSchedules} entity.
   */
  declare paymentSchedule?: PaymentSchedules<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link PaymentDays} entity.
   */
  declare paymentDay?: PaymentDays<T> | null;
  /**
   * One-to-many navigation property to the {@link FreeTextInvoiceHeaders} entity.
   */
  declare freeTextInvoiceHeaderPaymentTerm: FreeTextInvoiceHeaders<T>[];
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
  /**
   * One-to-many navigation property to the {@link ClmIntegrationPurchaseAgreements} entity.
   */
  declare clmIntegrationPurchaseAgreementHeaders: ClmIntegrationPurchaseAgreements<T>[];

  constructor(_entityApi: PaymentTermsApi<T>) {
    super(_entityApi);
  }
}

export interface PaymentTermsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  numberOfMonths: DeserializedType<T, 'Edm.Int32'>;
  cutoffDayOfMonth: DeserializedType<T, 'Edm.Int32'>;
  creditCardCreditCheckType?: CreditCardCreditCheck | null;
  paymentScheduleName?: DeserializedType<T, 'Edm.String'> | null;
  isDefaultPaymentTerm?: NoYes | null;
  creditCardPaymentType?: CreditCardPaymentType | null;
  isCashPayment?: NoYes | null;
  numberOfDays: DeserializedType<T, 'Edm.Int32'>;
  customerDueDateUpdatePolicy?: PaymentDueDateUpdatePolicy | null;
  paymentDayName?: DeserializedType<T, 'Edm.String'> | null;
  vendorDueDateUpdatePolicy?: PaymentDueDateUpdatePolicy | null;
  postOffsettingAr?: NoYes | null;
  paymentMethodType?: NetCurrent | null;
  cashPaymentMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  isCertifiedCompanyCheck?: NoYes | null;
  additionalMonthsForCutoffDate: DeserializedType<T, 'Edm.Int32'>;
  clearingPeriodAssignedVendorGroups: VendorGroupsType<T>[];
  defaultAssignedVendorGroups: VendorGroupsType<T>[];
  onlineChannelV2: OnlineChannelV2SType<T>[];
  purchaseAgreementHeaders: PurchaseAgreementsType<T>[];
  paymentSchedule?: PaymentSchedulesType<T> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
  paymentDay?: PaymentDaysType<T> | null;
  freeTextInvoiceHeaderPaymentTerm: FreeTextInvoiceHeadersType<T>[];
  onlineChannel: OnlineChannelsType<T>[];
  cdsFreeTextInvoiceHeaders: CdsFreeTextInvoiceHeadersType<T>[];
  retailStore: RetailStoresType<T>[];
  clmIntegrationPurchaseAgreementHeaders: ClmIntegrationPurchaseAgreementsType<T>[];
}
