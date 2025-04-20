/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmWebApplicationSecurityRoles } from './EmWebApplicationSecurityRoles';
import { EmWebApplicationSecurityRolesRequestBuilder } from './EmWebApplicationSecurityRolesRequestBuilder';
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
export class EmWebApplicationSecurityRolesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<EmWebApplicationSecurityRoles<DeSerializersT>, DeSerializersT>
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
  ): EmWebApplicationSecurityRolesApi<DeSerializersT> {
    return new EmWebApplicationSecurityRolesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = EmWebApplicationSecurityRoles;

  requestBuilder(): EmWebApplicationSecurityRolesRequestBuilder<DeSerializersT> {
    return new EmWebApplicationSecurityRolesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EmWebApplicationSecurityRoles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EmWebApplicationSecurityRoles<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EmWebApplicationSecurityRoles<DeSerializersT>,
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
    typeof EmWebApplicationSecurityRoles,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EmWebApplicationSecurityRoles,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      EmWebApplicationSecurityRoles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WEB_APPLICATION_NAME: OrderableEdmTypeField<
      EmWebApplicationSecurityRoles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SECURITY_ROLE_AOT_NAME: OrderableEdmTypeField<
      EmWebApplicationSecurityRoles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<EmWebApplicationSecurityRoles<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link webApplicationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEB_APPLICATION_NAME: fieldBuilder.buildEdmTypeField(
          'WebApplicationName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link securityRoleAotName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECURITY_ROLE_AOT_NAME: fieldBuilder.buildEdmTypeField(
          'SecurityRoleAotName',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EmWebApplicationSecurityRoles)
      };
    }

    return this._schema;
  }
}
