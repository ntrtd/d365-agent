/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetBookTableBiEntities } from './AssetBookTableBiEntities';
import { AssetBookTableBiEntitiesRequestBuilder } from './AssetBookTableBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { AssetAcquisitionOnFirstDayCheckTypeJp } from './AssetAcquisitionOnFirstDayCheckTypeJp';
import { RoundOffType } from './RoundOffType';
import { CurrentOperationsTax } from './CurrentOperationsTax';
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
export class AssetBookTableBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AssetBookTableBiEntities<DeSerializersT>, DeSerializersT>
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
  ): AssetBookTableBiEntitiesApi<DeSerializersT> {
    return new AssetBookTableBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AssetBookTableBiEntities;

  requestBuilder(): AssetBookTableBiEntitiesRequestBuilder<DeSerializersT> {
    return new AssetBookTableBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AssetBookTableBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetBookTableBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetBookTableBiEntities<DeSerializersT>,
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
    typeof AssetBookTableBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetBookTableBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BOOK_ID: OrderableEdmTypeField<
      AssetBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEPRECIATION_EXT_PROFILE: OrderableEdmTypeField<
      AssetBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AssetBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOW_COST_ASSET_HU: EnumField<
      AssetBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACQUISITION_ON_FIRST_DAY_CHECK_TYPE_JP: EnumField<
      AssetBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      AssetAcquisitionOnFirstDayCheckTypeJp,
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      AssetBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      AssetBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FISCAL_CALENDAR: OrderableEdmTypeField<
      AssetBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ROUND_OFF_TYPE_W: EnumField<
      AssetBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      RoundOffType,
      true,
      true
    >;
    NEGATIVE_NET_BOOK_VALUE: EnumField<
      AssetBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ROUND_OFF_DEPRECIATION: OrderableEdmTypeField<
      AssetBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ASSET_DEROGATORY_MODEL_FR: OrderableEdmTypeField<
      AssetBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUND_OFF_DEPRECIATION_REPORTING_CURRENCY: OrderableEdmTypeField<
      AssetBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OVER_RIDE_CALENDAR_DAYS_IN: EnumField<
      AssetBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEPRECIATION_ACCELERATED_PROFILE_JP: OrderableEdmTypeField<
      AssetBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      AssetBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    IS_TRUE_UP_DEPRECIATION: EnumField<
      AssetBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXCEEDING_NET_BOOK_VALUE: EnumField<
      AssetBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_POSITIVE_DEPRECIATION: EnumField<
      AssetBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_DEROGATORY_BOOK_FR: EnumField<
      AssetBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WORKING_DAYS_IN: OrderableEdmTypeField<
      AssetBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEPRECIATION_PROFILE: OrderableEdmTypeField<
      AssetBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPECTED_SCRAP_RATE_CN: OrderableEdmTypeField<
      AssetBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEPRECIATION: EnumField<
      AssetBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CURRENT_OPERATIONS_TAX: EnumField<
      AssetBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      CurrentOperationsTax,
      true,
      true
    >;
    IS_ALLOW_DEPRECIATION_ADJ_SAME_DATE: EnumField<
      AssetBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LINKED_CURRENT_LAYER_ASSET_BOOK_TABLE_JP: OrderableEdmTypeField<
      AssetBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NET_BOOK_VALUE_REST_REPORTING_CURRENCY: OrderableEdmTypeField<
      AssetBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_CATEGORY_TOGETHER_LV: EnumField<
      AssetBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEPRECIATION_ALT_PROFILE: OrderableEdmTypeField<
      AssetBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NET_BOOK_VALUE_REST: OrderableEdmTypeField<
      AssetBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_DEPRECATE_IN_DISPOSAL_CN: EnumField<
      AssetBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<AssetBookTableBiEntities<DeSerializers>>;
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
         * Static representation of the {@link bookId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOOK_ID: fieldBuilder.buildEdmTypeField('BookId', 'Edm.String', false),
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lowCostAssetHu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOW_COST_ASSET_HU: fieldBuilder.buildEnumField(
          'LowCostAsset_HU',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link acquisitionOnFirstDayCheckTypeJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACQUISITION_ON_FIRST_DAY_CHECK_TYPE_JP: fieldBuilder.buildEnumField(
          'AcquisitionOnFirstDayCheckType_JP',
          AssetAcquisitionOnFirstDayCheckTypeJp,
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
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link fiscalCalendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_CALENDAR: fieldBuilder.buildEdmTypeField(
          'FiscalCalendar',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link roundOffTypeW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUND_OFF_TYPE_W: fieldBuilder.buildEnumField(
          'RoundOffType_W',
          RoundOffType,
          true
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
         * Static representation of the {@link roundOffDepreciation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUND_OFF_DEPRECIATION: fieldBuilder.buildEdmTypeField(
          'RoundOffDepreciation',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link roundOffDepreciationReportingCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUND_OFF_DEPRECIATION_REPORTING_CURRENCY:
          fieldBuilder.buildEdmTypeField(
            'RoundOffDepreciationReportingCurrency',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link overRideCalendarDaysIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVER_RIDE_CALENDAR_DAYS_IN: fieldBuilder.buildEnumField(
          'OverRideCalendarDays_IN',
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
         * Static representation of the {@link isTrueUpDepreciation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TRUE_UP_DEPRECIATION: fieldBuilder.buildEnumField(
          'IsTrueUpDepreciation',
          NoYes,
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
         * Static representation of the {@link isPositiveDepreciation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_POSITIVE_DEPRECIATION: fieldBuilder.buildEnumField(
          'IsPositiveDepreciation',
          NoYes,
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
         * Static representation of the {@link workingDaysIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKING_DAYS_IN: fieldBuilder.buildEdmTypeField(
          'WorkingDays_IN',
          'Edm.Int32',
          false
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
         * Static representation of the {@link expectedScrapRateCn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPECTED_SCRAP_RATE_CN: fieldBuilder.buildEdmTypeField(
          'ExpectedScrapRate_CN',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link depreciation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION: fieldBuilder.buildEnumField('Depreciation', NoYes, true),
        /**
         * Static representation of the {@link currentOperationsTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENT_OPERATIONS_TAX: fieldBuilder.buildEnumField(
          'CurrentOperationsTax',
          CurrentOperationsTax,
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
         * Static representation of the {@link linkedCurrentLayerAssetBookTableJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINKED_CURRENT_LAYER_ASSET_BOOK_TABLE_JP:
          fieldBuilder.buildEdmTypeField(
            'LinkedCurrentLayerAssetBookTable_JP',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link netBookValueRestReportingCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_BOOK_VALUE_REST_REPORTING_CURRENCY: fieldBuilder.buildEdmTypeField(
          'NetBookValueRestReportingCurrency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxCategoryTogetherLv} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CATEGORY_TOGETHER_LV: fieldBuilder.buildEnumField(
          'TaxCategoryTogether_LV',
          NoYes,
          true
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
         * Static representation of the {@link netBookValueRest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_BOOK_VALUE_REST: fieldBuilder.buildEdmTypeField(
          'NetBookValueRest',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isDeprecateInDisposalCn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEPRECATE_IN_DISPOSAL_CN: fieldBuilder.buildEnumField(
          'IsDeprecateInDisposal_CN',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetBookTableBiEntities)
      };
    }

    return this._schema;
  }
}
