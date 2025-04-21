/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendorRequestNewCategories } from './VendorRequestNewCategories';
import { VendorRequestNewCategoriesRequestBuilder } from './VendorRequestNewCategoriesRequestBuilder';
import { RequestNewCategoriesApi } from './RequestNewCategoriesApi';
import { VendVendorRequestNewCategoryOriginType } from './VendVendorRequestNewCategoryOriginType';
import { NoYes } from './NoYes';
import { VendVendorRequestEntityType } from './VendVendorRequestEntityType';
import { VendVendorRequestStatus } from './VendVendorRequestStatus';
import { VendRequestWorkflowState } from './VendRequestWorkflowState';
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
  EnumField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class VendorRequestNewCategoriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<VendorRequestNewCategories<DeSerializersT>, DeSerializersT>
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
  ): VendorRequestNewCategoriesApi<DeSerializersT> {
    return new VendorRequestNewCategoriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link requestNewCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REQUEST_NEW_CATEGORY: OneToManyLink<
      VendorRequestNewCategories<DeSerializersT>,
      DeSerializersT,
      RequestNewCategoriesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [RequestNewCategoriesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      REQUEST_NEW_CATEGORY: new OneToManyLink(
        'RequestNewCategory',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = VendorRequestNewCategories;

  requestBuilder(): VendorRequestNewCategoriesRequestBuilder<DeSerializersT> {
    return new VendorRequestNewCategoriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendorRequestNewCategories<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VendorRequestNewCategories<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendorRequestNewCategories<DeSerializersT>,
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
    typeof VendorRequestNewCategories,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendorRequestNewCategories,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendorRequestNewCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQUEST_ID: OrderableEdmTypeField<
      VendorRequestNewCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VEND_REQUEST_ORIGIN_TYPE: EnumField<
      VendorRequestNewCategories<DeSerializers>,
      DeSerializersT,
      VendVendorRequestNewCategoryOriginType,
      true,
      true
    >;
    ACCOUNT_NUM: OrderableEdmTypeField<
      VendorRequestNewCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_RESOLVED: OrderableEdmTypeField<
      VendorRequestNewCategories<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INSTANCE_RELATION_TYPE: OrderableEdmTypeField<
      VendorRequestNewCategories<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    VENDOR_PORTAL_ACCESS_ALLOWED: EnumField<
      VendorRequestNewCategories<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DATE_SUBMITTED: OrderableEdmTypeField<
      VendorRequestNewCategories<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REQUEST_ENTITY_TYPE: EnumField<
      VendorRequestNewCategories<DeSerializers>,
      DeSerializersT,
      VendVendorRequestEntityType,
      true,
      true
    >;
    COMPLETED_DATE_TIME: OrderableEdmTypeField<
      VendorRequestNewCategories<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REQUEST_STATUS: EnumField<
      VendorRequestNewCategories<DeSerializers>,
      DeSerializersT,
      VendVendorRequestStatus,
      true,
      true
    >;
    VEND_REQUEST_WORKFLOW_STATE: EnumField<
      VendorRequestNewCategories<DeSerializers>,
      DeSerializersT,
      VendRequestWorkflowState,
      true,
      true
    >;
    SPONSORED_BY: OrderableEdmTypeField<
      VendorRequestNewCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_NAME: OrderableEdmTypeField<
      VendorRequestNewCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link requestNewCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REQUEST_NEW_CATEGORY: OneToManyLink<
      VendorRequestNewCategories<DeSerializersT>,
      DeSerializersT,
      RequestNewCategoriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<VendorRequestNewCategories<DeSerializers>>;
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
         * Static representation of the {@link requestId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_ID: fieldBuilder.buildEdmTypeField(
          'RequestId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link vendRequestOriginType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_REQUEST_ORIGIN_TYPE: fieldBuilder.buildEnumField(
          'VendRequestOriginType',
          VendVendorRequestNewCategoryOriginType,
          true
        ),
        /**
         * Static representation of the {@link accountNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_NUM: fieldBuilder.buildEdmTypeField(
          'AccountNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dateResolved} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_RESOLVED: fieldBuilder.buildEdmTypeField(
          'DateResolved',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link instanceRelationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTANCE_RELATION_TYPE: fieldBuilder.buildEdmTypeField(
          'InstanceRelationType',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link vendorPortalAccessAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_PORTAL_ACCESS_ALLOWED: fieldBuilder.buildEnumField(
          'VendorPortalAccessAllowed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link dateSubmitted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_SUBMITTED: fieldBuilder.buildEdmTypeField(
          'DateSubmitted',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link requestEntityType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_ENTITY_TYPE: fieldBuilder.buildEnumField(
          'RequestEntityType',
          VendVendorRequestEntityType,
          true
        ),
        /**
         * Static representation of the {@link completedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPLETED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'CompletedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link requestStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_STATUS: fieldBuilder.buildEnumField(
          'RequestStatus',
          VendVendorRequestStatus,
          true
        ),
        /**
         * Static representation of the {@link vendRequestWorkflowState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_REQUEST_WORKFLOW_STATE: fieldBuilder.buildEnumField(
          'VendRequestWorkflowState',
          VendRequestWorkflowState,
          true
        ),
        /**
         * Static representation of the {@link sponsoredBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPONSORED_BY: fieldBuilder.buildEdmTypeField(
          'SponsoredBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_NAME: fieldBuilder.buildEdmTypeField(
          'VendorName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendorRequestNewCategories)
      };
    }

    return this._schema;
  }
}
