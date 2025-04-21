/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ElectronicAddressRoles } from './ElectronicAddressRoles';
import { ElectronicAddressRolesRequestBuilder } from './ElectronicAddressRolesRequestBuilder';
import { LogisticsElectronicAddressMethodType } from './LogisticsElectronicAddressMethodType';
import { NoYes } from './NoYes';
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
export class ElectronicAddressRolesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ElectronicAddressRoles<DeSerializersT>, DeSerializersT>
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
  ): ElectronicAddressRolesApi<DeSerializersT> {
    return new ElectronicAddressRolesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ElectronicAddressRoles;

  requestBuilder(): ElectronicAddressRolesRequestBuilder<DeSerializersT> {
    return new ElectronicAddressRolesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ElectronicAddressRoles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ElectronicAddressRoles<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ElectronicAddressRoles<DeSerializersT>,
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
    typeof ElectronicAddressRoles,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ElectronicAddressRoles,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LOGISTICS_LOCATION_ROLE_FK_NAME: OrderableEdmTypeField<
      ElectronicAddressRoles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TYPE: EnumField<
      ElectronicAddressRoles<DeSerializers>,
      DeSerializersT,
      LogisticsElectronicAddressMethodType,
      true,
      true
    >;
    ELECTRONIC_ADDRESS_ID: OrderableEdmTypeField<
      ElectronicAddressRoles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SKIP_UPDATE_ELECTRONIC_ADDRESS_ROLES: EnumField<
      ElectronicAddressRoles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ElectronicAddressRoles<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link logisticsLocationRoleFkName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOGISTICS_LOCATION_ROLE_FK_NAME: fieldBuilder.buildEdmTypeField(
          'LogisticsLocationRole_FK_Name',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField(
          'Type',
          LogisticsElectronicAddressMethodType,
          true
        ),
        /**
         * Static representation of the {@link electronicAddressId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_ADDRESS_ID: fieldBuilder.buildEdmTypeField(
          'ElectronicAddressId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link skipUpdateElectronicAddressRoles} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_UPDATE_ELECTRONIC_ADDRESS_ROLES: fieldBuilder.buildEnumField(
          'SkipUpdateElectronicAddressRoles',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ElectronicAddressRoles)
      };
    }

    return this._schema;
  }
}
