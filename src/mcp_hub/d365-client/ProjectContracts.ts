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
import type { ProjectContractsApi } from './ProjectContractsApi';
import { NoYes } from './NoYes';
import { ProjForecastInvoiceFrequency } from './ProjForecastInvoiceFrequency';
import { DetailSummary } from './DetailSummary';
import { Listcode } from './Listcode';
import {
  ProjectFundingRules,
  ProjectFundingRulesType
} from './ProjectFundingRules';

/**
 * This class represents the entity "ProjectContracts" of service "d365_metadata".
 */
export class ProjectContracts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProjectContractsType<T>
{
  /**
   * Technical entity name for ProjectContracts.
   */
  static override _entityName = 'ProjectContracts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectContracts entity.
   */
  static _keys = ['dataAreaId', 'ProjectContractID'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Contract Id.
   */
  declare projectContractId: DeserializedType<T, 'Edm.String'>;
  /**
   * Contract Date.
   */
  declare contractDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Lock Contract Sales Currency.
   * @nullable
   */
  declare lockContractSalesCurrency?: NoYes | null;
  /**
   * Bank Account.
   * @nullable
   */
  declare bankAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Central Bank Purpose Code.
   * @nullable
   */
  declare centralBankPurposeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoicing Name.
   * @nullable
   */
  declare invoicingName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Group.
   * @nullable
   */
  declare salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Responsible Personnel Number.
   * @nullable
   */
  declare salesResponsiblePersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Price Group.
   * @nullable
   */
  declare priceGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purpose Text.
   * @nullable
   */
  declare purposeText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Net Price.
   * @nullable
   */
  declare netPrice?: NoYes | null;
  /**
   * Invoice Frequency.
   * @nullable
   */
  declare invoiceFrequency?: ProjForecastInvoiceFrequency | null;
  /**
   * Sales Currency.
   * @nullable
   */
  declare salesCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Posting Level.
   * @nullable
   */
  declare defaultPostingLevel?: DetailSummary | null;
  /**
   * Transaction Code.
   * @nullable
   */
  declare transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retainage Percent.
   */
  declare retainagePercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Minimum Time Increment.
   */
  declare minimumTimeIncrement: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Contract Lines.
   * @nullable
   */
  declare contractLines?: NoYes | null;
  /**
   * Service On Delivery Address.
   * @nullable
   */
  declare serviceOnDeliveryAddress?: NoYes | null;
  /**
   * Customer Retention Term Id.
   * @nullable
   */
  declare customerRetentionTermId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Code Id.
   * @nullable
   */
  declare listCodeId?: Listcode | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Progress Invoicing.
   */
  declare progressInvoicing: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * One-to-many navigation property to the {@link ProjectFundingRules} entity.
   */
  declare fundingRule: ProjectFundingRules<T>[];

  constructor(_entityApi: ProjectContractsApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectContractsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  projectContractId: DeserializedType<T, 'Edm.String'>;
  contractDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lockContractSalesCurrency?: NoYes | null;
  bankAccount?: DeserializedType<T, 'Edm.String'> | null;
  centralBankPurposeCode?: DeserializedType<T, 'Edm.String'> | null;
  invoicingName?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  salesResponsiblePersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  priceGroup?: DeserializedType<T, 'Edm.String'> | null;
  purposeText?: DeserializedType<T, 'Edm.String'> | null;
  netPrice?: NoYes | null;
  invoiceFrequency?: ProjForecastInvoiceFrequency | null;
  salesCurrency?: DeserializedType<T, 'Edm.String'> | null;
  defaultPostingLevel?: DetailSummary | null;
  transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  retainagePercent: DeserializedType<T, 'Edm.Decimal'>;
  minimumTimeIncrement: DeserializedType<T, 'Edm.Decimal'>;
  contractLines?: NoYes | null;
  serviceOnDeliveryAddress?: NoYes | null;
  customerRetentionTermId?: DeserializedType<T, 'Edm.String'> | null;
  listCodeId?: Listcode | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  progressInvoicing: DeserializedType<T, 'Edm.Boolean'>;
  fundingRule: ProjectFundingRulesType<T>[];
}
