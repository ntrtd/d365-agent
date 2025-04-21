/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTransactionInfocodeTransBiEntities } from './RetailTransactionInfocodeTransBiEntities';
import { RetailTransactionInfocodeTransBiEntitiesRequestBuilder } from './RetailTransactionInfocodeTransBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
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
export class RetailTransactionInfocodeTransBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RetailTransactionInfocodeTransBiEntities<DeSerializersT>,
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
  ): RetailTransactionInfocodeTransBiEntitiesApi<DeSerializersT> {
    return new RetailTransactionInfocodeTransBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailTransactionInfocodeTransBiEntities;

  requestBuilder(): RetailTransactionInfocodeTransBiEntitiesRequestBuilder<DeSerializersT> {
    return new RetailTransactionInfocodeTransBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailTransactionInfocodeTransBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailTransactionInfocodeTransBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTransactionInfocodeTransBiEntities<DeSerializersT>,
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
    typeof RetailTransactionInfocodeTransBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTransactionInfocodeTransBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailTransactionInfocodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORE: OrderableEdmTypeField<
      RetailTransactionInfocodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TERMINAL: OrderableEdmTypeField<
      RetailTransactionInfocodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_ID: OrderableEdmTypeField<
      RetailTransactionInfocodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      RetailTransactionInfocodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CHANNEL: OrderableEdmTypeField<
      RetailTransactionInfocodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REPLICATED: EnumField<
      RetailTransactionInfocodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BUSINESS_DATE: OrderableEdmTypeField<
      RetailTransactionInfocodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      RetailTransactionInfocodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_TIME: OrderableEdmTypeField<
      RetailTransactionInfocodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SUB_INFOCODE_ID: OrderableEdmTypeField<
      RetailTransactionInfocodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPLICATION_COUNTER_FROM_ORIGIN: OrderableEdmTypeField<
      RetailTransactionInfocodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    STATEMENT_ID: OrderableEdmTypeField<
      RetailTransactionInfocodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INFO_AMOUNT: OrderableEdmTypeField<
      RetailTransactionInfocodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_CODE_3: OrderableEdmTypeField<
      RetailTransactionInfocodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_CODE_2: OrderableEdmTypeField<
      RetailTransactionInfocodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      RetailTransactionInfocodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PARENT_LINE_NUM: OrderableEdmTypeField<
      RetailTransactionInfocodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STATEMENT_CODE: OrderableEdmTypeField<
      RetailTransactionInfocodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE: EnumField<
      RetailTransactionInfocodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      RetailInfocodeTransType,
      true,
      true
    >;
    STAFF: OrderableEdmTypeField<
      RetailTransactionInfocodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_TENDER: OrderableEdmTypeField<
      RetailTransactionInfocodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INFORMATION: OrderableEdmTypeField<
      RetailTransactionInfocodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_STATUS: EnumField<
      RetailTransactionInfocodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      RetailEntryStatus,
      true,
      true
    >;
    INPUT_TYPE: EnumField<
      RetailTransactionInfocodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      RetailInfocodeInputType,
      true,
      true
    >;
    INFOCODE_ID: OrderableEdmTypeField<
      RetailTransactionInfocodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_TRANS_PARENT_GUID: OrderableEdmTypeField<
      RetailTransactionInfocodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    SOURCE_CODE: OrderableEdmTypeField<
      RetailTransactionInfocodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      RetailTransactionInfocodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ORIGIN: OrderableEdmTypeField<
      RetailTransactionInfocodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTER: OrderableEdmTypeField<
      RetailTransactionInfocodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      RetailTransactionInfocodeTransBiEntities<DeSerializers>
    >;
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
         * Static representation of the {@link store} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE: fieldBuilder.buildEdmTypeField('store', 'Edm.String', false),
        /**
         * Static representation of the {@link terminal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMINAL: fieldBuilder.buildEdmTypeField(
          'terminal',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link transactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'transactionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM: fieldBuilder.buildEdmTypeField(
          'lineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link channel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANNEL: fieldBuilder.buildEdmTypeField('Channel', 'Edm.Int64', false),
        /**
         * Static representation of the {@link replicated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLICATED: fieldBuilder.buildEnumField('replicated', NoYes, true),
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
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
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
         * Static representation of the {@link subInfocodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_INFOCODE_ID: fieldBuilder.buildEdmTypeField(
          'subInfocodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link replicationCounterFromOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLICATION_COUNTER_FROM_ORIGIN: fieldBuilder.buildEdmTypeField(
          'replicationCounterFromOrigin',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link statementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_ID: fieldBuilder.buildEdmTypeField(
          'statementId',
          'Edm.String',
          true
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
         * Static representation of the {@link sourceCode3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_CODE_3: fieldBuilder.buildEdmTypeField(
          'sourceCode3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceCode2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_CODE_2: fieldBuilder.buildEdmTypeField(
          'sourceCode2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link parentLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'parentLineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link statementCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_CODE: fieldBuilder.buildEdmTypeField(
          'statementCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField(
          'type',
          RetailInfocodeTransType,
          true
        ),
        /**
         * Static representation of the {@link staff} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAFF: fieldBuilder.buildEdmTypeField('staff', 'Edm.String', true),
        /**
         * Static representation of the {@link itemTender} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_TENDER: fieldBuilder.buildEdmTypeField(
          'itemTender',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link transactionStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_STATUS: fieldBuilder.buildEnumField(
          'transactionStatus',
          RetailEntryStatus,
          true
        ),
        /**
         * Static representation of the {@link inputType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INPUT_TYPE: fieldBuilder.buildEnumField(
          'inputType',
          RetailInfocodeInputType,
          true
        ),
        /**
         * Static representation of the {@link infocodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INFOCODE_ID: fieldBuilder.buildEdmTypeField(
          'infocodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalTransParentGuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_TRANS_PARENT_GUID: fieldBuilder.buildEdmTypeField(
          'fiscalTransParentGuid',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link sourceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_CODE: fieldBuilder.buildEdmTypeField(
          'sourceCode',
          'Edm.String',
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
         * Static representation of the {@link origin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGIN: fieldBuilder.buildEdmTypeField('Origin', 'Edm.String', true),
        /**
         * Static representation of the {@link counter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTER: fieldBuilder.buildEdmTypeField('counter', 'Edm.Int32', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailTransactionInfocodeTransBiEntities)
      };
    }

    return this._schema;
  }
}
