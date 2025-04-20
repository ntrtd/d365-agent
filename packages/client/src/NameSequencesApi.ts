/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { NameSequences } from './NameSequences';
import { NameSequencesRequestBuilder } from './NameSequencesRequestBuilder';
import { DirSubNameSequenceType } from './DirSubNameSequenceType';
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
export class NameSequencesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<NameSequences<DeSerializersT>, DeSerializersT>
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
  ): NameSequencesApi<DeSerializersT> {
    return new NameSequencesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = NameSequences;

  requestBuilder(): NameSequencesRequestBuilder<DeSerializersT> {
    return new NameSequencesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    NameSequences<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<NameSequences<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<NameSequences<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof NameSequences, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(NameSequences, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME_SEQUENCE: OrderableEdmTypeField<
      NameSequences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      NameSequences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      NameSequences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIRST_POSITION: EnumField<
      NameSequences<DeSerializers>,
      DeSerializersT,
      DirSubNameSequenceType,
      true,
      true
    >;
    SEPARATOR_3: OrderableEdmTypeField<
      NameSequences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEPARATOR_2_SPACES: OrderableEdmTypeField<
      NameSequences<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SEPARATOR_3_SPACES: OrderableEdmTypeField<
      NameSequences<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SEPARATOR_1_SPACES: OrderableEdmTypeField<
      NameSequences<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LAST_POSITION: EnumField<
      NameSequences<DeSerializers>,
      DeSerializersT,
      DirSubNameSequenceType,
      true,
      true
    >;
    SEPARATOR_2: OrderableEdmTypeField<
      NameSequences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SECOND_POSITION: EnumField<
      NameSequences<DeSerializers>,
      DeSerializersT,
      DirSubNameSequenceType,
      true,
      true
    >;
    THIRD_POSITION: EnumField<
      NameSequences<DeSerializers>,
      DeSerializersT,
      DirSubNameSequenceType,
      true,
      true
    >;
    SEPARATOR_1: OrderableEdmTypeField<
      NameSequences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<NameSequences<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link nameSequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_SEQUENCE: fieldBuilder.buildEdmTypeField(
          'NameSequence',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link languageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'LanguageId',
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
         * Static representation of the {@link firstPosition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRST_POSITION: fieldBuilder.buildEnumField(
          'FirstPosition',
          DirSubNameSequenceType,
          true
        ),
        /**
         * Static representation of the {@link separator3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEPARATOR_3: fieldBuilder.buildEdmTypeField(
          'Separator3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link separator2Spaces} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEPARATOR_2_SPACES: fieldBuilder.buildEdmTypeField(
          'Separator2Spaces',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link separator3Spaces} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEPARATOR_3_SPACES: fieldBuilder.buildEdmTypeField(
          'Separator3Spaces',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link separator1Spaces} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEPARATOR_1_SPACES: fieldBuilder.buildEdmTypeField(
          'Separator1Spaces',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link lastPosition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_POSITION: fieldBuilder.buildEnumField(
          'LastPosition',
          DirSubNameSequenceType,
          true
        ),
        /**
         * Static representation of the {@link separator2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEPARATOR_2: fieldBuilder.buildEdmTypeField(
          'Separator2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link secondPosition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECOND_POSITION: fieldBuilder.buildEnumField(
          'SecondPosition',
          DirSubNameSequenceType,
          true
        ),
        /**
         * Static representation of the {@link thirdPosition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THIRD_POSITION: fieldBuilder.buildEnumField(
          'ThirdPosition',
          DirSubNameSequenceType,
          true
        ),
        /**
         * Static representation of the {@link separator1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEPARATOR_1: fieldBuilder.buildEdmTypeField(
          'Separator1',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', NameSequences)
      };
    }

    return this._schema;
  }
}
