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
import type { OfficeAddinLegalEntitiesApi } from './OfficeAddinLegalEntitiesApi';
import {
  GeneralLedgerCustInvoiceJournalLines,
  GeneralLedgerCustInvoiceJournalLinesType
} from './GeneralLedgerCustInvoiceJournalLines';
import {
  VendInvoiceJournalLines,
  VendInvoiceJournalLinesType
} from './VendInvoiceJournalLines';
import {
  CustomerPaymentJournalLines,
  CustomerPaymentJournalLinesType
} from './CustomerPaymentJournalLines';
import {
  VendorPaymentJournalLines,
  VendorPaymentJournalLinesType
} from './VendorPaymentJournalLines';
import {
  FinancialDimensionValueLegalEntityOverridesV2,
  FinancialDimensionValueLegalEntityOverridesV2Type
} from './FinancialDimensionValueLegalEntityOverridesV2';
import {
  FinancialDimensionValueTotalAccountIntervals,
  FinancialDimensionValueTotalAccountIntervalsType
} from './FinancialDimensionValueTotalAccountIntervals';
import {
  FinancialDimensionValues,
  FinancialDimensionValuesType
} from './FinancialDimensionValues';

/**
 * This class represents the entity "OfficeAddinLegalEntities" of service "d365_metadata".
 */
export class OfficeAddinLegalEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OfficeAddinLegalEntitiesType<T>
{
  /**
   * Technical entity name for OfficeAddinLegalEntities.
   */
  static override _entityName = 'OfficeAddinLegalEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OfficeAddinLegalEntities entity.
   */
  static _keys = ['CompanyId'];
  /**
   * Company Id.
   */
  declare companyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Zakat File Number.
   * @nullable
   */
  declare zakatFileNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Activity Description.
   * @nullable
   */
  declare businessActivityDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Business Activity.
   * @nullable
   */
  declare businessActivity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Name.
   * @nullable
   */
  declare companyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link GeneralLedgerCustInvoiceJournalLines} entity.
   */
  declare custInvoiceJournalLineOffsetCompany: GeneralLedgerCustInvoiceJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link GeneralLedgerCustInvoiceJournalLines} entity.
   */
  declare custInvoiceJournalLineCompany: GeneralLedgerCustInvoiceJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link VendInvoiceJournalLines} entity.
   */
  declare vendInvoiceJournalLineOffsetCompany: VendInvoiceJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link VendInvoiceJournalLines} entity.
   */
  declare vendInvoiceJournalLineCompany: VendInvoiceJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerPaymentJournalLines} entity.
   */
  declare customerPaymentJournalLineCompany: CustomerPaymentJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link VendorPaymentJournalLines} entity.
   */
  declare vendPaymentJournalLineCompany: VendorPaymentJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link FinancialDimensionValueLegalEntityOverridesV2} entity.
   */
  declare financialDimensionValueLegalEntityOverrideEntityRoleLegalEntity: FinancialDimensionValueLegalEntityOverridesV2<T>[];
  /**
   * One-to-many navigation property to the {@link FinancialDimensionValueTotalAccountIntervals} entity.
   */
  declare financialDimensionValueTotalAccountIntervalEntityRoleOfficeAddinLegalEntityEntity: FinancialDimensionValueTotalAccountIntervals<T>[];
  /**
   * One-to-many navigation property to the {@link FinancialDimensionValues} entity.
   */
  declare financialDimensionValueEntityRoleLegalEntity: FinancialDimensionValues<T>[];

  constructor(_entityApi: OfficeAddinLegalEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface OfficeAddinLegalEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  companyId: DeserializedType<T, 'Edm.String'>;
  zakatFileNumber?: DeserializedType<T, 'Edm.String'> | null;
  businessActivityDescription?: DeserializedType<T, 'Edm.String'> | null;
  businessActivity?: DeserializedType<T, 'Edm.String'> | null;
  companyName?: DeserializedType<T, 'Edm.String'> | null;
  custInvoiceJournalLineOffsetCompany: GeneralLedgerCustInvoiceJournalLinesType<T>[];
  custInvoiceJournalLineCompany: GeneralLedgerCustInvoiceJournalLinesType<T>[];
  vendInvoiceJournalLineOffsetCompany: VendInvoiceJournalLinesType<T>[];
  vendInvoiceJournalLineCompany: VendInvoiceJournalLinesType<T>[];
  customerPaymentJournalLineCompany: CustomerPaymentJournalLinesType<T>[];
  vendPaymentJournalLineCompany: VendorPaymentJournalLinesType<T>[];
  financialDimensionValueLegalEntityOverrideEntityRoleLegalEntity: FinancialDimensionValueLegalEntityOverridesV2Type<T>[];
  financialDimensionValueTotalAccountIntervalEntityRoleOfficeAddinLegalEntityEntity: FinancialDimensionValueTotalAccountIntervalsType<T>[];
  financialDimensionValueEntityRoleLegalEntity: FinancialDimensionValuesType<T>[];
}
