/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { NrTaxReportSetups } from './NrTaxReportSetups';
import { NrTaxReportSetupsRequestBuilder } from './NrTaxReportSetupsRequestBuilder';
import { LvNrTaxFormNumber } from './LvNrTaxFormNumber';
import { LvNrTaxReportLineType } from './LvNrTaxReportLineType';
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
export class NrTaxReportSetupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<NrTaxReportSetups<DeSerializersT>, DeSerializersT>
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
  ): NrTaxReportSetupsApi<DeSerializersT> {
    return new NrTaxReportSetupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = NrTaxReportSetups;

  requestBuilder(): NrTaxReportSetupsRequestBuilder<DeSerializersT> {
    return new NrTaxReportSetupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    NrTaxReportSetups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<NrTaxReportSetups<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<NrTaxReportSetups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof NrTaxReportSetups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        NrTaxReportSetups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      NrTaxReportSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FORM_NUMBER: EnumField<
      NrTaxReportSetups<DeSerializers>,
      DeSerializersT,
      LvNrTaxFormNumber,
      true,
      true
    >;
    SEQUENCE_NUMBER: OrderableEdmTypeField<
      NrTaxReportSetups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      NrTaxReportSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_ID: OrderableEdmTypeField<
      NrTaxReportSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACK_MATERIAL_CODE: OrderableEdmTypeField<
      NrTaxReportSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_CODE: OrderableEdmTypeField<
      NrTaxReportSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_TYPE: EnumField<
      NrTaxReportSetups<DeSerializers>,
      DeSerializersT,
      LvNrTaxReportLineType,
      true,
      true
    >;
    TOTAL_LINE_CODE: OrderableEdmTypeField<
      NrTaxReportSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_CODE: OrderableEdmTypeField<
      NrTaxReportSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<NrTaxReportSetups<DeSerializers>>;
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
         * Static representation of the {@link formNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORM_NUMBER: fieldBuilder.buildEnumField(
          'FormNumber',
          LvNrTaxFormNumber,
          true
        ),
        /**
         * Static representation of the {@link sequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'SequenceNumber',
          'Edm.Int32',
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
         * Static representation of the {@link warehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link packMaterialCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACK_MATERIAL_CODE: fieldBuilder.buildEdmTypeField(
          'PackMaterialCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_CODE: fieldBuilder.buildEdmTypeField(
          'LineCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_TYPE: fieldBuilder.buildEnumField(
          'LineType',
          LvNrTaxReportLineType,
          true
        ),
        /**
         * Static representation of the {@link totalLineCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_LINE_CODE: fieldBuilder.buildEdmTypeField(
          'TotalLineCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CODE: fieldBuilder.buildEdmTypeField('TaxCode', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', NrTaxReportSetups)
      };
    }

    return this._schema;
  }
}
