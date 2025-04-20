/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CompensationLevels } from './CompensationLevels';
import { CompensationLevelsRequestBuilder } from './CompensationLevelsRequestBuilder';
import { CompFixedEmplsApi } from './CompFixedEmplsApi';
import { BenefitsRateTiersApi } from './BenefitsRateTiersApi';
import { CompensationStructuresApi } from './CompensationStructuresApi';
import { JobsApi } from './JobsApi';
import { JobCompensationsApi } from './JobCompensationsApi';
import { BenefitsRateDoubleTiersApi } from './BenefitsRateDoubleTiersApi';
import { CompVarPlanLevelsV2Api } from './CompVarPlanLevelsV2Api';
import { CompensationStructuresDualWriteV2Api } from './CompensationStructuresDualWriteV2Api';
import { RecruitingRequestsApi } from './RecruitingRequestsApi';
import { HcmCompensationType } from './HcmCompensationType';
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
export class CompensationLevelsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CompensationLevels<DeSerializersT>, DeSerializersT>
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
  ): CompensationLevelsApi<DeSerializersT> {
    return new CompensationLevelsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link compFixedEmpls} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMP_FIXED_EMPLS: OneToManyLink<
      CompensationLevels<DeSerializersT>,
      DeSerializersT,
      CompFixedEmplsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitRateTiers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_RATE_TIERS: OneToManyLink<
      CompensationLevels<DeSerializersT>,
      DeSerializersT,
      BenefitsRateTiersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationStructures} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_STRUCTURES: OneToManyLink<
      CompensationLevels<DeSerializersT>,
      DeSerializersT,
      CompensationStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOBS: OneToManyLink<
      CompensationLevels<DeSerializersT>,
      DeSerializersT,
      JobsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationLevels} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_LEVELS: OneToManyLink<
      CompensationLevels<DeSerializersT>,
      DeSerializersT,
      JobCompensationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitRateDoubleTiers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_RATE_DOUBLE_TIERS: OneToManyLink<
      CompensationLevels<DeSerializersT>,
      DeSerializersT,
      BenefitsRateDoubleTiersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compVarPlanLevelV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMP_VAR_PLAN_LEVEL_V_2: OneToManyLink<
      CompensationLevels<DeSerializersT>,
      DeSerializersT,
      CompVarPlanLevelsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationStructuresV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_STRUCTURES_V_2: OneToManyLink<
      CompensationLevels<DeSerializersT>,
      DeSerializersT,
      CompensationStructuresDualWriteV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUESTS: OneToManyLink<
      CompensationLevels<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CompFixedEmplsApi<DeSerializersT>,
      BenefitsRateTiersApi<DeSerializersT>,
      CompensationStructuresApi<DeSerializersT>,
      JobsApi<DeSerializersT>,
      JobCompensationsApi<DeSerializersT>,
      BenefitsRateDoubleTiersApi<DeSerializersT>,
      CompVarPlanLevelsV2Api<DeSerializersT>,
      CompensationStructuresDualWriteV2Api<DeSerializersT>,
      RecruitingRequestsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      COMP_FIXED_EMPLS: new OneToManyLink(
        'CompFixedEmpls',
        this,
        linkedApis[0]
      ),
      BENEFIT_RATE_TIERS: new OneToManyLink(
        'BenefitRateTiers',
        this,
        linkedApis[1]
      ),
      COMPENSATION_STRUCTURES: new OneToManyLink(
        'CompensationStructures',
        this,
        linkedApis[2]
      ),
      JOBS: new OneToManyLink('Jobs', this, linkedApis[3]),
      COMPENSATION_LEVELS: new OneToManyLink(
        'CompensationLevels',
        this,
        linkedApis[4]
      ),
      BENEFIT_RATE_DOUBLE_TIERS: new OneToManyLink(
        'BenefitRateDoubleTiers',
        this,
        linkedApis[5]
      ),
      COMP_VAR_PLAN_LEVEL_V_2: new OneToManyLink(
        'CompVarPlanLevelV2',
        this,
        linkedApis[6]
      ),
      COMPENSATION_STRUCTURES_V_2: new OneToManyLink(
        'CompensationStructuresV2',
        this,
        linkedApis[7]
      ),
      RECRUITING_REQUESTS: new OneToManyLink(
        'RecruitingRequests',
        this,
        linkedApis[8]
      )
    };
    return this;
  }

  entityConstructor = CompensationLevels;

  requestBuilder(): CompensationLevelsRequestBuilder<DeSerializersT> {
    return new CompensationLevelsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CompensationLevels<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CompensationLevels<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CompensationLevels<DeSerializersT>,
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
    typeof CompensationLevels,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CompensationLevels,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LEVEL: OrderableEdmTypeField<
      CompensationLevels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      CompensationLevels<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CompensationLevels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE: EnumField<
      CompensationLevels<DeSerializers>,
      DeSerializersT,
      HcmCompensationType,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compFixedEmpls} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMP_FIXED_EMPLS: OneToManyLink<
      CompensationLevels<DeSerializersT>,
      DeSerializersT,
      CompFixedEmplsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitRateTiers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_RATE_TIERS: OneToManyLink<
      CompensationLevels<DeSerializersT>,
      DeSerializersT,
      BenefitsRateTiersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationStructures} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_STRUCTURES: OneToManyLink<
      CompensationLevels<DeSerializersT>,
      DeSerializersT,
      CompensationStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOBS: OneToManyLink<
      CompensationLevels<DeSerializersT>,
      DeSerializersT,
      JobsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationLevels} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_LEVELS: OneToManyLink<
      CompensationLevels<DeSerializersT>,
      DeSerializersT,
      JobCompensationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitRateDoubleTiers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_RATE_DOUBLE_TIERS: OneToManyLink<
      CompensationLevels<DeSerializersT>,
      DeSerializersT,
      BenefitsRateDoubleTiersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compVarPlanLevelV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMP_VAR_PLAN_LEVEL_V_2: OneToManyLink<
      CompensationLevels<DeSerializersT>,
      DeSerializersT,
      CompVarPlanLevelsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationStructuresV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_STRUCTURES_V_2: OneToManyLink<
      CompensationLevels<DeSerializersT>,
      DeSerializersT,
      CompensationStructuresDualWriteV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUESTS: OneToManyLink<
      CompensationLevels<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CompensationLevels<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link level} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEVEL: fieldBuilder.buildEdmTypeField('Level', 'Edm.String', false),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
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
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField('Type', HcmCompensationType, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CompensationLevels)
      };
    }

    return this._schema;
  }
}
