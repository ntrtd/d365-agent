/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PersonTrustedPositions } from './PersonTrustedPositions';
import { PersonTrustedPositionsRequestBuilder } from './PersonTrustedPositionsRequestBuilder';
import { PeopleApi } from './PeopleApi';
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
export class PersonTrustedPositionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PersonTrustedPositions<DeSerializersT>, DeSerializersT>
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
  ): PersonTrustedPositionsApi<DeSerializersT> {
    return new PersonTrustedPositionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON: OneToOneLink<
      PersonTrustedPositions<DeSerializersT>,
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

  entityConstructor = PersonTrustedPositions;

  requestBuilder(): PersonTrustedPositionsRequestBuilder<DeSerializersT> {
    return new PersonTrustedPositionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PersonTrustedPositions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PersonTrustedPositions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PersonTrustedPositions<DeSerializersT>,
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
    typeof PersonTrustedPositions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PersonTrustedPositions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PARTY_NUMBER: OrderableEdmTypeField<
      PersonTrustedPositions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POSITION: OrderableEdmTypeField<
      PersonTrustedPositions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EMPLOYER: OrderableEdmTypeField<
      PersonTrustedPositions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NOTE: OrderableEdmTypeField<
      PersonTrustedPositions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      PersonTrustedPositions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      PersonTrustedPositions<DeSerializers>,
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
      PersonTrustedPositions<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PersonTrustedPositions<DeSerializers>>;
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
         * Static representation of the {@link position} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION: fieldBuilder.buildEdmTypeField(
          'Position',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link employer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYER: fieldBuilder.buildEdmTypeField(
          'Employer',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link note} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE: fieldBuilder.buildEdmTypeField('Note', 'Edm.String', true),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PersonTrustedPositions)
      };
    }

    return this._schema;
  }
}
