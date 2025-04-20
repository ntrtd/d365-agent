/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitsLifeEventOptions } from './BenefitsLifeEventOptions';
import { BenefitsLifeEventOptionsRequestBuilder } from './BenefitsLifeEventOptionsRequestBuilder';
import { BenefitsLifeEventTypesApi } from './BenefitsLifeEventTypesApi';
import { BenefitsPlanTypesApi } from './BenefitsPlanTypesApi';
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
export class BenefitsLifeEventOptionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BenefitsLifeEventOptions<DeSerializersT>, DeSerializersT>
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
  ): BenefitsLifeEventOptionsApi<DeSerializersT> {
    return new BenefitsLifeEventOptionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link benefitsLifeEventType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_LIFE_EVENT_TYPE: OneToOneLink<
      BenefitsLifeEventOptions<DeSerializersT>,
      DeSerializersT,
      BenefitsLifeEventTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsPlanType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PLAN_TYPE: OneToOneLink<
      BenefitsLifeEventOptions<DeSerializersT>,
      DeSerializersT,
      BenefitsPlanTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BenefitsLifeEventTypesApi<DeSerializersT>,
      BenefitsPlanTypesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BENEFITS_LIFE_EVENT_TYPE: new OneToOneLink(
        'BenefitsLifeEventType',
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

  entityConstructor = BenefitsLifeEventOptions;

  requestBuilder(): BenefitsLifeEventOptionsRequestBuilder<DeSerializersT> {
    return new BenefitsLifeEventOptionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BenefitsLifeEventOptions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BenefitsLifeEventOptions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BenefitsLifeEventOptions<DeSerializersT>,
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
    typeof BenefitsLifeEventOptions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitsLifeEventOptions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PLAN_TYPE_ID: OrderableEdmTypeField<
      BenefitsLifeEventOptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LIFE_EVENT_TYPE_ID: OrderableEdmTypeField<
      BenefitsLifeEventOptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHANGE_TO_NEW_PLAN: EnumField<
      BenefitsLifeEventOptions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PREVENT_REMOVING_FLEX_CREDITS_FROM_ALLOCATION: EnumField<
      BenefitsLifeEventOptions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PREVENT_ADDITIONS_TO_FLEX_CREDITS_ALLOCATION: EnumField<
      BenefitsLifeEventOptions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AUTO_CANCEL_PLAN: EnumField<
      BenefitsLifeEventOptions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OPEN_FLEX_CREDITS_ALLOCATION: EnumField<
      BenefitsLifeEventOptions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_CANCELLATION: EnumField<
      BenefitsLifeEventOptions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AUTO_RE_OPEN_ELIGIBILITY_CHECK: EnumField<
      BenefitsLifeEventOptions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHANGE_COVERAGE_OPTION: EnumField<
      BenefitsLifeEventOptions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LIFE_EVENT_REPORTING_WINDOW: OrderableEdmTypeField<
      BenefitsLifeEventOptions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsLifeEventType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_LIFE_EVENT_TYPE: OneToOneLink<
      BenefitsLifeEventOptions<DeSerializersT>,
      DeSerializersT,
      BenefitsLifeEventTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsPlanType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PLAN_TYPE: OneToOneLink<
      BenefitsLifeEventOptions<DeSerializersT>,
      DeSerializersT,
      BenefitsPlanTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BenefitsLifeEventOptions<DeSerializers>>;
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
         * Static representation of the {@link lifeEventTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFE_EVENT_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'LifeEventTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link changeToNewPlan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGE_TO_NEW_PLAN: fieldBuilder.buildEnumField(
          'ChangeToNewPlan',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link preventRemovingFlexCreditsFromAllocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREVENT_REMOVING_FLEX_CREDITS_FROM_ALLOCATION:
          fieldBuilder.buildEnumField(
            'PreventRemovingFlexCreditsFromAllocation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link preventAdditionsToFlexCreditsAllocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREVENT_ADDITIONS_TO_FLEX_CREDITS_ALLOCATION:
          fieldBuilder.buildEnumField(
            'PreventAdditionsToFlexCreditsAllocation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link autoCancelPlan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_CANCEL_PLAN: fieldBuilder.buildEnumField(
          'AutoCancelPlan',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link openFlexCreditsAllocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPEN_FLEX_CREDITS_ALLOCATION: fieldBuilder.buildEnumField(
          'OpenFlexCreditsAllocation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowCancellation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_CANCELLATION: fieldBuilder.buildEnumField(
          'AllowCancellation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link autoReOpenEligibilityCheck} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_RE_OPEN_ELIGIBILITY_CHECK: fieldBuilder.buildEnumField(
          'AutoReOpenEligibilityCheck',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link changeCoverageOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGE_COVERAGE_OPTION: fieldBuilder.buildEnumField(
          'ChangeCoverageOption',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link lifeEventReportingWindow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFE_EVENT_REPORTING_WINDOW: fieldBuilder.buildEdmTypeField(
          'LifeEventReportingWindow',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BenefitsLifeEventOptions)
      };
    }

    return this._schema;
  }
}
