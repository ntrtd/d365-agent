/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InfocodeLinesV2 } from './InfocodeLinesV2';
import { InfocodeLinesV2RequestBuilder } from './InfocodeLinesV2RequestBuilder';
import { RetailInfocodeTransType } from './RetailInfocodeTransType';
import { RetailInfoCodeLineRelatedTableType } from './RetailInfoCodeLineRelatedTableType';
import { RetailInfocodeInputType } from './RetailInfocodeInputType';
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
export class InfocodeLinesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<InfocodeLinesV2<DeSerializersT>, DeSerializersT>
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
  ): InfocodeLinesV2Api<DeSerializersT> {
    return new InfocodeLinesV2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = InfocodeLinesV2;

  requestBuilder(): InfocodeLinesV2RequestBuilder<DeSerializersT> {
    return new InfocodeLinesV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InfocodeLinesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<InfocodeLinesV2<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<InfocodeLinesV2<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof InfocodeLinesV2, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InfocodeLinesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InfocodeLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_ORDER_NUMBER: OrderableEdmTypeField<
      InfocodeLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_LOT_ID: OrderableEdmTypeField<
      InfocodeLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_BATCH_NUMBER: OrderableEdmTypeField<
      InfocodeLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_LINE_NUMBER: OrderableEdmTypeField<
      InfocodeLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INFOCODE_LINE_TYPE: EnumField<
      InfocodeLinesV2<DeSerializers>,
      DeSerializersT,
      RetailInfocodeTransType,
      true,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      InfocodeLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INFOCODE_LINE_TABLE_TYPE: EnumField<
      InfocodeLinesV2<DeSerializers>,
      DeSerializersT,
      RetailInfoCodeLineRelatedTableType,
      true,
      true
    >;
    INFORMATION: OrderableEdmTypeField<
      InfocodeLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_INFOCODE_ID: OrderableEdmTypeField<
      InfocodeLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INPUT_TYPE: EnumField<
      InfocodeLinesV2<DeSerializers>,
      DeSerializersT,
      RetailInfocodeInputType,
      true,
      true
    >;
    SOURCE_CODE_3: OrderableEdmTypeField<
      InfocodeLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_CODE_2: OrderableEdmTypeField<
      InfocodeLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATEMENT_CODE: OrderableEdmTypeField<
      InfocodeLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INFORMATION_AMOUNT: OrderableEdmTypeField<
      InfocodeLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      InfocodeLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INFOCODE_ID: OrderableEdmTypeField<
      InfocodeLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_CODE: OrderableEdmTypeField<
      InfocodeLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_TENDER: OrderableEdmTypeField<
      InfocodeLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<InfocodeLinesV2<DeSerializers>>;
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
         * Static representation of the {@link salesOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'SalesOrderNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link inventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_LOT_ID: fieldBuilder.buildEdmTypeField(
          'InventoryLotId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link journalBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'JournalBatchNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link journalLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'JournalLineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link infocodeLineType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INFOCODE_LINE_TYPE: fieldBuilder.buildEnumField(
          'InfocodeLineType',
          RetailInfocodeTransType,
          true
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link infocodeLineTableType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INFOCODE_LINE_TABLE_TYPE: fieldBuilder.buildEnumField(
          'InfocodeLineTableType',
          RetailInfoCodeLineRelatedTableType,
          true
        ),
        /**
         * Static representation of the {@link information} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INFORMATION: fieldBuilder.buildEdmTypeField(
          'Information',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subInfocodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_INFOCODE_ID: fieldBuilder.buildEdmTypeField(
          'SubInfocodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inputType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INPUT_TYPE: fieldBuilder.buildEnumField(
          'InputType',
          RetailInfocodeInputType,
          true
        ),
        /**
         * Static representation of the {@link sourceCode3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_CODE_3: fieldBuilder.buildEdmTypeField(
          'SourceCode3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceCode2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_CODE_2: fieldBuilder.buildEdmTypeField(
          'SourceCode2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link statementCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_CODE: fieldBuilder.buildEdmTypeField(
          'StatementCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link informationAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INFORMATION_AMOUNT: fieldBuilder.buildEdmTypeField(
          'InformationAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link infocodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INFOCODE_ID: fieldBuilder.buildEdmTypeField(
          'InfocodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_CODE: fieldBuilder.buildEdmTypeField(
          'SourceCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemTender} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_TENDER: fieldBuilder.buildEdmTypeField(
          'ItemTender',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InfocodeLinesV2)
      };
    }

    return this._schema;
  }
}
