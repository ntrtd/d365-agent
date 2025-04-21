/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProspectiveVendorRegistrationProcurementCategories } from './ProspectiveVendorRegistrationProcurementCategories';
import { ProspectiveVendorRegistrationProcurementCategoriesRequestBuilder } from './ProspectiveVendorRegistrationProcurementCategoriesRequestBuilder';
import { VendCategoryStatus } from './VendCategoryStatus';
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
export class ProspectiveVendorRegistrationProcurementCategoriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ProspectiveVendorRegistrationProcurementCategories<DeSerializersT>,
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
  ): ProspectiveVendorRegistrationProcurementCategoriesApi<DeSerializersT> {
    return new ProspectiveVendorRegistrationProcurementCategoriesApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProspectiveVendorRegistrationProcurementCategories;

  requestBuilder(): ProspectiveVendorRegistrationProcurementCategoriesRequestBuilder<DeSerializersT> {
    return new ProspectiveVendorRegistrationProcurementCategoriesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProspectiveVendorRegistrationProcurementCategories<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProspectiveVendorRegistrationProcurementCategories<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProspectiveVendorRegistrationProcurementCategories<DeSerializersT>,
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
    typeof ProspectiveVendorRegistrationProcurementCategories,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProspectiveVendorRegistrationProcurementCategories,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProspectiveVendorRegistrationProcurementCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VENDOR_REGISTRATION_ID: OrderableEdmTypeField<
      ProspectiveVendorRegistrationProcurementCategories<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CATEGORY_NAME: OrderableEdmTypeField<
      ProspectiveVendorRegistrationProcurementCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CATEGORY_HIERARCHY_NAME: OrderableEdmTypeField<
      ProspectiveVendorRegistrationProcurementCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONTACT_PERSON_EMAIL_ADDRESS: OrderableEdmTypeField<
      ProspectiveVendorRegistrationProcurementCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY_STATUS: EnumField<
      ProspectiveVendorRegistrationProcurementCategories<DeSerializers>,
      DeSerializersT,
      VendCategoryStatus,
      true,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      ProspectiveVendorRegistrationProcurementCategories<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      ProspectiveVendorRegistrationProcurementCategories<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      ProspectiveVendorRegistrationProcurementCategories<DeSerializers>
    >;
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
         * Static representation of the {@link vendorRegistrationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_REGISTRATION_ID: fieldBuilder.buildEdmTypeField(
          'VendorRegistrationId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link categoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'CategoryName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link categoryHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'CategoryHierarchyName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link contactPersonEmailAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_EMAIL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'ContactPersonEmailAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link categoryStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_STATUS: fieldBuilder.buildEnumField(
          'CategoryStatus',
          VendCategoryStatus,
          true
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          ProspectiveVendorRegistrationProcurementCategories
        )
      };
    }

    return this._schema;
  }
}
