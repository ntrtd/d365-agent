/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SecurityDuties } from './SecurityDuties';
import { SecurityDutiesRequestBuilder } from './SecurityDutiesRequestBuilder';
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
export class SecurityDutiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SecurityDuties<DeSerializersT>, DeSerializersT>
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
  ): SecurityDutiesApi<DeSerializersT> {
    return new SecurityDutiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SecurityDuties;

  requestBuilder(): SecurityDutiesRequestBuilder<DeSerializersT> {
    return new SecurityDutiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SecurityDuties<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SecurityDuties<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SecurityDuties<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof SecurityDuties, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(SecurityDuties, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SECURITY_ROLE_IDENTIFIER: OrderableEdmTypeField<
      SecurityDuties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SECURITY_DUTY_IDENTIFIER: OrderableEdmTypeField<
      SecurityDuties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SECURITY_DUTY_NAME: OrderableEdmTypeField<
      SecurityDuties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SECURITY_PRIVILEGE_IDENTIFIER: OrderableEdmTypeField<
      SecurityDuties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SECURITY_PRIVILEGE_NAME: OrderableEdmTypeField<
      SecurityDuties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SECURITY_PRIVILEGE: OrderableEdmTypeField<
      SecurityDuties<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SECURITY_ROLE_NAME: OrderableEdmTypeField<
      SecurityDuties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<SecurityDuties<DeSerializers>>;
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
         * Static representation of the {@link securityDutyIdentifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECURITY_DUTY_IDENTIFIER: fieldBuilder.buildEdmTypeField(
          'SecurityDutyIdentifier',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link securityDutyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECURITY_DUTY_NAME: fieldBuilder.buildEdmTypeField(
          'SecurityDutyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link securityPrivilegeIdentifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECURITY_PRIVILEGE_IDENTIFIER: fieldBuilder.buildEdmTypeField(
          'SecurityPrivilegeIdentifier',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link securityPrivilegeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECURITY_PRIVILEGE_NAME: fieldBuilder.buildEdmTypeField(
          'SecurityPrivilegeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link securityPrivilege} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECURITY_PRIVILEGE: fieldBuilder.buildEdmTypeField(
          'SecurityPrivilege',
          'Edm.Int64',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SecurityDuties)
      };
    }

    return this._schema;
  }
}
