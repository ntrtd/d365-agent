/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailDefaultReportingHierarchyOrganizations } from './RetailDefaultReportingHierarchyOrganizations';
import { RetailDefaultReportingHierarchyOrganizationsRequestBuilder } from './RetailDefaultReportingHierarchyOrganizationsRequestBuilder';
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
export class RetailDefaultReportingHierarchyOrganizationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RetailDefaultReportingHierarchyOrganizations<DeSerializersT>,
      DeSerializersT
    >
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
  ): RetailDefaultReportingHierarchyOrganizationsApi<DeSerializersT> {
    return new RetailDefaultReportingHierarchyOrganizationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailDefaultReportingHierarchyOrganizations;

  requestBuilder(): RetailDefaultReportingHierarchyOrganizationsRequestBuilder<DeSerializersT> {
    return new RetailDefaultReportingHierarchyOrganizationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailDefaultReportingHierarchyOrganizations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailDefaultReportingHierarchyOrganizations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailDefaultReportingHierarchyOrganizations<DeSerializersT>,
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
    typeof RetailDefaultReportingHierarchyOrganizations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailDefaultReportingHierarchyOrganizations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ORGANIZATION_NUMBER: OrderableEdmTypeField<
      RetailDefaultReportingHierarchyOrganizations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      RetailDefaultReportingHierarchyOrganizations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      RetailDefaultReportingHierarchyOrganizations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ORGANIZATION_NAME: OrderableEdmTypeField<
      RetailDefaultReportingHierarchyOrganizations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_RECORD_ID: OrderableEdmTypeField<
      RetailDefaultReportingHierarchyOrganizations<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PARENT_ORGANIZATION_NUMBER: OrderableEdmTypeField<
      RetailDefaultReportingHierarchyOrganizations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENT_ORGANIZATION_RECORD_ID: OrderableEdmTypeField<
      RetailDefaultReportingHierarchyOrganizations<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PARENT_ORGANIZATION_NAME: OrderableEdmTypeField<
      RetailDefaultReportingHierarchyOrganizations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      RetailDefaultReportingHierarchyOrganizations<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link organizationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'OrganizationNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link organizationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_NAME: fieldBuilder.buildEdmTypeField(
          'OrganizationName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link organizationRecordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_RECORD_ID: fieldBuilder.buildEdmTypeField(
          'OrganizationRecordId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link parentOrganizationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_ORGANIZATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'ParentOrganizationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parentOrganizationRecordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_ORGANIZATION_RECORD_ID: fieldBuilder.buildEdmTypeField(
          'ParentOrganizationRecordId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link parentOrganizationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_ORGANIZATION_NAME: fieldBuilder.buildEdmTypeField(
          'ParentOrganizationName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          RetailDefaultReportingHierarchyOrganizations
        )
      };
    }

    return this._schema;
  }
}
