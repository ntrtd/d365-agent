/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LocationRoles } from './LocationRoles';
import { LocationRolesRequestBuilder } from './LocationRolesRequestBuilder';
import { NoYes } from './NoYes';
import { LogisticsLocationRoleType } from './LogisticsLocationRoleType';
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
export class LocationRolesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LocationRoles<DeSerializersT>, DeSerializersT>
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
  ): LocationRolesApi<DeSerializersT> {
    return new LocationRolesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LocationRoles;

  requestBuilder(): LocationRolesRequestBuilder<DeSerializersT> {
    return new LocationRolesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LocationRoles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LocationRoles<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<LocationRoles<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof LocationRoles, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(LocationRoles, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PURPOSE: OrderableEdmTypeField<
      LocationRoles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LANGUAGE: OrderableEdmTypeField<
      LocationRoles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONTACT_INFO: EnumField<
      LocationRoles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      LocationRoles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTAL_ADDRESS: EnumField<
      LocationRoles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TYPE: EnumField<
      LocationRoles<DeSerializers>,
      DeSerializersT,
      LogisticsLocationRoleType,
      true,
      true
    >;
    DISABLE_ADD_OR_EDIT_IN_EMPLOYEE_SELF_SERVICE: EnumField<
      LocationRoles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<LocationRoles<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link purpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURPOSE: fieldBuilder.buildEdmTypeField('Purpose', 'Edm.String', false),
        /**
         * Static representation of the {@link language} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE: fieldBuilder.buildEdmTypeField(
          'Language',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link contactInfo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_INFO: fieldBuilder.buildEnumField('ContactInfo', NoYes, true),
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
         * Static representation of the {@link postalAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTAL_ADDRESS: fieldBuilder.buildEnumField(
          'PostalAddress',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField(
          'Type',
          LogisticsLocationRoleType,
          true
        ),
        /**
         * Static representation of the {@link disableAddOrEditInEmployeeSelfService} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISABLE_ADD_OR_EDIT_IN_EMPLOYEE_SELF_SERVICE:
          fieldBuilder.buildEnumField(
            'DisableAddOrEditInEmployeeSelfService',
            NoYes,
            true
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LocationRoles)
      };
    }

    return this._schema;
  }
}
