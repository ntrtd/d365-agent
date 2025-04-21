/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { XzReports } from './XzReports';
import { XzReportsRequestBuilder } from './XzReportsRequestBuilder';
import { RetailXzReportType } from './RetailXzReportType';
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
export class XzReportsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<XzReports<DeSerializersT>, DeSerializersT>
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
  ): XzReportsApi<DeSerializersT> {
    return new XzReportsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = XzReports;

  requestBuilder(): XzReportsRequestBuilder<DeSerializersT> {
    return new XzReportsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    XzReports<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<XzReports<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<XzReports<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof XzReports, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(XzReports, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      XzReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORE_ID: OrderableEdmTypeField<
      XzReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TERMINAL_ID: OrderableEdmTypeField<
      XzReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BATCH_ID: OrderableEdmTypeField<
      XzReports<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REPORT_TYPE: EnumField<
      XzReports<DeSerializers>,
      DeSerializersT,
      RetailXzReportType,
      true,
      true
    >;
    REPORT_ID: OrderableEdmTypeField<
      XzReports<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CHANNEL: OrderableEdmTypeField<
      XzReports<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REPORT_VALUE: OrderableEdmTypeField<
      XzReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORT_DATE_TIME: OrderableEdmTypeField<
      XzReports<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<XzReports<DeSerializers>>;
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
         * Static representation of the {@link storeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE_ID: fieldBuilder.buildEdmTypeField(
          'StoreId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link terminalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMINAL_ID: fieldBuilder.buildEdmTypeField(
          'TerminalId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link batchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_ID: fieldBuilder.buildEdmTypeField('BatchId', 'Edm.Int64', false),
        /**
         * Static representation of the {@link reportType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_TYPE: fieldBuilder.buildEnumField(
          'ReportType',
          RetailXzReportType,
          true
        ),
        /**
         * Static representation of the {@link reportId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_ID: fieldBuilder.buildEdmTypeField(
          'ReportId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link channel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANNEL: fieldBuilder.buildEdmTypeField('Channel', 'Edm.Int64', false),
        /**
         * Static representation of the {@link reportValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_VALUE: fieldBuilder.buildEdmTypeField(
          'ReportValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reportDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ReportDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', XzReports)
      };
    }

    return this._schema;
  }
}
