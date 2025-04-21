/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProcessingSecurityRoles } from './ProcessingSecurityRoles';
import { ProcessingSecurityRolesRequestBuilder } from './ProcessingSecurityRolesRequestBuilder';
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
export class ProcessingSecurityRolesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProcessingSecurityRoles<DeSerializersT>, DeSerializersT>
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
  ): ProcessingSecurityRolesApi<DeSerializersT> {
    return new ProcessingSecurityRolesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProcessingSecurityRoles;

  requestBuilder(): ProcessingSecurityRolesRequestBuilder<DeSerializersT> {
    return new ProcessingSecurityRolesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProcessingSecurityRoles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProcessingSecurityRoles<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProcessingSecurityRoles<DeSerializersT>,
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
    typeof ProcessingSecurityRoles,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProcessingSecurityRoles,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProcessingSecurityRoles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROCESSING: OrderableEdmTypeField<
      ProcessingSecurityRoles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SECURITY_ROLE_AOT_NAME: OrderableEdmTypeField<
      ProcessingSecurityRoles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ProcessingSecurityRoles<DeSerializers>>;
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
         * Static representation of the {@link processing} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESSING: fieldBuilder.buildEdmTypeField(
          'Processing',
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
        ALL_FIELDS: new AllFields('*', ProcessingSecurityRoles)
      };
    }

    return this._schema;
  }
}
