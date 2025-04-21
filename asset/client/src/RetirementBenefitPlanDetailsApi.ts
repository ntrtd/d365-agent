/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetirementBenefitPlanDetails } from './RetirementBenefitPlanDetails';
import { RetirementBenefitPlanDetailsRequestBuilder } from './RetirementBenefitPlanDetailsRequestBuilder';
import { BenefitPlansApi } from './BenefitPlansApi';
import { PayrollContributionLimitMethod } from './PayrollContributionLimitMethod';
import { PayrollRetirementType } from './PayrollRetirementType';
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
export class RetirementBenefitPlanDetailsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetirementBenefitPlanDetails<DeSerializersT>, DeSerializersT>
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
  ): RetirementBenefitPlanDetailsApi<DeSerializersT> {
    return new RetirementBenefitPlanDetailsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link benefitPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_PLAN: OneToOneLink<
      RetirementBenefitPlanDetails<DeSerializersT>,
      DeSerializersT,
      BenefitPlansApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [BenefitPlansApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      BENEFIT_PLAN: new OneToOneLink('BenefitPlan', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = RetirementBenefitPlanDetails;

  requestBuilder(): RetirementBenefitPlanDetailsRequestBuilder<DeSerializersT> {
    return new RetirementBenefitPlanDetailsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetirementBenefitPlanDetails<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetirementBenefitPlanDetails<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetirementBenefitPlanDetails<DeSerializersT>,
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
    typeof RetirementBenefitPlanDetails,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetirementBenefitPlanDetails,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    BENEFIT_PLAN_ID: OrderableEdmTypeField<
      RetirementBenefitPlanDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONTRIBUTION_LIMIT_METHOD: EnumField<
      RetirementBenefitPlanDetails<DeSerializers>,
      DeSerializersT,
      PayrollContributionLimitMethod,
      true,
      true
    >;
    RETIREMENT_TYPE: EnumField<
      RetirementBenefitPlanDetails<DeSerializers>,
      DeSerializersT,
      PayrollRetirementType,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_PLAN: OneToOneLink<
      RetirementBenefitPlanDetails<DeSerializersT>,
      DeSerializersT,
      BenefitPlansApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetirementBenefitPlanDetails<DeSerializers>>;
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
          'BenefitPlanID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link contributionLimitMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRIBUTION_LIMIT_METHOD: fieldBuilder.buildEnumField(
          'ContributionLimitMethod',
          PayrollContributionLimitMethod,
          true
        ),
        /**
         * Static representation of the {@link retirementType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETIREMENT_TYPE: fieldBuilder.buildEnumField(
          'RetirementType',
          PayrollRetirementType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetirementBenefitPlanDetails)
      };
    }

    return this._schema;
  }
}
