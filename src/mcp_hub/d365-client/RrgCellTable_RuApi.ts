/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RrgCellTable_Ru } from './RrgCellTable_Ru';
import { RrgCellTable_RuRequestBuilder } from './RrgCellTable_RuRequestBuilder';
import { NoYes } from './NoYes';
import { LedgerRrgDataTypeRu } from './LedgerRrgDataTypeRu';
import { LedgerRrgTypeByCorrectRu } from './LedgerRrgTypeByCorrectRu';
import { SysAlignment } from './SysAlignment';
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
export class RrgCellTable_RuApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RrgCellTable_Ru<DeSerializersT>, DeSerializersT>
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
  ): RrgCellTable_RuApi<DeSerializersT> {
    return new RrgCellTable_RuApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RrgCellTable_Ru;

  requestBuilder(): RrgCellTable_RuRequestBuilder<DeSerializersT> {
    return new RrgCellTable_RuRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RrgCellTable_Ru<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RrgCellTable_Ru<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RrgCellTable_Ru<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof RrgCellTable_Ru, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RrgCellTable_Ru,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RrgCellTable_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_ID: OrderableEdmTypeField<
      RrgCellTable_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    CELL_CODE: OrderableEdmTypeField<
      RrgCellTable_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_STATIC: EnumField<
      RrgCellTable_Ru<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RrgCellTable_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    R_TAX_25_REGISTER_ID: OrderableEdmTypeField<
      RrgCellTable_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_TYPE: EnumField<
      RrgCellTable_Ru<DeSerializers>,
      DeSerializersT,
      LedgerRrgDataTypeRu,
      true,
      true
    >;
    LENGTH: OrderableEdmTypeField<
      RrgCellTable_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TYPE_BY_CORRECT: EnumField<
      RrgCellTable_Ru<DeSerializers>,
      DeSerializersT,
      LedgerRrgTypeByCorrectRu,
      true,
      true
    >;
    REP_CODE: OrderableEdmTypeField<
      RrgCellTable_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MODEL_NUM: OrderableEdmTypeField<
      RrgCellTable_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALIGNMENT: EnumField<
      RrgCellTable_Ru<DeSerializers>,
      DeSerializersT,
      SysAlignment,
      true,
      true
    >;
    LEDGER_PERIOD_CODE: OrderableEdmTypeField<
      RrgCellTable_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPTY_CHAR: OrderableEdmTypeField<
      RrgCellTable_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POINT_SIGN_NUM: OrderableEdmTypeField<
      RrgCellTable_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RrgCellTable_Ru<DeSerializers>>;
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
         * Static representation of the {@link cellCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CELL_CODE: fieldBuilder.buildEdmTypeField(
          'CellCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isStatic} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_STATIC: fieldBuilder.buildEnumField('IsStatic', NoYes, true),
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
         * Static representation of the {@link rTax25RegisterId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        R_TAX_25_REGISTER_ID: fieldBuilder.buildEdmTypeField(
          'RTax25RegisterId',
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
         * Static representation of the {@link length} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LENGTH: fieldBuilder.buildEdmTypeField('Length', 'Edm.Int32', false),
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
         * Static representation of the {@link repCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REP_CODE: fieldBuilder.buildEdmTypeField('RepCode', 'Edm.String', true),
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
         * Static representation of the {@link alignment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALIGNMENT: fieldBuilder.buildEnumField('Alignment', SysAlignment, true),
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
         * Static representation of the {@link emptyChar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPTY_CHAR: fieldBuilder.buildEdmTypeField(
          'EmptyChar',
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
        ALL_FIELDS: new AllFields('*', RrgCellTable_Ru)
      };
    }

    return this._schema;
  }
}
