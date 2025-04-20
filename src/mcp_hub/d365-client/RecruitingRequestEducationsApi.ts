/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RecruitingRequestEducations } from './RecruitingRequestEducations';
import { RecruitingRequestEducationsRequestBuilder } from './RecruitingRequestEducationsRequestBuilder';
import { EducationLevelsApi } from './EducationLevelsApi';
import { EducationDisciplinesApi } from './EducationDisciplinesApi';
import { RecruitingRequestsApi } from './RecruitingRequestsApi';
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
export class RecruitingRequestEducationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RecruitingRequestEducations<DeSerializersT>, DeSerializersT>
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
  ): RecruitingRequestEducationsApi<DeSerializersT> {
    return new RecruitingRequestEducationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link educationLevel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EDUCATION_LEVEL: OneToOneLink<
      RecruitingRequestEducations<DeSerializersT>,
      DeSerializersT,
      EducationLevelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link educationDiscipline} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EDUCATION_DISCIPLINE: OneToOneLink<
      RecruitingRequestEducations<DeSerializersT>,
      DeSerializersT,
      EducationDisciplinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link recruitingRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUEST: OneToOneLink<
      RecruitingRequestEducations<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EducationLevelsApi<DeSerializersT>,
      EducationDisciplinesApi<DeSerializersT>,
      RecruitingRequestsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      EDUCATION_LEVEL: new OneToOneLink('EducationLevel', this, linkedApis[0]),
      EDUCATION_DISCIPLINE: new OneToOneLink(
        'EducationDiscipline',
        this,
        linkedApis[1]
      ),
      RECRUITING_REQUEST: new OneToOneLink(
        'RecruitingRequest',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = RecruitingRequestEducations;

  requestBuilder(): RecruitingRequestEducationsRequestBuilder<DeSerializersT> {
    return new RecruitingRequestEducationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RecruitingRequestEducations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RecruitingRequestEducations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RecruitingRequestEducations<DeSerializersT>,
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
    typeof RecruitingRequestEducations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RecruitingRequestEducations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RecruitingRequestEducations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RECRUITING_REQUEST_ID: OrderableEdmTypeField<
      RecruitingRequestEducations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EDUCATION_LEVEL_ID: OrderableEdmTypeField<
      RecruitingRequestEducations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EDUCATION_DISCIPLINE_ID: OrderableEdmTypeField<
      RecruitingRequestEducations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EDUCATION_DISCIPLINE_DESCRIPTION: OrderableEdmTypeField<
      RecruitingRequestEducations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EDUCATION_LEVEL_DESCRIPTION: OrderableEdmTypeField<
      RecruitingRequestEducations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link educationLevel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EDUCATION_LEVEL: OneToOneLink<
      RecruitingRequestEducations<DeSerializersT>,
      DeSerializersT,
      EducationLevelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link educationDiscipline} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EDUCATION_DISCIPLINE: OneToOneLink<
      RecruitingRequestEducations<DeSerializersT>,
      DeSerializersT,
      EducationDisciplinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link recruitingRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUEST: OneToOneLink<
      RecruitingRequestEducations<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RecruitingRequestEducations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link recruitingRequestId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECRUITING_REQUEST_ID: fieldBuilder.buildEdmTypeField(
          'RecruitingRequestId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link educationLevelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EDUCATION_LEVEL_ID: fieldBuilder.buildEdmTypeField(
          'EducationLevelId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link educationDisciplineId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EDUCATION_DISCIPLINE_ID: fieldBuilder.buildEdmTypeField(
          'EducationDisciplineId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link educationDisciplineDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EDUCATION_DISCIPLINE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'EducationDisciplineDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link educationLevelDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EDUCATION_LEVEL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'EducationLevelDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RecruitingRequestEducations)
      };
    }

    return this._schema;
  }
}
