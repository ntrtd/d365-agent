/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductReadinessPolicies } from './ProductReadinessPolicies';
import { ProductReadinessPoliciesRequestBuilder } from './ProductReadinessPoliciesRequestBuilder';
import { EngineeringProductCategoryDetailsApi } from './EngineeringProductCategoryDetailsApi';
import { ProductsV2Api } from './ProductsV2Api';
import { ProductReadinessPolicyChecksApi } from './ProductReadinessPolicyChecksApi';
import { EcoResProductType } from './EcoResProductType';
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
  EnumField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ProductReadinessPoliciesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductReadinessPolicies<DeSerializersT>, DeSerializersT>
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
  ): ProductReadinessPoliciesApi<DeSerializersT> {
    return new ProductReadinessPoliciesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link engineeringProductCategoryDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_PRODUCT_CATEGORY_DETAILS: OneToManyLink<
      ProductReadinessPolicies<DeSerializersT>,
      DeSerializersT,
      EngineeringProductCategoryDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTS_V_2: OneToManyLink<
      ProductReadinessPolicies<DeSerializersT>,
      DeSerializersT,
      ProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productReadinessPolicyChecks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_READINESS_POLICY_CHECKS: OneToManyLink<
      ProductReadinessPolicies<DeSerializersT>,
      DeSerializersT,
      ProductReadinessPolicyChecksApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EngineeringProductCategoryDetailsApi<DeSerializersT>,
      ProductsV2Api<DeSerializersT>,
      ProductReadinessPolicyChecksApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ENGINEERING_PRODUCT_CATEGORY_DETAILS: new OneToManyLink(
        'EngineeringProductCategoryDetails',
        this,
        linkedApis[0]
      ),
      PRODUCTS_V_2: new OneToManyLink('ProductsV2', this, linkedApis[1]),
      PRODUCT_READINESS_POLICY_CHECKS: new OneToManyLink(
        'ProductReadinessPolicyChecks',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = ProductReadinessPolicies;

  requestBuilder(): ProductReadinessPoliciesRequestBuilder<DeSerializersT> {
    return new ProductReadinessPoliciesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductReadinessPolicies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductReadinessPolicies<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductReadinessPolicies<DeSerializersT>,
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
    typeof ProductReadinessPolicies,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductReadinessPolicies,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    POLICY_NAME: OrderableEdmTypeField<
      ProductReadinessPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    APPLICABLE_PRODUCT_TYPE: EnumField<
      ProductReadinessPolicies<DeSerializers>,
      DeSerializersT,
      EcoResProductType,
      true,
      true
    >;
    IS_POLICY_ACTIVE: EnumField<
      ProductReadinessPolicies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POLICY_DESCRIPTION: OrderableEdmTypeField<
      ProductReadinessPolicies<DeSerializers>,
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
      ProductReadinessPolicies<DeSerializersT>,
      DeSerializersT,
      EngineeringProductCategoryDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTS_V_2: OneToManyLink<
      ProductReadinessPolicies<DeSerializersT>,
      DeSerializersT,
      ProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productReadinessPolicyChecks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_READINESS_POLICY_CHECKS: OneToManyLink<
      ProductReadinessPolicies<DeSerializersT>,
      DeSerializersT,
      ProductReadinessPolicyChecksApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductReadinessPolicies<DeSerializers>>;
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
         * Static representation of the {@link isPolicyActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_POLICY_ACTIVE: fieldBuilder.buildEnumField(
          'IsPolicyActive',
          NoYes,
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
        ALL_FIELDS: new AllFields('*', ProductReadinessPolicies)
      };
    }

    return this._schema;
  }
}
