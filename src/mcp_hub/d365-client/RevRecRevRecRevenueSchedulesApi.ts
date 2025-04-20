/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RevRecRevRecRevenueSchedules } from './RevRecRevRecRevenueSchedules';
import { RevRecRevRecRevenueSchedulesRequestBuilder } from './RevRecRevRecRevenueSchedulesRequestBuilder';
import { NoYes } from './NoYes';
import { RevRecRecognitionBasis } from './RevRecRecognitionBasis';
import { RevRecRecognitionConvention } from './RevRecRecognitionConvention';
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
export class RevRecRevRecRevenueSchedulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RevRecRevRecRevenueSchedules<DeSerializersT>, DeSerializersT>
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
  ): RevRecRevRecRevenueSchedulesApi<DeSerializersT> {
    return new RevRecRevRecRevenueSchedulesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RevRecRevRecRevenueSchedules;

  requestBuilder(): RevRecRevRecRevenueSchedulesRequestBuilder<DeSerializersT> {
    return new RevRecRevRecRevenueSchedulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RevRecRevRecRevenueSchedules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RevRecRevRecRevenueSchedules<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RevRecRevRecRevenueSchedules<DeSerializersT>,
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
    typeof RevRecRevRecRevenueSchedules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RevRecRevRecRevenueSchedules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RevRecRevRecRevenueSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REVENUE_SCHEDULE_ID: OrderableEdmTypeField<
      RevRecRevRecRevenueSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AUTO_HOLD: EnumField<
      RevRecRevRecRevenueSchedules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RECOGNITION_BASIS: EnumField<
      RevRecRevRecRevenueSchedules<DeSerializers>,
      DeSerializersT,
      RevRecRecognitionBasis,
      true,
      true
    >;
    OCCURRENCES: OrderableEdmTypeField<
      RevRecRevRecRevenueSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    AUTO_CONTRACT_TERMS: EnumField<
      RevRecRevRecRevenueSchedules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RevRecRevRecRevenueSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECOGNITION_CONVENTION: EnumField<
      RevRecRevRecRevenueSchedules<DeSerializers>,
      DeSerializersT,
      RevRecRecognitionConvention,
      true,
      true
    >;
    ALL_FIELDS: AllFields<RevRecRevRecRevenueSchedules<DeSerializers>>;
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
         * Static representation of the {@link revenueScheduleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVENUE_SCHEDULE_ID: fieldBuilder.buildEdmTypeField(
          'RevenueScheduleID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link autoHold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_HOLD: fieldBuilder.buildEnumField('AutoHold', NoYes, true),
        /**
         * Static representation of the {@link recognitionBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECOGNITION_BASIS: fieldBuilder.buildEnumField(
          'RecognitionBasis',
          RevRecRecognitionBasis,
          true
        ),
        /**
         * Static representation of the {@link occurrences} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OCCURRENCES: fieldBuilder.buildEdmTypeField(
          'Occurrences',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link autoContractTerms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_CONTRACT_TERMS: fieldBuilder.buildEnumField(
          'AutoContractTerms',
          NoYes,
          true
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
         * Static representation of the {@link recognitionConvention} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECOGNITION_CONVENTION: fieldBuilder.buildEnumField(
          'RecognitionConvention',
          RevRecRecognitionConvention,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RevRecRevRecRevenueSchedules)
      };
    }

    return this._schema;
  }
}
