/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { NumberSequencesV2References } from './NumberSequencesV2References';
import { NumberSequencesV2ReferencesRequestBuilder } from './NumberSequencesV2ReferencesRequestBuilder';
import { NumberSequenceType } from './NumberSequenceType';
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
  EnumField,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class NumberSequencesV2ReferencesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<NumberSequencesV2References<DeSerializersT>, DeSerializersT>
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
  ): NumberSequencesV2ReferencesApi<DeSerializersT> {
    return new NumberSequencesV2ReferencesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = NumberSequencesV2References;

  requestBuilder(): NumberSequencesV2ReferencesRequestBuilder<DeSerializersT> {
    return new NumberSequencesV2ReferencesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    NumberSequencesV2References<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      NumberSequencesV2References<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    NumberSequencesV2References<DeSerializersT>,
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
    typeof NumberSequencesV2References,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        NumberSequencesV2References,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SCOPE_TYPE: EnumField<
      NumberSequencesV2References<DeSerializers>,
      DeSerializersT,
      NumberSequenceType,
      true,
      true
    >;
    SCOPE_VALUE: OrderableEdmTypeField<
      NumberSequencesV2References<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DATA_TYPE_NAME: OrderableEdmTypeField<
      NumberSequencesV2References<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NUMBER_SEQUENCE_CODE: OrderableEdmTypeField<
      NumberSequencesV2References<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REUSE_NUMBERS: EnumField<
      NumberSequencesV2References<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<NumberSequencesV2References<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link scopeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCOPE_TYPE: fieldBuilder.buildEnumField(
          'ScopeType',
          NumberSequenceType,
          true
        ),
        /**
         * Static representation of the {@link scopeValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCOPE_VALUE: fieldBuilder.buildEdmTypeField(
          'ScopeValue',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dataTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'DataTypeName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link numberSequenceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_CODE: fieldBuilder.buildEdmTypeField(
          'NumberSequenceCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reuseNumbers} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REUSE_NUMBERS: fieldBuilder.buildEnumField('ReuseNumbers', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', NumberSequencesV2References)
      };
    }

    return this._schema;
  }
}
