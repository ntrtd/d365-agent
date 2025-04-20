/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SecuritySubRoles } from './SecuritySubRoles';
import { SecuritySubRolesRequestBuilder } from './SecuritySubRolesRequestBuilder';
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
export class SecuritySubRolesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SecuritySubRoles<DeSerializersT>, DeSerializersT>
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
  ): SecuritySubRolesApi<DeSerializersT> {
    return new SecuritySubRolesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SecuritySubRoles;

  requestBuilder(): SecuritySubRolesRequestBuilder<DeSerializersT> {
    return new SecuritySubRolesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SecuritySubRoles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SecuritySubRoles<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SecuritySubRoles<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof SecuritySubRoles, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SecuritySubRoles,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SECURITY_ROLE_IDENTIFIER: OrderableEdmTypeField<
      SecuritySubRoles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SECURITY_SUB_ROLE_IDENTIFIER: OrderableEdmTypeField<
      SecuritySubRoles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SECURITY_ROLE_NAME: OrderableEdmTypeField<
      SecuritySubRoles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SECURITY_SUB_ROLE_NAME: OrderableEdmTypeField<
      SecuritySubRoles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<SecuritySubRoles<DeSerializers>>;
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
         * Static representation of the {@link securitySubRoleIdentifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECURITY_SUB_ROLE_IDENTIFIER: fieldBuilder.buildEdmTypeField(
          'SecuritySubRoleIdentifier',
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
         * Static representation of the {@link securitySubRoleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECURITY_SUB_ROLE_NAME: fieldBuilder.buildEdmTypeField(
          'SecuritySubRoleName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SecuritySubRoles)
      };
    }

    return this._schema;
  }
}
