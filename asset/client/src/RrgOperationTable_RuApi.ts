/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RrgOperationTable_Ru } from './RrgOperationTable_Ru';
import { RrgOperationTable_RuRequestBuilder } from './RrgOperationTable_RuRequestBuilder';
import { LedgerRrgBalanceDetailRu } from './LedgerRrgBalanceDetailRu';
import { LedgerRrgIntervalTypeRu } from './LedgerRrgIntervalTypeRu';
import { LedgerRrgFieldOperation } from './LedgerRrgFieldOperation';
import { LedgerRrgBalancePeriodTypeRu } from './LedgerRrgBalancePeriodTypeRu';
import { LedgerRrgDataTypeRu } from './LedgerRrgDataTypeRu';
import { LedgerRrgTypeByCorrectRu } from './LedgerRrgTypeByCorrectRu';
import { LedgerRrgOperationTypeRu } from './LedgerRrgOperationTypeRu';
import { Operator } from './Operator';
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
  EdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class RrgOperationTable_RuApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RrgOperationTable_Ru<DeSerializersT>, DeSerializersT>
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
  ): RrgOperationTable_RuApi<DeSerializersT> {
    return new RrgOperationTable_RuApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RrgOperationTable_Ru;

  requestBuilder(): RrgOperationTable_RuRequestBuilder<DeSerializersT> {
    return new RrgOperationTable_RuRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RrgOperationTable_Ru<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RrgOperationTable_Ru<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RrgOperationTable_Ru<DeSerializersT>,
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
    typeof RrgOperationTable_Ru,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RrgOperationTable_Ru,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RrgOperationTable_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_ID: OrderableEdmTypeField<
      RrgOperationTable_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    QUERY_BASE_DATE_FIELD: OrderableEdmTypeField<
      RrgOperationTable_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CONSTANT_TEXT: OrderableEdmTypeField<
      RrgOperationTable_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    R_TAX_25_FIELD_ID: OrderableEdmTypeField<
      RrgOperationTable_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BALANCE_DETAIL: EnumField<
      RrgOperationTable_Ru<DeSerializers>,
      DeSerializersT,
      LedgerRrgBalanceDetailRu,
      true,
      true
    >;
    OFFSET_ACCOUNT_INTERVAL_TYPE: EnumField<
      RrgOperationTable_Ru<DeSerializers>,
      DeSerializersT,
      LedgerRrgIntervalTypeRu,
      true,
      true
    >;
    QUERY: EdmTypeField<
      RrgOperationTable_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    R_TAX_25_REGISTER_ID: OrderableEdmTypeField<
      RrgOperationTable_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REF_LINE_ID: OrderableEdmTypeField<
      RrgOperationTable_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUERY_FIELD_OPERATION: EnumField<
      RrgOperationTable_Ru<DeSerializers>,
      DeSerializersT,
      LedgerRrgFieldOperation,
      true,
      true
    >;
    CONSTANT_VALUE: OrderableEdmTypeField<
      RrgOperationTable_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEDGER_PERIOD_CODE: OrderableEdmTypeField<
      RrgOperationTable_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUERY_SELECTED_FIELD: OrderableEdmTypeField<
      RrgOperationTable_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BALANCE_TYPE: EnumField<
      RrgOperationTable_Ru<DeSerializers>,
      DeSerializersT,
      LedgerRrgBalancePeriodTypeRu,
      true,
      true
    >;
    DATA_TYPE: EnumField<
      RrgOperationTable_Ru<DeSerializers>,
      DeSerializersT,
      LedgerRrgDataTypeRu,
      true,
      true
    >;
    REF_TABLE_NAME: OrderableEdmTypeField<
      RrgOperationTable_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_INTERVAL_TYPE: EnumField<
      RrgOperationTable_Ru<DeSerializers>,
      DeSerializersT,
      LedgerRrgIntervalTypeRu,
      true,
      true
    >;
    TYPE_BY_CORRECT: EnumField<
      RrgOperationTable_Ru<DeSerializers>,
      DeSerializersT,
      LedgerRrgTypeByCorrectRu,
      true,
      true
    >;
    LEDGER_RRGE_PROPERTIES_W_PROPERTY_ID: OrderableEdmTypeField<
      RrgOperationTable_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_OPERATION: EnumField<
      RrgOperationTable_Ru<DeSerializers>,
      DeSerializersT,
      LedgerRrgOperationTypeRu,
      true,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      RrgOperationTable_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MODEL_NUM: OrderableEdmTypeField<
      RrgOperationTable_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_NUM_MASK: OrderableEdmTypeField<
      RrgOperationTable_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPERATION: EnumField<
      RrgOperationTable_Ru<DeSerializers>,
      DeSerializersT,
      Operator,
      true,
      true
    >;
    OFFSET_ACCOUNT_NUM_MASK: OrderableEdmTypeField<
      RrgOperationTable_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUERY_SELECT_REPORT_DATE: EnumField<
      RrgOperationTable_Ru<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<RrgOperationTable_Ru<DeSerializers>>;
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
         * Static representation of the {@link lineId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_ID: fieldBuilder.buildEdmTypeField('LineId', 'Edm.Guid', false),
        /**
         * Static representation of the {@link queryBaseDateField} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUERY_BASE_DATE_FIELD: fieldBuilder.buildEdmTypeField(
          'QueryBaseDateField',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link constantText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSTANT_TEXT: fieldBuilder.buildEdmTypeField(
          'ConstantText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rTax25FieldId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        R_TAX_25_FIELD_ID: fieldBuilder.buildEdmTypeField(
          'RTax25FieldId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link balanceDetail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BALANCE_DETAIL: fieldBuilder.buildEnumField(
          'BalanceDetail',
          LedgerRrgBalanceDetailRu,
          true
        ),
        /**
         * Static representation of the {@link offsetAccountIntervalType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_ACCOUNT_INTERVAL_TYPE: fieldBuilder.buildEnumField(
          'OffsetAccountIntervalType',
          LedgerRrgIntervalTypeRu,
          true
        ),
        /**
         * Static representation of the {@link query} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUERY: fieldBuilder.buildEdmTypeField('Query', 'Edm.Binary', true),
        /**
         * Static representation of the {@link rTax25RegisterId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        R_TAX_25_REGISTER_ID: fieldBuilder.buildEdmTypeField(
          'RTax25RegisterId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link refLineId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_LINE_ID: fieldBuilder.buildEdmTypeField(
          'RefLineId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link queryFieldOperation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUERY_FIELD_OPERATION: fieldBuilder.buildEnumField(
          'QueryFieldOperation',
          LedgerRrgFieldOperation,
          true
        ),
        /**
         * Static representation of the {@link constantValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSTANT_VALUE: fieldBuilder.buildEdmTypeField(
          'ConstantValue',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link querySelectedField} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUERY_SELECTED_FIELD: fieldBuilder.buildEdmTypeField(
          'QuerySelectedField',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link balanceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BALANCE_TYPE: fieldBuilder.buildEnumField(
          'BalanceType',
          LedgerRrgBalancePeriodTypeRu,
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
         * Static representation of the {@link refTableName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_TABLE_NAME: fieldBuilder.buildEdmTypeField(
          'RefTableName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountIntervalType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_INTERVAL_TYPE: fieldBuilder.buildEnumField(
          'AccountIntervalType',
          LedgerRrgIntervalTypeRu,
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
         * Static representation of the {@link ledgerRrgePropertiesWPropertyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_RRGE_PROPERTIES_W_PROPERTY_ID: fieldBuilder.buildEdmTypeField(
          'LedgerRRGEProperties_W_PropertyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ledgerOperation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_OPERATION: fieldBuilder.buildEnumField(
          'LedgerOperation',
          LedgerRrgOperationTypeRu,
          true
        ),
        /**
         * Static representation of the {@link lineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM: fieldBuilder.buildEdmTypeField(
          'LineNum',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link accountNumMask} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_NUM_MASK: fieldBuilder.buildEdmTypeField(
          'AccountNumMask',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link operation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION: fieldBuilder.buildEnumField('Operation', Operator, true),
        /**
         * Static representation of the {@link offsetAccountNumMask} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_ACCOUNT_NUM_MASK: fieldBuilder.buildEdmTypeField(
          'OffsetAccountNumMask',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link querySelectReportDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUERY_SELECT_REPORT_DATE: fieldBuilder.buildEnumField(
          'QuerySelectReportDate',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RrgOperationTable_Ru)
      };
    }

    return this._schema;
  }
}
