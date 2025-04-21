/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PersonScreenings } from './PersonScreenings';
import { PersonScreeningsRequestBuilder } from './PersonScreeningsRequestBuilder';
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
export class PersonScreeningsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PersonScreenings<DeSerializersT>, DeSerializersT>
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
  ): PersonScreeningsApi<DeSerializersT> {
    return new PersonScreeningsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON: OneToOneLink<
      PersonScreenings<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [PeopleApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      PERSON: new OneToOneLink('Person', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = PersonScreenings;

  requestBuilder(): PersonScreeningsRequestBuilder<DeSerializersT> {
    return new PersonScreeningsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PersonScreenings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PersonScreenings<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PersonScreenings<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PersonScreenings, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PersonScreenings,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PARTY_NUMBER: OrderableEdmTypeField<
      PersonScreenings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SCREENING_TYPE_ID: OrderableEdmTypeField<
      PersonScreenings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQUIRED_BY: OrderableEdmTypeField<
      PersonScreenings<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    STATUS: EnumField<
      PersonScreenings<DeSerializers>,
      DeSerializersT,
      HcmCompletionStatus,
      true,
      true
    >;
    NOTE: OrderableEdmTypeField<
      PersonScreenings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPLETED_DATE: OrderableEdmTypeField<
      PersonScreenings<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON: OneToOneLink<
      PersonScreenings<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PersonScreenings<DeSerializers>>;
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
         * Static representation of the {@link screeningTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCREENING_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'ScreeningTypeId',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          HcmCompletionStatus,
          true
        ),
        /**
         * Static representation of the {@link note} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE: fieldBuilder.buildEdmTypeField('Note', 'Edm.String', true),
        /**
         * Static representation of the {@link completedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPLETED_DATE: fieldBuilder.buildEdmTypeField(
          'CompletedDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PersonScreenings)
      };
    }

    return this._schema;
  }
}
