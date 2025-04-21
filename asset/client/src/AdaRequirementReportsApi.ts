/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AdaRequirementReports } from './AdaRequirementReports';
import { AdaRequirementReportsRequestBuilder } from './AdaRequirementReportsRequestBuilder';
import { JobsApi } from './JobsApi';
import { JobTemplatesApi } from './JobTemplatesApi';
import { HrmAdaFrequency } from './HrmAdaFrequency';
import { HcmAdaVisualAcuity } from './HcmAdaVisualAcuity';
import { HcmAdaPhysicalRequirement } from './HcmAdaPhysicalRequirement';
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
export class AdaRequirementReportsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AdaRequirementReports<DeSerializersT>, DeSerializersT>
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
  ): AdaRequirementReportsApi<DeSerializersT> {
    return new AdaRequirementReportsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link job} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB: OneToOneLink<
      AdaRequirementReports<DeSerializersT>,
      DeSerializersT,
      JobsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobTemplate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE: OneToOneLink<
      AdaRequirementReports<DeSerializersT>,
      DeSerializersT,
      JobTemplatesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [JobsApi<DeSerializersT>, JobTemplatesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      JOB: new OneToOneLink('Job', this, linkedApis[0]),
      JOB_TEMPLATE: new OneToOneLink('JobTemplate', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = AdaRequirementReports;

  requestBuilder(): AdaRequirementReportsRequestBuilder<DeSerializersT> {
    return new AdaRequirementReportsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AdaRequirementReports<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AdaRequirementReports<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AdaRequirementReports<DeSerializersT>,
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
    typeof AdaRequirementReports,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AdaRequirementReports,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    JOB_ID: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOB_TEMPLATE_ID: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATMOSPHERIC_CONDITIONS: EnumField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    ENVIRONMENT_INSIDE_DESCRIPTION: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PULLING: EnumField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    REPORT_TITLE: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHYSICAL_ACTIVITY_GROUP: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLOSE_QUATERS_DESCRIPTION: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REACHING_DESCRIPTION: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHYSICAL_REQUIREMENT_GROUP: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ID: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BALANCING_DESCRIPTION: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADVERSE_CONDITIONS: EnumField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    OILS_DESCRIPTION: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WALKING_DESCRIPTION: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIFTING_DESCRIPTION: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENVIRONMENT_COLD_DESCRIPTION: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VIBRATION: EnumField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    RESPIRATOR: EnumField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    ENVIRONMENT_COLD: EnumField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    HAZARDS: EnumField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    REPETITIVE_MOTIONS: EnumField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    CROUCHING_DESCRIPTION: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GRASPING: EnumField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    STANDING: EnumField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    ENVIRONMENT_BOTH_DESCRIPTION: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OILS: EnumField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    FEELING: EnumField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    HEARING_DESCRIPTION: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INFECTIOUS_DISEASE: EnumField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    NOISE_DESCRIPTION: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_CONDITION_GROUP: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PUSHING: EnumField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    ENVIRONMENT_OUTSIDE: EnumField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    CROUCHING: EnumField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    ADVERSE_CONDITIONS_DESCRIPTION: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TALKING_DESCRIPTION: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOISE: EnumField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    CRAWLING: EnumField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    ENVIRONMENT_OUTSIDE_DESCRIPTION: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIFTING: EnumField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    PHYSICAL_REQUIREMENT_DESCRIPTION: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STOOPING_DESCRIPTION: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FEELING_DESCRIPTION: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PULLING_DESCRIPTION: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENVIRONMENT_BOTH: EnumField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    WALKING: EnumField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    GRASPING_DESCRIPTION: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CRAWLING_DESCRIPTION: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENVIRONMENT_HEAT_DESCRIPTION: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEARING: EnumField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    VISTUAL_ACUTIY_DESCRIPTION: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REACHING: EnumField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    VISUAL_ACUITY_GROUP: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESPIRATOR_DESCRIPTION: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STOOPING: EnumField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    NARROW_AISLES_DESCRIPTION: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VIBRATION_DESCRIPTION: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENVIRONMENT_HEAT: EnumField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    VISUAL_ACUITY: EnumField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      HcmAdaVisualAcuity,
      true,
      true
    >;
    MENTAL_PATIENTS_DESCRIPTION: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INFECTIOUS_DISEASE_DESCRIPTION: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENVIRONMENT_INSIDE: EnumField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    REPETITIVE_MOTIONS_DESCRIPTION: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    KNEELING: EnumField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    ATMOSPHERIC_CONDITIONS_DESCRIPTION: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MENTAL_PATIENTS: EnumField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    FINGERING: EnumField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    CLIMBING_DESCRIPTION: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    KNEELING_DESCRIPTION: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHYSICAL_REQUIREMENT: EnumField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      HcmAdaPhysicalRequirement,
      true,
      true
    >;
    CLIMBING: EnumField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    STANDING_DESCRIPTION: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLOSE_QUATERS: EnumField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    NARROW_AISLES: EnumField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    TALKING: EnumField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    PUSHING_DESCRIPTION: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BALANCING: EnumField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    FINGERING_DESCRIPTION: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HAZARDS_DESCRIPTION: OrderableEdmTypeField<
      AdaRequirementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link job} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB: OneToOneLink<
      AdaRequirementReports<DeSerializersT>,
      DeSerializersT,
      JobsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobTemplate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE: OneToOneLink<
      AdaRequirementReports<DeSerializersT>,
      DeSerializersT,
      JobTemplatesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AdaRequirementReports<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link jobId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_ID: fieldBuilder.buildEdmTypeField('JobId', 'Edm.String', false),
        /**
         * Static representation of the {@link jobTemplateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'JobTemplateId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link atmosphericConditions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATMOSPHERIC_CONDITIONS: fieldBuilder.buildEnumField(
          'AtmosphericConditions',
          HrmAdaFrequency,
          true
        ),
        /**
         * Static representation of the {@link environmentInsideDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENVIRONMENT_INSIDE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'EnvironmentInsideDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pulling} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PULLING: fieldBuilder.buildEnumField('Pulling', HrmAdaFrequency, true),
        /**
         * Static representation of the {@link reportTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_TITLE: fieldBuilder.buildEdmTypeField(
          'ReportTitle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link physicalActivityGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_ACTIVITY_GROUP: fieldBuilder.buildEdmTypeField(
          'PhysicalActivityGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link closeQuatersDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSE_QUATERS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'CloseQuatersDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reachingDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REACHING_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ReachingDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link physicalRequirementGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_REQUIREMENT_GROUP: fieldBuilder.buildEdmTypeField(
          'PhysicalRequirementGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('Id', 'Edm.String', true),
        /**
         * Static representation of the {@link balancingDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BALANCING_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'BalancingDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link adverseConditions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADVERSE_CONDITIONS: fieldBuilder.buildEnumField(
          'AdverseConditions',
          HrmAdaFrequency,
          true
        ),
        /**
         * Static representation of the {@link oilsDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OILS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'OilsDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link walkingDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WALKING_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'WalkingDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link liftingDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFTING_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'LiftingDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link environmentColdDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENVIRONMENT_COLD_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'EnvironmentColdDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vibration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VIBRATION: fieldBuilder.buildEnumField(
          'Vibration',
          HrmAdaFrequency,
          true
        ),
        /**
         * Static representation of the {@link respirator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPIRATOR: fieldBuilder.buildEnumField(
          'Respirator',
          HrmAdaFrequency,
          true
        ),
        /**
         * Static representation of the {@link environmentCold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENVIRONMENT_COLD: fieldBuilder.buildEnumField(
          'EnvironmentCold',
          HrmAdaFrequency,
          true
        ),
        /**
         * Static representation of the {@link hazards} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAZARDS: fieldBuilder.buildEnumField('Hazards', HrmAdaFrequency, true),
        /**
         * Static representation of the {@link repetitiveMotions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPETITIVE_MOTIONS: fieldBuilder.buildEnumField(
          'RepetitiveMotions',
          HrmAdaFrequency,
          true
        ),
        /**
         * Static representation of the {@link crouchingDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CROUCHING_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'CrouchingDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link grasping} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GRASPING: fieldBuilder.buildEnumField(
          'Grasping',
          HrmAdaFrequency,
          true
        ),
        /**
         * Static representation of the {@link standing} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STANDING: fieldBuilder.buildEnumField(
          'Standing',
          HrmAdaFrequency,
          true
        ),
        /**
         * Static representation of the {@link environmentBothDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENVIRONMENT_BOTH_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'EnvironmentBothDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link oils} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OILS: fieldBuilder.buildEnumField('Oils', HrmAdaFrequency, true),
        /**
         * Static representation of the {@link feeling} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FEELING: fieldBuilder.buildEnumField('Feeling', HrmAdaFrequency, true),
        /**
         * Static representation of the {@link hearingDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEARING_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'HearingDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link infectiousDisease} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INFECTIOUS_DISEASE: fieldBuilder.buildEnumField(
          'InfectiousDisease',
          HrmAdaFrequency,
          true
        ),
        /**
         * Static representation of the {@link noiseDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOISE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'NoiseDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workConditionGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_CONDITION_GROUP: fieldBuilder.buildEdmTypeField(
          'WorkConditionGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pushing} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PUSHING: fieldBuilder.buildEnumField('Pushing', HrmAdaFrequency, true),
        /**
         * Static representation of the {@link environmentOutside} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENVIRONMENT_OUTSIDE: fieldBuilder.buildEnumField(
          'EnvironmentOutside',
          HrmAdaFrequency,
          true
        ),
        /**
         * Static representation of the {@link crouching} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CROUCHING: fieldBuilder.buildEnumField(
          'Crouching',
          HrmAdaFrequency,
          true
        ),
        /**
         * Static representation of the {@link adverseConditionsDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADVERSE_CONDITIONS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'AdverseConditionsDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link talkingDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TALKING_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'TalkingDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link noise} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOISE: fieldBuilder.buildEnumField('Noise', HrmAdaFrequency, true),
        /**
         * Static representation of the {@link crawling} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRAWLING: fieldBuilder.buildEnumField(
          'Crawling',
          HrmAdaFrequency,
          true
        ),
        /**
         * Static representation of the {@link environmentOutsideDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENVIRONMENT_OUTSIDE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'EnvironmentOutsideDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lifting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFTING: fieldBuilder.buildEnumField('Lifting', HrmAdaFrequency, true),
        /**
         * Static representation of the {@link physicalRequirementDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_REQUIREMENT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PhysicalRequirementDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link stoopingDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOOPING_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'StoopingDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link feelingDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FEELING_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'FeelingDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pullingDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PULLING_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PullingDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link environmentBoth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENVIRONMENT_BOTH: fieldBuilder.buildEnumField(
          'EnvironmentBoth',
          HrmAdaFrequency,
          true
        ),
        /**
         * Static representation of the {@link walking} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WALKING: fieldBuilder.buildEnumField('Walking', HrmAdaFrequency, true),
        /**
         * Static representation of the {@link graspingDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GRASPING_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'GraspingDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link crawlingDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRAWLING_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'CrawlingDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link environmentHeatDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENVIRONMENT_HEAT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'EnvironmentHeatDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hearing} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEARING: fieldBuilder.buildEnumField('Hearing', HrmAdaFrequency, true),
        /**
         * Static representation of the {@link vistualAcutiyDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VISTUAL_ACUTIY_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'VistualAcutiyDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reaching} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REACHING: fieldBuilder.buildEnumField(
          'Reaching',
          HrmAdaFrequency,
          true
        ),
        /**
         * Static representation of the {@link visualAcuityGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VISUAL_ACUITY_GROUP: fieldBuilder.buildEdmTypeField(
          'VisualAcuityGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link respiratorDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPIRATOR_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'RespiratorDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link stooping} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOOPING: fieldBuilder.buildEnumField(
          'Stooping',
          HrmAdaFrequency,
          true
        ),
        /**
         * Static representation of the {@link narrowAislesDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NARROW_AISLES_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'NarrowAislesDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vibrationDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VIBRATION_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'VibrationDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link environmentHeat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENVIRONMENT_HEAT: fieldBuilder.buildEnumField(
          'EnvironmentHeat',
          HrmAdaFrequency,
          true
        ),
        /**
         * Static representation of the {@link visualAcuity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VISUAL_ACUITY: fieldBuilder.buildEnumField(
          'VisualAcuity',
          HcmAdaVisualAcuity,
          true
        ),
        /**
         * Static representation of the {@link mentalPatientsDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MENTAL_PATIENTS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'MentalPatientsDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link infectiousDiseaseDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INFECTIOUS_DISEASE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'InfectiousDiseaseDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link environmentInside} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENVIRONMENT_INSIDE: fieldBuilder.buildEnumField(
          'EnvironmentInside',
          HrmAdaFrequency,
          true
        ),
        /**
         * Static representation of the {@link repetitiveMotionsDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPETITIVE_MOTIONS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'RepetitiveMotionsDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link kneeling} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KNEELING: fieldBuilder.buildEnumField(
          'Kneeling',
          HrmAdaFrequency,
          true
        ),
        /**
         * Static representation of the {@link atmosphericConditionsDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATMOSPHERIC_CONDITIONS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'AtmosphericConditionsDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mentalPatients} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MENTAL_PATIENTS: fieldBuilder.buildEnumField(
          'MentalPatients',
          HrmAdaFrequency,
          true
        ),
        /**
         * Static representation of the {@link fingering} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINGERING: fieldBuilder.buildEnumField(
          'Fingering',
          HrmAdaFrequency,
          true
        ),
        /**
         * Static representation of the {@link climbingDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLIMBING_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ClimbingDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link kneelingDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KNEELING_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'KneelingDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link physicalRequirement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_REQUIREMENT: fieldBuilder.buildEnumField(
          'PhysicalRequirement',
          HcmAdaPhysicalRequirement,
          true
        ),
        /**
         * Static representation of the {@link climbing} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLIMBING: fieldBuilder.buildEnumField(
          'Climbing',
          HrmAdaFrequency,
          true
        ),
        /**
         * Static representation of the {@link standingDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STANDING_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'StandingDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link closeQuaters} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSE_QUATERS: fieldBuilder.buildEnumField(
          'CloseQuaters',
          HrmAdaFrequency,
          true
        ),
        /**
         * Static representation of the {@link narrowAisles} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NARROW_AISLES: fieldBuilder.buildEnumField(
          'NarrowAisles',
          HrmAdaFrequency,
          true
        ),
        /**
         * Static representation of the {@link talking} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TALKING: fieldBuilder.buildEnumField('Talking', HrmAdaFrequency, true),
        /**
         * Static representation of the {@link pushingDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PUSHING_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PushingDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link balancing} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BALANCING: fieldBuilder.buildEnumField(
          'Balancing',
          HrmAdaFrequency,
          true
        ),
        /**
         * Static representation of the {@link fingeringDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINGERING_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'FingeringDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hazardsDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAZARDS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'HazardsDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AdaRequirementReports)
      };
    }

    return this._schema;
  }
}
