/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Kitting_ReportParameters } from './Kitting_ReportParameters';
import { Kitting_ReportParametersRequestBuilder } from './Kitting_ReportParametersRequestBuilder';
import { SalesPurch } from './SalesPurch';
import { KittingReportType } from './KittingReportType';
import { TableGroupAll } from './TableGroupAll';
import { KittingKitReportMode } from './KittingKitReportMode';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class Kitting_ReportParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Kitting_ReportParameters<DeSerializersT>, DeSerializersT>
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
  ): Kitting_ReportParametersApi<DeSerializersT> {
    return new Kitting_ReportParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Kitting_ReportParameters;

  requestBuilder(): Kitting_ReportParametersRequestBuilder<DeSerializersT> {
    return new Kitting_ReportParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Kitting_ReportParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      Kitting_ReportParameters<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    Kitting_ReportParameters<DeSerializersT>,
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
    typeof Kitting_ReportParameters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        Kitting_ReportParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      Kitting_ReportParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_PURCH: EnumField<
      Kitting_ReportParameters<DeSerializers>,
      DeSerializersT,
      SalesPurch,
      true,
      true
    >;
    REPORT_TYPE: EnumField<
      Kitting_ReportParameters<DeSerializers>,
      DeSerializersT,
      KittingReportType,
      true,
      true
    >;
    VALID_FOR: EnumField<
      Kitting_ReportParameters<DeSerializers>,
      DeSerializersT,
      TableGroupAll,
      true,
      true
    >;
    ITEM_RELATION: OrderableEdmTypeField<
      Kitting_ReportParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRINT_MODE: EnumField<
      Kitting_ReportParameters<DeSerializers>,
      DeSerializersT,
      KittingKitReportMode,
      true,
      true
    >;
    KIT_HEADER: EnumField<
      Kitting_ReportParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<Kitting_ReportParameters<DeSerializers>>;
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
         * Static representation of the {@link salesPurch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PURCH: fieldBuilder.buildEnumField(
          'SalesPurch',
          SalesPurch,
          true
        ),
        /**
         * Static representation of the {@link reportType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_TYPE: fieldBuilder.buildEnumField(
          'ReportType',
          KittingReportType,
          true
        ),
        /**
         * Static representation of the {@link validFor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FOR: fieldBuilder.buildEnumField('ValidFor', TableGroupAll, true),
        /**
         * Static representation of the {@link itemRelation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_RELATION: fieldBuilder.buildEdmTypeField(
          'ItemRelation',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link printMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_MODE: fieldBuilder.buildEnumField(
          'PrintMode',
          KittingKitReportMode,
          true
        ),
        /**
         * Static representation of the {@link kitHeader} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KIT_HEADER: fieldBuilder.buildEnumField('KitHeader', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Kitting_ReportParameters)
      };
    }

    return this._schema;
  }
}
