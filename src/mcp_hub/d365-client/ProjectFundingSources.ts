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
import type { ProjectFundingSourcesApi } from './ProjectFundingSourcesApi';
import { PaymentStub } from './PaymentStub';
import { Timezone } from './Timezone';
import { NoYes } from './NoYes';
import { ProjFundingType } from './ProjFundingType';
import { PsaInvoiceFormats } from './PsaInvoiceFormats';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "ProjectFundingSources" of service "d365_metadata".
 */
export class ProjectFundingSources<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjectFundingSourcesType<T>
{
  /**
   * Technical entity name for ProjectFundingSources.
   */
  static override _entityName = 'ProjectFundingSources';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectFundingSources entity.
   */
  static _keys = ['dataAreaId', 'ProjectContractID', 'FundingSourceId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Contract Id.
   */
  declare projectContractId: DeserializedType<T, 'Edm.String'>;
  /**
   * Funding Source Id.
   */
  declare fundingSourceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoice Name.
   * @nullable
   */
  declare invoiceName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Location Id.
   * @nullable
   */
  declare invoiceLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Associated Payment Attachment On The Project Invoice.
   * @nullable
   */
  declare associatedPaymentAttachmentOnTheProjectInvoice?: PaymentStub | null;
  /**
   * Dimension Display Value.
   * @nullable
   */
  declare dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Terms Of Payment.
   * @nullable
   */
  declare termsOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Country Iso Code.
   * @nullable
   */
  declare addressCountryIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Country.
   * @nullable
   */
  declare addressCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Time Zone.
   * @nullable
   */
  declare addressTimeZone?: Timezone | null;
  /**
   * Address Description.
   * @nullable
   */
  declare addressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Longitude.
   */
  declare addressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Individual Buffer Days.
   * @nullable
   */
  declare individualBufferDays?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * E Invoice Line Spec.
   * @nullable
   */
  declare eInvoiceLineSpec?: NoYes | null;
  /**
   * Address Valid From.
   */
  declare addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Dimension Account.
   * @nullable
   */
  declare dimensionAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Requisition.
   * @nullable
   */
  declare customerRequisition?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Discount.
   * @nullable
   */
  declare cashDiscount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Sequence Group.
   * @nullable
   */
  declare numberSequenceGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Party Number.
   * @nullable
   */
  declare partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address State.
   * @nullable
   */
  declare addressState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Language.
   * @nullable
   */
  declare language?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Report Date Code.
   * @nullable
   */
  declare vatReportDateCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Reference.
   * @nullable
   */
  declare customerReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address City.
   * @nullable
   */
  declare addressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Id.
   * @nullable
   */
  declare contactId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Create Default Funding Rule.
   * @nullable
   */
  declare createDefaultFundingRule?: NoYes | null;
  /**
   * Address Zip Code.
   * @nullable
   */
  declare addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Latitude.
   */
  declare addressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Retention Term Id.
   * @nullable
   */
  declare retentionTermId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Or Organization.
   * @nullable
   */
  declare customerOrOrganization?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Street.
   * @nullable
   */
  declare addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Profile.
   * @nullable
   */
  declare postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Schedule.
   * @nullable
   */
  declare paymentSchedule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Funding Type.
   * @nullable
   */
  declare fundingType?: ProjFundingType | null;
  /**
   * Address District Name.
   * @nullable
   */
  declare addressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Primary Funding Source.
   * @nullable
   */
  declare isPrimaryFundingSource?: NoYes | null;
  /**
   * Invoice Format.
   * @nullable
   */
  declare invoiceFormat?: PsaInvoiceFormats | null;
  /**
   * Address County.
   * @nullable
   */
  declare addressCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Grant Id.
   * @nullable
   */
  declare grantId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Valid To.
   */
  declare addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: ProjectFundingSourcesApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectFundingSourcesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  projectContractId: DeserializedType<T, 'Edm.String'>;
  fundingSourceId: DeserializedType<T, 'Edm.String'>;
  invoiceName?: DeserializedType<T, 'Edm.String'> | null;
  invoiceLocationId?: DeserializedType<T, 'Edm.String'> | null;
  associatedPaymentAttachmentOnTheProjectInvoice?: PaymentStub | null;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  termsOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  addressCountry?: DeserializedType<T, 'Edm.String'> | null;
  addressTimeZone?: Timezone | null;
  addressDescription?: DeserializedType<T, 'Edm.String'> | null;
  addressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  individualBufferDays?: DeserializedType<T, 'Edm.String'> | null;
  eInvoiceLineSpec?: NoYes | null;
  addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dimensionAccount?: DeserializedType<T, 'Edm.String'> | null;
  customerRequisition?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscount?: DeserializedType<T, 'Edm.String'> | null;
  numberSequenceGroup?: DeserializedType<T, 'Edm.String'> | null;
  partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  addressState?: DeserializedType<T, 'Edm.String'> | null;
  language?: DeserializedType<T, 'Edm.String'> | null;
  vatReportDateCode?: DeserializedType<T, 'Edm.String'> | null;
  customerReference?: DeserializedType<T, 'Edm.String'> | null;
  addressCity?: DeserializedType<T, 'Edm.String'> | null;
  contactId?: DeserializedType<T, 'Edm.String'> | null;
  createDefaultFundingRule?: NoYes | null;
  addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  addressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  retentionTermId?: DeserializedType<T, 'Edm.String'> | null;
  customerOrOrganization?: DeserializedType<T, 'Edm.String'> | null;
  addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  paymentSchedule?: DeserializedType<T, 'Edm.String'> | null;
  fundingType?: ProjFundingType | null;
  addressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  isPrimaryFundingSource?: NoYes | null;
  invoiceFormat?: PsaInvoiceFormats | null;
  addressCounty?: DeserializedType<T, 'Edm.String'> | null;
  grantId?: DeserializedType<T, 'Edm.String'> | null;
  addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dimensionSet?: DimensionSetsType<T> | null;
}
