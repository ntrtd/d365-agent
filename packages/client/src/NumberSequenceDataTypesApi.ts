/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { NumberSequenceDataTypes } from './NumberSequenceDataTypes';
import { NumberSequenceDataTypesRequestBuilder } from './NumberSequenceDataTypesRequestBuilder';
import { NoYes } from './NoYes';
import { NumberSeqModule } from './NumberSeqModule';
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
export class NumberSequenceDataTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<NumberSequenceDataTypes<DeSerializersT>, DeSerializersT>
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
  ): NumberSequenceDataTypesApi<DeSerializersT> {
    return new NumberSequenceDataTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = NumberSequenceDataTypes;

  requestBuilder(): NumberSequenceDataTypesRequestBuilder<DeSerializersT> {
    return new NumberSequenceDataTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    NumberSequenceDataTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      NumberSequenceDataTypes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    NumberSequenceDataTypes<DeSerializersT>,
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
    typeof NumberSequenceDataTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        NumberSequenceDataTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      NumberSequenceDataTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TYPE_ID: OrderableEdmTypeField<
      NumberSequenceDataTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SCOPE_TYPE: OrderableEdmTypeField<
      NumberSequenceDataTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TO_A_HIGHER_NUMBER: EnumField<
      NumberSequenceDataTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONTINUOUS: EnumField<
      NumberSequenceDataTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LOWEST: OrderableEdmTypeField<
      NumberSequenceDataTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    QUANTITY_OF_NUMBERS: OrderableEdmTypeField<
      NumberSequenceDataTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ID: OrderableEdmTypeField<
      NumberSequenceDataTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    GROUP: EnumField<
      NumberSequenceDataTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PARTITION_KEY: OrderableEdmTypeField<
      NumberSequenceDataTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TO_A_LOWER_NUMBER: EnumField<
      NumberSequenceDataTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      NumberSequenceDataTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MANUAL: EnumField<
      NumberSequenceDataTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DATA_TYPE: OrderableEdmTypeField<
      NumberSequenceDataTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    HIGHEST: OrderableEdmTypeField<
      NumberSequenceDataTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REFERENCE: OrderableEdmTypeField<
      NumberSequenceDataTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SORTING: OrderableEdmTypeField<
      NumberSequenceDataTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NUMBER_SEQUENCE_AREA: EnumField<
      NumberSequenceDataTypes<DeSerializers>,
      DeSerializersT,
      NumberSeqModule,
      true,
      true
    >;
    ALL_FIELDS: AllFields<NumberSequenceDataTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link typeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_ID: fieldBuilder.buildEdmTypeField('TypeID', 'Edm.Int32', false),
        /**
         * Static representation of the {@link scopeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCOPE_TYPE: fieldBuilder.buildEdmTypeField(
          'ScopeType',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link toAHigherNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_A_HIGHER_NUMBER: fieldBuilder.buildEnumField(
          'ToAHigherNumber',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link continuous} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTINUOUS: fieldBuilder.buildEnumField('Continuous', NoYes, true),
        /**
         * Static representation of the {@link lowest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOWEST: fieldBuilder.buildEdmTypeField('Lowest', 'Edm.Int32', false),
        /**
         * Static representation of the {@link quantityOfNumbers} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_OF_NUMBERS: fieldBuilder.buildEdmTypeField(
          'QuantityOfNumbers',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('ID', 'Edm.Int32', false),
        /**
         * Static representation of the {@link group} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP: fieldBuilder.buildEnumField('Group', NoYes, true),
        /**
         * Static representation of the {@link partitionKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTITION_KEY: fieldBuilder.buildEdmTypeField(
          'PartitionKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link toALowerNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_A_LOWER_NUMBER: fieldBuilder.buildEnumField(
          'ToALowerNumber',
          NoYes,
          true
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
         * Static representation of the {@link manual} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUAL: fieldBuilder.buildEnumField('Manual', NoYes, true),
        /**
         * Static representation of the {@link dataType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_TYPE: fieldBuilder.buildEdmTypeField(
          'DataType',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link highest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIGHEST: fieldBuilder.buildEdmTypeField('Highest', 'Edm.Int32', false),
        /**
         * Static representation of the {@link reference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE: fieldBuilder.buildEdmTypeField(
          'Reference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sorting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SORTING: fieldBuilder.buildEdmTypeField('Sorting', 'Edm.Int32', false),
        /**
         * Static representation of the {@link numberSequenceArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_AREA: fieldBuilder.buildEnumField(
          'NumberSequenceArea',
          NumberSeqModule,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', NumberSequenceDataTypes)
      };
    }

    return this._schema;
  }
}
