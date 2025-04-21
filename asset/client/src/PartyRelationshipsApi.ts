/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PartyRelationships } from './PartyRelationships';
import { PartyRelationshipsRequestBuilder } from './PartyRelationshipsRequestBuilder';
import { RelationshipTypesApi } from './RelationshipTypesApi';
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
export class PartyRelationshipsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PartyRelationships<DeSerializersT>, DeSerializersT>
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
  ): PartyRelationshipsApi<DeSerializersT> {
    return new PartyRelationshipsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dirRelationshipType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIR_RELATIONSHIP_TYPE: OneToOneLink<
      PartyRelationships<DeSerializersT>,
      DeSerializersT,
      RelationshipTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [RelationshipTypesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIR_RELATIONSHIP_TYPE: new OneToOneLink(
        'DirRelationshipType',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = PartyRelationships;

  requestBuilder(): PartyRelationshipsRequestBuilder<DeSerializersT> {
    return new PartyRelationshipsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PartyRelationships<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PartyRelationships<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PartyRelationships<DeSerializersT>,
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
    typeof PartyRelationships,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PartyRelationships,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    RELATIONSHIP_TYPE: OrderableEdmTypeField<
      PartyRelationships<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PARENT_PARTY_ID: OrderableEdmTypeField<
      PartyRelationships<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHILD_PARTY_ID: OrderableEdmTypeField<
      PartyRelationships<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_DATA_AREA: OrderableEdmTypeField<
      PartyRelationships<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      PartyRelationships<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      PartyRelationships<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dirRelationshipType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIR_RELATIONSHIP_TYPE: OneToOneLink<
      PartyRelationships<DeSerializersT>,
      DeSerializersT,
      RelationshipTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PartyRelationships<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link relationshipType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELATIONSHIP_TYPE: fieldBuilder.buildEdmTypeField(
          'RelationshipType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link parentPartyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_PARTY_ID: fieldBuilder.buildEdmTypeField(
          'ParentPartyId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link childPartyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHILD_PARTY_ID: fieldBuilder.buildEdmTypeField(
          'ChildPartyId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link legalEntityDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'LegalEntityDataArea',
          'Edm.String',
          false
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
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PartyRelationships)
      };
    }

    return this._schema;
  }
}
