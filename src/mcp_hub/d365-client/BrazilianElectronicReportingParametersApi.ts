/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BrazilianElectronicReportingParameters } from './BrazilianElectronicReportingParameters';
import { BrazilianElectronicReportingParametersRequestBuilder } from './BrazilianElectronicReportingParametersRequestBuilder';
import { ElectronicReportingTypeBr } from './ElectronicReportingTypeBr';
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
export class BrazilianElectronicReportingParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      BrazilianElectronicReportingParameters<DeSerializersT>,
      DeSerializersT
    >
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
  ): BrazilianElectronicReportingParametersApi<DeSerializersT> {
    return new BrazilianElectronicReportingParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BrazilianElectronicReportingParameters;

  requestBuilder(): BrazilianElectronicReportingParametersRequestBuilder<DeSerializersT> {
    return new BrazilianElectronicReportingParametersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BrazilianElectronicReportingParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BrazilianElectronicReportingParameters<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BrazilianElectronicReportingParameters<DeSerializersT>,
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
    typeof BrazilianElectronicReportingParameters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BrazilianElectronicReportingParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BrazilianElectronicReportingParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REPORT_TYPE: EnumField<
      BrazilianElectronicReportingParameters<DeSerializers>,
      DeSerializersT,
      ElectronicReportingTypeBr,
      true,
      true
    >;
    SOLUTION_NAME: OrderableEdmTypeField<
      BrazilianElectronicReportingParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MODEL_MAPPING_NAME: OrderableEdmTypeField<
      BrazilianElectronicReportingParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_URL: OrderableEdmTypeField<
      BrazilianElectronicReportingParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      BrazilianElectronicReportingParameters<DeSerializers>
    >;
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
         * Static representation of the {@link reportType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_TYPE: fieldBuilder.buildEnumField(
          'ReportType',
          ElectronicReportingTypeBr,
          true
        ),
        /**
         * Static representation of the {@link solutionName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOLUTION_NAME: fieldBuilder.buildEdmTypeField(
          'SolutionName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link modelMappingName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODEL_MAPPING_NAME: fieldBuilder.buildEdmTypeField(
          'ModelMappingName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_URL: fieldBuilder.buildEdmTypeField(
          'VendorUrl',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BrazilianElectronicReportingParameters)
      };
    }

    return this._schema;
  }
}
