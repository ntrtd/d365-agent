/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendDlvLeadTimePredictionResults } from './VendDlvLeadTimePredictionResults';
import { VendDlvLeadTimePredictionResultsRequestBuilder } from './VendDlvLeadTimePredictionResultsRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class VendDlvLeadTimePredictionResultsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<VendDlvLeadTimePredictionResults<DeSerializersT>, DeSerializersT>
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
  ): VendDlvLeadTimePredictionResultsApi<DeSerializersT> {
    return new VendDlvLeadTimePredictionResultsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = VendDlvLeadTimePredictionResults;

  requestBuilder(): VendDlvLeadTimePredictionResultsRequestBuilder<DeSerializersT> {
    return new VendDlvLeadTimePredictionResultsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    VendDlvLeadTimePredictionResults<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VendDlvLeadTimePredictionResults<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendDlvLeadTimePredictionResults<DeSerializersT>,
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
    typeof VendDlvLeadTimePredictionResults,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendDlvLeadTimePredictionResults,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    HASH_KEY: OrderableEdmTypeField<
      VendDlvLeadTimePredictionResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXPLAINABILITY: OrderableEdmTypeField<
      VendDlvLeadTimePredictionResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_DATA_AREA_ID: OrderableEdmTypeField<
      VendDlvLeadTimePredictionResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      VendDlvLeadTimePredictionResults<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SCORED_DATE: OrderableEdmTypeField<
      VendDlvLeadTimePredictionResults<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MODEL_ID: OrderableEdmTypeField<
      VendDlvLeadTimePredictionResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_ID: OrderableEdmTypeField<
      VendDlvLeadTimePredictionResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIKELIHOODS: OrderableEdmTypeField<
      VendDlvLeadTimePredictionResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<VendDlvLeadTimePredictionResults<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link hashKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HASH_KEY: fieldBuilder.buildEdmTypeField(
          'HashKey',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link explainability} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPLAINABILITY: fieldBuilder.buildEdmTypeField(
          'Explainability',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link referenceDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'ReferenceDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link scoredDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCORED_DATE: fieldBuilder.buildEdmTypeField(
          'ScoredDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link modelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODEL_ID: fieldBuilder.buildEdmTypeField('ModelId', 'Edm.String', true),
        /**
         * Static representation of the {@link purchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_ID: fieldBuilder.buildEdmTypeField('PurchId', 'Edm.String', true),
        /**
         * Static representation of the {@link likelihoods} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIKELIHOODS: fieldBuilder.buildEdmTypeField(
          'Likelihoods',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendDlvLeadTimePredictionResults)
      };
    }

    return this._schema;
  }
}
