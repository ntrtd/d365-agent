/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EngineeringProductCategoryDetails } from './EngineeringProductCategoryDetails';
import { EngineeringProductCategoryDetailsRequestBuilder } from './EngineeringProductCategoryDetailsRequestBuilder';
import { ProductReadinessPoliciesApi } from './ProductReadinessPoliciesApi';
import { EngineeringOrganizationsApi } from './EngineeringOrganizationsApi';
import { ProductLifecycleStatesApi } from './ProductLifecycleStatesApi';
import { ProductReleasePoliciesApi } from './ProductReleasePoliciesApi';
import { EngineeringProductVersionNumberingRulesApi } from './EngineeringProductVersionNumberingRulesApi';
import { CategoriesApi } from './CategoriesApi';
import { EngineeringChangeOrderProductsV3Api } from './EngineeringChangeOrderProductsV3Api';
import { EngineeringChangeOrderProductsV2Api } from './EngineeringChangeOrderProductsV2Api';
import { ProductsV2Api } from './ProductsV2Api';
import { EngineeringChangeOrderProductsApi } from './EngineeringChangeOrderProductsApi';
import { EcoResProductType } from './EcoResProductType';
import { EcoResProductSubtype } from './EcoResProductSubtype';
import { PmfProductType } from './PmfProductType';
import { NoYes } from './NoYes';
import { EcoResVariantConfigurationTechnologyType } from './EcoResVariantConfigurationTechnologyType';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class EngineeringProductCategoryDetailsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<EngineeringProductCategoryDetails<DeSerializersT>, DeSerializersT>
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
  ): EngineeringProductCategoryDetailsApi<DeSerializersT> {
    return new EngineeringProductCategoryDetailsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link productReadinessPolicy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_READINESS_POLICY: OneToOneLink<
      EngineeringProductCategoryDetails<DeSerializersT>,
      DeSerializersT,
      ProductReadinessPoliciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringOrganization} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_ORGANIZATION: OneToOneLink<
      EngineeringProductCategoryDetails<DeSerializersT>,
      DeSerializersT,
      EngineeringOrganizationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link createdProductLifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CREATED_PRODUCT_LIFECYCLE_STATE: OneToOneLink<
      EngineeringProductCategoryDetails<DeSerializersT>,
      DeSerializersT,
      ProductLifecycleStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productReleasePolicy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_RELEASE_POLICY: OneToOneLink<
      EngineeringProductCategoryDetails<DeSerializersT>,
      DeSerializersT,
      ProductReleasePoliciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link versionNumberingRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VERSION_NUMBERING_RULE: OneToOneLink<
      EngineeringProductCategoryDetails<DeSerializersT>,
      DeSerializersT,
      EngineeringProductVersionNumberingRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link category} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CATEGORY: OneToOneLink<
      EngineeringProductCategoryDetails<DeSerializersT>,
      DeSerializersT,
      CategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductsV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCTS_V_3: OneToManyLink<
      EngineeringProductCategoryDetails<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCTS_V_2: OneToManyLink<
      EngineeringProductCategoryDetails<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTS_V_2: OneToManyLink<
      EngineeringProductCategoryDetails<DeSerializersT>,
      DeSerializersT,
      ProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCTS: OneToManyLink<
      EngineeringProductCategoryDetails<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductReadinessPoliciesApi<DeSerializersT>,
      EngineeringOrganizationsApi<DeSerializersT>,
      ProductLifecycleStatesApi<DeSerializersT>,
      ProductReleasePoliciesApi<DeSerializersT>,
      EngineeringProductVersionNumberingRulesApi<DeSerializersT>,
      CategoriesApi<DeSerializersT>,
      EngineeringChangeOrderProductsV3Api<DeSerializersT>,
      EngineeringChangeOrderProductsV2Api<DeSerializersT>,
      ProductsV2Api<DeSerializersT>,
      EngineeringChangeOrderProductsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_READINESS_POLICY: new OneToOneLink(
        'ProductReadinessPolicy',
        this,
        linkedApis[0]
      ),
      ENGINEERING_ORGANIZATION: new OneToOneLink(
        'EngineeringOrganization',
        this,
        linkedApis[1]
      ),
      CREATED_PRODUCT_LIFECYCLE_STATE: new OneToOneLink(
        'CreatedProductLifecycleState',
        this,
        linkedApis[2]
      ),
      PRODUCT_RELEASE_POLICY: new OneToOneLink(
        'ProductReleasePolicy',
        this,
        linkedApis[3]
      ),
      VERSION_NUMBERING_RULE: new OneToOneLink(
        'VersionNumberingRule',
        this,
        linkedApis[4]
      ),
      CATEGORY: new OneToOneLink('Category', this, linkedApis[5]),
      ENGINEERING_CHANGE_ORDER_PRODUCTS_V_3: new OneToManyLink(
        'EngineeringChangeOrderProductsV3',
        this,
        linkedApis[6]
      ),
      ENGINEERING_CHANGE_ORDER_PRODUCTS_V_2: new OneToManyLink(
        'EngineeringChangeOrderProductsV2',
        this,
        linkedApis[7]
      ),
      PRODUCTS_V_2: new OneToManyLink('ProductsV2', this, linkedApis[8]),
      ENGINEERING_CHANGE_ORDER_PRODUCTS: new OneToManyLink(
        'EngineeringChangeOrderProducts',
        this,
        linkedApis[9]
      )
    };
    return this;
  }

  entityConstructor = EngineeringProductCategoryDetails;

  requestBuilder(): EngineeringProductCategoryDetailsRequestBuilder<DeSerializersT> {
    return new EngineeringProductCategoryDetailsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EngineeringProductCategoryDetails<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EngineeringProductCategoryDetails<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EngineeringProductCategoryDetails<DeSerializersT>,
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
    typeof EngineeringProductCategoryDetails,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EngineeringProductCategoryDetails,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ENGINEERING_PRODUCT_CATEGORY_NAME: OrderableEdmTypeField<
      EngineeringProductCategoryDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_TYPE: EnumField<
      EngineeringProductCategoryDetails<DeSerializers>,
      DeSerializersT,
      EcoResProductType,
      true,
      true
    >;
    PRODUCT_READINESS_POLICY_NAME: OrderableEdmTypeField<
      EngineeringProductCategoryDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_SUBTYPE: EnumField<
      EngineeringProductCategoryDetails<DeSerializers>,
      DeSerializersT,
      EcoResProductSubtype,
      true,
      true
    >;
    ENGINEERING_ORGANIZATION_ID: OrderableEdmTypeField<
      EngineeringProductCategoryDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCTION_TYPE: EnumField<
      EngineeringProductCategoryDetails<DeSerializers>,
      DeSerializersT,
      PmfProductType,
      true,
      true
    >;
    PDS_CW_PRODUCT: EnumField<
      EngineeringProductCategoryDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VARIANT_CONFIGURATION_TECHNOLOGY: EnumField<
      EngineeringProductCategoryDetails<DeSerializers>,
      DeSerializersT,
      EcoResVariantConfigurationTechnologyType,
      true,
      true
    >;
    PRODUCT_DIMENSION_GROUP_NAME: OrderableEdmTypeField<
      EngineeringProductCategoryDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VERSION_NUMBERING_RULE_NAME: OrderableEdmTypeField<
      EngineeringProductCategoryDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_PRODUCT_LIFECYCLE_STATE_ID: OrderableEdmTypeField<
      EngineeringProductCategoryDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENFORCE_DATE_RULE: EnumField<
      EngineeringProductCategoryDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_RELEASE_POLICY_NAME: OrderableEdmTypeField<
      EngineeringProductCategoryDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productReadinessPolicy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_READINESS_POLICY: OneToOneLink<
      EngineeringProductCategoryDetails<DeSerializersT>,
      DeSerializersT,
      ProductReadinessPoliciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringOrganization} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_ORGANIZATION: OneToOneLink<
      EngineeringProductCategoryDetails<DeSerializersT>,
      DeSerializersT,
      EngineeringOrganizationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link createdProductLifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CREATED_PRODUCT_LIFECYCLE_STATE: OneToOneLink<
      EngineeringProductCategoryDetails<DeSerializersT>,
      DeSerializersT,
      ProductLifecycleStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productReleasePolicy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_RELEASE_POLICY: OneToOneLink<
      EngineeringProductCategoryDetails<DeSerializersT>,
      DeSerializersT,
      ProductReleasePoliciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link versionNumberingRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VERSION_NUMBERING_RULE: OneToOneLink<
      EngineeringProductCategoryDetails<DeSerializersT>,
      DeSerializersT,
      EngineeringProductVersionNumberingRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link category} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CATEGORY: OneToOneLink<
      EngineeringProductCategoryDetails<DeSerializersT>,
      DeSerializersT,
      CategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductsV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCTS_V_3: OneToManyLink<
      EngineeringProductCategoryDetails<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCTS_V_2: OneToManyLink<
      EngineeringProductCategoryDetails<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTS_V_2: OneToManyLink<
      EngineeringProductCategoryDetails<DeSerializersT>,
      DeSerializersT,
      ProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCTS: OneToManyLink<
      EngineeringProductCategoryDetails<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EngineeringProductCategoryDetails<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link engineeringProductCategoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_PRODUCT_CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'EngineeringProductCategoryName',
          'Edm.String',
          false
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
         * Static representation of the {@link productReadinessPolicyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_READINESS_POLICY_NAME: fieldBuilder.buildEdmTypeField(
          'ProductReadinessPolicyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productSubtype} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SUBTYPE: fieldBuilder.buildEnumField(
          'ProductSubtype',
          EcoResProductSubtype,
          true
        ),
        /**
         * Static representation of the {@link engineeringOrganizationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_ORGANIZATION_ID: fieldBuilder.buildEdmTypeField(
          'EngineeringOrganizationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_TYPE: fieldBuilder.buildEnumField(
          'ProductionType',
          PmfProductType,
          true
        ),
        /**
         * Static representation of the {@link pdsCwProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_CW_PRODUCT: fieldBuilder.buildEnumField(
          'PdsCWProduct',
          NoYes,
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
         * Static representation of the {@link productDimensionGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_DIMENSION_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'ProductDimensionGroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link versionNumberingRuleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERSION_NUMBERING_RULE_NAME: fieldBuilder.buildEdmTypeField(
          'VersionNumberingRuleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link createdProductLifecycleStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_PRODUCT_LIFECYCLE_STATE_ID: fieldBuilder.buildEdmTypeField(
          'CreatedProductLifecycleStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link enforceDateRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENFORCE_DATE_RULE: fieldBuilder.buildEnumField(
          'EnforceDateRule',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link productReleasePolicyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_RELEASE_POLICY_NAME: fieldBuilder.buildEdmTypeField(
          'ProductReleasePolicyName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EngineeringProductCategoryDetails)
      };
    }

    return this._schema;
  }
}
