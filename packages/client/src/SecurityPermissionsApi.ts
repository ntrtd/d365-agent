/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SecurityPermissions } from './SecurityPermissions';
import { SecurityPermissionsRequestBuilder } from './SecurityPermissionsRequestBuilder';
import { SecurableType } from './SecurableType';
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
export class SecurityPermissionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SecurityPermissions<DeSerializersT>, DeSerializersT>
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
  ): SecurityPermissionsApi<DeSerializersT> {
    return new SecurityPermissionsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SecurityPermissions;

  requestBuilder(): SecurityPermissionsRequestBuilder<DeSerializersT> {
    return new SecurityPermissionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SecurityPermissions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SecurityPermissions<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SecurityPermissions<DeSerializersT>,
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
    typeof SecurityPermissions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SecurityPermissions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SECURITY_ROLE_IDENTIFIER: OrderableEdmTypeField<
      SecurityPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RESOURCE_TYPE: EnumField<
      SecurityPermissions<DeSerializers>,
      DeSerializersT,
      SecurableType,
      true,
      true
    >;
    INVOKE_ACCESS: OrderableEdmTypeField<
      SecurityPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RESOURCE_NAME: OrderableEdmTypeField<
      SecurityPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UPDATE_ACCESS: OrderableEdmTypeField<
      SecurityPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CREATE_ACCESS: OrderableEdmTypeField<
      SecurityPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DELETE_ACCESS: OrderableEdmTypeField<
      SecurityPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    READ_ACCESS: OrderableEdmTypeField<
      SecurityPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SECURITY_ROLE_NAME: OrderableEdmTypeField<
      SecurityPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CORRECT_ACCESS: OrderableEdmTypeField<
      SecurityPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    USER_LICENSE_TYPE: EnumField<
      SecurityPermissions<DeSerializers>,
      DeSerializersT,
      UserLicenseType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<SecurityPermissions<DeSerializers>>;
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
         * Static representation of the {@link resourceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_TYPE: fieldBuilder.buildEnumField(
          'ResourceType',
          SecurableType,
          true
        ),
        /**
         * Static representation of the {@link invokeAccess} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOKE_ACCESS: fieldBuilder.buildEdmTypeField(
          'InvokeAccess',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link resourceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_NAME: fieldBuilder.buildEdmTypeField(
          'ResourceName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link updateAccess} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPDATE_ACCESS: fieldBuilder.buildEdmTypeField(
          'UpdateAccess',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link createAccess} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_ACCESS: fieldBuilder.buildEdmTypeField(
          'CreateAccess',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link deleteAccess} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELETE_ACCESS: fieldBuilder.buildEdmTypeField(
          'DeleteAccess',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link readAccess} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        READ_ACCESS: fieldBuilder.buildEdmTypeField(
          'ReadAccess',
          'Edm.Int32',
          false
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
         * Static representation of the {@link correctAccess} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECT_ACCESS: fieldBuilder.buildEdmTypeField(
          'CorrectAccess',
          'Edm.Int32',
          false
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
        ALL_FIELDS: new AllFields('*', SecurityPermissions)
      };
    }

    return this._schema;
  }
}
