/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LeaseDetailsImport } from './LeaseDetailsImport';
import { LeaseDetailsImportRequestBuilder } from './LeaseDetailsImportRequestBuilder';
import { NoYes } from './NoYes';
import { AssetLeaseApprovalStatus } from './AssetLeaseApprovalStatus';
import { AssetLeaseRateValue } from './AssetLeaseRateValue';
import { NoYesCombo } from './NoYesCombo';
import { AssetLeaseImportProcessType } from './AssetLeaseImportProcessType';
import { AssetLeaseType } from './AssetLeaseType';
import { MonthsOfYear } from './MonthsOfYear';
import { CurrentOperationsTax } from './CurrentOperationsTax';
import { AssetLeaseWorkflowStatus } from './AssetLeaseWorkflowStatus';
import { AssetLeaseCompoundingInterval } from './AssetLeaseCompoundingInterval';
import { AssetLeasePaymentInterval } from './AssetLeasePaymentInterval';
import { AssetLeaseAccountingFramework } from './AssetLeaseAccountingFramework';
import { AssetLeaseAnnuityType } from './AssetLeaseAnnuityType';
import { AssetLeaseLeaseStatus } from './AssetLeaseLeaseStatus';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class LeaseDetailsImportApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LeaseDetailsImport<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): LeaseDetailsImportApi<DeSerializersT> {
    return new LeaseDetailsImportApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LeaseDetailsImport;

  requestBuilder(): LeaseDetailsImportRequestBuilder<DeSerializersT> {
    return new LeaseDetailsImportRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LeaseDetailsImport<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LeaseDetailsImport<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LeaseDetailsImport<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof LeaseDetailsImport,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LeaseDetailsImport,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LEASE_ID: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IMPORT_ID: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SIGNATURE_DATE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MILEAGE_LIMIT: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PENALTY_FOR_TERMINATING_LEASE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEASE_INCENTIVES: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OPTION_FOR_RENEWAL: EnumField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NEXT_MAINTENANCE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VEND_ACCOUNT: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RATE_INCREASE_CAP: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    APPROVAL_STATUS: EnumField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      AssetLeaseApprovalStatus,
      true,
      true
    >;
    INTEREST_PERIODS_REMAINING: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BALLON_PAYMENT_AMOUNT: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LOGISTICS_LOCATION_FK_LOCATION_ID: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADJUSTED: EnumField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRESENT_VALUE_OVER_FAIR_VALUE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_FIXED_PAYMENT: EnumField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      AssetLeaseRateValue,
      true,
      true
    >;
    OVERUSE_FEE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMMERCIAL_TERMS: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSFER_OWNERSHIP: EnumField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      NoYesCombo,
      true,
      true
    >;
    UNDISCOUNTED_PAYMENTS_REMAINING: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LAST_MAINTENANCE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RESPONSIBLE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATE_FIXED_ASSET: EnumField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LEASE_MODIFICATION_DATE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEFERRED_RENT_TREATMENT: EnumField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LEASE_DESCRIPTION: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAX_COVERAGE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ASSET_ID: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERCENT_COMMON_AREA_MAINTENANCE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEGAL_ENTITY: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FAIR_VALUE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISMANTLING_COSTS: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MONTHS_BTW_REVALUATION: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MONTH_NAME: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IMPORT_PROCESS_TYPE: EnumField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      AssetLeaseImportProcessType,
      true,
      true
    >;
    EXCHANGE_RATE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEASE_TYPE: EnumField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      AssetLeaseType,
      true,
      true
    >;
    PREPAYMENTS: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INCIDENTAL_COST: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_DATE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRESENT_VALUE_PAYMENTS_REMAINING: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CENTER_OPENING_DATE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SECURITY_DEPOSIT_REMINDER_DATE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FIXED_EXCHANGE_RATE_REPORTING: EnumField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LAST_DEPRECIATION_DATE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MONTHS_OF_YEAR: EnumField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      MonthsOfYear,
      true,
      true
    >;
    RENTABLE_AREA: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INDEX_RATE_PERCENT: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CURRENT_PRINCIPAL_AMOUNT: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    YEAR_NAME: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MONTHS_OF_USEFUL_LIFE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COMMENCEMENT_DATE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MONTH_NUMBER: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    VARIABLE_COMPONENT: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPIRATION_DATE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    UNPOSTED_DEPRECIATION_JOURNALS: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INDEX_RATE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LAST_DATE_PAYMENT_JOURNAL: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LEASE_PAYMENTS_REMAINING: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CITY: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_RATE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFERRED_RENT_CARRYOVER: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CURRENT_MILEAGE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCHANGE_RATE_REPORTING: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SECURITY_DEPOSIT_REFUNDABLE: EnumField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LESSOR_CONTACT_NAME: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_LAYER: EnumField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      CurrentOperationsTax,
      true,
      true
    >;
    REVALUATION_DATE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEPRECIATION_PERIODS_REMAINING: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    UNPOSTED_LEASE_PAYMENTS: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LEASE_GROUP: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIQUE_ASSET: EnumField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ZIP_CODE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKFLOW_STATUS: EnumField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      AssetLeaseWorkflowStatus,
      true,
      true
    >;
    PAYMENT_CONTRACT_MODIFIED: EnumField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CENTRE_NUM: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPECTED_TERMINATION_DATE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXTENSION_PERIOD: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LEASE_START_DATE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DIMENSION_DEFAULT_DISPLAY: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPOUNDING_INTERVAL: EnumField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      AssetLeaseCompoundingInterval,
      true,
      true
    >;
    CURRENT_LIABILITY_BALANCE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRESENT_VALUE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MANUALLY_REVALUE: EnumField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CURRENT_ASSET_BALANCE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    YEARS_OF_LEASE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNPOSTED_INTEREST_JOURNALS: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CONTRACT_NUMBER: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGINATION_DATE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INDEX_TYPE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_INTERVAL: EnumField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      AssetLeasePaymentInterval,
      true,
      true
    >;
    BORROWING_RATE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DATE_ENTRY_TO_POST: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LAST_DATE_INTEREST_JOURNAL: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INTEND_TO_EXTEND_LEASE: EnumField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      NoYesCombo,
      true,
      true
    >;
    ACCOUNTING_FRAMEWORK: EnumField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      AssetLeaseAccountingFramework,
      true,
      true
    >;
    FAIR_VALUE_OF_ASSET: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BREAKDOWN_PAYMENT_AMOUNT: EnumField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    YEAR_OF_USEFUL_LIFE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_OF_MEASURE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER_RESPONSIBLE_FK_PERSONNEL_NUMBER: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ANNUITY_TYPE: EnumField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      AssetLeaseAnnuityType,
      true,
      true
    >;
    INTEREST_RATE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERRIDE_LEASE_TYPE: EnumField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LOGISTICS_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOW_VALUE_LEASE: EnumField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHORT_TERM_LEASE: EnumField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LEASE_TERM_OVER_USEFUL_LIFE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALLOW_DECREASES: EnumField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYMENT_AMOUNT: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HOLDOVER_FEE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MIN_LIABILITY: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INITIAL_DIRECT_COST: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RESIDUAL_VALUE_GUARANTEE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COST_PER_MILE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STREET: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREVIOUS_LEASE_TYPE: EnumField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      AssetLeaseType,
      true,
      true
    >;
    COUNTY: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LATE_PAYMENT: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BOOK_TABLE_BOOK_TYPE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BALLOON_PAYMENT: EnumField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      NoYesCombo,
      true,
      true
    >;
    LESSOR_REFERENCE_NUMBER: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SECURITY_DEPOSIT: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NUMBER_OF_PERIODS: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    EXTENSION_PAYMENT: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LOCATION_MEMO: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEASE_TERM_MONTHS: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LEASE_STATUS: EnumField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      AssetLeaseLeaseStatus,
      true,
      true
    >;
    STATE: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERIODS_REMAINING: OrderableEdmTypeField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FIXED_EXCHANGE_RATE: EnumField<
      LeaseDetailsImport<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<LeaseDetailsImport<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link leaseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_ID: fieldBuilder.buildEdmTypeField(
          'LeaseId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link importId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPORT_ID: fieldBuilder.buildEdmTypeField(
          'ImportId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link signatureDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIGNATURE_DATE: fieldBuilder.buildEdmTypeField(
          'SignatureDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link mileageLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MILEAGE_LIMIT: fieldBuilder.buildEdmTypeField(
          'MileageLimit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link penaltyForTerminatingLease} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PENALTY_FOR_TERMINATING_LEASE: fieldBuilder.buildEdmTypeField(
          'PenaltyForTerminatingLease',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link leaseIncentives} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_INCENTIVES: fieldBuilder.buildEdmTypeField(
          'LeaseIncentives',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link optionForRenewal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPTION_FOR_RENEWAL: fieldBuilder.buildEnumField(
          'OptionForRenewal',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link nextMaintenance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEXT_MAINTENANCE: fieldBuilder.buildEdmTypeField(
          'NextMaintenance',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link vendAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VendAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rateIncreaseCap} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATE_INCREASE_CAP: fieldBuilder.buildEdmTypeField(
          'RateIncreaseCap',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link approvalStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVAL_STATUS: fieldBuilder.buildEnumField(
          'ApprovalStatus',
          AssetLeaseApprovalStatus,
          true
        ),
        /**
         * Static representation of the {@link interestPeriodsRemaining} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEREST_PERIODS_REMAINING: fieldBuilder.buildEdmTypeField(
          'InterestPeriodsRemaining',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link ballonPaymentAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BALLON_PAYMENT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'BallonPaymentAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link logisticsLocationFkLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOGISTICS_LOCATION_FK_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'LogisticsLocationFKLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link adjusted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADJUSTED: fieldBuilder.buildEnumField('Adjusted', NoYes, true),
        /**
         * Static representation of the {@link presentValueOverFairValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRESENT_VALUE_OVER_FAIR_VALUE: fieldBuilder.buildEdmTypeField(
          'PresentValueOverFairValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isFixedPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FIXED_PAYMENT: fieldBuilder.buildEnumField(
          'IsFixedPayment',
          AssetLeaseRateValue,
          true
        ),
        /**
         * Static representation of the {@link overuseFee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERUSE_FEE: fieldBuilder.buildEdmTypeField(
          'OveruseFee',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link commercialTerms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMERCIAL_TERMS: fieldBuilder.buildEdmTypeField(
          'CommercialTerms',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transferOwnership} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_OWNERSHIP: fieldBuilder.buildEnumField(
          'TransferOwnership',
          NoYesCombo,
          true
        ),
        /**
         * Static representation of the {@link undiscountedPaymentsRemaining} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNDISCOUNTED_PAYMENTS_REMAINING: fieldBuilder.buildEdmTypeField(
          'UndiscountedPaymentsRemaining',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lastMaintenance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MAINTENANCE: fieldBuilder.buildEdmTypeField(
          'LastMaintenance',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link responsible} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPONSIBLE: fieldBuilder.buildEdmTypeField(
          'Responsible',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link createFixedAsset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_FIXED_ASSET: fieldBuilder.buildEnumField(
          'CreateFixedAsset',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link leaseModificationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_MODIFICATION_DATE: fieldBuilder.buildEdmTypeField(
          'LeaseModificationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link deferredRentTreatment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRED_RENT_TREATMENT: fieldBuilder.buildEnumField(
          'DeferredRentTreatment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link leaseDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'LeaseDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maxCoverage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_COVERAGE: fieldBuilder.buildEdmTypeField(
          'MaxCoverage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link assetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_ID: fieldBuilder.buildEdmTypeField('AssetId', 'Edm.String', true),
        /**
         * Static representation of the {@link percentCommonAreaMaintenance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENT_COMMON_AREA_MAINTENANCE: fieldBuilder.buildEdmTypeField(
          'PercentCommonAreaMaintenance',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link legalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'LegalEntity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fairValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAIR_VALUE: fieldBuilder.buildEdmTypeField(
          'FairValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link dismantlingCosts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISMANTLING_COSTS: fieldBuilder.buildEdmTypeField(
          'DismantlingCosts',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link monthsBtwRevaluation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONTHS_BTW_REVALUATION: fieldBuilder.buildEdmTypeField(
          'MonthsBtwRevaluation',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link monthName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONTH_NAME: fieldBuilder.buildEdmTypeField(
          'MonthName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link importProcessType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPORT_PROCESS_TYPE: fieldBuilder.buildEnumField(
          'ImportProcessType',
          AssetLeaseImportProcessType,
          true
        ),
        /**
         * Static representation of the {@link exchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'ExchangeRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link leaseType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_TYPE: fieldBuilder.buildEnumField(
          'LeaseType',
          AssetLeaseType,
          true
        ),
        /**
         * Static representation of the {@link prepayments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREPAYMENTS: fieldBuilder.buildEdmTypeField(
          'Prepayments',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link incidentalCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCIDENTAL_COST: fieldBuilder.buildEdmTypeField(
          'IncidentalCost',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deliveryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_DATE: fieldBuilder.buildEdmTypeField(
          'DeliveryDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link presentValuePaymentsRemaining} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRESENT_VALUE_PAYMENTS_REMAINING: fieldBuilder.buildEdmTypeField(
          'PresentValuePaymentsRemaining',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link centerOpeningDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CENTER_OPENING_DATE: fieldBuilder.buildEdmTypeField(
          'CenterOpeningDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link securityDepositReminderDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECURITY_DEPOSIT_REMINDER_DATE: fieldBuilder.buildEdmTypeField(
          'SecurityDepositReminderDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link fixedExchangeRateReporting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_EXCHANGE_RATE_REPORTING: fieldBuilder.buildEnumField(
          'FixedExchangeRateReporting',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link lastDepreciationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_DEPRECIATION_DATE: fieldBuilder.buildEdmTypeField(
          'LastDepreciationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link monthsOfYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONTHS_OF_YEAR: fieldBuilder.buildEnumField(
          'MonthsOfYear',
          MonthsOfYear,
          true
        ),
        /**
         * Static representation of the {@link rentableArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RENTABLE_AREA: fieldBuilder.buildEdmTypeField(
          'RentableArea',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link indexRatePercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDEX_RATE_PERCENT: fieldBuilder.buildEdmTypeField(
          'IndexRatePercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link currentPrincipalAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENT_PRINCIPAL_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CurrentPrincipalAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link yearName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YEAR_NAME: fieldBuilder.buildEdmTypeField(
          'YearName',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link monthsOfUsefulLife} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONTHS_OF_USEFUL_LIFE: fieldBuilder.buildEdmTypeField(
          'MonthsOfUsefulLife',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link commencementDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENCEMENT_DATE: fieldBuilder.buildEdmTypeField(
          'CommencementDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link monthNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONTH_NUMBER: fieldBuilder.buildEdmTypeField(
          'MonthNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link variableComponent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIABLE_COMPONENT: fieldBuilder.buildEdmTypeField(
          'VariableComponent',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'ExpirationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link unpostedDepreciationJournals} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNPOSTED_DEPRECIATION_JOURNALS: fieldBuilder.buildEdmTypeField(
          'UnpostedDepreciationJournals',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link indexRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDEX_RATE: fieldBuilder.buildEdmTypeField(
          'IndexRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lastDatePaymentJournal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_DATE_PAYMENT_JOURNAL: fieldBuilder.buildEdmTypeField(
          'LastDatePaymentJournal',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link leasePaymentsRemaining} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_PAYMENTS_REMAINING: fieldBuilder.buildEdmTypeField(
          'LeasePaymentsRemaining',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link city} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY: fieldBuilder.buildEdmTypeField('City', 'Edm.String', true),
        /**
         * Static representation of the {@link discountRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_RATE: fieldBuilder.buildEdmTypeField(
          'DiscountRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deferredRentCarryover} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRED_RENT_CARRYOVER: fieldBuilder.buildEdmTypeField(
          'DeferredRentCarryover',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link currentMileage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENT_MILEAGE: fieldBuilder.buildEdmTypeField(
          'CurrentMileage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link exchangeRateReporting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE_REPORTING: fieldBuilder.buildEdmTypeField(
          'ExchangeRateReporting',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link securityDepositRefundable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECURITY_DEPOSIT_REFUNDABLE: fieldBuilder.buildEnumField(
          'SecurityDepositRefundable',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link lessorContactName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LESSOR_CONTACT_NAME: fieldBuilder.buildEdmTypeField(
          'LessorContactName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postingLayer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_LAYER: fieldBuilder.buildEnumField(
          'PostingLayer',
          CurrentOperationsTax,
          true
        ),
        /**
         * Static representation of the {@link revaluationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVALUATION_DATE: fieldBuilder.buildEdmTypeField(
          'RevaluationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link depreciationPeriodsRemaining} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_PERIODS_REMAINING: fieldBuilder.buildEdmTypeField(
          'DepreciationPeriodsRemaining',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link unpostedLeasePayments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNPOSTED_LEASE_PAYMENTS: fieldBuilder.buildEdmTypeField(
          'UnpostedLeasePayments',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link leaseGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_GROUP: fieldBuilder.buildEdmTypeField(
          'LeaseGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uniqueAsset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIQUE_ASSET: fieldBuilder.buildEnumField('UniqueAsset', NoYes, true),
        /**
         * Static representation of the {@link zipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZIP_CODE: fieldBuilder.buildEdmTypeField('ZipCode', 'Edm.String', true),
        /**
         * Static representation of the {@link workflowStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_STATUS: fieldBuilder.buildEnumField(
          'WorkflowStatus',
          AssetLeaseWorkflowStatus,
          true
        ),
        /**
         * Static representation of the {@link paymentContractModified} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_CONTRACT_MODIFIED: fieldBuilder.buildEnumField(
          'PaymentContractModified',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link centreNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CENTRE_NUM: fieldBuilder.buildEdmTypeField(
          'CentreNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expectedTerminationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPECTED_TERMINATION_DATE: fieldBuilder.buildEdmTypeField(
          'ExpectedTerminationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link extensionPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTENSION_PERIOD: fieldBuilder.buildEdmTypeField(
          'ExtensionPeriod',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link leaseStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_START_DATE: fieldBuilder.buildEdmTypeField(
          'LeaseStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link dimensionDefaultDisplay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_DEFAULT_DISPLAY: fieldBuilder.buildEdmTypeField(
          'DimensionDefaultDisplay',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link compoundingInterval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPOUNDING_INTERVAL: fieldBuilder.buildEnumField(
          'CompoundingInterval',
          AssetLeaseCompoundingInterval,
          true
        ),
        /**
         * Static representation of the {@link currentLiabilityBalance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENT_LIABILITY_BALANCE: fieldBuilder.buildEdmTypeField(
          'CurrentLiabilityBalance',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link presentValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRESENT_VALUE: fieldBuilder.buildEdmTypeField(
          'PresentValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link manuallyRevalue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUALLY_REVALUE: fieldBuilder.buildEnumField(
          'ManuallyRevalue',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link currentAssetBalance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENT_ASSET_BALANCE: fieldBuilder.buildEdmTypeField(
          'CurrentAssetBalance',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link yearsOfLease} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YEARS_OF_LEASE: fieldBuilder.buildEdmTypeField(
          'YearsOfLease',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link unpostedInterestJournals} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNPOSTED_INTEREST_JOURNALS: fieldBuilder.buildEdmTypeField(
          'UnpostedInterestJournals',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link contractNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ContractNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link originationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINATION_DATE: fieldBuilder.buildEdmTypeField(
          'OriginationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link indexType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDEX_TYPE: fieldBuilder.buildEdmTypeField(
          'IndexType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentInterval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_INTERVAL: fieldBuilder.buildEnumField(
          'PaymentInterval',
          AssetLeasePaymentInterval,
          true
        ),
        /**
         * Static representation of the {@link borrowingRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BORROWING_RATE: fieldBuilder.buildEdmTypeField(
          'BorrowingRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link dateEntryToPost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_ENTRY_TO_POST: fieldBuilder.buildEdmTypeField(
          'DateEntryToPost',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link lastDateInterestJournal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_DATE_INTEREST_JOURNAL: fieldBuilder.buildEdmTypeField(
          'LastDateInterestJournal',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link intendToExtendLease} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEND_TO_EXTEND_LEASE: fieldBuilder.buildEnumField(
          'IntendToExtendLease',
          NoYesCombo,
          true
        ),
        /**
         * Static representation of the {@link accountingFramework} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_FRAMEWORK: fieldBuilder.buildEnumField(
          'AccountingFramework',
          AssetLeaseAccountingFramework,
          true
        ),
        /**
         * Static representation of the {@link fairValueOfAsset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAIR_VALUE_OF_ASSET: fieldBuilder.buildEdmTypeField(
          'FairValueOfAsset',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link breakdownPaymentAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BREAKDOWN_PAYMENT_AMOUNT: fieldBuilder.buildEnumField(
          'BreakdownPaymentAmount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link yearOfUsefulLife} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YEAR_OF_USEFUL_LIFE: fieldBuilder.buildEdmTypeField(
          'YearOfUsefulLife',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link unitOfMeasure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_OF_MEASURE: fieldBuilder.buildEdmTypeField(
          'UnitOfMeasure',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workerResponsibleFkPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_RESPONSIBLE_FK_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'WorkerResponsibleFKPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link annuityType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ANNUITY_TYPE: fieldBuilder.buildEnumField(
          'AnnuityType',
          AssetLeaseAnnuityType,
          true
        ),
        /**
         * Static representation of the {@link interestRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEREST_RATE: fieldBuilder.buildEdmTypeField(
          'InterestRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link countryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link overrideLeaseType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDE_LEASE_TYPE: fieldBuilder.buildEnumField(
          'OverrideLeaseType',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link logisticsAddressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOGISTICS_ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'LogisticsAddressCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lowValueLease} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOW_VALUE_LEASE: fieldBuilder.buildEnumField(
          'LowValueLease',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link shortTermLease} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHORT_TERM_LEASE: fieldBuilder.buildEnumField(
          'ShortTermLease',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link leaseTermOverUsefulLife} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_TERM_OVER_USEFUL_LIFE: fieldBuilder.buildEdmTypeField(
          'LeaseTermOverUsefulLife',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link allowDecreases} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_DECREASES: fieldBuilder.buildEnumField(
          'AllowDecreases',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link paymentAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'PaymentAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link holdoverFee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOLDOVER_FEE: fieldBuilder.buildEdmTypeField(
          'HoldoverFee',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link minLiability} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIN_LIABILITY: fieldBuilder.buildEdmTypeField(
          'MinLiability',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link initialDirectCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INITIAL_DIRECT_COST: fieldBuilder.buildEdmTypeField(
          'InitialDirectCost',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link residualValueGuarantee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESIDUAL_VALUE_GUARANTEE: fieldBuilder.buildEdmTypeField(
          'ResidualValueGuarantee',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link costPerMile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_PER_MILE: fieldBuilder.buildEdmTypeField(
          'CostPerMile',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link street} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET: fieldBuilder.buildEdmTypeField('Street', 'Edm.String', true),
        /**
         * Static representation of the {@link previousLeaseType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREVIOUS_LEASE_TYPE: fieldBuilder.buildEnumField(
          'PreviousLeaseType',
          AssetLeaseType,
          true
        ),
        /**
         * Static representation of the {@link county} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTY: fieldBuilder.buildEdmTypeField('County', 'Edm.String', true),
        /**
         * Static representation of the {@link latePayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LATE_PAYMENT: fieldBuilder.buildEdmTypeField(
          'LatePayment',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link bookTableBookType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOOK_TABLE_BOOK_TYPE: fieldBuilder.buildEdmTypeField(
          'BookTableBookType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link balloonPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BALLOON_PAYMENT: fieldBuilder.buildEnumField(
          'BalloonPayment',
          NoYesCombo,
          true
        ),
        /**
         * Static representation of the {@link lessorReferenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LESSOR_REFERENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LessorReferenceNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link securityDeposit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECURITY_DEPOSIT: fieldBuilder.buildEdmTypeField(
          'SecurityDeposit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link numberOfPeriods} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_PERIODS: fieldBuilder.buildEdmTypeField(
          'NumberOfPeriods',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link extensionPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTENSION_PAYMENT: fieldBuilder.buildEdmTypeField(
          'ExtensionPayment',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link locationMemo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION_MEMO: fieldBuilder.buildEdmTypeField(
          'LocationMemo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link leaseTermMonths} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_TERM_MONTHS: fieldBuilder.buildEdmTypeField(
          'LeaseTermMonths',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link leaseStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_STATUS: fieldBuilder.buildEnumField(
          'LeaseStatus',
          AssetLeaseLeaseStatus,
          true
        ),
        /**
         * Static representation of the {@link state} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE: fieldBuilder.buildEdmTypeField('State', 'Edm.String', true),
        /**
         * Static representation of the {@link periodsRemaining} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIODS_REMAINING: fieldBuilder.buildEdmTypeField(
          'PeriodsRemaining',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link fixedExchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_EXCHANGE_RATE: fieldBuilder.buildEnumField(
          'FixedExchangeRate',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LeaseDetailsImport)
      };
    }

    return this._schema;
  }
}
