/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SourceSystemProductSpecificUnitOfMeasureConversionMessages } from './SourceSystemProductSpecificUnitOfMeasureConversionMessages';
import { SourceSystemProductSpecificUnitOfMeasureConversionMessagesRequestBuilder } from './SourceSystemProductSpecificUnitOfMeasureConversionMessagesRequestBuilder';
import { UnitOfMeasureConversionRounding } from './UnitOfMeasureConversionRounding';
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
export class SourceSystemProductSpecificUnitOfMeasureConversionMessagesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      SourceSystemProductSpecificUnitOfMeasureConversionMessages<DeSerializersT>,
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
  ): SourceSystemProductSpecificUnitOfMeasureConversionMessagesApi<DeSerializersT> {
    return new SourceSystemProductSpecificUnitOfMeasureConversionMessagesApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor =
    SourceSystemProductSpecificUnitOfMeasureConversionMessages;

  requestBuilder(): SourceSystemProductSpecificUnitOfMeasureConversionMessagesRequestBuilder<DeSerializersT> {
    return new SourceSystemProductSpecificUnitOfMeasureConversionMessagesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SourceSystemProductSpecificUnitOfMeasureConversionMessages<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SourceSystemProductSpecificUnitOfMeasureConversionMessages<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SourceSystemProductSpecificUnitOfMeasureConversionMessages<DeSerializersT>,
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
    typeof SourceSystemProductSpecificUnitOfMeasureConversionMessages,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SourceSystemProductSpecificUnitOfMeasureConversionMessages,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SourceSystemProductSpecificUnitOfMeasureConversionMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MESSAGE_ID: OrderableEdmTypeField<
      SourceSystemProductSpecificUnitOfMeasureConversionMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_SYSTEM_ID: OrderableEdmTypeField<
      SourceSystemProductSpecificUnitOfMeasureConversionMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_SYSTEM_ITEM_NUMBER: OrderableEdmTypeField<
      SourceSystemProductSpecificUnitOfMeasureConversionMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUNDING: EnumField<
      SourceSystemProductSpecificUnitOfMeasureConversionMessages<DeSerializers>,
      DeSerializersT,
      UnitOfMeasureConversionRounding,
      true,
      true
    >;
    NUMERATOR: OrderableEdmTypeField<
      SourceSystemProductSpecificUnitOfMeasureConversionMessages<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PROCESSING_STATUS: EnumField<
      SourceSystemProductSpecificUnitOfMeasureConversionMessages<DeSerializers>,
      DeSerializersT,
      WhsSourceSystemProductMessageProcessingStatus,
      true,
      true
    >;
    FACTOR: OrderableEdmTypeField<
      SourceSystemProductSpecificUnitOfMeasureConversionMessages<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DENOMINATOR: OrderableEdmTypeField<
      SourceSystemProductSpecificUnitOfMeasureConversionMessages<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FIELDS_WITH_VALUE: EdmTypeField<
      SourceSystemProductSpecificUnitOfMeasureConversionMessages<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    TO_UNIT_SYMBOL: OrderableEdmTypeField<
      SourceSystemProductSpecificUnitOfMeasureConversionMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FROM_UNIT_SYMBOL: OrderableEdmTypeField<
      SourceSystemProductSpecificUnitOfMeasureConversionMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      SourceSystemProductSpecificUnitOfMeasureConversionMessages<DeSerializers>
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
         * Static representation of the {@link rounding} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING: fieldBuilder.buildEnumField(
          'Rounding',
          UnitOfMeasureConversionRounding,
          true
        ),
        /**
         * Static representation of the {@link numerator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMERATOR: fieldBuilder.buildEdmTypeField(
          'Numerator',
          'Edm.Int32',
          false
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
        /**
         * Static representation of the {@link factor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FACTOR: fieldBuilder.buildEdmTypeField('Factor', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link denominator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DENOMINATOR: fieldBuilder.buildEdmTypeField(
          'Denominator',
          'Edm.Int32',
          false
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
         * Static representation of the {@link toUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'ToUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fromUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'FromUnitSymbol',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          SourceSystemProductSpecificUnitOfMeasureConversionMessages
        )
      };
    }

    return this._schema;
  }
}
