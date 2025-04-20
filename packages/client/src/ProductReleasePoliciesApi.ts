/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductReleasePolicies } from './ProductReleasePolicies';
import { ProductReleasePoliciesRequestBuilder } from './ProductReleasePoliciesRequestBuilder';
import { EngineeringProductCategoryDetailsApi } from './EngineeringProductCategoryDetailsApi';
import { ProductsV2Api } from './ProductsV2Api';
import { ProductReleasePolicyLegalEntityRulesApi } from './ProductReleasePolicyLegalEntityRulesApi';
import { EcoResProductType } from './EcoResProductType';
import { PmfProductType } from './PmfProductType';
import { NoYes } from './NoYes';
import { EngChgProductReleaseApplyTemplateMode } from './EngChgProductReleaseApplyTemplateMode';
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
export class ProductReleasePoliciesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductReleasePolicies<DeSerializersT>, DeSerializersT>
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
  ): ProductReleasePoliciesApi<DeSerializersT> {
    return new ProductReleasePoliciesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link engineeringProductCategoryDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_PRODUCT_CATEGORY_DETAILS: OneToManyLink<
      ProductReleasePolicies<DeSerializersT>,
      DeSerializersT,
      EngineeringProductCategoryDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTS_V_2: OneToManyLink<
      ProductReleasePolicies<DeSerializersT>,
      DeSerializersT,
      ProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productReleasePolicyLegalEntityRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_RELEASE_POLICY_LEGAL_ENTITY_RULES: OneToManyLink<
      ProductReleasePolicies<DeSerializersT>,
      DeSerializersT,
      ProductReleasePolicyLegalEntityRulesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EngineeringProductCategoryDetailsApi<DeSerializersT>,
      ProductsV2Api<DeSerializersT>,
      ProductReleasePolicyLegalEntityRulesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ENGINEERING_PRODUCT_CATEGORY_DETAILS: new OneToManyLink(
        'EngineeringProductCategoryDetails',
        this,
        linkedApis[0]
      ),
      PRODUCTS_V_2: new OneToManyLink('ProductsV2', this, linkedApis[1]),
      PRODUCT_RELEASE_POLICY_LEGAL_ENTITY_RULES: new OneToManyLink(
        'ProductReleasePolicyLegalEntityRules',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = ProductReleasePolicies;

  requestBuilder(): ProductReleasePoliciesRequestBuilder<DeSerializersT> {
    return new ProductReleasePoliciesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductReleasePolicies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductReleasePolicies<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductReleasePolicies<DeSerializersT>,
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
    typeof ProductReleasePolicies,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductReleasePolicies,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    POLICY_NAME: OrderableEdmTypeField<
      ProductReleasePolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    APPLICABLE_PRODUCT_TYPE: EnumField<
      ProductReleasePolicies<DeSerializers>,
      DeSerializersT,
      EcoResProductType,
      true,
      true
    >;
    PMF_PRODUCT_TYPE: EnumField<
      ProductReleasePolicies<DeSerializers>,
      DeSerializersT,
      PmfProductType,
      true,
      true
    >;
    IS_POLICY_ACTIVE: EnumField<
      ProductReleasePolicies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WILL_PRODUCT_RELEASE_ENFORCE_DATE_RULE: EnumField<
      ProductReleasePolicies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    APPLY_TEMPLATES_RULE: EnumField<
      ProductReleasePolicies<DeSerializers>,
      DeSerializersT,
      EngChgProductReleaseApplyTemplateMode,
      true,
      true
    >;
    POLICY_DESCRIPTION: OrderableEdmTypeField<
      ProductReleasePolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringProductCategoryDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_PRODUCT_CATEGORY_DETAILS: OneToManyLink<
      ProductReleasePolicies<DeSerializersT>,
      DeSerializersT,
      EngineeringProductCategoryDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTS_V_2: OneToManyLink<
      ProductReleasePolicies<DeSerializersT>,
      DeSerializersT,
      ProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productReleasePolicyLegalEntityRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_RELEASE_POLICY_LEGAL_ENTITY_RULES: OneToManyLink<
      ProductReleasePolicies<DeSerializersT>,
      DeSerializersT,
      ProductReleasePolicyLegalEntityRulesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductReleasePolicies<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link policyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_NAME: fieldBuilder.buildEdmTypeField(
          'PolicyName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link applicableProductType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLICABLE_PRODUCT_TYPE: fieldBuilder.buildEnumField(
          'ApplicableProductType',
          EcoResProductType,
          true
        ),
        /**
         * Static representation of the {@link pmfProductType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PMF_PRODUCT_TYPE: fieldBuilder.buildEnumField(
          'PmfProductType',
          PmfProductType,
          true
        ),
        /**
         * Static representation of the {@link isPolicyActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_POLICY_ACTIVE: fieldBuilder.buildEnumField(
          'IsPolicyActive',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link willProductReleaseEnforceDateRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_PRODUCT_RELEASE_ENFORCE_DATE_RULE: fieldBuilder.buildEnumField(
          'WillProductReleaseEnforceDateRule',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link applyTemplatesRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLY_TEMPLATES_RULE: fieldBuilder.buildEnumField(
          'ApplyTemplatesRule',
          EngChgProductReleaseApplyTemplateMode,
          true
        ),
        /**
         * Static representation of the {@link policyDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PolicyDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductReleasePolicies)
      };
    }

    return this._schema;
  }
}
