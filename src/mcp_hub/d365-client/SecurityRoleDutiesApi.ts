/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SecurityRoleDuties } from './SecurityRoleDuties';
import { SecurityRoleDutiesRequestBuilder } from './SecurityRoleDutiesRequestBuilder';
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
export class SecurityRoleDutiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SecurityRoleDuties<DeSerializersT>, DeSerializersT>
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
  ): SecurityRoleDutiesApi<DeSerializersT> {
    return new SecurityRoleDutiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SecurityRoleDuties;

  requestBuilder(): SecurityRoleDutiesRequestBuilder<DeSerializersT> {
    return new SecurityRoleDutiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SecurityRoleDuties<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SecurityRoleDuties<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SecurityRoleDuties<DeSerializersT>,
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
    typeof SecurityRoleDuties,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SecurityRoleDuties,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SECURITY_ROLE_IDENTIFIER: OrderableEdmTypeField<
      SecurityRoleDuties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SECURITY_DUTY_IDENTIFIER: OrderableEdmTypeField<
      SecurityRoleDuties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SECURITY_DUTY_NAME: OrderableEdmTypeField<
      SecurityRoleDuties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SECURITY_ROLE_NAME: OrderableEdmTypeField<
      SecurityRoleDuties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<SecurityRoleDuties<DeSerializers>>;
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
        ALL_FIELDS: new AllFields('*', SecurityRoleDuties)
      };
    }

    return this._schema;
  }
}
