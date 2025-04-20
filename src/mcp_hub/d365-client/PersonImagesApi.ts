/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PersonImages } from './PersonImages';
import { PersonImagesRequestBuilder } from './PersonImagesRequestBuilder';
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
  EdmTypeField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PersonImagesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PersonImages<DeSerializersT>, DeSerializersT>
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
  ): PersonImagesApi<DeSerializersT> {
    return new PersonImagesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON: OneToOneLink<
      PersonImages<DeSerializersT>,
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

  entityConstructor = PersonImages;

  requestBuilder(): PersonImagesRequestBuilder<DeSerializersT> {
    return new PersonImagesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PersonImages<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PersonImages<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PersonImages<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PersonImages, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(PersonImages, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PARTY_NUMBER: OrderableEdmTypeField<
      PersonImages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IMAGE: EdmTypeField<
      PersonImages<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON: OneToOneLink<
      PersonImages<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PersonImages<DeSerializers>>;
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
         * Static representation of the {@link image} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMAGE: fieldBuilder.buildEdmTypeField('Image', 'Edm.Binary', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PersonImages)
      };
    }

    return this._schema;
  }
}
