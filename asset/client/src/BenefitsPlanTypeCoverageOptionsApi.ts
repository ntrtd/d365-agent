/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitsPlanTypeCoverageOptions } from './BenefitsPlanTypeCoverageOptions';
import { BenefitsPlanTypeCoverageOptionsRequestBuilder } from './BenefitsPlanTypeCoverageOptionsRequestBuilder';
import { BenefitsCoverageOptionsApi } from './BenefitsCoverageOptionsApi';
import { BenefitsPlanTypesApi } from './BenefitsPlanTypesApi';
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
export class BenefitsPlanTypeCoverageOptionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BenefitsPlanTypeCoverageOptions<DeSerializersT>, DeSerializersT>
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
  ): BenefitsPlanTypeCoverageOptionsApi<DeSerializersT> {
    return new BenefitsPlanTypeCoverageOptionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link benefitsCoverageOption} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_COVERAGE_OPTION: OneToOneLink<
      BenefitsPlanTypeCoverageOptions<DeSerializersT>,
      DeSerializersT,
      BenefitsCoverageOptionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsPlanType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PLAN_TYPE: OneToOneLink<
      BenefitsPlanTypeCoverageOptions<DeSerializersT>,
      DeSerializersT,
      BenefitsPlanTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BenefitsCoverageOptionsApi<DeSerializersT>,
      BenefitsPlanTypesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BENEFITS_COVERAGE_OPTION: new OneToOneLink(
        'BenefitsCoverageOption',
        this,
        linkedApis[0]
      ),
      BENEFITS_PLAN_TYPE: new OneToOneLink(
        'BenefitsPlanType',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = BenefitsPlanTypeCoverageOptions;

  requestBuilder(): BenefitsPlanTypeCoverageOptionsRequestBuilder<DeSerializersT> {
    return new BenefitsPlanTypeCoverageOptionsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BenefitsPlanTypeCoverageOptions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BenefitsPlanTypeCoverageOptions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BenefitsPlanTypeCoverageOptions<DeSerializersT>,
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
    typeof BenefitsPlanTypeCoverageOptions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitsPlanTypeCoverageOptions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PLAN_TYPE_ID: OrderableEdmTypeField<
      BenefitsPlanTypeCoverageOptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COVERAGE_OPTION_ID: OrderableEdmTypeField<
      BenefitsPlanTypeCoverageOptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsCoverageOption} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_COVERAGE_OPTION: OneToOneLink<
      BenefitsPlanTypeCoverageOptions<DeSerializersT>,
      DeSerializersT,
      BenefitsCoverageOptionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsPlanType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PLAN_TYPE: OneToOneLink<
      BenefitsPlanTypeCoverageOptions<DeSerializersT>,
      DeSerializersT,
      BenefitsPlanTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BenefitsPlanTypeCoverageOptions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link planTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'PlanTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link coverageOptionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COVERAGE_OPTION_ID: fieldBuilder.buildEdmTypeField(
          'CoverageOptionId',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BenefitsPlanTypeCoverageOptions)
      };
    }

    return this._schema;
  }
}
