/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LtmSalesPoints } from './LtmSalesPoints';
import { LtmSalesPointsRequestBuilder } from './LtmSalesPointsRequestBuilder';
import { LtmSalesPointType } from './LtmSalesPointType';
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
export class LtmSalesPointsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LtmSalesPoints<DeSerializersT>, DeSerializersT>
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
  ): LtmSalesPointsApi<DeSerializersT> {
    return new LtmSalesPointsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LtmSalesPoints;

  requestBuilder(): LtmSalesPointsRequestBuilder<DeSerializersT> {
    return new LtmSalesPointsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LtmSalesPoints<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LtmSalesPoints<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<LtmSalesPoints<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof LtmSalesPoints, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(LtmSalesPoints, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LtmSalesPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_POINT_ID: OrderableEdmTypeField<
      LtmSalesPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_POINT_TYPE: EnumField<
      LtmSalesPoints<DeSerializers>,
      DeSerializersT,
      LtmSalesPointType,
      true,
      true
    >;
    VALIDATE_CAI: EnumField<
      LtmSalesPoints<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANSFER_TO_TREASURY: EnumField<
      LtmSalesPoints<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REPORT_ID: OrderableEdmTypeField<
      LtmSalesPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_POINT_PREFIX: OrderableEdmTypeField<
      LtmSalesPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTE_3: OrderableEdmTypeField<
      LtmSalesPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTE_2: OrderableEdmTypeField<
      LtmSalesPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTE_1: OrderableEdmTypeField<
      LtmSalesPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_POINT_DESCRIPTION: OrderableEdmTypeField<
      LtmSalesPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<LtmSalesPoints<DeSerializers>>;
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
         * Static representation of the {@link salesPointId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_POINT_ID: fieldBuilder.buildEdmTypeField(
          'SalesPointId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link salesPointType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_POINT_TYPE: fieldBuilder.buildEnumField(
          'SalesPointType',
          LtmSalesPointType,
          true
        ),
        /**
         * Static representation of the {@link validateCai} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_CAI: fieldBuilder.buildEnumField('ValidateCAI', NoYes, true),
        /**
         * Static representation of the {@link transferToTreasury} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_TO_TREASURY: fieldBuilder.buildEnumField(
          'TransferToTreasury',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link reportId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_ID: fieldBuilder.buildEdmTypeField(
          'ReportId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesPointPrefix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_POINT_PREFIX: fieldBuilder.buildEdmTypeField(
          'SalesPointPrefix',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link note3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE_3: fieldBuilder.buildEdmTypeField('Note3', 'Edm.String', true),
        /**
         * Static representation of the {@link note2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE_2: fieldBuilder.buildEdmTypeField('Note2', 'Edm.String', true),
        /**
         * Static representation of the {@link note1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE_1: fieldBuilder.buildEdmTypeField('Note1', 'Edm.String', true),
        /**
         * Static representation of the {@link salesPointDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_POINT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'SalesPointDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LtmSalesPoints)
      };
    }

    return this._schema;
  }
}
