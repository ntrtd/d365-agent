/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExpMobileUserDisplayInfoes } from './ExpMobileUserDisplayInfoes';
import { ExpMobileUserDisplayInfoesRequestBuilder } from './ExpMobileUserDisplayInfoesRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class ExpMobileUserDisplayInfoesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ExpMobileUserDisplayInfoes<DeSerializersT>, DeSerializersT>
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
  ): ExpMobileUserDisplayInfoesApi<DeSerializersT> {
    return new ExpMobileUserDisplayInfoesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ExpMobileUserDisplayInfoes;

  requestBuilder(): ExpMobileUserDisplayInfoesRequestBuilder<DeSerializersT> {
    return new ExpMobileUserDisplayInfoesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExpMobileUserDisplayInfoes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ExpMobileUserDisplayInfoes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ExpMobileUserDisplayInfoes<DeSerializersT>,
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
    typeof ExpMobileUserDisplayInfoes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExpMobileUserDisplayInfoes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DIR_PERSON_PARTY_NUMBER: OrderableEdmTypeField<
      ExpMobileUserDisplayInfoes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CREATING_WORKER: OrderableEdmTypeField<
      ExpMobileUserDisplayInfoes<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    USER: OrderableEdmTypeField<
      ExpMobileUserDisplayInfoes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_IMAGE: OrderableEdmTypeField<
      ExpMobileUserDisplayInfoes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ExpMobileUserDisplayInfoes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dirPersonPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIR_PERSON_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'DirPerson_PartyNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link creatingWorker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATING_WORKER: fieldBuilder.buildEdmTypeField(
          'CreatingWorker',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link user} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER: fieldBuilder.buildEdmTypeField('User', 'Edm.String', true),
        /**
         * Static representation of the {@link userImage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_IMAGE: fieldBuilder.buildEdmTypeField(
          'UserImage',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExpMobileUserDisplayInfoes)
      };
    }

    return this._schema;
  }
}
