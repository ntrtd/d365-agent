/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SecurityUserRoles } from './SecurityUserRoles';
import { SecurityUserRolesRequestBuilder } from './SecurityUserRolesRequestBuilder';
import { RoleAssignmentStatus } from './RoleAssignmentStatus';
import { RoleAssignmentMode } from './RoleAssignmentMode';
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
export class SecurityUserRolesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SecurityUserRoles<DeSerializersT>, DeSerializersT>
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
  ): SecurityUserRolesApi<DeSerializersT> {
    return new SecurityUserRolesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SecurityUserRoles;

  requestBuilder(): SecurityUserRolesRequestBuilder<DeSerializersT> {
    return new SecurityUserRolesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SecurityUserRoles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SecurityUserRoles<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SecurityUserRoles<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof SecurityUserRoles,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SecurityUserRoles,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    USER_ID: OrderableEdmTypeField<
      SecurityUserRoles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SECURITY_ROLE_IDENTIFIER: OrderableEdmTypeField<
      SecurityUserRoles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ASSIGNMENT_STATUS: EnumField<
      SecurityUserRoles<DeSerializers>,
      DeSerializersT,
      RoleAssignmentStatus,
      true,
      true
    >;
    ASSIGNMENT_MODE: EnumField<
      SecurityUserRoles<DeSerializers>,
      DeSerializersT,
      RoleAssignmentMode,
      true,
      true
    >;
    SECURITY_ROLE_NAME: OrderableEdmTypeField<
      SecurityUserRoles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_LICENSE_TYPE: EnumField<
      SecurityUserRoles<DeSerializers>,
      DeSerializersT,
      UserLicenseType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<SecurityUserRoles<DeSerializers>>;
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
         * Static representation of the {@link securityRoleIdentifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECURITY_ROLE_IDENTIFIER: fieldBuilder.buildEdmTypeField(
          'SecurityRoleIdentifier',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link assignmentStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSIGNMENT_STATUS: fieldBuilder.buildEnumField(
          'AssignmentStatus',
          RoleAssignmentStatus,
          true
        ),
        /**
         * Static representation of the {@link assignmentMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSIGNMENT_MODE: fieldBuilder.buildEnumField(
          'AssignmentMode',
          RoleAssignmentMode,
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
        ALL_FIELDS: new AllFields('*', SecurityUserRoles)
      };
    }

    return this._schema;
  }
}
