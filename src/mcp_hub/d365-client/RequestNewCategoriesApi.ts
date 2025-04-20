/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestNewCategories } from './RequestNewCategories';
import { RequestNewCategoriesRequestBuilder } from './RequestNewCategoriesRequestBuilder';
import { VendorRequestNewCategoriesApi } from './VendorRequestNewCategoriesApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class RequestNewCategoriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RequestNewCategories<DeSerializersT>, DeSerializersT>
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
  ): RequestNewCategoriesApi<DeSerializersT> {
    return new RequestNewCategoriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link vendorRequestNewCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_REQUEST_NEW_CATEGORY: OneToOneLink<
      RequestNewCategories<DeSerializersT>,
      DeSerializersT,
      VendorRequestNewCategoriesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [VendorRequestNewCategoriesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      VENDOR_REQUEST_NEW_CATEGORY: new OneToOneLink(
        'VendorRequestNewCategory',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = RequestNewCategories;

  requestBuilder(): RequestNewCategoriesRequestBuilder<DeSerializersT> {
    return new RequestNewCategoriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RequestNewCategories<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RequestNewCategories<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RequestNewCategories<DeSerializersT>,
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
    typeof RequestNewCategories,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RequestNewCategories,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RequestNewCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VEND_REQUEST_REQUEST_ID: OrderableEdmTypeField<
      RequestNewCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ECO_RES_CATEGORY_NAME: OrderableEdmTypeField<
      RequestNewCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ECO_RES_CATEGORY_HIERARCHY_NAME: OrderableEdmTypeField<
      RequestNewCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OM_OPERATING_UNIT_PARTY_NUMBER: OrderableEdmTypeField<
      RequestNewCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VEND_REQUEST: OrderableEdmTypeField<
      RequestNewCategories<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      RequestNewCategories<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    OPERATING_UNIT: OrderableEdmTypeField<
      RequestNewCategories<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CATEGORY: OrderableEdmTypeField<
      RequestNewCategories<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ECO_RES_CATEGORY_CATEGORY_HIERARCHY: OrderableEdmTypeField<
      RequestNewCategories<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      RequestNewCategories<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorRequestNewCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_REQUEST_NEW_CATEGORY: OneToOneLink<
      RequestNewCategories<DeSerializersT>,
      DeSerializersT,
      VendorRequestNewCategoriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RequestNewCategories<DeSerializers>>;
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
         * Static representation of the {@link vendRequestRequestId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_REQUEST_REQUEST_ID: fieldBuilder.buildEdmTypeField(
          'VendRequest_RequestId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ecoResCategoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ECO_RES_CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'EcoResCategory_Name',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ecoResCategoryHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ECO_RES_CATEGORY_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'EcoResCategoryHierarchy_Name',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link omOperatingUnitPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OM_OPERATING_UNIT_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'OMOperatingUnit_PartyNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link vendRequest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_REQUEST: fieldBuilder.buildEdmTypeField(
          'VendRequest',
          'Edm.Int64',
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
         * Static representation of the {@link operatingUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATING_UNIT: fieldBuilder.buildEdmTypeField(
          'OperatingUnit',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link category} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY: fieldBuilder.buildEdmTypeField(
          'Category',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link ecoResCategoryCategoryHierarchy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ECO_RES_CATEGORY_CATEGORY_HIERARCHY: fieldBuilder.buildEdmTypeField(
          'EcoResCategory_CategoryHierarchy',
          'Edm.Int64',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RequestNewCategories)
      };
    }

    return this._schema;
  }
}
