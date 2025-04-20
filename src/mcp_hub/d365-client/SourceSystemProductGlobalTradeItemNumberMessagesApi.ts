/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SourceSystemProductGlobalTradeItemNumberMessages } from './SourceSystemProductGlobalTradeItemNumberMessages';
import { SourceSystemProductGlobalTradeItemNumberMessagesRequestBuilder } from './SourceSystemProductGlobalTradeItemNumberMessagesRequestBuilder';
import { GtinSetup } from './GtinSetup';
import { WhsSourceSystemProductMessageProcessingStatus } from './WhsSourceSystemProductMessageProcessingStatus';
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
export class SourceSystemProductGlobalTradeItemNumberMessagesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      SourceSystemProductGlobalTradeItemNumberMessages<DeSerializersT>,
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
  ): SourceSystemProductGlobalTradeItemNumberMessagesApi<DeSerializersT> {
    return new SourceSystemProductGlobalTradeItemNumberMessagesApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SourceSystemProductGlobalTradeItemNumberMessages;

  requestBuilder(): SourceSystemProductGlobalTradeItemNumberMessagesRequestBuilder<DeSerializersT> {
    return new SourceSystemProductGlobalTradeItemNumberMessagesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SourceSystemProductGlobalTradeItemNumberMessages<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SourceSystemProductGlobalTradeItemNumberMessages<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SourceSystemProductGlobalTradeItemNumberMessages<DeSerializersT>,
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
    typeof SourceSystemProductGlobalTradeItemNumberMessages,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SourceSystemProductGlobalTradeItemNumberMessages,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SourceSystemProductGlobalTradeItemNumberMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MESSAGE_ID: OrderableEdmTypeField<
      SourceSystemProductGlobalTradeItemNumberMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_SYSTEM_ID: OrderableEdmTypeField<
      SourceSystemProductGlobalTradeItemNumberMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_SYSTEM_ITEM_NUMBER: OrderableEdmTypeField<
      SourceSystemProductGlobalTradeItemNumberMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GLOBAL_TRADE_ITEM_NUMBER_DESCRIPTION: OrderableEdmTypeField<
      SourceSystemProductGlobalTradeItemNumberMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_UNIT_SYMBOL: OrderableEdmTypeField<
      SourceSystemProductGlobalTradeItemNumberMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GLOBAL_TRADE_ITEM_NUMBER: OrderableEdmTypeField<
      SourceSystemProductGlobalTradeItemNumberMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GLOBAL_TRADE_ITEM_NUMBER_CODE_TYPE: EnumField<
      SourceSystemProductGlobalTradeItemNumberMessages<DeSerializers>,
      DeSerializersT,
      GtinSetup,
      true,
      true
    >;
    FIELDS_WITH_VALUE: EdmTypeField<
      SourceSystemProductGlobalTradeItemNumberMessages<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    PROCESSING_STATUS: EnumField<
      SourceSystemProductGlobalTradeItemNumberMessages<DeSerializers>,
      DeSerializersT,
      WhsSourceSystemProductMessageProcessingStatus,
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      SourceSystemProductGlobalTradeItemNumberMessages<DeSerializers>
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
         * Static representation of the {@link messageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MESSAGE_ID: fieldBuilder.buildEdmTypeField(
          'MessageId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sourceSystemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SYSTEM_ID: fieldBuilder.buildEdmTypeField(
          'SourceSystemId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sourceSystemItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SYSTEM_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'SourceSystemItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link globalTradeItemNumberDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GLOBAL_TRADE_ITEM_NUMBER_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'GlobalTradeItemNumberDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'ProductUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link globalTradeItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GLOBAL_TRADE_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'GlobalTradeItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link globalTradeItemNumberCodeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GLOBAL_TRADE_ITEM_NUMBER_CODE_TYPE: fieldBuilder.buildEnumField(
          'GlobalTradeItemNumberCodeType',
          GtinSetup,
          true
        ),
        /**
         * Static representation of the {@link fieldsWithValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIELDS_WITH_VALUE: fieldBuilder.buildEdmTypeField(
          'FieldsWithValue',
          'Edm.Binary',
          true
        ),
        /**
         * Static representation of the {@link processingStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESSING_STATUS: fieldBuilder.buildEnumField(
          'ProcessingStatus',
          WhsSourceSystemProductMessageProcessingStatus,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          SourceSystemProductGlobalTradeItemNumberMessages
        )
      };
    }

    return this._schema;
  }
}
