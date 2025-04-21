/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PersonnelActionTypeSetupRoles } from './PersonnelActionTypeSetupRoles';
import { PersonnelActionTypeSetupRolesRequestBuilder } from './PersonnelActionTypeSetupRolesRequestBuilder';
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
export class PersonnelActionTypeSetupRolesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PersonnelActionTypeSetupRoles<DeSerializersT>, DeSerializersT>
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
  ): PersonnelActionTypeSetupRolesApi<DeSerializersT> {
    return new PersonnelActionTypeSetupRolesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PersonnelActionTypeSetupRoles;

  requestBuilder(): PersonnelActionTypeSetupRolesRequestBuilder<DeSerializersT> {
    return new PersonnelActionTypeSetupRolesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PersonnelActionTypeSetupRoles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PersonnelActionTypeSetupRoles<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PersonnelActionTypeSetupRoles<DeSerializersT>,
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
    typeof PersonnelActionTypeSetupRoles,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PersonnelActionTypeSetupRoles,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERSONNEL_ACTION_TYPE_ID: OrderableEdmTypeField<
      PersonnelActionTypeSetupRoles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROLE_NAME: OrderableEdmTypeField<
      PersonnelActionTypeSetupRoles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CREATE_ACTION: EnumField<
      PersonnelActionTypeSetupRoles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<PersonnelActionTypeSetupRoles<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link personnelActionTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_ACTION_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'PersonnelActionTypeId',
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
         * Static representation of the {@link createAction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_ACTION: fieldBuilder.buildEnumField('CreateAction', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PersonnelActionTypeSetupRoles)
      };
    }

    return this._schema;
  }
}
