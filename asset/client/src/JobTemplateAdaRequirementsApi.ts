/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobTemplateAdaRequirements } from './JobTemplateAdaRequirements';
import { JobTemplateAdaRequirementsRequestBuilder } from './JobTemplateAdaRequirementsRequestBuilder';
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
export class JobTemplateAdaRequirementsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<JobTemplateAdaRequirements<DeSerializersT>, DeSerializersT>
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
  ): JobTemplateAdaRequirementsApi<DeSerializersT> {
    return new JobTemplateAdaRequirementsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link job} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB: OneToOneLink<
      JobTemplateAdaRequirements<DeSerializersT>,
      DeSerializersT,
      JobTemplatesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [JobTemplatesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      JOB: new OneToOneLink('Job', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = JobTemplateAdaRequirements;

  requestBuilder(): JobTemplateAdaRequirementsRequestBuilder<DeSerializersT> {
    return new JobTemplateAdaRequirementsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    JobTemplateAdaRequirements<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      JobTemplateAdaRequirements<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    JobTemplateAdaRequirements<DeSerializersT>,
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
    typeof JobTemplateAdaRequirements,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        JobTemplateAdaRequirements,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    JOB_TEMPLATE_ID: OrderableEdmTypeField<
      JobTemplateAdaRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENVIRONMENT_OUTSIDE: EnumField<
      JobTemplateAdaRequirements<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    NOISE: EnumField<
      JobTemplateAdaRequirements<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    FEELING: EnumField<
      JobTemplateAdaRequirements<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    NARROW_AISLES: EnumField<
      JobTemplateAdaRequirements<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    ATMOSPHERIC_CONDITIONS: EnumField<
      JobTemplateAdaRequirements<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    ENVIRONMENT_HEAT: EnumField<
      JobTemplateAdaRequirements<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    OILS: EnumField<
      JobTemplateAdaRequirements<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    TALKING: EnumField<
      JobTemplateAdaRequirements<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    VISUAL_ACUITY: EnumField<
      JobTemplateAdaRequirements<DeSerializers>,
      DeSerializersT,
      HcmAdaVisualAcuity,
      true,
      true
    >;
    KNEELING: EnumField<
      JobTemplateAdaRequirements<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    STANDING: EnumField<
      JobTemplateAdaRequirements<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    ADVERSE_CONDITIONS: EnumField<
      JobTemplateAdaRequirements<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    BALANCING: EnumField<
      JobTemplateAdaRequirements<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    CROUCHING: EnumField<
      JobTemplateAdaRequirements<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    CLIMBING: EnumField<
      JobTemplateAdaRequirements<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    LIFTING: EnumField<
      JobTemplateAdaRequirements<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    MENTAL_PATIENTS: EnumField<
      JobTemplateAdaRequirements<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    HAZARDS: EnumField<
      JobTemplateAdaRequirements<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    VIBRATION: EnumField<
      JobTemplateAdaRequirements<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    REPETITIVE_MOTIONS: EnumField<
      JobTemplateAdaRequirements<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    CRAWLING: EnumField<
      JobTemplateAdaRequirements<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    ENVIRONMENT_COLD: EnumField<
      JobTemplateAdaRequirements<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    PULLING: EnumField<
      JobTemplateAdaRequirements<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    GRASPING: EnumField<
      JobTemplateAdaRequirements<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    RESPIRATOR: EnumField<
      JobTemplateAdaRequirements<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    WALKING: EnumField<
      JobTemplateAdaRequirements<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    FINGERING: EnumField<
      JobTemplateAdaRequirements<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    HEARING: EnumField<
      JobTemplateAdaRequirements<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    REACHING: EnumField<
      JobTemplateAdaRequirements<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    PUSHING: EnumField<
      JobTemplateAdaRequirements<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    STOOPING: EnumField<
      JobTemplateAdaRequirements<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    PHYSICAL_REQUIREMENT: EnumField<
      JobTemplateAdaRequirements<DeSerializers>,
      DeSerializersT,
      HcmAdaPhysicalRequirement,
      true,
      true
    >;
    INFECTIOUS_DISEASE: EnumField<
      JobTemplateAdaRequirements<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    ENVIRONMENT_INSIDE: EnumField<
      JobTemplateAdaRequirements<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    CLOSE_QUATERS: EnumField<
      JobTemplateAdaRequirements<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    ENVIRONMENT_BOTH: EnumField<
      JobTemplateAdaRequirements<DeSerializers>,
      DeSerializersT,
      HrmAdaFrequency,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link job} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB: OneToOneLink<
      JobTemplateAdaRequirements<DeSerializersT>,
      DeSerializersT,
      JobTemplatesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<JobTemplateAdaRequirements<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link environmentOutside} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENVIRONMENT_OUTSIDE: fieldBuilder.buildEnumField(
          'EnvironmentOutside',
          HrmAdaFrequency,
          true
        ),
        /**
         * Static representation of the {@link noise} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOISE: fieldBuilder.buildEnumField('Noise', HrmAdaFrequency, true),
        /**
         * Static representation of the {@link feeling} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FEELING: fieldBuilder.buildEnumField('Feeling', HrmAdaFrequency, true),
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
         * Static representation of the {@link atmosphericConditions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATMOSPHERIC_CONDITIONS: fieldBuilder.buildEnumField(
          'AtmosphericConditions',
          HrmAdaFrequency,
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
         * Static representation of the {@link oils} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OILS: fieldBuilder.buildEnumField('Oils', HrmAdaFrequency, true),
        /**
         * Static representation of the {@link talking} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TALKING: fieldBuilder.buildEnumField('Talking', HrmAdaFrequency, true),
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
         * Static representation of the {@link kneeling} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KNEELING: fieldBuilder.buildEnumField(
          'Kneeling',
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
         * Static representation of the {@link adverseConditions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADVERSE_CONDITIONS: fieldBuilder.buildEnumField(
          'AdverseConditions',
          HrmAdaFrequency,
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
         * Static representation of the {@link crouching} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CROUCHING: fieldBuilder.buildEnumField(
          'Crouching',
          HrmAdaFrequency,
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
         * Static representation of the {@link lifting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFTING: fieldBuilder.buildEnumField('Lifting', HrmAdaFrequency, true),
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
         * Static representation of the {@link hazards} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAZARDS: fieldBuilder.buildEnumField('Hazards', HrmAdaFrequency, true),
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
         * Static representation of the {@link repetitiveMotions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPETITIVE_MOTIONS: fieldBuilder.buildEnumField(
          'RepetitiveMotions',
          HrmAdaFrequency,
          true
        ),
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
         * Static representation of the {@link environmentCold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENVIRONMENT_COLD: fieldBuilder.buildEnumField(
          'EnvironmentCold',
          HrmAdaFrequency,
          true
        ),
        /**
         * Static representation of the {@link pulling} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PULLING: fieldBuilder.buildEnumField('Pulling', HrmAdaFrequency, true),
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
         * Static representation of the {@link respirator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPIRATOR: fieldBuilder.buildEnumField(
          'Respirator',
          HrmAdaFrequency,
          true
        ),
        /**
         * Static representation of the {@link walking} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WALKING: fieldBuilder.buildEnumField('Walking', HrmAdaFrequency, true),
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
         * Static representation of the {@link hearing} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEARING: fieldBuilder.buildEnumField('Hearing', HrmAdaFrequency, true),
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
         * Static representation of the {@link pushing} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PUSHING: fieldBuilder.buildEnumField('Pushing', HrmAdaFrequency, true),
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
         * Static representation of the {@link physicalRequirement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_REQUIREMENT: fieldBuilder.buildEnumField(
          'PhysicalRequirement',
          HcmAdaPhysicalRequirement,
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
         * Static representation of the {@link environmentInside} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENVIRONMENT_INSIDE: fieldBuilder.buildEnumField(
          'EnvironmentInside',
          HrmAdaFrequency,
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
         * Static representation of the {@link environmentBoth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENVIRONMENT_BOTH: fieldBuilder.buildEnumField(
          'EnvironmentBoth',
          HrmAdaFrequency,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', JobTemplateAdaRequirements)
      };
    }

    return this._schema;
  }
}
