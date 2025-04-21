/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CompensationRegions } from './CompensationRegions';
import { CompensationRegionsRequestBuilder } from './CompensationRegionsRequestBuilder';
import { PayIntV1HcmPositionDetailsApi } from './PayIntV1HcmPositionDetailsApi';
import { CompensationEligibilityRulesApi } from './CompensationEligibilityRulesApi';
import { BenefitsRateTiersApi } from './BenefitsRateTiersApi';
import { PositionDetailsApi } from './PositionDetailsApi';
import { CompensationFixedIncreaseBudgetsApi } from './CompensationFixedIncreaseBudgetsApi';
import { BenefitsRateDoubleTiersApi } from './BenefitsRateDoubleTiersApi';
import { PositionsApi } from './PositionsApi';
import { PositionsV2Api } from './PositionsV2Api';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class CompensationRegionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CompensationRegions<DeSerializersT>, DeSerializersT>
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
  ): CompensationRegionsApi<DeSerializersT> {
    return new CompensationRegionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link payIntPositionDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_POSITION_DETAILS: OneToManyLink<
      CompensationRegions<DeSerializersT>,
      DeSerializersT,
      PayIntV1HcmPositionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationEligibilityRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_ELIGIBILITY_RULES: OneToManyLink<
      CompensationRegions<DeSerializersT>,
      DeSerializersT,
      CompensationEligibilityRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitRateTiers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_RATE_TIERS: OneToManyLink<
      CompensationRegions<DeSerializersT>,
      DeSerializersT,
      BenefitsRateTiersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positionDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_DETAILS: OneToManyLink<
      CompensationRegions<DeSerializersT>,
      DeSerializersT,
      PositionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationFixedIncreaseBudgets} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_FIXED_INCREASE_BUDGETS: OneToManyLink<
      CompensationRegions<DeSerializersT>,
      DeSerializersT,
      CompensationFixedIncreaseBudgetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitRateDoubleTiers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_RATE_DOUBLE_TIERS: OneToManyLink<
      CompensationRegions<DeSerializersT>,
      DeSerializersT,
      BenefitsRateDoubleTiersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITIONS: OneToManyLink<
      CompensationRegions<DeSerializersT>,
      DeSerializersT,
      PositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positionsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITIONS_V_2: OneToManyLink<
      CompensationRegions<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PayIntV1HcmPositionDetailsApi<DeSerializersT>,
      CompensationEligibilityRulesApi<DeSerializersT>,
      BenefitsRateTiersApi<DeSerializersT>,
      PositionDetailsApi<DeSerializersT>,
      CompensationFixedIncreaseBudgetsApi<DeSerializersT>,
      BenefitsRateDoubleTiersApi<DeSerializersT>,
      PositionsApi<DeSerializersT>,
      PositionsV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PAY_INT_POSITION_DETAILS: new OneToManyLink(
        'PayIntPositionDetails',
        this,
        linkedApis[0]
      ),
      COMPENSATION_ELIGIBILITY_RULES: new OneToManyLink(
        'CompensationEligibilityRules',
        this,
        linkedApis[1]
      ),
      BENEFIT_RATE_TIERS: new OneToManyLink(
        'BenefitRateTiers',
        this,
        linkedApis[2]
      ),
      POSITION_DETAILS: new OneToManyLink(
        'PositionDetails',
        this,
        linkedApis[3]
      ),
      COMPENSATION_FIXED_INCREASE_BUDGETS: new OneToManyLink(
        'CompensationFixedIncreaseBudgets',
        this,
        linkedApis[4]
      ),
      BENEFIT_RATE_DOUBLE_TIERS: new OneToManyLink(
        'BenefitRateDoubleTiers',
        this,
        linkedApis[5]
      ),
      POSITIONS: new OneToManyLink('Positions', this, linkedApis[6]),
      POSITIONS_V_2: new OneToManyLink('PositionsV2', this, linkedApis[7])
    };
    return this;
  }

  entityConstructor = CompensationRegions;

  requestBuilder(): CompensationRegionsRequestBuilder<DeSerializersT> {
    return new CompensationRegionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CompensationRegions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CompensationRegions<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CompensationRegions<DeSerializersT>,
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
    typeof CompensationRegions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CompensationRegions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LOCATION: OrderableEdmTypeField<
      CompensationRegions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CompensationRegions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payIntPositionDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_POSITION_DETAILS: OneToManyLink<
      CompensationRegions<DeSerializersT>,
      DeSerializersT,
      PayIntV1HcmPositionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationEligibilityRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_ELIGIBILITY_RULES: OneToManyLink<
      CompensationRegions<DeSerializersT>,
      DeSerializersT,
      CompensationEligibilityRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitRateTiers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_RATE_TIERS: OneToManyLink<
      CompensationRegions<DeSerializersT>,
      DeSerializersT,
      BenefitsRateTiersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positionDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_DETAILS: OneToManyLink<
      CompensationRegions<DeSerializersT>,
      DeSerializersT,
      PositionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationFixedIncreaseBudgets} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_FIXED_INCREASE_BUDGETS: OneToManyLink<
      CompensationRegions<DeSerializersT>,
      DeSerializersT,
      CompensationFixedIncreaseBudgetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitRateDoubleTiers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_RATE_DOUBLE_TIERS: OneToManyLink<
      CompensationRegions<DeSerializersT>,
      DeSerializersT,
      BenefitsRateDoubleTiersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITIONS: OneToManyLink<
      CompensationRegions<DeSerializersT>,
      DeSerializersT,
      PositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positionsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITIONS_V_2: OneToManyLink<
      CompensationRegions<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CompensationRegions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link location} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION: fieldBuilder.buildEdmTypeField(
          'Location',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CompensationRegions)
      };
    }

    return this._schema;
  }
}
