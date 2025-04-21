/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ParentLeases } from './ParentLeases';
import { ParentLeasesRequestBuilder } from './ParentLeasesRequestBuilder';
import { LeaseBooksApi } from './LeaseBooksApi';
import { NoYes } from './NoYes';
import { NoYesCombo } from './NoYesCombo';
import { AssetLeaseAnnuityType } from './AssetLeaseAnnuityType';
import { AssetLeaseCompoundingInterval } from './AssetLeaseCompoundingInterval';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ParentLeasesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ParentLeases<DeSerializersT>, DeSerializersT>
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
  ): ParentLeasesApi<DeSerializersT> {
    return new ParentLeasesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link masterLeaseIdLeaseId} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MASTER_LEASE_ID_LEASE_ID: OneToManyLink<
      ParentLeases<DeSerializersT>,
      DeSerializersT,
      LeaseBooksApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [LeaseBooksApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      MASTER_LEASE_ID_LEASE_ID: new OneToManyLink(
        'MasterLeaseId_LeaseId',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ParentLeases;

  requestBuilder(): ParentLeasesRequestBuilder<DeSerializersT> {
    return new ParentLeasesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ParentLeases<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ParentLeases<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ParentLeases<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ParentLeases, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ParentLeases, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEASE_ID: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CURRENT_MILEAGE: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALLOW_DECREASES: EnumField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BANK_CONTRACT_NUMBER: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCATION_OPENING_DATE: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRANSFER_OWNERSHIP: EnumField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      NoYesCombo,
      true,
      true
    >;
    RESIDUAL_VALUE_GUARANTEE: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ZIP_CODE: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MONTHS_BETWEEN_REVALUATIONS: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INDEX_RATE: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VENDOR_ACCOUNT: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIMIT_ON_RATE_INCREASE: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HOLDOVER_FEE: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FAIR_VALUE_OF_ASSET: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LATE_PAYMENT: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FIXED_EXCHANGE_RATE: EnumField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PERCENT_COMMON_AREA_MAINTENANCE: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STREET: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BORROWING_RATE: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEASE_PREPAYMENTS: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IMPLICIT_RATE: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CITY: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ANNUITY_TYPE: EnumField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      AssetLeaseAnnuityType,
      true,
      true
    >;
    CONTRACT_SIGNATURE_DATE: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MINIMUN_LIMITS_OF_LIABILITY: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INDEX_CHANGE_TO_APPLY: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RENTABLE_AREA: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SECURITY_DEPOSIT_REMINDER_DATE: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXCHANGE_RATE_REPORTING: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MILEAGE_LIMIT: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEASE_DESCRIPTION: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCIDENTAL_COST: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SECURITY_DEPOSIT_REFUNDABLE: EnumField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FIXED_ASSET_NUMBER: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERCENT_OF_INDEX_CHANGE_TO_APPLY: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SECURITY_DEPOSIT: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OVERUSE_FEE: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BREAKDOWN_PAYMENT_AMOUNT: EnumField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COUNTY: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INDEX_RATE_TYPE: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FINANCING_AMOUNT: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    EXCHANGE_RATE: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ASSET_USEFUL_LIFE: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INITIAL_DIRECT_COST: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISMANTLING_COSTS: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MANUALLY_REVALUE: EnumField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REVALUATION_DATE: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COMPOUNDING_INTERVAL: EnumField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      AssetLeaseCompoundingInterval,
      true,
      true
    >;
    LEASE_START_DATE: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FIXED_EXCHANGE_RATE_REPORTING: EnumField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    UNIT_OF_MEASURE: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAX_COVERAGE: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMMENCEMENT_DATE: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DIMENSION_DEFAULT_DISPLAY_VALUE: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEASE_INCENTIVES: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LOCATION_NUMBER: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEASE_GROUP: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_PER_MILE: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFERRED_RENT_CARRYOVER: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FINANCIAL_COMMERCIAL_TERMS: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_DATE: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXPIRATION_DATE: OrderableEdmTypeField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    UNIQUE_ASSET: EnumField<
      ParentLeases<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link masterLeaseIdLeaseId} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MASTER_LEASE_ID_LEASE_ID: OneToManyLink<
      ParentLeases<DeSerializersT>,
      DeSerializersT,
      LeaseBooksApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ParentLeases<DeSerializers>>;
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
         * Static representation of the {@link currentMileage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENT_MILEAGE: fieldBuilder.buildEdmTypeField(
          'CurrentMileage',
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
         * Static representation of the {@link bankContractNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CONTRACT_NUMBER: fieldBuilder.buildEdmTypeField(
          'BankContractNumber',
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
         * Static representation of the {@link transferOwnership} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_OWNERSHIP: fieldBuilder.buildEnumField(
          'TransferOwnership',
          NoYesCombo,
          true
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
         * Static representation of the {@link zipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZIP_CODE: fieldBuilder.buildEdmTypeField('ZipCode', 'Edm.String', true),
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
         * Static representation of the {@link indexRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDEX_RATE: fieldBuilder.buildEdmTypeField(
          'IndexRate',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link limitOnRateIncrease} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIMIT_ON_RATE_INCREASE: fieldBuilder.buildEdmTypeField(
          'LimitOnRateIncrease',
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
         * Static representation of the {@link fairValueOfAsset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAIR_VALUE_OF_ASSET: fieldBuilder.buildEdmTypeField(
          'FairValueOfAsset',
          'Edm.Decimal',
          false
        ),
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
         * Static representation of the {@link fixedExchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_EXCHANGE_RATE: fieldBuilder.buildEnumField(
          'FixedExchangeRate',
          NoYes,
          true
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
         * Static representation of the {@link street} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET: fieldBuilder.buildEdmTypeField('Street', 'Edm.String', true),
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
         * Static representation of the {@link countryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CountryRegionID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link state} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE: fieldBuilder.buildEdmTypeField('State', 'Edm.String', true),
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
         * Static representation of the {@link implicitRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPLICIT_RATE: fieldBuilder.buildEdmTypeField(
          'ImplicitRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link city} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY: fieldBuilder.buildEdmTypeField('City', 'Edm.String', true),
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
         * Static representation of the {@link contractSignatureDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_SIGNATURE_DATE: fieldBuilder.buildEdmTypeField(
          'ContractSignatureDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link indexChangeToApply} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDEX_CHANGE_TO_APPLY: fieldBuilder.buildEdmTypeField(
          'IndexChangeToApply',
          'Edm.Decimal',
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
         * Static representation of the {@link securityDepositReminderDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECURITY_DEPOSIT_REMINDER_DATE: fieldBuilder.buildEdmTypeField(
          'SecurityDepositReminderDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link mileageLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MILEAGE_LIMIT: fieldBuilder.buildEdmTypeField(
          'MileageLimit',
          'Edm.Decimal',
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
         * Static representation of the {@link incidentalCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCIDENTAL_COST: fieldBuilder.buildEdmTypeField(
          'IncidentalCost',
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
         * Static representation of the {@link fixedAssetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_ASSET_NUMBER: fieldBuilder.buildEdmTypeField(
          'FixedAssetNumber',
          'Edm.String',
          true
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
         * Static representation of the {@link securityDeposit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECURITY_DEPOSIT: fieldBuilder.buildEdmTypeField(
          'SecurityDeposit',
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
         * Static representation of the {@link breakdownPaymentAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BREAKDOWN_PAYMENT_AMOUNT: fieldBuilder.buildEnumField(
          'BreakdownPaymentAmount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link county} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTY: fieldBuilder.buildEdmTypeField('County', 'Edm.String', true),
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
         * Static representation of the {@link financingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINANCING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'FinancingAmount',
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
         * Static representation of the {@link assetUsefulLife} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_USEFUL_LIFE: fieldBuilder.buildEdmTypeField(
          'AssetUsefulLife',
          'Edm.Int32',
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
         * Static representation of the {@link dismantlingCosts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISMANTLING_COSTS: fieldBuilder.buildEdmTypeField(
          'DismantlingCosts',
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
         * Static representation of the {@link revaluationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVALUATION_DATE: fieldBuilder.buildEdmTypeField(
          'RevaluationDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link leaseStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_START_DATE: fieldBuilder.buildEdmTypeField(
          'LeaseStartDate',
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
         * Static representation of the {@link unitOfMeasure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_OF_MEASURE: fieldBuilder.buildEdmTypeField(
          'UnitOfMeasure',
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
         * Static representation of the {@link commencementDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENCEMENT_DATE: fieldBuilder.buildEdmTypeField(
          'CommencementDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link locationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'LocationNumber',
          'Edm.String',
          true
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
         * Static representation of the {@link costPerMile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_PER_MILE: fieldBuilder.buildEdmTypeField(
          'CostPerMile',
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
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
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
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
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
         * Static representation of the {@link expirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'ExpirationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link uniqueAsset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIQUE_ASSET: fieldBuilder.buildEnumField('UniqueAsset', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ParentLeases)
      };
    }

    return this._schema;
  }
}
