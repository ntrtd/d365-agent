/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UserLegealEntityMapBiEntities } from './UserLegealEntityMapBiEntities';
import { UserLegealEntityMapBiEntitiesRequestBuilder } from './UserLegealEntityMapBiEntitiesRequestBuilder';
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
export class UserLegealEntityMapBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<UserLegealEntityMapBiEntities<DeSerializersT>, DeSerializersT>
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
  ): UserLegealEntityMapBiEntitiesApi<DeSerializersT> {
    return new UserLegealEntityMapBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = UserLegealEntityMapBiEntities;

  requestBuilder(): UserLegealEntityMapBiEntitiesRequestBuilder<DeSerializersT> {
    return new UserLegealEntityMapBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    UserLegealEntityMapBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      UserLegealEntityMapBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    UserLegealEntityMapBiEntities<DeSerializersT>,
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
    typeof UserLegealEntityMapBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        UserLegealEntityMapBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    OBJECT_ID: OrderableEdmTypeField<
      UserLegealEntityMapBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    ORGANIZATION_ID: OrderableEdmTypeField<
      UserLegealEntityMapBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    USER_ID: OrderableEdmTypeField<
      UserLegealEntityMapBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NETWORK_ALIAS: OrderableEdmTypeField<
      UserLegealEntityMapBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<UserLegealEntityMapBiEntities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link objectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OBJECT_ID: fieldBuilder.buildEdmTypeField(
          'ObjectId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link organizationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_ID: fieldBuilder.buildEdmTypeField(
          'OrganizationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link userId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_ID: fieldBuilder.buildEdmTypeField('UserId', 'Edm.String', true),
        /**
         * Static representation of the {@link networkAlias} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NETWORK_ALIAS: fieldBuilder.buildEdmTypeField(
          'NetworkAlias',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', UserLegealEntityMapBiEntities)
      };
    }

    return this._schema;
  }
}
