/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkerEducation } from './WorkerEducation';
import { WorkerEducationRequestBuilder } from './WorkerEducationRequestBuilder';
import { PeriodUnit } from './PeriodUnit';
import { HcmEducationCreditBasis } from './HcmEducationCreditBasis';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class WorkerEducationApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WorkerEducation<DeSerializersT>, DeSerializersT>
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
  ): WorkerEducationApi<DeSerializersT> {
    return new WorkerEducationApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = WorkerEducation;

  requestBuilder(): WorkerEducationRequestBuilder<DeSerializersT> {
    return new WorkerEducationRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WorkerEducation<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WorkerEducation<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<WorkerEducation<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof WorkerEducation, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WorkerEducation,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      WorkerEducation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EDUCATION_DISCIPLINE_ID: OrderableEdmTypeField<
      WorkerEducation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EDUCATION_INSTITUTION_ID: OrderableEdmTypeField<
      WorkerEducation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EDUCATION_LEVEL_ID: OrderableEdmTypeField<
      WorkerEducation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      WorkerEducation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DURATION: OrderableEdmTypeField<
      WorkerEducation<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DURATION_UNIT: EnumField<
      WorkerEducation<DeSerializers>,
      DeSerializersT,
      PeriodUnit,
      true,
      true
    >;
    CREDITS_EARNED: OrderableEdmTypeField<
      WorkerEducation<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    GRADE_POINT_AVERAGE: OrderableEdmTypeField<
      WorkerEducation<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CREDIT_BASIS: EnumField<
      WorkerEducation<DeSerializers>,
      DeSerializersT,
      HcmEducationCreditBasis,
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      WorkerEducation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      WorkerEducation<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    GRADE_SCALE: OrderableEdmTypeField<
      WorkerEducation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDITS_COMPLETED: OrderableEdmTypeField<
      WorkerEducation<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CREDITS_NEEDED: OrderableEdmTypeField<
      WorkerEducation<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      WorkerEducation<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SECONDARY_EMPHASIS: OrderableEdmTypeField<
      WorkerEducation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<WorkerEducation<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
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
         * Static representation of the {@link educationInstitutionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EDUCATION_INSTITUTION_ID: fieldBuilder.buildEdmTypeField(
          'EducationInstitutionId',
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link duration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DURATION: fieldBuilder.buildEdmTypeField(
          'Duration',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link durationUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DURATION_UNIT: fieldBuilder.buildEnumField(
          'DurationUnit',
          PeriodUnit,
          true
        ),
        /**
         * Static representation of the {@link creditsEarned} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDITS_EARNED: fieldBuilder.buildEdmTypeField(
          'CreditsEarned',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link gradePointAverage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GRADE_POINT_AVERAGE: fieldBuilder.buildEdmTypeField(
          'GradePointAverage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link creditBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_BASIS: fieldBuilder.buildEnumField(
          'CreditBasis',
          HcmEducationCreditBasis,
          true
        ),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link gradeScale} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GRADE_SCALE: fieldBuilder.buildEdmTypeField(
          'GradeScale',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creditsCompleted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDITS_COMPLETED: fieldBuilder.buildEdmTypeField(
          'CreditsCompleted',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link creditsNeeded} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDITS_NEEDED: fieldBuilder.buildEdmTypeField(
          'CreditsNeeded',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link secondaryEmphasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECONDARY_EMPHASIS: fieldBuilder.buildEdmTypeField(
          'SecondaryEmphasis',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WorkerEducation)
      };
    }

    return this._schema;
  }
}
