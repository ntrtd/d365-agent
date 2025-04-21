/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobFunctions } from './JobFunctions';
import { JobFunctionsRequestBuilder } from './JobFunctionsRequestBuilder';
import { CompensationEligibilityRulesApi } from './CompensationEligibilityRulesApi';
import { JobsDualWriteApi } from './JobsDualWriteApi';
import { PositionTimelinesApi } from './PositionTimelinesApi';
import { HcmRegulatoryJobCategory } from './HcmRegulatoryJobCategory';
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
export class JobFunctionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<JobFunctions<DeSerializersT>, DeSerializersT>
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
  ): JobFunctionsApi<DeSerializersT> {
    return new JobFunctionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link compensationEligibilityRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_ELIGIBILITY_RULES: OneToManyLink<
      JobFunctions<DeSerializersT>,
      DeSerializersT,
      CompensationEligibilityRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOBS: OneToManyLink<
      JobFunctions<DeSerializersT>,
      DeSerializersT,
      JobsDualWriteApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positionTimeline} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_TIMELINE: OneToManyLink<
      JobFunctions<DeSerializersT>,
      DeSerializersT,
      PositionTimelinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CompensationEligibilityRulesApi<DeSerializersT>,
      JobsDualWriteApi<DeSerializersT>,
      PositionTimelinesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      COMPENSATION_ELIGIBILITY_RULES: new OneToManyLink(
        'CompensationEligibilityRules',
        this,
        linkedApis[0]
      ),
      JOBS: new OneToManyLink('Jobs', this, linkedApis[1]),
      POSITION_TIMELINE: new OneToManyLink(
        'PositionTimeline',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = JobFunctions;

  requestBuilder(): JobFunctionsRequestBuilder<DeSerializersT> {
    return new JobFunctionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    JobFunctions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<JobFunctions<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<JobFunctions<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof JobFunctions, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(JobFunctions, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    JOB_FUNCTION_ID: OrderableEdmTypeField<
      JobFunctions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REGULATORY_JOB_CATEGORY: EnumField<
      JobFunctions<DeSerializers>,
      DeSerializersT,
      HcmRegulatoryJobCategory,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      JobFunctions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationEligibilityRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_ELIGIBILITY_RULES: OneToManyLink<
      JobFunctions<DeSerializersT>,
      DeSerializersT,
      CompensationEligibilityRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOBS: OneToManyLink<
      JobFunctions<DeSerializersT>,
      DeSerializersT,
      JobsDualWriteApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positionTimeline} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_TIMELINE: OneToManyLink<
      JobFunctions<DeSerializersT>,
      DeSerializersT,
      PositionTimelinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<JobFunctions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link jobFunctionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_FUNCTION_ID: fieldBuilder.buildEdmTypeField(
          'JobFunctionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link regulatoryJobCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGULATORY_JOB_CATEGORY: fieldBuilder.buildEnumField(
          'RegulatoryJobCategory',
          HcmRegulatoryJobCategory,
          true
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
        ALL_FIELDS: new AllFields('*', JobFunctions)
      };
    }

    return this._schema;
  }
}
