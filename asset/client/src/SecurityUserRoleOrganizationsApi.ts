/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SecurityUserRoleOrganizations } from './SecurityUserRoleOrganizations';
import { SecurityUserRoleOrganizationsRequestBuilder } from './SecurityUserRoleOrganizationsRequestBuilder';
import { OmInternalOrganizationType } from './OmInternalOrganizationType';
import { OmOperatingUnitType } from './OmOperatingUnitType';
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
export class SecurityUserRoleOrganizationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SecurityUserRoleOrganizations<DeSerializersT>, DeSerializersT>
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
  ): SecurityUserRoleOrganizationsApi<DeSerializersT> {
    return new SecurityUserRoleOrganizationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SecurityUserRoleOrganizations;

  requestBuilder(): SecurityUserRoleOrganizationsRequestBuilder<DeSerializersT> {
    return new SecurityUserRoleOrganizationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SecurityUserRoleOrganizations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SecurityUserRoleOrganizations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SecurityUserRoleOrganizations<DeSerializersT>,
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
    typeof SecurityUserRoleOrganizations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SecurityUserRoleOrganizations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    USER_ID: OrderableEdmTypeField<
      SecurityUserRoleOrganizations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SECURITY_ROLE_IDENTIFIER: OrderableEdmTypeField<
      SecurityUserRoleOrganizations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORGANIZATION_TYPE: EnumField<
      SecurityUserRoleOrganizations<DeSerializers>,
      DeSerializersT,
      OmInternalOrganizationType,
      true,
      true
    >;
    ORGANIZATION_ID: OrderableEdmTypeField<
      SecurityUserRoleOrganizations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OPERATING_UNIT_TYPE: EnumField<
      SecurityUserRoleOrganizations<DeSerializers>,
      DeSerializersT,
      OmOperatingUnitType,
      true,
      true
    >;
    HIERARCHY_TYPE: OrderableEdmTypeField<
      SecurityUserRoleOrganizations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<SecurityUserRoleOrganizations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link userId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_ID: fieldBuilder.buildEdmTypeField('UserId', 'Edm.String', false),
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
         * Static representation of the {@link organizationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_TYPE: fieldBuilder.buildEnumField(
          'OrganizationType',
          OmInternalOrganizationType,
          true
        ),
        /**
         * Static representation of the {@link organizationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_ID: fieldBuilder.buildEdmTypeField(
          'OrganizationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link operatingUnitType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATING_UNIT_TYPE: fieldBuilder.buildEnumField(
          'OperatingUnitType',
          OmOperatingUnitType,
          true
        ),
        /**
         * Static representation of the {@link hierarchyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIERARCHY_TYPE: fieldBuilder.buildEdmTypeField(
          'HierarchyType',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SecurityUserRoleOrganizations)
      };
    }

    return this._schema;
  }
}
