/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PartyLocationRoles } from './PartyLocationRoles';
import { PartyLocationRolesRequestBuilder } from './PartyLocationRolesRequestBuilder';
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
export class PartyLocationRolesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PartyLocationRoles<DeSerializersT>, DeSerializersT>
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
  ): PartyLocationRolesApi<DeSerializersT> {
    return new PartyLocationRolesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PartyLocationRoles;

  requestBuilder(): PartyLocationRolesRequestBuilder<DeSerializersT> {
    return new PartyLocationRolesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PartyLocationRoles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PartyLocationRoles<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PartyLocationRoles<DeSerializersT>,
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
    typeof PartyLocationRoles,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PartyLocationRoles,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DIR_PARTY_TABLE_FK_PARTY_NUMBER: OrderableEdmTypeField<
      PartyLocationRoles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOGISTICS_LOCATION_FK_LOCATION_ID: OrderableEdmTypeField<
      PartyLocationRoles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOGISTICS_LOCATION_ROLE_FK_NAME: OrderableEdmTypeField<
      PartyLocationRoles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SKIP_UPDATE_LOCATION_ROLES: EnumField<
      PartyLocationRoles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<PartyLocationRoles<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dirPartyTableFkPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIR_PARTY_TABLE_FK_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'DirPartyTable_FK_PartyNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link logisticsLocationFkLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOGISTICS_LOCATION_FK_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'LogisticsLocation_FK_LocationId',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link skipUpdateLocationRoles} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_UPDATE_LOCATION_ROLES: fieldBuilder.buildEnumField(
          'SkipUpdateLocationRoles',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PartyLocationRoles)
      };
    }

    return this._schema;
  }
}
