/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkerSummaries } from './WorkerSummaries';
import { WorkerSummariesRequestBuilder } from './WorkerSummariesRequestBuilder';
import { TitlesApi } from './TitlesApi';
import { WorkersApi } from './WorkersApi';
import { BaseWorkersApi } from './BaseWorkersApi';
import { NoYes } from './NoYes';
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
export class WorkerSummariesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WorkerSummaries<DeSerializersT>, DeSerializersT>
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
  ): WorkerSummariesApi<DeSerializersT> {
    return new WorkerSummariesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link title} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TITLE: OneToOneLink<
      WorkerSummaries<DeSerializersT>,
      DeSerializersT,
      TitlesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      WorkerSummaries<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link baseWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BASE_WORKER: OneToOneLink<
      WorkerSummaries<DeSerializersT>,
      DeSerializersT,
      BaseWorkersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      TitlesApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      BaseWorkersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TITLE: new OneToOneLink('Title', this, linkedApis[0]),
      WORKER: new OneToOneLink('Worker', this, linkedApis[1]),
      BASE_WORKER: new OneToOneLink('BaseWorker', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = WorkerSummaries;

  requestBuilder(): WorkerSummariesRequestBuilder<DeSerializersT> {
    return new WorkerSummariesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WorkerSummaries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WorkerSummaries<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<WorkerSummaries<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof WorkerSummaries, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WorkerSummaries,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      WorkerSummaries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      WorkerSummaries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      WorkerSummaries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ANNIVERSARY_DATE_TIME: OrderableEdmTypeField<
      WorkerSummaries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WORKS_FROM_HOME: EnumField<
      WorkerSummaries<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TITLE_ID: OrderableEdmTypeField<
      WorkerSummaries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGINAL_HIRE_DATE_TIME: OrderableEdmTypeField<
      WorkerSummaries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    OFFICE_LOCATION: OrderableEdmTypeField<
      WorkerSummaries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUILDING_ADDRESS_ID: OrderableEdmTypeField<
      WorkerSummaries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENIORITY_DATE: OrderableEdmTypeField<
      WorkerSummaries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link title} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TITLE: OneToOneLink<
      WorkerSummaries<DeSerializersT>,
      DeSerializersT,
      TitlesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      WorkerSummaries<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link baseWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BASE_WORKER: OneToOneLink<
      WorkerSummaries<DeSerializersT>,
      DeSerializersT,
      BaseWorkersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WorkerSummaries<DeSerializers>>;
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
         * Static representation of the {@link anniversaryDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ANNIVERSARY_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'AnniversaryDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link worksFromHome} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKS_FROM_HOME: fieldBuilder.buildEnumField(
          'WorksFromHome',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link titleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE_ID: fieldBuilder.buildEdmTypeField('TitleId', 'Edm.String', true),
        /**
         * Static representation of the {@link originalHireDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_HIRE_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'OriginalHireDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link officeLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFICE_LOCATION: fieldBuilder.buildEdmTypeField(
          'OfficeLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link buildingAddressId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUILDING_ADDRESS_ID: fieldBuilder.buildEdmTypeField(
          'BuildingAddressId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link seniorityDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SENIORITY_DATE: fieldBuilder.buildEdmTypeField(
          'SeniorityDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WorkerSummaries)
      };
    }

    return this._schema;
  }
}
