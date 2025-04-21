/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DecisionMakingRoles } from './DecisionMakingRoles';
import { DecisionMakingRolesRequestBuilder } from './DecisionMakingRolesRequestBuilder';
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
export class DecisionMakingRolesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DecisionMakingRoles<DeSerializersT>, DeSerializersT>
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
  ): DecisionMakingRolesApi<DeSerializersT> {
    return new DecisionMakingRolesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DecisionMakingRoles;

  requestBuilder(): DecisionMakingRolesRequestBuilder<DeSerializersT> {
    return new DecisionMakingRolesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DecisionMakingRoles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DecisionMakingRoles<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DecisionMakingRoles<DeSerializersT>,
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
    typeof DecisionMakingRoles,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DecisionMakingRoles,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DecisionMakingRoles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROLE_NAME: OrderableEdmTypeField<
      DecisionMakingRoles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROLE_DESCRIPTION: OrderableEdmTypeField<
      DecisionMakingRoles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<DecisionMakingRoles<DeSerializers>>;
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
         * Static representation of the {@link roleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROLE_NAME: fieldBuilder.buildEdmTypeField(
          'RoleName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link roleDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROLE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'RoleDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DecisionMakingRoles)
      };
    }

    return this._schema;
  }
}
