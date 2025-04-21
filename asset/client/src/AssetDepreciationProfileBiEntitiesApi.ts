/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetDepreciationProfileBiEntities } from './AssetDepreciationProfileBiEntities';
import { AssetDepreciationProfileBiEntitiesRequestBuilder } from './AssetDepreciationProfileBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { AssetDepreciationYear } from './AssetDepreciationYear';
import { AssetDepreciationInterval } from './AssetDepreciationInterval';
import { AssetDepreciationMethod } from './AssetDepreciationMethod';
import { AssetAccrual } from './AssetAccrual';
import { AssetDepreciationCalculationBase } from './AssetDepreciationCalculationBase';
import { AssetSpecialDepAccountingMethodJp } from './AssetSpecialDepAccountingMethodJp';
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
export class AssetDepreciationProfileBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetDepreciationProfileBiEntities<DeSerializersT>,
      DeSerializersT
    >
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
  ): AssetDepreciationProfileBiEntitiesApi<DeSerializersT> {
    return new AssetDepreciationProfileBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AssetDepreciationProfileBiEntities;

  requestBuilder(): AssetDepreciationProfileBiEntitiesRequestBuilder<DeSerializersT> {
    return new AssetDepreciationProfileBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetDepreciationProfileBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetDepreciationProfileBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetDepreciationProfileBiEntities<DeSerializersT>,
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
    typeof AssetDepreciationProfileBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetDepreciationProfileBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetDepreciationProfileBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROFILE: OrderableEdmTypeField<
      AssetDepreciationProfileBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NUM_OF_YEARS_EQUALLY_DIVIDED_JP: OrderableEdmTypeField<
      AssetDepreciationProfileBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SPECIAL_DEP_APPLY_NUM_OF_PERIODS_JP: OrderableEdmTypeField<
      AssetDepreciationProfileBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SPECIAL_DEP_RATE_JP: OrderableEdmTypeField<
      AssetDepreciationProfileBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      AssetDepreciationProfileBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SPECIAL_DEP_BASE_RATIO_JP: OrderableEdmTypeField<
      AssetDepreciationProfileBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LVP_MIN_DEPRECIATION_AMOUNT_W: OrderableEdmTypeField<
      AssetDepreciationProfileBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LVP_LOW_VALUE_COST_AU: OrderableEdmTypeField<
      AssetDepreciationProfileBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ASSET_DEP_RATE_SCHEDULE_JP: OrderableEdmTypeField<
      AssetDepreciationProfileBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    HALF_YEAR_DEPRECIATION_AT: EnumField<
      AssetDepreciationProfileBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHIFT_DEPRECIATION_IN: EnumField<
      AssetDepreciationProfileBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      AssetDepreciationProfileBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPRECIATION_YEAR: EnumField<
      AssetDepreciationProfileBiEntities<DeSerializers>,
      DeSerializersT,
      AssetDepreciationYear,
      true,
      true
    >;
    INTERVAL: EnumField<
      AssetDepreciationProfileBiEntities<DeSerializers>,
      DeSerializersT,
      AssetDepreciationInterval,
      true,
      true
    >;
    ASSET_END_DEPEND_ON_SERVICE_LIFE: EnumField<
      AssetDepreciationProfileBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    METHOD: EnumField<
      AssetDepreciationProfileBiEntities<DeSerializers>,
      DeSerializersT,
      AssetDepreciationMethod,
      true,
      true
    >;
    ACCRUAL: EnumField<
      AssetDepreciationProfileBiEntities<DeSerializers>,
      DeSerializersT,
      AssetAccrual,
      true,
      true
    >;
    SMOOTH_DEP_FOR_THE_YEAR_OVER_95_JP: EnumField<
      AssetDepreciationProfileBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CALCULATION_BASE: EnumField<
      AssetDepreciationProfileBiEntities<DeSerializers>,
      DeSerializersT,
      AssetDepreciationCalculationBase,
      true,
      true
    >;
    FULL_YEAR_DEPRECIATION_DE: EnumField<
      AssetDepreciationProfileBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      AssetDepreciationProfileBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LVP_FIRST_YEAR_PERCENTAGE_AU: OrderableEdmTypeField<
      AssetDepreciationProfileBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      AssetDepreciationProfileBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PERCENTAGE: OrderableEdmTypeField<
      AssetDepreciationProfileBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SPECIAL_DEP_ACCOUNTING_METHOD_JP: EnumField<
      AssetDepreciationProfileBiEntities<DeSerializers>,
      DeSerializersT,
      AssetSpecialDepAccountingMethodJp,
      true,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      AssetDepreciationProfileBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LVP_PERCENTAGE_AU: OrderableEdmTypeField<
      AssetDepreciationProfileBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<AssetDepreciationProfileBiEntities<DeSerializers>>;
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
         * Static representation of the {@link profile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFILE: fieldBuilder.buildEdmTypeField('Profile', 'Edm.String', false),
        /**
         * Static representation of the {@link numOfYearsEquallyDividedJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUM_OF_YEARS_EQUALLY_DIVIDED_JP: fieldBuilder.buildEdmTypeField(
          'NumOfYearsEquallyDivided_JP',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link specialDepApplyNumOfPeriodsJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL_DEP_APPLY_NUM_OF_PERIODS_JP: fieldBuilder.buildEdmTypeField(
          'SpecialDepApplyNumOfPeriods_JP',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link specialDepRateJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL_DEP_RATE_JP: fieldBuilder.buildEdmTypeField(
          'SpecialDepRate_JP',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link specialDepBaseRatioJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL_DEP_BASE_RATIO_JP: fieldBuilder.buildEdmTypeField(
          'SpecialDepBaseRatio_JP',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lvpMinDepreciationAmountW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LVP_MIN_DEPRECIATION_AMOUNT_W: fieldBuilder.buildEdmTypeField(
          'LVPMinDepreciationAmount_W',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lvpLowValueCostAu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LVP_LOW_VALUE_COST_AU: fieldBuilder.buildEdmTypeField(
          'LVPLowValueCost_AU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link assetDepRateScheduleJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_DEP_RATE_SCHEDULE_JP: fieldBuilder.buildEdmTypeField(
          'AssetDepRateSchedule_JP',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link halfYearDepreciationAt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HALF_YEAR_DEPRECIATION_AT: fieldBuilder.buildEnumField(
          'HalfYearDepreciation_AT',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link shiftDepreciationIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIFT_DEPRECIATION_IN: fieldBuilder.buildEnumField(
          'ShiftDepreciation_IN',
          NoYes,
          true
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
         * Static representation of the {@link depreciationYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_YEAR: fieldBuilder.buildEnumField(
          'DepreciationYear',
          AssetDepreciationYear,
          true
        ),
        /**
         * Static representation of the {@link interval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERVAL: fieldBuilder.buildEnumField(
          'Interval',
          AssetDepreciationInterval,
          true
        ),
        /**
         * Static representation of the {@link assetEndDependOnServiceLife} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_END_DEPEND_ON_SERVICE_LIFE: fieldBuilder.buildEnumField(
          'AssetEndDependOnServiceLife',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link method} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        METHOD: fieldBuilder.buildEnumField(
          'Method',
          AssetDepreciationMethod,
          true
        ),
        /**
         * Static representation of the {@link accrual} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUAL: fieldBuilder.buildEnumField('Accrual', AssetAccrual, true),
        /**
         * Static representation of the {@link smoothDepForTheYearOver95Jp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SMOOTH_DEP_FOR_THE_YEAR_OVER_95_JP: fieldBuilder.buildEnumField(
          'SmoothDepForTheYearOver95_JP',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link calculationBase} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_BASE: fieldBuilder.buildEnumField(
          'CalculationBase',
          AssetDepreciationCalculationBase,
          true
        ),
        /**
         * Static representation of the {@link fullYearDepreciationDe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FULL_YEAR_DEPRECIATION_DE: fieldBuilder.buildEnumField(
          'FullYearDepreciation_DE',
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
         * Static representation of the {@link lvpFirstYearPercentageAu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LVP_FIRST_YEAR_PERCENTAGE_AU: fieldBuilder.buildEdmTypeField(
          'LVPFirstYearPercentage_AU',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link percentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'Percentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link specialDepAccountingMethodJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL_DEP_ACCOUNTING_METHOD_JP: fieldBuilder.buildEnumField(
          'SpecialDepAccountingMethod_JP',
          AssetSpecialDepAccountingMethodJp,
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
         * Static representation of the {@link lvpPercentageAu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LVP_PERCENTAGE_AU: fieldBuilder.buildEdmTypeField(
          'LVPPercentage_AU',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetDepreciationProfileBiEntities)
      };
    }

    return this._schema;
  }
}
