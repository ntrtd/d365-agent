/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UserGroupUserLists } from './UserGroupUserLists';
import { UserGroupUserListsRequestBuilder } from './UserGroupUserListsRequestBuilder';
import { SystemUsersApi } from './SystemUsersApi';
import { UserGroupsApi } from './UserGroupsApi';
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
export class UserGroupUserListsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<UserGroupUserLists<DeSerializersT>, DeSerializersT>
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
  ): UserGroupUserListsApi<DeSerializersT> {
    return new UserGroupUserListsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link systemUser} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SYSTEM_USER: OneToOneLink<
      UserGroupUserLists<DeSerializersT>,
      DeSerializersT,
      SystemUsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link userGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER_GROUP: OneToOneLink<
      UserGroupUserLists<DeSerializersT>,
      DeSerializersT,
      UserGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [SystemUsersApi<DeSerializersT>, UserGroupsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      SYSTEM_USER: new OneToOneLink('SystemUser', this, linkedApis[0]),
      USER_GROUP: new OneToOneLink('UserGroup', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = UserGroupUserLists;

  requestBuilder(): UserGroupUserListsRequestBuilder<DeSerializersT> {
    return new UserGroupUserListsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    UserGroupUserLists<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<UserGroupUserLists<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    UserGroupUserLists<DeSerializersT>,
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
    typeof UserGroupUserLists,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        UserGroupUserLists,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    USER_ID: OrderableEdmTypeField<
      UserGroupUserLists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_ID: OrderableEdmTypeField<
      UserGroupUserLists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link systemUser} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SYSTEM_USER: OneToOneLink<
      UserGroupUserLists<DeSerializersT>,
      DeSerializersT,
      SystemUsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link userGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER_GROUP: OneToOneLink<
      UserGroupUserLists<DeSerializersT>,
      DeSerializersT,
      UserGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<UserGroupUserLists<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link userId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_ID: fieldBuilder.buildEdmTypeField('userId', 'Edm.String', false),
        /**
         * Static representation of the {@link groupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_ID: fieldBuilder.buildEdmTypeField(
          'groupId',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', UserGroupUserLists)
      };
    }

    return this._schema;
  }
}
