/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RecruitingRequestPositions } from './RecruitingRequestPositions';
import { RecruitingRequestPositionsRequestBuilder } from './RecruitingRequestPositionsRequestBuilder';
import { PositionsV2Api } from './PositionsV2Api';
import { DepartmentsApi } from './DepartmentsApi';
import { RecruitingRequestsApi } from './RecruitingRequestsApi';
import { PositionTypesApi } from './PositionTypesApi';
import { BaseWorkersApi } from './BaseWorkersApi';
import { HcmRecruitingRequestPositionStatus } from './HcmRecruitingRequestPositionStatus';
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
export class RecruitingRequestPositionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RecruitingRequestPositions<DeSerializersT>, DeSerializersT>
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
  ): RecruitingRequestPositionsApi<DeSerializersT> {
    return new RecruitingRequestPositionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link reportsToPosition} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPORTS_TO_POSITION: OneToOneLink<
      RecruitingRequestPositions<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link position} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION: OneToOneLink<
      RecruitingRequestPositions<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link department} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPARTMENT: OneToOneLink<
      RecruitingRequestPositions<DeSerializersT>,
      DeSerializersT,
      DepartmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link recruitingRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUEST: OneToOneLink<
      RecruitingRequestPositions<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link positionType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_TYPE: OneToOneLink<
      RecruitingRequestPositions<DeSerializersT>,
      DeSerializersT,
      PositionTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link reportsToWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPORTS_TO_WORKER: OneToOneLink<
      RecruitingRequestPositions<DeSerializersT>,
      DeSerializersT,
      BaseWorkersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PositionsV2Api<DeSerializersT>,
      PositionsV2Api<DeSerializersT>,
      DepartmentsApi<DeSerializersT>,
      RecruitingRequestsApi<DeSerializersT>,
      PositionTypesApi<DeSerializersT>,
      BaseWorkersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      REPORTS_TO_POSITION: new OneToOneLink(
        'ReportsToPosition',
        this,
        linkedApis[0]
      ),
      POSITION: new OneToOneLink('Position', this, linkedApis[1]),
      DEPARTMENT: new OneToOneLink('Department', this, linkedApis[2]),
      RECRUITING_REQUEST: new OneToOneLink(
        'RecruitingRequest',
        this,
        linkedApis[3]
      ),
      POSITION_TYPE: new OneToOneLink('PositionType', this, linkedApis[4]),
      REPORTS_TO_WORKER: new OneToOneLink(
        'ReportsToWorker',
        this,
        linkedApis[5]
      )
    };
    return this;
  }

  entityConstructor = RecruitingRequestPositions;

  requestBuilder(): RecruitingRequestPositionsRequestBuilder<DeSerializersT> {
    return new RecruitingRequestPositionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RecruitingRequestPositions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RecruitingRequestPositions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RecruitingRequestPositions<DeSerializersT>,
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
    typeof RecruitingRequestPositions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RecruitingRequestPositions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RecruitingRequestPositions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RECRUITING_REQUEST_ID: OrderableEdmTypeField<
      RecruitingRequestPositions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POSITION_ID: OrderableEdmTypeField<
      RecruitingRequestPositions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FINANCIAL_DIMENSION: OrderableEdmTypeField<
      RecruitingRequestPositions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSITION_TYPE_ID: OrderableEdmTypeField<
      RecruitingRequestPositions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      RecruitingRequestPositions<DeSerializers>,
      DeSerializersT,
      HcmRecruitingRequestPositionStatus,
      true,
      true
    >;
    REPORTS_TO_PERSONNEL_NUMBER: OrderableEdmTypeField<
      RecruitingRequestPositions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RecruitingRequestPositions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTS_TO_POSITION_ID: OrderableEdmTypeField<
      RecruitingRequestPositions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPARTMENT_NUMBER: OrderableEdmTypeField<
      RecruitingRequestPositions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link reportsToPosition} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPORTS_TO_POSITION: OneToOneLink<
      RecruitingRequestPositions<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link position} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION: OneToOneLink<
      RecruitingRequestPositions<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link department} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPARTMENT: OneToOneLink<
      RecruitingRequestPositions<DeSerializersT>,
      DeSerializersT,
      DepartmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link recruitingRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUEST: OneToOneLink<
      RecruitingRequestPositions<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link positionType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_TYPE: OneToOneLink<
      RecruitingRequestPositions<DeSerializersT>,
      DeSerializersT,
      PositionTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link reportsToWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPORTS_TO_WORKER: OneToOneLink<
      RecruitingRequestPositions<DeSerializersT>,
      DeSerializersT,
      BaseWorkersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RecruitingRequestPositions<DeSerializers>>;
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
         * Static representation of the {@link positionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_ID: fieldBuilder.buildEdmTypeField(
          'PositionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link financialDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINANCIAL_DIMENSION: fieldBuilder.buildEdmTypeField(
          'FinancialDimension',
          'Edm.String',
          true
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
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          HcmRecruitingRequestPositionStatus,
          true
        ),
        /**
         * Static representation of the {@link reportsToPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTS_TO_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReportsToPersonnelNumber',
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
         * Static representation of the {@link reportsToPositionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTS_TO_POSITION_ID: fieldBuilder.buildEdmTypeField(
          'ReportsToPositionId',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RecruitingRequestPositions)
      };
    }

    return this._schema;
  }
}
