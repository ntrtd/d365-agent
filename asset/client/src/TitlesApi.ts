/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Titles } from './Titles';
import { TitlesRequestBuilder } from './TitlesRequestBuilder';
import { PayIntV1HcmPositionDetailsApi } from './PayIntV1HcmPositionDetailsApi';
import { WorkersApi } from './WorkersApi';
import { EmployeesApi } from './EmployeesApi';
import { ContractorsV2Api } from './ContractorsV2Api';
import { PositionDetailsApi } from './PositionDetailsApi';
import { WorkerSummariesApi } from './WorkerSummariesApi';
import { ContractorsApi } from './ContractorsApi';
import { JobsApi } from './JobsApi';
import { EmployeesV2Api } from './EmployeesV2Api';
import { PositionsApi } from './PositionsApi';
import { PositionsV2Api } from './PositionsV2Api';
import { RecruitingRequestsApi } from './RecruitingRequestsApi';
import { WorkerTitlesCurrentApi } from './WorkerTitlesCurrentApi';
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
export class TitlesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Titles<DeSerializersT>, DeSerializersT>
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
  ): TitlesApi<DeSerializersT> {
    return new TitlesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link payIntPositionDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_POSITION_DETAILS: OneToManyLink<
      Titles<DeSerializersT>,
      DeSerializersT,
      PayIntV1HcmPositionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKERS: OneToManyLink<
      Titles<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employees} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES: OneToManyLink<
      Titles<DeSerializersT>,
      DeSerializersT,
      EmployeesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link contractorsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTRACTORS_V_2: OneToManyLink<
      Titles<DeSerializersT>,
      DeSerializersT,
      ContractorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positionDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_DETAILS: OneToManyLink<
      Titles<DeSerializersT>,
      DeSerializersT,
      PositionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerTitles} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_TITLES: OneToManyLink<
      Titles<DeSerializersT>,
      DeSerializersT,
      WorkerSummariesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link contractors} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTRACTORS: OneToManyLink<
      Titles<DeSerializersT>,
      DeSerializersT,
      ContractorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOBS: OneToManyLink<
      Titles<DeSerializersT>,
      DeSerializersT,
      JobsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employeesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES_V_2: OneToManyLink<
      Titles<DeSerializersT>,
      DeSerializersT,
      EmployeesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITIONS: OneToManyLink<
      Titles<DeSerializersT>,
      DeSerializersT,
      PositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positionsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITIONS_V_2: OneToManyLink<
      Titles<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUESTS: OneToManyLink<
      Titles<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerTitleCurrent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_TITLE_CURRENT: OneToManyLink<
      Titles<DeSerializersT>,
      DeSerializersT,
      WorkerTitlesCurrentApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PayIntV1HcmPositionDetailsApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      EmployeesApi<DeSerializersT>,
      ContractorsV2Api<DeSerializersT>,
      PositionDetailsApi<DeSerializersT>,
      WorkerSummariesApi<DeSerializersT>,
      ContractorsApi<DeSerializersT>,
      JobsApi<DeSerializersT>,
      EmployeesV2Api<DeSerializersT>,
      PositionsApi<DeSerializersT>,
      PositionsV2Api<DeSerializersT>,
      RecruitingRequestsApi<DeSerializersT>,
      WorkerTitlesCurrentApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PAY_INT_POSITION_DETAILS: new OneToManyLink(
        'PayIntPositionDetails',
        this,
        linkedApis[0]
      ),
      WORKERS: new OneToManyLink('Workers', this, linkedApis[1]),
      EMPLOYEES: new OneToManyLink('Employees', this, linkedApis[2]),
      CONTRACTORS_V_2: new OneToManyLink('ContractorsV2', this, linkedApis[3]),
      POSITION_DETAILS: new OneToManyLink(
        'PositionDetails',
        this,
        linkedApis[4]
      ),
      WORKER_TITLES: new OneToManyLink('WorkerTitles', this, linkedApis[5]),
      CONTRACTORS: new OneToManyLink('Contractors', this, linkedApis[6]),
      JOBS: new OneToManyLink('Jobs', this, linkedApis[7]),
      EMPLOYEES_V_2: new OneToManyLink('EmployeesV2', this, linkedApis[8]),
      POSITIONS: new OneToManyLink('Positions', this, linkedApis[9]),
      POSITIONS_V_2: new OneToManyLink('PositionsV2', this, linkedApis[10]),
      RECRUITING_REQUESTS: new OneToManyLink(
        'RecruitingRequests',
        this,
        linkedApis[11]
      ),
      WORKER_TITLE_CURRENT: new OneToManyLink(
        'WorkerTitleCurrent',
        this,
        linkedApis[12]
      )
    };
    return this;
  }

  entityConstructor = Titles;

  requestBuilder(): TitlesRequestBuilder<DeSerializersT> {
    return new TitlesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Titles<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Titles<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Titles<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Titles, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Titles, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TITLE_ID: OrderableEdmTypeField<
      Titles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payIntPositionDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_POSITION_DETAILS: OneToManyLink<
      Titles<DeSerializersT>,
      DeSerializersT,
      PayIntV1HcmPositionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKERS: OneToManyLink<
      Titles<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employees} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES: OneToManyLink<
      Titles<DeSerializersT>,
      DeSerializersT,
      EmployeesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link contractorsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTRACTORS_V_2: OneToManyLink<
      Titles<DeSerializersT>,
      DeSerializersT,
      ContractorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positionDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_DETAILS: OneToManyLink<
      Titles<DeSerializersT>,
      DeSerializersT,
      PositionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerTitles} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_TITLES: OneToManyLink<
      Titles<DeSerializersT>,
      DeSerializersT,
      WorkerSummariesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link contractors} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTRACTORS: OneToManyLink<
      Titles<DeSerializersT>,
      DeSerializersT,
      ContractorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOBS: OneToManyLink<
      Titles<DeSerializersT>,
      DeSerializersT,
      JobsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employeesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES_V_2: OneToManyLink<
      Titles<DeSerializersT>,
      DeSerializersT,
      EmployeesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITIONS: OneToManyLink<
      Titles<DeSerializersT>,
      DeSerializersT,
      PositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positionsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITIONS_V_2: OneToManyLink<
      Titles<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUESTS: OneToManyLink<
      Titles<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerTitleCurrent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_TITLE_CURRENT: OneToManyLink<
      Titles<DeSerializersT>,
      DeSerializersT,
      WorkerTitlesCurrentApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Titles<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link titleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE_ID: fieldBuilder.buildEdmTypeField(
          'TitleId',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Titles)
      };
    }

    return this._schema;
  }
}
