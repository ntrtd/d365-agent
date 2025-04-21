/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitPlanDefaultDimensions } from './BenefitPlanDefaultDimensions';
import { BenefitPlanDefaultDimensionsRequestBuilder } from './BenefitPlanDefaultDimensionsRequestBuilder';
import { BenefitPlansApi } from './BenefitPlansApi';
import { DimensionSetsApi } from './DimensionSetsApi';
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
export class BenefitPlanDefaultDimensionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BenefitPlanDefaultDimensions<DeSerializersT>, DeSerializersT>
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
  ): BenefitPlanDefaultDimensionsApi<DeSerializersT> {
    return new BenefitPlanDefaultDimensionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link benefitPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_PLAN: OneToOneLink<
      BenefitPlanDefaultDimensions<DeSerializersT>,
      DeSerializersT,
      BenefitPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      BenefitPlanDefaultDimensions<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BenefitPlansApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BENEFIT_PLAN: new OneToOneLink('BenefitPlan', this, linkedApis[0]),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = BenefitPlanDefaultDimensions;

  requestBuilder(): BenefitPlanDefaultDimensionsRequestBuilder<DeSerializersT> {
    return new BenefitPlanDefaultDimensionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BenefitPlanDefaultDimensions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BenefitPlanDefaultDimensions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BenefitPlanDefaultDimensions<DeSerializersT>,
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
    typeof BenefitPlanDefaultDimensions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitPlanDefaultDimensions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    BENEFIT_PLAN_ID: OrderableEdmTypeField<
      BenefitPlanDefaultDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      BenefitPlanDefaultDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CATEGORY: OrderableEdmTypeField<
      BenefitPlanDefaultDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_FINANCIAL_DIMENSIONS_DISPLAY_VALUE: OrderableEdmTypeField<
      BenefitPlanDefaultDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR: OrderableEdmTypeField<
      BenefitPlanDefaultDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_PLAN: OneToOneLink<
      BenefitPlanDefaultDimensions<DeSerializersT>,
      DeSerializersT,
      BenefitPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      BenefitPlanDefaultDimensions<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BenefitPlanDefaultDimensions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link benefitPlanId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_PLAN_ID: fieldBuilder.buildEdmTypeField(
          'BenefitPlanId',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link category} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY: fieldBuilder.buildEdmTypeField(
          'Category',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultFinancialDimensionsDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_FINANCIAL_DIMENSIONS_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'DefaultFinancialDimensionsDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link vendor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR: fieldBuilder.buildEdmTypeField('Vendor', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BenefitPlanDefaultDimensions)
      };
    }

    return this._schema;
  }
}
