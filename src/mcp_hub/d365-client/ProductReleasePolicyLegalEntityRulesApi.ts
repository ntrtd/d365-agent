/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductReleasePolicyLegalEntityRules } from './ProductReleasePolicyLegalEntityRules';
import { ProductReleasePolicyLegalEntityRulesRequestBuilder } from './ProductReleasePolicyLegalEntityRulesRequestBuilder';
import { ProductReleasePoliciesApi } from './ProductReleasePoliciesApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ProductReleasePolicyLegalEntityRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ProductReleasePolicyLegalEntityRules<DeSerializersT>,
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
  ): ProductReleasePolicyLegalEntityRulesApi<DeSerializersT> {
    return new ProductReleasePolicyLegalEntityRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link productReleasePolicy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_RELEASE_POLICY: OneToOneLink<
      ProductReleasePolicyLegalEntityRules<DeSerializersT>,
      DeSerializersT,
      ProductReleasePoliciesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ProductReleasePoliciesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_RELEASE_POLICY: new OneToOneLink(
        'ProductReleasePolicy',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ProductReleasePolicyLegalEntityRules;

  requestBuilder(): ProductReleasePolicyLegalEntityRulesRequestBuilder<DeSerializersT> {
    return new ProductReleasePolicyLegalEntityRulesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProductReleasePolicyLegalEntityRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductReleasePolicyLegalEntityRules<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductReleasePolicyLegalEntityRules<DeSerializersT>,
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
    typeof ProductReleasePolicyLegalEntityRules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductReleasePolicyLegalEntityRules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      ProductReleasePolicyLegalEntityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_RELEASE_POLICY_NAME: OrderableEdmTypeField<
      ProductReleasePolicyLegalEntityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TEMPLATE_BOM_ID: OrderableEdmTypeField<
      ProductReleasePolicyLegalEntityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TEMPLATE_ITEM_NUMBER: OrderableEdmTypeField<
      ProductReleasePolicyLegalEntityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_PRODUCT_RELEASE_COPY_DATE_EFFECTIVITY: EnumField<
      ProductReleasePolicyLegalEntityRules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TEMPLATE_ROUTE_ID: OrderableEdmTypeField<
      ProductReleasePolicyLegalEntityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_PRODUCT_RELEASE_COPY_BOM_APPROVAL: EnumField<
      ProductReleasePolicyLegalEntityRules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WILL_PRODUCT_RELEASE_CREATE_BOM: EnumField<
      ProductReleasePolicyLegalEntityRules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WILL_PRODUCT_RELEASE_CREATE_ROUTE: EnumField<
      ProductReleasePolicyLegalEntityRules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WILL_PRODUCT_RELEASE_COPY_BOM_ACTIVATION: EnumField<
      ProductReleasePolicyLegalEntityRules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WILL_PRODUCT_RELEASE_COPY_ROUTE_APPROVAL: EnumField<
      ProductReleasePolicyLegalEntityRules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WILL_PRODUCT_RELEASE_COPY_ROUTE_ACTIVATION: EnumField<
      ProductReleasePolicyLegalEntityRules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WILL_ENGINEERING_CHANGE_ORDER_IMPACTED_PRODUCT_SEARCH_AUTO_RELEASE: EnumField<
      ProductReleasePolicyLegalEntityRules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productReleasePolicy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_RELEASE_POLICY: OneToOneLink<
      ProductReleasePolicyLegalEntityRules<DeSerializersT>,
      DeSerializersT,
      ProductReleasePoliciesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductReleasePolicyLegalEntityRules<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link legalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productReleasePolicyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_RELEASE_POLICY_NAME: fieldBuilder.buildEdmTypeField(
          'ProductReleasePolicyName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link templateBomId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE_BOM_ID: fieldBuilder.buildEdmTypeField(
          'TemplateBOMId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link templateItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'TemplateItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link willProductReleaseCopyDateEffectivity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_PRODUCT_RELEASE_COPY_DATE_EFFECTIVITY: fieldBuilder.buildEnumField(
          'WillProductReleaseCopyDateEffectivity',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link templateRouteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE_ROUTE_ID: fieldBuilder.buildEdmTypeField(
          'TemplateRouteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link willProductReleaseCopyBomApproval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_PRODUCT_RELEASE_COPY_BOM_APPROVAL: fieldBuilder.buildEnumField(
          'WillProductReleaseCopyBOMApproval',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link willProductReleaseCreateBom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_PRODUCT_RELEASE_CREATE_BOM: fieldBuilder.buildEnumField(
          'WillProductReleaseCreateBOM',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link willProductReleaseCreateRoute} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_PRODUCT_RELEASE_CREATE_ROUTE: fieldBuilder.buildEnumField(
          'WillProductReleaseCreateRoute',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link willProductReleaseCopyBomActivation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_PRODUCT_RELEASE_COPY_BOM_ACTIVATION: fieldBuilder.buildEnumField(
          'WillProductReleaseCopyBOMActivation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link willProductReleaseCopyRouteApproval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_PRODUCT_RELEASE_COPY_ROUTE_APPROVAL: fieldBuilder.buildEnumField(
          'WillProductReleaseCopyRouteApproval',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link willProductReleaseCopyRouteActivation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_PRODUCT_RELEASE_COPY_ROUTE_ACTIVATION: fieldBuilder.buildEnumField(
          'WillProductReleaseCopyRouteActivation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link willEngineeringChangeOrderImpactedProductSearchAutoRelease} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_ENGINEERING_CHANGE_ORDER_IMPACTED_PRODUCT_SEARCH_AUTO_RELEASE:
          fieldBuilder.buildEnumField(
            'WillEngineeringChangeOrderImpactedProductSearchAutoRelease',
            NoYes,
            true
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductReleasePolicyLegalEntityRules)
      };
    }

    return this._schema;
  }
}
