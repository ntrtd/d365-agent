/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PartitionedSystemUsers } from './PartitionedSystemUsers';
import { PartitionedSystemUsersRequestBuilder } from './PartitionedSystemUsersRequestBuilder';
import { UserAccountType } from './UserAccountType';
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
export class PartitionedSystemUsersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PartitionedSystemUsers<DeSerializersT>, DeSerializersT>
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
  ): PartitionedSystemUsersApi<DeSerializersT> {
    return new PartitionedSystemUsersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PartitionedSystemUsers;

  requestBuilder(): PartitionedSystemUsersRequestBuilder<DeSerializersT> {
    return new PartitionedSystemUsersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PartitionedSystemUsers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PartitionedSystemUsers<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PartitionedSystemUsers<DeSerializersT>,
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
    typeof PartitionedSystemUsers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PartitionedSystemUsers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    USER_ID: OrderableEdmTypeField<
      PartitionedSystemUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEFAULT_PARTITION: OrderableEdmTypeField<
      PartitionedSystemUsers<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    USER_INFO_LANGUAGE: OrderableEdmTypeField<
      PartitionedSystemUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_NAME: OrderableEdmTypeField<
      PartitionedSystemUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTITION_KEY: OrderableEdmTypeField<
      PartitionedSystemUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NETWORK_DOMAIN: OrderableEdmTypeField<
      PartitionedSystemUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_NAME: OrderableEdmTypeField<
      PartitionedSystemUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALIAS: OrderableEdmTypeField<
      PartitionedSystemUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_TYPE: EnumField<
      PartitionedSystemUsers<DeSerializers>,
      DeSerializersT,
      UserAccountType,
      true,
      true
    >;
    HELPLANGUAGE: OrderableEdmTypeField<
      PartitionedSystemUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENABLED: OrderableEdmTypeField<
      PartitionedSystemUsers<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    ALL_FIELDS: AllFields<PartitionedSystemUsers<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link userId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_ID: fieldBuilder.buildEdmTypeField('UserID', 'Edm.String', false),
        /**
         * Static representation of the {@link defaultPartition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PARTITION: fieldBuilder.buildEdmTypeField(
          'DefaultPartition',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link userInfoLanguage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_INFO_LANGUAGE: fieldBuilder.buildEdmTypeField(
          'UserInfo_language',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_NAME: fieldBuilder.buildEdmTypeField(
          'UserName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link partitionKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTITION_KEY: fieldBuilder.buildEdmTypeField(
          'PartitionKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link networkDomain} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NETWORK_DOMAIN: fieldBuilder.buildEdmTypeField(
          'NetworkDomain',
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
         * Static representation of the {@link alias} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALIAS: fieldBuilder.buildEdmTypeField('Alias', 'Edm.String', true),
        /**
         * Static representation of the {@link accountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'AccountType',
          UserAccountType,
          true
        ),
        /**
         * Static representation of the {@link helplanguage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HELPLANGUAGE: fieldBuilder.buildEdmTypeField(
          'Helplanguage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link enabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLED: fieldBuilder.buildEdmTypeField(
          'Enabled',
          'Edm.Boolean',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PartitionedSystemUsers)
      };
    }

    return this._schema;
  }
}
