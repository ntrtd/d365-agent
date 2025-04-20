/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductsV2 } from './ProductsV2';
import { ProductsV2RequestBuilder } from './ProductsV2RequestBuilder';
import { ProductAttributeValuesV3Api } from './ProductAttributeValuesV3Api';
import { PhysicalProductDimensionDetailsApi } from './PhysicalProductDimensionDetailsApi';
import { EngineeringChangeRequestDependenciesApi } from './EngineeringChangeRequestDependenciesApi';
import { EngineeringChangeOrderDependenciesApi } from './EngineeringChangeOrderDependenciesApi';
import { EngineeringProductVersionsApi } from './EngineeringProductVersionsApi';
import { TrackingDimensionGroupsApi } from './TrackingDimensionGroupsApi';
import { ProductStyleGroupsApi } from './ProductStyleGroupsApi';
import { ProductColorGroupsApi } from './ProductColorGroupsApi';
import { ProductSizeGroupsApi } from './ProductSizeGroupsApi';
import { ProductReleasePoliciesApi } from './ProductReleasePoliciesApi';
import { EngineeringProductCategoryDetailsApi } from './EngineeringProductCategoryDetailsApi';
import { ProductReadinessPoliciesApi } from './ProductReadinessPoliciesApi';
import { ProductAttributeValuesV2Api } from './ProductAttributeValuesV2Api';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { DvReleasedProductsApi } from './DvReleasedProductsApi';
import { EngineeringChangeOrderProductWhereUsedAnalysesApi } from './EngineeringChangeOrderProductWhereUsedAnalysesApi';
import { ProductCategoryAssignmentsApi } from './ProductCategoryAssignmentsApi';
import { EngineeringChangeOrderProductReleasesApi } from './EngineeringChangeOrderProductReleasesApi';
import { ProductDocumentAttachmentsApi } from './ProductDocumentAttachmentsApi';
import { PlannedOrdersApi } from './PlannedOrdersApi';
import { EcoResVariantConfigurationTechnologyType } from './EcoResVariantConfigurationTechnologyType';
import { WarrantyDurationTimeUnit } from './WarrantyDurationTimeUnit';
import { EcoResProductSubtype } from './EcoResProductSubtype';
import { EcoResProductServiceType } from './EcoResProductServiceType';
import { NoYes } from './NoYes';
import { EcoResProductType } from './EcoResProductType';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ProductsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductsV2<DeSerializersT>, DeSerializersT>
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
  ): ProductsV2Api<DeSerializersT> {
    return new ProductsV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link productAttributeValuesV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_ATTRIBUTE_VALUES_V_3: OneToManyLink<
      ProductsV2<DeSerializersT>,
      DeSerializersT,
      ProductAttributeValuesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link physicalProductDimensionDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PHYSICAL_PRODUCT_DIMENSION_DETAILS: OneToManyLink<
      ProductsV2<DeSerializersT>,
      DeSerializersT,
      PhysicalProductDimensionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeRequestDependencies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_REQUEST_DEPENDENCIES: OneToManyLink<
      ProductsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeRequestDependenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderDependencies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_DEPENDENCIES: OneToManyLink<
      ProductsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderDependenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringProductVersions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_PRODUCT_VERSIONS: OneToManyLink<
      ProductsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringProductVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link trackingDimensionGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRACKING_DIMENSION_GROUP: OneToOneLink<
      ProductsV2<DeSerializersT>,
      DeSerializersT,
      TrackingDimensionGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyleGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE_GROUP: OneToOneLink<
      ProductsV2<DeSerializersT>,
      DeSerializersT,
      ProductStyleGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColorGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR_GROUP: OneToOneLink<
      ProductsV2<DeSerializersT>,
      DeSerializersT,
      ProductColorGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSizeGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE_GROUP: OneToOneLink<
      ProductsV2<DeSerializersT>,
      DeSerializersT,
      ProductSizeGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productReleasePolicy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_RELEASE_POLICY: OneToOneLink<
      ProductsV2<DeSerializersT>,
      DeSerializersT,
      ProductReleasePoliciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productCategoryDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_CATEGORY_DETAILS: OneToOneLink<
      ProductsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringProductCategoryDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productReadinessPolicy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_READINESS_POLICY: OneToOneLink<
      ProductsV2<DeSerializersT>,
      DeSerializersT,
      ProductReadinessPoliciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productAttributeValues} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_ATTRIBUTE_VALUES: OneToManyLink<
      ProductsV2<DeSerializersT>,
      DeSerializersT,
      ProductAttributeValuesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS: OneToManyLink<
      ProductsV2<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link dvReleasedProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DV_RELEASED_PRODUCTS: OneToManyLink<
      ProductsV2<DeSerializersT>,
      DeSerializersT,
      DvReleasedProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductWhereUsedAnalyses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_WHERE_USED_ANALYSES: OneToManyLink<
      ProductsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductWhereUsedAnalysesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productCategoryAssignments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_CATEGORY_ASSIGNMENTS: OneToManyLink<
      ProductsV2<DeSerializersT>,
      DeSerializersT,
      ProductCategoryAssignmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductReleases} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_RELEASES: OneToManyLink<
      ProductsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductReleasesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productDocumentAttachments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_DOCUMENT_ATTACHMENTS: OneToManyLink<
      ProductsV2<DeSerializersT>,
      DeSerializersT,
      ProductDocumentAttachmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link plannedOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PLANNED_ORDERS: OneToManyLink<
      ProductsV2<DeSerializersT>,
      DeSerializersT,
      PlannedOrdersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductAttributeValuesV3Api<DeSerializersT>,
      PhysicalProductDimensionDetailsApi<DeSerializersT>,
      EngineeringChangeRequestDependenciesApi<DeSerializersT>,
      EngineeringChangeOrderDependenciesApi<DeSerializersT>,
      EngineeringProductVersionsApi<DeSerializersT>,
      TrackingDimensionGroupsApi<DeSerializersT>,
      ProductStyleGroupsApi<DeSerializersT>,
      ProductColorGroupsApi<DeSerializersT>,
      ProductSizeGroupsApi<DeSerializersT>,
      ProductReleasePoliciesApi<DeSerializersT>,
      EngineeringProductCategoryDetailsApi<DeSerializersT>,
      ProductReadinessPoliciesApi<DeSerializersT>,
      ProductAttributeValuesV2Api<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>,
      DvReleasedProductsApi<DeSerializersT>,
      EngineeringChangeOrderProductWhereUsedAnalysesApi<DeSerializersT>,
      ProductCategoryAssignmentsApi<DeSerializersT>,
      EngineeringChangeOrderProductReleasesApi<DeSerializersT>,
      ProductDocumentAttachmentsApi<DeSerializersT>,
      PlannedOrdersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_ATTRIBUTE_VALUES_V_3: new OneToManyLink(
        'ProductAttributeValuesV3',
        this,
        linkedApis[0]
      ),
      PHYSICAL_PRODUCT_DIMENSION_DETAILS: new OneToManyLink(
        'PhysicalProductDimensionDetails',
        this,
        linkedApis[1]
      ),
      ENGINEERING_CHANGE_REQUEST_DEPENDENCIES: new OneToManyLink(
        'EngineeringChangeRequestDependencies',
        this,
        linkedApis[2]
      ),
      ENGINEERING_CHANGE_ORDER_DEPENDENCIES: new OneToManyLink(
        'EngineeringChangeOrderDependencies',
        this,
        linkedApis[3]
      ),
      ENGINEERING_PRODUCT_VERSIONS: new OneToManyLink(
        'EngineeringProductVersions',
        this,
        linkedApis[4]
      ),
      TRACKING_DIMENSION_GROUP: new OneToOneLink(
        'TrackingDimensionGroup',
        this,
        linkedApis[5]
      ),
      PRODUCT_STYLE_GROUP: new OneToOneLink(
        'ProductStyleGroup',
        this,
        linkedApis[6]
      ),
      PRODUCT_COLOR_GROUP: new OneToOneLink(
        'ProductColorGroup',
        this,
        linkedApis[7]
      ),
      PRODUCT_SIZE_GROUP: new OneToOneLink(
        'ProductSizeGroup',
        this,
        linkedApis[8]
      ),
      PRODUCT_RELEASE_POLICY: new OneToOneLink(
        'ProductReleasePolicy',
        this,
        linkedApis[9]
      ),
      PRODUCT_CATEGORY_DETAILS: new OneToOneLink(
        'ProductCategoryDetails',
        this,
        linkedApis[10]
      ),
      PRODUCT_READINESS_POLICY: new OneToOneLink(
        'ProductReadinessPolicy',
        this,
        linkedApis[11]
      ),
      PRODUCT_ATTRIBUTE_VALUES: new OneToManyLink(
        'ProductAttributeValues',
        this,
        linkedApis[12]
      ),
      RELEASED_PRODUCTS: new OneToManyLink(
        'ReleasedProducts',
        this,
        linkedApis[13]
      ),
      DV_RELEASED_PRODUCTS: new OneToManyLink(
        'DVReleasedProducts',
        this,
        linkedApis[14]
      ),
      ENGINEERING_CHANGE_ORDER_PRODUCT_WHERE_USED_ANALYSES: new OneToManyLink(
        'EngineeringChangeOrderProductWhereUsedAnalyses',
        this,
        linkedApis[15]
      ),
      PRODUCT_CATEGORY_ASSIGNMENTS: new OneToManyLink(
        'ProductCategoryAssignments',
        this,
        linkedApis[16]
      ),
      ENGINEERING_CHANGE_ORDER_PRODUCT_RELEASES: new OneToManyLink(
        'EngineeringChangeOrderProductReleases',
        this,
        linkedApis[17]
      ),
      PRODUCT_DOCUMENT_ATTACHMENTS: new OneToManyLink(
        'ProductDocumentAttachments',
        this,
        linkedApis[18]
      ),
      PLANNED_ORDERS: new OneToManyLink('PlannedOrders', this, linkedApis[19])
    };
    return this;
  }

  entityConstructor = ProductsV2;

  requestBuilder(): ProductsV2RequestBuilder<DeSerializersT> {
    return new ProductsV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductsV2<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProductsV2<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ProductsV2, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ProductsV2, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_NUMBER: OrderableEdmTypeField<
      ProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_SEARCH_NAME: OrderableEdmTypeField<
      ProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_STYLE_GROUP_ID: OrderableEdmTypeField<
      ProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_VARIANT_NAME_NOMENCLATURE_NAME: OrderableEdmTypeField<
      ProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_DESCRIPTION: OrderableEdmTypeField<
      ProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VARIANT_CONFIGURATION_TECHNOLOGY: EnumField<
      ProductsV2<DeSerializers>,
      DeSerializersT,
      EcoResVariantConfigurationTechnologyType,
      true,
      true
    >;
    WARRANTY_DURATION_TIME_UNIT: EnumField<
      ProductsV2<DeSerializers>,
      DeSerializersT,
      WarrantyDurationTimeUnit,
      true,
      true
    >;
    PRODUCT_VARIANT_NUMBER_NOMENCLATURE_NAME: OrderableEdmTypeField<
      ProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_SUB_TYPE: EnumField<
      ProductsV2<DeSerializers>,
      DeSerializersT,
      EcoResProductSubtype,
      true,
      true
    >;
    PRODUCT_NAME: OrderableEdmTypeField<
      ProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_TYPE: EnumField<
      ProductsV2<DeSerializers>,
      DeSerializersT,
      EcoResProductServiceType,
      true,
      true
    >;
    RETAIL_PRODUCT_CATEGORY_NAME: OrderableEdmTypeField<
      ProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_COLOR_GROUP_ID: OrderableEdmTypeField<
      ProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARE_IDENTICAL_CONFIGURATIONS_ALLOWED: EnumField<
      ProductsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_TYPE: EnumField<
      ProductsV2<DeSerializers>,
      DeSerializersT,
      EcoResProductType,
      true,
      true
    >;
    IS_PRODUCT_KIT: EnumField<
      ProductsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WARRANTY_DURATION_TIME: OrderableEdmTypeField<
      ProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_CATCH_WEIGHT_PRODUCT: EnumField<
      ProductsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STCC_CODE: OrderableEdmTypeField<
      ProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_AUTOMATIC_VARIANT_GENERATION_ENABLED: EnumField<
      ProductsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PRODUCT_VARIANT_UNIT_CONVERSION_ENABLED: EnumField<
      ProductsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NMFC_CODE: OrderableEdmTypeField<
      ProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HARMONIZED_SYSTEM_CODE: OrderableEdmTypeField<
      ProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRACKING_DIMENSION_GROUP_NAME: OrderableEdmTypeField<
      ProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STORAGE_DIMENSION_GROUP_NAME: OrderableEdmTypeField<
      ProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_DIMENSION_GROUP_NAME: OrderableEdmTypeField<
      ProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_SIZE_GROUP_ID: OrderableEdmTypeField<
      ProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENG_CHG_PRODUCT_OWNER_ID: OrderableEdmTypeField<
      ProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENG_CHG_PRODUCT_READINESS_POLICY_NAME: OrderableEdmTypeField<
      ProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENG_CHG_PRODUCT_CATEGORY_DETAILS_NAME: OrderableEdmTypeField<
      ProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENG_CHG_PRODUCT_RELEASE_POLICY_NAME: OrderableEdmTypeField<
      ProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productAttributeValuesV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_ATTRIBUTE_VALUES_V_3: OneToManyLink<
      ProductsV2<DeSerializersT>,
      DeSerializersT,
      ProductAttributeValuesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link physicalProductDimensionDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PHYSICAL_PRODUCT_DIMENSION_DETAILS: OneToManyLink<
      ProductsV2<DeSerializersT>,
      DeSerializersT,
      PhysicalProductDimensionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeRequestDependencies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_REQUEST_DEPENDENCIES: OneToManyLink<
      ProductsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeRequestDependenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderDependencies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_DEPENDENCIES: OneToManyLink<
      ProductsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderDependenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringProductVersions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_PRODUCT_VERSIONS: OneToManyLink<
      ProductsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringProductVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link trackingDimensionGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRACKING_DIMENSION_GROUP: OneToOneLink<
      ProductsV2<DeSerializersT>,
      DeSerializersT,
      TrackingDimensionGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyleGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE_GROUP: OneToOneLink<
      ProductsV2<DeSerializersT>,
      DeSerializersT,
      ProductStyleGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColorGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR_GROUP: OneToOneLink<
      ProductsV2<DeSerializersT>,
      DeSerializersT,
      ProductColorGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSizeGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE_GROUP: OneToOneLink<
      ProductsV2<DeSerializersT>,
      DeSerializersT,
      ProductSizeGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productReleasePolicy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_RELEASE_POLICY: OneToOneLink<
      ProductsV2<DeSerializersT>,
      DeSerializersT,
      ProductReleasePoliciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productCategoryDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_CATEGORY_DETAILS: OneToOneLink<
      ProductsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringProductCategoryDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productReadinessPolicy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_READINESS_POLICY: OneToOneLink<
      ProductsV2<DeSerializersT>,
      DeSerializersT,
      ProductReadinessPoliciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productAttributeValues} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_ATTRIBUTE_VALUES: OneToManyLink<
      ProductsV2<DeSerializersT>,
      DeSerializersT,
      ProductAttributeValuesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS: OneToManyLink<
      ProductsV2<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link dvReleasedProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DV_RELEASED_PRODUCTS: OneToManyLink<
      ProductsV2<DeSerializersT>,
      DeSerializersT,
      DvReleasedProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductWhereUsedAnalyses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_WHERE_USED_ANALYSES: OneToManyLink<
      ProductsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductWhereUsedAnalysesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productCategoryAssignments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_CATEGORY_ASSIGNMENTS: OneToManyLink<
      ProductsV2<DeSerializersT>,
      DeSerializersT,
      ProductCategoryAssignmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductReleases} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_RELEASES: OneToManyLink<
      ProductsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductReleasesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productDocumentAttachments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_DOCUMENT_ATTACHMENTS: OneToManyLink<
      ProductsV2<DeSerializersT>,
      DeSerializersT,
      ProductDocumentAttachmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link plannedOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PLANNED_ORDERS: OneToManyLink<
      ProductsV2<DeSerializersT>,
      DeSerializersT,
      PlannedOrdersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductsV2<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link productNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productSearchName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SEARCH_NAME: fieldBuilder.buildEdmTypeField(
          'ProductSearchName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productStyleGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productVariantNameNomenclatureName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VARIANT_NAME_NOMENCLATURE_NAME: fieldBuilder.buildEdmTypeField(
          'ProductVariantNameNomenclatureName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ProductDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link variantConfigurationTechnology} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIANT_CONFIGURATION_TECHNOLOGY: fieldBuilder.buildEnumField(
          'VariantConfigurationTechnology',
          EcoResVariantConfigurationTechnologyType,
          true
        ),
        /**
         * Static representation of the {@link warrantyDurationTimeUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTY_DURATION_TIME_UNIT: fieldBuilder.buildEnumField(
          'WarrantyDurationTimeUnit',
          WarrantyDurationTimeUnit,
          true
        ),
        /**
         * Static representation of the {@link productVariantNumberNomenclatureName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VARIANT_NUMBER_NOMENCLATURE_NAME:
          fieldBuilder.buildEdmTypeField(
            'ProductVariantNumberNomenclatureName',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link productSubType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SUB_TYPE: fieldBuilder.buildEnumField(
          'ProductSubType',
          EcoResProductSubtype,
          true
        ),
        /**
         * Static representation of the {@link productName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NAME: fieldBuilder.buildEdmTypeField(
          'ProductName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_TYPE: fieldBuilder.buildEnumField(
          'ServiceType',
          EcoResProductServiceType,
          true
        ),
        /**
         * Static representation of the {@link retailProductCategoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_PRODUCT_CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'RetailProductCategoryName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productColorGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link areIdenticalConfigurationsAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_IDENTICAL_CONFIGURATIONS_ALLOWED: fieldBuilder.buildEnumField(
          'AreIdenticalConfigurationsAllowed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link productType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_TYPE: fieldBuilder.buildEnumField(
          'ProductType',
          EcoResProductType,
          true
        ),
        /**
         * Static representation of the {@link isProductKit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRODUCT_KIT: fieldBuilder.buildEnumField(
          'IsProductKit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link warrantyDurationTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTY_DURATION_TIME: fieldBuilder.buildEdmTypeField(
          'WarrantyDurationTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isCatchWeightProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CATCH_WEIGHT_PRODUCT: fieldBuilder.buildEnumField(
          'IsCatchWeightProduct',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link stccCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STCC_CODE: fieldBuilder.buildEdmTypeField(
          'STCCCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isAutomaticVariantGenerationEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_AUTOMATIC_VARIANT_GENERATION_ENABLED: fieldBuilder.buildEnumField(
          'IsAutomaticVariantGenerationEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isProductVariantUnitConversionEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRODUCT_VARIANT_UNIT_CONVERSION_ENABLED: fieldBuilder.buildEnumField(
          'IsProductVariantUnitConversionEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link nmfcCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NMFC_CODE: fieldBuilder.buildEdmTypeField(
          'NMFCCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link harmonizedSystemCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HARMONIZED_SYSTEM_CODE: fieldBuilder.buildEdmTypeField(
          'HarmonizedSystemCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link trackingDimensionGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRACKING_DIMENSION_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'TrackingDimensionGroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link storageDimensionGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORAGE_DIMENSION_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'StorageDimensionGroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productDimensionGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_DIMENSION_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'ProductDimensionGroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productSizeGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link engChgProductOwnerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENG_CHG_PRODUCT_OWNER_ID: fieldBuilder.buildEdmTypeField(
          'EngChgProductOwnerId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link engChgProductReadinessPolicyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENG_CHG_PRODUCT_READINESS_POLICY_NAME: fieldBuilder.buildEdmTypeField(
          'EngChgProductReadinessPolicyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link engChgProductCategoryDetailsName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENG_CHG_PRODUCT_CATEGORY_DETAILS_NAME: fieldBuilder.buildEdmTypeField(
          'EngChgProductCategoryDetailsName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link engChgProductReleasePolicyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENG_CHG_PRODUCT_RELEASE_POLICY_NAME: fieldBuilder.buildEdmTypeField(
          'EngChgProductReleasePolicyName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductsV2)
      };
    }

    return this._schema;
  }
}
