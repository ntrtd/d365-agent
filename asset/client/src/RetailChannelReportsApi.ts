/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailChannelReports } from './RetailChannelReports';
import { RetailChannelReportsRequestBuilder } from './RetailChannelReportsRequestBuilder';
import { RetailTillLayoutReportZonesApi } from './RetailTillLayoutReportZonesApi';
import { RetailChannelReportVersion } from './RetailChannelReportVersion';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailChannelReportsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailChannelReports<DeSerializersT>, DeSerializersT>
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
  ): RetailChannelReportsApi<DeSerializersT> {
    return new RetailChannelReportsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link retailTillLayoutReportZone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT_REPORT_ZONE: OneToManyLink<
      RetailChannelReports<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutReportZonesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [RetailTillLayoutReportZonesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_TILL_LAYOUT_REPORT_ZONE: new OneToManyLink(
        'RetailTillLayoutReportZone',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = RetailChannelReports;

  requestBuilder(): RetailChannelReportsRequestBuilder<DeSerializersT> {
    return new RetailChannelReportsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailChannelReports<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailChannelReports<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailChannelReports<DeSerializersT>,
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
    typeof RetailChannelReports,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailChannelReports,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    REPORT_ID: OrderableEdmTypeField<
      RetailChannelReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VERSION: EnumField<
      RetailChannelReports<DeSerializers>,
      DeSerializersT,
      RetailChannelReportVersion,
      true,
      true
    >;
    REPORT_NAME: OrderableEdmTypeField<
      RetailChannelReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORT_DEFINITION_XML: OrderableEdmTypeField<
      RetailChannelReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTillLayoutReportZone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT_REPORT_ZONE: OneToManyLink<
      RetailChannelReports<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutReportZonesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailChannelReports<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link reportId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_ID: fieldBuilder.buildEdmTypeField(
          'ReportID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link version} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERSION: fieldBuilder.buildEnumField(
          'Version',
          RetailChannelReportVersion,
          true
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
         * Static representation of the {@link reportDefinitionXml} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_DEFINITION_XML: fieldBuilder.buildEdmTypeField(
          'ReportDefinitionXML',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailChannelReports)
      };
    }

    return this._schema;
  }
}
