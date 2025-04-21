/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTransactionInfoCodeLines } from './RetailTransactionInfoCodeLines';
import { RetailTransactionInfoCodeLinesRequestBuilder } from './RetailTransactionInfoCodeLinesRequestBuilder';
import { RetailInfocodeTransType } from './RetailInfocodeTransType';
import { RetailEntryStatus } from './RetailEntryStatus';
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
export class RetailTransactionInfoCodeLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailTransactionInfoCodeLines<DeSerializersT>, DeSerializersT>
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
  ): RetailTransactionInfoCodeLinesApi<DeSerializersT> {
    return new RetailTransactionInfoCodeLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailTransactionInfoCodeLines;

  requestBuilder(): RetailTransactionInfoCodeLinesRequestBuilder<DeSerializersT> {
    return new RetailTransactionInfoCodeLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailTransactionInfoCodeLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailTransactionInfoCodeLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTransactionInfoCodeLines<DeSerializersT>,
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
    typeof RetailTransactionInfoCodeLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTransactionInfoCodeLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailTransactionInfoCodeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TERMINAL: OrderableEdmTypeField<
      RetailTransactionInfoCodeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_TYPE: EnumField<
      RetailTransactionInfoCodeLines<DeSerializers>,
      DeSerializersT,
      RetailInfocodeTransType,
      true,
      true
    >;
    TRANSACTION_NUMBER: OrderableEdmTypeField<
      RetailTransactionInfoCodeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      RetailTransactionInfoCodeLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INFO_CODE_ID: OrderableEdmTypeField<
      RetailTransactionInfoCodeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      RetailTransactionInfoCodeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BUSINESS_DATE: OrderableEdmTypeField<
      RetailTransactionInfoCodeLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FISCAL_TRANSACTION_PARENT_GUID: OrderableEdmTypeField<
      RetailTransactionInfoCodeLines<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    ITEM_TENDER: OrderableEdmTypeField<
      RetailTransactionInfoCodeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_TIME: OrderableEdmTypeField<
      RetailTransactionInfoCodeLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INFO_AMOUNT: OrderableEdmTypeField<
      RetailTransactionInfoCodeLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_STATUS: EnumField<
      RetailTransactionInfoCodeLines<DeSerializers>,
      DeSerializersT,
      RetailEntryStatus,
      true,
      true
    >;
    STAFF: OrderableEdmTypeField<
      RetailTransactionInfoCodeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INFORMATION: OrderableEdmTypeField<
      RetailTransactionInfoCodeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_CODE: OrderableEdmTypeField<
      RetailTransactionInfoCodeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_CODE_THREE: OrderableEdmTypeField<
      RetailTransactionInfoCodeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STORE_NUMBER: OrderableEdmTypeField<
      RetailTransactionInfoCodeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_CODE_TWO: OrderableEdmTypeField<
      RetailTransactionInfoCodeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENT_LINE_NUMBER: OrderableEdmTypeField<
      RetailTransactionInfoCodeLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INPUT_TYPE: EnumField<
      RetailTransactionInfoCodeLines<DeSerializers>,
      DeSerializersT,
      RetailInfocodeInputType,
      true,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      RetailTransactionInfoCodeLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      RetailTransactionInfoCodeLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_INFO_CODE_ID: OrderableEdmTypeField<
      RetailTransactionInfoCodeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailTransactionInfoCodeLines<DeSerializers>>;
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
         * Static representation of the {@link terminal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMINAL: fieldBuilder.buildEdmTypeField(
          'Terminal',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link transactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'TransactionType',
          RetailInfocodeTransType,
          true
        ),
        /**
         * Static representation of the {@link transactionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_NUMBER: fieldBuilder.buildEdmTypeField(
          'TransactionNumber',
          'Edm.String',
          false
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
         * Static representation of the {@link infoCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INFO_CODE_ID: fieldBuilder.buildEdmTypeField(
          'InfoCodeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link operatingUnitNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATING_UNIT_NUMBER: fieldBuilder.buildEdmTypeField(
          'OperatingUnitNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link businessDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_DATE: fieldBuilder.buildEdmTypeField(
          'businessDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link fiscalTransactionParentGuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_TRANSACTION_PARENT_GUID: fieldBuilder.buildEdmTypeField(
          'FiscalTransactionParentGuid',
          'Edm.Guid',
          false
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
        /**
         * Static representation of the {@link transTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_TIME: fieldBuilder.buildEdmTypeField(
          'transTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link infoAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INFO_AMOUNT: fieldBuilder.buildEdmTypeField(
          'infoAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_STATUS: fieldBuilder.buildEnumField(
          'TransactionStatus',
          RetailEntryStatus,
          true
        ),
        /**
         * Static representation of the {@link staff} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAFF: fieldBuilder.buildEdmTypeField('staff', 'Edm.String', true),
        /**
         * Static representation of the {@link information} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INFORMATION: fieldBuilder.buildEdmTypeField(
          'information',
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
         * Static representation of the {@link sourceCodeThree} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_CODE_THREE: fieldBuilder.buildEdmTypeField(
          'SourceCodeThree',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link storeNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE_NUMBER: fieldBuilder.buildEdmTypeField(
          'StoreNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceCodeTwo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_CODE_TWO: fieldBuilder.buildEdmTypeField(
          'SourceCodeTwo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parentLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ParentLineNumber',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link transDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_DATE: fieldBuilder.buildEdmTypeField(
          'transDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link subInfoCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_INFO_CODE_ID: fieldBuilder.buildEdmTypeField(
          'SubInfoCodeId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailTransactionInfoCodeLines)
      };
    }

    return this._schema;
  }
}
