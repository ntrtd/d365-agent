/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayIntV1HcmPositionDetails } from './PayIntV1HcmPositionDetails';
import { PayIntV1HcmPositionDetailsRequestBuilder } from './PayIntV1HcmPositionDetailsRequestBuilder';
import { TitlesApi } from './TitlesApi';
import { CompensationRegionsApi } from './CompensationRegionsApi';
import { JobFamiliesApi } from './JobFamiliesApi';
import { PositionsV2Api } from './PositionsV2Api';
import { JobsApi } from './JobsApi';
import { DepartmentsApi } from './DepartmentsApi';
import { PositionTypesApi } from './PositionTypesApi';
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
export class PayIntV1HcmPositionDetailsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PayIntV1HcmPositionDetails<DeSerializersT>, DeSerializersT>
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
  ): PayIntV1HcmPositionDetailsApi<DeSerializersT> {
    return new PayIntV1HcmPositionDetailsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link title} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TITLE: OneToOneLink<
      PayIntV1HcmPositionDetails<DeSerializersT>,
      DeSerializersT,
      TitlesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compensationRegion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_REGION: OneToOneLink<
      PayIntV1HcmPositionDetails<DeSerializersT>,
      DeSerializersT,
      CompensationRegionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobFamily} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_FAMILY: OneToOneLink<
      PayIntV1HcmPositionDetails<DeSerializersT>,
      DeSerializersT,
      JobFamiliesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link position} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION: OneToOneLink<
      PayIntV1HcmPositionDetails<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link job} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB: OneToOneLink<
      PayIntV1HcmPositionDetails<DeSerializersT>,
      DeSerializersT,
      JobsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link department} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPARTMENT: OneToOneLink<
      PayIntV1HcmPositionDetails<DeSerializersT>,
      DeSerializersT,
      DepartmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link positionType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_TYPE: OneToOneLink<
      PayIntV1HcmPositionDetails<DeSerializersT>,
      DeSerializersT,
      PositionTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      TitlesApi<DeSerializersT>,
      CompensationRegionsApi<DeSerializersT>,
      JobFamiliesApi<DeSerializersT>,
      PositionsV2Api<DeSerializersT>,
      JobsApi<DeSerializersT>,
      DepartmentsApi<DeSerializersT>,
      PositionTypesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TITLE: new OneToOneLink('Title', this, linkedApis[0]),
      COMPENSATION_REGION: new OneToOneLink(
        'CompensationRegion',
        this,
        linkedApis[1]
      ),
      JOB_FAMILY: new OneToOneLink('JobFamily', this, linkedApis[2]),
      POSITION: new OneToOneLink('Position', this, linkedApis[3]),
      JOB: new OneToOneLink('Job', this, linkedApis[4]),
      DEPARTMENT: new OneToOneLink('Department', this, linkedApis[5]),
      POSITION_TYPE: new OneToOneLink('PositionType', this, linkedApis[6])
    };
    return this;
  }

  entityConstructor = PayIntV1HcmPositionDetails;

  requestBuilder(): PayIntV1HcmPositionDetailsRequestBuilder<DeSerializersT> {
    return new PayIntV1HcmPositionDetailsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PayIntV1HcmPositionDetails<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PayIntV1HcmPositionDetails<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PayIntV1HcmPositionDetails<DeSerializersT>,
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
    typeof PayIntV1HcmPositionDetails,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PayIntV1HcmPositionDetails,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    POSITION_ID: OrderableEdmTypeField<
      PayIntV1HcmPositionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      PayIntV1HcmPositionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      PayIntV1HcmPositionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    POSITION_TYPE_ID: OrderableEdmTypeField<
      PayIntV1HcmPositionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PayIntV1HcmPositionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPARTMENT_NUMBER: OrderableEdmTypeField<
      PayIntV1HcmPositionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_ID: OrderableEdmTypeField<
      PayIntV1HcmPositionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_FAMILY_ID: OrderableEdmTypeField<
      PayIntV1HcmPositionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FULL_TIME_EQUIVALENT: OrderableEdmTypeField<
      PayIntV1HcmPositionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TITLE_ID: OrderableEdmTypeField<
      PayIntV1HcmPositionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AVAILABLE_FOR_ASSIGNMENT: OrderableEdmTypeField<
      PayIntV1HcmPositionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COMPENSATION_REGION_ID: OrderableEdmTypeField<
      PayIntV1HcmPositionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link title} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TITLE: OneToOneLink<
      PayIntV1HcmPositionDetails<DeSerializersT>,
      DeSerializersT,
      TitlesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compensationRegion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_REGION: OneToOneLink<
      PayIntV1HcmPositionDetails<DeSerializersT>,
      DeSerializersT,
      CompensationRegionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobFamily} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_FAMILY: OneToOneLink<
      PayIntV1HcmPositionDetails<DeSerializersT>,
      DeSerializersT,
      JobFamiliesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link position} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION: OneToOneLink<
      PayIntV1HcmPositionDetails<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link job} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB: OneToOneLink<
      PayIntV1HcmPositionDetails<DeSerializersT>,
      DeSerializersT,
      JobsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link department} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPARTMENT: OneToOneLink<
      PayIntV1HcmPositionDetails<DeSerializersT>,
      DeSerializersT,
      DepartmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link positionType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_TYPE: OneToOneLink<
      PayIntV1HcmPositionDetails<DeSerializersT>,
      DeSerializersT,
      PositionTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PayIntV1HcmPositionDetails<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link positionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_ID: fieldBuilder.buildEdmTypeField(
          'PositionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link positionTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'PositionTypeId',
          'Edm.String',
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
        /**
         * Static representation of the {@link departmentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPARTMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DepartmentNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jobId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_ID: fieldBuilder.buildEdmTypeField('JobId', 'Edm.String', true),
        /**
         * Static representation of the {@link jobFamilyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_FAMILY_ID: fieldBuilder.buildEdmTypeField(
          'JobFamilyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fullTimeEquivalent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FULL_TIME_EQUIVALENT: fieldBuilder.buildEdmTypeField(
          'FullTimeEquivalent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link titleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE_ID: fieldBuilder.buildEdmTypeField('TitleId', 'Edm.String', true),
        /**
         * Static representation of the {@link availableForAssignment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AVAILABLE_FOR_ASSIGNMENT: fieldBuilder.buildEdmTypeField(
          'AvailableForAssignment',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link compensationRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATION_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CompensationRegionId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PayIntV1HcmPositionDetails)
      };
    }

    return this._schema;
  }
}
