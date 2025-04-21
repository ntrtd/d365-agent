/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExternalRoles } from './ExternalRoles';
import { ExternalRolesRequestBuilder } from './ExternalRolesRequestBuilder';
import { UserExternalPartyEntityType } from './UserExternalPartyEntityType';
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
export class ExternalRolesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ExternalRoles<DeSerializersT>, DeSerializersT>
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
  ): ExternalRolesApi<DeSerializersT> {
    return new ExternalRolesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ExternalRoles;

  requestBuilder(): ExternalRolesRequestBuilder<DeSerializersT> {
    return new ExternalRolesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExternalRoles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ExternalRoles<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ExternalRoles<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ExternalRoles, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ExternalRoles, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ROLE: OrderableEdmTypeField<
      ExternalRoles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TYPE: EnumField<
      ExternalRoles<DeSerializers>,
      DeSerializersT,
      UserExternalPartyEntityType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ExternalRoles<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link role} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROLE: fieldBuilder.buildEdmTypeField('Role', 'Edm.String', false),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField(
          'Type',
          UserExternalPartyEntityType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExternalRoles)
      };
    }

    return this._schema;
  }
}
