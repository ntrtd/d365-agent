/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DocumentRoutingJobs } from './DocumentRoutingJobs';
import { DocumentRoutingJobsRequestBuilder } from './DocumentRoutingJobsRequestBuilder';
import { DocumentRoutingJobStatus } from './DocumentRoutingJobStatus';
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
export class DocumentRoutingJobsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DocumentRoutingJobs<DeSerializersT>, DeSerializersT>
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
  ): DocumentRoutingJobsApi<DeSerializersT> {
    return new DocumentRoutingJobsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DocumentRoutingJobs;

  requestBuilder(): DocumentRoutingJobsRequestBuilder<DeSerializersT> {
    return new DocumentRoutingJobsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DocumentRoutingJobs<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DocumentRoutingJobs<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DocumentRoutingJobs<DeSerializersT>,
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
    typeof DocumentRoutingJobs,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DocumentRoutingJobs,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    JOB_ID: OrderableEdmTypeField<
      DocumentRoutingJobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    END_PROCESS_TIME: OrderableEdmTypeField<
      DocumentRoutingJobs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACTIVITY_ID: OrderableEdmTypeField<
      DocumentRoutingJobs<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    TOTAL_NUMBER_OF_PAGES: OrderableEdmTypeField<
      DocumentRoutingJobs<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRINTER_ID: OrderableEdmTypeField<
      DocumentRoutingJobs<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    REPORT_NAME: OrderableEdmTypeField<
      DocumentRoutingJobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MESSAGE: OrderableEdmTypeField<
      DocumentRoutingJobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_ID: OrderableEdmTypeField<
      DocumentRoutingJobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_PROCESS_TIME: OrderableEdmTypeField<
      DocumentRoutingJobs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    JOB_STATUS: EnumField<
      DocumentRoutingJobs<DeSerializers>,
      DeSerializersT,
      DocumentRoutingJobStatus,
      true,
      true
    >;
    PRINTER_PATH: OrderableEdmTypeField<
      DocumentRoutingJobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINTER_NAME: OrderableEdmTypeField<
      DocumentRoutingJobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<DocumentRoutingJobs<DeSerializers>>;
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
         * Static representation of the {@link endProcessTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_PROCESS_TIME: fieldBuilder.buildEdmTypeField(
          'EndProcessTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link activityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_ID: fieldBuilder.buildEdmTypeField(
          'ActivityId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link totalNumberOfPages} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_NUMBER_OF_PAGES: fieldBuilder.buildEdmTypeField(
          'TotalNumberOfPages',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link printerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTER_ID: fieldBuilder.buildEdmTypeField(
          'PrinterId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link reportName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_NAME: fieldBuilder.buildEdmTypeField(
          'ReportName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link message} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MESSAGE: fieldBuilder.buildEdmTypeField('Message', 'Edm.String', true),
        /**
         * Static representation of the {@link companyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_ID: fieldBuilder.buildEdmTypeField(
          'CompanyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link startProcessTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_PROCESS_TIME: fieldBuilder.buildEdmTypeField(
          'StartProcessTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link jobStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_STATUS: fieldBuilder.buildEnumField(
          'JobStatus',
          DocumentRoutingJobStatus,
          true
        ),
        /**
         * Static representation of the {@link printerPath} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTER_PATH: fieldBuilder.buildEdmTypeField(
          'PrinterPath',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link printerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTER_NAME: fieldBuilder.buildEdmTypeField(
          'PrinterName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DocumentRoutingJobs)
      };
    }

    return this._schema;
  }
}
