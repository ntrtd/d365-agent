/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RAssetStandards } from './RAssetStandards';
import { RAssetStandardsRequestBuilder } from './RAssetStandardsRequestBuilder';
import { DimensionSetsApi } from './DimensionSetsApi';
import { NoYes } from './NoYes';
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
export class RAssetStandardsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RAssetStandards<DeSerializersT>, DeSerializersT>
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
  ): RAssetStandardsApi<DeSerializersT> {
    return new RAssetStandardsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      RAssetStandards<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionSetsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = RAssetStandards;

  requestBuilder(): RAssetStandardsRequestBuilder<DeSerializersT> {
    return new RAssetStandardsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RAssetStandards<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RAssetStandards<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RAssetStandards<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof RAssetStandards, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RAssetStandards,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RAssetStandards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FA_INVENTORY_NUMBER: OrderableEdmTypeField<
      RAssetStandards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUE_MODEL: OrderableEdmTypeField<
      RAssetStandards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEPRECIATION_START_DATE: OrderableEdmTypeField<
      RAssetStandards<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      RAssetStandards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_OF_RENTED_FA_DISPLAY_VALUE: OrderableEdmTypeField<
      RAssetStandards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCRAP_VALUE: OrderableEdmTypeField<
      RAssetStandards<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEPRECIATION_SUBGROUP: OrderableEdmTypeField<
      RAssetStandards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BLOCK_DEPRECIATION: EnumField<
      RAssetStandards<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PUTTING_INTO_OPERATION_AMOUNT: OrderableEdmTypeField<
      RAssetStandards<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEPRECIATION_GROUP: OrderableEdmTypeField<
      RAssetStandards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPRECIATION: EnumField<
      RAssetStandards<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_FINANCIAL_DIMENSIONS_DISPLAY_VALUE: OrderableEdmTypeField<
      RAssetStandards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_PROFILE: OrderableEdmTypeField<
      RAssetStandards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LENDING_POSTING_PROFILE: OrderableEdmTypeField<
      RAssetStandards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPRECIATION_METHOD: OrderableEdmTypeField<
      RAssetStandards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ANALYSIS_CODE: OrderableEdmTypeField<
      RAssetStandards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      RAssetStandards<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RAssetStandards<DeSerializers>>;
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
         * Static representation of the {@link faInventoryNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FA_INVENTORY_NUMBER: fieldBuilder.buildEdmTypeField(
          'FAInventoryNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link valueModel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_MODEL: fieldBuilder.buildEdmTypeField(
          'ValueModel',
          'Edm.String',
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
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimensionOfRentedFaDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_OF_RENTED_FA_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DimensionOfRentedFADisplayValue',
          'Edm.String',
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
         * Static representation of the {@link depreciationSubgroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_SUBGROUP: fieldBuilder.buildEdmTypeField(
          'DepreciationSubgroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link blockDepreciation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BLOCK_DEPRECIATION: fieldBuilder.buildEnumField(
          'BlockDepreciation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link puttingIntoOperationAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PUTTING_INTO_OPERATION_AMOUNT: fieldBuilder.buildEdmTypeField(
          'PuttingIntoOperationAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link depreciationGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_GROUP: fieldBuilder.buildEdmTypeField(
          'DepreciationGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link depreciation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION: fieldBuilder.buildEnumField('Depreciation', NoYes, true),
        /**
         * Static representation of the {@link defaultFinancialDimensionsDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_FINANCIAL_DIMENSIONS_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'DefaultFinancialDimensionsDisplayValue',
            'Edm.String',
            true
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
         * Static representation of the {@link lendingPostingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LENDING_POSTING_PROFILE: fieldBuilder.buildEdmTypeField(
          'LendingPostingProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link depreciationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_METHOD: fieldBuilder.buildEdmTypeField(
          'DepreciationMethod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link analysisCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ANALYSIS_CODE: fieldBuilder.buildEdmTypeField(
          'AnalysisCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RAssetStandards)
      };
    }

    return this._schema;
  }
}
