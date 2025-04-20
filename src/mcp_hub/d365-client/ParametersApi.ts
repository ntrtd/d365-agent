/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Parameters } from './Parameters';
import { ParametersRequestBuilder } from './ParametersRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { GbtOrgTypeCn } from './GbtOrgTypeCn';
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
export class ParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Parameters<DeSerializersT>, DeSerializersT>
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
  ): ParametersApi<DeSerializersT> {
    return new ParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      Parameters<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionCombinationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = Parameters;

  requestBuilder(): ParametersRequestBuilder<DeSerializersT> {
    return new ParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Parameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Parameters<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Parameters<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Parameters, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Parameters, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      Parameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    KEY: OrderableEdmTypeField<
      Parameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CASH_FLOW_DIMENSION: OrderableEdmTypeField<
      Parameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ER_MODEL_NAME: OrderableEdmTypeField<
      Parameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INDUSTRY: OrderableEdmTypeField<
      Parameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASHFLOW_ADDITIONAL: OrderableEdmTypeField<
      Parameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASHFLOW_MAJOR_SHEET: OrderableEdmTypeField<
      Parameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_ASSET_GROUP_CODE_FORMAT: OrderableEdmTypeField<
      Parameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASHFLOW_CODE_FORMAT: OrderableEdmTypeField<
      Parameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPOSAL_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      Parameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACQUISITION_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      Parameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORG_NUMBER: OrderableEdmTypeField<
      Parameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHANGES_OF_OWNERS_EQUITY: OrderableEdmTypeField<
      Parameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORG_TYPE: EnumField<
      Parameters<DeSerializers>,
      DeSerializersT,
      GbtOrgTypeCn,
      true,
      true
    >;
    INCOME_SHEET: OrderableEdmTypeField<
      Parameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BALANCE_SHEET: OrderableEdmTypeField<
      Parameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPRECIATION_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      Parameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      Parameters<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Parameters<DeSerializers>>;
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
         * Static representation of the {@link key} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEY: fieldBuilder.buildEdmTypeField('key', 'Edm.Int32', false),
        /**
         * Static representation of the {@link cashFlowDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_FLOW_DIMENSION: fieldBuilder.buildEdmTypeField(
          'CashFlowDimension',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link erModelName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ER_MODEL_NAME: fieldBuilder.buildEdmTypeField(
          'ERModelName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link industry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDUSTRY: fieldBuilder.buildEdmTypeField(
          'Industry',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cashflowAdditional} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASHFLOW_ADDITIONAL: fieldBuilder.buildEdmTypeField(
          'CashflowAdditional',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cashflowMajorSheet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASHFLOW_MAJOR_SHEET: fieldBuilder.buildEdmTypeField(
          'CashflowMajorSheet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fixedAssetGroupCodeFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_ASSET_GROUP_CODE_FORMAT: fieldBuilder.buildEdmTypeField(
          'FixedAssetGroupCodeFormat',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cashflowCodeFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASHFLOW_CODE_FORMAT: fieldBuilder.buildEdmTypeField(
          'CashflowCodeFormat',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link disposalLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPOSAL_LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DisposalLedgerDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link acquisitionLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACQUISITION_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'AcquisitionLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link orgNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORG_NUMBER: fieldBuilder.buildEdmTypeField(
          'OrgNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link changesOfOwnersEquity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGES_OF_OWNERS_EQUITY: fieldBuilder.buildEdmTypeField(
          'ChangesOfOwnersEquity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orgType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORG_TYPE: fieldBuilder.buildEnumField('OrgType', GbtOrgTypeCn, true),
        /**
         * Static representation of the {@link incomeSheet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCOME_SHEET: fieldBuilder.buildEdmTypeField(
          'IncomeSheet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link balanceSheet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BALANCE_SHEET: fieldBuilder.buildEdmTypeField(
          'BalanceSheet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link depreciationLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'DepreciationLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Parameters)
      };
    }

    return this._schema;
  }
}
