/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetBookBiEntities } from './AssetBookBiEntities';
import { AssetBookBiEntitiesRequestBuilder } from './AssetBookBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { AssetAccrualFiscal } from './AssetAccrualFiscal';
import { AssetDepreciationConvention } from './AssetDepreciationConvention';
import { AssetStatus } from './AssetStatus';
import { AssetLimitForAccumulatedDepTypeJp } from './AssetLimitForAccumulatedDepTypeJp';
import { AssetSpecialDepAllocationConventionJp } from './AssetSpecialDepAllocationConventionJp';
import { PlAssetCostAccountingType } from './PlAssetCostAccountingType';
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
export class AssetBookBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AssetBookBiEntities<DeSerializersT>, DeSerializersT>
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
  ): AssetBookBiEntitiesApi<DeSerializersT> {
    return new AssetBookBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AssetBookBiEntities;

  requestBuilder(): AssetBookBiEntitiesRequestBuilder<DeSerializersT> {
    return new AssetBookBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AssetBookBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AssetBookBiEntities<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetBookBiEntities<DeSerializersT>,
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
    typeof AssetBookBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetBookBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ASSET_ID: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BOOK_ID: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEPRECIATION_AMOUNT_UNIT: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LVP_TRANSFER_DATE_AU: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VEND_ACCOUNT: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERCENTAGE_PL: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ASSET_GROUP_DEPRECIATION_IN: EnumField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SERVICE_LIFE: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POSTING_PROFILE: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SORTING_ID: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORIZATION_DATE_CZ: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NEGATIVE_NET_BOOK_VALUE: EnumField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DUE_FROM_PSN: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SPECIAL_DEP_ALLOCATION_UNIT_JP: EnumField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      AssetAccrualFiscal,
      true,
      true
    >;
    DEPRECIATION_GROUP_ID_W: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DEROGATORY_BOOK_FR: EnumField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LAST_RESERVE_ALLOCATION_DATE_JP: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONSUMPTION_UNIT_ID: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPR_PREV_PERIODS_NON_COST_PL: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEPRECIATION_ALT_PROFILE: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPRECIATION_PROFILE: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_DEROGATORY_MODEL_FR: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPLACEMENT_DATE: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REVALUATION_GROUP_ID: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEPR_PREV_PRIOR_COST_PL: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SORTING_ID_2: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_INVOICE_ID: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPRECIATION_EXT_PROFILE: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOCATION_START_DATE_JP: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DUE_TO_PSN: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DEPRECIATION_START_DATE: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LAST_DEPRECIATION_DATE: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LIFE_TIME: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MAX_PERCENT_RB: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCEEDING_NET_BOOK_VALUE: EnumField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEPR_PREV_PERIODS_PL: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ASSET_REVISED_ACQUISITION_COST_JP: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ASSET_LEASE_LEASE_BOOK_TYPE: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPRECIATION_CONVENTION: EnumField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      AssetDepreciationConvention,
      true,
      true
    >;
    EQUALLY_DIVIDED_START_DATE_JP: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LIFE_TIME_REST: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACQUISITION_METHOD: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LVP_TRANSFER_ID_AU: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RBSL_FACTOR: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACQUISITION_PRICE: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACQUISITION_PRICE_REPORTING_CURRENCY: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_POSITIVE_DEPRECIATION: EnumField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONSUMPTION_FACTOR_ID: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CUST_ACCOUNT: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ALLOW_DEPRECIATION_ADJ_SAME_DATE: EnumField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SPECIAL_DEP_ALLOCATION_PERIODS_JP: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SPECIAL_DEP_START_DATE_JP: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SCRAP_VALUE_REPORTING_CURRENCY: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ASSET_PURCHASE_DATE_PL: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RESERVE_TYPE_ID: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_TRUE_UP_DEPRECIATION: EnumField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SPECIAL_DEP_LAST_ALLOCATION_DATE_JP: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PURCH_ID: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERCENTAGE_ALT_PL: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VEND_INVOICE_ID: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUMMARIZE_BY_MAJOR_TYPE_JP: EnumField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SERVICE_LIFE_MONTHS_FR: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ASSET_GROUP: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      AssetStatus,
      true,
      true
    >;
    SERVICE_LIFE_YEARS_FR: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PERCENTAGE_EXT_PL: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LAST_DEPRECIATION_DATE_ACCELERATED_JP: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CHECK_MAX_PERCENT_RB: EnumField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALE_VALUE: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALLOWABLE_LIMIT_FOR_ACCUMULATED_DEP_TYPE_JP: EnumField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      AssetLimitForAccumulatedDepTypeJp,
      true,
      true
    >;
    IS_MIGRATED_ASSET: EnumField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEPR_PREV_PRIOR_NON_COST_PL: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEPRECIATION: EnumField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ASSET_LEASE_LEASE_ID: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPOSAL_DATE: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_SHORTENING_USEFUL_LIFE_JP: EnumField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SPECIAL_DEP_ALLOCATION_CONVENTION_JP: EnumField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      AssetSpecialDepAllocationConventionJp,
      true,
      true
    >;
    SCRAP_VALUE: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LAST_DEPRECIATION_DATE_EXTRA_ORD: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SORTING_ID_3: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIG_ACQUISITION_DATE_IN: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ASSET_REVISED_ACQUISITION_COST_START_DATE_JP: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ASSET_COST_ACCOUNTING_TYPE_PL: EnumField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      PlAssetCostAccountingType,
      true,
      true
    >;
    ASSET_FAIR_VALUE: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEPRECIATION_AMOUNT_UNIT_REPORTING_CURRENCY: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACQUISITION_DATE: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    USED_FROM_DATE: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONSUMPTION_QTY_ESTIMATED: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_DISPOSAL_SAME_YEAR: EnumField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEPRECIATION_ACCELERATED_PROFILE_JP: OrderableEdmTypeField<
      AssetBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<AssetBookBiEntities<DeSerializers>>;
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
         * Static representation of the {@link assetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_ID: fieldBuilder.buildEdmTypeField(
          'AssetId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link bookId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOOK_ID: fieldBuilder.buildEdmTypeField('BookId', 'Edm.String', false),
        /**
         * Static representation of the {@link depreciationAmountUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_AMOUNT_UNIT: fieldBuilder.buildEdmTypeField(
          'DepreciationAmountUnit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lvpTransferDateAu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LVP_TRANSFER_DATE_AU: fieldBuilder.buildEdmTypeField(
          'LVPTransferDate_AU',
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
         * Static representation of the {@link percentagePl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENTAGE_PL: fieldBuilder.buildEdmTypeField(
          'Percentage_PL',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link assetGroupDepreciationIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_GROUP_DEPRECIATION_IN: fieldBuilder.buildEnumField(
          'AssetGroupDepreciation_IN',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link serviceLife} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_LIFE: fieldBuilder.buildEdmTypeField(
          'ServiceLife',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link postingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE: fieldBuilder.buildEdmTypeField(
          'PostingProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sortingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SORTING_ID: fieldBuilder.buildEdmTypeField(
          'SortingId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link categorizationDateCz} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORIZATION_DATE_CZ: fieldBuilder.buildEdmTypeField(
          'CategorizationDate_CZ',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link negativeNetBookValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEGATIVE_NET_BOOK_VALUE: fieldBuilder.buildEnumField(
          'NegativeNetBookValue',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link dueFromPsn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE_FROM_PSN: fieldBuilder.buildEdmTypeField(
          'DueFrom_PSN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link specialDepAllocationUnitJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL_DEP_ALLOCATION_UNIT_JP: fieldBuilder.buildEnumField(
          'SpecialDepAllocationUnit_JP',
          AssetAccrualFiscal,
          true
        ),
        /**
         * Static representation of the {@link depreciationGroupIdW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_GROUP_ID_W: fieldBuilder.buildEdmTypeField(
          'DepreciationGroupId_W',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDerogatoryBookFr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEROGATORY_BOOK_FR: fieldBuilder.buildEnumField(
          'IsDerogatoryBook_FR',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link lastReserveAllocationDateJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_RESERVE_ALLOCATION_DATE_JP: fieldBuilder.buildEdmTypeField(
          'LastReserveAllocationDate_JP',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link consumptionUnitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_UNIT_ID: fieldBuilder.buildEdmTypeField(
          'ConsumptionUnitId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deprPrevPeriodsNonCostPl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPR_PREV_PERIODS_NON_COST_PL: fieldBuilder.buildEdmTypeField(
          'DeprPrevPeriodsNonCost_PL',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link depreciationAltProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_ALT_PROFILE: fieldBuilder.buildEdmTypeField(
          'DepreciationAltProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link depreciationProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_PROFILE: fieldBuilder.buildEdmTypeField(
          'DepreciationProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link assetDerogatoryModelFr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_DEROGATORY_MODEL_FR: fieldBuilder.buildEdmTypeField(
          'AssetDerogatoryModel_FR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link replacementDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLACEMENT_DATE: fieldBuilder.buildEdmTypeField(
          'ReplacementDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link revaluationGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVALUATION_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'RevaluationGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SysModifiedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link deprPrevPriorCostPl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPR_PREV_PRIOR_COST_PL: fieldBuilder.buildEdmTypeField(
          'DeprPrevPriorCost_PL',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sortingId2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SORTING_ID_2: fieldBuilder.buildEdmTypeField(
          'SortingId2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custInvoiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_INVOICE_ID: fieldBuilder.buildEdmTypeField(
          'CustInvoiceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link depreciationExtProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_EXT_PROFILE: fieldBuilder.buildEdmTypeField(
          'DepreciationExtProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allocationStartDateJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOCATION_START_DATE_JP: fieldBuilder.buildEdmTypeField(
          'AllocationStartDate_JP',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link dueToPsn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE_TO_PSN: fieldBuilder.buildEdmTypeField(
          'DueTo_PSN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link depreciationStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_START_DATE: fieldBuilder.buildEdmTypeField(
          'DepreciationStartDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link lifeTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFE_TIME: fieldBuilder.buildEdmTypeField(
          'LifeTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link maxPercentRb} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_PERCENT_RB: fieldBuilder.buildEdmTypeField(
          'MaxPercentRB',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exceedingNetBookValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCEEDING_NET_BOOK_VALUE: fieldBuilder.buildEnumField(
          'ExceedingNetBookValue',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link deprPrevPeriodsPl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPR_PREV_PERIODS_PL: fieldBuilder.buildEdmTypeField(
          'DeprPrevPeriods_PL',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link assetRevisedAcquisitionCostJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_REVISED_ACQUISITION_COST_JP: fieldBuilder.buildEdmTypeField(
          'AssetRevisedAcquisitionCost_JP',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link assetLeaseLeaseBookType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_LEASE_LEASE_BOOK_TYPE: fieldBuilder.buildEdmTypeField(
          'AssetLeaseLeaseBookType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link depreciationConvention} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_CONVENTION: fieldBuilder.buildEnumField(
          'DepreciationConvention',
          AssetDepreciationConvention,
          true
        ),
        /**
         * Static representation of the {@link equallyDividedStartDateJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EQUALLY_DIVIDED_START_DATE_JP: fieldBuilder.buildEdmTypeField(
          'EquallyDividedStartDate_JP',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link lifeTimeRest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFE_TIME_REST: fieldBuilder.buildEdmTypeField(
          'LifeTimeRest',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link acquisitionMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACQUISITION_METHOD: fieldBuilder.buildEdmTypeField(
          'AcquisitionMethod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lvpTransferIdAu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LVP_TRANSFER_ID_AU: fieldBuilder.buildEdmTypeField(
          'LVPTransferId_AU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rbslFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RBSL_FACTOR: fieldBuilder.buildEdmTypeField(
          'RBSLFactor',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link acquisitionPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACQUISITION_PRICE: fieldBuilder.buildEdmTypeField(
          'AcquisitionPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link acquisitionPriceReportingCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACQUISITION_PRICE_REPORTING_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AcquisitionPriceReportingCurrency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isPositiveDepreciation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_POSITIVE_DEPRECIATION: fieldBuilder.buildEnumField(
          'IsPositiveDepreciation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link consumptionFactorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_FACTOR_ID: fieldBuilder.buildEdmTypeField(
          'ConsumptionFactorId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link custAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isAllowDepreciationAdjSameDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ALLOW_DEPRECIATION_ADJ_SAME_DATE: fieldBuilder.buildEnumField(
          'IsAllowDepreciationAdjSameDate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link specialDepAllocationPeriodsJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL_DEP_ALLOCATION_PERIODS_JP: fieldBuilder.buildEdmTypeField(
          'SpecialDepAllocationPeriods_JP',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link specialDepStartDateJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL_DEP_START_DATE_JP: fieldBuilder.buildEdmTypeField(
          'SpecialDepStartDate_JP',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link scrapValueReportingCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCRAP_VALUE_REPORTING_CURRENCY: fieldBuilder.buildEdmTypeField(
          'ScrapValueReportingCurrency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link assetPurchaseDatePl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_PURCHASE_DATE_PL: fieldBuilder.buildEdmTypeField(
          'AssetPurchaseDate_PL',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link reserveTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESERVE_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'ReserveTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isTrueUpDepreciation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TRUE_UP_DEPRECIATION: fieldBuilder.buildEnumField(
          'IsTrueUpDepreciation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link specialDepLastAllocationDateJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL_DEP_LAST_ALLOCATION_DATE_JP: fieldBuilder.buildEdmTypeField(
          'SpecialDepLastAllocationDate_JP',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link purchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_ID: fieldBuilder.buildEdmTypeField('PurchId', 'Edm.String', true),
        /**
         * Static representation of the {@link percentageAltPl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENTAGE_ALT_PL: fieldBuilder.buildEdmTypeField(
          'PercentageAlt_PL',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link vendInvoiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_INVOICE_ID: fieldBuilder.buildEdmTypeField(
          'VendInvoiceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link summarizeByMajorTypeJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUMMARIZE_BY_MAJOR_TYPE_JP: fieldBuilder.buildEnumField(
          'SummarizeByMajorType_JP',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link serviceLifeMonthsFr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_LIFE_MONTHS_FR: fieldBuilder.buildEdmTypeField(
          'ServiceLifeMonths_FR',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link assetGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_GROUP: fieldBuilder.buildEdmTypeField(
          'AssetGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField('Status', AssetStatus, true),
        /**
         * Static representation of the {@link serviceLifeYearsFr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_LIFE_YEARS_FR: fieldBuilder.buildEdmTypeField(
          'ServiceLifeYears_FR',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link percentageExtPl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENTAGE_EXT_PL: fieldBuilder.buildEdmTypeField(
          'PercentageExt_PL',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lastDepreciationDateAcceleratedJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_DEPRECIATION_DATE_ACCELERATED_JP: fieldBuilder.buildEdmTypeField(
          'LastDepreciationDateAccelerated_JP',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link checkMaxPercentRb} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_MAX_PERCENT_RB: fieldBuilder.buildEnumField(
          'CheckMaxPercentRB',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link saleValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALE_VALUE: fieldBuilder.buildEdmTypeField(
          'SaleValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link allowableLimitForAccumulatedDepTypeJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOWABLE_LIMIT_FOR_ACCUMULATED_DEP_TYPE_JP:
          fieldBuilder.buildEnumField(
            'AllowableLimitForAccumulatedDepType_JP',
            AssetLimitForAccumulatedDepTypeJp,
            true
          ),
        /**
         * Static representation of the {@link isMigratedAsset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MIGRATED_ASSET: fieldBuilder.buildEnumField(
          'IsMigratedAsset',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link deprPrevPriorNonCostPl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPR_PREV_PRIOR_NON_COST_PL: fieldBuilder.buildEdmTypeField(
          'DeprPrevPriorNonCost_PL',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link depreciation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION: fieldBuilder.buildEnumField('Depreciation', NoYes, true),
        /**
         * Static representation of the {@link assetLeaseLeaseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_LEASE_LEASE_ID: fieldBuilder.buildEdmTypeField(
          'AssetLeaseLeaseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link disposalDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPOSAL_DATE: fieldBuilder.buildEdmTypeField(
          'DisposalDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isShorteningUsefulLifeJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SHORTENING_USEFUL_LIFE_JP: fieldBuilder.buildEnumField(
          'IsShorteningUsefulLife_JP',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link specialDepAllocationConventionJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL_DEP_ALLOCATION_CONVENTION_JP: fieldBuilder.buildEnumField(
          'SpecialDepAllocationConvention_JP',
          AssetSpecialDepAllocationConventionJp,
          true
        ),
        /**
         * Static representation of the {@link scrapValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCRAP_VALUE: fieldBuilder.buildEdmTypeField(
          'ScrapValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lastDepreciationDateExtraOrd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_DEPRECIATION_DATE_EXTRA_ORD: fieldBuilder.buildEdmTypeField(
          'LastDepreciationDateExtraOrd',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link sortingId3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SORTING_ID_3: fieldBuilder.buildEdmTypeField(
          'SortingId3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link origAcquisitionDateIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIG_ACQUISITION_DATE_IN: fieldBuilder.buildEdmTypeField(
          'OrigAcquisitionDate_IN',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link assetRevisedAcquisitionCostStartDateJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_REVISED_ACQUISITION_COST_START_DATE_JP:
          fieldBuilder.buildEdmTypeField(
            'AssetRevisedAcquisitionCostStartDate_JP',
            'Edm.DateTimeOffset',
            false
          ),
        /**
         * Static representation of the {@link assetCostAccountingTypePl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_COST_ACCOUNTING_TYPE_PL: fieldBuilder.buildEnumField(
          'AssetCostAccountingType_PL',
          PlAssetCostAccountingType,
          true
        ),
        /**
         * Static representation of the {@link assetFairValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_FAIR_VALUE: fieldBuilder.buildEdmTypeField(
          'AssetFairValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link depreciationAmountUnitReportingCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_AMOUNT_UNIT_REPORTING_CURRENCY:
          fieldBuilder.buildEdmTypeField(
            'DepreciationAmountUnitReportingCurrency',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link acquisitionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACQUISITION_DATE: fieldBuilder.buildEdmTypeField(
          'AcquisitionDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link usedFromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USED_FROM_DATE: fieldBuilder.buildEdmTypeField(
          'UsedFromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link consumptionQtyEstimated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_QTY_ESTIMATED: fieldBuilder.buildEdmTypeField(
          'ConsumptionQtyEstimated',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isDisposalSameYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DISPOSAL_SAME_YEAR: fieldBuilder.buildEnumField(
          'IsDisposalSameYear',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link depreciationAcceleratedProfileJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_ACCELERATED_PROFILE_JP: fieldBuilder.buildEdmTypeField(
          'DepreciationAcceleratedProfile_JP',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetBookBiEntities)
      };
    }

    return this._schema;
  }
}
