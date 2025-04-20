/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PersonExams } from './PersonExams';
import { PersonExamsRequestBuilder } from './PersonExamsRequestBuilder';
import { TestTypesApi } from './TestTypesApi';
import { PeopleApi } from './PeopleApi';
import { HcmCompletionStatus } from './HcmCompletionStatus';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PersonExamsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PersonExams<DeSerializersT>, DeSerializersT>
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
  ): PersonExamsApi<DeSerializersT> {
    return new PersonExamsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link testType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEST_TYPE: OneToOneLink<
      PersonExams<DeSerializersT>,
      DeSerializersT,
      TestTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON: OneToOneLink<
      PersonExams<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [TestTypesApi<DeSerializersT>, PeopleApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      TEST_TYPE: new OneToOneLink('TestType', this, linkedApis[0]),
      PERSON: new OneToOneLink('Person', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = PersonExams;

  requestBuilder(): PersonExamsRequestBuilder<DeSerializersT> {
    return new PersonExamsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PersonExams<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PersonExams<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PersonExams<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PersonExams, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(PersonExams, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PARTY_NUMBER: OrderableEdmTypeField<
      PersonExams<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TEST_ID: OrderableEdmTypeField<
      PersonExams<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQUIRED_BY: OrderableEdmTypeField<
      PersonExams<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COMPLETED_ON: OrderableEdmTypeField<
      PersonExams<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SCORE: OrderableEdmTypeField<
      PersonExams<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NOTES: OrderableEdmTypeField<
      PersonExams<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      PersonExams<DeSerializers>,
      DeSerializersT,
      HcmCompletionStatus,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link testType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEST_TYPE: OneToOneLink<
      PersonExams<DeSerializersT>,
      DeSerializersT,
      TestTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON: OneToOneLink<
      PersonExams<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PersonExams<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link partyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PartyNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link testId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEST_ID: fieldBuilder.buildEdmTypeField('TestId', 'Edm.String', false),
        /**
         * Static representation of the {@link requiredBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRED_BY: fieldBuilder.buildEdmTypeField(
          'RequiredBy',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link completedOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPLETED_ON: fieldBuilder.buildEdmTypeField(
          'CompletedOn',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link score} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCORE: fieldBuilder.buildEdmTypeField('Score', 'Edm.Int32', false),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          HcmCompletionStatus,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PersonExams)
      };
    }

    return this._schema;
  }
}
