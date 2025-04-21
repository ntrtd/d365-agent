/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SecurityUserRoleAssociations } from './SecurityUserRoleAssociations';
import { SecurityUserRoleAssociationsRequestBuilder } from './SecurityUserRoleAssociationsRequestBuilder';
import { RoleAssignmentStatus } from './RoleAssignmentStatus';
import { RoleAssignmentMode } from './RoleAssignmentMode';
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
export class SecurityUserRoleAssociationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SecurityUserRoleAssociations<DeSerializersT>, DeSerializersT>
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
  ): SecurityUserRoleAssociationsApi<DeSerializersT> {
    return new SecurityUserRoleAssociationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SecurityUserRoleAssociations;

  requestBuilder(): SecurityUserRoleAssociationsRequestBuilder<DeSerializersT> {
    return new SecurityUserRoleAssociationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SecurityUserRoleAssociations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SecurityUserRoleAssociations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SecurityUserRoleAssociations<DeSerializersT>,
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
    typeof SecurityUserRoleAssociations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SecurityUserRoleAssociations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    USER_ID: OrderableEdmTypeField<
      SecurityUserRoleAssociations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SECURITY_ROLE_IDENTIFIER: OrderableEdmTypeField<
      SecurityUserRoleAssociations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ASSIGNMENT_STATUS: EnumField<
      SecurityUserRoleAssociations<DeSerializers>,
      DeSerializersT,
      RoleAssignmentStatus,
      true,
      true
    >;
    ASSIGNMENT_MODE: EnumField<
      SecurityUserRoleAssociations<DeSerializers>,
      DeSerializersT,
      RoleAssignmentMode,
      true,
      true
    >;
    SECURITY_ROLE_NAME: OrderableEdmTypeField<
      SecurityUserRoleAssociations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<SecurityUserRoleAssociations<DeSerializers>>;
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SecurityUserRoleAssociations)
      };
    }

    return this._schema;
  }
}
