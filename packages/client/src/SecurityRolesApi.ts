/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SecurityRoles } from './SecurityRoles';
import { SecurityRolesRequestBuilder } from './SecurityRolesRequestBuilder';
import { UserLicenseType } from './UserLicenseType';
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
export class SecurityRolesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SecurityRoles<DeSerializersT>, DeSerializersT>
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
  ): SecurityRolesApi<DeSerializersT> {
    return new SecurityRolesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SecurityRoles;

  requestBuilder(): SecurityRolesRequestBuilder<DeSerializersT> {
    return new SecurityRolesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SecurityRoles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SecurityRoles<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SecurityRoles<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof SecurityRoles, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(SecurityRoles, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SECURITY_ROLE_IDENTIFIER: OrderableEdmTypeField<
      SecurityRoles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONTEXT_STRING: OrderableEdmTypeField<
      SecurityRoles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCESS_TO_SENSITIVE_DATA: OrderableEdmTypeField<
      SecurityRoles<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      SecurityRoles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SECURITY_ROLE_NAME: OrderableEdmTypeField<
      SecurityRoles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_LICENSE_TYPE: EnumField<
      SecurityRoles<DeSerializers>,
      DeSerializersT,
      UserLicenseType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<SecurityRoles<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link securityRoleIdentifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECURITY_ROLE_IDENTIFIER: fieldBuilder.buildEdmTypeField(
          'SecurityRoleIdentifier',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link contextString} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTEXT_STRING: fieldBuilder.buildEdmTypeField(
          'ContextString',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accessToSensitiveData} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCESS_TO_SENSITIVE_DATA: fieldBuilder.buildEdmTypeField(
          'AccessToSensitiveData',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link securityRoleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECURITY_ROLE_NAME: fieldBuilder.buildEdmTypeField(
          'SecurityRoleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userLicenseType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_LICENSE_TYPE: fieldBuilder.buildEnumField(
          'UserLicenseType',
          UserLicenseType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SecurityRoles)
      };
    }

    return this._schema;
  }
}
