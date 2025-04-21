/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PersonUsers } from './PersonUsers';
import { PersonUsersRequestBuilder } from './PersonUsersRequestBuilder';
import { SystemUsersApi } from './SystemUsersApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PersonUsersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PersonUsers<DeSerializersT>, DeSerializersT>
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
  ): PersonUsersApi<DeSerializersT> {
    return new PersonUsersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link systemUserEntities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SYSTEM_USER_ENTITIES: OneToOneLink<
      PersonUsers<DeSerializersT>,
      DeSerializersT,
      SystemUsersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [SystemUsersApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      SYSTEM_USER_ENTITIES: new OneToOneLink(
        'SystemUserEntities',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = PersonUsers;

  requestBuilder(): PersonUsersRequestBuilder<DeSerializersT> {
    return new PersonUsersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PersonUsers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PersonUsers<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PersonUsers<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PersonUsers, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(PersonUsers, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    USER_ID: OrderableEdmTypeField<
      PersonUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PARTY_NUMBER: OrderableEdmTypeField<
      PersonUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      PersonUsers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PERSON_PRIMARY_EMAIL: OrderableEdmTypeField<
      PersonUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_EMAIL: OrderableEdmTypeField<
      PersonUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_NAME_ALIAS: OrderableEdmTypeField<
      PersonUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_NAME: OrderableEdmTypeField<
      PersonUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      PersonUsers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link systemUserEntities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SYSTEM_USER_ENTITIES: OneToOneLink<
      PersonUsers<DeSerializersT>,
      DeSerializersT,
      SystemUsersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PersonUsers<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link userId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_ID: fieldBuilder.buildEdmTypeField('UserId', 'Edm.String', false),
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
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link personPrimaryEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_PRIMARY_EMAIL: fieldBuilder.buildEdmTypeField(
          'PersonPrimaryEmail',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_EMAIL: fieldBuilder.buildEdmTypeField(
          'UserEmail',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personNameAlias} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_NAME_ALIAS: fieldBuilder.buildEdmTypeField(
          'PersonNameAlias',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_NAME: fieldBuilder.buildEdmTypeField(
          'PersonName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PersonUsers)
      };
    }

    return this._schema;
  }
}
