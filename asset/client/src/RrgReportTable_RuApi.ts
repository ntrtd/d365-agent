/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RrgReportTable_Ru } from './RrgReportTable_Ru';
import { RrgReportTable_RuRequestBuilder } from './RrgReportTable_RuRequestBuilder';
import { LedgerRrgDataTypeRu } from './LedgerRrgDataTypeRu';
import { LedgerRrgTypeByCorrectRu } from './LedgerRrgTypeByCorrectRu';
import { LedgerRrgCurrencyForCalcRu } from './LedgerRrgCurrencyForCalcRu';
import { LedgerRrgReportTypeRu } from './LedgerRrgReportTypeRu';
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
export class RrgReportTable_RuApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RrgReportTable_Ru<DeSerializersT>, DeSerializersT>
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
  ): RrgReportTable_RuApi<DeSerializersT> {
    return new RrgReportTable_RuApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RrgReportTable_Ru;

  requestBuilder(): RrgReportTable_RuRequestBuilder<DeSerializersT> {
    return new RrgReportTable_RuRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RrgReportTable_Ru<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RrgReportTable_Ru<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RrgReportTable_Ru<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof RrgReportTable_Ru,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RrgReportTable_Ru,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RrgReportTable_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REP_CODE: OrderableEdmTypeField<
      RrgReportTable_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RrgReportTable_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_TYPE: EnumField<
      RrgReportTable_Ru<DeSerializers>,
      DeSerializersT,
      LedgerRrgDataTypeRu,
      true,
      true
    >;
    TEMPLATE: OrderableEdmTypeField<
      RrgReportTable_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE_BY_CORRECT: EnumField<
      RrgReportTable_Ru<DeSerializers>,
      DeSerializersT,
      LedgerRrgTypeByCorrectRu,
      true,
      true
    >;
    MODEL_NUM: OrderableEdmTypeField<
      RrgReportTable_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_HIERARCHY_HASH_KEY: OrderableEdmTypeField<
      RrgReportTable_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    SCALE: OrderableEdmTypeField<
      RrgReportTable_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEDGER_RRGE_TEMPLATE_ID: OrderableEdmTypeField<
      RrgReportTable_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_FOR_CALC: EnumField<
      RrgReportTable_Ru<DeSerializers>,
      DeSerializersT,
      LedgerRrgCurrencyForCalcRu,
      true,
      true
    >;
    REPORT_TYPE: EnumField<
      RrgReportTable_Ru<DeSerializers>,
      DeSerializersT,
      LedgerRrgReportTypeRu,
      true,
      true
    >;
    LEDGER_PERIOD_CODE: OrderableEdmTypeField<
      RrgReportTable_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POINT_SIGN_NUM: OrderableEdmTypeField<
      RrgReportTable_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RrgReportTable_Ru<DeSerializers>>;
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
         * Static representation of the {@link repCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REP_CODE: fieldBuilder.buildEdmTypeField(
          'RepCode',
          'Edm.String',
          false
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
         * Static representation of the {@link dataType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_TYPE: fieldBuilder.buildEnumField(
          'DataType',
          LedgerRrgDataTypeRu,
          true
        ),
        /**
         * Static representation of the {@link template} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE: fieldBuilder.buildEdmTypeField(
          'Template',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link typeByCorrect} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_BY_CORRECT: fieldBuilder.buildEnumField(
          'TypeByCorrect',
          LedgerRrgTypeByCorrectRu,
          true
        ),
        /**
         * Static representation of the {@link modelNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODEL_NUM: fieldBuilder.buildEdmTypeField(
          'ModelNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimensionHierarchyHashKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_HIERARCHY_HASH_KEY: fieldBuilder.buildEdmTypeField(
          'DimensionHierarchyHashKey',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link scale} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCALE: fieldBuilder.buildEdmTypeField('Scale', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link ledgerRrgeTemplateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_RRGE_TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'LedgerRRGETemplateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currencyForCalc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_FOR_CALC: fieldBuilder.buildEnumField(
          'CurrencyForCalc',
          LedgerRrgCurrencyForCalcRu,
          true
        ),
        /**
         * Static representation of the {@link reportType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_TYPE: fieldBuilder.buildEnumField(
          'ReportType',
          LedgerRrgReportTypeRu,
          true
        ),
        /**
         * Static representation of the {@link ledgerPeriodCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_PERIOD_CODE: fieldBuilder.buildEdmTypeField(
          'LedgerPeriodCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pointSignNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POINT_SIGN_NUM: fieldBuilder.buildEdmTypeField(
          'PointSignNum',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RrgReportTable_Ru)
      };
    }

    return this._schema;
  }
}
