/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LedgerMatrixDimensionReports } from './LedgerMatrixDimensionReports';
import { LedgerMatrixDimensionReportsRequestBuilder } from './LedgerMatrixDimensionReportsRequestBuilder';
import { AmountDisplaySignCn } from './AmountDisplaySignCn';
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
export class LedgerMatrixDimensionReportsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<LedgerMatrixDimensionReports<DeSerializersT>, DeSerializersT>
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
  ): LedgerMatrixDimensionReportsApi<DeSerializersT> {
    return new LedgerMatrixDimensionReportsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LedgerMatrixDimensionReports;

  requestBuilder(): LedgerMatrixDimensionReportsRequestBuilder<DeSerializersT> {
    return new LedgerMatrixDimensionReportsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LedgerMatrixDimensionReports<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LedgerMatrixDimensionReports<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LedgerMatrixDimensionReports<DeSerializersT>,
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
    typeof LedgerMatrixDimensionReports,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LedgerMatrixDimensionReports,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LedgerMatrixDimensionReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DIMENSION_MATRIX: OrderableEdmTypeField<
      LedgerMatrixDimensionReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DIMENSION_VALUE: OrderableEdmTypeField<
      LedgerMatrixDimensionReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      LedgerMatrixDimensionReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_NAME: OrderableEdmTypeField<
      LedgerMatrixDimensionReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMAT: EnumField<
      LedgerMatrixDimensionReports<DeSerializers>,
      DeSerializersT,
      AmountDisplaySignCn,
      true,
      true
    >;
    ALL_FIELDS: AllFields<LedgerMatrixDimensionReports<DeSerializers>>;
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
         * Static representation of the {@link dimensionMatrix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_MATRIX: fieldBuilder.buildEdmTypeField(
          'DimensionMatrix',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dimensionValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_VALUE: fieldBuilder.buildEdmTypeField(
          'DimensionValue',
          'Edm.String',
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
         * Static representation of the {@link dimensionName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_NAME: fieldBuilder.buildEdmTypeField(
          'DimensionName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link format} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMAT: fieldBuilder.buildEnumField(
          'Format',
          AmountDisplaySignCn,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LedgerMatrixDimensionReports)
      };
    }

    return this._schema;
  }
}
