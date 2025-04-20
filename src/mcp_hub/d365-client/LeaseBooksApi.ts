/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LeaseBooks } from './LeaseBooks';
import { LeaseBooksRequestBuilder } from './LeaseBooksRequestBuilder';
import { ParentLeasesApi } from './ParentLeasesApi';
import { NoYesCombo } from './NoYesCombo';
import { AssetLeaseLeasingConvention } from './AssetLeaseLeasingConvention';
import { AssetLeaseType } from './AssetLeaseType';
import { NoYes } from './NoYes';
import { CurrentOperationsTax } from './CurrentOperationsTax';
import { AssetLeaseCompoundingInterval } from './AssetLeaseCompoundingInterval';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class LeaseBooksApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LeaseBooks<DeSerializersT>, DeSerializersT>
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
  ): LeaseBooksApi<DeSerializersT> {
    return new LeaseBooksApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link leaseIdMasterLeaseId} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEASE_ID_MASTER_LEASE_ID: OneToOneLink<
      LeaseBooks<DeSerializersT>,
      DeSerializersT,
      ParentLeasesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ParentLeasesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      LEASE_ID_MASTER_LEASE_ID: new OneToOneLink(
        'LeaseId_MasterLeaseId',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = LeaseBooks;

  requestBuilder(): LeaseBooksRequestBuilder<DeSerializersT> {
    return new LeaseBooksRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LeaseBooks<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LeaseBooks<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<LeaseBooks<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof LeaseBooks, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(LeaseBooks, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEASE_ID: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MILEAGE_LIMIT: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEASE_INCENTIVES: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OVERRIDE_REASON: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_ASSET_NUMBER: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTEREST_PERIODS_REMAINING: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TRANSFER_OF_OWNERSHIP: EnumField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      NoYesCombo,
      true,
      true
    >;
    IMPLICIT_RATE: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRESENT_VALUE_OVER_FAIR_VALUE: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OVERUSE_FEE: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNDISCOUNTED_PAYMENTS_REMAINING: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BOOK_TYPE: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCATION_OPENING_DATE: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LEASE_MODIFICATION_DATE: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LEASE_DESCRIPTION: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAX_COVERAGE: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FINANCING_AMOUNT: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PERCENT_COMMON_AREA_MAINTENANCE: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INDEX_CHANGE_TO_APPLY: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEASING_CONVENTION: EnumField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      AssetLeaseLeasingConvention,
      true,
      true
    >;
    DISMANTLING_COSTS: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MONTHS_BETWEEN_REVALUATIONS: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    EXCHANGE_RATE: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEASE_TYPE: EnumField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      AssetLeaseType,
      true,
      true
    >;
    INCIDENTAL_COST: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_DATE: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRESENT_VALUE_PAYMENTS_REMAINING: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INDEX_RATE_TYPE: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SECURITY_DEPOSIT_REMINDER_DATE: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FIXED_EXCHANGE_RATE_REPORTING: EnumField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LAST_DEPRECIATION_DATE: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RENTABLE_AREA: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMMENCEMENT_DATE: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FIXED_ASSET_BOOK_ID: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPIRATION_DATE: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    UNPOSTED_DEPRECIATION_JOURNALS: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INDEX_RATE: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LAST_DATE_PAYMENT_JOURNAL: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LEASE_PAYMENTS_REMAINING: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CITY: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFERRED_RENT_CARRYOVER: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CURRENT_MILEAGE: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCHANGE_RATE_REPORTING: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PERCENT_OF_INDEX_CHANGE_TO_APPLY: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MASTER_LEASE_ID: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SECURITY_DEPOSIT_REFUNDABLE: EnumField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_LAYER: EnumField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      CurrentOperationsTax,
      true,
      true
    >;
    REVALUATION_DATE: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEPRECIATION_PERIODS_REMAINING: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LIMIT_ON_RATE_INCREASE: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNPOSTED_LEASE_PAYMENTS: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LEASE_GROUP: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIQUE_ASSET: EnumField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ZIP_CODE: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_CONTRACT_MODIFIED: EnumField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXPECTED_TERMINATION_DATE: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LEASE_START_DATE: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BANK_CONTRACT_NUMBER: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPOUNDING_INTERVAL: EnumField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      AssetLeaseCompoundingInterval,
      true,
      true
    >;
    CURRENT_LIABILITY_BALANCE: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MANUALLY_REVALUE: EnumField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FINANCIAL_COMMERCIAL_TERMS: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENT_ASSET_BALANCE: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNPOSTED_INTEREST_JOURNALS: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MINIMUN_LIMITS_OF_LIABILITY: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEASE_CLASSIFICATION: EnumField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      AssetLeaseAccountingFramework,
      true,
      true
    >;
    BORROWING_RATE: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DATE_ENTRY_TO_POST: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LAST_DATE_INTEREST_JOURNAL: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACCOUNTING_FRAMEWORK: EnumField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      AssetLeaseAccountingFramework,
      true,
      true
    >;
    LEASE_PREPAYMENTS: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FAIR_VALUE_OF_ASSET: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_OF_MEASURE: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ANNUITY_TYPE: EnumField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      AssetLeaseAnnuityType,
      true,
      true
    >;
    VENDOR_ACCOUNT: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTRACT_SIGNATURE_DATE: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LOW_VALUE_LEASE: EnumField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHORT_TERM_LEASE: EnumField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LEASE_TERM_OVER_USEFUL_LIFE: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALLOW_DECREASES: EnumField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ASSET_USEFUL_LIFE: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    HOLDOVER_FEE: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INITIAL_DIRECT_COST: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RESIDUAL_VALUE_GUARANTEE: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COST_PER_MILE: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STREET: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREVIOUS_LEASE_TYPE: EnumField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      AssetLeaseType,
      true,
      true
    >;
    COUNTY: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LATE_PAYMENT: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SECURITY_DEPOSIT: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LOCATION_NUMBER: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEASE_TERM_MONTHS: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LEASE_STATUS: EnumField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      AssetLeaseLeaseStatus,
      true,
      true
    >;
    STATE: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_EXCHANGE_RATE: EnumField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DIMENSION_DEFAULT_DISPLAY_VALUE: OrderableEdmTypeField<
      LeaseBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link leaseIdMasterLeaseId} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEASE_ID_MASTER_LEASE_ID: OneToOneLink<
      LeaseBooks<DeSerializersT>,
      DeSerializersT,
      ParentLeasesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LeaseBooks<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link mileageLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MILEAGE_LIMIT: fieldBuilder.buildEdmTypeField(
          'MileageLimit',
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
         * Static representation of the {@link overrideReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDE_REASON: fieldBuilder.buildEdmTypeField(
          'OverrideReason',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fixedAssetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_ASSET_NUMBER: fieldBuilder.buildEdmTypeField(
          'FixedAssetNumber',
          'Edm.String',
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
         * Static representation of the {@link transferOfOwnership} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_OF_OWNERSHIP: fieldBuilder.buildEnumField(
          'TransferOfOwnership',
          NoYesCombo,
          true
        ),
        /**
         * Static representation of the {@link implicitRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPLICIT_RATE: fieldBuilder.buildEdmTypeField(
          'ImplicitRate',
          'Edm.Decimal',
          false
        ),
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
         * Static representation of the {@link overuseFee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERUSE_FEE: fieldBuilder.buildEdmTypeField(
          'OveruseFee',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link bookType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOOK_TYPE: fieldBuilder.buildEdmTypeField(
          'BookType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link locationOpeningDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION_OPENING_DATE: fieldBuilder.buildEdmTypeField(
          'LocationOpeningDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link financingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINANCING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'FinancingAmount',
          'Edm.Int32',
          false
        ),
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
         * Static representation of the {@link indexChangeToApply} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDEX_CHANGE_TO_APPLY: fieldBuilder.buildEdmTypeField(
          'IndexChangeToApply',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link leasingConvention} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASING_CONVENTION: fieldBuilder.buildEnumField(
          'LeasingConvention',
          AssetLeaseLeasingConvention,
          true
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
         * Static representation of the {@link monthsBetweenRevaluations} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONTHS_BETWEEN_REVALUATIONS: fieldBuilder.buildEdmTypeField(
          'MonthsBetweenRevaluations',
          'Edm.Int32',
          false
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
         * Static representation of the {@link indexRateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDEX_RATE_TYPE: fieldBuilder.buildEdmTypeField(
          'IndexRateType',
          'Edm.String',
          true
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
         * Static representation of the {@link rentableArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RENTABLE_AREA: fieldBuilder.buildEdmTypeField(
          'RentableArea',
          'Edm.Decimal',
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
         * Static representation of the {@link fixedAssetBookId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_ASSET_BOOK_ID: fieldBuilder.buildEdmTypeField(
          'FixedAssetBookId',
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
         * Static representation of the {@link percentOfIndexChangeToApply} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENT_OF_INDEX_CHANGE_TO_APPLY: fieldBuilder.buildEdmTypeField(
          'PercentOfIndexChangeToApply',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link masterLeaseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MASTER_LEASE_ID: fieldBuilder.buildEdmTypeField(
          'MasterLeaseId',
          'Edm.String',
          true
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
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
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
         * Static representation of the {@link limitOnRateIncrease} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIMIT_ON_RATE_INCREASE: fieldBuilder.buildEdmTypeField(
          'LimitOnRateIncrease',
          'Edm.Decimal',
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
         * Static representation of the {@link paymentContractModified} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_CONTRACT_MODIFIED: fieldBuilder.buildEnumField(
          'PaymentContractModified',
          NoYes,
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
         * Static representation of the {@link leaseStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_START_DATE: fieldBuilder.buildEdmTypeField(
          'LeaseStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link bankContractNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CONTRACT_NUMBER: fieldBuilder.buildEdmTypeField(
          'BankContractNumber',
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
         * Static representation of the {@link manuallyRevalue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUALLY_REVALUE: fieldBuilder.buildEnumField(
          'ManuallyRevalue',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link financialCommercialTerms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINANCIAL_COMMERCIAL_TERMS: fieldBuilder.buildEdmTypeField(
          'FinancialCommercialTerms',
          'Edm.String',
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
         * Static representation of the {@link unpostedInterestJournals} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNPOSTED_INTEREST_JOURNALS: fieldBuilder.buildEdmTypeField(
          'UnpostedInterestJournals',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link minimunLimitsOfLiability} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUN_LIMITS_OF_LIABILITY: fieldBuilder.buildEdmTypeField(
          'MinimunLimitsOfLiability',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link leaseClassification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_CLASSIFICATION: fieldBuilder.buildEnumField(
          'LeaseClassification',
          AssetLeaseAccountingFramework,
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
         * Static representation of the {@link accountingFramework} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_FRAMEWORK: fieldBuilder.buildEnumField(
          'AccountingFramework',
          AssetLeaseAccountingFramework,
          true
        ),
        /**
         * Static representation of the {@link leasePrepayments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_PREPAYMENTS: fieldBuilder.buildEdmTypeField(
          'LeasePrepayments',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        /**
         * Static representation of the {@link countryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CountryRegionID',
          'Edm.String',
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
         * Static representation of the {@link unitOfMeasure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_OF_MEASURE: fieldBuilder.buildEdmTypeField(
          'UnitOfMeasure',
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
         * Static representation of the {@link vendorAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VendorAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contractSignatureDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_SIGNATURE_DATE: fieldBuilder.buildEdmTypeField(
          'ContractSignatureDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link assetUsefulLife} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_USEFUL_LIFE: fieldBuilder.buildEdmTypeField(
          'AssetUsefulLife',
          'Edm.Int32',
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
         * Static representation of the {@link securityDeposit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECURITY_DEPOSIT: fieldBuilder.buildEdmTypeField(
          'SecurityDeposit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link locationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'LocationNumber',
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
         * Static representation of the {@link fixedExchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_EXCHANGE_RATE: fieldBuilder.buildEnumField(
          'FixedExchangeRate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link dimensionDefaultDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_DEFAULT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DimensionDefaultDisplayValue',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LeaseBooks)
      };
    }

    return this._schema;
  }
}
